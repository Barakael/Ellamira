import type { Metadata } from "next";
import { Suspense } from "react";
import { company, growth, partnerTypes } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { PageFallback } from "@/components/ui/PageFallback";
import { PageIntro } from "@/components/ui/PageIntro";
import { InquiryForm } from "@/components/vehicles/InquiryForm";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Ellamira partners with vehicle suppliers, exporters, finance, insurance, logistics and institutions.",
};

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        label="Corporate partnerships"
        title="Partnerships that create lasting value."
        lede={company.partnershipPhilosophy}
      />
      <section className="bg-paper py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-serif text-3xl text-navy-ink">Who we work with</h2>
              <ul className="mt-6 grid gap-3">
                {partnerTypes.map((partner) => (
                  <li key={partner} className="flex gap-3 border-t border-mist pt-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-crimson" aria-hidden="true" />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
              <h2 className="mt-8 font-serif text-3xl text-navy-ink">Growth ambition</h2>
              <p className="mt-3 text-steel">{company.growthAmbition}</p>
              <ul className="mt-6 space-y-3 text-navy-ink">
                {growth.map((item) => (
                  <li key={item} className="border-l-2 border-crimson pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Suspense fallback={<PageFallback />}>
              <InquiryForm mode="partner" />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
