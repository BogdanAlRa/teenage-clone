import type { CSSProperties } from "react";

export interface ProductCard {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly imageId: string;
  /** Background color of the product tile (TE ships each tile with its own near-white or dark bg). */
  readonly bg?: string;
}

/**
 * Where the hero image anchors inside its tile. TE composes sections with
 * per-section vertical rhythm — e.g. the EP-133 K.O. II section rests the
 * product at the bottom with ~40% negative space above, while other sections
 * center their product.
 */
export type HeroImagePosition = "top" | "center" | "bottom";

export interface FeatureSectionProps {
  /** Lead product name — overlaid bottom-left of the feature image. */
  readonly heading: string;
  /** Deep link for the feature tile. */
  readonly href: string;
  /** Image ID used for the large feature image. */
  readonly heroImageId: string;
  /** Background color of the large hero tile. */
  readonly heroBg?: string;
  /** Color of the headline overlay text. */
  readonly headingColor?: string;
  /** Row of sub-product cards shown below the main tile. */
  readonly products?: ReadonlyArray<ProductCard>;
  /** Dark-mode section (full black backdrop like EP-133 K.O. II). */
  readonly dark?: boolean;
  /** Vertical anchor for the hero image (defaults to "center"). */
  readonly imagePosition?: HeroImagePosition;
}

/**
 * Generic TE "box mgs" product feature. Renders a tall hero tile with the
 * product family name overlaid at bottom-left, then a horizontal rail of
 * sub-product cards (each with its own image, label, and "buy now").
 */
export function FeatureSection({
  heading,
  href,
  heroImageId,
  heroBg = "rgb(246,248,247)",
  headingColor,
  products = [],
  dark = false,
  imagePosition = "center",
}: FeatureSectionProps) {
  const sectionStyle: CSSProperties = dark
    ? { backgroundColor: "var(--te-black)", color: "var(--te-grey-100)" }
    : { backgroundColor: "var(--te-grey-100)", color: "var(--te-black)" };

  const effectiveHeadingColor =
    headingColor ?? (dark ? "var(--te-grey-100)" : "var(--te-black)");

  // Image anchor maps directly to top/left positioning + translate. Using
  // percentage-based positioning keeps the image inside the tile regardless
  // of aspect while honoring the intended vertical rhythm.
  const heroImgPositionStyle: CSSProperties =
    imagePosition === "bottom"
      ? { left: "50%", bottom: 0, transform: "translateX(-50%)", top: "auto" }
      : imagePosition === "top"
        ? { left: "50%", top: 0, transform: "translateX(-50%)", bottom: "auto" }
        : {
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          };

  return (
    <section
      className="w-full"
      style={{ ...sectionStyle, paddingBlock: "var(--space-md)" }}
    >
      {/* Hero tile */}
      <a
        href={href}
        className="relative block w-full overflow-hidden"
        style={{
          width: "100%",
          height: "calc(0.8673469387755103 * var(--client-width))",
          backgroundColor: heroBg,
        }}
      >
        <picture>
          <img
            src={`/images/home/${heroImageId}_2048.webp`}
            alt=""
            loading="lazy"
            width={5000}
            height={5000}
            className="pointer-events-none absolute w-full h-auto"
            style={heroImgPositionStyle}
          />
        </picture>

        <div
          className="absolute"
          style={{
            left: "var(--space-md)",
            top: "calc(0.826530612244898 * var(--client-width))",
          }}
        >
          <span
            style={{
              color: effectiveHeadingColor,
              fontSize: "var(--fs-30)",
              lineHeight: "var(--lh-30)",
              fontWeight: 300,
            }}
          >
            {heading}
          </span>
        </div>
      </a>

      {/* Product grid — one row of N cards, each with image / name / buy now */}
      {products.length > 0 ? (
        <div
          className="flex w-full"
          style={{
            borderTop: "1px solid var(--te-grey-300)",
            borderBottom: "1px solid var(--te-grey-300)",
          }}
        >
          {products.map((p, i) => (
            <a
              key={p.id}
              href={p.href}
              className="relative flex flex-col"
              style={{
                flex: `1 1 0`,
                borderRight:
                  i < products.length - 1
                    ? "1px solid var(--te-grey-300)"
                    : undefined,
                backgroundColor: p.bg ?? "rgb(246,248,247)",
              }}
            >
              <div
                className="relative w-full"
                style={{
                  height: "calc(0.35714285714285715 * var(--client-width))",
                }}
              >
                <img
                  src={`/images/home/${p.imageId}_2048.webp`}
                  alt=""
                  loading="lazy"
                  width={4096}
                  height={4096}
                  className="pointer-events-none absolute left-1/2 top-1/2 w-full h-auto -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div
                className="flex items-center justify-between"
                style={{
                  padding: "var(--space-sm) var(--space-md)",
                  color: dark ? "var(--te-grey-100)" : "var(--te-black)",
                  fontSize: "var(--fs-15)",
                  lineHeight: "var(--lh-15)",
                }}
              >
                <span>{p.name}</span>
                <span style={{ color: "var(--te-blue)" }}>buy now</span>
              </div>
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}
