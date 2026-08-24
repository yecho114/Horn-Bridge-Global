import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part.replace(".", ""))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="section-pad bg-bg-elevated">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <span className="label-mono text-[11px] text-primary">
            Trusted By Partners
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            What our partners say.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.12}>
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-bg p-7">
                <Quote className="h-6 w-6 text-primary/70" strokeWidth={1.5} />
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-fg/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-fg/4 text-xs font-semibold text-primary">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-fg">{t.name}</p>
                    <p className="text-xs text-subtle">{t.role}</p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
