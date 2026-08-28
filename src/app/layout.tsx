import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { COMPANY, SERVICES } from "@/lib/company";
import { OG_IMAGE, SITE_CITY, SITE_NAME, SITE_URL } from "@/lib/seo";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import "./globals.css";

// Sora is the display face only — headings, eyebrows, buttons, stat figures —
// and every usage is 600/700/800. Declaring just those is accurate rather than
// a saving: Google serves Sora as a variable font, so the file is byte-identical
// whichever weights are listed. Kept narrow so it stays honest if that changes.
const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // The homepage leads with the search intent people actually type
    // ("solar company in Lahore") rather than the brand, because the brand word
    // alone is ambiguous — several unrelated Micropulse companies exist.
    default: `Solar Company in ${SITE_CITY} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "MicroPulse Solar Energy Pvt Ltd is a solar energy company in Lahore, Pakistan, delivering residential, commercial and industrial solar systems — hybrid, on-grid and off-grid — with expert installation, A-grade equipment and after-sales support.",
  keywords: [
    "solar company in Lahore",
    "solar energy company in Lahore",
    "solar solutions in Lahore",
    "solar installation Lahore",
    "solar panel installation Pakistan",
    "hybrid solar system",
    "on-grid solar",
    "off-grid solar",
    "commercial solar Pakistan",
    "residential solar Lahore",
    "MicroPulse Solar Energy Pvt Ltd",
  ],
  authors: [{ name: COMPANY.legalName }],
  // Homepage only. Every other route sets its own via `pageMeta`, because a
  // canonical inherited from here would point them all at "/".
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Solar Company in ${SITE_CITY} | ${SITE_NAME}`,
    description:
      "Solar energy company in Lahore, Pakistan. Residential, commercial, hybrid, on-grid and off-grid solar systems. Powering Today. Energizing Tomorrow.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `Solar Company in ${SITE_CITY} | ${SITE_NAME}`,
    description:
      "Solar energy company in Lahore, Pakistan. Powering Today. Energizing Tomorrow.",
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0a0f",
  width: "device-width",
  initialScale: 1,
};

/**
 * Structured data, as a @graph so the Organization and the physical business
 * are linked by @id rather than duplicated as two unrelated blobs.
 *
 * Everything here is client-supplied fact. Deliberately absent, because none of
 * it has been provided and search engines penalise invented markup:
 * registration numbers, geo coordinates, opening hours, aggregateRating,
 * reviews, awards, certifications and sameAs social profiles. Add each only
 * when the real value exists.
 */
const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const lahoreOffice = COMPANY.offices.find((o) => o.city === "Lahore")!;

const postalAddress = (o: (typeof COMPANY.offices)[number]) => ({
  "@type": "PostalAddress",
  // The display lines end with ", <city>, Pakistan." for the footer. Schema
  // carries those in their own fields, so repeating them inside streetAddress
  // would give the same place two localities.
  streetAddress: o.lines
    .join(" ")
    .replace(/[.,\s]*(Lahore|Bahawalpur)[.,\s]*(Pakistan)?[.\s]*$/i, ""),
  addressLocality: o.city,
  addressRegion: "Punjab",
  addressCountry: "PK",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: COMPANY.legalName,
      alternateName: COMPANY.shortName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/micropulse-logo.webp`,
      },
      image: `${SITE_URL}${OG_IMAGE.url}`,
      description:
        "Solar energy company based in Lahore, Pakistan, providing complete solar solutions, installation, operation and maintenance across Pakistan.",
      telephone: COMPANY.phones.map((p) => p.tel),
      address: COMPANY.offices.map(postalAddress),
      parentOrganization: {
        "@type": "Organization",
        name: COMPANY.parentName,
      },
    },
    {
      // SolarEnergyCompany does not exist in schema.org; the closest published
      // types are LocalBusiness and ElectricalContractor, so both are declared
      // and the human-readable category is carried on `knowsAbout`.
      "@type": ["LocalBusiness", "ElectricalContractor"],
      "@id": BUSINESS_ID,
      name: COMPANY.legalName,
      alternateName: COMPANY.shortName,
      parentOrganization: { "@id": ORG_ID },
      url: SITE_URL,
      image: `${SITE_URL}${OG_IMAGE.url}`,
      logo: `${SITE_URL}/images/micropulse-logo.webp`,
      description:
        "Solar energy company in Lahore, Pakistan. Residential, commercial and industrial solar systems — hybrid, on-grid and off-grid — with installation and after-sales support.",
      telephone: COMPANY.phones.map((p) => p.tel),
      address: postalAddress(lahoreOffice),
      areaServed: [
        { "@type": "City", name: "Lahore" },
        { "@type": "Country", name: "Pakistan" },
      ],
      knowsAbout: [
        "Solar energy",
        "Solar panel installation",
        "Hybrid solar systems",
        "On-grid solar systems",
        "Off-grid solar systems",
        "Solar operation and maintenance",
      ],
      makesOffer: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.desc },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-PK",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} js-reveal`}>
      <head>
        {/* Scroll reveals hide their content until observed, so without
            scripting they must be shown unconditionally. */}
        <noscript>
          <style>{`.js-reveal .reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-orange focus:px-5 focus:py-2 focus:text-black focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
