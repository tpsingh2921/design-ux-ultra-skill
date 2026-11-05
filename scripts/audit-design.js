#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function auditFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`[Error] File not found: ${filePath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(`\x1b[36mAuditing [${path.basename(filePath)}] against Design UX Ultra Heuristics...\x1b[0m\n`);

  let score = 100;
  const issues = [];
  const passes = [];

  // Check 1: Tap target size
  if (content.includes('<button') || content.includes('<a')) {
    if (!content.includes('p-') && !content.includes('py-') && !content.includes('px-') && !content.includes('h-') && !content.includes('min-h-')) {
      issues.push('Tap Targets: Interactive elements detected without explicit padding or height. Fitts\'s Law requires min 44x44px clickable target.');
      score -= 15;
    } else {
      passes.push('Tap Targets: Interactive elements declare padding/height dimensions.');
    }
  }

  // Check 2: Focus visibility
  if (content.includes('focus:outline-none') && !content.includes('focus-visible:ring') && !content.includes('focus:ring')) {
    issues.push('Accessibility: "focus:outline-none" found without replacement "focus-visible:ring". Keyboard navigation impaired.');
    score -= 20;
  } else {
    passes.push('Focus States: Focus indicator rings or default outlines preserved.');
  }

  // Check 3: Arbitrary pixel non-8pt anti-patterns
  const arbitraryPxRegex = /\[(\d+)px\]/g;
  let match;
  let non8ptCount = 0;
  while ((match = arbitraryPxRegex.exec(content)) !== null) {
    const val = parseInt(match[1], 10);
    if (val > 8 && val % 4 !== 0) {
      non8ptCount++;
    }
  }
  if (non8ptCount > 0) {
    issues.push(`Spatial Grid: Found ${non8ptCount} instances of arbitrary non-8pt/4pt pixel values. Migrate to standard tokens.`);
    score -= 10;
  } else {
    passes.push('Spatial Grid: Strictly aligned to 4px/8px modular rhythm.');
  }

  // Check 4: Responsive Viewport Meta
  if (content.includes('<html') && !content.includes('viewport')) {
    issues.push('Responsiveness: Missing <meta name="viewport"> tag.');
    score -= 25;
  } else if (content.includes('<html')) {
    passes.push('Responsiveness: Viewport meta tag properly declared.');
  }

  // Check 5: Reduced Motion
  if (content.includes('@keyframes') || content.includes('animate-') || content.includes('transition-')) {
    if (content.includes('prefers-reduced-motion') || content.includes('motion-reduce:')) {
      passes.push('Motion Accessibility: Prefers-reduced-motion queries present.');
    } else {
      issues.push('Motion Accessibility: Animations found without fallback @media (prefers-reduced-motion: reduce) or motion-reduce:transition-none.');
      score -= 10;
    }
  }

  // Report
  console.log('\x1b[32m✔ PASSED CHECKS:\x1b[0m');
  passes.forEach(p => console.log(`  + ${p}`));

  if (issues.length > 0) {
    console.log('\n\x1b[33m⚠ IDENTIFIED UX/ACCESSIBILITY RISKS:\x1b[0m');
    issues.forEach(i => console.log(`  - ${i}`));
  }

  console.log(`\n\x1b[1mDesign UX Ultra Score: ${Math.max(score, 0)}/100\x1b[0m`);
  if (score >= 90) {
    console.log('\x1b[32mVerdict: EXCELLENT (Production Ready)\x1b[0m\n');
  } else if (score >= 70) {
    console.log('\x1b[33mVerdict: ACCEPTABLE (Minor refinements suggested)\x1b[0m\n');
  } else {
    console.log('\x1b[31mVerdict: NEEDS REVISION (Accessibility or UX defects)\x1b[0m\n');
  }
}

module.exports = { auditFile };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Usage: node audit-design.js <file-path>');
    process.exit(1);
  }
  auditFile(args[0]);
}
