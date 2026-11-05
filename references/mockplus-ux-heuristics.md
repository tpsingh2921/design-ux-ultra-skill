# Mockplus UX Heuristics & Wireframing Blueprint

This document codifies the user experience wireframing, information architecture, and cognitive ergonomics inspired by Mockplus's rapid prototyping and design system standards.

---

## 1. The Core UX Laws for AI Coding Agents

Every UI produced by an AI coding agent must pass these 5 psychological laws before any visual styling is applied:

### 1.1 Fitts's Law (Target Distance & Size)
- Critical Call-To-Action (CTA) buttons must be easily clickable with ample hit area (minimum **44x44px** on mobile touchscreens).
- Place primary actions in the thumb zone on mobile screens or along natural eye-tracking fixations (top-right of cards, bottom-right of modal footers).

### 1.2 Hick's Law (Decision Time vs. Options)
- Do not paralyze users with more than 1 primary choice per viewport.
- If presenting multiple actions, distinguish visually:
  - **1 Primary Button**: Solid accent fill, high elevation.
  - **1 Secondary Button**: Ghost/outlined or subtle muted fill.
  - **Tertiary Actions**: Text link or icon only.
- Chunk navigation options into logical sub-groups of 5–7 items maximum (Miller's Law).

### 1.3 Jakob's Law (Familiar Patterns)
- Users spend most of their time on other websites. Do not reinvent fundamental navigation metaphors:
  - Top-left: Brand logo (always links to home).
  - Top-right: Navigation links, search, user avatar/login, primary CTA.
  - Bottom-right: Notification toasts, help floating widget.
  - Search bars: Look like search inputs with a magnifying glass icon and keyboard shortcut `⌘K` / `Ctrl+K`.

### 1.4 Immediate Feedback (Visibility of System Status)
- Every user action MUST produce an immediate visual or auditory acknowledgment in <100ms:
  - Click: Active state depression (`scale: 0.98`, border color change).
  - Submit: Button enters loading state with inline spinner, disabled from duplicate clicks.
  - Asynchronous fetch: Display skeleton shimmer instead of blank white space.
  - Success/Error: Display a dismissible toast alert with clear resolution steps.

---

## 2. Information Architecture & Reading Eye-Flow

### 2.1 The Z-Pattern (Landing Pages)
Users scan in a Z-shape across promotional landing pages:
```
[Logo] ───────────────────────────────> [Nav Links / Primary CTA]
   \
    \
     \
[Hero Value Headline + Subtitle] ──────> [Hero Visual / Interactive Demo]
```

### 2.2 The F-Pattern (Dashboards & Data Lists)
Users scan dashboards across horizontal rows and vertical edge:
```
[Page Title / Global Filter] ─────────> [Date Picker / Export CTA]
│
[Top KPI Summary Cards: 1 | 2 | 3 | 4]
│
[Main Data Table / Chart Visualization]
```

---

## 3. Feedback States Architecture

A professional UI is defined by how gracefully it handles edge cases:

### 3.1 Skeleton Loading Component
Never show a blank container while loading data. Use a pulsing skeleton with identical geometry:
```html
<div class="animate-pulse space-y-4 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
  <div class="flex items-center space-x-4">
    <div class="rounded-full bg-slate-800 h-10 w-10"></div>
    <div class="flex-1 space-y-2">
      <div class="h-4 bg-slate-800 rounded w-1/3"></div>
      <div class="h-3 bg-slate-800 rounded w-1/4"></div>
    </div>
  </div>
  <div class="space-y-2 pt-2">
    <div class="h-4 bg-slate-800 rounded w-full"></div>
    <div class="h-4 bg-slate-800 rounded w-5/6"></div>
  </div>
</div>
```

### 3.2 Delightful Empty State
When there is no user data, provide context, illustration, and an unambiguous recovery action:
```html
<div class="text-center py-12 px-6 border-2 border-dashed border-slate-800 rounded-3xl max-w-md mx-auto">
  <div class="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
    <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
    </svg>
  </div>
  <h3 class="text-lg font-semibold text-white">No deployments found</h3>
  <p class="text-slate-400 text-sm mt-1 mb-6">You haven't connected any repositories to your workspace yet.</p>
  <button class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20">
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
    Connect First Repository
  </button>
</div>
```

---

## 4. Multi-Step Form Ergonomics (Mockplus Wizard Pattern)

Complex forms create anxiety. Chunk them into sequential steps with clear progress:

```html
<div class="max-w-xl mx-auto p-8 bg-slate-900 border border-slate-800 rounded-3xl">
  <!-- Progress Bar -->
  <div class="mb-8">
    <div class="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
      <span class="text-indigo-400">Step 2 of 3: Organization Details</span>
      <span>66% Complete</span>
    </div>
    <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full w-2/3 transition-all duration-500 ease-out"></div>
    </div>
  </div>

  <!-- Form Fields -->
  <form class="space-y-5">
    <div>
      <label class="block text-sm font-medium text-slate-300 mb-1.5">Workspace Subdomain</label>
      <div class="flex rounded-xl overflow-hidden border border-slate-700 bg-slate-950 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
        <input type="text" class="flex-1 bg-transparent px-4 py-2.5 text-white text-sm outline-none placeholder-slate-500" placeholder="acme-corp">
        <span class="px-3.5 py-2.5 bg-slate-800 text-slate-400 text-xs flex items-center font-mono">.hyperplane.dev</span>
      </div>
    </div>
    <!-- Actions -->
    <div class="flex items-center justify-between pt-4">
      <button type="button" class="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors">Back</button>
      <button type="submit" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all">Continue to Review</button>
    </div>
  </form>
</div>
```
