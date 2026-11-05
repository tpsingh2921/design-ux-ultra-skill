# 1,000+ Figma Community Templates & Anti-Vibe-Coding Architecture

This directory details the catalog of **1,425 production templates and component patterns** synthesized from top-tier, free Figma Community UI kits (Untitled UI, shadcn/ui, Flowbite, TailAdmin, Horizon UI, Relume, Cruip, Apple HIG, and Material 3), Bootstrap 5 core grid archetypes (`twbs/bootstrap`), and codifies the **Anti-Vibe-Coding Engineering Framework**.

---

## 1. What is "Vibe-Coded" Design and Why It Fails

"Vibe-coded" UI is the hallmark of superficial, amateur AI-generated websites:
- **Repetitive cookie-cutter layouts**: Centered text, generic purple gradient blob in the background, 3 identical gray boxes below.
- **Fake, empty content**: Generic labels like "Feature 1", "Benefit 2", "Supercharge your workflow", with no domain realism.
- **Trivial redesigns**: When a user asks an AI agent to redesign an existing website, typical agents make only shallow color tweaks or dump the same generic template regardless of whether the business is an enterprise B2B fintech, an e-commerce shop, or a developer terminal.
- **Zero edge-case resilience**: Missing empty states, skeleton loaders, form validation states, and mobile tap targets.

---

## 2. The Anti-Vibe-Coding Engineering Framework

When this skill is active, coding AI agents MUST follow these 5 realism rules:

### Rule 1: Domain-Specific Information Architecture
Never use generic placeholder cards. Every component must model the authentic data entities of the target domain:
- **FinTech / Banking**: Transaction ledgers with status chips (`settled`, `pending`, `flagged`), balance trendlines, account switchers, multi-currency conversion calculators, regulatory compliance badges.
- **DevTools / Cloud Infrastructure**: CLI terminal code blocks with syntax highlighting, region latency gauges (`us-east-1 (4ms)`), canary deployment sliders, API key generation modals, YAML config switchers.
- **SaaS B2B**: Role-based access control (RBAC) user lists, seat utilization meters, tiered feature comparison matrices with annual discount pills, webhook log inspectors.
- **E-Commerce & Marketplaces**: Product galleries with thumbnail scrubbers, variant selectors (size/color), stock level badges (`Only 3 remaining`), slide-over cart drawers, customer review breakdown bars.
- **Creative / Portfolios**: High-impact editorial kinetic typography, case study metric highlights (`+42% conversion lift`), client roster grids, interactive project drawers.

### Rule 2: Complete Redesign Morphing Engine
When asked to **redesign** an existing website or application:
1. **Extract Core Domain Data**: Identify the business model, target audience, primary action, and secondary workflows.
2. **Discard Generic Wrappers**: Completely strip out clumsy legacy styling, misaligned margins, and arbitrary inline styles.
3. **Select From the 1,000+ Catalog**: Pick the matching domain archetype from `templates/registry/templates-catalog.json`.
4. **Apply 3-Tier Figma Tokens**: Restructure all styles using semantic CSS variables or Tailwind tokens (`bg-surface-card`, `text-primary`, `border-subtle`).
5. **Inject Kinetic Delight**: Add spring hover states, magnetic buttons, and fluid typography.

### Rule 3: Ergonomic 6-State Component Matrices
Every interactive component must declare styles for the complete 6-state variant matrix:
`default` • `hover` • `active` • `focus-visible` • `disabled` • `loading`.

---

## 3. Catalog Breakdown (1,425 Templates across 15 Categories)

All templates are indexed in [`templates/registry/templates-catalog.json`](../templates/registry/templates-catalog.json) and queryable via CLI (`node bin/design-ux-ultra.js search <keyword>`):

| Category | Code | Count | Key Archetypes & Figma / Open Source Inspirations |
|---|---|---|---|
| **Hero Sections** | `hero` | **105** | Split Hero, Aurora Bento, 3D Perspective App Window, Kinetic Minimal, Interactive Terminal, Waitlist Capture |
| **Navigation & Headers** | `nav` | **65** | Floating Island Navbar, Dynamic Multi-column Mega Menu, Command Palette `⌘K`, Breadcrumb Bar, Collapsible Sidebar |
| **Feature Grids & Bento** | `feature` | **135** | Asymmetric Bento Grid, Sticky Scrollytelling Timeline, Tabbed Deep-Dive, Before/After Slider, Hover Spotlight |
| **Dashboards & Panels** | `dashboard` | **115** | Executive KPI Command, Cloud Telemetry Monitor, FinTech Transaction Stream, CRM Pipeline, Model Inference Feed |
| **Data Tables & Grids** | `table` | **85** | Sortable Paginated Ledger, Status Chip Invoice Grid, Expandable Row Audit Table, Filterable User Roster, Kanban Board |
| **Pricing & Calculators** | `pricing` | **65** | Monthly/Annual Toggle Cards, Interactive Slider Calculator, Tier Feature Matrix, Freemium Frictionless Banner |
| **Testimonials & Proof** | `proof` | **75** | Wall of Love Masonry, Verified Avatar Stack, Video Quote Slider, G2 / Trustpilot Badge Strip, Press Marquee |
| **Forms & Onboarding** | `form` | **85** | 3-Step Wizard Flow, KYC Identity Verification, Slide-over Drawer Settings, One-Page Checkout, Quiz Assessment |
| **E-Commerce & Retail** | `ecommerce` | **95** | Product Detail with Sticky Buy, Faceted Filter Catalog, Slide-over Cart Drawer, Customer Review Breakdown |
| **Footers & CTAs** | `footer` | **65** | 4-Column Directory, Aurora Final Conversion Banner, Floating Newsletter Capture, System Status Indicator |
| **Portfolios & Studios** | `portfolio` | **75** | Full-Screen Project Reel, Editorial Kinetic Typography, Client Honors Grid, Interactive Curriculum Timeline |
| **Developer & API Docs** | `docs` | **65** | Interactive API Playground, 3-Column Endpoint Reference, Code Syntax Tabs, SDK Quickstart Stepper |
| **Interactive Primitives** | `component` | **105** | Tactile Magnetic Buttons, Frosted Acrylic Cards, Dialog Modals, Toast Systems, Segmented Spring Controls |
| **Bootstrap 5 Grid & Layouts** | `bootstrap-layout` | **110** | 12-Column Responsive Flex Container, Offcanvas Navbars, Floating Label Forms, Hybrid CSS Token Accordions, Sticky Sidebars |
| **Figma Community UI Kits** | `figma-community` | **140** | Untitled UI Design System, Material 3 Expressive, iOS 18 Glass HUD, Flowbite Pro Admin, SaaS Dark Bento Wireframe |

---

## 4. Querying and Scaffolding from the Catalog

AI agents and developers can search and inspect templates using the built-in CLI:

```bash
# Search by keyword or archetype
node bin/design-ux-ultra.js search "fintech"
node bin/design-ux-ultra.js search "bento"
node bin/design-ux-ultra.js search "table"

# View all category statistics
node bin/design-ux-ultra.js categories

# Scaffold any template into a local file
node bin/design-ux-ultra.js scaffold saas-landing src/index.html
```
