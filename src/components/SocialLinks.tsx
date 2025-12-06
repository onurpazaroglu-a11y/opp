import Link from "next/link";
import { Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:onur@example.com", label: "Email" }, // Placeholder email
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-10">
      {socialLinks.map((link) => (
        <Button 
          key={link.label} 
          variant="ghost" 
          // Boyutları yaklaşık 3 kat büyütüldü (h-12 w-12 -> h-36 w-36)
          className="h-36 w-36 text-foreground hover:text-primary transition-colors p-0" 
          asChild
        >
          <Link href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
            {/* İkon boyutları büyütüldü (h-8 w-8 -> h-24 w-24) */}
            <link.icon className="h-24 w-24" />
          </Link>
        </Button>
      ))}
    </div>
  );
}