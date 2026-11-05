# Bootstrap 5+ Grid & Component Architecture Specification

This reference codifies the responsive 12-column grid, CSS custom properties (`--bs-*`), and accessible component patterns from the official [Bootstrap](https://github.com/twbs/bootstrap) design system and the official Bootstrap Figma Community UI Kit.

---

## 1. The 12-Column Responsive Flexbox Grid

Bootstrap's 12-column grid is the industry standard for responsive layouts:

### 1.1 Responsive Breakpoint Continuum
| Breakpoint | Infix | Dimension | Target Devices |
|---|---|---|---|
| Extra Small | *none* | `<576px` | Portrait mobile phones |
| Small | `sm` | `≥576px` | Landscape phones |
| Medium | `md` | `≥768px` | Tablets & iPad portrait |
| Large | `lg` | `≥992px` | Small laptops & iPad Pro |
| Extra Large | `xl` | `≥1200px` | Desktop displays |
| Extra Extra Large | `xxl`| `≥1400px` | Ultrawide & 4K workstations |

### 1.2 Layout Skeleton
```html
<div class="container-fluid px-4 px-lg-5 max-w-7xl">
  <div class="row g-4 align-items-center">
    <!-- Left Column: Hero Text (7 cols on desktop) -->
    <div class="col-12 col-lg-7">
      <span class="badge rounded-pill bg-indigo-500-subtle text-indigo-400 border border-indigo-500/20 px-3 py-2 mb-3">
        Bootstrap 5 + Figma Kit Architecture
      </span>
      <h1 class="display-4 fw-bold text-white tracking-tight mb-4">
        Enterprise Scalability With Micro-Interactions
      </h1>
      <p class="lead text-secondary mb-4">
        12-column mathematical flex rhythm coupled with sub-pixel spring physics and semantic tokens.
      </p>
      <div class="d-flex flex-wrap gap-3">
        <button class="btn btn-primary btn-lg rounded-pill px-4 shadow-sm">Get Started</button>
        <button class="btn btn-outline-secondary btn-lg rounded-pill px-4">View Documentation</button>
      </div>
    </div>

    <!-- Right Column: Interactive App Widget (5 cols on desktop) -->
    <div class="col-12 col-lg-5">
      <div class="card bg-dark border-secondary rounded-4 shadow-lg p-4">
        <!-- Live telemetry or component preview -->
      </div>
    </div>
  </div>
</div>
```

---

## 2. CSS Custom Properties (`--bs-*`) Token Mapping

Bootstrap 5 natively exposes CSS custom properties on `:root` and per-component. Design UX Ultra bridges `--bs-*` directly to the 3-tier Figma token architecture:

```css
:root {
  /* Brand Primitives */
  --bs-primary: #6366f1;
  --bs-primary-rgb: 99, 102, 241;
  --bs-secondary: #94a3b8;
  --bs-success: #10b981;
  --bs-info: #06b6d4;
  --bs-warning: #f59e0b;
  --bs-danger: #ef4444;

  /* Dark Canvas Semantics */
  --bs-body-bg: #030712;
  --bs-body-color: #f8fafc;
  --bs-card-bg: #090d16;
  --bs-border-color: rgba(255, 255, 255, 0.08);
  --bs-border-color-translucent: rgba(255, 255, 255, 0.12);

  /* Typography */
  --bs-body-font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --bs-body-font-size: 1rem;
  --bs-body-line-height: 1.6;

  /* Radii & Elevation */
  --bs-border-radius: 0.75rem;     /* 12px */
  --bs-border-radius-lg: 1rem;     /* 16px */
  --bs-border-radius-xl: 1.5rem;   /* 24px */
  --bs-border-radius-2xl: 2rem;    /* 32px */
  --bs-border-radius-pill: 50rem;
}
```

---

## 3. High-Conversion Bootstrap 5 Component Patterns

### 3.1 Offcanvas Mobile Drawer Navigation
Clean, accessible slide-over drawer replacing cramped dropdown menus on mobile devices:
```html
<!-- Trigger Button -->
<button class="btn btn-outline-light d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-controls="mobileNav">
  <span class="navbar-toggler-icon"></span>
</button>

<!-- Offcanvas Drawer -->
<div class="offcanvas offcanvas-end bg-dark text-white border-start border-secondary" tabindex="-1" id="mobileNav" aria-labelledby="mobileNavLabel">
  <div class="offcanvas-header border-bottom border-secondary p-4">
    <h5 class="offcanvas-title fw-bold" id="mobileNavLabel">Navigation</h5>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body p-4">
    <ul class="nav flex-column gap-3">
      <li class="nav-item"><a class="nav-link text-white fw-medium active" href="#features">Features</a></li>
      <li class="nav-item"><a class="nav-link text-secondary fw-medium" href="#templates">1,000+ Templates</a></li>
      <li class="nav-item"><a class="nav-link text-secondary fw-medium" href="#pricing">Pricing</a></li>
      <li class="nav-item mt-4">
        <a class="btn btn-primary w-100 rounded-pill py-2.5 fw-semibold" href="#cta">Deploy Free</a>
      </li>
    </ul>
  </div>
</div>
```

### 3.2 Floating Labels & Input Groups (Zero-Anxiety Forms)
Floating labels save vertical space and provide continuous context as users type:
```html
<div class="form-floating mb-3">
  <input type="email" class="form-control bg-dark text-white border-secondary rounded-3" id="floatingEmail" placeholder="name@example.com">
  <label for="floatingEmail" class="text-secondary">Work Email Address</label>
</div>

<div class="input-group mb-3">
  <span class="input-group-text bg-dark border-secondary text-secondary font-monospace">https://</span>
  <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="acme-corp">
  <span class="input-group-text bg-dark border-secondary text-secondary font-monospace">.hyperplane.dev</span>
</div>
```

### 3.3 Responsive Data Tables with Status Chips
```html
<div class="table-responsive rounded-4 border border-secondary overflow-hidden">
  <table class="table table-dark table-hover align-middle mb-0">
    <thead class="table-dark text-secondary text-uppercase font-monospace" style="font-size: 0.75rem;">
      <tr>
        <th scope="col" class="py-3 px-4">Deployment</th>
        <th scope="col" class="py-3 px-4">Cluster / Region</th>
        <th scope="col" class="py-3 px-4">Status</th>
        <th scope="col" class="py-3 px-4 text-end">Edge Latency</th>
      </tr>
    </thead>
    <tbody class="font-sans" style="font-size: 0.875rem;">
      <tr>
        <td class="py-3 px-4 fw-semibold text-white">production-api-mesh</td>
        <td class="py-3 px-4 text-secondary font-monospace">us-east-1 (N. Virginia)</td>
        <td class="py-3 px-4">
          <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-2.5 py-1">Operational</span>
        </td>
        <td class="py-3 px-4 text-end text-info font-monospace">3.4ms</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 4. Figma Community UI Kit Library Alignment

When authoring or redesigning interfaces with Bootstrap:
1. **Mirror Auto Layout with Bootstrap Flex Rows**: Every Figma Auto Layout frame (`direction=horizontal`, `gap=16`) translates directly to `<div class="d-flex gap-3 align-items-center">` or `<div class="row g-3">`.
2. **Utilize Bootstrap Utility Modifiers**: `d-none d-md-block`, `w-100`, `flex-grow-1`, `shadow-sm`, `rounded-pill`.
3. **Harmonize with Design Tokens**: Always map `--bs-primary` to the primary brand token from `templates/design-tokens/tokens.json`.
