import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioItem } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItemCardProps {
  item: PortfolioItem;
}

// YouTube URL'sinden video ID'sini çıkaran yardımcı fonksiyon
const getYoutubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
  const isVideo = !!item.videoUrl;
  const videoId = isVideo ? getYoutubeVideoId(item.videoUrl!) : null;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : item.imageUrl;

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isVideo && item.videoUrl) {
      return (
        <Link href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
          {children}
        </Link>
      );
    }
    // Eğer video değilse veya link yoksa, sadece div olarak kalır
    return <div>{children}</div>;
  };

  return (
    <CardWrapper>
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
    </CardWrapper>
  );
}