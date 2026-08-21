import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Contact MicroPulse Solar Energy — book a free site visit or free consultation. Offices in Lahore and Bahawalpur. Call or WhatsApp our team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        crumb="Contact"
        title={
          <>
            Let&rsquo;s build your{" "}
            <span className="text-gradient-solar">solar system.</span>
          </>
        }
        intro="Reach the MicroPulse team by phone, WhatsApp, or at our Lahore and Bahawalpur offices."
      />
      <Contact />
    </>
  );
}
