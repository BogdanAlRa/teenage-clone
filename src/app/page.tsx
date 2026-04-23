import { FeatureSection } from "@/components/FeatureSection";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

// Content pulled directly from the teenage.engineering home page raw.html.
// Image IDs reference files in public/images/home/{id}_2048.webp.

export default function Home() {
  return (
    <main className="w-full bg-te-grey-100 text-te-black">
      <SiteHeader />

      {/* Section 1 — Hero: "complete your system" */}
      <HeroSection />

      {/* Section 2 — EP–133 K.O. II (dark, product anchored bottom) */}
      <FeatureSection
        heading="EP–133 K.O. II"
        href="/products/ep-133"
        heroImageId="6978c061edd4be589c072ea3"
        heroBg="rgb(246,248,247)"
        headingColor="var(--te-grey-100)"
        imagePosition="bottom"
        products={[
          {
            id: "ep-133",
            name: "EP–133 K.O. II",
            href: "/store/ep-133",
            imageId: "69679fcdc59421146f2da1d5",
          },
          {
            id: "ep-splash",
            name: "EP splash cover",
            href: "/store/ep-splash-cover",
            imageId: "654e3948255502e470bf2649",
          },
          {
            id: "ko-soft-bag",
            name: "K.O. II soft bag",
            href: "/store/ko-ii-soft-bag",
            imageId: "65bb545c604563e4f94c9726",
          },
        ]}
      />

      {/* Section 3 — riddim n' ting */}
      <FeatureSection
        heading="riddim n' ting"
        href="/products/riddim"
        heroImageId="691c2c32e6d1b72313eaddae"
        heroBg="rgb(246,248,247)"
        products={[
          {
            id: "ep-40-riddim",
            name: "EP–40 riddim",
            href: "/store/ep-40-riddim",
            imageId: "696755e3eb8e82548817c970",
          },
          {
            id: "ep-2350-ting",
            name: "EP–2350 ting",
            href: "/store/ep-2350-ting",
            imageId: "6909f5eece0edc6c5aa5ad94",
          },
          {
            id: "riddim-shoulder-bag",
            name: "riddim shoulder bag",
            href: "/store/riddim-shoulder-bag",
            imageId: "6967568e2862e5548d453dd4",
          },
        ]}
      />

      {/* Section 4 — field system */}
      <FeatureSection
        heading="field system™"
        href="/products/field"
        heroImageId="696754d96ee112550bbd1dfa"
        heroBg="var(--te-grey-1000)"
        headingColor="var(--te-grey-300)"
        dark
        products={[
          {
            id: "tp-7",
            name: "TP–7",
            href: "/store/tp-7",
            imageId: "6936cf6b31b17b0c0d42b5a3",
            bg: "rgb(246,248,247)",
          },
          {
            id: "cm-15",
            name: "CM–15",
            href: "/store/cm-15",
            imageId: "6936cf7cd5f3c70c0de0ca72",
            bg: "rgb(246,248,247)",
          },
          {
            id: "tx-6",
            name: "TX–6",
            href: "/store/tx-6",
            imageId: "6936cf7306f1cb0c0d2f44b3",
            bg: "rgb(246,248,247)",
          },
        ]}
      />

      {/* Section 5 — OB–4 */}
      <FeatureSection
        heading="OB–4"
        href="/products/ob-4"
        heroImageId="65d76f2629ef82a510098040"
        heroBg="rgb(246,248,247)"
        headingColor="var(--te-grey-300)"
        products={[
          {
            id: "ob-4-white",
            name: "OB–4 white",
            href: "/store/ob-4-white",
            imageId: "65d60dadbc5d93ee6c84d6df",
          },
          {
            id: "ob-4-black",
            name: "OB–4 black",
            href: "/store/ob-4-black",
            imageId: "64e4bae0f6978f8fbc213275",
          },
          {
            id: "ob-4-red",
            name: "OB–4 red",
            href: "/store/ob-4-red",
            imageId: "655f76b353ef663eb648bfd9",
          },
        ]}
      />

      {/* Section 6 — pocket operator (the tallest section, 9 sub-products) */}
      <FeatureSection
        heading="pocket operator®"
        href="/products/pocket-operator"
        heroImageId="6936d02279d6e114f9dd6fdf"
        heroBg="rgb(246,248,247)"
        products={[
          {
            id: "po-12",
            name: "PO-12 rhythm",
            href: "/store/po-12",
            imageId: "694908b63b11bf435b471530",
          },
          {
            id: "po-14",
            name: "PO-14 sub",
            href: "/store/po-14",
            imageId: "694908d835c9f0435af791be",
          },
          {
            id: "po-16",
            name: "PO-16 factory",
            href: "/store/po-16",
            imageId: "694908efd641af435baca4f5",
          },
          {
            id: "po-20",
            name: "PO-20 arcade",
            href: "/store/po-20",
            imageId: "6949090506ea89435a286b13",
          },
          {
            id: "po-24",
            name: "PO-24 office",
            href: "/store/po-24",
            imageId: "6949090aa797d8435b724ccc",
          },
          {
            id: "po-28",
            name: "PO-28 robot",
            href: "/store/po-28",
            imageId: "6949090e44fa5f435a932b59",
          },
          {
            id: "po-32",
            name: "PO-32 tonic",
            href: "/store/po-32",
            imageId: "6949091842cc65435b5cf1bc",
          },
          {
            id: "po-33",
            name: "PO-33 K.O!",
            href: "/store/po-33",
            imageId: "69490911e874be435a66eed3",
          },
          {
            id: "po-35",
            name: "PO-35 speak",
            href: "/store/po-35",
            imageId: "6949091da8b2eb435a6d28ef",
          },
        ]}
      />

      {/* "explore all products" CTA */}
      <section
        className="flex w-full items-center justify-center"
        style={{
          paddingBlock: "var(--space-xl)",
          fontSize: "var(--fs-30)",
          lineHeight: "var(--lh-30)",
        }}
      >
        <a href="/products" className="text-te-blue hover:underline">
          explore all products
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
