import { whyChooseUs } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { CarSilhouette } from "./car-silhouette";

export function WhyChooseUs() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-bg">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-5">
        <CarSilhouette className="h-full w-full translate-x-1/4 text-fg" />
      </div>

      <div className="container-page relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal>
          <span className="label-mono text-[11px] text-primary">
            Why Horn Bridge Global
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            Built on trust, driven by reach.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            As a bridge between international manufacturers and the growing
            markets of Ethiopia, Somalia and Djibouti, we serve individual
            customers, businesses, fleet operators, dealers and institutions
            &mdash; connecting every product with the transportation,
            distribution and support it needs beyond the point of sale.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.12}>
          {whyChooseUs.map((item) => (
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
