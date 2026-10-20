import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandScope } from "@/components/brand-scope";
import {
  CompanyApproach,
  CompanyFocusAreas,
  CompanyHero,
  CompanyOfferings,
} from "@/components/company-sections";
import { CompaniesGrid } from "@/components/companies-grid";
import { Contact } from "@/components/contact";
import { companies, getCompany, siteConfig } from "@/lib/data";

// Motors has its own route at app/companies/motors.
export function generateStaticParams() {
  return companies
    .filter((c) => c.slug !== "motors")
    .map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/companies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return {};
  return {
    title: `${company.name} | ${siteConfig.name}`,
    description: company.description,
  };
}

export default async function CompanyPage({ params }: PageProps<"/companies/[slug]">) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();

  return (
    <BrandScope brand={company.brand}>
      <CompanyHero company={company} />
      <CompanyOfferings company={company} />
      <CompanyFocusAreas company={company} />
      <CompanyApproach company={company} />
      <Contact
        companySlug={company.slug}
        title={`Contact ${company.name}.`}
        description={`Have a question or request for ${company.name}? Send us a message and our team will get back to you shortly.`}
      />
      <CompaniesGrid
        eyebrow={`Also part of ${siteConfig.name}`}
        title="Explore our other companies."
        description=""
        exclude={company.slug}
      />
    </BrandScope>
  );
}
