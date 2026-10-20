import type { Category, CategorySlug, Vehicle } from "@/lib/types";

const representative = "Representative specification. Availability and the final quotation are confirmed when you enquire.";

export const categories: Category[] = [
  {
    slug: "passenger-cars",
    name: "Passenger cars",
    index: "01",
    summary: "Reliable vehicles suitable for personal and family use.",
    image: "/images/accent.jpg",
    imageAlt: "Red car on an open road under a blue sky",
  },
  {
    slug: "suvs",
    name: "SUVs",
    index: "02",
    summary: "Comfortable and versatile vehicles suitable for urban and long-distance use.",
    image: "/images/gle.jpg",
    imageAlt: "White Mercedes-Benz SUV in a crimson and teal garage",
  },
  {
    slug: "pickups",
    name: "Pickups",
    index: "03",
    summary:
      "Practical vehicles suitable for businesses, construction, agriculture and general commercial activities.",
    image: "/images/tacoma.jpg",
    imageAlt: "Sand-coloured Toyota Tacoma double-cab pickup",
  },
  {
    slug: "trucks",
    name: "Trucks",
    index: "04",
    summary: "Commercial trucks for transportation, logistics and industrial operations.",
    image: "/images/scania.jpg",
    imageAlt: "White Scania cargo truck on an open highway",
  },
  {
    slug: "buses",
    name: "Buses",
    index: "05",
    summary:
      "Passenger transportation vehicles for schools, companies, institutions and transport operations.",
    image: "/images/coach.jpg",
    imageAlt: "Modern coach bus parked at dusk",
  },
  {
    slug: "specialized",
    name: "Specialized vehicles",
    index: "06",
    summary: "Other specialized vehicles sourced upon customer request and operational requirements.",
    image: "/images/gclass.jpg",
    imageAlt: "Dark Mercedes-Benz G-Class on a city street at golden hour",
  },
];

export const vehicles: Vehicle[] = [
  {
    slug: "hyundai-accent",
    name: "Hyundai Accent",
    category: "passenger-cars",
    featured: true,
    summary:
      "A compact sedan for daily city driving and family trips, with a straightforward cabin and sensible running costs.",
    intendedUse: "Personal and family transport in town and on longer road trips.",
    image: "/images/accent.jpg",
    imageAlt: "Red car on an open road under a blue sky",
    specs: [
      { label: "Body", value: "Compact sedan" },
      { label: "Seats", value: "5" },
      { label: "Fuel", value: "Petrol" },
      { label: "Transmission", value: "Automatic" },
      { label: "Drivetrain", value: "Front-wheel drive" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "bmw-5-series",
    name: "BMW 5 Series",
    category: "passenger-cars",
    featured: false,
    summary:
      "An executive sedan for buyers who want a quieter cabin, stronger road presence and a car suited to corporate use.",
    intendedUse: "Personal ownership and corporate passenger transport.",
    image: "/images/bmw.jpg",
    imageAlt: "White BMW 5 Series sedan in motion on a city avenue",
    specs: [
      { label: "Body", value: "Executive sedan" },
      { label: "Seats", value: "5" },
      { label: "Fuel", value: "Petrol" },
      { label: "Transmission", value: "Automatic" },
      { label: "Drivetrain", value: "Rear-wheel drive" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "mercedes-benz-gle",
    name: "Mercedes-Benz GLE",
    category: "suvs",
    featured: true,
    summary:
      "A mid-size luxury SUV for mixed city and highway use, with room for passengers and luggage.",
    intendedUse: "Urban driving, family travel and long-distance journeys.",
    image: "/images/gle.jpg",
    imageAlt: "White Mercedes-Benz GLE with headlights on in a coloured garage",
    specs: [
      { label: "Body", value: "Mid-size SUV" },
      { label: "Seats", value: "5" },
      { label: "Fuel", value: "Petrol or diesel, confirmed on the sourced unit" },
      { label: "Transmission", value: "Automatic" },
      { label: "Drivetrain", value: "All-wheel drive" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "ford-explorer",
    name: "Ford Explorer",
    category: "suvs",
    featured: false,
    summary:
      "A three-row SUV for families and organisations that need more seats without moving up to a bus.",
    intendedUse: "Family travel and staff movement for companies and institutions.",
    image: "/images/explorer.jpg",
    imageAlt: "White Ford Explorer SUV in open country at dusk",
    specs: [
      { label: "Body", value: "Three-row SUV" },
      { label: "Seats", value: "6 or 7, confirmed on the sourced unit" },
      { label: "Fuel", value: "Petrol" },
      { label: "Transmission", value: "Automatic" },
      { label: "Drivetrain", value: "All-wheel drive" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "toyota-tacoma",
    name: "Toyota Tacoma",
    category: "pickups",
    featured: true,
    summary:
      "A double-cab pickup for work sites, farms and mixed road use, with room for a crew and their equipment.",
    intendedUse: "Construction, agriculture and general commercial work.",
    image: "/images/tacoma.jpg",
    imageAlt: "Toyota Tacoma double-cab pickup on a dirt yard",
    specs: [
      { label: "Cab", value: "Double cab" },
      { label: "Seats", value: "5" },
      { label: "Drivetrain", value: "Four-wheel drive" },
      { label: "Use class", value: "Light commercial" },
      { label: "Transmission", value: "Automatic" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "ford-f-150",
    name: "Ford F-150",
    category: "pickups",
    featured: false,
    summary:
      "A full-size double-cab pickup for teams that need to carry people and equipment on the same vehicle.",
    intendedUse: "Commercial operations, project sites and fleet support.",
    image: "/images/f150.jpg",
    imageAlt: "Blue Ford F-150 double-cab pickup in evening light",
    specs: [
      { label: "Cab", value: "Double cab" },
      { label: "Seats", value: "5" },
      { label: "Fuel", value: "Petrol" },
      { label: "Transmission", value: "Automatic" },
      { label: "Use class", value: "Full-size pickup" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "scania-cargo",
    name: "Scania cargo truck",
    category: "trucks",
    featured: false,
    summary:
      "A heavy tractor and trailer combination for long-haul freight, distribution and logistics contracts.",
    intendedUse: "Transportation, logistics and industrial freight.",
    image: "/images/scania.jpg",
    imageAlt: "White Scania tractor unit pulling a curtain-side trailer",
    specs: [
      { label: "Class", value: "Heavy commercial" },
      { label: "Configuration", value: "Tractor and trailer" },
      { label: "Fuel", value: "Diesel" },
      { label: "Role", value: "Line-haul freight" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "kenworth-conventional",
    name: "Kenworth conventional",
    category: "trucks",
    featured: false,
    summary:
      "A heavy-duty conventional truck for freight that needs a robust chassis and long working days.",
    intendedUse: "Bulk freight, project cargo and long-distance haulage.",
    image: "/images/kenworth.jpg",
    imageAlt: "Blue Kenworth conventional truck on a wet road at dusk",
    specs: [
      { label: "Class", value: "Heavy commercial" },
      { label: "Configuration", value: "Conventional tractor" },
      { label: "Body", value: "Flatbed freight" },
      { label: "Fuel", value: "Diesel" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "long-distance-coach",
    name: "Long-distance coach",
    category: "buses",
    featured: true,
    summary:
      "A high-floor coach for schools, companies and transport operators moving groups between cities.",
    intendedUse: "Intercity travel, school movements and institutional group transport.",
    image: "/images/coach.jpg",
    imageAlt: "Blue and white long-distance coach at dusk",
    specs: [
      { label: "Role", value: "Passenger coach" },
      { label: "Configuration", value: "High-floor coach" },
      { label: "Fuel", value: "Diesel" },
      { label: "Capacity", value: "High-capacity seating, confirmed on the sourced unit" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "urban-passenger-bus",
    name: "Urban passenger bus",
    category: "buses",
    featured: false,
    summary:
      "A city bus for scheduled routes, staff shuttles and institutional transport inside and around town.",
    intendedUse: "Urban routes, staff movement and school or institutional shuttle work.",
    image: "/images/citybus.jpg",
    imageAlt: "Blue city bus in motion at dusk",
    specs: [
      { label: "Role", value: "Urban passenger bus" },
      { label: "Fuel", value: "Diesel" },
      { label: "Use", value: "Routes, schools and staff shuttles" },
      { label: "Capacity", value: "Confirmed on the sourced unit" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "mercedes-benz-g-class",
    name: "Mercedes-Benz G-Class",
    category: "specialized",
    featured: false,
    summary:
      "A field-support vehicle for institutions, NGOs and operations that need a capable vehicle away from paved roads.",
    intendedUse:
      "Remote operations, institutional fieldwork and project support specified by the customer.",
    image: "/images/gclass.jpg",
    imageAlt: "Dark Mercedes-Benz G-Class crossing a city junction at sunset",
    specs: [
      { label: "Body", value: "Ladder-frame utility" },
      { label: "Drivetrain", value: "Four-wheel drive" },
      { label: "Role", value: "Specialized field support" },
      { label: "Fuel", value: "Petrol or diesel, confirmed on the sourced unit" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "ram-promaster",
    name: "Ram ProMaster",
    category: "specialized",
    featured: false,
    summary:
      "A panel van that can be supplied as a shuttle, a cargo van, or fitted to a customer's operational brief.",
    intendedUse: "Institutional shuttles, light logistics and custom fit-outs.",
    image: "/images/promaster.jpg",
    imageAlt: "White Ram ProMaster panel van with headlights on",
    specs: [
      { label: "Body", value: "Panel van" },
      { label: "Role", value: "Shuttle or cargo" },
      { label: "Fit-out", value: "Confirmed to the customer's brief" },
      { label: "Fuel", value: "Diesel or petrol, confirmed on the sourced unit" },
      { label: "Note", value: representative },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getVehiclesByCategory(slug: CategorySlug) {
  return vehicles.filter((vehicle) => vehicle.category === slug);
}

export function getVehicle(category: string, slug: string) {
  return vehicles.find(
    (vehicle) => vehicle.category === category && vehicle.slug === slug,
  );
}

export function getFeaturedVehicles() {
  return vehicles.filter((vehicle) => vehicle.featured);
}
