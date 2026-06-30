"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Shield, Headphones, Palette, RefreshCw } from "lucide-react";

const services = [
  {
    icon: RefreshCw,
    title: "Päivitykset ja uudet palvelut",
    description: "Pienet sisältöpäivitykset, kuvat tai palvelut WhatsApp:in kautta nopeasti.",
  },
  {
    icon: Palette,
    title: "Suunnittelu ja toteutus",
    description: "Suunnittelen sivuston alusta loppuun tyylisi mukaan. Pääset myös kehitysvaiheessa mukaan vaikuttamaan halutessa.",
  },
  {
    icon: Shield,
    title: "Tietoturva & Päivitykset",
    description: "Huolehdin sivujesi tietoturvasta ja pidän kaikki järjestelmät ajan tasalla. Ei huolta tietoturvapäivityksistä.",
  },
  {
    icon: Headphones,
    title: "Tuki & Asiakaspalvelu",
    description: "Olen aina tavoitettavissa. Nopea reagointi ongelmiin ja muutostoiveisiin WhatsAppin tai sähköpostin kautta.",
  },
 
];

export function MaintenanceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="yllapito"
      ref={sectionRef}
      className="relative pt-12 lg:pt-16 pb-12 lg:pb-14 border-t border-[#2a2a2a] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/punanen.tausta.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/80" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header + Cards side by side */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: heading + description */}
          <div>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight text-[#f0f0f0] mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Hoidan kaiken alusta loppuun ja jatkossakin
            </h2>
            <p
              className={`text-lg lg:text-xl text-[#f0f0f0] max-w-2xl leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Nettisivujen julkaisu on vasta alku. Yrityksen verkkosivu tarvitsee jatkuvaa ylläpitoa pysyäkseen nopeana, turvallisena ja ajan tasalla myös tulevaisuudessa.
            </p>
            <p
              className={`mt-4 text-lg lg:text-xl text-[#f0f0f0] max-w-2xl leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Suunnittelen sivuston, valitsen sopivan vapaana olevan domainin, huolehdin hostingista, tietoturvasta, varmuuskopioista ja monesta muustakin puolestasi! Tarkoitus on tehdä nettisivuista mahdollisimman helppo osa yritystoimintaasi.
            </p>
          </div>

          {/* Right: cards stacked */}
          <div className="flex flex-col gap-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex items-start gap-4 transition-all duration-500 ${index === 0 ? "relative -top-3" : ""} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <service.icon className={`${index === 0 ? "w-10 h-10" : "w-5 h-5"} text-blue-500 shrink-0 mt-1`} />
                <div>
                  <h3 className={`${index === 0 ? "text-3xl" : "text-lg"} font-display text-[#f0f0f0] mb-1`}>{service.title}</h3>
                  <p className={`text-[#a0a0a0] leading-relaxed ${index === 0 ? "text-lg" : "text-sm"}`}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div
          className={`mt-16 lg:mt-24 p-8 lg:p-12 bg-[#1a1a1a] border border-[#2a2a2a] transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-2">Etsitkö kevyempää ratkaisua?</h3>
              <p className="text-[#f0f0f0]">ALKU-paketti tarjoaa helpon ja kustannustehokkaan tavan päästä nettiin.</p>
            </div>
            <a
              href="/starter"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-full"
            >
              Katso paketit
              <span className="text-lg">→</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
