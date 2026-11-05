#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const TEMPLATES_MAP = {
  'saas-landing': 'templates/landing-pages/ultra-saas-landing.html',
  'portfolio-landing': 'templates/landing-pages/ultra-portfolio-landing.html',
  'bento-hero': 'templates/heroes/bento-aurora-hero.html',
  'spatial-hero': 'templates/heroes/spatial-saas-hero.html',
  'kinetic-hero': 'templates/heroes/kinetic-minimal-hero.html',
  'floating-nav': 'templates/navigation/floating-island-navbar.html',
  'mega-menu': 'templates/navigation/dynamic-mega-menu.html',
  'bento-grid': 'templates/features/interactive-bento-grid.html',
  'scrollytelling': 'templates/features/scrollytelling-showcase.html',
  'dashboard': 'templates/dashboards/analytics-bento-dashboard.html',
  'buttons': 'templates/components/interactive-buttons.html',
  'cards': 'templates/components/card-variants.html',
  'feedback': 'templates/components/feedback-states.html',
  'wizard': 'templates/components/form-wizard-flows.html',
  'tokens': 'templates/design-tokens/tokens.json',
  'tailwind-preset': 'templates/design-tokens/tailwind.config.preset.js',
  'theme-css': 'templates/design-tokens/theme.css',
  'bootstrap-components': 'templates/components/bootstrap-hybrid-components.html',
  'bootstrap-nav': 'templates/navigation/bootstrap-offcanvas-navbar.html',
  'floating-forms': 'templates/components/floating-label-forms.html'
};

function scaffold(templateKey, outputPath) {
  const rootDir = path.resolve(__dirname, '..');
  const relPath = TEMPLATES_MAP[templateKey];

  if (!relPath) {
    console.error(`[Error] Unknown template: "${templateKey}".`);
    console.log(`Available templates:\n  ${Object.keys(TEMPLATES_MAP).join('\n  ')}`);
    process.exit(1);
  }

  const srcPath = path.join(rootDir, relPath);
  if (!fs.existsSync(srcPath)) {
    console.error(`[Error] Source template not found at ${srcPath}`);
    process.exit(1);
  }

  const targetDir = path.dirname(path.resolve(outputPath));
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const content = fs.readFileSync(srcPath, 'utf-8');
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`\x1b[32m✔ Successfully scaffolded [${templateKey}] into: ${outputPath}\x1b[0m`);
}

module.exports = { scaffold, TEMPLATES_MAP };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('Usage: node scaffold-ui.js <template-key> <output-file>');
    console.log('Available templates: ' + Object.keys(TEMPLATES_MAP).join(', '));
    process.exit(1);
  }
  scaffold(args[0], args[1]);
}
