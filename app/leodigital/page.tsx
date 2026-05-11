import { Metadata } from "next";
import { LeoHero } from "@/components/landing/leo-hero";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";

export const metadata: Metadata = {
  title: "Kuka on Leo? | Leo Digital – Leo Apell",
  description: "Tutustu Leo Apelliin, Leo Digitalin perustajaan ja omistajaan. Lue lisää tarinastamme ja intohimostamme auttaa yrityksiä menestymään verkossa.",
  keywords: [
    "Leo Apell",
    "Leo Digital",
    "Leo Digital perustaja",
    "kotisivut tekijä",
    "web developer Suomi",
    "freelance web developer",
  ],
  openGraph: {
    title: "Kuka on Leo? | Leo Digital",
    description: "Tutustu Leo Apelliin, Leo Digitalin perustajaan ja omistajaan.",
    url: "https://www.leodigital.fi/leodigital",
    siteName: "Leo Digital",
    locale: "fi_FI",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuka on Leo? | Leo Digital",
    description: "Tutustu Leo Apelliin, Leo Digitalin perustajaan ja omistajaan.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.leodigital.fi/leodigital",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Leo Apell",
    jobTitle: "Perustaja ja omistaja",
    worksFor: {
      "@type": "LocalBusiness",
      "@id": "https://www.leodigital.fi/#business",
      name: "Leo Digital",
    },
    url: "https://www.leodigital.fi/leodigital",
  },
};

export default function LeoDigitalPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <LeoHero />
      <FooterSection />
    </main>
  );
}
