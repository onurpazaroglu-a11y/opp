"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, PortfolioCategory } from "@/data/portfolio";
import { PortfolioSection } from "./PortfolioSection";
import { cn } from "@/lib/utils";

interface PortfolioTabsProps {
  // onImageClick kaldırıldı
  onImageClick?: (id: number) => void; // Geçici olarak isteğe bağlı yapıldı
}

// Kategori isimlerini Türkçe'ye çeviren yardımcı fonksiyon
const getTurkishCategoryName = (category: PortfolioCategory): string => {
  switch (category) {
    case "Exterior":
      return "Dış Mekan";
    case "Interior":
      return "İç Mekan";
    case "Animation":
      return "Animasyon";
    case "Client Portfolio":
      return "Müşteri Portföyü";
    default:
      return category;
  }
};

export function PortfolioTabs({ onImageClick }: PortfolioTabsProps) {
  // İlk kategori varsayılan olarak seçili olacak
  const defaultCategory = categories[0]?.name || "Exterior";

  return (
    <Tabs defaultValue={defaultCategory} className="w-full">
      {/* Kategori Kartları Bandı */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 gap-2">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.name} 
              value={category.name}
              className={cn(
                "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                "text-sm font-semibold py-2 transition-colors duration-200"
              )}
            >
              {getTurkishCategoryName(category.name)}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* İçerik Bölümleri */}
      {categories.map((category) => (
        <TabsContent key={category.name} value={category.name} className="mt-8">
          {/* PortfolioSection'a onImageClick prop'u isteğe bağlı olarak gönderiliyor */}
          <PortfolioSection category={category.name} hideTitle={true} onImageClick={onImageClick} />
        </TabsContent>
      ))}
    </Tabs>
  );
}