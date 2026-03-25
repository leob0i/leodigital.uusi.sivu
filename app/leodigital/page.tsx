import { Metadata } from "next";
import { LeoHero } from "@/components/landing/leo-hero";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Kuka on Leo? | Leo Digital",
  description: "Tutustu Leo Apelliin, Leo Digitalin perustajaan ja omistajaan. Lue lisää tarinastamme ja intohimostamme auttaa yrityksiä menestymään verkossa.",
};

export default function LeoDigitalPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <LeoHero />
      <FooterSection />
    </main>
  );
}
