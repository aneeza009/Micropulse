import type { Metadata } from "next";

/** Canonical production origin. Every absolute URL on the site derives from this. */
export const SITE_URL = "https://micropulsepk.com";

/**
 * The registered business name, used verbatim wherever the entity is being
 * *identified* rather than styled: page titles, og:site_name, JSON-LD, the
 * footer and the copyright line.
 *
 * This matters more than usual here. Several unrelated companies trade as
 * "Micropulse" — medical devices, electronics — so the bare brand word is not a
 * distinguishing entity signal for search engines. The full name plus Lahore is
 * what separates this business from them, which is why SITE_NAME is the long
 * form and not "MicroPulse". The logo is free to keep its own styling.
 */
export const SITE_NAME = "MicroPulse Solar Energy Pvt Ltd";

/** Primary service city. Kept here so local-SEO copy and JSON-LD agree. */
export const SITE_CITY = "Lahore";

/** Shared social preview image. 1200x630, generated from site branding. */
export const OG_IMAGE = {
  url: "/images/og-cover.jpg",
  width: 1200,
  height: 630,
  alt: "MicroPulse Solar Energy Pvt Ltd — solar engineering company in Lahore, Pakistan",
} as const;

/**
 * Metadata for one route.
 *
 * Next merges top-level metadata keys with the layout's, but nested objects are
 * *replaced* rather than deep-merged. So a page that sets nothing but
 * `openGraph.url` silently drops the layout's og:site_name, og:locale, og:type
 * and og:image — the tags are simply missing from that page. Every shared Open
 * Graph field is therefore repeated here rather than inherited.
 *
 * `path` also sets the canonical. Without a per-page canonical every route
 * inherits the layout's, which points at the homepage and tells search engines
 * that /about, /projects and the rest are duplicates of it.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Route path, leading slash, e.g. "/projects". */
  path: string;
}): Metadata {
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_PK",
      siteName: SITE_NAME,
      url: path,
      title: full,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
