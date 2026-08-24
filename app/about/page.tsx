import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { StatsStrip } from "@/components/stats-strip";
import { Process } from "@/components/process";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CtaBanner } from "@/components/cta-banner";
import { aboutStory, markets, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Bridging global markets with the Horn of Africa."
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

      <section className="section-pad bg-bg-elevated">
        <div className="container-page">
          <Reveal className="max-w-xl">
            <span className="label-mono text-[11px] text-primary">
              Where We Operate
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
              Our core markets.
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
            {markets.map((market) => (
              <RevealItem key={market.name}>
                <div className="h-full rounded-2xl border border-border bg-bg p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-fg/4 text-primary">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-fg">
                    {market.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {market.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <StatsStrip />
      <Process />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
