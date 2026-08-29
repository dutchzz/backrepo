export type Product = {
  id: string;
  name: string;
  summary: string;
  priceUsd: number;
  fileCount: number;
  image?: string;
  images?: string[];
  fileUrl?: string;
  tagline?: string;
  details?: string;
  features?: string[];
  highlight?: boolean;
};

export function productGallery(p: Product): string[] {
  if (p.images && p.images.length) return p.images;
  if (p.image) return [p.image];
  return [];
}

export const PRODUCTS: Product[] = [
  {
    id: "lower-receiver-frame",
    name: "Lower Receiver Frame",
    summary: "Parametric frame geometry. STEP + STL. 1 file.",
    priceUsd: 12,
    fileCount: 1,
  },
  {
    id: "trigger-group",
    name: "Trigger Group",
    summary: "Component assembly design. 3 files.",
    priceUsd: 9,
    fileCount: 3,
  },
  {
    id: "magazine-body",
    name: "Magazine Body",
    summary: "Box magazine geometry. 2 files.",
    priceUsd: 8,
    fileCount: 2,
  },
  {
    id: "rail-adapter",
    name: "Rail Adapter",
    summary: "Mounting interface design. 1 file.",
    priceUsd: 6,
    fileCount: 1,
  },
  {
    id: "grip-module",
    name: "Grip Module",
    summary: "Ergonomic grip geometry. 2 files.",
    priceUsd: 7,
    fileCount: 2,
  },
  {
    id: "free-sample",
    name: "Free Sample Pack",
    summary: "Introductory STL to test fit and quality. 1 file.",
    priceUsd: 0,
    fileCount: 1,
    fileUrl: "https://files.backrepo.example/stl/free-sample.stl",
  },
  {
    id: "full-bundle",
    name: "Component Bundle",
    summary: "All designs in one pack. 9 files.",
    priceUsd: 39,
    fileCount: 9,
    tagline: "Everything in one drop",
    details:
      "The complete set of component designs in a single download. Best value for builders standardizing on the platform.",
    features: ["9 STL files", "STEP sources", "Priority updates"],
    highlight: true,
  },
];
