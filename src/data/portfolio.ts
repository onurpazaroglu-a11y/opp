export type PortfolioCategory = "Exterior" | "Interior" | "Animation" | "Client Portfolio";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  imageUrl: string; // Placeholder for image path
  description: string;
  videoUrl?: string; // Yeni alan
}

export interface CategoryItem {
  name: PortfolioCategory;
  href: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Mevcut Öğeler
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
  {
    id: 6,
    title: "Luxury Apartment Project",
    category: "Client Portfolio",
    imageUrl: "/placeholder-client-1.jpg",
    description: "A high-end residential project completed for a major developer.",
  },
  
  // Yeni Animasyon Öğeleri
  {
    id: 7,
    title: "Konut Projesi - Miami",
    category: "Animation",
    imageUrl: "/placeholder-animation-7.jpg", // Geçici yer tutucu
    description: "Miami'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/qPgajiupIUc",
  },
  {
    id: 8,
    title: "Villa Projesi - Çeşme",
    category: "Animation",
    imageUrl: "/placeholder-animation-8.jpg", // Geçici yer tutucu
    description: "Çeşme'de lüks bir villa projesinin animasyonu.",
    videoUrl: "https://youtu.be/RqqQMvNl0go",
  },
  {
    id: 9,
    title: "Konut Projesi - USA",
    category: "Animation",
    imageUrl: "/placeholder-animation-9.jpg", // Geçici yer tutucu
    description: "ABD'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/MnxQr288Ir0",
  },
  {
    id: 10,
    title: "Konut Projesi - Kadıköy",
    category: "Animation",
    imageUrl: "/placeholder-animation-10.jpg", // Geçici yer tutucu
    description: "Kadıköy'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/Wl924dvRCzo",
  },
  {
    id: 11,
    title: "Kentsel Dönüşüm Projesi - Kadıköy",
    category: "Animation",
    imageUrl: "/placeholder-animation-11.jpg", // Geçici yer tutucu
    description: "Kadıköy'de kentsel dönüşüm projesi animasyonu.",
    videoUrl: "https://youtu.be/VyLKl5ZVOSc",
  },
  {
    id: 12,
    title: "Konut projesi - KKTC",
    category: "Animation",
    imageUrl: "/placeholder-animation-12.jpg", // Geçici yer tutucu
    description: "KKTC'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/h9uo-GAceos",
  },
];

export const categories: CategoryItem[] = [
  { name: "Exterior", href: "#exterior" },
  { name: "Interior", href: "#interior" },
  { name: "Animation", href: "#animation" },
  { name: "Client Portfolio", href: "#client-portfolio" },
];