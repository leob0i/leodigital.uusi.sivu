"use client";

import { ArrowRight, Check, Star } from "lucide-react";

const plans = [
  {
    name: "Perus",
    description: "Pienyrityksille ja aloittaville yrityksille",
    price: 17,
    features: [
      "Domain & SSL-sertifikaatti",
      "Hosting & varmuuskopiot",
      "Pienet sisältöpäivitykset",
      "Sähköpostituki",
      "Tietoturvapäivitykset",
    ],
    cta: "Valitse Perus",
    popular: false,
  },
  {
    name: "Plus",
    description: "Kasvaville yrityksille",
    price: 29,
    features: [
      "Kaikki Perus-paketin ominaisuudet",
      "Rajattomat sisältöpäivitykset",
      "Google Maps -optimointi",
      "Arvostelut & QR-koodi",
      "WhatsApp-tuki",
      "Kuukausiraportti",
    ],
    cta: "Valitse Plus",
    popular: true,
  },
  {
    name: "Pro",
    description: "Aktiivisille yrityksille",
    price: 99,
    features: [
      "Kaikki Plus-paketin ominaisuudet",
      "SEO-kehitys & seuranta",
      "Kilpailija-analyysi",
      "Tekoäly-asiakaspalvelubotti",
      "Prioriteettituki",
      "Viikkoraportti & analytiikka",
      "Jatkuva kehitystyö",
    ],
    cta: "Valitse Pro",
    popular: false,
  },
  {
    name: "Premium",
    description: "Kokonaisvaltainen kumppanuus",
    price: 149,
    features: [
      "Kaikki Pro-paketin ominaisuudet",
      "Kirjanpito Repolan kanssa",
      "Laaja markkinointituki",
      "Sosiaalisen median hallinta",
      "Henkilökohtainen yhteyshenkilö",
      "Strategiapalaverit kuukausittain",
      "Räätälöidyt lisäominaisuudet",
      "Täysi digitaalinen kumppanuus",
    ],
    cta: "Valitse Premium",
    popular: false,
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section id="paketit" className="relative py-32 lg:py-40 border-t border-[#2a2a2a] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder background image - replace src with actual image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pricing-bg.jpg')",
          }}
        />
        {/* Dark overlay - 40% opacity */}
        <div className="absolute inset-0 bg-[#0d0d0d]/60" />
        {/* Fallback gradient if no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#111111] -z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-6">
            Paketit
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#f0f0f0] mb-6">
            Ylläpitopaketit
            <br />
            <span className="text-stroke">yrityksellesi</span>
          </h2>
          <p className="text-lg text-[#a0a0a0] max-w-xl">
            Valitse tarpeisiisi sopiva ylläpitopaketti. Kaikki paketit sisältävät domain, hostingin ja teknisen tuen.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-6 lg:p-8 backdrop-blur-sm ${
                plan.popular 
                  ? "border-2 border-[#f0f0f0] bg-[#1a1a1a]/90" 
                  : plan.highlight 
                    ? "border-2 border-[#f0f0f0]/50 bg-[#1a1a1a]/90" 
                    : "border border-[#2a2a2a] bg-[#161616]/90"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-[#f0f0f0] text-[#0d0d0d] text-xs font-mono uppercase tracking-widest">
                  Suosituin
                </span>
              )}
              
              {plan.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#a0a0a0] text-[#0d0d0d] text-xs font-mono uppercase tracking-widest flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Kokonaisuus
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <span className="font-mono text-xs text-[#a0a0a0]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-[#f0f0f0] mt-2">{plan.name}</h3>
                <p className="text-sm text-[#a0a0a0] mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl lg:text-5xl text-[#f0f0f0]">
                    {plan.price}€
                  </span>
                  <span className="text-[#a0a0a0] text-lg">/kk</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#f0f0f0] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#a0a0a0]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.highlight ? "/kumppanuus" : "#yhteystiedot"}
                className={`w-full py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular || plan.highlight
                    ? "bg-[#f0f0f0] text-[#0d0d0d] hover:bg-[#e0e0e0]"
                    : "border border-[#2a2a2a] text-[#f0f0f0] hover:border-[#f0f0f0] hover:bg-[#1a1a1a]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-[#a0a0a0]">
          Kaikki paketit sisältävät domain, SSL-sertifikaatin ja teknisen tuen.{" "}
          <a href="#yhteystiedot" className="underline underline-offset-4 hover:text-[#f0f0f0] transition-colors">
            Kysy lisää
          </a>
        </p>
      </div>
    </section>
  );
}
