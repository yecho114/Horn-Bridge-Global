import { groupWhyPartner } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function WhyPartner() {
  return (
    <section className="section-pad bg-bg">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal>
          <span className="label-mono text-[11px] text-primary">
            Why Partner With Us
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            Connecting markets. Building industries.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Customers, suppliers and investors work with Horn Bridge Global
            for one partner with local presence, a broad portfolio and a
            long-term commitment to the region.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.12}>
          {groupWhyPartner.map((item) => (
            <RevealItem key={item.title}>
              <div className="h-full rounded-2xl border border-border bg-bg-elevated p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-fg/4 text-primary">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
