"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "./SocialLinks";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        {/* 
          Kullanıcının video dosyasını public/archviz-video.mp4 yoluna eklemesi gerekmektedir.
          Video, düşük opasite (opacity-10) ile şeffaf görünecek ve sürekli tekrarlayacaktır.
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10 transition-opacity duration-500"
          src="/archviz-video.mp4" 
        >
          Your browser does not support the video tag.
        </video>
        {/* Metin okunabilirliğini artırmak için hafif bir overlay */}
        <div className="absolute inset-0 bg-background/50 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-4">
        <h1 className="text-6xl md:text-8xl font-extralight tracking-widest mb-4 text-foreground">
          Onur PAZAROĞLU
        </h1>
        <p className="text-xl md:text-2xl font-extralight text-muted-foreground max-w-4xl mx-auto mb-8">
          Proje ve Sunumlarınız için hızlı ve başarılı çözümler
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Button size="lg" asChild>
            <Link href="#exterior">Portföyü keşfet</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="mailto:onur@example.com">Teklif iste</Link>
          </Button>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </section>
  );
}