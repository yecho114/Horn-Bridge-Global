import { processSteps } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function Process() {
  return (
    <section className="section-pad bg-bg-elevated">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <span className="label-mono text-[11px] text-primary">
            How It Works
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            From inquiry to delivery, in four steps.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <RevealItem key={step.title} className="relative">
              <span className="label-mono text-6xl font-bold text-fg/5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="-mt-8 flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-bg text-primary">
                <step.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-fg">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              {i < processSteps.length - 1 && (
                <span className="absolute right-[-1.1rem] top-3 hidden h-px w-6 bg-border-strong lg:block" />
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
