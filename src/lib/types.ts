export type CategorySlug =
  | "toyota"
  | "nissan"
  | "bmw"
  | "mercedes-benz"
  | "mazda"
  | "faw"
  | "howo"
  | "mitsubishi"
  | "hyundai"
  | "shacman"
  | "scania"
  | "ford"
  | "tata";

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
  /** Shown in the home “most sold brands” row when true. */
  featured?: boolean;
};
