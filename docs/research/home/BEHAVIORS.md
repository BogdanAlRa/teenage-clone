# Teenage Engineering — Behaviors research (Home page)

Extracted 2026-04-23 via Chrome MCP + curl.

## Stack under the hood
- **Framework:** React Router v7 (not Next.js, not Nuxt). `ssr: false` in config but server streams the initial paint, then React hydrates on the client.
- **JS entries:** `/assets/root.*.js`, `/assets/layout.*.js`, `/assets/te013.*.js`, `/assets/entry.client.*.js` — hash-suffixed Vite output.
- **CSS architecture:** 10+ modular CSS files (`root`, `flex`, `app-context`, `block`, `form`, `container`, `button`, `image`, `spinner`, `grid`) loaded as separate `<link>` tags.
- **Build system signals:** Vite (hash pattern), React Router v7 route modules, SSR stream primitives (`$RB`, `$RT`, `$RC`, `$RV` — React's new concurrent streaming hints).

## Signature moments: NONE detected on home page
| Check | Result |
|---|---|
| `<canvas>` elements | **0** |
| `<video>` elements | **0** |
| Lottie | 0 |
| GSAP | not loaded |
| Lenis | not detected (no `.lenis` class) |
| Locomotive Scroll | not detected (no `[data-scroll-container]`) |
| Three.js | not detected (`window.THREE` absent) |
| Framer Motion | not detected in HTML |
| CSS `scroll-snap-type` | not detected via sampling |

The home page is **predominantly static HTML + CSS** with React hydration providing routing. The skill's "signature moment hard gate" doesn't trigger — no canvases to rasterize, no shaders to extract.

## Behaviors that DO exist (inferred from the bundles + visible UI)

### 1. Scroll-position restoration
Inline script 3: stores scroll Y in `sessionStorage` keyed by `window.history.state.key`, restores on back/forward. Standard SPA pattern. Reproducible in Next.js for free via App Router behavior.

### 2. Client-width-based fluid scaling
The root CSS uses `--client-width: 100vw` as the master variable. This is pure CSS — no JS needed. Resizing the viewport recomputes everything. Already correct behavior in a CSS-only clone.

### 3. Monotype font-tracking injection
Inline script 0 (base64-decoded) injects `cdn.fonts.net/t/trackingCode.js` with MTI project ID `ec359835-db4c-4edb-b05d-072b249c9df0`. Licensing telemetry for the TE20/TE40 fonts (Monotype-hosted). **Skip this in the clone** — we serve fonts locally from `public/fonts/`, no Monotype license applies to a non-production clone.

### 4. Header nav
Two-level: top wordmark ("teenage engineering") + product categories with sub-labels stacked beneath (products → instruments/loudspeakers/designs). Japanese paragraph on right. "10" logo top-right corner.

### 5. Hero interaction (HYPOTHESIS — verify via scroll sweep)
The "hand reaching into case" hero appears static on initial load. TBD whether:
- Plain static image
- CSS-transform parallax on scroll
- Mousemove-driven positioning (classic TE move)

Verify in Phase 1 scroll sweep by scrolling the page and watching if the image shifts, or hovering to check mousemove.

## Page topology (from DOM structure counts)

| Element | Count | Hypothesis |
|---|---|---|
| `<section>` | 6 | Main vertical sections on home |
| `<header>` | 2 | Primary nav + mobile nav |
| `<footer>` | 2 | Primary + secondary / sitemap |
| `<div class="box">` | 23 | TE's generic container pattern |
| `<div class="box boximg ...">` | 28 | Image-containing boxes across the page |
| `<div class="img-wrapper">` | 31 | Image wrapper count matches 31 `<img>` count — each image has its own wrapper |

**Inferred section layout (top to bottom):**
1. Header (logo + nav + Japanese copy + "10" logo)
2. Hero — "complete your system" with hand + TP-7/TX-6 case image
3. Product highlights (multiple `box boximg` groups — likely product cards)
4. Secondary content (text-heavy sections, "txt _txt_1a3e1_1" classes appear 38 times)
5. ~6 more content blocks
6. Footer

This structure will be confirmed once we do the scroll sweep and screenshot each section.

## Responsive
- Mobile breakpoint: `@media (min-width: 768px)` — a single breakpoint splits mobile / desktop.
- All spacing and font scales change at 768px, compressing to roughly half the proportional size on desktop.
- Header height changes at 768px (mobile 0.184×cw → desktop 0.082×cw).

## What the clone needs to reproduce

**MUST HAVE:**
- Full `--client-width`-based fluid scaling architecture
- All 16 color tokens
- All 4 TE fonts (TE20L, TE20T, TE40L, TE40T)
- Japanese Hiragino fallback for the Japanese copy block
- Pixel-perfect Swiss-style asymmetric grids
- Header layout with sub-label nav pattern
- The hero image + typography stack

**NICE TO HAVE (post-MVP):**
- Scroll-position restoration (mostly free with Next.js App Router)
- Exact hover states on nav items

**CAN SKIP:**
- Monotype font-tracking inject (licensing telemetry only)
- React Router's SSR stream primitives (we're rebuilding in Next.js)
