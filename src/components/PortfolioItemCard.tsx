import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioItem } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface PortfolioItemCardProps {
  item: PortfolioItem;
}

// YouTube URL'sinden video ID'sini çıkaran yardımcı fonksiyon
const getYoutubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// YouTube video ID'sinden gömülü URL oluşturan yardımcı fonksiyon
const getYoutubeEmbedUrl = (videoId: string): string => {
  // autoplay=1 ekleyerek diyalog açıldığında otomatik başlamasını sağlıyoruz
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
  const isVideo = !!item.videoUrl;
  const videoId = isVideo ? getYoutubeVideoId(item.videoUrl!) : null;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : item.imageUrl;

  // Kartın görsel içeriği
  const CardContentElement = (
    <Card className={cn(
      "overflow-hidden transition-transform duration-300 shadow-lg",
      isVideo ? "hover:scale-[1.02] cursor-pointer" : ""
    )}>
      <div className="relative w-full h-60 bg-muted">
        {/* Görüntü/Küçük Resim */}
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <span className="text-sm">Image Placeholder: {item.category}</span>
          </div>
        )}

        {/* Video ise Oynat İkonu */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/50">
            <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="white" />
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{item.title}</CardTitle>
        <CardDescription className="text-sm text-primary">{item.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
      </CardContent>
    </Card>
  );

  if (isVideo && videoId) {
    const embedUrl = getYoutubeEmbedUrl(videoId);
    
    return (
      <Dialog>
        <DialogTrigger asChild>
          {/* DialogTrigger olarak CardContentElement'ı kullanıyoruz */}
          <div className="block">{CardContentElement}</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] p-0 border-none bg-transparent shadow-none">
          {/* Video oynatıcı için 16:9 oranında responsive container */}
          <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src={embedUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Video olmayan veya video ID'si alınamayan öğeler için
  // Bu öğeler tıklanabilir olmayacak (Link sarmalayıcısı kaldırıldı)
  return (
    <div className="block">
      {CardContentElement}
    </div>
  );
}