import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://micropulse.com.pk";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...["about", "solutions", "services", "process", "why-us", "contact"].map(
      (id) => ({
        url: `${base}/#${id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })
    ),
  ];
}
