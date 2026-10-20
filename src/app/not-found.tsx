import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-navy-deep pt-28 pb-16 text-paper">
      <Container>
        <p className="text-xs font-semibold tracking-[0.22em] text-crimson uppercase">
          404
        </p>
        <h1 className="mt-4 font-serif text-5xl">This page is not in the showroom.</h1>
        <p className="mt-4 max-w-md text-white/75">
          The link may be out of date. The vehicles and the contact desk are still here.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/vehicles">Browse vehicles</ButtonLink>
          <ButtonLink href="/" variant="ghost-light">
            Back home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
