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
  href: string;
}

// Interior öğelerini dinamik olarak oluşturma (1'den 20'ye kadar)
const interiorItems: PortfolioItem[] = Array.from({ length: 20 }, (_, i) => ({
  id: 13 + i, // ID'ler çakışmayacak şekilde ayarlandı
  title: `İç Mekan Projesi ${i + 1}`,
  category: "Interior",
  imageUrl: `/interior/interior-${i + 1}.jpg`,
  description: `Eklenen iç mekan görseli ${i + 1}.`,
}));


export const portfolioItems: PortfolioItem[] = [
  // Dış Mekan Öğeleri (Exterior) - 16 adet
  {
    id: 1,
    title: "Modern Villa Exterior 1",
    category: "Exterior",
    imageUrl: `/exterior/exterior-1.jpg`,
    description: "A sleek, minimalist villa design rendered under bright daylight.",
  },
  {
    id: 2,
    title: "Forest Cabin Render 2",
    category: "Exterior",
    imageUrl: `/exterior/exterior-2.jpg`,
    description: "A rustic cabin nestled in a dense forest environment.",
  },
  {
    id: 3,
    title: "Cityscape Project 3",
    category: "Exterior",
    imageUrl: `/exterior/exterior-3.jpg`,
    description: "High-rise building visualization in an urban setting.",
  },
  {
    id: 4,
    title: "Residential Complex 4",
    category: "Exterior",
    imageUrl: `/exterior/exterior-4.jpg`,
    description: "Large scale residential complex visualization.",
  },
  {
    id: 5,
    title: "Commercial Building 5",
    category: "Exterior",
    imageUrl: `/exterior/exterior-5.jpg`,
    description: "Modern commercial office building exterior.",
  },
  {
    id: 24,
    title: "Exterior Project 6",
    category: "Exterior",
    imageUrl: `/exterior/exterior-6.jpg`,
    description: "Exterior visualization project 6.",
  },
  {
    id: 25,
    title: "Exterior Project 7",
    category: "Exterior",
    imageUrl: `/exterior/exterior-7.jpg`,
    description: "Exterior visualization project 7.",
  },
  {
    id: 26,
    title: "Exterior Project 8",
    category: "Exterior",
    imageUrl: `/exterior/exterior-8.jpg`,
    description: "Exterior visualization project 8.",
  },
  {
    id: 27,
    title: "Exterior Project 9",
    category: "Exterior",
    imageUrl: `/exterior/exterior-9.jpg`,
    description: "Exterior visualization project 9.",
  },
  {
    id: 28,
    title: "Exterior Project 10",
    category: "Exterior",
    imageUrl: `/exterior/exterior-10.jpg`,
    description: "Exterior visualization project 10.",
  },
  {
    id: 29,
    title: "Exterior Project 11",
    category: "Exterior",
    imageUrl: `/exterior/exterior-11.jpg`,
    description: "Exterior visualization project 11.",
  },
  {
    id: 30,
    title: "Exterior Project 12",
    category: "Exterior",
    imageUrl: `/exterior/exterior-12.jpg`,
    description: "Exterior visualization project 12.",
  },
  {
    id: 31,
    title: "Exterior Project 13",
    category: "Exterior",
    imageUrl: `/exterior/exterior-13.jpg`,
    description: "Exterior visualization project 13.",
  },
  {
    id: 32,
    title: "Exterior Project 14",
    category: "Exterior",
    imageUrl: `/exterior/exterior-14.jpg`,
    description: "Exterior visualization project 14.",
  },
  {
    id: 33,
    title: "Exterior Project 15",
    category: "Exterior",
    imageUrl: `/exterior/exterior-15.jpg`,
    description: "Exterior visualization project 15.",
  },
  {
    id: 34,
    title: "Exterior Project 16",
    category: "Exterior",
    imageUrl: `/exterior/exterior-16.jpg`,
    description: "Exterior visualization project 16.",
  },
  
  // İç Mekan Öğeleri (Interior) - 20 adet
  ...interiorItems,

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
];