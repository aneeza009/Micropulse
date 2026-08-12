import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://micropulse.com.pk/sitemap.xml",
    host: "https://micropulse.com.pk",
  };
}
