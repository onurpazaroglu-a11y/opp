import { interiorItemsData } from "./interior-data";

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

export interface PartnerItem {
  name: string;
  href?: string; // Link artık isteğe bağlı
}

export const portfolioItems: PortfolioItem[] = [
  // Dış Mekan Öğeleri (Exterior) - 16 adet
  {
    id: 1,
    title: "Flo Rida / USA",
    category: "Exterior",
    imageUrl: `/exterior/exterior-1.jpg`,
    description: "Flo Rida Miami'de bir konut projesi.",
  },
  {
    id: 2,
    title: "Flo Rida / USA",
    category: "Exterior",
    imageUrl: `/exterior/exterior-2.jpg`,
    description: "Flo Rida Miami'de bir konut projesi.",
  },
  {
    id: 3,
    title: "Kentsel dönüşüm projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-3.jpg`,
    description: "Erenköy'de bir kentsel dönüşüm projesi.",
  },
  {
    id: 4,
    title: "Kentsel dönüşüm projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-4.jpg`,
    description: "Erenköy'de bir kentsel dönüşüm projesi.",
  },
  {
    id: 5,
    title: "Kuşadası Villa Projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-5.jpg`,
    description: "17 villadan oluşan Kuşadası projesi.",
  },
  {
    id: 24,
    title: "Kuşadası Villa Projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-6.jpg`,
    description: "17 villadan oluşan Kuşadası projesi.",
  },
  {
    id: 25,
    title: "Kuşadası Villa Projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-7.jpg`,
    description: "17 villadan oluşan Kuşadası projesi.",
  },
  {
    id: 26,
    title: "Çanakkale Sosyal Tesis Projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-8.jpg`,
    description: "Cafe, Restaurant, Çocuk Oyun Alanı ve Dükkanlar.",
  },
  {
    id: 27,
    title: "Kıbrıs Villa Projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-9.jpg`,
    description: "180m² taban alanı Kıbrıs / Girne .",
  },
  {
    id: 28,
    title: "Kıbrıs Villa Projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-10.jpg`,
    description: "180m² taban alanı Kıbrıs / Girne .",
  },
  {
    id: 29,
    title: "Ticari bina projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-11.jpg`,
    description: "İş Merkezi ve dükkanlardan oluşan Ticari bina projesi.",
  },
  {
    id: 30,
    title: "Villa projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-12.jpg`,
    description: "12 Villadan oluşan Villa projesinin örnek villası.",
  },
  {
    id: 31,
    title: "Villa projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-13.jpg`,
    description: "12 Villadan oluşan Villa projesinin örnek villası.",
  },
  {
    id: 32,
    title: "Konut / Site Projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-14.jpg`,
    description: "Konut ve site projesi.",
  },
  {
    id: 33,
    title: "Resmi Bina projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-15.jpg`,
    description: "Resmi bina projesi Rusya / St. Petersburg.",
  },
  {
    id: 34,
    title: "Kentsel Dönüşüm Projesi",
    category: "Exterior",
    imageUrl: `/exterior/exterior-16.jpg`,
    description: "Kentsel Dönüşüm Projesi Kadıköy / İstanbul.",
  },
  
  // İç Mekan Öğeleri (Interior) - Artık interior-data.ts'den geliyor
  ...interiorItemsData,

  // Animasyon Öğeleri
  {
    id: 70,
    title: "Konut Projesi - Miami",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/7/800/600`, 
    description: "Miami'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/qPgajiupIUc",
  },
  {
    id: 80,
    title: "Villa Projesi - Çeşme",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/8/800/600`,
    description: "Çeşme'de lüks bir villa projesinin animasyonu.",
    videoUrl: "https://youtu.be/RqqQMvNl0go",
  },
  {
    id: 90,
    title: "Konut Projesi - USA",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/9/800/600`,
    description: "ABD'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/MnxQr288Ir0",
  },
  {
    id: 100,
    title: "Konut Projesi - Kadıköy",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/10/800/600`,
    description: "Kadıköy'de bir konut projesinin animasyonu.",
    videoUrl: "https://youtu.be/Wl924dvRCzo",
  },
  {
    id: 110,
    title: "Kentsel Dönüşüm Projesi - Kadıköy",
    category: "Animation",
    imageUrl: `https://picsum.photos/seed/11/800/600`,
    description: "Kadıköy'de kentsel dönüşüm projesi animasyonu.",
    videoUrl: "https://youtu.be/VyLKl5ZVOSc",
  },
  {
    id: 120,
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

export const clientList: string[] = [
  "Trion Tanıtım",
  "Mekisan Asansör",
  "Tolan Mimarlık",
  "CSIN Studio",
  "NEF",
  "1217 Interiors",
  "TMD Architects",
  "AKKA group",
  "Seri Yapı İnşaat",
  "Ser Mefruşat",
  "SEM COLLECTIONS",
  "Ergonomi İnşaat",
  "İkiel Yapı Ürünleri",
  "Ermanlar Mimarlık",
  "Uzunal Vizyon",
  "Uzunal TAU",
  "SAY İnşaat",
  "BENS Yapı",
  "Karasu İnşaat",
  "Backtobasics İletişim",
  "Nebol Mimarlık",
  "Seda Davran Mimarlık",
  "Zeynep Helvacıoğlu İçmimarlık",
  "VOG Design",
  "YET Tasarım",
  "Profem Mimarlık", // Yeni eklenen müşteri
];

export const partnerList: PartnerItem[] = [
  { name: "become design", href: "https://www.become.design.com" },
  { name: "Backtobasics", href: "https://backtobasics.ist/" },
  { name: "BENS Yapı" }, // Link kaldırıldı
];