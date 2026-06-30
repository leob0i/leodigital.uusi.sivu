import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { YllapitoContent } from "@/components/landing/yllapito-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: 'Ylläpitopaketit | Leo Digital Suomi – Domain, Hosting & Jatkuva Kehitys',
  description: 'Täysi ylläpitopalvelu suomalaiselle yrityksellesi – domain, hosting, tietoturva, päivitykset ja jatkuva kehitys. Ei stressiä, kaikki hoituu puolestasi samasta paikasta.',
  keywords: [
    'verkkosivujen ylläpito',
    'kotisivujen ylläpito',
    'ylläpitopaketti',
    'hosting palvelu',
    'domain hallinta',
    'tietoturva päivitykset',
    'nettisivut ylläpito',
    'kotisivut ylläpito edullisesti',
    'jatkuva kehitys',
    'Leo Digital Suomi',
  ],
  openGraph: {
    title: 'Ylläpitopaketit | Leo Digital Suomi – Domain, Hosting & Jatkuva Kehitys',
    description: 'Täysi ylläpitopalvelu suomalaiselle yrityksellesi – domain, hosting, tietoturva, päivitykset ja jatkuva kehitys. Kaikki hoituu puolestasi.',
    url: 'https://www.leodigital.fi/yllapito',
    siteName: 'Leo Digital Suomi',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ylläpitopaketit | Leo Digital Suomi',
    description: 'Täysi ylläpitopalvelu suomalaiselle yrityksellesi – domain, hosting, tietoturva, päivitykset. Kaikki samasta paikasta.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.leodigital.fi/yllapito',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ylläpitopaketit',
  description:
    'Täysi ylläpitopalvelu yrityksellesi – domain, hosting, tietoturva, päivitykset ja jatkuva kehitys. Kaikki samasta paikasta.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.leodigital.fi/#business',
    name: 'Leo Digital Suomi',
    address: { '@type': 'PostalAddress', addressCountry: 'FI' },
  },
  url: 'https://www.leodigital.fi/yllapito',
  areaServed: { '@type': 'Country', name: 'Finland' },
  serviceType: 'Verkkosivujen ylläpito',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ylläpitopaketit',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Plus',
        description:
          'Sisältää domain, SSL-sertifikaatin, hostingin, varmuuskopiot, sisältöpäivityksen kerran kuussa, SEO kehitys ja seuranta, WhatsApp-tuki ja kuukausiraportti.',
        price: '49',
        priceCurrency: 'EUR',
        eligibleRegion: { '@type': 'Country', name: 'Finland' },
      },
    ],
  },
}

export default function YllapitoPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <YllapitoContent />
      <FooterSection />
    </main>
  );
}
