import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { CtaBanner } from "@/components/cta-banner";
import { fleetCategories, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Our Fleet | ${siteConfig.name}`,
  description:
    "Passenger vehicles, electric vehicles, commercial and public transport, trucks, logistics vehicles, and spare parts sourced for the Horn of Africa.",
};

export default function FleetPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Fleet"
        title="Vehicles for every category."
        description="From individual passenger vehicles to full transit fleets, we source and supply across every category the region needs."
      />

      <section className="bg-bg pb-20 sm:pb-28">
        <div className="container-page">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {fleetCategories.map((item) => (
              <RevealItem key={item.title}>
                <div className="group relative flex h-72 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-bg-elevated p-7">
                  <div
                    className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20"
                    style={{ background: "var(--color-primary)" }}
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-strong bg-fg/4 text-primary">
                      <item.icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span className="label-mono text-[9px] text-subtle">
                      {item.tag}
                    </span>
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-fg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
