import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BrandImage } from "@/components/ui/BrandImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageFallback } from "@/components/ui/PageFallback";
import { getCategory, getVehicle, getVehiclesByCategory, vehicles } from "@/content/vehicles";
import type { CategorySlug } from "@/lib/types";
import { vehicleWhatsappMessage, whatsappHref } from "@/lib/whatsapp";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    category: vehicle.category,
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const vehicle = getVehicle(category, slug);
  if (!vehicle) return { title: "Vehicle" };
  return { title: vehicle.name, description: vehicle.summary };
}

async function VehicleContent({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const vehicle = getVehicle(categorySlug, slug);
  if (!vehicle) notFound();
  const category = getCategory(vehicle.category);
  const related = getVehiclesByCategory(vehicle.category as CategorySlug).filter(
    (item) => item.slug !== vehicle.slug,
  );

  return (
    <>
      <section className="bg-navy-deep pt-24 pb-8 text-paper md:pt-28">
        <Container>
          <nav className="text-sm text-white/65" aria-label="Breadcrumb">
            <Link href="/vehicles" className="hover:text-white">
              Vehicles
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href={`/vehicles/${vehicle.category}`} className="hover:text-white">
              {category?.name}
            </Link>
          </nav>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{vehicle.name}</h1>
          <p className="mt-4 text-sm tracking-[0.16em] text-white/70 uppercase">
            Sourced to order · Quotation on request
          </p>
        </Container>
      </section>
      <section className="bg-paper py-12 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <BrandImage
                src={vehicle.image}
                alt={vehicle.imageAlt}
                tone="soft"
                priority
                className="aspect-[16/10]"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <p className="mt-8 text-lg leading-relaxed text-navy-ink">{vehicle.summary}</p>
              <h2 className="mt-8 font-serif text-3xl text-navy-ink">Intended use</h2>
              <p className="mt-3 leading-relaxed text-steel">{vehicle.intendedUse}</p>
              <h2 className="mt-8 font-serif text-3xl text-navy-ink">Example specification</h2>
              <dl className="mt-4 divide-y divide-mist border-y border-mist">
                {vehicle.specs.map((spec) => (
                  <div key={spec.label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]">
                    <dt className="text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                      {spec.label}
                    </dt>
                    <dd className="text-navy-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <aside className="h-fit border border-mist bg-white p-6 lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
                Request this vehicle
              </p>
              <p className="mt-3 font-serif text-3xl text-navy-ink">Quotation on request</p>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                This photograph and specification are representative. Availability is confirmed when you enquire.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={`/contact?vehicle=${vehicle.slug}`}>
                  Request this vehicle
                </ButtonLink>
                <a
                  href={whatsappHref(vehicleWhatsappMessage(vehicle.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center border border-navy/15 px-5 py-3 text-sm font-semibold text-navy"
                >
                  WhatsApp about this vehicle
                </a>
              </div>
            </aside>
          </div>
          {related.length > 0 ? (
            <div className="mt-10">
              <h2 className="font-serif text-3xl text-navy-ink">Also in {category?.name}</h2>
              <ul className="mt-6 grid gap-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/vehicles/${item.category}/${item.slug}`}
                      className="flex items-center justify-between border border-mist bg-white px-5 py-4 hover:border-navy"
                    >
                      <span className="font-serif text-2xl text-navy-ink">{item.name}</span>
                      <span className="text-sm text-steel">View</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}

export default function VehiclePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  return (
    <Suspense fallback={<PageFallback />}>
      <VehicleContent params={params} />
    </Suspense>
  );
}
