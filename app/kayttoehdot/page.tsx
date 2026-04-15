"use client";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowLeft, FileText, Clock, CreditCard, Shield, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Perus",
    price: "17€/kk",
    terms: [
      "Sopimus on voimassa toistaiseksi kuukausimaksulla.",
      "Irtisanomisaika on 30 päivää.",
      "Domain-nimi rekisteröidään asiakkaan nimiin ja siirtyy asiakkaalle sopimuksen päättyessä.",
      "Hosting sisältyy pakettiin sopimuksen voimassaoloajan.",
      "Pienet sisältöpäivitykset (tekstit, kuvat) sisältyvät pakettiin kohtuullisessa määrin.",
      "Tietoturvapäivitykset tehdään automaattisesti.",
      "Sähköpostituki arkisin klo 9-17.",
      "Varmuuskopiot säilytetään 14 päivää.",
    ],
  },
  {
    name: "Plus",
    price: "39€/kk",
    terms: [
      "Sopimus on voimassa toistaiseksi kuukausimaksulla.",
      "Irtisanomisaika on 30 päivää.",
      "Sisältää kaikki Perus-paketin ehdot.",
      "Sisältöpäivitys kerran kuussa halutessasi (max 1h työtä/kk).",
      "SEO-kehitys ja seuranta kuukausittain.",
      "Google Maps -optimointi ja arvostelut käyttöön.",
      "WhatsApp-tuki arkisin klo 9-17.",
      "Kuukausiraportti sivuston kävijöistä ja kehityksestä.",
      "Varmuuskopiot säilytetään 30 päivää.",
    ],
  },
  {
    name: "Premium + Kirjanpito",
    price: "149€/kk",
    highlight: true,
    terms: [
      "Sopimus on voimassa toistaiseksi kuukausimaksulla.",
      "Irtisanomisaika on 60 päivää.",
      "Sisältää kaikki Plus-paketin ehdot.",
      "Kirjanpitopalvelu toteutetaan yhteistyössä Repolan kanssa.",
      "Kirjanpidon ehdot määräytyvät Repolan sopimusehtojen mukaisesti.",
      "Kattava SEO-kehitys ja kilpailija-analyysi.",
      "Jatkuva kehitystyö sisältyy pakettiin (max 4h/kk).",
      "Sosiaalisen median hallinnan tuki.",
      "Henkilökohtainen yhteyshenkilö ja prioriteettituki.",
      "Strategiapalaverit kuukausittain.",
      "Räätälöidyt lisäominaisuudet sovitaan erikseen.",
    ],
  },
];

const generalTerms = [
  {
    icon: CreditCard,
    title: "Maksuehdot",
    content: "Laskutus tapahtuu kuukausittain etukäteen. Maksuaika on 14 päivää. Viivästyskorko on korkolain mukainen."
  },
  {
    icon: Clock,
    title: "Sopimuksen alkaminen",
    content: "Sopimus astuu voimaan, kun asiakas hyväksyy tarjouksen ja ensimmäinen maksu on suoritettu. Sivuston toteutus alkaa tarvittavien materiaalien toimittamisen jälkeen."
  },
  {
    icon: Shield,
    title: "Tietosuoja",
    content: "Käsittelemme asiakkaan tietoja GDPR:n mukaisesti. Emme luovuta tietoja kolmansille osapuolille ilman asiakkaan suostumusta."
  },
  {
    icon: AlertCircle,
    title: "Vastuunrajoitus",
    content: "Leo Digital ei vastaa välillisistä vahingoista. Korvausvastuu rajoittuu enintään asiakkaan maksamiin kuukausimaksuihin viimeisen 3 kuukauden ajalta."
  },
];

export default function KayttoehdotPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Link 
            href="/#paketit" 
            className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Takaisin paketteihin
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <FileText className="w-8 h-8 text-[#f0f0f0]" />
            </div>
            <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase">
              Sopimusehdot
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#f0f0f0] mb-6">
            Pakettien käyttö- ja
            <br />
            <span className="text-stroke">sopimusehdot</span>
          </h1>
          
          <p className="text-lg text-[#a0a0a0] max-w-2xl">
            Alla löydät Leo Digitalin ylläpitopakettien käyttö- ja sopimusehdot. 
            Lue ehdot huolellisesti ennen sopimuksen tekemistä.
          </p>
        </div>
      </section>

      {/* Package Terms */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[#f0f0f0] mb-12">
            Pakettikohtaiset ehdot
          </h2>
          
          <div className="space-y-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.name}
                className={`p-8 rounded-2xl border ${
                  pkg.highlight 
                    ? "border-[#d4af37]/50 bg-[#1a1a1a]/80" 
                    : "border-[#2a2a2a] bg-[#161616]/80"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-6 border-b border-[#2a2a2a]">
                  <div>
                    <h3 className="font-display text-2xl text-[#f0f0f0]">{pkg.name}</h3>
                    {pkg.highlight && (
                      <span className="text-sm text-[#d4af37] font-medium">All in one Kumppanuus</span>
                    )}
                  </div>
                  <span className="font-display text-2xl text-[#f0f0f0]">{pkg.price}</span>
                </div>
                
                <ul className="space-y-3">
                  {pkg.terms.map((term, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#a0a0a0] mt-0.5 shrink-0" />
                      <span className="text-[#a0a0a0] leading-relaxed">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Terms */}
      <section className="py-20 lg:py-28 border-t border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[#f0f0f0] mb-12">
            Yleiset sopimusehdot
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {generalTerms.map((term) => (
              <div 
                key={term.title}
                className="p-6 rounded-xl border border-[#2a2a2a] bg-[#161616]/60"
              >
                <div className="flex items-center gap-3 mb-4">
                  <term.icon className="w-5 h-5 text-[#f0f0f0]" />
                  <h3 className="font-display text-lg text-[#f0f0f0]">{term.title}</h3>
                </div>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{term.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Note */}
      <section className="py-16 border-t border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#a0a0a0] mb-6">
            Kysyttävää sopimusehdoista? Ota yhteyttä, niin vastaamme mielellämme.
          </p>
          <Link 
            href="/#yhteystiedot"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-full"
          >
            Ota yhteyttä
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
