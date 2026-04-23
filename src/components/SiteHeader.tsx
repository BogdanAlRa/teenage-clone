import type { ComponentType, SVGProps } from "react";
import {
  BagIcon,
  FinderIcon,
  JapaneseBlock,
  LatestIcon,
  ProductsIcon,
  StoreIcon,
  TEWordmark,
  TenLogo,
} from "./icons";

/**
 * Header nav columns. Each top-level label has an icon above it and three
 * sub-labels beneath, exactly like the original TE site. The icons are
 * extracted verbatim from the live 980×80 header SVG (see icons.tsx).
 */
const NAV_COLUMNS: ReadonlyArray<{
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  sub: ReadonlyArray<{ label: string; href: string }>;
}> = [
  {
    label: "products",
    href: "/products",
    Icon: ProductsIcon,
    sub: [
      { label: "instruments", href: "/products/instruments" },
      { label: "loudspeakers", href: "/products/loudspeakers" },
      { label: "designs", href: "/products/designs" },
    ],
  },
  {
    label: "store",
    href: "/store",
    Icon: StoreIcon,
    sub: [
      { label: "visit store", href: "/store" },
      { label: "cart & checkout", href: "/store/checkout" },
      { label: "deals", href: "/store/deals" },
    ],
  },
  {
    label: "latest",
    href: "/latest",
    Icon: LatestIcon,
    sub: [
      { label: "newsletter", href: "/newsletter" },
      { label: "instagram", href: "https://instagram.com/teenageengineering" },
      { label: "now", href: "/now" },
    ],
  },
  {
    label: "finder",
    href: "/finder",
    Icon: FinderIcon,
    sub: [
      { label: "guides & downloads", href: "/guides" },
      { label: "support", href: "/support" },
      { label: "search", href: "/search" },
    ],
  },
];

/**
 * Nav-icon hover CSS. Mirrors teenage.engineering's own preparation rules
 * (`transform-box: fill-box; transform-origin: center` on #wings) and adds
 * the hover-triggered animations TE drives via a data-attribute toggle.
 * Scoped via [data-te-nav-link] so only header links animate their icons.
 */
const TE_NAV_ICON_CSS = `
.te-nav-link svg path.te-nav-icon-wings,
.te-nav-link svg path.te-nav-icon-bag,
.te-nav-link svg path.te-nav-icon-latest,
.te-nav-link svg path.te-nav-icon-search {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}
.te-nav-link:hover svg path.te-nav-icon-wings {
  transform: rotate(45deg);
}
.te-nav-link:hover svg path.te-nav-icon-bag {
  transform: scale(1.08);
}
.te-nav-link:hover svg path.te-nav-icon-latest {
  transform: rotate(45deg);
}
.te-nav-link:hover svg path.te-nav-icon-search {
  transform: rotate(-12deg);
}
`;

export function SiteHeader() {
  return (
    <header
      className="relative w-full bg-te-grey-100 text-te-black z-[1000]"
      style={{
        paddingInline: "var(--space-md)",
        paddingBlock: "var(--space-md)",
      }}
    >
      <style>{TE_NAV_ICON_CSS}</style>
      <div
        className="flex w-full items-start justify-between"
        style={{ gap: "var(--space-md)" }}
      >
        {/* Wordmark column */}
        <a
          href="/"
          className="block shrink-0"
          style={{ width: "calc(0.22 * var(--client-width))" }}
          aria-label="teenage engineering home"
        >
          <TEWordmark className="block w-full h-auto" />
        </a>

        {/* Nav columns */}
        <nav
          className="flex flex-1 items-start"
          style={{ gap: "var(--space-lg)" }}
        >
          {NAV_COLUMNS.map((col) => {
            const Icon = col.Icon;
            return (
              <div
                key={col.label}
                className="flex flex-col"
                style={{ gap: "calc(var(--space-xs) * 0.5)" }}
              >
                <a
                  href={col.href}
                  data-te-nav-link={col.label}
                  className="te-nav-link flex flex-col text-te-black hover:text-te-blue transition-colors"
                  style={{ gap: "calc(var(--space-xs) * 0.5)" }}
                >
                  <Icon
                    className="block text-te-black"
                    style={{
                      width: "var(--space-lg)",
                      height: "var(--space-lg)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "var(--fs-20)",
                      lineHeight: "var(--lh-20)",
                    }}
                  >
                    {col.label}
                  </span>
                </a>
                {col.sub.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-te-grey-700 hover:text-te-black transition-colors"
                    style={{
                      fontSize: "var(--fs-10)",
                      lineHeight: "var(--lh-10)",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            );
          })}
        </nav>

        {/* Japanese block */}
        <div
          className="shrink-0 text-te-black"
          style={{ width: "calc(0.10 * var(--client-width))" }}
          aria-label="brand statement, japanese"
        >
          <JapaneseBlock className="block w-full h-auto" />
        </div>

        {/* TE "TO" hexagonal monogram + cart bag. Logo size matches --space-xl
            (~66px at 1440) per brief; cart sits beneath it. */}
        <div
          className="flex shrink-0 flex-col items-end"
          style={{ gap: "var(--space-sm)" }}
        >
          <TenLogo
            className="block text-te-black"
            style={{ width: "var(--space-xl)", height: "var(--space-xl)" }}
          />
          <a
            href="/store/checkout"
            aria-label="cart and checkout"
            className="block text-te-black hover:text-te-blue transition-colors"
          >
            <BagIcon
              style={{
                width: "calc(0.024 * var(--client-width))",
                height: "auto",
              }}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
