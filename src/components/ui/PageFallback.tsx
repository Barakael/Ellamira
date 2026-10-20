import { Container } from "@/components/ui/Container";

export function PageFallback() {
  return (
    <section className="bg-paper pt-24 pb-16">
      <Container>
        <div className="h-3 w-28 bg-mist" />
        <div className="mt-6 h-12 w-2/3 max-w-md bg-mist" />
        <div className="mt-10 h-72 bg-mist" />
      </Container>
    </section>
  );
}
