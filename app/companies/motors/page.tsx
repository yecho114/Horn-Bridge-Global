import type { Metadata } from "next";
import { BrandScope } from "@/components/brand-scope";
import { Hero } from "@/components/hero";
import { StatsStrip } from "@/components/stats-strip";
import { Services } from "@/components/services";
import { TrackingDashboard } from "@/components/tracking-dashboard";
import { FleetShowcase } from "@/components/fleet-showcase";
import { Process } from "@/components/process";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { CompaniesGrid } from "@/components/companies-grid";
import { getCompany, siteConfig } from "@/lib/data";

const motors = getCompany("motors")!;

export const metadata: Metadata = {
  title: `${motors.name} | ${siteConfig.name}`,
  description: motors.description,
};

export default function MotorsPage() {
  return (
    <BrandScope brand={motors.brand}>
      <Hero />
      <StatsStrip />
      <Services />
      <TrackingDashboard />
      <FleetShowcase />
      <Process />
      <WhyChooseUs />
      <CtaBanner />
      <Contact
        companySlug={motors.slug}
        title="Let's talk trade."
        description="Whether it's a single vehicle or a full fleet, reach out and our team will guide you through sourcing, shipping and delivery."
      />
      <CompaniesGrid
        eyebrow={`Also part of ${siteConfig.name}`}
        title="Explore our other companies."
        description=""
        exclude={motors.slug}
      />
    </BrandScope>
  );
}
