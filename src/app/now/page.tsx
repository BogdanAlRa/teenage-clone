import { NowFeed } from "@/components/now/NowFeed";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/**
 * /now — teenage engineering's news, events and product-release feed.
 *
 * Content is pulled verbatim from the live teenage.engineering/now page
 * (see docs/research/now/raw.html) and laid out in a Swiss-magazine grid.
 * Four long-form posts:
 *   1. behind the scenes: OP–XY   (jonas åberg interview)
 *   2. field system™ with samuel organ   (uk bike tour)
 *   3. catching up with raghd      ('significant value' ep)
 *   4. catching up with lara91k    (alternative argentinian artist)
 */
export default function NowPage() {
  return (
    <main className="w-full bg-te-grey-100 text-te-black">
      <SiteHeader />
      <NowFeed />
      <SiteFooter />
    </main>
  );
}

export const metadata = {
  title: "now — teenage engineering",
  description: "news, events and product releases",
};
