import type { CSSProperties } from "react";

/**
 * One of the ~dozen product "feature" blocks on /products.
 *
 * Each block is a full-width tile with its product image full-bleed and the
 * product family name overlaid bottom-left. Some blocks are paired side-by-side
 * (TP-7 + OB-4, CM-15 + TX-6) so this component supports 1 / 2 / 3 column rows.
 */

export type Theme = "dark" | "light";

export interface FeatureTile {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly imageId: string;
  readonly theme?: Theme;
  /** Background behind the image tile. */
  readonly background?: string;
  /** Override label color when theme isn't enough. */
  readonly labelColor?: string;
}

export interface ProductFeatureProps {
  readonly tiles: ReadonlyArray<FeatureTile>;
  /** Height as a fraction of --client-width. Default 0.5 per TE's rhythm. */
  readonly aspect?: number;
  /** Outer container background (defaults to grey-100). */
  readonly background?: string;
}

export function ProductFeature({
  tiles,
  aspect = 0.5,
  background = "var(--te-grey-100)",
}: ProductFeatureProps) {
  return (
    <section
      className="flex w-full"
      style={{
        backgroundColor: background,
        borderTop: "1px solid var(--te-grey-300)",
      }}
    >
      {tiles.map((tile, i) => {
        const isDark = tile.theme === "dark";
        const bg =
          tile.background ?? (isDark ? "var(--te-black)" : "rgb(246,248,247)");
        const labelColor =
          tile.labelColor ??
          (isDark ? "var(--te-grey-100)" : "var(--te-black)");

        const tileStyle: CSSProperties = {
          flex: "1 1 0",
          height: `calc(${aspect} * var(--client-width))`,
          backgroundColor: bg,
          borderRight:
            i < tiles.length - 1
              ? "1px solid var(--te-grey-300)"
              : undefined,
        };

        return (
          <a
            key={tile.id}
            href={tile.href}
            className="relative block overflow-hidden"
            style={tileStyle}
          >
            <img
              src={`/images/products/${tile.imageId}_2048.webp`}
              alt=""
              loading="lazy"
              width={4096}
              height={4096}
              className="pointer-events-none absolute left-1/2 top-1/2 w-full h-auto -translate-x-1/2 -translate-y-1/2"
            />

            <div
              className="absolute"
              style={{
                left: "var(--space-md)",
                top: `calc(${aspect - 0.04} * var(--client-width))`,
              }}
            >
              <span
                style={{
                  color: labelColor,
                  fontSize: "var(--fs-30)",
                  lineHeight: "var(--lh-30)",
                  fontWeight: 300,
                }}
              >
                {tile.label}
              </span>
            </div>
          </a>
        );
      })}
    </section>
  );
}
