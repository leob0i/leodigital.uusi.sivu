import { Navigation } from "@/components/landing/navigation";
import { NettisivutContent } from "@/components/landing/nettisivut-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Nettisivut | Leo Digital – Kotisivut yrityksellesi",
  description:
    "Rakennamme yrityksellesi yksilölliset kotisivut, jotka näyttävät hyvältä ja toimivat. Mobiiliystävällinen, nopea ja hakukoneystävällinen rakenne alusta alkaen.",
};

export default function NettisivutPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navigation />
      <NettisivutContent />
      <FooterSection />
    </main>
  );
}
