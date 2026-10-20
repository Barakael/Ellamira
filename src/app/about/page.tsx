import type { Metadata } from "next";
import { company, values } from "@/content/company";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: company.overview,
};

const facts = [
  ["Company", company.name],
  ["Business", company.business],
  ["Country", company.country],
  ["Head office", company.office],
  ["Telephone", "+255 753 103 533 · +255 677 084 461"],
  ["Email", company.email],
  ["Website", company.website],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="Who we are"
        title="A Tanzania-based automotive trading company."
        lede={company.positioning}
      />
      <section className="bg-paper py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <BrandImage
                src="/images/port.jpg"
                alt="Container ship at a commercial port"
                tone="soft"
                className="aspect-[4/3]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-navy-ink">{company.overview}</p>
              <p className="mt-5 leading-relaxed text-steel">{company.model}</p>
            </Reveal>
          </div>
          <dl className="mt-10 divide-y divide-mist border-y border-mist">
            {facts.map(([label, value]) => (
              <div key={label} className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]">
                <dt className="text-xs font-semibold tracking-[0.16em] text-steel uppercase">
                  {label}
                </dt>
                <dd className="text-navy-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <section className="bg-mist py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-paper p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                Vision
              </p>
              <p className="mt-4 font-serif text-3xl leading-snug text-navy-ink">
                {company.vision}
              </p>
            </article>
            <article className="bg-navy-deep p-8 text-paper">
              <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                Mission
              </p>
              <p className="mt-4 font-serif text-3xl leading-snug">{company.mission}</p>
            </article>
          </div>
          <h2 className="mt-10 font-serif text-4xl text-navy-ink">Core values</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className="bg-paper p-6">
                <h3 className="font-serif text-2xl text-navy-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{value.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-paper py-12 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                Our commitment
              </p>
              <h2 className="mt-4 font-serif text-4xl text-navy-ink">
                Building a brand customers can trust.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-steel">{company.commitment}</p>
            </div>
            <aside className="border border-mist bg-white p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                Company registration
              </p>
              <ul className="mt-4 space-y-3 text-sm text-navy-ink">
                <li>TIN {company.tin}</li>
                <li>Company registration no. {company.registration}</li>
                <li>Registered {company.registered}</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
