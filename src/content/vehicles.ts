import type { Category, CategorySlug, Vehicle } from "@/lib/types";

const representative =
  "Representative specification. Availability and the final quotation are confirmed when you enquire.";

export const categories: Category[] = [
  {
    slug: "toyota",
    name: "Toyota",
    index: "01",
    summary: "Dependable passenger and commercial vehicles for daily work and family use.",
    image: "/images/tacoma.jpg",
    imageAlt: "Toyota Tacoma double-cab pickup on a dirt yard",
    featured: true,
  },
  {
    slug: "nissan",
    name: "Nissan",
    index: "02",
    summary: "SUVs and pickups suited to East African roads and mixed urban use.",
    image: "/images/nissan.jpg",
    imageAlt: "Silver Nissan SUV under a clear sky with navy-toned surroundings",
    featured: true,
  },
  {
    slug: "bmw",
    name: "BMW",
    index: "03",
    summary: "Executive passenger cars for corporate and personal buyers.",
    image: "/images/bmw.jpg",
    imageAlt: "White BMW 5 Series sedan in motion on a city avenue",
    featured: true,
  },
  {
    slug: "mercedes-benz",
    name: "Mercedes-Benz",
    index: "04",
    summary: "Luxury SUVs and specialist utility vehicles sourced to order.",
    image: "/images/gle.jpg",
    imageAlt: "White Mercedes-Benz GLE with headlights on in a coloured garage",
    featured: true,
  },
  {
    slug: "mazda",
    name: "Mazda",
    index: "05",
    summary: "Compact SUVs and cars for personal and small-fleet use.",
    image: "/images/mazda.jpg",
    imageAlt: "Red Mazda crossover SUV against a navy and paper backdrop",
    featured: false,
  },
  {
    slug: "faw",
    name: "FAW",
    index: "06",
    summary: "Commercial trucks for construction, distribution and industrial work.",
    image: "/images/faw.jpg",
    imageAlt: "White FAW cargo truck on an open road",
    featured: false,
  },
  {
    slug: "howo",
    name: "HOWO",
    index: "07",
    summary: "Heavy trucks for haulage, tipper work and long-distance freight.",
    image: "/images/howo.jpg",
    imageAlt: "HOWO heavy truck with crimson accents on a worksite approach",
    featured: false,
  },
  {
    slug: "mitsubishi",
    name: "Mitsubishi",
    index: "08",
    summary: "Canter light trucks, Rosa coaches and related commercial models.",
    image: "/images/canter.jpg",
    imageAlt: "Mitsubishi Canter light truck parked in daylight",
    featured: true,
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    index: "09",
    summary: "Compact passenger cars for city driving and family trips.",
    image: "/images/accent.jpg",
    imageAlt: "Red Hyundai Accent sedan under a blue sky",
    featured: true,
  },
  {
    slug: "shacman",
    name: "Shacman",
    index: "10",
    summary: "Heavy commercial trucks for construction and logistics fleets.",
    image: "/images/shacman.jpg",
    imageAlt: "Shacman heavy truck on a paved industrial road",
    featured: false,
  },
  {
    slug: "scania",
    name: "Scania",
    index: "11",
    summary: "Heavy tractor units for line-haul freight and logistics contracts.",
    image: "/images/scania.jpg",
    imageAlt: "White Scania tractor unit pulling a curtain-side trailer",
    featured: true,
  },
  {
    slug: "ford",
    name: "Ford",
    index: "12",
    summary: "SUVs and full-size pickups for families and commercial crews.",
    image: "/images/explorer.jpg",
    imageAlt: "White Ford Explorer SUV in open country at dusk",
    featured: true,
  },
  {
    slug: "tata",
    name: "TATA",
    index: "13",
    summary: "Light and medium commercial vehicles for business operations.",
    image: "/images/tata.jpg",
    imageAlt: "TATA light commercial truck in navy and white livery",
    featured: false,
  },
];

export const vehicles: Vehicle[] = [
  {
    slug: "toyota-tacoma",
    name: "Toyota Tacoma",
    category: "toyota",
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
    slug: "nissan-x-trail",
    name: "Nissan X-Trail",
    category: "nissan",
    featured: true,
    summary:
      "A compact SUV for families and organisations that need comfortable road manners and light off-road ability.",
    intendedUse: "Family travel, staff movement and mixed urban driving.",
    image: "/images/nissan.jpg",
    imageAlt: "Silver Nissan X-Trail SUV under a clear sky",
    specs: [
      { label: "Body", value: "Compact SUV" },
      { label: "Seats", value: "5 or 7, confirmed on the sourced unit" },
      { label: "Fuel", value: "Petrol or diesel, confirmed on the sourced unit" },
      { label: "Transmission", value: "Automatic" },
      { label: "Drivetrain", value: "Front-wheel or all-wheel drive" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "bmw-5-series",
    name: "BMW 5 Series",
    category: "bmw",
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
    category: "mercedes-benz",
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
    slug: "mercedes-benz-g-class",
    name: "Mercedes-Benz G-Class",
    category: "mercedes-benz",
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
    slug: "mazda-cx-5",
    name: "Mazda CX-5",
    category: "mazda",
    featured: false,
    summary:
      "A compact crossover for personal ownership and small fleets that want a refined cabin without a large footprint.",
    intendedUse: "Daily commuting, family use and light organisational transport.",
    image: "/images/mazda.jpg",
    imageAlt: "Red Mazda CX-5 crossover against a navy-toned backdrop",
    specs: [
      { label: "Body", value: "Compact crossover" },
      { label: "Seats", value: "5" },
      { label: "Fuel", value: "Petrol" },
      { label: "Transmission", value: "Automatic" },
      { label: "Drivetrain", value: "Front-wheel or all-wheel drive" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "faw-cargo",
    name: "FAW cargo truck",
    category: "faw",
    featured: false,
    summary:
      "A medium commercial truck for distribution, construction materials and general freight work.",
    intendedUse: "Construction, wholesale distribution and industrial freight.",
    image: "/images/faw.jpg",
    imageAlt: "White FAW cargo truck on an open road",
    specs: [
      { label: "Class", value: "Medium commercial" },
      { label: "Configuration", value: "Cargo / dropside, confirmed on the sourced unit" },
      { label: "Fuel", value: "Diesel" },
      { label: "Role", value: "Distribution and site haulage" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "howo-tipper",
    name: "HOWO tipper",
    category: "howo",
    featured: false,
    summary:
      "A heavy tipper truck for construction aggregates, spoil and bulk materials on project sites.",
    intendedUse: "Construction haulage, quarry work and project logistics.",
    image: "/images/howo.jpg",
    imageAlt: "HOWO heavy tipper truck with crimson accents",
    specs: [
      { label: "Class", value: "Heavy commercial" },
      { label: "Configuration", value: "Tipper" },
      { label: "Fuel", value: "Diesel" },
      { label: "Role", value: "Bulk and construction materials" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "mitsubishi-canter",
    name: "Mitsubishi Canter",
    category: "mitsubishi",
    featured: true,
    summary:
      "A light truck for last-mile delivery, market runs and light construction support around town.",
    intendedUse: "Urban delivery, wholesale distribution and light commercial work.",
    image: "/images/canter.jpg",
    imageAlt: "Mitsubishi Canter light truck parked in daylight",
    specs: [
      { label: "Class", value: "Light commercial" },
      { label: "Configuration", value: "Cab chassis / dropside, confirmed on the sourced unit" },
      { label: "Fuel", value: "Diesel" },
      { label: "Role", value: "Local delivery and site support" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "mitsubishi-rosa",
    name: "Mitsubishi Rosa",
    category: "mitsubishi",
    featured: false,
    summary:
      "A mid-size coach for schools, companies and operators moving groups on intercity and institutional routes.",
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
    slug: "hyundai-accent",
    name: "Hyundai Accent",
    category: "hyundai",
    featured: true,
    summary:
      "A compact sedan for daily city driving and family trips, with a straightforward cabin and sensible running costs.",
    intendedUse: "Personal and family transport in town and on longer road trips.",
    image: "/images/accent.jpg",
    imageAlt: "Red Hyundai Accent sedan under a blue sky",
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
    slug: "shacman-f3000",
    name: "Shacman F3000",
    category: "shacman",
    featured: false,
    summary:
      "A heavy commercial truck for construction fleets and long-distance freight that need a robust chassis.",
    intendedUse: "Construction logistics, tipper work and line-haul freight.",
    image: "/images/shacman.jpg",
    imageAlt: "Shacman heavy truck on a paved industrial road",
    specs: [
      { label: "Class", value: "Heavy commercial" },
      { label: "Configuration", value: "Tractor or rigid, confirmed on the sourced unit" },
      { label: "Fuel", value: "Diesel" },
      { label: "Role", value: "Freight and construction haulage" },
      { label: "Note", value: representative },
    ],
  },
  {
    slug: "scania-cargo",
    name: "Scania cargo truck",
    category: "scania",
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
    slug: "ford-explorer",
    name: "Ford Explorer",
    category: "ford",
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
    slug: "ford-f-150",
    name: "Ford F-150",
    category: "ford",
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
    slug: "tata-light-truck",
    name: "TATA light truck",
    category: "tata",
    featured: false,
    summary:
      "A light commercial truck for businesses that need affordable payload for urban and regional routes.",
    intendedUse: "Wholesale delivery, market runs and light logistics.",
    image: "/images/tata.jpg",
    imageAlt: "TATA light commercial truck in navy and white livery",
    specs: [
      { label: "Class", value: "Light commercial" },
      { label: "Configuration", value: "Cargo / dropside, confirmed on the sourced unit" },
      { label: "Fuel", value: "Diesel" },
      { label: "Role", value: "Urban and regional delivery" },
      { label: "Note", value: representative },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getFeaturedCategories() {
  return categories.filter((category) => category.featured);
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
