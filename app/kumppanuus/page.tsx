import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PartnershipHero } from "@/components/landing/partnership-hero";
import { PartnershipDetails } from "@/components/landing/partnership-details";
import { PartnershipContact } from "@/components/landing/partnership-contact";

export const metadata = {
  title: "All in one Kumppanuus - Leo Digital | Kirjanpito & Digitaalinen Näkyvyys",
  description: "Kaikki samasta paikasta. All in one Kumppanuus sisältää kirjanpidon Repolan kanssa, digitaalisen näkyvyyden, jatkuvasti kehittyvät kotisivut ja kuukausiraportoinnin. 299€/kk.",
  keywords: "kumppanuus, kirjanpito, repola, digitaalinen näkyvyys, ylläpito, kotisivut, raportointi",
};

export default function KumppanuusPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navigation />
      <PartnershipHero />
      <PartnershipDetails />
      <PartnershipContact />
      <FooterSection />
    </main>
  );
}
