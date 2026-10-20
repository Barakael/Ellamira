"use client";

import { useState } from "react";
import { categories, vehicles } from "@/content/vehicles";
import type { CategorySlug } from "@/lib/types";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

export function VehicleBrowser() {
  const [active, setActive] = useState<CategorySlug | "all">("all");
  const visible =
    active === "all" ? vehicles : vehicles.filter((vehicle) => vehicle.category === active);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Filter vehicles">
        <FilterChip
          pressed={active === "all"}
          onClick={() => setActive("all")}
        >
          All vehicles
        </FilterChip>
        {categories.map((category) => (
          <FilterChip
            key={category.slug}
            pressed={active === category.slug}
            onClick={() => setActive(category.slug)}
          >
            {category.name}
          </FilterChip>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`shrink-0 px-4 py-2 text-sm font-semibold transition ${
        pressed ? "bg-navy text-paper" : "bg-white text-navy hover:bg-mist"
      }`}
    >
      {children}
    </button>
  );
}
