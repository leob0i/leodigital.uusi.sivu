"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, RefreshCw, TrendingUp, Headphones, Globe, Star } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Tietoturva & Päivitykset",
    description: "Huolehdin sivujesi tietoturvasta ja pidän kaikki järjestelmät ajan tasalla. Ei huolta tietoturvapäivityksistä.",
  },
  {
    icon: RefreshCw,
    title: "Jatkuva Kehitys",
    description: "Sivustosi ei jää paikoilleen. Teen jatkuvaa kehitystä ja parannuksia pitääkseni sivut kilpailukykyisinä.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Näkyvyyden Kehitys",
    description: "Hakukoneoptimointi ja näkyvyyden jatkuva kehittäminen. Google Maps -profiili kuntoon ja arvostelut esille.",
  },
  {
    icon: Headphones,
    title: "Tuki & Asiakaspalvelu",
    description: "Olen aina tavoitettavissa. Nopea reagointi ongelmiin ja muutostoiveisiin WhatsAppin tai sähköpostin kautta.",
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    description: "Kaikki tekninen perusinfra sisältyy: domain, SSL-sertifikaatti, hosting ja varmuuskopiot.",
  },
  {
    icon: Star,
    title: "Google-arvostelut",
    description: "QR-koodi asiakaspalautteelle ja arvostelut näkyviin sivuille. Helppo tapa kerätä suosituksia.",
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
      className="relative py-24 lg:py-32 border-t border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Ylläpito & Tuki
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Jätä digitaalinen huoli
            <br />
            <span className="text-stroke">minulle</span>
          </h2>
          <p 
            className={`text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Täysi ylläpitopalvelu tarkoittaa, että sinun ei tarvitse huolehtia mistään teknisestä. 
            Domain, tietoturva, päivitykset, kehitys ja tuki - kaikki sisältyy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 lg:mt-24 p-8 lg:p-12 bg-foreground/5 border border-foreground/10 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display mb-2">Haluatko kuulla lisää?</h3>
              <p className="text-muted-foreground">Kysy lisätietoja ylläpitopalvelusta tai pyydä tarjous.</p>
            </div>
            <a 
              href="#paketit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors rounded-full"
            >
              Katso paketit
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
