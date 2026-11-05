# Dribbble Visual Engine Specification

This specification codifies the modern high-end visual design trends popularized on Dribbble: spatial depth, Aurora glow lighting, Bento grid layouts, glassmorphic surfaces, tactile micro-delights, and contemporary typography hierarchy.

---

## 1. The Color & Lighting Architecture

Dribbble's top-performing web designs rely on atmospheric lighting rather than flat fills.

### 1.1 Aurora Gradient Backgrounds
Layered radial gradients create a luminous, futuristic backdrop that gives depth to dark-mode and light-mode interfaces alike:

```css
/* Aurora Dark Mode Canvas */
.aurora-bg-dark {
  background-color: #090a0f;
  background-image: 
    radial-gradient(at 15% 15%, rgba(99, 102, 241, 0.15) 0px, transparent 55%),
    radial-gradient(at 85% 25%, rgba(236, 72, 153, 0.12) 0px, transparent 50%),
    radial-gradient(at 50% 80%, rgba(56, 189, 248, 0.15) 0px, transparent 60%);
  background-attachment: fixed;
}

/* Aurora Light Mode Canvas */
.aurora-bg-light {
  background-color: #f8fafc;
  background-image: 
    radial-gradient(at 10% 20%, rgba(99, 102, 241, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 10%, rgba(244, 114, 182, 0.07) 0px, transparent 45%),
    radial-gradient(at 50% 90%, rgba(56, 189, 248, 0.08) 0px, transparent 55%);
}
```

### 1.2 Glassmorphism & Frosted Acrylic Surfaces
Pure opacity reductions look washed out. True Dribbble-grade frosted glass requires combining translucent backgrounds, backdrop blur, saturated contrast, and an ultra-thin 1px border with a gradient stroke:

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 4px 24px -1px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
}

.glass-panel:hover {
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow: 
    0 12px 32px -4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
}
```

---

## 2. Bento Grid Layout Architecture

The Bento Box layout organizes complex features into modular, asymmetric, beautifully proportioned cards reminiscent of Japanese bento lunchboxes.

### 2.1 Standard 12-Column Asymmetric Grid
```html
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
  <!-- Hero Card: Spans 2 cols, 2 rows -->
  <div class="md:col-span-2 md:row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group">
    <!-- Spotlight Hover Glow -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="relative z-10">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
        Primary Engine
      </span>
      <h3 class="text-2xl font-bold text-white mt-4 tracking-tight">Real-Time Autonomous Analytics</h3>
      <p class="text-slate-400 mt-2 text-sm leading-relaxed max-w-md">Instantly stream telemetry and model inferences across distributed nodes with sub-millisecond edge synchronization.</p>
    </div>
    <!-- Visual / Graphic Widget -->
    <div class="relative z-10 mt-6 bg-slate-900/60 rounded-2xl border border-slate-800 p-4 shadow-inner">
      <!-- Miniature live chart or UI illustration -->
    </div>
  </div>

  <!-- Metric Card: Spans 1 col, 1 row -->
  <div class="glass-panel rounded-3xl p-6 flex flex-col justify-between">
    <div class="text-xs uppercase tracking-wider text-slate-400 font-medium">Uptime Guarantee</div>
    <div class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
      99.99%
    </div>
    <div class="text-xs text-slate-500">Zero downtime automated rollover</div>
  </div>

  <!-- Interactive Toggle Card: Spans 1 col, 1 row -->
  <div class="glass-panel rounded-3xl p-6 flex flex-col justify-between">
    <div class="text-xs uppercase tracking-wider text-slate-400 font-medium">Global Latency</div>
    <div class="text-4xl font-extrabold text-white">
      12<span class="text-indigo-400 text-2xl font-normal">ms</span>
    </div>
    <div class="flex items-center gap-2 text-xs text-emerald-400">
      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
      <span>34% faster than industry median</span>
    </div>
  </div>

  <!-- Medium Card: Spans 2 cols, 1 row -->
  <div class="md:col-span-2 glass-panel rounded-3xl p-6 flex items-center justify-between">
    <!-- Content + Mini visual -->
  </div>
</div>
```

---

## 3. Micro-Interactions & Hover Physics

Modern Dribbble designs are deeply tactile. The user must feel physical resistance, weight, and light responsiveness.

### 3.1 3D Mouse Tilt Effect
Add dynamic tilt that tracks the cursor over a card using pure CSS or micro-JavaScript:

```javascript
// Vanilla JS 3D Card Tilt with zero dependencies
function initTiltEffect(cardElement) {
  cardElement.addEventListener('mousemove', (e) => {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg rotation
    const rotateY = ((x - centerX) / centerX) * 8;
    
    cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardElement.style.setProperty('--mouse-x', `${x}px`);
    cardElement.style.setProperty('--mouse-y', `${y}px`);
  });

  cardElement.addEventListener('mouseleave', () => {
    cardElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}
```

### 3.2 Mouse Spotlight Follower
Using CSS variables set by mouse movements:
```css
.spotlight-card {
  position: relative;
  overflow: hidden;
}

.spotlight-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(
    600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
    rgba(99, 102, 241, 0.12),
    transparent 40%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.spotlight-card:hover::before {
  opacity: 1;
}
```

---

## 4. Typography Hierarchy & Contrast

Dribbble layouts use sharp contrast between huge, confident display titles and ultra-crisp, high-legibility body fonts.

- **Primary Display Font**: High-character grotesque sans-serifs or geometric sans (e.g., `Plus Jakarta Sans`, `Inter Tight`, `Clash Display`, `Cabinet Grotesk`, `Geist`).
- **Body & UI Font**: Neutral, high-x-height sans (`Inter`, `Geist`, `system-ui`).
- **Code / Metrics Font**: Monospace with tabular numbers (`JetBrains Mono`, `Geist Mono`, `Fira Code`).

### Eyebrow Pill Badge Pattern
Always precede major headlines with an interactive, categorized pill badge:
```html
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/80 border border-slate-700/60 shadow-sm backdrop-blur-md">
  <span class="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
  <span class="text-slate-300">V2.4 Architecture Live</span>
  <svg class="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
  </svg>
</div>
```
