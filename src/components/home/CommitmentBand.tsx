import { commitments, company } from "@/content/company";
import { Container } from "@/components/ui/Container";

export function CommitmentBand() {
  return (
    <section className="bg-navy-ink py-12 text-paper md:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
              Our commitment
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              A brand customers can trust.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/75">{company.commitment}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {commitments.map((item) => (
              <li key={item} className="border border-white/15 px-4 py-4 text-sm tracking-wide">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
