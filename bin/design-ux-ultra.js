#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');
const { scaffold, TEMPLATES_MAP } = require('../scripts/scaffold-ui');
const { auditFile } = require('../scripts/audit-design');
const { exportTokens } = require('../scripts/export-figma-tokens');

const VERSION = '1.1.0';

function showHelp() {
  console.log(`
\x1b[1m\x1b[35m╔════════════════════════════════════════════════════════════╗
║             DESIGN UX ULTRA SKILL CLI (v${VERSION})            ║
║  1,000+ Figma Community Templates & Anti-Vibe Engine       ║
╚════════════════════════════════════════════════════════════╝\x1b[0m

\x1b[1mUsage:\x1b[0m
  design-ux-ultra <command> [options]

\x1b[1mCommands:\x1b[0m
  \x1b[32mlist\x1b[0m                          List standalone core templates & archetypes
  \x1b[32mcategories\x1b[0m                    View all 13 categories across 1,000+ Figma templates
  \x1b[32msearch <query>\x1b[0m                Search 1,135 Figma templates by keyword, domain, or archetype
  \x1b[32mscaffold <template> [output]\x1b[0m   Copy a production-ready archetype into your project
  \x1b[32maudit <file>\x1b[0m                  Audit a webpage/component against UX & accessibility heuristics
  \x1b[32mexport-tokens [format] [out]\x1b[0m  Export Figma design tokens as CSS variables or JSON
  \x1b[32minstall [target]\x1b[0m              Install this skill into your AI coding agent (antigravity/claude/cursor)
  \x1b[32mhelp\x1b[0m                          Display this help manual

\x1b[1mExamples:\x1b[0m
  npx design-ux-ultra search "fintech"
  npx design-ux-ultra search "bento"
  npx design-ux-ultra categories
  npx design-ux-ultra scaffold saas-landing src/index.html
  npx design-ux-ultra audit src/index.html
  npx design-ux-ultra install antigravity
`);
}

function listTemplates() {
  console.log('\n\x1b[1m\x1b[36m=== Ready-to-Use Standalone Core Templates ===\x1b[0m\n');
  for (const [key, relPath] of Object.entries(TEMPLATES_MAP)) {
    console.log(`  \x1b[32m${key.padEnd(18)}\x1b[0m -> ${relPath}`);
  }
  console.log('\n\x1b[35mTo search the full 1,135 Figma Community templates catalog:\x1b[0m');
  console.log('  \x1b[33mdesign-ux-ultra search <keyword>\x1b[0m or \x1b[33mdesign-ux-ultra categories\x1b[0m\n');
}

function showCategories() {
  const catalogPath = path.resolve(__dirname, '../templates/registry/templates-catalog.json');
  if (!fs.existsSync(catalogPath)) {
    console.error('[Error] templates-catalog.json not found.');
    return;
  }
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
  console.log(`\n\x1b[1m\x1b[36m=== 1,000+ Figma Community Templates Catalog (${catalog.meta.total_count} Total) ===\x1b[0m\n`);
  
  catalog.categories.forEach((cat, idx) => {
    console.log(`  \x1b[32m${String(idx + 1).padStart(2, '0')}. ${cat.name.padEnd(30)}\x1b[0m : \x1b[1m${cat.count} templates\x1b[0m`);
    console.log(`      \x1b[90mSources: ${cat.primary_sources.join(', ')}\x1b[0m`);
  });
  console.log('\nUse: \x1b[33mdesign-ux-ultra search <keyword>\x1b[0m to inspect matching templates.\n');
}

function searchCatalog(query) {
  if (!query) {
    console.log('Please provide a search keyword. Example: design-ux-ultra search fintech');
    return;
  }
  const catalogPath = path.resolve(__dirname, '../templates/registry/templates-catalog.json');
  if (!fs.existsSync(catalogPath)) {
    console.error('[Error] templates-catalog.json not found.');
    return;
  }
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
  const q = query.toLowerCase();

  const results = catalog.templates.filter(t => 
    t.name.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.archetype.toLowerCase().includes(q) ||
    t.source_inspiration.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.includes(q))
  );

  console.log(`\n\x1b[1m\x1b[36mSearch results for "${query}" (${results.length} matches):\x1b[0m\n`);
  if (results.length === 0) {
    console.log('  No matching templates found. Try searching for: "saas", "hero", "bento", "fintech", "table", "pricing".');
    return;
  }

  results.slice(0, 20).forEach(t => {
    console.log(`  \x1b[32m[${t.id}]\x1b[0m \x1b[1m${t.name}\x1b[0m`);
    console.log(`     \x1b[90mCategory: ${t.category} | Source: ${t.source_inspiration}\x1b[0m`);
  });

  if (results.length > 20) {
    console.log(`\n  ... and ${results.length - 20} more matching templates in templates/registry/templates-catalog.json`);
  }
  console.log('');
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

  const filesToCopy = ['SKILL.md', 'README.md', 'LICENSE', 'package.json'];
  filesToCopy.forEach(file => {
    const src = path.join(repoDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(targetSkillDir, file));
    }
  });

  ['assets', 'docs', 'references', 'rules', 'templates', 'scripts'].forEach(folder => {
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
  case 'categories':
    showCategories();
    break;
  case 'search':
    searchCatalog(arg1);
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
