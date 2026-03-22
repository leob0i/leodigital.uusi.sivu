import { Navigation } from "@/components/landing/navigation";
import { PricingSection } from "@/components/landing/pricing-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Paketit | Leo Digital - Ylläpitopaketit verkkosivuillesi",
  description: "Valitse yrityksellesi sopiva ylläpitopaketti. Domain, hosting, tietoturva, SEO ja jatkuva kehitys yhdessä paketissa alkaen 17€/kk.",
};

export default function StarterPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navigation />
      <div className="pt-24">
        <PricingSection />
      </div>
      <FooterSection />
    </main>
  );
}
