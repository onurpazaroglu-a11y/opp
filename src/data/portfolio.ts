export type PortfolioCategory = "Exterior" | "Interior" | "Animation";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  imageUrl: string; // Placeholder for image path
  description: string;
}

export interface CategoryItem {
  name: PortfolioCategory;
  href: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Villa Exterior",
    category: "Exterior",
    imageUrl: "/placeholder-exterior-1.jpg",
    description: "A sleek, minimalist villa design rendered under bright daylight.",
  },
  {
    id: 2,
    title: "Cozy Living Room",
    category: "Interior",
    imageUrl: "/placeholder-interior-1.jpg",
    description: "Warm and inviting interior space focusing on natural light and textures.",
  },
  {
    id: 3,
    title: "Cityscape Flythrough",
    category: "Animation",
    imageUrl: "/placeholder-animation-1.jpg",
    description: "30-second animated flythrough showcasing a high-rise development.",
  },
  {
    id: 4,
    title: "Forest Cabin Render",
    category: "Exterior",
    imageUrl: "/placeholder-exterior-2.jpg",
    description: "A rustic cabin nestled in a dense forest environment.",
  },
  {
    id: 5,
    title: "Kitchen Design",
    category: "Interior",
    imageUrl: "/placeholder-interior-2.jpg",
    description: "Contemporary kitchen design with marble countertops and dark cabinetry.",
  },
];

export const categories: CategoryItem[] = [
  { name: "Exterior", href: "#exterior" },
  { name: "Interior", href: "#interior" },
  { name: "Animation", href: "#animation" },
];