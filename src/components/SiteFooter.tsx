/**
 * Footer — mirrors the bottom 5 <section> blocks on the TE home page:
 *   (a) free-shipping banner
 *   (b) newsletter signup
 *   (c) link rail (store / guides / downloads / support / press / contact / terms)
 *   (d) wordmark + company statement
 *   (e) address / copyright
 */
export function SiteFooter() {
  return (
    <footer
      className="w-full bg-te-grey-100 text-te-black"
      style={{
        paddingInline: "var(--space-md)",
        paddingBlock: "var(--space-lg)",
      }}
    >
      {/* Free shipping banner */}
      <section
        className="flex items-center justify-center text-center"
        style={{
          paddingBlock: "var(--space-md)",
          borderTop: "1px solid var(--te-grey-300)",
          borderBottom: "1px solid var(--te-grey-300)",
          gap: "var(--space-lg)",
          fontSize: "var(--fs-15)",
          lineHeight: "var(--lh-15)",
        }}
      >
        <span>free shipping over $120*</span>
        <span>14 day return policy</span>
        <span className="text-te-grey-700">
          *excludes field desk. please see{" "}
          <a href="/terms" className="underline">
            terms and conditions
          </a>
        </span>
      </section>

      {/* Newsletter */}
      <section
        className="flex w-full"
        style={{
          paddingBlock: "var(--space-lg)",
          gap: "var(--space-lg)",
        }}
      >
        <div
          className="flex flex-col"
          style={{ gap: "var(--space-sm)", flex: "1 1 0" }}
        >
          <h2
            className="font-light"
            style={{
              fontFamily: "var(--font-te-40), Unicode, sans-serif",
              fontSize: "var(--fs-30)",
              lineHeight: "var(--lh-30)",
              margin: 0,
            }}
          >
            join our newsletter
          </h2>
        </div>
        <form
          action="/newsletter"
          method="post"
          className="flex items-center"
          style={{
            flex: "1 1 0",
            gap: "var(--space-sm)",
            borderBottom: "1px solid var(--te-black)",
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="your email address"
            className="w-full bg-transparent outline-none placeholder:text-te-grey-700"
            style={{
              fontSize: "var(--fs-20)",
              lineHeight: "var(--lh-20)",
              paddingBlock: "var(--space-xs)",
            }}
            aria-label="email for newsletter"
          />
          <button
            type="submit"
            className="text-te-blue"
            style={{ fontSize: "var(--fs-15)", lineHeight: "var(--lh-15)" }}
          >
            newsletter
          </button>
        </form>
      </section>

      {/*
        Link rail — mirrors the live TE footer's 12-column grid with asymmetric
        spans. Live layout (inspected at 1440 viewport):
          - parent: grid-template-columns: repeat(12, minmax(0, 1fr))
          - left half (span 6): horizontal flex <ul> of inline links
          - right half (span 4 + span 2): wordmark reprise + company tag
        Uses --footer-column as the anchor width for the right-hand blocks.
      */}
      <section
        className="grid w-full"
        style={{
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          columnGap: "var(--space-md)",
          rowGap: "var(--space-sm)",
          paddingBlock: "var(--space-lg)",
          borderTop: "1px solid var(--te-grey-300)",
          fontSize: "var(--fs-15)",
          lineHeight: "var(--lh-15)",
        }}
      >
        <ul
          className="flex flex-row flex-wrap items-start"
          style={{
            gridColumn: "span 6 / span 6",
            gap: "var(--space-md)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {FOOTER_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-te-blue transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="flex flex-col text-te-grey-700"
          style={{
            gridColumn: "span 4 / span 4",
            width: "var(--footer-column)",
            gap: "var(--space-xs)",
          }}
        >
          <span>newsletter</span>
          <a
            href="/newsletter"
            className="text-te-black hover:text-te-blue transition-colors"
          >
            sign up
          </a>
          <a
            href="https://instagram.com/teenageengineering"
            className="text-te-black hover:text-te-blue transition-colors"
          >
            instagram
          </a>
        </div>

        <div
          className="flex flex-col items-end text-te-grey-700"
          style={{
            gridColumn: "span 2 / span 2",
            gap: "var(--space-xs)",
          }}
        >
          <span>teenage engineering</span>
        </div>
      </section>

      {/* Address + copyright */}
      <section
        className="flex w-full items-end justify-between"
        style={{
          paddingTop: "var(--space-lg)",
          borderTop: "1px solid var(--te-grey-300)",
          fontSize: "var(--fs-10)",
          lineHeight: "var(--lh-10)",
          color: "var(--te-grey-700)",
        }}
      >
        <address className="not-italic">
          textilgatan 31
          <br />
          120 30 stockholm
          <br />
          sweden
        </address>
        <div>
          copyright © <span className="text-te-black">teenage engineering</span> all rights reserved
          <br />
          ©2026 teenage engineering
        </div>
      </section>
    </footer>
  );
}

/**
 * Horizontal link rail shown in the footer — mirrors the live TE footer's
 * <ul class="_links_yrkht_25"> inline list.
 */
const FOOTER_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "visit store", href: "/store" },
  { label: "retailers", href: "/retailers" },
  { label: "press", href: "/press" },
  { label: "support", href: "/support" },
  { label: "contact", href: "/contact" },
  { label: "terms", href: "/terms" },
];
