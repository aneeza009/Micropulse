import type { Metadata } from "next";

export const SITE_URL = "https://micropulse.com.pk";
export const SITE_NAME = "MicroPulse Solar Energy";

/**
 * Metadata for one route.
 *
 * Next merges top-level metadata keys with the layout's, but nested objects are
 * *replaced* rather than deep-merged. So a page that sets nothing but
 * `openGraph.url` silently drops the layout's og:site_name, og:locale and
 * og:type — the tags are simply missing from that page. Every shared Open Graph
 * field is therefore repeated here rather than inherited.
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
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_PK",
      siteName: SITE_NAME,
      url: path,
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
