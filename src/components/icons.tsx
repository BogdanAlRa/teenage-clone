// Icons extracted from teenage.engineering home page raw HTML.
// Only the SVGs actually used on the home page are exported here.

import type { SVGProps } from "react";

/**
 * "teenage engineering" wordmark — viewBox 0 0 980 80.
 * The original uses SVG text with Univers Next Pro; we approximate with
 * the loaded TE20 face at the same size so the logo metrics match.
 * Kept simple (no filters/masks) to avoid the monotype font call.
 */
export function TEWordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 980 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="teenage engineering"
      {...props}
    >
      <text
        x="0"
        y="56"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-te-20), Unicode, sans-serif",
          fontWeight: 300,
          fontSize: "60px",
          letterSpacing: "-0.5px",
        }}
      >
        teenage engineering
      </text>
    </svg>
  );
}

/**
 * TE top-right "TO" monogram — extracted verbatim from path#logo in the live
 * 980×80 header SVG (x=818, y=8, w=125, h=64). The shape is the signature
 * hexagonal frame enclosing a TE "TO" ligature.
 */
export function TenLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="818 8 125 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="teenage engineering"
      {...props}
    >
      <path
        fill="currentColor"
        d="M926.5965,68.8102h-32.6346l-16.3654-29.0037,16.3635-29.0037h32.6346l16.3654,29.0037-16.3635,29.0037ZM835.5006,30.1389l6.1496,3.5767-5.0146,8.8945-6.1496-3.5767-12.486,22.1389,18.3513,10.8278,10.0272-17.6926,21.9452,12.9545c4.8233,2.8028,10.878,1.1601,13.621-3.7695,2.7424-4.9296,1.1351-11.1176-3.6882-13.9211l-21.8509-13.0509,9.9322-17.6926-18.3494-10.8278-12.4879,22.1389h.0002ZM909.96,27.25c-7.0416,0-12.75,5.7084-12.75,12.75s5.7084,12.75,12.75,12.75,12.75-5.7084,12.75-12.75-5.7084-12.75-12.75-12.75Z"
      />
    </svg>
  );
}

/**
 * products category icon — extracted verbatim from path#wings in the live
 * 980×80 header SVG. Four-petal pinwheel cluster. When an ancestor element
 * carries `data-te-nav-link`, hovering rotates the wings 45° — mirroring
 * TE's own `#header #wings { transform-box: fill-box; transform-origin: center }`
 * prep rule (which they animate via a data-pinwheel-spinning toggle).
 */
export function ProductsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="161 11 28 28"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="products"
      {...props}
    >
      <path
        id="wings"
        className="te-nav-icon-wings"
        fill="currentColor"
        d="M188.0538,27.5479c-1.5898-1.3402-3.6892-.5929-4.8749-.2964-1.1859.2964-2.3282.4006-3.4257,0-.9996-.3649-1.2767-1.1016-1.353-1.7288.2657-.4835.683-.5226,1.0252-.5226.8304,0,3.1927,0,4.7365-.6464,2.1429-.8971,3.1808-1.7857,3.7947-3.8763.3719-1.5364.1352-3.1523-.7469-4.4683-1.0566-1.5759-3.7246-3.7003-5.1143-4.4116-1.2529-.6412-3.3534-1.0675-4.5474.349-1.3402,1.5897-.5929,3.689-.2964,4.8749.2964,1.1857.4006,2.3282,0,3.4255-.3651.9997-1.1017,1.2767-1.7291,1.353-.4832-.2655-.5223-.683-.5223-1.0252,0-.8304,0-3.1927-.6464-4.7365-.8971-2.1428-1.7857-3.1808-3.8763-3.7945-1.5364-.372-3.1523-.1354-4.4683.7469-1.5759,1.0564-3.7003,3.7244-4.4116,5.1141-.6412,1.2529-1.0675,3.3534.3488,4.5474,1.5898,1.3402,3.6892.593,4.875.2964,1.1857-.2964,2.3282-.4006,3.4255,0,.9996.3649,1.2767,1.1014,1.353,1.7288-.2657.4835-.683.5228-1.0252.5228-.8304,0-3.1927,0-4.7365.6463-2.1428.8971-3.1808,1.7857-3.7945,3.8763-.372,1.5366-.1354,3.1523.7468,4.4683,1.0566,1.5759,3.7246,3.7005,5.1143,4.4116,1.2529.6412,3.3534,1.0675,4.5474-.349,1.3402-1.5897.593-3.6892.2965-4.8749-.2965-1.1857-.4006-2.3282,0-3.4255.3649-.9997,1.1016-1.2767,1.7288-1.353.4835.2655.5226.683.5226,1.0252,0,.8304,0,3.1927.6464,4.7365.8971,2.1429,1.7857,3.1808,3.8763,3.7947,1.5366.372,3.1523.1352,4.4683-.7469,1.5759-1.0566,3.7005-3.7246,4.4116-5.1143.6412-1.2531,1.0675-3.3534-.3488-4.5474Z"
      />
    </svg>
  );
}

/**
 * store category icon — verbatim from path#bag. Bag + handle. Animates on
 * hover with the "bulge" scale TE uses in their root.css for the bag.
 */
export function StoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="311 11 28 58"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="store"
      {...props}
    >
      <path
        id="bag"
        className="te-nav-icon-bag"
        fill="currentColor"
        d="M334,11l4.8526,4.1466c.315.315.0919.8535-.3536.8535h-26.998c-.4454,0-.6685-.5386-.3536-.8535l4.8526-4.1466h18ZM339,30h-28v39h28V30ZM333.375,17v12h5.625v-12h-5.625ZM311,17v12h5.625v-12h-5.625Z"
      />
    </svg>
  );
}

/**
 * latest category icon — verbatim from path#latest. Square frame rotates
 * 45° on hover for the "latest" tile.
 */
export function LatestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="431 10 59 59"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="latest"
      {...props}
    >
      <path
        id="latest"
        className="te-nav-icon-latest"
        fill="currentColor"
        d="M484.5,15.3065v49h-49V15.3065h49M488.5,11.3065h-57v57h57V11.3065h0Z"
      />
    </svg>
  );
}

/**
 * finder category icon — verbatim from path#search. Magnifying glass tilts
 * slightly on hover.
 */
export function FinderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="581 41 29 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="finder"
      {...props}
    >
      <path
        id="search"
        className="te-nav-icon-search"
        fill="currentColor"
        d="M606.1317,44.4289c-1.9526-1.9526-4.5118-2.9289-7.0711-2.9289s-5.1184.9763-7.0711,2.9289c-3.8028,3.8029-3.8914,9.9001-.288,13.8235l-1.4391,1.4393-.8839-.8838-7.7781,7.7778,2.8286,2.8281,7.7781-7.7778-.884-.8839,1.4655-1.4656c1.8257,1.4742,4.0483,2.2134,6.2721,2.2134,2.5592,0,5.1185-.9763,7.0711-2.9289,3.9052-3.9052,3.9052-10.2369,0-14.1421ZM605.071,57.5104c-1.6054,1.6054-3.74,2.4896-6.0104,2.4896s-4.405-.8842-6.0104-2.4896c-3.3141-3.3141-3.3141-8.7067,0-12.0208,1.6054-1.6054,3.74-2.4896,6.0104-2.4896s4.405.8842,6.0104,2.4896c3.3141,3.3142,3.3141,8.7067,0,12.0208Z"
      />
    </svg>
  );
}

/** Chevron-right used between nav items and as arrow accents. */
export function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 6L15 12L9 18" />
    </svg>
  );
}

/** Three-dot menu (mobile). */
export function DotsMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 15 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <g fill="currentColor">
        <circle cx="15" cy="20" r="15" />
        <circle cx="15" cy="75" r="15" />
        <circle cx="15" cy="130" r="15" />
      </g>
    </svg>
  );
}

/** Shopping bag icon from the header. */
export function BagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 33 60.5"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="cart"
      {...props}
    >
      <path
        d="M6.55.25h20l5,5H1.55L6.55.25ZM32.75,20.25H.25v40h32.5V20.25ZM26.45,6.55v12.5h6.3V6.55h-6.3ZM.25,6.55v12.5h6.2V6.55H.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Small SIM-card / device icon used as a generic sub-mark. */
export function SimIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 30 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H26C28.2091 40 30 38.2091 30 36V4C30 1.79086 28.2091 0 26 0H4ZM11 4C9.89543 4 9 4.89543 9 6C9 7.10457 9.89543 8 11 8H19C20.1046 8 21 7.10457 21 6C21 4.89543 20.1046 4 19 4H11Z"
      />
    </svg>
  );
}

/**
 * Japanese brand-statement paragraph — rendered as real <text> in an SVG
 * so the line-wrap and metric-fit matches TE's original exactly. Colors
 * inherit via currentColor. Uses the "Unicode" body face fallback for
 * Hiragino/Osaka on the user's machine.
 */
export function JapaneseBlock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 98 78"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <text
        transform="translate(0 8)"
        fontSize="8"
        style={{ fontFamily: "Unicode, sans-serif", fontWeight: 300 }}
      >
        <tspan x="0" y="0">
          10代工学は未来の製品とコ
        </tspan>
        <tspan x="0" y="9.75">
          ミュニケーションを生み出
        </tspan>
        <tspan x="0" y="19.5">
          すスタジオです。私たちの
        </tspan>
        <tspan x="0" y="29.25">
          ミッションは先端工学を用
        </tspan>
        <tspan x="0" y="39">
          いて上質で機能的なデザイ
        </tspan>
        <tspan x="0" y="48.75">
          ンの製品を作り出すことで
        </tspan>
        <tspan x="0" y="58.5">
          す。是非、新たなスタイル
        </tspan>
        <tspan x="0" y="68.25">
          で音楽をお楽しみくだい。
        </tspan>
      </text>
    </svg>
  );
}
