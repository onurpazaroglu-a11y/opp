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
  { src: "/logo-linkedin.svg", href: "https://www.linkedin.com/in/onurpazaroglu/", label: "LinkedIn Logo" }, // Yeni LinkedIn bağlantısı
  { src: "/logo-mail.svg", href: "mailto:onur@example.com", label: "Email Logo" }, // Placeholder email
];

export function SocialLinks() {
  return (
    // max-w-2xl ile genişliği sınırlandırıp, justify-between ile eşit dağıtıyoruz.
    <div className="flex justify-between max-w-2xl mx-auto">
      {socialLinks.map((link) => (
        <Button 
          key={link.label} 
          variant="ghost" 
          // Buton boyutu h-24 w-24 olarak ayarlandı
          className="h-24 w-24 text-foreground hover:text-primary transition-colors p-0 flex flex-col items-center justify-center group" 
          asChild
        >
          <Link href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            {/* next/image boyutu 80px olarak ayarlandı */}
            <Image
              src={link.src}
              alt={link.label}
              width={80} 
              height={80}
              className="transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>
        </Button>
      ))}
    </div>
  );
}