import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { siteConfig, type Company } from "@/lib/data";
import { CompanyLogo } from "./company-logo";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function CompanyHero({ company }: { company: Company }) {
  const media = company.heroMedia;

  return (
    <section className="theme-dark relative overflow-hidden bg-bg pt-36 pb-20 sm:pt-40 sm:pb-24">
      {media?.type === "image" && (
        <Image
          src={media.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      {media?.type === "video" && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={media.src} />
        </video>
      )}
      {media ? (
        // Keep text readable over the photo / video.
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/30" />
      ) : (
        <>
          <div className="radial-glow absolute inset-0" />
          <div
            className="absolute right-[-10%] top-1/4 h-130 w-130 rounded-full opacity-30 blur-[120px]"
            style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
          />
        </>
      )}

      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <Link
            href="/companies"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-fg/4 px-3.5 py-1.5 text-fg/90 transition-colors hover:bg-fg/8"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="label-mono text-[10px]">Part of {siteConfig.name}</span>
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <CompanyLogo company={company} size="lg" />
            <div>
              <p className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                {company.name}
              </p>
              <p className="label-mono mt-1 text-[10px] text-primary">
                {company.tagline}
              </p>
            </div>
          </div>

          <h1 className="mt-10 max-w-2xl text-4xl font-bold leading-[1.02] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {company.headline}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {company.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#offerings"
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors"
            >
              {company.offeringsLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:bg-fg/6"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {company.highlights.map((h) => (
              <div
                key={h.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated/80 p-5 backdrop-blur"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <h.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-fg">{h.title}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CompanyOfferings({ company }: { company: Company }) {
  return (
    <section id="offerings" className="section-pad scroll-mt-20 bg-bg">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <span className="label-mono text-[11px] text-primary">
            {company.offeringsLabel}
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            {company.offeringsTitle}
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {company.offerings.map((item) => (
            <RevealItem key={item.title}>
              <div className="flex h-full flex-col bg-bg-elevated p-7 transition-colors duration-300 hover:bg-bg-elevated-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-fg/4 text-primary">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-fg">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
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

export function CompanyFocusAreas({ company }: { company: Company }) {
  if (!company.focusAreas?.length) return null;

  return (
    <section className="section-pad bg-bg-elevated">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <span className="label-mono text-[11px] text-primary">Our Focus Areas</span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            Where we make the biggest difference.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {company.focusAreas.map((area) => (
            <RevealItem key={area.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-bg p-7">
                <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-primary opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20" />
                <area.icon className="relative h-7 w-7 text-primary" strokeWidth={1.5} />
                <h3 className="relative mt-6 text-base font-semibold text-fg">{area.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function CompanyApproach({ company }: { company: Company }) {
  if (!company.approach?.length) return null;

  return (
    <section className="section-pad bg-bg-elevated">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <span className="label-mono text-[11px] text-primary">Our Approach</span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            From vision to reality.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {company.approach.map((step, i) => (
            <RevealItem key={step.title}>
              <span className="label-mono text-5xl font-bold text-fg/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="-mt-6 flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-bg text-primary">
                <step.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
