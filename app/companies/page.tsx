import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CompaniesGrid } from "@/components/companies-grid";
import { CtaBanner } from "@/components/cta-banner";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Our Companies | ${siteConfig.name}`,
  description:
    "Horn Bridge Global Motors, Agab MixMart, Agrisolt and Tiir Consultancy — the companies of Horn Bridge Global PLC.",
};

export default function CompaniesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Companies"
        title="Four companies. One shared vision."
        description="Horn Bridge Global PLC builds and manages businesses across automotive and mobility, retail and wholesale, agriculture and livestock, and construction advisory."
      />
      <CompaniesGrid showHeading={false} />
      <CtaBanner
        eyebrow="Work With Us"
        title="Not sure which company you need?"
        description="Tell us what you're looking for and we'll connect you with the right team across the group."
        cta="Contact the Group"
        href="/contact"
      />
    </>
  );
}
