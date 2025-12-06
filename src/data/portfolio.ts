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
  // Mevcut Dış Mekan Öğeleri
  {
    id: 1,
    title: "Modern Villa Exterior",
    category: "Exterior",
    imageUrl: `/exterior/exterior-1.jpg`, // Varsayılan yerel yol
    description: "A sleek, minimalist villa design rendered under bright daylight.",
  },
  {
    id: 4,
    title: "Forest Cabin Render",
    category: "Exterior",
    imageUrl: `/exterior/exterior-2.jpg`, // Varsayılan yerel yol
    description: "A rustic cabin nestled in a dense forest environment.",
  },
  
  // Yeni İç Mekan Öğeleri (public/interior klasöründen varsayılan görseller)
  {
    id: 13,
    title: "Modern Mutfak Tasarımı",
    category: "Interior",
    imageUrl: `/interior/interior-1.jpg`,
    description: "Minimalist çizgilerle tasarlanmış, ferah ve modern mutfak renderı.",
  },
  {
    id: 14,
    title: "Lüks Oturma Odası",
    category: "Interior",
    imageUrl: `/interior/interior-2.jpg`,
    description: "Yüksek tavanlı, doğal ışık alan lüks oturma odası render çalışması.",
  },
  {
    id: 15,
    title: "Yatak Odası Konsepti",
    category: "Interior",
    imageUrl: `/interior/interior-3.jpg`,
    description: "Sakin renk paleti ve ahşap detaylarla tasarlanmış yatak odası.",
  },
  {
    id: 16,
    title: "Banyo Görselleştirme",
    category: "Interior",
    imageUrl: `/interior/interior-4.jpg`,
    description: "Mermer ve cam detayların hakim olduğu modern banyo tasarımı.",
  },

  // Müşteri Portföyü Öğeleri
  {
    id: 6,
    title: "Luxury Apartment Project",
    category: "Client Portfolio",
    imageUrl: `/client/client-1.jpg`, // Varsayılan yerel yol
    description: "A high-end residential project completed for a major developer.",
  },
  
  // Animasyon Öğeleri (YouTube küçük resimleri kullandığı için bu yollar değişmedi)
  {
    id: 7,
    title: "Konut Projesi - Miami",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/7/800/600`, // YouTube küçük resmi kullanılacak, bu alan sadece fallback
    description: "Miami'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/qPgajiupIUc",
  },
  {
    id: 8,
    title: "Villa Projesi - Çeşme",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/8/800/600`,
    description: "Çeşme'de lüks bir villa projesinin animasyonu.",
    videoUrl: "https://youtu.be/RqqQMvNl0go",
  },
  {
    id: 9,
    title: "Konut Projesi - USA",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/9/800/600`,
    description: "ABD'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/MnxQr288Ir0",
  },
  {
    id: 10,
    title: "Konut Projesi - Kadıköy",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/10/800/600`,
    description: "Kadıköy'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/Wl924dvRCzo",
  },
  {
    id: 11,
    title: "Kentsel Dönüşüm Projesi - Kadıköy",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/11/800/600`,
    description: "Kadıköy'de kentsel dönüşüm projesi animasyonu.",
    videoUrl: "https://youtu.be/VyLKl5ZVOSc",
  },
  {
    id: 12,
    title: "Konut projesi - KKTC",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/12/800/600`,
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