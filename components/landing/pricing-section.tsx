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
    <section id="paketit" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Paketit
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Ylläpitopaketit
            <br />
            <span className="text-stroke">yrityksellesi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Valitse tarpeisiisi sopiva ylläpitopaketti. Kaikki paketit sisältävät domain, hostingin ja teknisen tuen.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-6 lg:p-8 bg-background ${
                plan.popular ? "border-2 border-foreground" : plan.highlight ? "border-2 border-foreground/50 bg-foreground/5" : "border border-foreground/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Suosituin
                </span>
              )}
              
              {plan.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-foreground/80 text-primary-foreground text-xs font-mono uppercase tracking-widest flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Kokonaisuus
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-foreground/10">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl lg:text-5xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg">/kk</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#yhteystiedot"
                className={`w-full py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular || plan.highlight
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Kaikki paketit sisältävät domain, SSL-sertifikaatin ja teknisen tuen.{" "}
          <a href="#yhteystiedot" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Kysy lisää
          </a>
        </p>
      </div>
    </section>
  );
}
