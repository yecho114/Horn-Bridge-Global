"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { companies, type Company } from "@/lib/data";
import { CompanyLogo } from "./company-logo";

// How long an image (or placeholder) slide stays up. Video slides advance
// when the video ends, or after MAX_VIDEO_S for long videos.
const IMAGE_SLIDE_MS = 7000;
const MAX_VIDEO_S = 20;
const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const indexRef = useRef(index);
  const hoveredRef = useRef(hovered);

  useEffect(() => {
    indexRef.current = index;
    hoveredRef.current = hovered;
  }, [index, hovered]);

  const goTo = useCallback((i: number) => {
    setIndex(i);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % companies.length);
    setProgress(0);
  }, []);

  const company = companies[index];
  const isVideo = company.heroMedia?.type === "video";

  // Timer for image / placeholder slides; pauses while hovered.
  useEffect(() => {
    if (isVideo) return;
    let elapsed = 0;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      if (!hoveredRef.current) elapsed += now - last;
      last = now;
      const p = Math.min(elapsed / IMAGE_SLIDE_MS, 1);
      setProgress(p);
      if (p >= 1) next();
      else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, isVideo, next]);

  return (
    <section
      id="top"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="theme-dark relative flex h-svh min-h-160 items-center overflow-hidden bg-bg"
      style={
        {
          "--color-primary": company.brand.primary,
          "--color-primary-dark": company.brand.primaryDark,
        } as CSSProperties
      }
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={company.slug}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease }}
          className="absolute inset-0"
        >
          <SlideBackground
            company={company}
            onProgress={(p) => indexRef.current === index && setProgress(p)}
            onEnded={() => indexRef.current === index && next()}
          />
        </motion.div>
      </AnimatePresence>

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-black/70 to-transparent" />

      <div className="container-page relative z-10 pt-24 pb-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={company.slug}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
              exit: { opacity: 0, y: -12, transition: { duration: 0.3 } },
            }}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-1.5 pr-4 pl-1.5 backdrop-blur"
            >
              <CompanyLogo company={company} size="sm" />
              <span className="label-mono text-[10px] text-white/90">
                {company.name}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-[11vw] font-bold leading-[0.95] tracking-tight text-white sm:text-[7vw] lg:text-[4.5vw]"
            >
              {company.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-sm leading-relaxed text-white/80 sm:text-[15px]"
            >
              {company.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={`/companies/${company.slug}`}
                className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors"
              >
                Explore {company.shortName}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide tabs */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-8">
        <div className="container-page grid grid-cols-4 gap-3 sm:gap-6">
          {companies.map((c, i) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${c.name}`}
              aria-current={i === index}
              className="group text-left"
            >
              <span className="block h-0.5 overflow-hidden rounded-full bg-white/20">
                <span
                  className={`block h-full rounded-full ${isVideo && i === index ? "transition-[width] duration-300 ease-linear" : ""}`}
                  style={{
                    width: i === index ? `${progress * 100}%` : i < index ? "100%" : "0%",
                    background: i === index ? c.brand.primary : "rgba(255,255,255,0.5)",
                  }}
                />
              </span>
              <span
                className={`mt-3 flex items-baseline gap-2 transition-colors ${i === index ? "text-white" : "text-white/50 group-hover:text-white/80"}`}
              >
                <span className="label-mono hidden text-[10px] sm:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate text-[11px] font-semibold sm:text-sm">
                  {c.shortName}
                </span>
              </span>
              <span className="mt-0.5 hidden truncate text-xs text-white/45 md:block">
                {c.sector}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function SlideBackground({
  company,
  onProgress,
  onEnded,
}: {
  company: Company;
  onProgress: (p: number) => void;
  onEnded: () => void;
}) {
  const media = company.heroMedia;

  if (media?.type === "video") {
    return (
      <video
        autoPlay
        muted
        playsInline
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (!v.duration) return;
          const length = Math.min(v.duration, MAX_VIDEO_S);
          onProgress(Math.min(v.currentTime / length, 1));
          if (v.currentTime >= MAX_VIDEO_S) onEnded();
        }}
        onEnded={onEnded}
        onError={onEnded}
        className="h-full w-full object-cover"
      >
        <source src={media.src} />
      </video>
    );
  }

  if (media?.type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={typeof media.src === "string" ? media.src : media.src.src}
        alt=""
        className="h-full w-full object-cover"
      />
    );
  }

  // Placeholder until a video or image is added for this company.
  return (
    <div
      className="relative h-full w-full"
      style={{
        background: `radial-gradient(80% 90% at 85% 30%, ${company.brand.primary}, ${company.brand.primaryDark} 45%, #07080a 100%)`,
      }}
    >
      <div className="bg-grid absolute inset-0 opacity-[0.08] invert" />
      <company.icon
        className="absolute top-1/2 right-[8%] hidden h-[40vh] w-[40vh] -translate-y-1/2 text-white/10 lg:block"
        strokeWidth={0.75}
      />
    </div>
  );
}
