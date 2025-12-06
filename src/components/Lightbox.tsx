"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PortfolioItem } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect } from "react";

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

export function Lightbox({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = currentIndex !== null;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === "ArrowLeft") {
      onNavigate("prev");
    } else if (event.key === "ArrowRight") {
      onNavigate("next");
    } else if (event.key === "Escape") {
      onClose();
    }
  }, [isOpen, onNavigate, onClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!currentItem) return null;

  // Sadece görsel öğeleri için Lightbox'ı kullanıyoruz.
  if (currentItem.videoUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          "fixed inset-0 max-w-full max-h-full w-screen h-screen p-0 bg-black/90 border-none",
          "flex items-center justify-center z-[9999]" // Yüksek z-index
        )}
        // DialogContent'ın kapanma düğmesini gizle
        onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Kapatma Düğmesi */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigasyon Düğmeleri */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20 disabled:opacity-30"
          onClick={() => onNavigate("prev")}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20 disabled:opacity-30"
          onClick={() => onNavigate("next")}
          disabled={currentIndex === items.length - 1}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Görsel İçeriği */}
        <div className="relative w-full h-full flex items-center justify-center p-8 sm:p-12">
          <div className="relative max-w-full max-h-full w-auto h-auto">
            <Image
              src={currentItem.imageUrl}
              alt={currentItem.title}
              width={1600} // Maksimum genişlik
              height={900} // Maksimum yükseklik
              style={{ objectFit: 'contain', width: 'auto', height: 'auto', maxHeight: 'calc(100vh - 96px)', maxWidth: 'calc(100vw - 96px)' }}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        {/* Başlık ve Açıklama (Altta) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white text-center">
            <h3 className="text-lg font-semibold">{currentItem.title}</h3>
            <p className="text-sm text-gray-300">{currentItem.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}