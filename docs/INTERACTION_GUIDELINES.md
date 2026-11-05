# Interaction Guidelines & Motion Physics

This guide details the easing mathematics, transition curves, and tactile feedback patterns specified in Design UX Ultra.

---

## 1. Easing Curves & Timing

Never use linear (`linear`) or standard browser `ease` for interactive elements. Always use natural spring or damped cubic-bezier curves:

| Curve Name | Bezier Formula | Typical Usage | Duration |
|---|---|---|---|
| **Spring Damped** | `cubic-bezier(0.16, 1, 0.3, 1)` | Modals, drawers, card hover transforms | 350ms – 500ms |
| **Soft Bounce** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Toggle switches, checkbox checks, badge pops | 200ms – 300ms |
| **Smooth Exit** | `cubic-bezier(0.4, 0, 1, 1)` | Dismissing alerts, closing drawers | 150ms – 250ms |

---

## 2. Micro-Interaction Rules

### 2.1 Buttons
- **Hover**: Subtle vertical lift (`transform: translateY(-2px)`), background brightening, and soft outer glow shadow expansion.
- **Active (Click)**: Physical compression (`transform: scale(0.98) translateY(0px)`), shadow retraction.
- **Focus-Visible**: 2px outline ring with 2px offset (`ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-950`).

### 2.2 Cards
- **Perspective Tilt**: Max 6° to 8° rotation on X/Y axis based on cursor proximity.
- **Border Spotlight**: Dynamic radial gradient stroke tracking cursor coordinates (`--mouse-x`, `--mouse-y`).

---

## 3. Reduced Motion Compliance

Always implement reduced-motion guards:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
In Tailwind CSS, use the `motion-reduce:` modifier:
```html
<div class="transition-transform duration-500 hover:-translate-y-2 motion-reduce:transform-none">
```
