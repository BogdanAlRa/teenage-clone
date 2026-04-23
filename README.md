# teenage-clone

A pixel-oriented study clone of [teenage.engineering](https://teenage.engineering) — `/`, `/products`, and `/now` — built as a Next.js 16 + Tailwind v4 + shadcn/ui project.

**This repository is an educational / design-study artifact.** The code is original work; the typographic assets, photographic assets, and design-system research files included here are the intellectual property of teenage engineering and Monotype respectively.

---

## Attribution & removal request

All rights to:

- the **TE20** and **TE40** font families (`public/fonts/`) are held by **Monotype Imaging Inc.** and licensed to teenage engineering.
- the **product photography, site imagery, and inline SVG artwork** mirrored under `public/images/` and `docs/research/` are held by **teenage engineering AB (Stockholm)**.
- the **brand marks**, wordmark, and the `te-20` / `te-40` family naming convention are trademarks of **teenage engineering AB**.

This project reproduces some of those assets for the sole purpose of studying, measuring, and reconstructing teenage engineering's front-end design system in a reproducible form.

**If you represent teenage engineering or Monotype and would like any part of this repository removed, please open an issue or contact me via my GitHub profile. I will take the relevant files or the entire repository down on request, no questions asked.**

No part of this repository is offered for sale, deployed commercially, or presented as official teenage engineering software. No affiliation, sponsorship, or endorsement is claimed or implied.

---

## What's inside

| Path | Purpose |
|---|---|
| `src/app/page.tsx`, `products/`, `now/` | Three studied pages reassembled as Next.js routes |
| `src/components/` | Shared layout components: `SiteHeader`, `SiteFooter`, `HeroSection`, `FeatureSection`, `icons.tsx`, plus per-page `products/*` and `now/*` subcomponents |
| `src/app/globals.css` | Design-system port: 16 TE color tokens, fluid `--client-width`-based spacing and type scales, raw `@font-face` declarations matching TE's naming verbatim |
| `public/fonts/` | TE20 and TE40 woff2 files (4 files, 82 KB) — see attribution above |
| `public/images/{home,products,now}/` | Product photography mirrors (~22 MB) — see attribution above |
| `docs/research/home/DESIGN_TOKENS.md` | Analytical write-up of the color / type / spacing system (my original work) |
| `docs/research/home/BEHAVIORS.md` | Analytical write-up of scroll / hover / layout behaviors observed on the live site (my original work) |
| `docs/research/home/PAGE_TOPOLOGY.md` | Section-by-section map of the home page with Y-offsets and roles (my original work) |
| `docs/research/{home,products,now}/raw.html` | Scraped SSR HTML used as ground truth for structural reconstruction — TE's IP, included here for reproducibility |
| `docs/research/home/root.css` | TE's main stylesheet, downloaded for design-token extraction — TE's IP, included for reproducibility |

---

## Running locally

```bash
pnpm install
pnpm dev
# http://localhost:3000/         — home
# http://localhost:3000/products  — /products
# http://localhost:3000/now       — /now
```

Requires Node 24+ and pnpm 10+.

## Build

```bash
pnpm run build    # static pages prerendered
pnpm run lint
pnpm run typecheck
```

## Stack

- Next.js 16 (App Router, React 19, TypeScript strict)
- Tailwind CSS v4 with shadcn/ui primitives
- Raw `@font-face` declarations (no `next/font/local`) to preserve TE's exact `te-20`, `te-40` family naming
- Pure-CSS `:hover` icon morphs using TE's own `transform-box: fill-box` mechanism

## Known gaps (honest)

- Mobile breakpoint (`@media (min-width: 768px)`) collapse is best-effort; desktop 1440 is the primary target.
- `/products` is a single-page catalog stack; the real site's filterable sub-routes (`/products/instruments`, `/products/loudspeakers`, `/products/designs`) are not implemented.
- `/now` renders 4 long-form feature posts from the React Router stream data that was parsable from the SSR HTML. The live feed is longer.
- `public/images/` contains `_2048` and selectively `_5120` tiers only — not the full responsive srcset ladder.

---

## License (my code)

The original code in this repository — anything under `src/`, my scripts, and the analytical Markdown under `docs/research/**/*.md` — is released under the **MIT License** (see `LICENSE`). Third-party assets are NOT covered by that license; see the attribution section above.

Scaffold initially generated from the public [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) (MIT).
