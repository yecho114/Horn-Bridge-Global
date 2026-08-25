"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="container-page">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 ${scrolled ? "glass shadow-[0_8px_30px_rgba(16,18,26,0.08)]" : "bg-transparent"
            }`}
        >
          <Link href="/" className="flex items-end gap-1">
            <Image src={logo} alt="Logo" width={40} height={32} className="h-[clamp(1.6rem,7vw,2rem)] w-auto" />

            <span className="leading-none text-[clamp(0.6875rem,3.2vw,0.875rem)] font-semibold tracking-tight text-fg sm:text-xs">
              <span className="">

                <span className="text-red-700">H</span>orn
                <span className="text-red-700">B</span>ridge
              </span>
              <span className="block tracking-[0.4em]">Global</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-medium transition-colors hover:text-fg label-mono ${scrolled ? "text-muted" : "text-bg/90"}`}
              >
                <link.icon className={`h-3.5 w-3.5 transition-colors group-hover:text-primary  ${scrolled ? 'text-muted' : 'text-bg/90'}`} />
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-4 py-2 text-[11px] font-semibold label-mono transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-center rounded-full text-fg sm:h-9 sm:w-9 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="container-page mt-2 md:hidden"
          >
            <div className="flex flex-col gap-1 rounded-2xl border border-border-strong bg-bg-elevated-2 p-3 shadow-[0_20px_60px_rgba(16,18,26,0.14)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-fg/90 hover:bg-fg/4"
                >
                  <link.icon className="h-4 w-4 text-primary" />
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-1 rounded-xl px-3 py-3 text-center text-sm font-semibold"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
