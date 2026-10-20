import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { categories, vehicles } from "@/content/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/vehicles", "/services", "/partners", "/contact"];
  const categoryRoutes = categories.map((category) => `/vehicles/${category.slug}`);
  const vehicleRoutes = vehicles.map(
    (vehicle) => `/vehicles/${vehicle.category}/${vehicle.slug}`,
  );

  return [...routes, ...categoryRoutes, ...vehicleRoutes].map((path) => ({
    url: `${company.siteUrl}${path || "/"}`,
    lastModified: new Date("2026-10-20"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
