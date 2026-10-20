"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { companies, navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../img/logo.png";
import { CompanyLogo } from "./company-logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const pathname = usePathname();

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

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setCompaniesOpen(false);
  }

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

            <span className={`leading-none text-[clamp(0.6875rem,3.2vw,0.875rem)] font-semibold tracking-tight sm:text-xs ${scrolled ? "text-fg" : "text-bg"}`}>
              <span className="">

                <span className="text-red-700">H</span>orn
                <span className="text-red-700">B</span>ridge
              </span>
              <span className="block tracking-[0.4em]">Global</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) =>
              link.href === "/companies" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setCompaniesOpen(true)}
                  onMouseLeave={() => setCompaniesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setCompaniesOpen((v) => !v)}
                    onKeyDown={(e) => e.key === "Escape" && setCompaniesOpen(false)}
                    aria-expanded={companiesOpen}
                    className={`group flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-medium transition-colors hover:text-fg label-mono cursor-pointer ${scrolled ? "text-muted" : "text-bg/90"}`}
                  >
                    <link.icon className={`h-3.5 w-3.5 transition-colors group-hover:text-primary ${scrolled ? "text-muted" : "text-bg/90"}`} />
                    {link.label}
                    <ChevronDown className={`h-3 w-3 transition-transform ${companiesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {companiesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full w-90 -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-2xl border border-border-strong bg-bg p-2 shadow-[0_20px_60px_rgba(16,18,26,0.14)]">
                          {companies.map((company) => (
                            <Link
                              key={company.slug}
                              href={`/companies/${company.slug}`}
                              className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-bg-elevated"
                            >
                              <CompanyLogo company={company} size="sm" />
                              <span>
                                <span className="block text-sm font-semibold text-fg">
                                  {company.name}
                                </span>
                                <span className="block text-xs text-muted">{company.sector}</span>
                              </span>
                            </Link>
                          ))}
                          <Link
                            href="/companies"
                            className="mt-1 block rounded-xl border-t border-border px-2.5 pt-3 pb-2 text-center text-[10px] font-semibold text-primary label-mono"
                          >
                            View all companies
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-medium transition-colors hover:text-fg label-mono ${scrolled ? "text-muted" : "text-bg/90"}`}
                >
                  <link.icon className={`h-3.5 w-3.5 transition-colors group-hover:text-primary  ${scrolled ? 'text-muted' : 'text-bg/90'}`} />
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-4 py-2 text-[11px] font-semibold label-mono transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`flex h-8 w-8 items-center justify-center rounded-full sm:h-9 sm:w-9 md:hidden ${scrolled || open ? "text-fg" : "text-bg"}`}
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
            <div className="flex max-h-[calc(100svh-6rem)] flex-col gap-1 overflow-y-auto rounded-2xl border border-border-strong bg-bg-elevated-2 p-3 shadow-[0_20px_60px_rgba(16,18,26,0.14)]">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-fg/90 hover:bg-fg/4"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-fg/90 hover:bg-fg/4"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    {link.label}
                  </Link>
                  {link.href === "/companies" && (
                    <div className="mb-1 ml-5 flex flex-col gap-0.5 border-l border-border-strong pl-3">
                      {companies.map((company) => (
                        <Link
                          key={company.slug}
                          href={`/companies/${company.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-fg/80 hover:bg-fg/4"
                        >
                          <span
                            className="h-2 w-2 shrink-0 rounded-full"
                            style={{ background: company.brand.primary }}
                          />
                          {company.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-1 rounded-xl px-3 py-3 text-center text-sm font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
