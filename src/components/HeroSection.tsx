"use client";

import { SocialLinks } from "./SocialLinks";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Social Links (Top of Hero) */}
      <div className="relative z-10 pt-12">
        <SocialLinks />
      </div>

      {/* Video Placeholder Band */}
      <div className="relative z-10 my-12 w-full">
        <div className="bg-muted/50 border border-dashed border-muted-foreground/30 p-4 text-center text-sm text-muted-foreground mx-auto max-w-md rounded-lg">
          Video buraya gelecek
        </div>
      </div>

      {/* Content (Bottom of Hero) */}
      <div className="relative z-10 text-center p-4 pb-12">
        <h1 className="text-6xl md:text-8xl font-extralight tracking-widest mb-4 text-foreground">
          Onur PAZAROĞLU
        </h1>
        <p className="text-xl md:text-2xl font-extralight text-muted-foreground max-w-4xl mx-auto">
          Proje ve Sunumlarınız için hızlı ve başarılı çözümler
        </p>
      </div>

      {/* Background Video Container (Moved to the very back) */}
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
    </section>
  );
}