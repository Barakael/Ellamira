import { customers } from "@/content/company";
import { Container } from "@/components/ui/Container";

export function CustomerTypes() {
  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
          Who we serve
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-navy-ink md:text-5xl">
          A broad range of vehicle needs.
        </h2>
        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {customers.map((customer) => (
            <li key={customer} className="flex gap-3 border-t border-mist pt-4 text-navy-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-crimson" aria-hidden="true" />
              <span>{customer}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
