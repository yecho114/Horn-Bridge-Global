import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { StatsStrip } from "@/components/stats-strip";
import { VisionMission } from "@/components/vision-mission";
import { CompaniesGrid } from "@/components/companies-grid";
import { Markets } from "@/components/markets";
import { WhyPartner } from "@/components/why-partner";
import { CtaBanner } from "@/components/cta-banner";
import { aboutStory, groupStats, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Building businesses for a brighter Horn of Africa."
        description={siteConfig.description}
      />

      <section className="section-pad bg-bg">
        <div className="container-page">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
            {aboutStory.map((item) => (
              <RevealItem key={item.title}>
                <div className="h-full rounded-2xl border border-border bg-bg-elevated p-7">
                  <h2 className="text-lg font-semibold text-fg">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <StatsStrip stats={groupStats} />
      <VisionMission />
      <CompaniesGrid />
      <Markets />
      <WhyPartner />
      <CtaBanner
        eyebrow="Work With Us"
        title="Let's build the future of the Horn of Africa together."
        description="Whether you're a customer, supplier, partner or investor, our team will connect you with the right company in our group."
        cta="Get in Touch"
        href="/contact"
      />
    </>
  );
}
