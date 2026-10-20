import { reasons } from "@/content/company";
import { Chapter } from "@/components/ui/Chapter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function WhyGrid() {
  return (
    <section className="bg-mist py-12 md:py-16">
      <Container>
        <Chapter
          label="Why Ellamira"
          title="A partner you can stay with."
          lede="The work is sourcing, importation and sales. The standard is transparency and a relationship that lasts past the handover."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.index} delay={index * 0.04}>
              <article className="h-full bg-paper p-6">
                <h3 className="font-serif text-2xl text-navy-ink">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{reason.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
