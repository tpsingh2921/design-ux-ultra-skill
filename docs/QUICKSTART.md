# Quickstart Guide &bull; Design UX Ultra Skill

Install and activate **Design UX Ultra Skill** in under 2 minutes across any coding AI agent.

---

## 1. Installation

### Option A: Install via Antigravity / Gemini CLI
```bash
# Clone the repository
git clone https://github.com/tpsingh2101/design-ux-ultra-skill.git

# Install directly into Antigravity global skills directory
node bin/design-ux-ultra.js install antigravity
```

### Option B: Install for Claude Code
```bash
node bin/design-ux-ultra.js install claude
```

### Option C: Install for Cursor / Windsurf
```bash
node bin/design-ux-ultra.js install cursor
```
This automatically links `.cursorrules` and copies the `design-ux-ultra-skill` folder into `.cursor/skills/`.

---

## 2. Activating the Skill in Prompting

Once installed, your AI agent automatically activates this skill whenever you ask for frontend work. You can also trigger it explicitly:

```markdown
"Using design-ux-ultra-skill, create a high-converting dark-mode landing page for our new AI observability engine. Include a floating island navbar, an aurora bento hero with live metric preview, and an accordion FAQ."
```

```markdown
"Redesign our SaaS dashboard using design-ux-ultra-skill. Apply the 8pt spatial grid, 3-tier Figma token system, and frosted glassmorphic card variants."
```

```markdown
"Audit src/index.html using design-ux-ultra-skill heuristics and eliminate any accessibility or contrast defects."
```

---

## 3. Using the Built-In CLI

You can also scaffold archetypes and audit files directly in terminal:

```bash
# List all 17 pre-built templates and archetypes
npx design-ux-ultra list

# Scaffold a production SaaS landing page into index.html
npx design-ux-ultra scaffold saas-landing public/index.html

# Scaffold the Bento Aurora hero into a React component
npx design-ux-ultra scaffold bento-hero components/Hero.html

# Run a heuristic & accessibility audit
npx design-ux-ultra audit public/index.html

# Export design tokens to CSS variables
npx design-ux-ultra export-tokens css styles/tokens.css
```
