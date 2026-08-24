import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { TrackingDashboard } from "@/components/tracking-dashboard";
import { CtaBanner } from "@/components/cta-banner";
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description:
    "Import, export, distribution and trading of motor vehicles, electric vehicles, spare parts, accessories, public transport and logistics services across the Horn of Africa.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="One partner, the entire vehicle supply chain."
        description="From sourcing a single spare part to fleeting a public transport operator, Horn Bridge Global operates across the full lifecycle of motor vehicle trade."
      />

      <section className="bg-bg pb-10 sm:pb-16">
        <div className="container-page flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <div
                id={service.slug}
                className="scroll-mt-28 grid grid-cols-1 gap-8 rounded-3xl border border-border bg-bg-elevated p-7 sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border-strong bg-fg/4 text-primary">
                  <service.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-fg sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
                    {service.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 lg:min-w-70">
                  {service.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-muted sm:text-sm"
                    >
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <TrackingDashboard />
      <CtaBanner />
    </>
  );
}
