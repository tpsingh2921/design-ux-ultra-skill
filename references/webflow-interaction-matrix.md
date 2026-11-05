# Webflow Interaction Matrix Specification

This document codifies the kinetic motion, scroll-driven animations, and interaction design patterns celebrated in the "Made in Webflow" UX/UI community.

---

## 1. The Interaction Philosophy: Kinetic, Intentional, Fluid

In world-class Webflow sites, motion is **never decorative noise**—it is narrative pacing, user guidance, and physical feedback.

### Key Rules:
1. **Never block the user**: Interactive elements must respond immediately. Never delay user intent behind a 2-second entrance transition.
2. **Spring physics over linear easing**: Use natural damping curves (`cubic-bezier(0.16, 1, 0.3, 1)` or custom springs).
3. **Respect user accessibility**: Always wrap animations in `@media (prefers-reduced-motion: no-preference)`.

---

## 2. GSAP & ScrollTrigger Choreography Recipes

### 2.1 Smooth Section Reveal & Stagger
When a section scrolls into view, reveal the badge, heading, subtitle, and cards in staggered sequence:

```javascript
// GSAP + ScrollTrigger Stagger Reveal
gsap.registerPlugin(ScrollTrigger);

function initScrollReveals() {
  const sections = document.querySelectorAll('[data-scroll-section]');

  sections.forEach((section) => {
    const targets = section.querySelectorAll('[data-scroll-reveal]');

    gsap.fromTo(targets, 
      {
        y: 36,
        opacity: 0,
        filter: 'blur(8px)'
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}
```

### 2.2 Sticky Card Stacking (Scrollytelling)
Cards that stack on top of each other as the user scrolls, creating a tactile physical deck:

```html
<!-- HTML Structure for Sticky Deck -->
<section class="relative min-h-[300vh] py-24" id="sticky-deck">
  <div class="sticky top-24 max-w-4xl mx-auto px-4">
    <div class="deck-card bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-6 shadow-2xl transition-transform duration-300">
      <div class="text-indigo-400 font-mono text-sm">Step 01 / Ideation</div>
      <h3 class="text-3xl font-bold text-white mt-2">Autonomous Discovery</h3>
      <p class="text-slate-400 mt-4">Extracting constraints and domain requirements automatically.</p>
    </div>
    <div class="deck-card bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-6 shadow-2xl transition-transform duration-300">
      <div class="text-cyan-400 font-mono text-sm">Step 02 / Tokenization</div>
      <h3 class="text-3xl font-bold text-white mt-2">Dynamic System Synthesis</h3>
      <p class="text-slate-400 mt-4">Generating full semantic variables for colors, typography, and motion.</p>
    </div>
    <div class="deck-card bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-6 shadow-2xl transition-transform duration-300">
      <div class="text-emerald-400 font-mono text-sm">Step 03 / Production Execution</div>
      <h3 class="text-3xl font-bold text-white mt-2">Zero-Friction Code Delivery</h3>
      <p class="text-slate-400 mt-4">Exporting hardened, accessible HTML, Tailwind, and React artifacts.</p>
    </div>
  </div>
</section>
```

---

## 3. Magnetic Cursor & Button Interactions

Award-winning Webflow portfolios use magnetic pull: when the cursor nears a button, the button gently shifts toward the cursor, giving a tactile magnetic sensation.

```javascript
// Magnetic Button Physics
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll('[data-magnetic]');

  magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      // Shift button by 35% of offset, inner text by 20%
      el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
      const inner = el.querySelector('[data-magnetic-inner]');
      if (inner) {
        inner.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      }
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0px, 0px)';
      el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      const inner = el.querySelector('[data-magnetic-inner]');
      if (inner) {
        inner.style.transform = 'translate(0px, 0px)';
        inner.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      }
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'none';
      const inner = el.querySelector('[data-magnetic-inner]');
      if (inner) inner.style.transition = 'none';
    });
  });
}
```

---

## 4. Fluid Typography Mathematics (`clamp()`)

Webflow master designs look balanced on an iPhone SE, an iPad Pro, and a 4K ultrawide monitor without jumpy media query jumps. This is achieved via fluid math:

$$\text{fontSize} = \text{clamp}(V_{\min}, \text{Slope} \cdot \text{ViewportWidth} + \text{Base}, V_{\max})$$

### Precalculated Fluid Typography Scale
```css
:root {
  /* Display H1: 40px at 375px viewport -> 76px at 1440px viewport */
  --font-h1: clamp(2.5rem, 1.8rem + 3.38vw, 4.75rem);

  /* Section H2: 28px at 375px viewport -> 48px at 1440px viewport */
  --font-h2: clamp(1.75rem, 1.35rem + 1.88vw, 3rem);

  /* Card H3: 20px at 375px viewport -> 28px at 1440px viewport */
  --font-h3: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);

  /* Body Regular: 15px at 375px viewport -> 18px at 1440px viewport */
  --font-body: clamp(0.9375rem, 0.88rem + 0.28vw, 1.125rem);

  /* Line Heights */
  --lh-tight: 1.1;
  --lh-snug: 1.25;
  --lh-relaxed: 1.6;
}

h1 {
  font-size: var(--font-h1);
  line-height: var(--lh-tight);
  letter-spacing: -0.035em;
}

h2 {
  font-size: var(--font-h2);
  line-height: var(--lh-snug);
  letter-spacing: -0.025em;
}

p {
  font-size: var(--font-body);
  line-height: var(--lh-relaxed);
}
```

---

## 5. Smooth Accordion FAQ Pattern

```html
<div class="faq-item border-b border-slate-800 py-6">
  <button class="w-full flex items-center justify-between text-left group" onclick="toggleFaq(this)">
    <span class="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
      How does the design token architecture integrate with Tailwind CSS?
    </span>
    <span class="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-hover:border-slate-500 group-hover:text-white transition-all transform faq-icon">
      <svg class="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </span>
  </button>
  <div class="faq-content overflow-hidden max-h-0 transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
    <p class="pt-4 text-slate-400 leading-relaxed text-sm">
      Our tokens map directly into Tailwind's theme configuration file via CSS custom properties. Any change to a semantic token (like --primary or --surface) instantly propagates across the entire utility class catalog with zero build-time friction.
    </p>
  </div>
</div>

<script>
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon svg');
  const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

  // Close all other open FAQs
  document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = '0px');
  document.querySelectorAll('.faq-icon svg').forEach(i => i.style.transform = 'rotate(0deg)');

  if (!isOpen) {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
}
</script>
```
