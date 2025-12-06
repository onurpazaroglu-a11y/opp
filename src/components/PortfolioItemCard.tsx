import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioItem } from "@/data/portfolio";
import Image from "next/image";

interface PortfolioItemCardProps {
  item: PortfolioItem;
}

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-lg">
      <div className="relative w-full h-60 bg-muted">
        {/* Görüntü yer tutucusu. Gerçek uygulamada Image bileşeni kullanılabilir. */}
        <div className="flex items-center justify-center h-full text-muted-foreground">
          <span className="text-sm">Image Placeholder: {item.category}</span>
        </div>
        {/* Eğer gerçek görseller mevcut olsaydı: 
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500"
        />
        */}
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
}