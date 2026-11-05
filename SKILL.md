---
name: design-ux-ultra-skill
description: "World-class UI/UX design engine for coding AI agents. Synthesizes trending Dribbble visual aesthetics, award-winning Made in Webflow kinetic interactions, Mockplus UX wireframing heuristics, and Figma Community auto-layout token design systems. Use whenever designing, building, revamping, styling, or auditing web interfaces, landing pages, SaaS dashboards, or component systems."
version: 1.0.0
author: "Tejpal Singh Jodha"
category: design-ux
risk: safe
tags: [ui, ux, web-design, dribbble, webflow, mockplus, figma, design-system, tailwind, gsap, accessibility]
tools: [antigravity, claude, codex, cursor, copilot, windsurf]
license: "MIT"
---

# Design UX Ultra Skill

The definitive UI/UX design intelligence skill for AI coding agents. When prompted to create, redesign, or polish a website or application interface, this skill commands the agent to think and code like an elite multidisciplinary design engineer: marrying **Dribbble's** visual flair and micro-delights, **Webflow's** kinetic scrollytelling and fluid responsiveness, **Mockplus's** user-journey heuristics and information architecture, and **Figma Community's** token-driven component architecture.

---

## When to Use This Skill

Activate this skill immediately whenever the user asks to:
- **Build a new website or landing page** from scratch (SaaS, portfolio, e-commerce, developer tool, agency).
- **Design or revamp a web interface, dashboard, or component** to make it look professional, modern, and high-converting.
- **Implement animations, micro-interactions, or kinetic scroll effects** (Webflow/GSAP style).
- **Establish or audit a design system**, design tokens, typography scale, or color palette (Figma-level tokenization).
- **Improve UI/UX, usability, navigation, or visual hierarchy** using proven UX heuristics (Mockplus/Nielsen Norman).
- **Eliminate generic, template-looking ("slop") UI** and replace it with bespoke, tactile, spatial interfaces.

---

## The 4 Pillars of Design UX Ultra

```
                   ┌────────────────────────────────────────┐
                   │        DESIGN UX ULTRA ENGINE          │
                   └──────────────────┬─────────────────────┘
                                      │
     ┌──────────────────┬─────────────┴──────────────┬──────────────────┐
     ▼                  ▼                            ▼                  ▼
┌──────────────┐ ┌───────────────┐          ┌────────────────┐ ┌────────────────┐
│   DRIBBLE    │ │    WEBFLOW    │          │    MOCKPLUS    │ │ FIGMA COMM.    │
│ Visual Flair │ │ Kinetic UX    │          │ UX Heuristics  │ │ Design Tokens  │
├──────────────┤ ├───────────────┤          ├────────────────┤ ├────────────────┤
│• Aurora Glow │ │• GSAP Scroll  │          │• Fitts's Law   │ │• Token Tiers   │
│• Bento Grids │ │• Scrollytell  │          │• Hick's Law    │ │• Auto Layout   │
│• Glassmorphic│ │• Magnetic CTA │          │• Jakob's Flow  │ │• Variant States│
│• Micro-Tilt  │ │• Clamp Fonts  │          │• WCAG AA/AAA   │ │• Container Qs  │
└──────────────┘ └───────────────┘          └────────────────┘ └────────────────┘
```

1. **Dribbble Visual Engine (`references/dribbble-visual-engine.md`)**:
   - High visual density with breathing room, Bento grid asymmetry, glowing borders, frosted glass (`backdrop-filter: blur(16px)`), depth elevation, and bespoke typography contrast.
2. **Webflow Interaction Matrix (`references/webflow-interaction-matrix.md`)**:
   - Scroll-driven choreography, sticky reveals, spring physics, cursor-following magnetic buttons, fluid typography (`clamp()`), and stagger animations.
3. **Mockplus UX Heuristics (`references/mockplus-ux-heuristics.md`)**:
   - User journey mapping, zero-ambiguity hierarchy, reduced cognitive load (chunking 5-7 items), instant feedback loops, empty states, and WCAG AA/AAA color contrast.
4. **Figma Token Architecture (`references/figma-token-architecture.md`)**:
   - 3-tier token hierarchy (`primitive` -> `semantic` -> `component`), variant state matrices (`default`, `hover`, `active`, `focus-visible`, `disabled`, `loading`), and strict 8pt spatial grid alignment.

---

## 5-Step Execution Workflow for AI Agents

Whenever tasked with building or styling a website, follow this disciplined sequence:

### Step 1: Archetype & Persona Diagnosis
Identify the product category and select its corresponding design archetype:
- **SaaS / DevTool**: High-contrast dark mode or slate-light mode, Bento grid, live terminal/metrics preview, subtle grid lines, pill badges.
- **Agency / Creative / Portfolio**: Kinetic typography, large hero headlines, smooth GSAP image cards, cursor follower, editorial layout.
- **E-Commerce / Consumer**: Clean product cards, high-contrast CTA, sticky buy bar, trust badges, micro-zoom on hover.
- **Enterprise / FinTech**: Crisp typography, high density, accessible data tables, subtle elevation, restrained accent color.

### Step 2: Establish Design Tokens
Never hardcode arbitrary hex colors or pixel spacings. Always define or adhere to semantic CSS variables or Tailwind tokens:
- **Color Scale**: Primary brand (60%), Surface neutrals (30%), Accent call-to-action (10%).
- **Typography Scale**: Major Third (1.25) or Perfect Fourth (1.333) scale using fluid `clamp()` values.
- **Spatial Grid**: All padding, margin, and gaps MUST be multiples of 4px / 8px (`0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`).

### Step 3: Scaffold Information Architecture & Wireframe
Structure the page for natural reading eye-flow (Z-pattern for landing pages, F-pattern for content-heavy dashboards):
1. **Sticky Floating Island Navigation** (Brand logo + anchored links + prominent CTA).
2. **High-Impact Hero Section** (Category eyebrow badge + H1 value proposition with highlighted gradient text + supporting paragraph + dual CTAs + social proof badges).
3. **Interactive Hero Visual / Bento Preview** (Glassmorphic card, live UI demonstration, or interactive preview).
4. **Logo Cloud / Social Proof** (Monochrome logos with subtle hover opacity transition).
5. **Core Value Bento Grid** (Asymmetrical cards with 1 hero feature card, 2 medium cards, 2 compact metric cards).
6. **Kinetic Feature Scrollytelling or Deep-Dive Tabs** (Interactive tab switches or sticky scrolling).
7. **Social Proof & Metrics Grid** (Animated count-up numbers + authentic testimonial quotes with avatars).
8. **Frictionless Pricing or Interactive Calculator** (Billing toggle: Monthly / Annual with discount pill).
9. **Accordion FAQ** (Collapsible with smooth height transitions and clear answers).
10. **High-Conversion Bottom CTA Banner** (Aurora background glow, compelling guarantee, immediate sign-up).
11. **Comprehensive Footer** (Categorized navigation, newsletter subscription, legal links, status indicator).

### Step 4: Implement Kinetic & Micro-Interactions
Elevate the UI from a flat static page into a living, tactile product:
- **Buttons**: Magnetic cursor pull (`translate3d`), active scale depress (`scale(0.98)`), inner shimmer glow on hover.
- **Cards**: 3D perspective mouse-tilt (`perspective(1000px) rotateX(...) rotateY(...)`), subtle border spotlight glow tracking mouse position.
- **Scroll Reveals**: Intersection Observer or GSAP ScrollTrigger for staggered opacity + translateY reveals (`y: 24, opacity: 0 -> y: 0, opacity: 1`).
- **Interactive Toggles**: Spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for tabs, toggles, and drawers.

### Step 5: Accessibility & Heuristic Verification
Run an automated mental audit before delivering code:
- [ ] Contrast ratio is at least 4.5:1 for body text and 3:1 for large headlines.
- [ ] Tap/click targets are at least 44x44px on mobile devices.
- [ ] All interactive elements have visible `:focus-visible` rings with proper outline offset.
- [ ] Reduced motion query (`@media (prefers-reduced-motion: reduce)`) is respected.
- [ ] Page is fully responsive across Mobile (375px), Tablet (768px), Laptop (1024px), and Desktop (1440px+).

---

## Quick Reference Templates

Explore ready-to-use production templates in `templates/`:
- **Heroes**: `templates/heroes/bento-aurora-hero.html`, `templates/heroes/spatial-saas-hero.html`, `templates/heroes/kinetic-minimal-hero.html`
- **Navigation**: `templates/navigation/floating-island-navbar.html`, `templates/navigation/dynamic-mega-menu.html`
- **Features**: `templates/features/interactive-bento-grid.html`, `templates/features/scrollytelling-showcase.html`
- **Dashboards**: `templates/dashboards/analytics-bento-dashboard.html`
- **Components**: `templates/components/interactive-buttons.html`, `templates/components/card-variants.html`, `templates/components/feedback-states.html`, `templates/components/form-wizard-flows.html`
- **Full Landing Pages**: `templates/landing-pages/ultra-saas-landing.html`, `templates/landing-pages/ultra-portfolio-landing.html`
- **Design Tokens**: `templates/design-tokens/tokens.json`, `templates/design-tokens/tailwind.config.preset.js`

---

## CLI Utilities

Use the built-in CLI for rapid agent workflow execution:
```bash
# List all available archetypes and templates
node bin/design-ux-ultra.js list

# Scaffold a complete SaaS landing page into your project
node bin/design-ux-ultra.js scaffold saas-landing --framework html

# Audit an existing HTML or component file for UX and contrast issues
node bin/design-ux-ultra.js audit src/index.html

# Export design tokens to Tailwind preset or CSS variables
node bin/design-ux-ultra.js export-tokens --format tailwind
```

---

## Detailed Reference Documentation

For in-depth mastery, load these specialized guides on demand:
- **`references/dribbble-visual-engine.md`**: Color grading, aurora glows, bento architecture, glassmorphism specs.
- **`references/webflow-interaction-matrix.md`**: GSAP ScrollTrigger recipes, magnetic button physics, fluid typography.
- **`references/mockplus-ux-heuristics.md`**: Information architecture, 10 Nielsen heuristics, onboarding user flows.
- **`references/figma-token-architecture.md`**: Design tokens, variant states, auto-layout flexbox mental models.
- **`references/responsive-spatial-grid.md`**: 8pt spacing grid, fluid clamp math, responsive breakpoints.
