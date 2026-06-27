import type { MetadataRoute } from "next";
import { i18n } from "@/i18n/config";
import { navItems } from "@/lib/nav";

const BASE = "https://stor-elvdal-hotell.surge.sh";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of i18n.locales) {
    for (const item of navItems) {
      const path = item.slug ? `/${locale}/${item.slug}/` : `/${locale}/`;
      entries.push({
        url: `${BASE}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: item.slug === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
