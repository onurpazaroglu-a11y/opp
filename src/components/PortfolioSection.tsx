import { PortfolioCategory, PortfolioItem, portfolioItems } from "@/data/portfolio";
import { PortfolioItemCard } from "./PortfolioItemCard";
import { ClientLogos } from "./ClientLogos";
import { PartnerLogos } from "./PartnerLogos"; // PartnerLogos import edildi
import { Separator } from "@/components/ui/separator"; // Separator import edildi

interface PortfolioSectionProps {
  category: PortfolioCategory;
  hideTitle?: boolean;
  onImageClick?: (id: number) => void; // İsteğe bağlı yapıldı
}

export function PortfolioSection({ category, hideTitle = false, onImageClick }: PortfolioSectionProps) {
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

  // Müşteri Portföyü için özel render
  if (category === "Client Portfolio") {
    return (
      <section id={category.toLowerCase().replace(/\s/g, '-')} className="py-8">
        {!hideTitle && (
          <h2 className="text-4xl font-extrabold mb-10 text-center text-primary tracking-tight">
            {getTurkishCategoryName(category)}
          </h2>
        )}
        
        {/* Müşteri Logoları */}
        <ClientLogos />

        {/* Çözüm Ortakları Bölümü */}
        <div className="mt-20 pt-10">
          <h2 className="text-4xl font-extralight mb-10 text-center text-primary tracking-tight">
            Çözüm Ortakları
          </h2>
          <PartnerLogos />
        </div>
      </section>
    );
  }

  // Diğer kategoriler için normal portföy kartları
  const filteredItems = portfolioItems.filter((item: PortfolioItem) => item.category === category);

  return (
    <section id={category.toLowerCase().replace(/\s/g, '-')} className="py-8">
      {!hideTitle && (
        <h2 className="text-4xl font-extrabold mb-10 text-center text-primary tracking-tight">
          {getTurkishCategoryName(category)}
        </h2>
      )}
      
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: PortfolioItem) => (
            <PortfolioItemCard key={item.id} item={item} onImageClick={onImageClick} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          Henüz {getTurkishCategoryName(category)} kategorisinde proje bulunmamaktadır.
        </p>
      )}
    </section>
  );
}