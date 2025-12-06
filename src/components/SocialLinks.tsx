import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SocialLink {
  src: string; // Logo dosya yolu
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { src: "/logo-instagram.svg", href: "https://www.instagram.com/onurpazarogludesign/", label: "Instagram Logo" },
  { src: "/logo-youtube.svg", href: "#", label: "YouTube Logo" },
  { src: "/logo-mail.svg", href: "mailto:onur@example.com", label: "Email Logo" }, // Placeholder email
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-16">
      {socialLinks.map((link) => (
        <Button 
          key={link.label} 
          variant="ghost" 
          // Buton boyutu h-36 w-36 olarak ayarlandı
          className="h-36 w-36 text-foreground hover:text-primary transition-colors p-0 flex flex-col items-center justify-center group" 
          asChild
        >
          <Link href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            {/* next/image ile özel logo kullanımı */}
            <Image
              src={link.src}
              alt={link.label}
              width={128} // h-32 w-32 (128px) boyutuna karşılık gelir
              height={128}
              className="transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>
        </Button>
      ))}
    </div>
  );
}