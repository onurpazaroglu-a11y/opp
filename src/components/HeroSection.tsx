"use client";

import { SocialLinks } from "./SocialLinks";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-start overflow-hidden bg-background">
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

      {/* 2. Full-Width Video Band - Tam genişlikte olması için ana container'ın dışına taşıyoruz */}
      {/* Video bandını, diğer içeriklerin akışını bozmayacak şekilde konumlandırıyoruz. */}
      <div className="w-full mb-16 mt-20"> {/* mt-20 SiteHeader'ın altından başlaması için */}
        <div className="w-full h-64 overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/home_bg.mp4" 
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Content Wrapper - Başlık ve Sosyal Bağlantılar için */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full container mx-auto px-4 sm:px-6 lg:px-8 -mt-80"> {/* Video bandının yüksekliğini telafi etmek için negatif margin kullanıyoruz */}
        
        {/* 1. Title and Subtitle (Top) */}
        <div className="text-center mb-16 pt-20"> {/* pt-20 SiteHeader'ın altından başlaması için */}
          <h1 className="text-6xl md:text-8xl font-extralight tracking-widest mb-4 text-foreground">
            Onur PAZAROĞLU
          </h1>
          <p className="text-xl md:text-2xl font-extralight text-muted-foreground max-w-4xl mx-auto">
            Proje ve sunumlarınız için en hızlı ve başarılı çözümler
          </p>
        </div>

        {/* 3. Social Links (Bottom) */}
        <div className="mt-auto pt-12">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}