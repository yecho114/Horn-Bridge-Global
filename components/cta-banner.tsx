import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function CtaBanner() {
  return (
    <section className="bg-bg px-6 pb-6">
      <Reveal>
        <div className="bg-noise radial-glow container-page relative overflow-hidden rounded-[2rem] border border-border-strong bg-bg-elevated px-8 py-16 text-center sm:px-16 sm:py-20">
          <span className="label-mono text-[11px] text-primary">
            Let&apos;s Move Something
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            Ready to import, export or fleet your next vehicle?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Tell us what you need &mdash; a single vehicle, a container of
            spare parts, or a full transit fleet &mdash; and our team will
            get back to you within one business day.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
