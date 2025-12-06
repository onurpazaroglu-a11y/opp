import { MadeWithDyad } from "@/components/made-with-dyad";
import { PortfolioSection } from "@/components/PortfolioSection";
import { categories, CategoryItem } from "@/data/portfolio";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Portfolio Sections */}
        {categories.map((category: CategoryItem) => (
          <PortfolioSection key={category.name} category={category.name} />
        ))}
      </div>
      
      <div className="mt-auto">
        <MadeWithDyad />
      </div>
    </div>
  );
}