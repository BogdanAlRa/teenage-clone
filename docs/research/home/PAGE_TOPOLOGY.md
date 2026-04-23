# Teenage Engineering / — Page Topology (desktop, 1440px)

Total page height: **10,619 px** (document), **10,524 px** (main content).
Viewport: 1440 × 900.

## Vertical sections

| Idx | Y-range | Height | Role | Wrapper class |
|---|---|---|---|---|
| 0 | 0 – 118 | 118 | **Header nav** (fixed/flow, z=1000) | `<nav class="_root_rewic_1">` |
| 1 | 0 – 1308 | 1308 | **Hero** — "complete your system" + hand-in-case image | `<div class="box boximg">` inside `.page` |
| 2 | 1308 – 3071 | 1763 | **Section 2** — EP-133 K.O. II (black background, hero product shot) | `<div class="box mgs">` |
| 3 | 3071 – 4746 | 1675 | **Section 3** — (TBD: probably field system / accessories) | `<div class="box mgs">` |
| 4 | 4746 – 6421 | 1675 | **Section 4** — (TBD) | `<div class="box mgs">` |
| 5 | 6421 – 8096 | 1675 | **Section 5** — (TBD) | `<div class="box mgs">` |
| 6 | 8096 – 10418 | 2322 | **Section 6** — last product feature (tallest, 2322px) | `<div class="box mgs">` |
| 7 | 10418 – 10619 | ~201 | **Footer** | `<footer>` |

## Observations

- Sections 2-5 are all exactly the same height (1675 px) — TE uses a consistent "product feature" pattern with identical vertical rhythm.
- Section 6 is 2322 px (taller) — probably the "explore / field system" final block.
- Hero is 1308 px (visible at viewport arrival, extends below 900px fold).
- Each section has its own full-bleed image + overlay text structure.

## Section notation for builder dispatch

- `HeroSection` (y 0-1308) — priority 1, contains the signature TE move
- `FeatureSection2` (y 1308-3071) — EP-133 dark
- `FeatureSection3` (y 3071-4746)
- `FeatureSection4` (y 4746-6421)
- `FeatureSection5` (y 6421-8096)
- `FeatureSection6` (y 8096-10418)
- `SiteFooter` (y 10418-10619)
- `SiteHeader` (fixed at top)

## Layout pattern

Each "box mgs" section is a vertical rhythm block. The spacing token `--space-xl: 0.04591×cw` ≈ 66px at 1440 desktop handles the section gaps. Section internal padding uses `--space-lg` or `--space-md`.

`_root_rewic_1` on nav is a CSS-Modules hash pattern — the rewic hash identifies the nav component scope; we don't need to preserve the hash, just the computed styles.
