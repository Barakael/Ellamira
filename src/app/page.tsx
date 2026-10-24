import type { Metadata } from "next";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CommitmentBand } from "@/components/home/CommitmentBand";
import { ContactClose } from "@/components/home/ContactClose";
import { CustomerTypes } from "@/components/home/CustomerTypes";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { Glance } from "@/components/home/Glance";
import { Hero } from "@/components/home/Hero";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { PromiseMarquee } from "@/components/home/PromiseMarquee";
import { ServicePreview } from "@/components/home/ServicePreview";
import { WhyGrid } from "@/components/home/WhyGrid";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: {
    absolute: `${company.name} · ${company.tagline}`,
  },
  description: company.positioning,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromiseMarquee />
      <Glance />
      <CategoryGrid />
      <FeaturedVehicles />
      <ServicePreview />
      <ProcessStrip />
      <WhyGrid />
      <CustomerTypes />
      <CommitmentBand />
      <ContactClose />
    </>
  );
}
