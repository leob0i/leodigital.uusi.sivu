"use client";

import { 
  FileText, 
  Globe, 
  CreditCard, 
  BarChart3, 
  Headphones, 
  Shield, 
  Zap, 
  Users,
  Check,
  ArrowRight,
  Building2
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Kirjanpito Repolan kanssa",
    description: "Ammattimainen kirjanpito ja taloushallinto yhteistyössä Repolan kanssa. Saat luotettavan kumppanin, joka hoitaa yrityksesi taloudelliset asiat. Kuukausittaiset raportit ja neuvonta sisältyvät palveluun.",
  },
  {
    icon: CreditCard,
    title: "Maksuominaisuudet sivulle",
    description: "Integroidut maksuominaisuudet suoraan verkkosivuillesi. Asiakkaasi voivat maksaa verkossa turvallisesti. Tuemme yleisimpiä maksutapoja kuten korttimaksut, verkkopankit ja mobiilimaksut.",
  },
  {
    icon: BarChart3,
    title: "Kuukausiraportointi",
    description: "Selkeä ja kattava kuukausiraportti, joka sisältää verkkosivujen analytiikan, markkinoinnin tulokset, talouden tilannekuvan ja kehitysehdotukset. Näet yhdellä silmäyksellä miten yrityksesi digitaalinen puoli toimii.",
  },
  {
    icon: Headphones,
    title: "Jatkuva tuki 24/7",
    description: "Henkilökohtainen yhteyshenkilö, joka tuntee yrityksesi. Saat apua digiasioissa ja kirjanpitoon liittyvissä kysymyksissä. Prioriteettituki tarkoittaa, että ongelmasi ratkaistaan ensimmäisenä.",
  },
  {
    icon: Globe,
    title: "Digitaalinen näkyvyys",
    description: "Kokonaisvaltainen digitaalisen näkyvyyden hallinta. SEO-optimointi, Google My Business, sosiaalisen median hallinta ja mainoskampanjat. Pidämme huolen, että yrityksesi löytyy verkosta.",
  },
  {
    icon: Shield,
    title: "Tietoturva & ylläpito",
    description: "Jatkuva sivuston ylläpito, tietoturvapäivitykset ja varmuuskopiot. Domain, SSL-sertifikaatti ja hosting sisältyvät. Sivustosi on aina turvallinen ja toimiva.",
  },
  {
    icon: Zap,
    title: "Tekoälybotit & automaatio",
    description: "Moderni asiakaspalvelubotti, joka vastaa asiakkaidesi kysymyksiin 24/7. Automaattiset prosessit säästävät aikaasi ja parantavat asiakaskokemusta.",
  },
  {
    icon: Users,
    title: "Strategiapalaverit",
    description: "Kuukausittaiset strategiapalaverit, joissa käymme läpi tulokset, suunnittelemme tulevaa ja varmistamme, että olemme oikealla tiellä tavoitteidesi saavuttamiseksi.",
  },
];

const allIncluded = [
  "Domain & SSL-sertifikaatti",
  "Hosting & varmuuskopiot",
  "Rajattomat sisältöpäivitykset",
  "Google Maps -optimointi",
  "Arvostelut & QR-koodi",
  "SEO-kehitys & seuranta",
  "Kilpailija-analyysi",
  "Tekoäly-asiakaspalvelubotti",
  "WhatsApp & puhelintuki",
  "Viikkoraportti & analytiikka",
  "Jatkuva kehitystyö",
  "Laaja markkinointituki",
  "Sosiaalisen median hallinta",
  "Henkilökohtainen yhteyshenkilö",
  "Strategiapalaverit kuukausittain",
  "Räätälöidyt lisäominaisuudet",
  "Kirjanpito Repolan kanssa",
  "Maksuominaisuudet sivulle",
  "Kuukausittainen talousraportti",
  "Kirjanpidon neuvonta",
];

export function PartnershipDetails() {
  return (
    <section className="py-24 lg:py-32 bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-6">
            Kaikki sisältyy
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#f0f0f0] mb-6">
            Yksi kumppani,
            <br />
            <span className="text-stroke">kaikki palvelut</span>
          </h2>
          <p className="text-lg text-[#a0a0a0] max-w-2xl">
            <span className="text-[#d4af37] font-medium">All in one Kumppanuus</span> yhdistää digitaalisen näkyvyyden, verkkosivujen ylläpidon ja kirjanpidon yhteen pakettiin. Sinun ei tarvitse huolehtia useista toimittajista tai erillisistä laskuista.
          </p>
        </div>

        {/* Repola Glass Card */}
        <div className="mb-20 relative">
          <div className="relative bg-[#0d0d0d]/80 backdrop-blur-xl border-2 border-[#1a1a1a] rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="w-20 h-20 flex items-center justify-center bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl shrink-0">
                <Building2 className="w-10 h-10 text-[#d4af37]" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-[#f0f0f0] mb-3">
                  Kirjanpito yhteistyössä <span className="text-[#d4af37]">Repolan</span> kanssa
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed max-w-3xl">
                  Repola on luotettava suomalainen kirjanpitotoimisto, joka hoitaa yrityksesi taloushallinnon ammattitaidolla. 
                  Yhdessä tarjoamme sinulle kokonaisvaltaisen ratkaisun, jossa sekä digitaalinen näkyvyys että kirjanpito 
                  kulkevat saumattomasti käsi kädessä. Yksi lasku, yksi kumppani, täysi mielenrauha.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-[#0d0d0d] border-2 border-[#1a1a1a] hover:border-[#2a2a2a] transition-colors rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#111111] border border-[#1a1a1a] rounded-lg mb-6">
                <feature.icon className="w-5 h-5 text-[#f0f0f0]" />
              </div>
              <h3 className="font-display text-xl text-[#f0f0f0] mb-3">{feature.title}</h3>
              <p className="text-sm text-[#a0a0a0] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* All Included Section */}
        <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a] rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl text-[#f0f0f0] mb-4">
              Kaikki tämä sisältyy hintaan
            </h3>
            <p className="text-[#a0a0a0] max-w-xl mx-auto">
              299€/kk + ALV sisältää kaiken mitä tarvitset yrityksesi digitaaliseen menestykseen ja taloushallintoon.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {allIncluded.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-sm text-[#a0a0a0]">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-[#1a1a1a]">
            <p className="text-[#a0a0a0] mb-6">
              Haluatko kuulla lisää <span className="text-[#d4af37] font-medium">All in one Kumppanuudesta</span>? Ota yhteyttä ja kerromme lisää.
            </p>
            <a
              href="#yhteystiedot"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-full group"
            >
              Ota yhteyttä
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Terms Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#a0a0a0]">
            Kaikki paketit sisältävät domain, SSL-sertifikaatin ja teknisen tuen.{" "}
            <a href="/kayttoehdot" className="text-[#f0f0f0] underline underline-offset-4 hover:no-underline transition-colors">
              Pakettien käyttö- ja sopimusehdot
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
