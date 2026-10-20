import { company } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const facts = [
  { label: "Head office", value: "Ilala, Tanzania" },
  { label: "Business", value: "Importation and dealership" },
  { label: "Registered", value: company.registered },
  { label: "Ambition", value: "Across East Africa" },
];

export function Glance() {
  return (
    <section className="bg-paper pt-12 pb-4 md:pt-16 md:pb-6">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
              Executive overview
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-navy-ink md:text-5xl">
              A dependable link to international vehicle markets.
            </h2>
            <div className="mt-5 h-px w-16 bg-crimson" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-steel md:text-lg">
              {company.overview}
            </p>
          </Reveal>
        </div>
        <dl className="mt-8 grid gap-px bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-paper px-5 py-6">
              <dt className="text-xs font-semibold tracking-[0.18em] text-steel uppercase">
                {fact.label}
              </dt>
              <dd className="mt-3 font-serif text-2xl text-navy-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
