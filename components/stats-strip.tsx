import { trustStats } from "@/lib/data";
import { Reveal } from "./reveal";

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-bg-elevated">
      <div className="container-page grid grid-cols-2 divide-x divide-border md:grid-cols-4">
        {trustStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-1.5 py-8 text-center sm:py-10">
              <span className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                {stat.value}
              </span>
              <span className="label-mono text-[10px] text-subtle">
                {stat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
