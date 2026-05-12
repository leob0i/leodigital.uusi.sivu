import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { AutokorjaamoContent } from "@/components/landing/autokorjaamo-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: 'Autokorjaamon Nettisivut | Leo Digital – Enemmän Ajanvarauksia',
  description: 'Rakennamme autokorjaamoille nettisivut, jotka ratkaisevat oikean ongelman. Enemmän ajanvarauksia, vähemmän turhia soittoja. Pyydä ilmainen demo tai suunnitelma.',
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
    'Leo Digital',
  ],
  authors: [{ name: 'Leo Apell' }],
  creator: 'Leo Digital',
  openGraph: {
    title: 'Autokorjaamon Nettisivut | Leo Digital – Enemmän Ajanvarauksia',
    description: 'Rakennamme autokorjaamoille nettisivut, jotka ratkaisevat oikean ongelman. Enemmän ajanvarauksia, vähemmän turhia soittoja.',
    url: 'https://www.leodigital.fi/autokorjaamonsivut',
    siteName: 'Leo Digital',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autokorjaamon Nettisivut | Leo Digital',
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
    name: 'Leo Digital',
    url: 'https://www.leodigital.fi',
    email: 'leo@leodigital.fi',
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

export default function AutokorjaamonsivutPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <AutokorjaamoContent />
      <FooterSection />
    </main>
  );
}
