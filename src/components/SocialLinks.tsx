import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SocialLink {
  src: string; // Logo dosya yolu
  href: string;
  label: string;
  name: string; // Görünen isim
}

const socialLinks: SocialLink[] = [
  { src: "/logo-instagram.svg", href: "https://www.instagram.com/onurpazarogludesign/", label: "Instagram Logo", name: "Instagram" },
  { src: "/logo-youtube.svg", href: "#", label: "YouTube Logo", name: "YouTube" },
  { src: "/logo-linkedin.svg", href: "https://www.linkedin.com/in/onurpazaroglu/", label: "LinkedIn Logo", name: "LinkedIn" },
  { src: "/logo-mail.svg", href: "mailto:onur@example.com", label: "Email Logo", name: "E-posta" },
];

export function SocialLinks() {
  return (
    // max-w-2xl ile genişliği sınırlandırıp, justify-between ile eşit dağıtıyoruz.
    <div className="flex justify-between max-w-2xl mx-auto">
      {socialLinks.map((link) => (
        <Button 
          key={link.label} 
          variant="ghost" 
          // Buton boyutu h-20 w-20 olarak ayarlandı (daha da küçültüldü)
          className="h-auto w-24 text-foreground hover:text-primary transition-colors p-2 flex flex-col items-center justify-center group" 
          asChild
        >
          <Link href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2">
            {/* next/image boyutu 64px olarak ayarlandı */}
            <Image
              src={link.src}
              alt={link.label}
              width={64} 
              height={64}
              className="transition-opacity duration-300 group-hover:opacity-80"
            />
            {/* Buton ismi eklendi */}
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
              {link.name}
            </span>
          </Link>
        </Button>
      ))}
    </div>
  );
}