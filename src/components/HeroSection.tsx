/**
 * Hero section — "complete your system".
 *
 * Original TE markup uses a single <div class="box boximg"> at
 * height ≈ 0.908 × client-width with the hand-in-case image full-bleed
 * behind and text overlaid inside a c5 column at ~85% down the block.
 *
 * Image 69cbc54eb992a6550c10e92b_2048.webp is the highest-quality local copy.
 */
const HERO_IMAGE_ID = "69cbc54eb992a6550c10e92b";

export function HeroSection() {
  return (
    <a
      href="/complete-your-system"
      className="relative block w-full overflow-hidden"
      style={{
        height: "calc(0.9081632653061225 * var(--client-width))",
        backgroundColor: "var(--te-grey-1000)",
      }}
      aria-label="complete your system — explore offer"
    >
      {/* Full-bleed image */}
      <picture>
        <source
          media="(max-width: 800px)"
          srcSet={`/images/home/${HERO_IMAGE_ID}_2048.webp`}
        />
        <source
          media="(min-width: 801px)"
          srcSet={`/images/home/${HERO_IMAGE_ID}_5120.webp 5120w, /images/home/${HERO_IMAGE_ID}_2048.webp 2048w`}
          sizes="100vw"
        />
        <img
          src={`/images/home/${HERO_IMAGE_ID}_2048.webp`}
          alt=""
          loading="eager"
          fetchPriority="high"
          width={6000}
          height={6000}
          className="pointer-events-none absolute left-1/2 top-0 w-full h-auto -translate-x-1/2"
          style={{ transformOrigin: "0 0" }}
        />
      </picture>

      {/*
        Overlay copy — positioned per live TE home.
        Live measurements at 1440×862 (from site inspection):
          - hero box: 1440 × 1307.75 (ratio 0.9081)
          - text block top: 411px (ratio 0.2856 × cw)
          - text block left: 66px = var(--space-xl) at desktop
          - "complete your" font-size: 52.898px = var(--fs-40) at desktop
          - line-height: 58.78px = var(--lh-40)
          - "system" inner span: same 52.898px (inline TE class uses 0.0367347*cw which
             equals fs-40 at desktop)
          - "explore offer" color: te-blue at fs-20
      */}
      <div
        className="absolute left-0 right-0 flex flex-col"
        style={{
          top: "calc(0.2856 * var(--client-width))",
          paddingInline: "var(--space-xl)",
          gap: "var(--space-md)",
        }}
      >
        <h1
          className="text-te-grey-100 font-light"
          style={{
            fontFamily: "var(--font-te-40), Unicode, sans-serif",
            fontSize: "var(--fs-40)",
            lineHeight: "var(--lh-40)",
            margin: 0,
          }}
        >
          complete
          <br />
          your{" "}
          <span
            style={{
              fontFamily: "var(--font-te-40), Unicode, sans-serif",
              fontSize: "var(--fs-40)",
              lineHeight: "var(--lh-40)",
              color: "var(--te-grey-100)",
            }}
          >
            system
          </span>
        </h1>

        <div style={{ width: "calc(0.19897959183673466 * var(--client-width))" }}>
          <span
            className="text-te-blue"
            style={{
              fontSize: "var(--fs-20)",
              lineHeight: "var(--lh-20)",
            }}
          >
            explore offer
          </span>
        </div>
      </div>
    </a>
  );
}
