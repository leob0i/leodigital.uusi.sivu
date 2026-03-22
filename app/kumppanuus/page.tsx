import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PartnershipHero } from "@/components/landing/partnership-hero";
import { PartnershipDetails } from "@/components/landing/partnership-details";

export const metadata = {
  title: "Premium Kumppanuus - Leo Digital | Kirjanpito & Digitaalinen Näkyvyys",
  description: "Kaikki samasta paikasta. Premium-kumppanuus sisältää kirjanpidon Repolan kanssa, digitaalisen näkyvyyden, maksuominaisuudet ja kuukausiraportoinnin. 299€/kk.",
  keywords: "kumppanuus, kirjanpito, repola, digitaalinen näkyvyys, ylläpito, maksuominaisuudet, raportointi",
};

export default function KumppanuusPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navigation />
      <PartnershipHero />
      <PartnershipDetails />
      <FooterSection />
    </main>
  );
}
