# Design System Specification & Token Taxonomy

## 1. Principles

1. **Spatial Immersion**: Surfaces live on a depth continuum ($z$-axis) created with subtle frosted acrylic glassmorphism, thin 1px border strokes with directional lighting, and layered radial aurora gradients.
2. **Kinetic Intentionality**: Animations provide physical feedback, orientation, and pacing. No decorative jitter or unprompted loops.
3. **Ergonomic Usability**: Every interface strictly satisfies WCAG 2.2 AA (4.5:1 contrast for body copy) and Nielsen Norman usability heuristics.
4. **Token Purity**: Components never consume raw hex codes or magic pixel units. Everything references semantic tokens.

---

## 2. Color System

### 2.1 Dark Surface Palette (Default)
| Token | Value | Role |
|---|---|---|
| `--color-bg-canvas` | `#030712` (Slate 950) | Base canvas background |
| `--color-bg-surface` | `#0b0f19` (Slate 900) | Sidebar and primary section container |
| `--color-bg-card` | `#111827` (Slate 850) | Raised cards, panels, and dropdowns |
| `--color-bg-subtle` | `#1f2937` (Slate 800) | Secondary input wells and code blocks |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard card boundary |
| `--color-border-hover` | `rgba(255, 255, 255, 0.18)` | Interactive hover highlight |

### 2.2 Brand & Accent Palette
| Token | Value | Role |
|---|---|---|
| `--color-brand-primary`| `#6366f1` (Indigo 500) | Primary CTA buttons, key active indicators |
| `--color-brand-hover`  | `#818cf8` (Indigo 400) | Hover transition for brand elements |
| `--color-accent-cyan`  | `#22d3ee` (Cyan 400) | Secondary telemetry and highlight text |
| `--color-accent-pink`  | `#ec4899` (Pink 500) | Special badge markers and gradient endpoints |
| `--color-accent-emerald`| `#34d399` (Emerald 400)| Online status, positive metrics, pass states |

---

## 3. Typography Scale (Fluid Math)

Calculated via CSS `clamp()` to scale fluidly from 375px mobile viewports up to 1440px desktop screens without breakpoint jumps:

```css
--font-h1: clamp(2.5rem, 1.8rem + 3.38vw, 4.75rem);
--font-h2: clamp(1.75rem, 1.35rem + 1.88vw, 3rem);
--font-h3: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
--font-body: clamp(0.9375rem, 0.88rem + 0.28vw, 1.125rem);
--font-caption: 0.75rem; /* 12px */
```

---

## 4. Spacing Scale (8pt Grid)

```
0.25rem (4px)  -> 0.5rem (8px)  -> 0.75rem (12px) -> 1rem (16px) -> 
1.5rem (24px)  -> 2rem (32px)   -> 3rem (48px)    -> 4rem (64px) -> 
6rem (96px)    -> 8rem (128px)
```
