import { Hero } from "@/components/hero";
import { StatsStrip } from "@/components/stats-strip";
import { Services } from "@/components/services";
import { TrackingDashboard } from "@/components/tracking-dashboard";
import { FleetShowcase } from "@/components/fleet-showcase";
import { Process } from "@/components/process";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Services />
      <TrackingDashboard />
      <FleetShowcase />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </>
  );
}
