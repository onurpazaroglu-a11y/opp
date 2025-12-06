import { RequestQuoteForm } from "@/components/RequestQuoteForm";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Toaster } from "@/components/ui/sonner";

export default function RequestQuotePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extralight tracking-tight text-center mb-4 text-primary">
          Teklif İsteği
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-10">
          Projenizle ilgili detayları doldurarak hızlıca teklif alabilirsiniz. Formu gönderdikten sonra e-posta programınız açılacaktır.
        </p>
        
        <RequestQuoteForm />
      </div>
      
      <div className="mt-12">
        <MadeWithDyad />
      </div>
      
      <Toaster />
    </div>
  );
}