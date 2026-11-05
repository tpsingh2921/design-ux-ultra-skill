# Design UX Ultra Skill &bull; `design-ux-ultra-skill`

<p align="center">
  <img src="https://img.shields.io/badge/Agent%20Skills-Standard%20Compliant-6366f1?style=for-the-badge&logo=anthropic&logoColor=white" alt="Agent Skills Standard" />
  <img src="https://img.shields.io/badge/Version-1.0.0-06b6d4?style=for-the-badge" alt="Version" />
  <img src="https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge" alt="MIT License" />
  <img src="https://img.shields.io/badge/Compatibility-Antigravity%20|%20Claude%20|%20Cursor%20|%20Codex%20|%20Windsurf-ec4899?style=for-the-badge" alt="Compatibility" />
</p>

> **The universal UI/UX design intelligence skill for coding AI agents.** Synthesizes trending **Dribbble** visual aesthetics, award-winning **Made in Webflow** kinetic interactions, **Mockplus** UX wireframing heuristics, and **Figma Community** auto-layout token design systems directly into your AI coding workflows.

---

## ⚡ What is Design UX Ultra Skill?

Base coding AI agents often generate flat, generic, outdated ("slop") frontend mockups with boring gray containers, awkward paddings, and lifeless interactions.

**Design UX Ultra Skill** permanently solves this. By installing this skill into your AI coding agent (Antigravity, Claude Code, Cursor, Codex, GitHub Copilot, Windsurf), you equip the agent with a four-pillar design intelligence engine:

```
                      ┌────────────────────────────────────────┐
                      │        DESIGN UX ULTRA ENGINE          │
                      └──────────────────┬─────────────────────┘
                                         │
        ┌──────────────────┬─────────────┴──────────────┬──────────────────┐
        ▼                  ▼                            ▼                  ▼
┌──────────────┐ ┌───────────────┐          ┌────────────────┐ ┌────────────────┐
│   DRIBBBLE   │ │    WEBFLOW    │          │    MOCKPLUS    │ │ FIGMA COMM.    │
│ Visual Flair │ │  Kinetic UX   │          │ UX Heuristics  │ │ Design Tokens  │
├──────────────┤ ├───────────────┤          ├────────────────┤ ├────────────────┤
│• Aurora Glow │ │• GSAP Scroll  │          │• Fitts's Law   │ │• Token Tiers   │
│• Bento Grids │ │• Scrollytell  │          │• Hick's Law    │ │• Auto Layout   │
│• Glassmorphic│ │• Magnetic CTA │          │• Jakob's Flow  │ │• Variant States│
│• 3D Tilt     │ │• Clamp Fonts  │          │• WCAG AA/AAA   │ │• Container Qs  │
└──────────────┘ └───────────────┘          └────────────────┘ └────────────────┘
```

---

## 🎯 The 4 Foundational Pillars

### 1. 🎨 Dribbble Popular Web Design
- **Spatial Lighting & Aurora Glows**: Dynamic radial gradient backdrops with glowing halos (`radial-gradient(at 15% 15%, rgba(99, 102, 241, 0.15) 0px, transparent 50%)`).
- **Frosted Acrylic Glassmorphism**: `backdrop-filter: blur(16px) saturate(180%)` with delicate 1px directional border strokes.
- **Asymmetrical Bento Grids**: Modular visual hierarchy with hero feature cards, metric tiles, and telemetry previews.
- **Tactile 3D Tilt**: Perspective mouse-tracking on cards (`perspective(1000px) rotateX(...) rotateY(...)`).

### 2. 🌊 Made in Webflow UX/UI
- **Kinetic Interactions**: Smooth spring curves (`cubic-bezier(0.16, 1, 0.3, 1)`) and hardware-accelerated transforms (`translate3d`).
- **Scrollytelling & Sticky Stacking**: Paced visual storytelling as users scroll down the page.
- **Magnetic Buttons**: CTAs that gently pull toward the cursor, giving physical resistance and weight.
- **Fluid Clamp Typography**: Responsive font sizes calculated via mathematical clamp formulas without jumpy media queries:
  $$\text{fontSize} = \text{clamp}(V_{\min}, \text{Slope} \cdot \text{ViewportWidth} + \text{Base}, V_{\max})$$

### 3. 📐 Mockplus UX Heuristics & Prototyping
- **Fitts's Law**: High-salience primary CTAs with guaranteed minimum 44×44px tap targets.
- **Hick's Law**: Single primary decision focus per viewport, reducing cognitive anxiety.
- **System Feedback Loops**: Instant visual acknowledgement (<100ms), shimmering skeleton loaders, and contextual empty states.
- **Accessibility & Contrast**: Built-in verification ensuring WCAG 2.2 AA (4.5:1 text contrast) and AAA compliance.

### 4. ❖ Figma Community UI Kits & Design Tokens
- **3-Tier Token Taxonomy**: Primitives (`indigo-500: #6366f1`) &rarr; Semantics (`color-brand-primary`) &rarr; Components (`button-primary-bg`).
- **Auto Layout Mental Models**: Flexbox and CSS Grid layouts with explicit Hug, Fill, and Min/Max constraints.
- **6-State Component Variants**: Every component includes `default`, `hover`, `active`, `focus-visible`, `disabled`, and `loading` states.
- **8pt Spatial Grid**: All margins, paddings, and gaps are strict multiples of 4px / 8px.

---

## 🚀 Quickstart & Installation

### Option 1: Install into Antigravity / Gemini CLI
```bash
# Clone the repository
git clone https://github.com/tpsingh2921/design-ux-ultra-skill.git
cd design-ux-ultra-skill

# Run the installer
node bin/design-ux-ultra.js install antigravity
```

### Option 2: Install into Claude Code
```bash
node bin/design-ux-ultra.js install claude
```

### Option 3: Install into Cursor / Windsurf
```bash
node bin/design-ux-ultra.js install cursor
```
This automatically links `.cursorrules` and registers the skill in `.cursor/skills/`.

---

## 💬 How to Prompt Your AI Coding Agent

Once installed, your agent automatically knows how to construct high-end interfaces. You can also trigger it explicitly:

```text
"Using design-ux-ultra-skill, create a high-converting dark-mode landing page for our new AI observability platform. Include a floating island navbar, an aurora bento hero with live telemetry, and an accordion FAQ."
```

```text
"Redesign our SaaS dashboard using design-ux-ultra-skill. Apply the 8pt spatial grid, 3-tier Figma token system, and frosted glassmorphic card variants."
```

```text
"Audit src/index.html with design-ux-ultra-skill heuristics and eliminate any accessibility or contrast defects."
```

---

## 📦 Ready-to-Use Archetypes & Templates

All templates in `templates/` are production-ready, fully responsive, and standalone:

| Archetype / Template | File Location | Key Inspiration |
|---|---|---|
| **Ultra SaaS Landing Page** | [`templates/landing-pages/ultra-saas-landing.html`](templates/landing-pages/ultra-saas-landing.html) | Dribbble + Webflow + Mockplus |
| **Ultra Portfolio Landing** | [`templates/landing-pages/ultra-portfolio-landing.html`](templates/landing-pages/ultra-portfolio-landing.html) | Webflow Showcase + Minimal Kinetic |
| **Bento Aurora Hero** | [`templates/heroes/bento-aurora-hero.html`](templates/heroes/bento-aurora-hero.html) | Dribbble Aurora Lighting + Telemetry |
| **Spatial SaaS Hero** | [`templates/heroes/spatial-saas-hero.html`](templates/heroes/spatial-saas-hero.html) | 3D Perspective Browser Chrome |
| **Kinetic Minimal Hero** | [`templates/heroes/kinetic-minimal-hero.html`](templates/heroes/kinetic-minimal-hero.html) | Creative Agency Editorial Typography |
| **Floating Island Navbar** | [`templates/navigation/floating-island-navbar.html`](templates/navigation/floating-island-navbar.html) | Glassmorphic Island with Search Shortcut |
| **Dynamic Mega Menu** | [`templates/navigation/dynamic-mega-menu.html`](templates/navigation/dynamic-mega-menu.html) | Multi-column Product Flyout |
| **Interactive Bento Grid** | [`templates/features/interactive-bento-grid.html`](templates/features/interactive-bento-grid.html) | Asymmetrical 12-col Bento Layout |
| **Scrollytelling Showcase** | [`templates/features/scrollytelling-showcase.html`](templates/features/scrollytelling-showcase.html) | Progressive Disclosure Timeline |
| **Analytics Dashboard** | [`templates/dashboards/analytics-bento-dashboard.html`](templates/dashboards/analytics-bento-dashboard.html) | Executive SaaS KPI & Telemetry Console |
| **Tactile Buttons** | [`templates/components/interactive-buttons.html`](templates/components/interactive-buttons.html) | Shimmer, Magnetic, Glass, & Loading |
| **Card Variants** | [`templates/components/card-variants.html`](templates/components/card-variants.html) | Acrylic Glass & Gradient Border Spotlight |
| **Feedback States** | [`templates/components/feedback-states.html`](templates/components/feedback-states.html) | Skeleton Shimmer, Empty States, Toasts |
| **Form Wizard Flow** | [`templates/components/form-wizard-flows.html`](templates/components/form-wizard-flows.html) | Low-friction 3-step Onboarding Form |
| **3-Tier Design Tokens** | [`templates/design-tokens/tokens.json`](templates/design-tokens/tokens.json) | Figma Variables (Primitive & Semantic) |
| **Tailwind Preset** | [`templates/design-tokens/tailwind.config.preset.js`](templates/design-tokens/tailwind.config.preset.js) | Plug-and-play Tailwind Theme Config |
| **Theme CSS** | [`templates/design-tokens/theme.css`](templates/design-tokens/theme.css) | Standalone CSS Variables & Fluid Math |

---

## 🛠️ CLI Tool Reference

The repository includes a zero-dependency Node.js CLI tool:

```bash
# List all templates
npx design-ux-ultra list

# Scaffold an archetype into your project
npx design-ux-ultra scaffold saas-landing public/index.html
npx design-ux-ultra scaffold bento-hero components/Hero.html

# Audit any webpage/component against UX heuristics & accessibility
npx design-ux-ultra audit public/index.html

# Export Figma tokens to CSS variables
npx design-ux-ultra export-tokens css styles/tokens.css

# Install skill to another coding agent
npx design-ux-ultra install claude
```

---

## 📚 Specialized Reference Documentation

Load specialized guides on-demand for deep implementation details:
- [**`references/dribbble-visual-engine.md`**](references/dribbble-visual-engine.md) &mdash; Color lighting, aurora gradients, bento grids, glassmorphism specs.
- [**`references/webflow-interaction-matrix.md`**](references/webflow-interaction-matrix.md) &mdash; GSAP ScrollTrigger recipes, magnetic button physics, fluid typography math.
- [**`references/mockplus-ux-heuristics.md`**](references/mockplus-ux-heuristics.md) &mdash; Psychological UX laws, information architecture, feedback states.
- [**`references/figma-token-architecture.md`**](references/figma-token-architecture.md) &mdash; 3-tier token hierarchy, component variant matrices, auto-layout mental models.
- [**`references/responsive-spatial-grid.md`**](references/responsive-spatial-grid.md) &mdash; 8pt spacing grid rhythm, viewport constraints, touch ergonomics.

---

## 📄 License

MIT &copy; 2026 Tejpal Singh Jodha. Open-source and free for personal and commercial usage across all AI coding agents.
