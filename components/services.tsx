import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function Services() {
  return (
    <section id="services" className="section-pad bg-bg">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <span className="label-mono text-[11px] text-primary">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            One partner, the entire vehicle supply chain.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            From sourcing a single spare part to fleeting a public transport
            operator, Horn Bridge Global operates across the full lifecycle
            of motor vehicle trade.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.title}>
              <div className="group relative flex h-full flex-col justify-between bg-bg-elevated p-7 transition-colors duration-300 hover:bg-bg-elevated-2 sm:p-8">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-fg/4 text-primary">
                    <service.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-fg">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
                <ArrowUpRight className="mt-6 h-4 w-4 text-subtle opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary group-hover:opacity-100" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
