export type CategorySlug =
  | "passenger-cars"
  | "suvs"
  | "pickups"
  | "trucks"
  | "buses"
  | "specialized";

export type Spec = {
  label: string;
  value: string;
};

export type Vehicle = {
  slug: string;
  name: string;
  category: CategorySlug;
  featured: boolean;
  summary: string;
  intendedUse: string;
  image: string;
  imageAlt: string;
  specs: Spec[];
};

export type Category = {
  slug: CategorySlug;
  name: string;
  index: string;
  summary: string;
  image: string;
  imageAlt: string;
};
