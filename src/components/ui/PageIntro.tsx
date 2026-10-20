import { Chapter } from "@/components/ui/Chapter";
import { Container } from "@/components/ui/Container";

export function PageIntro({
  label,
  title,
  lede,
}: {
  label: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="bg-navy-deep pt-24 pb-10 text-paper md:pt-28">
      <Container>
        <Chapter label={label} title={title} lede={lede} tone="dark" />
      </Container>
    </section>
  );
}
