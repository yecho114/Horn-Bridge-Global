"use client";

import { useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fleetCategories } from "@/lib/data";
import { Reveal } from "./reveal";

function useCanScroll(
  emblaApi: EmblaCarouselType | undefined,
  direction: "canScrollPrev" | "canScrollNext"
) {
  return useSyncExternalStore(
    (onChange) => {
      if (!emblaApi) return () => { };
      emblaApi.on("select", onChange);
      emblaApi.on("reInit", onChange);
      return () => {
        emblaApi.off("select", onChange);
        emblaApi.off("reInit", onChange);
      };
    },
    () => emblaApi?.[direction]() ?? false,
    () => false
  );
}

export function FleetShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const canPrev = useCanScroll(emblaApi, "canScrollPrev");
  const canNext = useCanScroll(emblaApi, "canScrollNext");

  return (
    <section id="fleet" className="section-pad bg-bg">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-lg">
            <span className="label-mono text-[11px] text-primary">
              Our Fleet
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
              Vehicles for every category.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex gap-3">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-fg transition-colors hover:bg-fg/4 disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-fg transition-colors hover:bg-fg/4 disabled:opacity-30"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {fleetCategories.map((item) => (
              <div
                key={item.title}
                className="min-w-[78%] flex-none sm:min-w-[46%] lg:min-w-[31%]"
              >
                <div className="group relative flex w-92 h-58 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-bg-elevated p-7">
                  <div
                    className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-30"
                    style={{ background: "var(--color-primary-dark)" }}
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-strong bg-fg/4 text-primary">
                      <item.icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span className="label-mono text-[9px] text-subtle">
                      {item.tag}
                    </span>
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-fg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
