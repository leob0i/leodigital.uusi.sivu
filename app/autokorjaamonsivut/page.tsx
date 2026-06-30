import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { AutokorjaamoContent } from "@/components/landing/autokorjaamo-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: 'Autokorjaamon Nettisivut | Leo Digital Suomi – Enemmän Ajanvarauksia',
  description: 'Rakennamme suomalaisille autokorjaamoille nettisivut, jotka ratkaisevat oikean ongelman. Enemmän ajanvarauksia, vähemmän turhia soittoja. Pyydä ilmainen demo tai suunnitelma.',
  keywords: [
    'autokorjaamon nettisivut',
    'autokorjaamo kotisivut',
    'korjaamon verkkosivut',
    'autokorjaamo nettisivu',
    'autokorjaamo ajanvaraus nettisivu',
    'autokorjaamo verkkosivut',
    'autokorjaamon kotisivu',
    'korjaamo kotisivut',
    'autohuolto nettisivut',
    'autokorjaamo markkinointi',
    'autokorjaamon hakukoneoptimointi',
    'auton huolto kotisivu',
    'Leo Digital Suomi',
  ],
  authors: [{ name: 'Leo Apell' }],
  creator: 'Leo Digital Suomi',
  openGraph: {
    title: 'Autokorjaamon Nettisivut | Leo Digital Suomi – Enemmän Ajanvarauksia',
    description: 'Rakennamme suomalaisille autokorjaamoille nettisivut, jotka ratkaisevat oikean ongelman. Enemmän ajanvarauksia, vähemmän turhia soittoja.',
    url: 'https://www.leodigital.fi/autokorjaamonsivut',
    siteName: 'Leo Digital Suomi',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autokorjaamon Nettisivut | Leo Digital Suomi',
    description: 'Nettisivut autokorjaamoille – ratkaistaan oikea ongelma, ei vain näyttävä sivu.',
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
    canonical: 'https://www.leodigital.fi/autokorjaamonsivut',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Autokorjaamon nettisivut',
  description:
    'Rakennamme autokorjaamoille nettisivut, jotka ratkaisevat oikean ongelman – enemmän ajanvarauksia, vähemmän turhia soittoja.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.leodigital.fi/#business',
    name: 'Leo Digital Suomi',
    url: 'https://www.leodigital.fi',
    email: 'leo@leodigital.fi',
    address: { '@type': 'PostalAddress', addressCountry: 'FI' },
  },
  url: 'https://www.leodigital.fi/autokorjaamonsivut',
  areaServed: { '@type': 'Country', name: 'Finland' },
  serviceType: 'Verkkosivujen rakentaminen',
  audience: {
    '@type': 'Audience',
    audienceType: 'Autokorjaamot ja autoalan yritykset',
  },
  serviceOutput: 'Ammattimainen verkkosivusto ajanvarauksineen autokorjaamolle',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Tarvitseeko autokorjaamo oikeasti nettisivut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yli 90 % suomalaisista etsii palveluja Googlesta ennen päätöstä. Jos korjaamo ei löydy netistä tai sivu näyttää vanhentuneelta, asiakas menee kilpailijalle. Niin yksinkertaista se on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mitä hyvä nettisivu tekee autokorjaamolle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se tuo ajanvarauksia myös öisin ja viikonloppuisin, vastaa yleisimpiin kysymyksiin automaattisesti, esittelee palvelut ja hinnaston selkeästi — ja vähentää turhia soittoja.',
      },
    },
    {
      '@type': 'Question',
      name: 'Eikö pelkkä sosiaalinen media riitä?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some tukee, mutta ei korvaa. Nettisivu on yrityksesi oma kanava jossa esitellään selkeästi palvelut, hinnat, ajanvaraus jne... Luotatko itse yritykseen joilla ei ole kotisivuja mistä löytää vaikka takuuehdot?',
      },
    },
  ],
};

export default function AutokorjaamonsivutPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <AutokorjaamoContent />
      <FooterSection />
    </main>
  );
}
