import type { CSSProperties, ReactNode } from "react";

/**
 * Hero block for the /products page.
 *
 * Matches the EP-133 K.O. II top-of-page hero on teenage.engineering/products:
 * a ~0.86 × client-width tile with the product laid flat, overlaid with
 * editorial type (eyebrow top-left, big headline + japanese red, bottom slab).
 *
 * Also reused for any big full-bleed product hero further down the page.
 */

export type Theme = "dark" | "light";

export interface ProductHeroProps {
  /** Image in public/images/products/{id}_2048.webp */
  readonly imageId: string;
  /** Destination when tile is clicked. */
  readonly href: string;
  /** Small eyebrow label, top-left. */
  readonly eyebrow?: string;
  /** Secondary eyebrow line (e.g. "NEW UPDATE 2.0 FULFILLING THE PROMISE"). */
  readonly eyebrowSecondary?: string;
  /** Big headline drawn ON TOP of the product surface (e.g. "K.O. II"). */
  readonly bigHeadline?: ReactNode;
  /** Japanese / secondary red tag shown below the big headline. */
  readonly japaneseTag?: string;
  /** Slab of small type at the bottom (e.g. "128 MB SAMPLER COMPOSER"). */
  readonly spec?: string;
  /** Short heading on the navigation strip below (e.g. "EP–133 K.O. II"). */
  readonly navLabel: string;
  /** Dark or light backdrop. */
  readonly theme?: Theme;
  /** Override backdrop color when theme isn't enough. */
  readonly background?: string;
  /** Tile aspect as a fraction of client width (default 0.8673 like FeatureSection). */
  readonly aspect?: number;
}

export function ProductHero({
  imageId,
  href,
  eyebrow,
  eyebrowSecondary,
  bigHeadline,
  japaneseTag,
  spec,
  navLabel,
  theme = "dark",
  background,
  aspect = 0.8673469387755103,
}: ProductHeroProps) {
  const isDark = theme === "dark";
  const bg = background ?? (isDark ? "var(--te-black)" : "rgb(246,248,247)");
  const textColor = isDark ? "var(--te-grey-100)" : "var(--te-black)";

  const sectionStyle: CSSProperties = {
    backgroundColor: bg,
    color: textColor,
  };

  return (
    <section className="w-full" style={sectionStyle}>
      <a
        href={href}
        className="relative block w-full overflow-hidden"
        style={{
          width: "100%",
          height: `calc(${aspect} * var(--client-width))`,
          backgroundColor: bg,
        }}
      >
        {/* Full-bleed product image */}
        <img
          src={`/images/products/${imageId}_2048.webp`}
          alt=""
          loading="eager"
          fetchPriority="high"
          width={5120}
          height={5120}
          className="pointer-events-none absolute left-1/2 top-1/2 w-full h-auto -translate-x-1/2 -translate-y-1/2"
        />

        {/* Eyebrow row — top-left */}
        {eyebrow ? (
          <div
            className="absolute flex items-baseline"
            style={{
              left: "var(--space-md)",
              top: "var(--space-md)",
              gap: "var(--space-md)",
              color: textColor,
              fontSize: "var(--fs-20)",
              lineHeight: "var(--lh-20)",
              fontWeight: 300,
            }}
          >
            <span>{eyebrow}</span>
            {eyebrowSecondary ? (
              <span
                style={{
                  fontSize: "var(--fs-10)",
                  lineHeight: "var(--lh-10)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                }}
              >
                {eyebrowSecondary}
              </span>
            ) : null}
          </div>
        ) : null}

        {/* Big centered headline (sits on the product surface) */}
        {bigHeadline ? (
          <div
            className="absolute left-1/2 -translate-x-1/2 text-center"
            style={{
              top: "calc(0.40 * var(--client-width))",
              color: textColor,
              fontFamily: "var(--font-te-40), Unicode, sans-serif",
              fontSize: "calc(0.12 * var(--client-width))",
              lineHeight: "0.95",
              letterSpacing: "-0.02em",
              fontWeight: 300,
              pointerEvents: "none",
            }}
          >
            {bigHeadline}
          </div>
        ) : null}

        {/* Japanese tag — red, smaller, directly under the big headline */}
        {japaneseTag ? (
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: "calc(0.56 * var(--client-width))",
              color: "var(--te-red)",
              fontSize: "var(--fs-20)",
              lineHeight: "var(--lh-20)",
              fontWeight: 300,
              pointerEvents: "none",
            }}
          >
            {japaneseTag}
          </div>
        ) : null}

        {/* Bottom spec slab */}
        {spec ? (
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: "calc(0.72 * var(--client-width))",
              color: textColor,
              fontSize: "var(--fs-15)",
              lineHeight: "var(--lh-15)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {spec}
          </div>
        ) : null}

        {/* Nav label — bottom-left, same placement as FeatureSection */}
        <div
          className="absolute"
          style={{
            left: "var(--space-md)",
            top: `calc(${aspect - 0.04} * var(--client-width))`,
          }}
        >
          <span
            style={{
              color: textColor,
              fontSize: "var(--fs-30)",
              lineHeight: "var(--lh-30)",
              fontWeight: 300,
            }}
          >
            {navLabel}
          </span>
        </div>
      </a>
    </section>
  );
}
