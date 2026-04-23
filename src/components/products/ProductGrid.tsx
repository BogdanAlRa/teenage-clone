import type { CSSProperties } from "react";

/**
 * Grid of square product thumbnails at the bottom of /products.
 *
 * Each thumbnail is a simple tile with the product image centered and the
 * product name rendered below it. Columns default to 3 which matches the
 * 3-up rail TE uses on 1440px-class viewports.
 */

export interface GridItem {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly imageId: string;
  /** Tile background (defaults to near-white). */
  readonly background?: string;
}

export interface ProductGridProps {
  readonly items: ReadonlyArray<GridItem>;
  readonly columns?: number;
}

export function ProductGrid({ items, columns = 3 }: ProductGridProps) {
  const style: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    borderTop: "1px solid var(--te-grey-300)",
  };

  return (
    <section className="w-full bg-te-grey-100 text-te-black" style={style}>
      {items.map((item, i) => {
        const row = Math.floor(i / columns);
        const col = i % columns;
        const isLastCol = col === columns - 1;
        const tileStyle: CSSProperties = {
          backgroundColor: item.background ?? "rgb(246,248,247)",
          borderRight: isLastCol ? undefined : "1px solid var(--te-grey-300)",
          borderBottom:
            row <
            Math.floor((items.length - 1) / columns)
              ? "1px solid var(--te-grey-300)"
              : undefined,
        };

        return (
          <a
            key={item.id}
            href={item.href}
            className="relative flex flex-col"
            style={tileStyle}
          >
            <div
              className="relative w-full"
              style={{
                height: "calc(0.35714285714285715 * var(--client-width))",
              }}
            >
              <img
                src={`/images/products/${item.imageId}_2048.webp`}
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
                color: "var(--te-black)",
                fontSize: "var(--fs-15)",
                lineHeight: "var(--lh-15)",
              }}
            >
              <span>{item.name}</span>
              <span style={{ color: "var(--te-blue)" }}>buy now</span>
            </div>
          </a>
        );
      })}
    </section>
  );
}
