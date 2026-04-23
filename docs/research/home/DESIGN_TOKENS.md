# Teenage Engineering — Design Tokens (Home page)

Extracted 2026-04-23 from `https://teenage.engineering/` via curl + getComputedStyle.
Source of truth: `docs/research/home/root.css` (raw 14.4 KB).

## Architecture

TE's entire layout scales off **one master variable: `--client-width: 100vw`**. All spacing, font sizes, and line heights are computed as fractions of that. This is why body font was `23.5102px` at 1440px viewport (1440 × 0.01633 ≈ 23.5).

**Single breakpoint:** `@media (min-width: 768px)` — desktop variants cut everything roughly in half (because desktop has more horizontal real estate, same proportions compress).

## Color palette (16 tokens)

| Token | Hex | Use |
|---|---|---|
| `--white` | `#ffffff` | Pure white |
| `--te-white` | `#f5f5f5` | Product background |
| `--te-black` | `#0f0e12` | Near-black (text on white) |
| `--te-grey-100` | `#e5e5e5` | **Body background** (the signature soft gray) |
| `--te-grey-200` | `#cccccc` | |
| `--te-grey-300` | `#b2b2b2` | |
| `--te-grey-500` | `#a1a7af` | Muted text |
| `--te-grey-600` | `#767676` | |
| `--te-grey-700` | `#7f7f7f` | |
| `--te-grey-900` | `#4d4d4d` | |
| `--te-grey-1000` | `#272727` | |
| `--te-blue` | `#0071bb` | **"explore offer" link color** |
| `--te-green` | `#006837` | Success |
| `--te-orange` | `#f05a24` | |
| `--te-red` | `#b81d13` | Error |
| `--te-yellow` | `#fab413` | |

## Fonts (4 TE + Unicode fallback)

| Family | Weight | File | Size |
|---|---|---|---|
| `te-20` | 100 (Thin) | `/assets/TE20T.C-qNTEkY.woff2` | 18 KB |
| `te-20` | 300 (Light) | `/assets/TE20L.B96qqQct.woff2` | 23 KB |
| `te-40` | 100 (Thin) | `/assets/TE40T.B7PiUso2.woff2` | 18 KB |
| `te-40` | 300 (Light) | `/assets/TE40L.BfLkqdKa.woff2` | 23 KB |
| `Unicode` | 300 | local only — Hiragino Sans W3 → Hiragino Kaku Gothic Pro → Osaka → Meiryo → MS PGothic → sans-serif | — |

All downloaded to `public/fonts/`. Font-display: swap. Features: `"kern" 1, "liga" 1, "dlig" 0`.

Body font stack: **`te-20, Unicode, sans-serif`** (the Unicode family is the Japanese fallback so Japanese characters like the "10代工学" copy render in Hiragino).

## Viewport-relative scales

### Spacing (mobile / desktop)
| Token | Mobile (<768px) | Desktop (≥768px) |
|---|---|---|
| `--space-xs` | `0.01020 × cw` | `0.00510 × cw` |
| `--space-sm` | `0.02040 × cw` | `0.01020 × cw` |
| `--space-md` | `0.03061 × cw` | `0.01530 × cw` |
| `--space-lg` | `0.04591 × cw` | `0.02295 × cw` |
| `--space-xl` | `0.09183 × cw` | `0.04591 × cw` |

### Font size scale
| Token | Mobile | Desktop | At 1440 desktop |
|---|---|---|---|
| `--fs-10` | `0.0184 × cw` | `0.00918 × cw` | 13.2 px |
| `--fs-15` | `0.0265 × cw` | `0.01326 × cw` | 19.1 px |
| `--fs-20` | `0.0367 × cw` | `0.01836 × cw` | 26.4 px |
| `--fs-25` | `0.0469 × cw` | `0.02346 × cw` | 33.8 px |
| `--fs-30` | `0.0551 × cw` | `0.02755 × cw` | 39.7 px |
| `--fs-40` | `0.0735 × cw` | `0.03673 × cw` | 52.9 px |

### Line height scale (same structure)
| Token | Mobile | Desktop |
|---|---|---|
| `--lh-10` | `0.0204 × cw` | `0.01020 × cw` |
| `--lh-15` | `0.0306 × cw` | `0.01530 × cw` |
| `--lh-20` | `0.0408 × cw` | `0.02040 × cw` |
| `--lh-25` | `0.0612 × cw` | `0.03061 × cw` |
| `--lh-30` | `0.0612 × cw` | `0.03061 × cw` |
| `--lh-40` | `0.0816 × cw` | `0.04081 × cw` |

## Layout tokens

- `--base-design-width: 980` — design reference width
- `--viewport-height: 100vh`
- `--header-height: 0.18367 × cw` (mobile) / `0.08163 × cw` (desktop)
- `--footer-height: 0.06632 × cw`
- `--page-height: calc(100vh - var(--header-height))`
- `--footer-column: 0.21938 × cw`
- `--tile-border-radius: 0.02551 × cw` (mobile) / `0` (desktop)
- `--tile-padding: 2vw` (mobile) / `1vw` (desktop)
- `--round: 9999px`
- `--btn-min-click-area: 48px`
- `--client-width: 100vw` (the master scaling variable)

## Z-index layers
- `--z-over: 100`
- `--z-navigation: 1000`
- `--z-modal-backdrop: 2000`
- `--z-dialog: 2001`

## Theme tokens (dynamic)
TE uses a `--theme-*` layer on top of the raw palette, set via class-based theming per section/page:
- `--theme-body-bc`, `--theme-bc`, `--theme-fc` (background, foreground)
- `--theme-fct`, `--theme-mc`
- `--theme-c1` through `--theme-c11` (accent slots)
- `--theme-op` (opacity), `--theme-dt` (transition duration)
- `--product-background-color: #f5f5f5`

## Implementation note for the clone
Replicate the exact custom-property architecture. Do NOT translate to Tailwind arbitrary values per element — the scaling is designed to be uniform. Set `--client-width: 100vw` on `:root`, define the full scale, and use `var(--fs-20)` etc. in component CSS. This preserves TE's perfect-at-every-width property.
