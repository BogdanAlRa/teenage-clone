import type { CSSProperties } from "react";
import type { NowImage } from "./now-data";

/**
 * A single feed image cell. Used inside the galleries that sandwich each
 * post's Q&A block. Props drive the 12-col grid span and an aspect-ratio
 * so the Swiss magazine rhythm is controlled from data, not ad-hoc CSS.
 */
export interface FeedItemProps {
  image: NowImage;
  /** If true, image eagerly preloads (used for the hero). */
  priority?: boolean;
  /** Override the tile background color. */
  background?: string;
  /** Extra styles passed through to the outer wrapper. */
  style?: CSSProperties;
}

export function FeedItem({
  image,
  priority = false,
  background = "var(--te-grey-200)",
  style,
}: FeedItemProps) {
  const { id, size, caption, span = 6, aspect = 1 } = image;
  const src = `/images/now/${id}_${size}.webp`;

  // Convert 12-col span to a CSS grid column span and a fractional width
  // so the component still looks right outside a CSS grid container.
  const colSpan = `span ${span} / span ${span}`;

  return (
    <figure
      className="m-0 flex flex-col"
      style={{
        gridColumn: colSpan,
        gap: "var(--space-xs)",
        ...style,
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: String(aspect),
          backgroundColor: background,
          borderRadius: "var(--tile-border-radius)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption ?? ""}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>
      {caption ? (
        <figcaption
          className="text-te-grey-700"
          style={{
            fontSize: "var(--fs-10)",
            lineHeight: "var(--lh-10)",
            paddingInline: "var(--space-xs)",
          }}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
