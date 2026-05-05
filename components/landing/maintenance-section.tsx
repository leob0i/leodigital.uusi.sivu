"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, RefreshCw, TrendingUp, Headphones, Globe, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Suunnittelu ja toteutus",
    description: "Suunnittelen sivuston alusta loppuun tyylisi mukaan. Pääset myös kehitysvaiheessa mukaan vaikuttamaan halutessa.",
  },
  {
    icon: RefreshCw,
    title: "Jatkuva Kehitys",
    description: "Sivustosi ei jää paikoilleen. Teen jatkuvaa kehitystä ja parannuksia pitääkseni sivut kilpailukykyisinä.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Tekoälyyn perustuva haku",
    description: "Hakukoneoptimointi myös tekoälyyn perustuvassa haussa. Näkyvyyden jatkuva kehittäminen. ",
  },
 {
    icon: Globe,
    title: "Kaikki samasta, ei säätöä",
    description: "Kaikki maksut samasta,\nDomain, hosting, SSL ja varmuuskopiot. Kaikki hoituu puolestasi kätevästi.",
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
      className="relative pt-24 lg:pt-32 pb-12 lg:pb-14 border-t border-[#2a2a2a] bg-[#0d0d0d]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight text-[#f0f0f0] mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Jätä digitaalinen huoli
            <br />
            <span className="font-black text-[#f0f0f0]">minulle</span>
          </h2>
          <p 
            className={`text-lg lg:text-xl text-[#a0a0a0] max-w-2xl leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Täysi ylläpitopalvelu tarkoittaa, että sinun ei tarvitse huolehtia mistään teknisestä. 
            Domain, hosting, tietoturva, päivitykset jne... Kaikki samasta helposti ja edullisesti!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 border border-[#2a2a2a] hover:border-[#404040] bg-[#1a1a1a] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#2a2a2a] text-[#f0f0f0] mb-6 group-hover:bg-[#f0f0f0] group-hover:text-[#0d0d0d] transition-colors duration-300">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display text-[#f0f0f0] mb-3">{service.title}</h3>
              <p className="text-[#a0a0a0] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`mt-12 flex justify-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a
            href="#paketit"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-full transition-colors group"
          >
            Hinnasto
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
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
              <p className="text-[#a0a0a0]">ALKU-paketti tarjoaa helpon ja kustannustehokkaan tavan päästä nettiin.</p>
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
