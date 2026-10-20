import type { Metadata } from "next";
import { company, services } from "@/content/company";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vehicle importation, sales, customer-specific sourcing, fleet vehicles and advisory from Ellamira Trading.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="Our services"
        title="From international markets to a vehicle that fits."
        lede="From sourcing to delivery, the service is designed around convenience, reliability and customer needs."
      />
      <section className="bg-paper py-12 md:py-16">
        <Container>
          <ul className="grid gap-5">
            {services.map((service) => (
              <li
                key={service.index}
                className="border border-mist bg-white p-6 md:p-8"
              >
                <h2 className="font-serif text-3xl text-navy-ink">{service.title}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-steel">{service.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-navy-deep px-6 py-8 text-paper md:px-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
              Our sourcing promise
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {company.sourcingPromise.map((item) => (
                <li key={item} className="border border-white/20 px-4 py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/contact">Talk to us about a vehicle</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
