import { clientList } from "@/data/portfolio";

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
      {clientList.map((clientName, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center h-12 text-center"
        >
          <p className="text-lg font-medium text-foreground/90 leading-snug hover:text-primary transition-colors duration-200">
            {clientName}
          </p>
        </div>
      ))}
    </div>
  );
}