import type { ReactNode } from "react";
import { FeedItem } from "./FeedItem";
import { POSTS, type NowImage, type NowPost, type QAItem } from "./now-data";

/**
 * NowFeed — the whole /now page body. Renders each long-form feature post
 * in turn, separated by a hairline divider in var(--te-grey-300).
 *
 * The Swiss magazine rhythm lives in the per-post gallery spans: 12 = full
 * bleed, 8+4 = asymmetric split, 6+6 = symmetric pair. Spans are declared
 * in now-data.ts so the page structure is legible at a glance.
 */
export function NowFeed() {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        paddingInline: "var(--space-md)",
        paddingBlock: "var(--space-xl)",
        gap: "var(--space-xl)",
      }}
    >
      {POSTS.map((post, idx) => (
        <PostBlock key={post.slug} post={post} isFirst={idx === 0} />
      ))}

      {/* "all posts from 2025, 2024, ..." archive list — TE renders this at
          the bottom of /now. Keeping it minimal as a row of links. */}
      <Archive />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PostBlock — one long-form feature
// ──────────────────────────────────────────────────────────────────────────

function PostBlock({ post, isFirst }: { post: NowPost; isFirst: boolean }) {
  return (
    <article
      id={post.slug}
      className="flex w-full flex-col"
      style={{
        gap: "var(--space-lg)",
        borderTop: isFirst ? "none" : "1px solid var(--te-grey-300)",
        paddingTop: isFirst ? 0 : "var(--space-xl)",
      }}
    >
      {/* Headline — two-line: kicker (linked), then big title */}
      <Headline post={post} />

      {/* Hero image — full-bleed */}
      <div className="w-full">
        <GalleryGrid images={[post.hero]} priorityFirst />
      </div>

      {/* Intro paragraph(s) — 8-col wide, offset by 2 cols */}
      <Prose>
        {post.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      {/* First gallery — optional */}
      {post.preQAGallery && post.preQAGallery.length > 0 ? (
        <GalleryGrid images={post.preQAGallery} />
      ) : null}

      {/* Q&A body */}
      <Prose>
        {post.qa.map((item, i) => (
          <QABlock key={i} item={item} />
        ))}
      </Prose>

      {/* Closing gallery — optional */}
      {post.postQAGallery && post.postQAGallery.length > 0 ? (
        <GalleryGrid images={post.postQAGallery} />
      ) : null}

      {/* Outro link — e.g. "check out raghd's latest ep ..." */}
      {post.outro ? (
        <div
          className="w-full"
          style={{
            paddingInline: "calc(var(--client-width) * 0.16)",
            fontSize: "var(--fs-20)",
            lineHeight: "var(--lh-20)",
          }}
        >
          {post.outro.text}{" "}
          <a
            href={post.outro.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-te-blue hover:underline"
          >
            listen on spotify
          </a>
        </div>
      ) : null}
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Headline — kicker + title + self-link, as rendered by TE
// ──────────────────────────────────────────────────────────────────────────

function Headline({ post }: { post: NowPost }) {
  return (
    <header
      className="w-full"
      style={{
        paddingInline: "calc(var(--client-width) * 0.16)",
      }}
    >
      <h2
        className="m-0 font-light"
        style={{
          fontFamily: "var(--font-te-40), Unicode, sans-serif",
          fontSize: "var(--fs-40)",
          lineHeight: "var(--lh-40)",
          color: "var(--te-black)",
        }}
      >
        {post.kicker ? (
          <>
            <a
              href={`#${post.slug}`}
              className="text-te-black hover:text-te-blue transition-colors"
            >
              {post.kicker}
            </a>
            <br />
          </>
        ) : null}
        <span>{post.title}</span>
      </h2>
    </header>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Prose — 8-col measure, centered via 2-col offset on the left
// ──────────────────────────────────────────────────────────────────────────

function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-full flex flex-col"
      style={{
        paddingInline: "calc(var(--client-width) * 0.16)",
        gap: "var(--space-md)",
        fontSize: "var(--fs-15)",
        lineHeight: "var(--lh-15)",
        color: "var(--te-grey-900)",
      }}
    >
      {children}
    </div>
  );
}

function QABlock({ item }: { item: QAItem }) {
  return (
    <div className="flex flex-col" style={{ gap: "var(--space-sm)" }}>
      <p
        style={{
          fontSize: "var(--fs-20)",
          lineHeight: "var(--lh-20)",
          color: "var(--te-black)",
          margin: 0,
        }}
      >
        {item.q}
      </p>
      {item.a.map((para, i) => (
        <p key={i} style={{ margin: 0 }}>
          {para}
        </p>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// GalleryGrid — 12-col Swiss grid. Items carry their own span.
// ──────────────────────────────────────────────────────────────────────────

function GalleryGrid({
  images,
  priorityFirst = false,
}: {
  images: ReadonlyArray<NowImage>;
  priorityFirst?: boolean;
}) {
  return (
    <div
      className="grid w-full"
      style={{
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        gap: "var(--space-md)",
      }}
    >
      {images.map((img, i) => (
        <FeedItem key={`${img.id}-${i}`} image={img} priority={priorityFirst && i === 0} />
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Archive — year links (2025, 2024, 2023, 2022, 2021)
// ──────────────────────────────────────────────────────────────────────────

function Archive() {
  const YEARS = [2025, 2024, 2023, 2022, 2021];
  return (
    <section
      className="flex w-full items-start"
      style={{
        borderTop: "1px solid var(--te-grey-300)",
        paddingTop: "var(--space-xl)",
        gap: "var(--space-lg)",
        paddingInline: "calc(var(--client-width) * 0.16)",
      }}
    >
      <h3
        className="m-0 font-light"
        style={{
          fontFamily: "var(--font-te-40), Unicode, sans-serif",
          fontSize: "var(--fs-30)",
          lineHeight: "var(--lh-30)",
          flex: "0 0 auto",
          color: "var(--te-black)",
        }}
      >
        archive
      </h3>
      <ul
        className="flex list-none flex-col"
        style={{
          gap: "var(--space-xs)",
          padding: 0,
          margin: 0,
          fontSize: "var(--fs-20)",
          lineHeight: "var(--lh-20)",
        }}
      >
        {YEARS.map((y) => (
          <li key={y}>
            <a
              href={`/now/archive-${y}`}
              className="text-te-blue hover:underline"
            >
              {y}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
