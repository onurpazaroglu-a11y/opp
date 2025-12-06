import Link from "next/link";
import { Camera, Video, Send } from "lucide-react"; // İkonlar güncellendi
import { Button } from "@/components/ui/button";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Camera, href: "https://www.instagram.com/onurpazarogludesign/", label: "Instagram" },
  { icon: Video, href: "#", label: "YouTube" },
  { icon: Send, href: "mailto:onur@example.com", label: "Email" }, // Placeholder email
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-16">
      {socialLinks.map((link) => (
        <Button 
          key={link.label} 
          variant="ghost" 
          // Buton boyutu h-36 w-36 olarak büyütüldü
          className="h-36 w-36 text-foreground hover:text-primary transition-colors p-0 flex flex-col items-center justify-center group" 
          asChild
        >
          <Link href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            {/* İkon boyutları h-32 w-32 olarak büyütüldü */}
            <link.icon className="h-32 w-32 transition-colors group-hover:text-primary" />
            {/* İkonların altına etiket eklenmedi, sadece ikonlar kullanıldı. */}
          </Link>
        </Button>
      ))}
    </div>
  );
}