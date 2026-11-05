#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');
const { scaffold, TEMPLATES_MAP } = require('../scripts/scaffold-ui');
const { auditFile } = require('../scripts/audit-design');
const { exportTokens } = require('../scripts/export-figma-tokens');

const VERSION = '1.0.0';

function showHelp() {
  console.log(`
\x1b[1m\x1b[35m╔════════════════════════════════════════════════════════════╗
║             DESIGN UX ULTRA SKILL CLI (v${VERSION})            ║
║  Dribbble + Webflow + Mockplus + Figma for Coding Agents   ║
╚════════════════════════════════════════════════════════════╝\x1b[0m

\x1b[1mUsage:\x1b[0m
  design-ux-ultra <command> [options]

\x1b[1mCommands:\x1b[0m
  \x1b[32mlist\x1b[0m                          List all available archetypes, patterns & templates
  \x1b[32mscaffold <template> [output]\x1b[0m   Copy a production-ready archetype into your project
  \x1b[32maudit <file>\x1b[0m                  Audit a webpage/component against UX & accessibility heuristics
  \x1b[32mexport-tokens [format] [out]\x1b[0m  Export Figma design tokens as CSS variables or JSON
  \x1b[32minstall [target]\x1b[0m              Install this skill into your AI coding agent (antigravity/claude/cursor)
  \x1b[32mhelp\x1b[0m                          Display this help manual

\x1b[1mExamples:\x1b[0m
  npx design-ux-ultra list
  npx design-ux-ultra scaffold saas-landing src/index.html
  npx design-ux-ultra scaffold bento-hero components/Hero.html
  npx design-ux-ultra audit src/index.html
  npx design-ux-ultra install antigravity
`);
}

function listTemplates() {
  console.log('\n\x1b[1m\x1b[36m=== Available Design UX Ultra Archetypes & Templates ===\x1b[0m\n');
  for (const [key, relPath] of Object.entries(TEMPLATES_MAP)) {
    console.log(`  \x1b[32m${key.padEnd(18)}\x1b[0m -> ${relPath}`);
  }
  console.log('\nUse: \x1b[33mdesign-ux-ultra scaffold <key> <destination-file>\x1b[0m\n');
}

function installSkill(target = 'antigravity') {
  const homeDir = os.homedir();
  const repoDir = path.resolve(__dirname, '..');
  
  let targetSkillDir = '';
  if (target === 'antigravity' || target === 'gemini') {
    targetSkillDir = path.join(homeDir, '.gemini', 'config', 'skills', 'design-ux-ultra-skill');
  } else if (target === 'claude') {
    targetSkillDir = path.join(homeDir, '.claude', 'skills', 'design-ux-ultra-skill');
  } else if (target === 'cursor') {
    targetSkillDir = path.join(process.cwd(), '.cursor', 'skills', 'design-ux-ultra-skill');
  } else {
    targetSkillDir = path.join(process.cwd(), '.agents', 'skills', 'design-ux-ultra-skill');
  }

  console.log(`\x1b[36mInstalling Design UX Ultra Skill to: ${targetSkillDir}...\x1b[0m`);
  
  if (!fs.existsSync(targetSkillDir)) {
    fs.mkdirSync(targetSkillDir, { recursive: true });
  }

  // Copy SKILL.md and necessary references
  const filesToCopy = ['SKILL.md', 'README.md', 'LICENSE', 'package.json'];
  filesToCopy.forEach(file => {
    const src = path.join(repoDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(targetSkillDir, file));
    }
  });

  // Copy references, rules, and templates directories
  ['references', 'rules', 'templates', 'scripts'].forEach(folder => {
    const srcFolder = path.join(repoDir, folder);
    const dstFolder = path.join(targetSkillDir, folder);
    if (fs.existsSync(srcFolder)) {
      copyRecursive(srcFolder, dstFolder);
    }
  });

  console.log(`\x1b[32m✔ Successfully installed Design UX Ultra Skill for [${target}]!\x1b[0m`);
  console.log(`Any AI coding agent using this directory will now automatically employ Dribbble/Webflow/Mockplus/Figma design intelligence.\n`);
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Main execution
const [,, cmd, arg1, arg2] = process.argv;

switch (cmd) {
  case 'list':
    listTemplates();
    break;
  case 'scaffold':
    if (!arg1) {
      console.error('[Error] Please specify template name. Run "design-ux-ultra list" to see options.');
      process.exit(1);
    }
    const dest = arg2 || `${arg1}.html`;
    scaffold(arg1, dest);
    break;
  case 'audit':
    if (!arg1) {
      console.error('[Error] Please specify file path to audit. Example: design-ux-ultra audit index.html');
      process.exit(1);
    }
    auditFile(arg1);
    break;
  case 'export-tokens':
    exportTokens(arg1 || 'css', arg2);
    break;
  case 'install':
    installSkill(arg1 || 'antigravity');
    break;
  case 'help':
  case '--help':
  case '-h':
  case undefined:
    showHelp();
    break;
  default:
    console.error(`[Error] Unknown command: "${cmd}". Run "design-ux-ultra help" for available commands.`);
    process.exit(1);
}
