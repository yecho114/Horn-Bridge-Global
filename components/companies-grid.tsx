import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companies } from "@/lib/data";
import { CompanyLogo } from "./company-logo";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function CompaniesGrid({
  showHeading = true,
  eyebrow = "Our Companies",
  title = "Four companies. One shared vision.",
  description = "Each of our companies leads in its own field, backed by the standards, partnerships and resources of the Horn Bridge Global group.",
  exclude,
}: {
  showHeading?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  exclude?: string;
}) {
  const list = companies.filter((c) => c.slug !== exclude);

  return (
    <section id="companies" className="section-pad scroll-mt-20 bg-bg">
      <div className="container-page">
        {showHeading && (
          <Reveal className="max-w-xl">
            <span className="label-mono text-[11px] text-primary">
              {eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                {description}
              </p>
            )}
          </Reveal>
        )}

        <RevealGroup
          className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${list.length === 3 ? "lg:grid-cols-3" : ""} ${showHeading ? "mt-14" : ""}`}
          stagger={0.1}
        >
          {list.map((company) => (
            <RevealItem key={company.slug}>
              <Link
                href={`/companies/${company.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-bg-elevated p-7 transition-colors duration-300 hover:bg-bg-elevated-2 sm:p-9"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: company.brand.primary }}
                />
                <div
                  className="absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-25"
                  style={{ background: company.brand.primary }}
                />

                <div className="relative flex items-center gap-4">
                  <CompanyLogo company={company} />
                  <div>
                    <p
                      className="label-mono text-[10px]"
                      style={{ color: company.brand.primary }}
                    >
                      {company.sector}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-fg sm:text-2xl">
                      {company.name}
                    </h3>
                  </div>
                </div>

                <p className="relative mt-6 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {company.summary}
                </p>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {company.highlights.map((h) => (
                    <li
                      key={h.title}
                      className="flex items-center gap-1.5 rounded-full border border-border-strong bg-bg px-3 py-1.5 text-xs text-muted"
                    >
                      <h.icon
                        className="h-3.5 w-3.5"
                        style={{ color: company.brand.primary }}
                        strokeWidth={1.75}
                      />
                      {h.title}
                    </li>
                  ))}
                </ul>

                <span
                  className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold"
                  style={{ color: company.brand.primary }}
                >
                  Visit {company.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
