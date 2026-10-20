import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageFallback } from "@/components/ui/PageFallback";
import { PageIntro } from "@/components/ui/PageIntro";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { categories, getCategory, getVehiclesByCategory } from "@/content/vehicles";
import type { CategorySlug } from "@/lib/types";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) return { title: "Vehicles" };
  return { title: data.name, description: data.summary };
}

async function CategoryContent({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const list = getVehiclesByCategory(category.slug as CategorySlug);

  return (
    <>
      <PageIntro
        label="Vehicles"
        title={category.name}
        lede={category.summary}
      />
      <section className="bg-paper py-12 md:py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {list.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} large />
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 border border-mist bg-mist/40 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-steel">
              Need a different specification in this category? Tell us the use, budget and any preferred details.
            </p>
            <ButtonLink href="/contact">Request a vehicle</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  return (
    <Suspense fallback={<PageFallback />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}
