import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://micropulse.com.pk";
  const now = new Date();
  const routes = ["", "about", "solutions", "services", "process", "why-us", "contact"];
  return routes.map((r) => ({
    url: r ? `${base}/${r}` : base,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
