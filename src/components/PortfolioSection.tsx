import { PortfolioCategory, PortfolioItem, portfolioItems } from "@/data/portfolio";
import { PortfolioItemCard } from "./PortfolioItemCard";

interface PortfolioSectionProps {
  category: PortfolioCategory;
}

export function PortfolioSection({ category }: PortfolioSectionProps) {
  const filteredItems = portfolioItems.filter((item: PortfolioItem) => item.category === category);

  return (
    <section id={category.toLowerCase()} className="py-16">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-primary tracking-tight">
        {category}
      </h2>
      
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: PortfolioItem) => (
            <PortfolioItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          No {category} projects available yet.
        </p>
      )}
    </section>
  );
}