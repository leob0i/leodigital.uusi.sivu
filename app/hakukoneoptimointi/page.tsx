import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { HakukoneoptimointiContent } from "@/components/landing/hakukoneoptimointi-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Hakukoneoptimointi SEO + GEO | 499–599 €/kk – Leo Digital Suomi",
  description:
    "SEO + GEO -palvelu yhdistää hakukoneoptimoinnin ja tekoälyhakujen näkyvyyden kehittämisen. Jatkuva analysointi, priorisointi ja optimointi suoraan verkkosivustolle. Paketit 499 €/kk ja 599 €/kk.",
  keywords: [
    "hakukoneoptimointi",
    "SEO palvelu",
    "GEO optimointi",
    "generative engine optimization",
    "tekoälyhakuoptimointi",
    "AI SEO Suomi",
    "hakukonenäkyvyys",
    "SEO hinta",
    "ChatGPT näkyvyys yritykselle",
    "Leo Digital Suomi",
  ],
  alternates: { canonical: "https://www.leodigital.fi/hakukoneoptimointi" },
  openGraph: {
    title: "Hakukoneoptimointi SEO + GEO | Leo Digital Suomi",
    description:
      "Jatkuva SEO- ja GEO-optimointi: tekninen hakukoneoptimointi, sisältöjen kehittäminen ja tekoälyhakujen näkyvyyden mittaus samassa palvelussa.",
    url: "https://www.leodigital.fi/hakukoneoptimointi",
    locale: "fi_FI",
    type: "website",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO + GEO — Hakukone- ja tekoälyhaun optimointi',
  provider: {
    '@type': 'Organization',
    name: 'Leo Digital Suomi',
    url: 'https://www.leodigital.fi',
  },
  description:
    'Jatkuva hakukoneoptimointi (SEO) ja tekoälyhakujen näkyvyyden kehittäminen (GEO) — analysointi, priorisointi, optimointi ja kuukausittainen mittaus.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Aktiivinen SEO + GEO',
      priceCurrency: 'EUR',
      price: '599',
      description: '2 optimointikierrosta kuukaudessa, enintään 10 sivua, GEO-mittaus ja kuukausiraportointi.',
      url: 'https://www.leodigital.fi/hakukoneoptimointi',
    },
    {
      '@type': 'Offer',
      name: 'Kevyempi SEO + GEO',
      priceCurrency: 'EUR',
      price: '499',
      description: '1 optimointikierros kuukaudessa, enintään 5 sivua, GEO-mittaus ja kuukausiraportointi.',
      url: 'https://www.leodigital.fi/hakukoneoptimointi',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Finland',
  },
}

export default function HakukoneoptimointiPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <HakukoneoptimointiContent />
      <FooterSection />
    </main>
  );
}
