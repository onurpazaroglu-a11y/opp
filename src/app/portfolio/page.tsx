"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { useState, useCallback } from "react";
import { portfolioItems, PortfolioItem } from "@/data/portfolio";
import { Lightbox } from "@/components/Lightbox";

// Sadece görsel olan öğeleri filtrele (Video olmayanlar)
const imageItems: PortfolioItem[] = portfolioItems.filter(item => !item.videoUrl);

export default function PortfolioPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = useCallback((id: number) => {
    const index = imageItems.findIndex(item => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handleNavigate = useCallback((direction: "prev" | "next") => {
    if (lightboxIndex === null) return;

    if (direction === "prev") {
      setLightboxIndex(prev => (prev! > 0 ? prev! - 1 : imageItems.length - 1));
    } else {
      setLightboxIndex(prev => (prev! < imageItems.length - 1 ? prev! + 1 : 0));
    }
  }, [lightboxIndex]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-primary tracking-tight">
        Portföy Çalışmaları
      </h1>
      
      {/* PortfolioTabs'e onImageClick prop'unu geri gönderiyoruz */}
      <PortfolioTabs onImageClick={handleOpenLightbox} />
      
      <div className="mt-12">
        <MadeWithDyad />
      </div>

      {/* Lightbox Bileşeni geri eklendi */}
      <Lightbox
        items={imageItems}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigate}
      />
    </div>
  );
}