import { clientList } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {clientList.map((clientName, index) => (
        <Card 
          key={index} 
          className={cn(
            "flex items-center justify-center h-24 text-center transition-all duration-300",
            "bg-muted/50 hover:bg-muted border-border/50 hover:border-primary/50"
          )}
        >
          <CardContent className="p-4 flex items-center justify-center h-full">
            <p className="text-sm font-semibold text-foreground/80 leading-snug">
              {clientName}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}