import { Eye, Gem, Target } from "lucide-react";
import { groupMission, groupValues, groupVision } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function VisionMission() {
  return (
    <section className="section-pad relative overflow-hidden bg-bg-elevated">
      <div className="radial-glow absolute inset-0" />
      <div className="container-page relative">
        <Reveal className="max-w-xl">
          <span className="label-mono text-[11px] text-gold">Who We Are</span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            Growing together for a brighter tomorrow.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.1}>
          <RevealItem>
            <div className="h-full rounded-3xl border border-border bg-bg p-7 sm:p-8">
              <Eye className="h-6 w-6 text-gold" strokeWidth={1.75} />
              <h3 className="mt-5 text-lg font-semibold text-fg">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{groupVision}</p>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="h-full rounded-3xl border border-border bg-bg p-7 sm:p-8">
              <Target className="h-6 w-6 text-gold" strokeWidth={1.75} />
              <h3 className="mt-5 text-lg font-semibold text-fg">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{groupMission}</p>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="h-full rounded-3xl border border-border bg-bg p-7 sm:p-8">
              <Gem className="h-6 w-6 text-gold" strokeWidth={1.75} />
              <h3 className="mt-5 text-lg font-semibold text-fg">Our Values</h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {groupValues.map((v) => (
                  <li key={v.title} className="flex items-center gap-2.5 text-sm text-muted">
                    <v.icon className="h-4 w-4 text-gold" strokeWidth={1.75} />
                    {v.title}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
