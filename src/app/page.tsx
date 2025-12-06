import { MadeWithDyad } from "@/components/made-with-dyad";
import { PortfolioSection } from "@/components/PortfolioSection";
import { categories, CategoryItem } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-6xl font-extrabold tracking-tighter mb-4">
            Onur PAZAROĞLU
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Architectural Visualization Portfolio. Simple, elegant, and modern designs brought to life.
          </p>
        </section>

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