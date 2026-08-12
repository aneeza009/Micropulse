import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { COMPANY } from "@/lib/company";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://micropulse.com.pk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MICROPULSE Engineering | Smart Solar Solutions",
    template: "%s | MICROPULSE Engineering",
  },
  description:
    "MICROPULSE Engineering (Pvt.) Ltd. — professional solar engineering in Pakistan. Residential, commercial, hybrid, on-grid and off-grid systems with expert installation, A-grade equipment and after-sales support.",
  keywords: [
    "solar engineering Pakistan",
    "solar installation Lahore",
    "hybrid solar system",
    "on-grid solar",
    "off-grid solar",
    "commercial solar",
    "residential solar",
    "MICROPULSE Engineering",
  ],
  authors: [{ name: COMPANY.legalName }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "MICROPULSE Engineering",
    title: "MICROPULSE Engineering | Smart Solar Solutions",
    description:
      "Professional solar engineering in Pakistan — residential, commercial, hybrid, on-grid & off-grid systems. Powering Today. Energizing Tomorrow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MICROPULSE Engineering | Smart Solar Solutions",
    description:
      "Professional solar engineering in Pakistan. Powering Today. Energizing Tomorrow.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0a0f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.legalName,
  alternateName: COMPANY.brand,
  url: SITE_URL,
  image: `${SITE_URL}/micropulse-logo.jpeg`,
  description:
    "Professional solar engineering company providing complete solar solutions, installation, maintenance and related services in Pakistan.",
  telephone: COMPANY.phones.map((p) => p.tel),
  areaServed: "PK",
  address: COMPANY.offices.map((o) => ({
    "@type": "PostalAddress",
    streetAddress: o.lines.join(" "),
    addressLocality: o.city,
    addressCountry: "PK",
  })),
  knowsAbout: [
    "Solar systems",
    "Solar installation",
    "Hybrid solar",
    "On-grid solar",
    "Off-grid solar",
    "Operation and maintenance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
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
