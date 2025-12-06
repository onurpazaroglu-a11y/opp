"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { Lightbox } from "@/components/Lightbox";
import { useState, useCallback } from "react";
import { portfolioItems } from "@/data/portfolio";

// Sadece görsel olan öğeleri filtreliyoruz
const imageItems = portfolioItems.filter(item => !item.videoUrl);

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

    let newIndex = lightboxIndex;
    if (direction === "next") {
      newIndex = (lightboxIndex + 1) % imageItems.length;
    } else if (direction === "prev") {
      newIndex = (lightboxIndex - 1 + imageItems.length) % imageItems.length;
    }
    setLightboxIndex(newIndex);
  }, [lightboxIndex]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-primary tracking-tight">
        Portföy Çalışmaları
      </h1>
      
      {/* PortfolioTabs'e Lightbox açma fonksiyonunu iletiyoruz */}
      <PortfolioTabs onImageClick={handleOpenLightbox} />
      
      <div className="mt-12">
        <MadeWithDyad />
      </div>

      {/* Lightbox Bileşeni */}
      <Lightbox
        items={imageItems}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigate}
      />
    </div>
  );
}