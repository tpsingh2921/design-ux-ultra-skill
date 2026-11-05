# Responsive Spatial Grid & Layout Architecture

This document defines the mathematical spacing rhythm, multi-device viewport breakpoints, and touch-target ergonomics required for flawless cross-device layout rendering.

---

## 1. The 8pt Spatial Grid Standard

All spatial decisions (margins, paddings, gaps, component dimensions) MUST be strict multiples of 8px (or 4px for micro-offsets):

| Token | Pixels | Rem (16px base) | Primary Usage |
|---|---|---|---|
| `--space-1` | 4px | `0.25rem` | Icon-to-text gap, badge micro-padding |
| `--space-2` | 8px | `0.5rem` | Button horizontal padding, compact list gap |
| `--space-3` | 12px | `0.75rem` | Input field vertical padding |
| `--space-4` | 16px | `1rem` | Standard card internal padding (mobile) |
| `--space-6` | 24px | `1.5rem` | Standard card internal padding (desktop) |
| `--space-8` | 32px | `2rem` | Grid gap between major cards |
| `--space-12`| 48px | `3rem` | Section vertical rhythm (compact) |
| `--space-16`| 64px | `4rem` | Section vertical padding (tablet) |
| `--space-24`| 96px | `6rem` | Section vertical padding (desktop) |
| `--space-32`| 128px| `8rem` | Hero section top/bottom padding |

> **Rule:** Never use arbitrary numbers like `padding: 13px;` or `margin-top: 27px;`. Every dimension must be anchored to this rhythm.

---

## 2. Responsive Viewport Breakpoints

| Breakpoint | Minimum Width | Typical Target Devices | Column Architecture |
|---|---|---|---|
| `sm` | 640px | Large phones in landscape, phablets | 1-2 columns |
| `md` | 768px | Tablets (iPad mini, iPad Air portrait) | 2-3 columns |
| `lg` | 1024px | Small laptops, iPad Pro landscape | 3-4 columns |
| `xl` | 1280px | Modern desktop displays | 4-6 columns |
| `2xl`| 1536px | Large monitors, 4K workstations | Max container width constraint (`1280px` or `1440px`) |

### Responsive Container Discipline:
Always constrain text and content containers to prevent uncomfortable reading line lengths (optimal line length is 45 to 75 characters):
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

---

## 3. Touch Ergonomics & Safe Tap Zones

On mobile interfaces:
- **Minimum Tap Target**: 44px × 44px (Apple HIG) or 48px × 48px (Google Material).
- For small icons (e.g., 20px close button), expand the clickable area via transparent pseudo-elements or padding:
```css
.tap-target-expand {
  position: relative;
}
.tap-target-expand::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 44px;
  height: 44px;
  transform: translate(-50%, -50%);
}
```
