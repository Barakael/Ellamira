import Link from "next/link";
import { getFeaturedCategories } from "@/content/vehicles";
import { BrandImage } from "@/components/ui/BrandImage";
import { Chapter } from "@/components/ui/Chapter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CategoryGrid() {
  const brands = getFeaturedCategories();

  return (
    <section className="bg-mist py-12 md:py-16">
      <Container>
        <Chapter
          label="Magari yanayouzika"
          title="Most sold brands."
          lede="A shorter look at the marques customers ask for most. Browse the full brand list on the vehicles page."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {brands.map((category, index) => (
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
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
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
        <p className="mt-8 text-center text-sm text-steel">
          <Link href="/vehicles" className="font-semibold text-navy hover:text-crimson">
            See all brands and vehicles
          </Link>
        </p>
      </Container>
    </section>
  );
}
