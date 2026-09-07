import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { LeodigitalNettisivutContent } from "@/components/landing/leodigitalnettisivut-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: 'Kenelle Yrityksen Kotisivut Sopivat? | Leo Digital Suomi',
  description: 'Rehellinen puheenvuoro siitä, kenelle yrityksen kotisivut oikeasti sopivat – ja kenelle eivät. Autoala, veneala, remontti, kauneus, asiantuntijat ja paikalliset yritykset.',
  keywords: [
    'yrityksen kotisivut',
    'kenelle nettisivut sopivat',
    'kotisivut yritykselle',
    'nettisivut yrittäjälle',
    'Leo Digital Suomi',
    'nettisivujen tilaaminen',
    'maksuton demo nettisivuista',
  ],
  authors: [{ name: 'Leo Apell' }],
  creator: 'Leo Digital Suomi',
  openGraph: {
    title: 'Kenelle Yrityksen Kotisivut Sopivat? | Leo Digital Suomi',
    description: 'Rehellinen puheenvuoro siitä, kenelle yrityksen kotisivut oikeasti sopivat – ja kenelle eivät.',
    url: 'https://www.leodigital.fi/leodigitalnettisivut',
    siteName: 'Leo Digital Suomi',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenelle Yrityksen Kotisivut Sopivat? | Leo Digital Suomi',
    description: 'Rehellinen puheenvuoro siitä, kenelle yrityksen kotisivut oikeasti sopivat – ja kenelle eivät.',
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
    canonical: 'https://www.leodigital.fi/leodigitalnettisivut',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kenelle yrityksen kotisivut sopivat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yrityksen kotisivut sopivat erityisesti yrittäjälle, jolla ei ole aikaa tai halua tehdä sivuja itse. Ne sopivat autoalan, venealan, remontti- ja rakennusalan, kauneus- ja hyvinvointialan, asiantuntijayritysten sekä paikallisten palveluyritysten käyttöön.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kannattaako nettisivut tehdä itse vai ulkoistaa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jos sinulla on aikaa, kiinnostusta ja osaamista, itse tekeminen voi olla hyvä vaihtoehto. Jos taas haluat keskittyä omaan yritykseesi etkä halua käyttää kymmeniä tunteja sivujen rakentamiseen ja ylläpitoon, ulkoistaminen säästää aikaa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mitä Leo Digital tarjoaa nettisivujen lisäksi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leo Digital hoitaa räätälöidyn verkkosivuston lisäksi teknisen toteutuksen, domainin, hostingin, SSL:n, varmuuskopiot sekä hakukoneoptimoinnin perustan. Muutokset julkaisun jälkeen hoituvat WhatsAppin kautta.',
      },
    },
  ],
};

export default function LeodigitalNettisivutPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <LeodigitalNettisivutContent />
      <FooterSection />
    </main>
  );
}
