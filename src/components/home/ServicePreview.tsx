import { services } from "@/content/company";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ServicePreview() {
  return (
    <section className="bg-navy-deep py-12 text-paper md:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
              Our services
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              From sourcing to delivery.
            </h2>
            <div className="mt-5 h-px w-16 bg-crimson" />
            <p className="mt-5 text-white/75 leading-relaxed">
              The service is built around convenience, reliability and the vehicle the customer actually needs.
            </p>
            <div className="mt-8">
              <ButtonLink href="/services" variant="ghost-light">
                Explore services
              </ButtonLink>
            </div>
          </Reveal>
          <ol className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service) => (
              <li key={service.index} className="py-5">
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{service.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
