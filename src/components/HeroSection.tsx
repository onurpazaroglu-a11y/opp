"use client";

import { Button } from "@/components/ui/button";
import { SocialLinks } from "./SocialLinks";
import Link from "next/link";
import { useIsMounted } from "@/hooks/use-is-mounted";

export function HeroSection() {
  const isMounted = useIsMounted();

  // Helper component for video rendering
  const VideoBackground = ({ src, className }: { src: string, className: string }) => (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={className}
      src={src} 
    >
      Your browser does not support the video tag.
    </video>
  );

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-start overflow-hidden bg-background">
      {/* Background Video Container (Moved to the very back) */}
      <div className="absolute inset-0 z-0">
        {/* Render video only after mounting to avoid hydration issues related to autoPlay/browser environment */}
        {isMounted && (
          <VideoBackground
            src="/archviz-video.mp4"
            className="w-full h-full object-cover opacity-10 transition-opacity duration-500"
          />
        )}
        {/* Metin okunabilirliğini artırmak için hafif bir overlay */}
        <div className="absolute inset-0 bg-background/50 mix-blend-multiply"></div>
      </div>

      {/* Content Wrapper - Başlık ve Sosyal Bağlantılar için */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Title and Subtitle (Top) - En üste taşıdık */}
        <div className="text-center mb-16 pt-20"> {/* pt-20 SiteHeader'ın altından başlaması için */}
          <h1 className="text-6xl md:text-8xl font-extralight tracking-widest mb-4 text-foreground">
            Onur PAZAROĞLU
          </h1>
          <p className="text-xl md:text-2xl font-extralight text-muted-foreground max-w-4xl mx-auto mb-8">
            Proje sunumlarınız için en hızlı ve başarılı çözümler
          </p>

          {/* Yeni Butonlar */}
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/portfolio">Portföyü İncele</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/teklif-iste">
                Teklif İste
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* 2. Full-Width Video Band - Yüksekliği h-64'ten h-[400px]'e çıkarıldı */}
      <div className="w-full mb-16">
        <div className="w-full h-[400px] overflow-hidden shadow-2xl">
          {isMounted && (
            <VideoBackground
              src="/home_bg.mp4"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* 3. Social Links (Bottom) - Video bandının altına yerleştirildi */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="pt-12">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}