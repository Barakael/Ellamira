import Link from "next/link";
import { categories } from "@/content/vehicles";
import { BrandImage } from "@/components/ui/BrandImage";
import { Chapter } from "@/components/ui/Chapter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CategoryGrid() {
  return (
    <section className="bg-mist py-12 md:py-16">
      <Container>
        <Chapter
          label="Our business"
          title="Six ways to specify a vehicle."
          lede="From family cars to trucks, buses and vehicles built around a particular operation."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.05}>
              <Link
                href={`/vehicles/${category.slug}`}
                className="group block bg-paper"
              >
                <BrandImage
                  src={category.image}
                  alt={category.imageAlt}
                  zoom
                  className="aspect-[4/3]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="px-5 py-5">
                  <h3 className="font-serif text-3xl text-navy-ink">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">
                    {category.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
