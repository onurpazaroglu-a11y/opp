import { MadeWithDyad } from "@/components/made-with-dyad";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      
      <div className="mt-auto">
        <MadeWithDyad />
      </div>
    </div>
  );
}