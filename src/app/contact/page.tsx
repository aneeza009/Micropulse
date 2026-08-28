import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = pageMeta({
  title: "Contact Us in Lahore",
  description:
    "Contact MicroPulse Solar Energy Pvt Ltd in Lahore — book a free site visit or free consultation. Offices in Bahria Town, Lahore and in Bahawalpur. Call or WhatsApp our team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        crumb="Contact"
        path="/contact"
        title={
          <>
            Let&rsquo;s build your{" "}
            <span className="text-gradient-solar">solar system.</span>
          </>
        }
        intro="Reach MicroPulse Solar Energy Pvt Ltd by phone or WhatsApp, or visit our Lahore office at Park View Commercial, Bahria Town. We also have an office in Bahawalpur."
      />
      <Contact />
    </>
  );
}
