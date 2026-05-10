import { Navigation } from "@/components/landing/navigation";
import { YllapitoContent } from "@/components/landing/yllapito-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Ylläpito | Leo Digital – Täysi ylläpitopalvelu yrityksellesi",
  description:
    "Jätä digitaalinen huoli minulle. Täysi ylläpitopalvelu sisältää domain, hosting, tietoturva, päivitykset ja jatkuvan kehityksen. Kaikki samasta, helposti ja edullisesti.",
};

export default function YllapitoPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navigation />
      <YllapitoContent />
      <FooterSection />
    </main>
  );
}
