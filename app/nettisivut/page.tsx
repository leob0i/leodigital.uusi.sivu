import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { NettisivutContent } from "@/components/landing/nettisivut-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: 'Kotisivut Yritykselle | Leo Digital – Räätälöidyt Verkkosivut',
  description: 'Rakennamme yrityksellesi yksilölliset kotisivut alusta alkaen. Nopea, mobiiliystävällinen ja hakukoneoptimointiin valmis – ei teemoja, ei kompromisseja, juuri sinulle tehty.',
  keywords: [
    'kotisivut yritykselle',
    'nettisivut yritykselle',
    'verkkosivut yritykselle',
    'räätälöidyt kotisivut',
    'kotisivut alusta alkaen',
    'mobiiliystävälliset kotisivut',
    'nopeat verkkosivut',
    'kotisivut edullisesti',
    'kotisivut Suomi',
    'Leo Digital',
  ],
  openGraph: {
    title: 'Kotisivut Yritykselle | Leo Digital – Räätälöidyt Verkkosivut',
    description: 'Rakennamme yrityksellesi yksilölliset kotisivut alusta alkaen. Nopea, mobiiliystävällinen ja hakukoneoptimointiin valmis.',
    url: 'https://www.leodigital.fi/nettisivut',
    siteName: 'Leo Digital',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kotisivut Yritykselle | Leo Digital',
    description: 'Räätälöidyt kotisivut yrityksellesi alusta alkaen. Nopea, mobiiliystävällinen ja hakukoneystävällinen.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.leodigital.fi/nettisivut',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kotisivut yritykselle',
  description:
    'Räätälöidyt kotisivut yrityksellesi alusta alkaen. Nopea, mobiiliystävällinen ja hakukoneoptimointiin valmis – ei teemoja, ei kompromisseja.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.leodigital.fi/#business',
    name: 'Leo Digital',
  },
  url: 'https://www.leodigital.fi/nettisivut',
  areaServed: { '@type': 'Country', name: 'Finland' },
  serviceType: 'Verkkosivujen rakentaminen',
  offers: {
    '@type': 'Offer',
    name: 'Kotisivut – kertaostos',
    description:
      'Aloitushinta sisältää enintään 6 sivua sekä pakolliset tietosuoja- ja käyttöehtosivut. Maksu voidaan jakaa kahteen erään.',
    price: '499',
    priceCurrency: 'EUR',
    eligibleRegion: { '@type': 'Country', name: 'Finland' },
  },
}

export default function NettisivutPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <NettisivutContent />
      <FooterSection />
    </main>
  );
}
