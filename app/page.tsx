import { HeroSlider } from "@/components/hero-slider";
import { StatsStrip } from "@/components/stats-strip";
import { CompaniesGrid } from "@/components/companies-grid";
import { VisionMission } from "@/components/vision-mission";
import { Markets } from "@/components/markets";
import { WhyPartner } from "@/components/why-partner";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { groupStats } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsStrip stats={groupStats} />
      <CompaniesGrid />
      <VisionMission />
      <WhyPartner />
      <Markets />
      <CtaBanner
        eyebrow="Work With Us"
        title="Let's build the future of the Horn of Africa together."
        description="Whether you're a customer, supplier, partner or investor, our team will connect you with the right company in our group."
        cta="Get in Touch"
      />
      <Contact />
    </>
  );
}
