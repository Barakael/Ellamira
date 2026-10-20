import Link from "next/link";
import type { Vehicle } from "@/lib/types";
import { getCategory } from "@/content/vehicles";
import { BrandImage } from "@/components/ui/BrandImage";

export function VehicleCard({
  vehicle,
  large = false,
}: {
  vehicle: Vehicle;
  large?: boolean;
}) {
  const category = getCategory(vehicle.category);

  return (
    <Link
      href={`/vehicles/${vehicle.category}/${vehicle.slug}`}
      className="group flex h-full flex-col bg-paper"
    >
      <BrandImage
        src={vehicle.image}
        alt={vehicle.imageAlt}
        zoom
        tone="card"
        className={large ? "aspect-[16/11]" : "aspect-[4/3]"}
        sizes={large ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
      />
      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="text-xs font-semibold tracking-[0.18em] text-crimson uppercase">
          {category?.name}
        </p>
        <h3 className={`mt-2 font-serif text-navy-ink ${large ? "text-4xl" : "text-2xl"}`}>
          {vehicle.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-steel">{vehicle.summary}</p>
        <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-navy uppercase">
          Sourced to order · Quotation on request
        </p>
      </div>
    </Link>
  );
}
