import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";
import { SITE_NAME } from "@/lib/seo";

/**
 * Web app manifest. Its practical job here is not installability — it is
 * giving Android and Chrome a named, correctly sized icon set, and stating the
 * business name in one more machine-readable place.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: COMPANY.shortName,
    description:
      "Solar energy company in Lahore, Pakistan. Residential, commercial and industrial solar systems — hybrid, on-grid and off-grid.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0a0f",
    theme_color: "#0b0a0f",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon1.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
