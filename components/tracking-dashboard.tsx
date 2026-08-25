"use client";

import { motion } from "framer-motion";
import { CircleCheck, LayoutDashboard, MapPinned, Radar } from "lucide-react";
import { RoutePath } from "./car-silhouette";
import { Reveal } from "./reveal";

const CIRCUMFERENCE = 2 * Math.PI * 54;

const checklist = [
  "Live shipment status from origin port to final delivery",
  "Automated customs & documentation milestones",
  "Fleet-wide visibility across every active vehicle order",
];

export function TrackingDashboard() {
  return (
    <section id="tracking" className="section-pad overflow-x-hidden bg-bg-elevated">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="label-mono text-[11px] text-primary">
            Live Tracking
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            Track every shipment, in real time.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Every order runs through a single dashboard &mdash; from sourcing
            and customs to freight and final-mile delivery &mdash; so you
            always know exactly where your vehicles and parts are.
          </p>

          <ul className="mt-7 flex flex-col gap-3.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <CircleCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 grid max-w-md grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-fg/3 p-5">
              <LayoutDashboard className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <p className="mt-3 text-sm font-semibold text-fg">Fleet Dashboard</p>
              <p className="mt-1 text-xs leading-relaxed text-subtle">
                One view across every vehicle in transit or in stock.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-fg/3 p-5">
              <MapPinned className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <p className="mt-3 text-sm font-semibold text-fg">Route Optimization</p>
              <p className="mt-1 text-xs leading-relaxed text-subtle">
                Smarter freight routing to cut transit time and cost.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-[0_20px_60px_rgba(16,18,26,0.12)] sm:p-8">
            <div className="flex items-center justify-between">
              <span className="label-mono text-[10px] text-subtle">
                Shipment #HB-24187
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success">
                <Radar className="h-3 w-3 animate-pulse-dot" />
                In Transit
              </span>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="rgba(16,18,26,0.08)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    initial={{ strokeDashoffset: CIRCUMFERENCE }}
                    whileInView={{ strokeDashoffset: CIRCUMFERENCE * 0.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-bold text-fg">98%</span>
                  <span className="label-mono text-[8px] text-subtle">
                    On-Time
                  </span>
                </div>
              </div>

              <div className="flex w-full flex-1 flex-col gap-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-xs text-subtle">Origin</span>
                  <span className="text-sm font-medium text-fg">
                    Jebel Ali, UAE
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-xs text-subtle">Destination</span>
                  <span className="text-sm font-medium text-fg">
                    Jijiga, Ethiopia
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-subtle">ETA</span>
                  <span className="text-sm font-medium text-fg">6 days</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-fg/3 p-5">
              <div className="flex items-center justify-between">
                <span className="label-mono text-[9px] text-subtle">
                  Route Progress
                </span>
                <span className="label-mono text-[9px] text-primary">
                  62%
                </span>
              </div>
              <RoutePath className="mt-3 h-16 w-full text-primary/70" />
            </div>
          </div>

          <div
            className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full opacity-15 blur-[80px]"
            style={{ background: "var(--color-primary-dark)" }}
          />
        </Reveal>
      </div>
    </section>
  );
}
