"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const workSteps = [
  "Aluksi lyhyt keskustelu tavoitteista ja nykytilanteesta",
  "Ehdotan selkeän ratkaisun ja hinnan etukäteen",
  "Toteutan projektin vaiheittain ja pidän sinut ajan tasalla",
  "Lopuksi julkaisu, perusopastus ja mahdollisuus jatkokehitykseen",
];

const benefits = [
  "Jokainen ratkaisu on käytännönläheinen ja helppo ylläpitää",
  "Ei valmispohjia - kaikki koodataan yksilöllisesti",
  "Maksu 50% alussa ja 50% loput luovutuksen yhteydessä",
  "Suora kommunikaatio ilman välikäsiä",
];

export function AboutSection() {
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
      id="meista"
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - About Text */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Meistä
            </span>
            <h2
              className={`text-4xl lg:text-5xl font-display tracking-tight mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Hei, olen Leo Apell
            </h2>
            <p 
              className={`text-lg text-muted-foreground leading-relaxed mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Autan pieniä ja keskisuuria yrityksiä saamaan enemmän irti digitaalisista kanavista 
              - ilman turhaa monimutkaisuutta.
            </p>
            <p 
              className={`text-lg text-muted-foreground leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Suunnittelen ja toteutan verkkosivuja, asiakaspalvelubotteja ja muuta digitaalista 
              tekemistä alusta loppuun itse, jotta kommunikaatio pysyy suorana ja selkeänä.
            </p>

            <div 
              className={`space-y-3 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - How I Work */}
          <div>
            <h3 
              className={`text-2xl lg:text-3xl font-display mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Miten työskentelen
            </h3>
            <div className="space-y-6">
              {workSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex gap-6 p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-500 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-foreground/20 font-mono text-sm group-hover:bg-foreground group-hover:text-background transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#yhteystiedot"
              className={`inline-flex items-center gap-2 mt-8 text-foreground hover:opacity-70 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <span className="font-medium">Pyydä maksuton arvio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
