"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { CarSilhouette } from "./car-silhouette";
import { heroStats, siteConfig } from "@/lib/data";

const barHeights = [30, 55, 40, 70, 50, 85, 60, 95, 72, 100, 65, 40];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg pt-28 pb-16"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-bg/10" />
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,black,transparent)]" />
      <div className="radial-glow absolute inset-0" />
      <div
        className="absolute -right-[10%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full opacity-20 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-primary-dark), transparent 70%)" }}
      />

      <div className="container-page relative z-10 grid w-full gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-fg/4 px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary" />
            </span>
            <span className="label-mono text-[10px] text-bg/95">
              Serving the Horn of Africa
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] font-bold leading-[0.92] tracking-tight text-fg sm:text-[9vw] lg:text-[3vw]"
          >
            MOBILITY.
            <br />
            <span className="text-gradient">WITHOUT BORDERS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-xs leading-relaxed text-bg/95 sm:text-sm"
          >
            {siteConfig.name} bridges international manufacturers with the
            Horn of Africa &mdash; importing, exporting, distributing and
            trading motor vehicles, electric vehicles, spare parts and
            accessories, plus public transport and logistics services across
            Ethiopia, Somalia and Djibouti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-fg px-6 py-3.5 text-sm font-semibold text-bg-elevated/95 transition-colors hover:bg-bg hover:text-fg/90"
            >
              Request a Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-16 hidden max-w-sm text-subtle sm:block"
          >
            <CarSilhouette className="h-auto w-full text-fg/6" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="bg-bg/95 w-full max-w-xs rounded-2xl p-5 shadow-[0_20px_60px_rgba(16,18,26,0.12)] sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="label-mono text-[9px] text-subtle">
                Trade Overview
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-1 text-[9px] font-medium text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Live
              </span>
            </div>

            <div className="mt-4 flex h-14 items-end justify-between gap-1">
              {barHeights.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${(h / 100) * 56}px` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.04, ease: "easeOut" }}
                  className="w-full rounded-full"
                  style={{
                    background:
                      i >= barHeights.length - 4
                        ? "linear-gradient(180deg, var(--color-primary), var(--color-primary-dark))"
                        : "rgba(16,18,26,0.14)",
                  }}
                />
              ))}
            </div>
            <p className="mt-2 text-[9px] text-subtle">
              Monthly export volume, last 12 months
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-lg border border-border bg-fg/3 px-3.5 py-2.5"
                >
                  <div>
                    <p className="label-mono text-[9px] text-subtle">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-lg font-bold text-fg">{stat.value}</p>
                  </div>
                  <stat.icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} />
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-fg/4 py-2.5 text-[10px] font-semibold label-mono text-fg transition-colors hover:bg-fg/7"
            >
              Explore Services
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div
            className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full opacity-25 blur-[70px]"
            style={{ background: "var(--color-gold)" }}
          />
        </motion.div>
      </div>

      <motion.a
        href="#tracking"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-subtle lg:flex"
      >
        <span className="label-mono text-[9px]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
