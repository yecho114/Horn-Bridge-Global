"use client";

import { useState, type SubmitEvent } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Reveal } from "./reveal";

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: MapPin, label: "Headquarters", value: siteConfig.address },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — your inquiry has been noted.", {
        description: "Our team will reach out shortly. (Demo form — not yet connected)",
      });
      form.reset();
    }, 700);
  }

  return (
    <section id="contact" className="section-pad bg-bg-elevated">
      <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <Reveal>
          <span className="label-mono text-[11px] text-primary">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
            Let&apos;s talk trade.
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
            Whether it&apos;s a single vehicle or a full fleet, reach out and
            our team will guide you through sourcing, shipping and delivery.
          </p>

          <div className="mt-9 flex flex-col gap-5">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-fg/4 text-primary">
                  <detail.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="label-mono text-[10px] text-subtle">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-fg">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="label-mono text-[10px] text-subtle">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="rounded-xl border border-border-strong bg-fg/3 px-4 py-3 text-sm text-fg placeholder:text-subtle outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="label-mono text-[10px] text-subtle">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-xl border border-border-strong bg-fg/3 px-4 py-3 text-sm text-fg placeholder:text-subtle outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="label-mono text-[10px] text-subtle">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  className="rounded-xl border border-border-strong bg-fg/3 px-4 py-3 text-sm text-fg placeholder:text-subtle outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="interest" className="label-mono text-[10px] text-subtle">
                  I&apos;m Interested In
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="rounded-xl border border-border-strong bg-fg/3 px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-primary"
                  defaultValue="Vehicle Import/Export"
                >
                  <option>Vehicle Import/Export</option>
                  <option>Distribution &amp; Trading</option>
                  <option>Electric Vehicles</option>
                  <option>Spare Parts &amp; Accessories</option>
                  <option>Public Transport</option>
                  <option>Logistics &amp; Fleet</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="label-mono text-[10px] text-subtle">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us what you're looking to move..."
                  className="resize-none rounded-xl border border-border-strong bg-fg/3 px-4 py-3 text-sm text-fg placeholder:text-subtle outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary group mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-colors disabled:opacity-60 sm:w-auto sm:px-8"
            >
              {submitting ? "Sending..." : "Send Inquiry"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
