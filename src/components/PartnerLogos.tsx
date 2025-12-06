import { partnerList } from "@/data/portfolio";
import Link from "next/link";

export function PartnerLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
      {partnerList.map((partner, index) => (
        <Link 
          key={index} 
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 text-center group"
        >
          <p className="text-lg font-medium text-foreground/90 leading-snug transition-colors duration-200 group-hover:text-primary group-hover:underline">
            {partner.name}
          </p>
        </Link>
      ))}
    </div>
  );
}