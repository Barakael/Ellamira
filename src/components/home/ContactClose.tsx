import { company, phones } from "@/content/company";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function ContactClose() {
  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <div className="grid gap-8 border border-mist bg-white px-6 py-10 md:px-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-4xl text-navy-ink md:text-5xl">
              Tell us the vehicle you need.
            </h2>
            <p className="mt-4 max-w-xl text-steel">
              {company.office}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href={`tel:${phones[0].tel}`} className="font-serif text-2xl text-navy">
              {phones[0].display}
            </a>
            <ButtonLink href="/contact">Start an inquiry</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
