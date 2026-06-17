import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { VeneilyalanContent } from "@/components/landing/veneilyalan-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: 'Veneilyalan Nettisivut | Leo Digital – Enemmän Asiakkaita',
  description: 'Nettisivut venehuollolle, venekaupalle ja kaikille veneilyalan yrityksille. Enemmän asiakkaita, vähemmän turhia puheluita. Pyydä ilmainen demo.',
  keywords: [
    'veneilyalan nettisivut',
    'venehuollon nettisivut',
    'venehuolto kotisivut',
    'venekaupan kotisivut',
    'venekauppa nettisivu',
    'veneilyalan verkkosivut',
    'venekorjaamo nettisivut',
    'venetarvikemyymälä kotisivu',
    'venevuokraamo nettisivut',
    'venetelakka verkkosivut',
    'veneen talvisäilytys nettisivut',
    'venekoulu kotisivu',
    'veneilyalan markkinointi',
    'venehuolto hakukoneoptimointi',
    'kotisivut veneilyyritykselle',
    'Leo Digital',
  ],
  authors: [{ name: 'Leo Apell' }],
  creator: 'Leo Digital',
  openGraph: {
    title: 'Veneilyalan Nettisivut | Leo Digital – Enemmän Asiakkaita',
    description: 'Nettisivut venehuollolle, venekaupalle ja kaikille veneilyalan yrityksille. Enemmän asiakkaita, vähemmän turhia puheluita.',
    url: 'https://www.leodigital.fi/veneilyalansivut',
    siteName: 'Leo Digital',
    locale: 'fi_FI',
    type: 'website',
    images: [
      {
        url: 'https://www.leodigital.fi/images/veneily.webp',
        width: 1200,
        height: 630,
        alt: 'Veneilyalan nettisivut – Leo Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veneilyalan Nettisivut | Leo Digital',
    description: 'Nettisivut venehuollolle, venekaupalle ja muille veneilyalan yrityksille – ratkaistaan oikea ongelma, ei vain näyttävä sivu.',
    images: ['https://www.leodigital.fi/images/veneily.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.leodigital.fi/veneilyalansivut',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Veneilyalan nettisivut',
  description:
    'Rakennamme veneilyalan yrityksille nettisivut, jotka ratkaisevat oikean ongelman – enemmän asiakkaita, vähemmän turhia puheluita.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.leodigital.fi/#business',
    name: 'Leo Digital',
    url: 'https://www.leodigital.fi',
    email: 'leo@leodigital.fi',
    telephone: '+358452031377',
    areaServed: { '@type': 'Country', name: 'Finland' },
  },
  url: 'https://www.leodigital.fi/veneilyalansivut',
  areaServed: { '@type': 'Country', name: 'Finland' },
  serviceType: 'Verkkosivujen rakentaminen',
  audience: {
    '@type': 'Audience',
    audienceType: 'Veneilyalan yritykset – venehuollot, venekaupat, venetarvikemyymälät, venetelakat, venevuokraamot',
  },
  serviceOutput: 'Ammattimainen verkkosivusto veneilyalan yritykselle hakukoneoptimoinnilla',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Veneilyalan nettisivupaketit',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter – Sivut + ylläpito',
        price: '99',
        priceCurrency: 'EUR',
        description: 'Sivun rakennushinta + 49 €/kk ylläpito sisältäen päivitykset, domainin, SSL:n ja hostingin.',
      },
    ],
  },
};

export default function VeneilyalansivutPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <VeneilyalanContent />
      <FooterSection />
    </main>
  );
}
