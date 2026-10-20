import { MapPin } from "lucide-react";
import { markets } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function Markets() {
  return (
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
  );
}
