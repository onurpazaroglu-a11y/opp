"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { useState, useCallback } from "react";
import { portfolioItems } from "@/data/portfolio";

// Sadece görsel olan öğeleri filtreleyen kod kaldırıldı, artık Lightbox yok.

export default function PortfolioPage() {
  // Lightbox state'leri kaldırıldı
  // const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // const handleOpenLightbox = useCallback... kaldırıldı
  // const handleCloseLightbox = useCallback... kaldırıldı
  // const handleNavigate = useCallback... kaldırıldı

  // Lightbox artık kullanılmadığı için onImageClick fonksiyonu boş kalacak veya kaldırılacak.
  const handleImageClick = () => {};

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-primary tracking-tight">
        Portföy Çalışmaları
      </h1>
      
      {/* PortfolioTabs'e artık onImageClick prop'u göndermiyoruz */}
      <PortfolioTabs onImageClick={handleImageClick} />
      
      <div className="mt-12">
        <MadeWithDyad />
      </div>

      {/* Lightbox Bileşeni kaldırıldı */}
    </div>
  );
}