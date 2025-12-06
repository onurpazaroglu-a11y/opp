import { RequestQuoteForm } from "@/components/RequestQuoteForm";
import { Toaster } from "@/components/ui/sonner";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function RequestQuotePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight mb-4 text-center text-primary tracking-tight">
          Teklif İsteği Oluştur
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-10">
          Projenizin detaylarını girerek hızlıca teklif talebinizi bize iletebilirsiniz.
        </p>
        
        <RequestQuoteForm />
      </div>
      
      <div className="mt-auto pt-12">
        <MadeWithDyad />
      </div>
      
      <Toaster />
    </div>
  );
}