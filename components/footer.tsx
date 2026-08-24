import { footerLinks, siteConfig } from "@/lib/data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./social-icons";
import Image from "next/image";
import logo from "../img/logo.png";

const socials = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: XIcon, href: "#", label: "X (Twitter)" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="theme-dark border-t border-border bg-bg">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex items-center rounded-lg bg-white px-1.5 py-1">
                <Image src={logo} alt="Logo" width={40} height={26} className="h-6.5 w-auto" />
              </span>
              <span className="text-sm font-semibold tracking-tight text-fg">
                {siteConfig.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="label-mono text-[10px] text-subtle">Company</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono text-[10px] text-subtle">Services</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono text-[10px] text-subtle">Contact</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-muted">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li className="max-w-[200px]">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-subtle">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-subtle">
            Import &middot; Export &middot; Distribution &middot; Logistics
          </p>
        </div>
      </div>
    </footer>
  );
}
