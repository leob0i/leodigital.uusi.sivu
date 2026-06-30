import type { Metadata } from 'next'
import { Navigation } from "@/components/landing/navigation";

export const metadata: Metadata = {
  title: 'Leo Digital Suomi | Kotisivut & Ylläpito Yrityksille – Kaikki Samasta',
  description: 'Räätälöidyt kotisivut suomalaisille yrityksille alusta alkaen. Verkkosivut, ylläpito, hakukoneoptimointi ja tekoälyhakuihin optimointi samasta paikasta. Sinä keskityt bisnekseen, minä hoidan digin.',
  keywords: [
    'kotisivut yritykselle',
    'nettisivut yritykselle',
    'kotisivut edullisesti',
    'verkkosivut ylläpito',
    'hakukoneoptimointi',
    'GEO optimointi',
    'generative engine optimization',
    'AI SEO',
    'kotisivut Suomi',
    'Leo Digital Suomi',
  ],
  openGraph: {
    title: 'Leo Digital Suomi | Kotisivut & Ylläpito – Kaikki Hoituu Puolestasi',
    description: 'Räätälöidyt kotisivut, ylläpito ja näkyvyys Googlessa sekä tekoälyhauissa suomalaisille yrityksille. Kaikki samasta paikasta helposti ja vaivattomasti.',
    url: 'https://www.leodigital.fi',
    siteName: 'Leo Digital Suomi',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leo Digital Suomi | Kotisivut & Ylläpito Yrityksille',
    description: 'Räätälöidyt kotisivut, ylläpito ja hakukoneoptimointi suomalaisille yrityksille. Kaikki hoituu sinulle – ei säätöä.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.leodigital.fi',
  },
}
import { HeroSection } from "@/components/landing/hero-section";
import { IntroSection } from "@/components/landing/intro-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { AboutSection } from "@/components/landing/about-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { LeoTeaserSection } from "@/components/landing/leo-teaser-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.leodigital.fi/#business',
      name: 'Leo Digital Suomi',
      url: 'https://www.leodigital.fi',
      description:
        'Räätälöidyt kotisivut suomalaisille yrityksille alusta alkaen. Verkkosivut, ylläpito, hakukoneoptimointi ja tekoälyhakuihin optimointi samasta paikasta.',
      founder: { '@type': 'Person', name: 'Leo Apell' },
      address: { '@type': 'PostalAddress', addressCountry: 'FI' },
      areaServed: { '@type': 'Country', name: 'Finland' },
      priceRange: '€€',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Palvelut',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Kotisivut yritykselle',
            description: 'Räätälöidyt kotisivut alkaen 99 €. Enintään 6 sivua, mobiiliystävällinen, SEO-optimoitu.',
            price: '99',
            priceCurrency: 'EUR',
            url: 'https://www.leodigital.fi/nettisivut',
          },
          {
            '@type': 'Offer',
            name: 'Ylläpitopaketti Plus',
            description: 'Domain, hosting, SSL-sertifikaatti, sisältöpäivitys, SEO kehitys ja seuranta, WhatsApp-tuki ja kuukausiraportti.',
            price: '49',
            priceCurrency: 'EUR',
            url: 'https://www.leodigital.fi/yllapito',
          },
        ],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'Finnish',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.leodigital.fi/#website',
      url: 'https://www.leodigital.fi',
      name: 'Leo Digital Suomi',
      inLanguage: 'fi',
      publisher: { '@id': 'https://www.leodigital.fi/#business' },
    },
  ],
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <HowItWorksSection />
      <LeoTeaserSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
