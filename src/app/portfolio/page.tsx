import { PortfolioSection } from "@/components/PortfolioSection";
import { categories } from "@/data/portfolio";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-primary tracking-tight">
        Portföy Çalışmaları
      </h1>
      
      {categories.map((category) => (
        <PortfolioSection key={category.name} category={category.name} />
      ))}
      
      <div className="mt-12">
        <MadeWithDyad />
      </div>
    </div>
  );
}