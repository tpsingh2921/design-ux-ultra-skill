# Integration Examples & Framework Recipes

How to integrate **Design UX Ultra Skill** archetypes and tokens into modern web frameworks.

---

## 1. Next.js 14/15 (App Router) + Tailwind CSS

### Step 1: Add Preset to `tailwind.config.js`
```javascript
// tailwind.config.js
module.exports = {
  presets: [
    require('design-ux-ultra-skill/templates/design-tokens/tailwind.config.preset.js')
  ],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};
```

### Step 2: Use the Bento Aurora Hero in `app/page.tsx`
```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Aurora Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(at_15%_15%,rgba(99,102,241,0.15)_0,transparent_50%),radial-gradient(at_85%_20%,rgba(236,72,153,0.12)_0,transparent_45%)]" />

      {/* Floating Island Header */}
      <nav className="fixed top-6 inset-x-0 z-50 max-w-4xl mx-auto px-4">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-between shadow-2xl">
          <span className="font-bold text-sm text-white">UltraUX</span>
          <button className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6">
          Architect Next-Gen Web Products
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
          Pre-configured design tokens, tactile micro-physics, and WCAG AA heuristics.
        </p>
      </section>
    </main>
  );
}
```

---

## 2. Standalone HTML5 / Tailwind Play CDN

No build step required. Simply open any file in `templates/` directly in your browser or serve with:

```bash
npx serve templates/landing-pages/
```
All templates are fully standalone, responsive, and render immediately.
