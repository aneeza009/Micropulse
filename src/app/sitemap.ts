import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { NAV } from "@/lib/company";

/**
 * Built from NAV so a new page in the navigation cannot be missing here.
 * NAV's "/" entry becomes the bare origin rather than a trailing-slash URL,
 * which is what the canonical on the homepage says.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return NAV.map((n) => ({
    url: n.href === "/" ? SITE_URL : `${SITE_URL}${n.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.7,
  }));
}
