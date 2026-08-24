import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/contact";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} for vehicle imports, exports, distribution, spare parts and logistics across the Horn of Africa.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We're here to help."
        description="Reach our team directly using the details below, or send an inquiry and we'll get back to you shortly."
      />
      <Contact />
    </>
  );
}
