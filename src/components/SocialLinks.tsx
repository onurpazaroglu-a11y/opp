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
    <div className="flex justify-center space-x-4 mt-8">
      {socialLinks.map((link) => (
        <Button key={link.label} variant="outline" size="icon" asChild>
          <Link href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
            <link.icon className="h-5 w-5" />
          </Link>
        </Button>
      ))}
    </div>
  );
}