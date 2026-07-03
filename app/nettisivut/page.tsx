import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";
import { NettisivutContent } from "@/components/landing/nettisivut-content";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Kotisivut Yritykselle | 99 € + 49 €/kk – Leo Digital Suomi",
  description:
    "Räätälöidyt kotisivut suomalaiselle yritykselle — ylläpito, domain, hosting ja SEO samassa paketissa. Aloitusmaksu 99 €, sen jälkeen 49 €/kk. Pyydä ilmainen tarjous.",
  keywords: [
    "kotisivut yritykselle",
    "nettisivut yritykselle hinta",
    "kotisivut hinta 2026",
    "verkkosivut ylläpito",
    "kotisivut 49 euroa kuukaudessa",
    "räätälöidyt kotisivut",
    "kotisivut SEO",
    "kotisivut suomalaiselle yritykselle",
    "nettisivut pk-yritys",
    "Leo Digital Suomi",
  ],
  alternates: { canonical: "https://www.leodigital.fi/nettisivut" },
  openGraph: {
    title: "Kotisivut Yritykselle | 99 € + 49 €/kk – Leo Digital Suomi",
    description:
      "Räätälöidyt kotisivut, ylläpito, domain ja hosting samassa paketissa. Aloitusmaksu 99 €, sen jälkeen 49 €/kk. Ei piilomaksuja.",
    url: "https://www.leodigital.fi/nettisivut",
    locale: "fi_FI",
    type: "website",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kotisivut yritykselle',
  provider: {
    '@type': 'Organization',
    name: 'Leo Digital Suomi',
    url: 'https://www.leodigital.fi',
  },
  description:
    'Räätälöidyt kotisivut suomalaiselle yritykselle — ylläpito, domain, hosting ja hakukoneoptimointi samassa paketissa.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '99',
    description: 'Aloitusmaksu 99 €, jonka jälkeen 49 €/kk ylläpito',
    url: 'https://www.leodigital.fi/nettisivut',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Finland',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Mitä kotisivut maksavat yritykselle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aloitusmaksu on 99 € ja sen jälkeen 49 €/kk. Hinta sisältää räätälöidyt sivut, ylläpidon, domainin, hostingin ja tietoturvan. Yrityssähköposti on +5 €/kk per postilaatikko.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onko sopimus määräaikainen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sopimus on 12kk määräaikainen, jonka jälkeen se muuttuu toistaiseksi voimassaolevaksi 1kk irtisanomisajalla.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kuinka nopeasti sivut valmistuvat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yksinkertaiset sivut valmistuvat tyypillisesti 1–2 viikossa alkukartoituksesta. Laajemmat projektit sovitaan erikseen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tarvitseeko minun osata mitään teknistä?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ei. Sinun tehtäväsi on kertoa mitä haluat ja hyväksyä lopputulos. Minä hoidan kaiken teknisen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voiko sivuja kehittää myöhemmin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kyllä. Ylläpitoon sisältyvät pienet päivitykset, ja isommat lisäykset kuten ajanvaraus tai chatbotti voidaan toteuttaa erikseen sovittavalla hinnalla.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mitä minun pitää tehdä?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se riittää että kerrot perustiedot yrityksestäsi ja palveluistasi. Hoidan suunnittelun, toteutuksen, domainit yms puolestasi. Tottakai pääset mukaan suunnittelemaan, mutta ideana on tehdä mahdollisimman helppo ja vaivaton kiireisille yrittäjille.',
      },
    },
  ],
}

export default function NettisivutPage() {
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
      <NettisivutContent />
      <FooterSection />
    </main>
  );
}
