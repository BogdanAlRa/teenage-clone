import { ProductFeature } from "@/components/products/ProductFeature";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductHero } from "@/components/products/ProductHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/**
 * /products — catalog overview page.
 *
 * Section order derived from docs/research/products/raw.html:
 *   1. EP–133 K.O. II hero (dark, editorial)
 *   2. riddim n' ting
 *   3. EP series
 *   4. field system (dark flagship hero)
 *   5. OP–XY
 *   6. EP–1320 medieval
 *   7. pocket operators
 *   8. TP–7 | OB–4            (paired row)
 *   9. CM–15 | TX–6            (paired row)
 *  10. OP–1 field family        (OP-1 field / choir / field accessories / field desk)
 *  11. computer–1
 *  12. ortho remote | OD-11     (paired)
 *  13. OP–Z | modular           (paired)
 *  14. OP-1 | PO-80             (paired — legacy shelf)
 *  15. tail grid (6 thumbnails)
 *
 * Image IDs all map to files in /public/images/products/{id}_2048.webp.
 */

export const metadata = {
  title: "products - teenage engineering",
  description:
    "teenage engineering creates high quality, well designed, electronic products for all people who love sound and music.",
};

export default function ProductsPage() {
  return (
    <main className="w-full bg-te-grey-100 text-te-black">
      <SiteHeader />

      {/* 1 — EP-133 K.O. II hero, dark editorial */}
      <ProductHero
        imageId="6978c061edd4be589c072ea3"
        href="/products/ep-133"
        theme="dark"
        eyebrow="EP–133"
        eyebrowSecondary="NEW UPDATE 2.0 — FULFILLING THE PROMISE"
        bigHeadline="K.O. II"
        japaneseTag="サンプラー"
        spec="128 MB SAMPLER COMPOSER"
        navLabel="EP–133 K.O. II"
      />

      {/* 2 — riddim n' ting */}
      <ProductFeature
        aspect={0.5}
        tiles={[
          {
            id: "riddim",
            label: "riddim n' ting",
            href: "/products/riddim",
            imageId: "690c693bb8fb4b0e15abb6b3",
          },
        ]}
      />

      {/* 3 — EP series */}
      <ProductFeature
        aspect={0.5}
        tiles={[
          {
            id: "ep-series",
            label: "EP series",
            href: "/products/ep",
            imageId: "697756a88ed9c12271bf7d93",
          },
        ]}
      />

      {/* 4 — field system flagship (dark) */}
      <ProductHero
        imageId="6846e19e4f59e72be0ff2e1a"
        href="/products/field-system"
        theme="dark"
        eyebrow="field system™"
        navLabel="field system™"
        aspect={0.75}
      />

      {/* 5 — OP-XY */}
      <ProductFeature
        aspect={0.55}
        tiles={[
          {
            id: "op-xy",
            label: "OP–XY",
            href: "/products/op-xy",
            imageId: "67362c261db2feb0839f9185",
          },
        ]}
      />

      {/* 6 — EP-1320 medieval */}
      <ProductFeature
        aspect={0.5}
        tiles={[
          {
            id: "ep-1320",
            label: "EP–1320 medieval",
            href: "/products/ep-1320",
            imageId: "66b09a8ef6dea607ab0534fb",
          },
        ]}
      />

      {/* 7 — pocket operators (umbrella, dark) */}
      <ProductHero
        imageId="662281c5453044ebae1482a3"
        href="/products/pocket-operators"
        theme="dark"
        eyebrow="pocket operators"
        navLabel="pocket operators"
        aspect={0.6}
      />

      {/* 8 — TP-7 | OB-4 (paired) */}
      <ProductFeature
        aspect={0.45}
        tiles={[
          {
            id: "tp-7",
            label: "TP–7",
            href: "/products/tp-7",
            imageId: "645bd5cd38efc47f2e737e29",
          },
          {
            id: "ob-4",
            label: "OB–4",
            href: "/products/ob-4",
            imageId: "644922beb63b83163c71de9b",
          },
        ]}
      />

      {/* 9 — CM-15 | TX-6 (paired) */}
      <ProductFeature
        aspect={0.45}
        tiles={[
          {
            id: "cm-15",
            label: "CM–15",
            href: "/products/cm-15",
            imageId: "659e54e26ccbd38441ecceab",
          },
          {
            id: "tx-6",
            label: "TX–6",
            href: "/products/tx-6",
            imageId: "63e0e219e8f2d69b1218ae19",
          },
        ]}
      />

      {/* 10 — OP-1 field + accessories / choir / field desk */}
      <ProductFeature
        aspect={0.55}
        tiles={[
          {
            id: "op-1-field",
            label: "OP–1 field",
            href: "/products/op-1-field",
            imageId: "639894ab1a3deb1beda43da7",
          },
        ]}
      />

      {/* 11 — computer-1 */}
      <ProductFeature
        aspect={0.5}
        tiles={[
          {
            id: "computer-1",
            label: "computer–1",
            href: "/products/computer-1",
            imageId: "65b7c6deaeb9d803e38f72f5",
          },
        ]}
      />

      {/* 12 — ortho remote | OD-11 (paired) */}
      <ProductFeature
        aspect={0.45}
        tiles={[
          {
            id: "ortho",
            label: "ortho remote",
            href: "/products/ortho-remote",
            imageId: "659e56a46ccbd38441eccfc3",
          },
          {
            id: "od-11",
            label: "OD–11",
            href: "/products/od-11",
            imageId: "65b7bcc3aeb9d803e38f70b1",
          },
        ]}
      />

      {/* 13 — OP-Z | modular (paired) */}
      <ProductFeature
        aspect={0.45}
        tiles={[
          {
            id: "op-z",
            label: "OP–Z",
            href: "/products/op-z",
            imageId: "6569b2d2deae028891b231f4",
          },
          {
            id: "modular",
            label: "modular",
            href: "/products/modular",
            imageId: "65647b94bbc8c729e64ea947",
          },
        ]}
      />

      {/* 14 — OP-1 | PO-80 (paired, legacy shelf) */}
      <ProductFeature
        aspect={0.45}
        tiles={[
          {
            id: "op-1",
            label: "OP-1",
            href: "/products/op-1",
            imageId: "66211af6b7c4b559bf79be46",
          },
          {
            id: "po-80",
            label: "PO-80",
            href: "/products/po-80",
            imageId: "6569a20edeae028891b1e3e5",
          },
        ]}
      />

      {/* 15 — tail grid of smaller collectibles */}
      <ProductGrid
        columns={3}
        items={[
          {
            id: "choir",
            name: "choir",
            href: "/products/choir",
            imageId: "6569a262deae028891b1e3fb",
          },
          {
            id: "grip-car",
            name: "grip car",
            href: "/products/grip-car",
            imageId: "65818db375961e352911cb7a",
          },
        ]}
      />

      <SiteFooter />
    </main>
  );
}
