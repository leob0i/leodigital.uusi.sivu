"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import { NettisivutFeaturesSection } from "@/components/landing/nettisivut-features-section";
import { CtaSection } from "@/components/landing/cta-section";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}


export function NettisivutContent() {
  const [isVisible, setIsVisible] = useState(false);
  const uniqueInView = useInView(0.1);
  const pricingInView = useInView(0.1);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sininen.tausta.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d0d0d]/75" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-[1]">
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-[#f0f0f0]/10"
              style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-[#f0f0f0]/10"
              style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
          {/* Eyebrow */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0]">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
             Nettisivut yritykselle • Google & tekoälyhaut huomioiden
            </span>
          </div>

          {/* Headline */}
          <div className="mb-12">
            <div
              className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight text-[#f0f0f0] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Enemmän kuin</span>
              <span className="block relative">
                pelkkä nettisivu
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f0f0f0]/10" />
              </span>
            </div>
          </div>

          {/* Description + CTAs */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-8">
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl lg:text-2xl text-[#a0a0a0] leading-relaxed max-w-xl mb-6">
                Rakennamme sivuja, jotka on suunniteltu löytymään, vakuuttamaan ja muuttamaan kävijät asiakkaiksi.
Ei pelkkää designia, vaan toimiva asiakashankinnan työkalu.
              </p>
              <div className="inline-flex items-baseline gap-2">
                <span className="text-sm font-mono text-[#a0a0a0]">alkaen</span>
                <span className="text-4xl font-display text-[#f0f0f0] leading-none">499€</span>
              </div>
            </div>
            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#0d0d0d] px-8 h-14 text-base rounded-full group"
                asChild
              >
                <a href="/#yhteystiedot">
                  Pyydä tarjous
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
                asChild
              >
                <a href="#hinnoittelu">Hinnoittelu</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowDown className="w-5 h-5 text-[#a0a0a0] animate-bounce" />
        </div>
      </section>

      {/* ── Why ── */}
      <section className="relative py-12 lg:py-16 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Mitä nettisivut maksavat vuonna 2026?
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Itse tehtynä: muutamia kymppejä<br />
                Ammattilaisella: 500€ – 10.000€
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Internet on täynnä turhia nettisivuja
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Nykyään kuka tahansa voi tehdä hienot sivut, mutta ne ovat hitaita, näkymättömiä hakutuloksissa, ei myy eikä erotu joukosta.
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Me emme rakenna &ldquo;nettisivuja&rdquo;
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Meidän sivumme eivät ole vain näyttäviä, niiden tarkoitus on
                tuoda sinulle asiakkaita, helpottaa liiketoimintaasi ja kasvattaa mainetta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NettisivutFeaturesSection />

      {/* ── Unique Projects ── */}
      <section className="bg-[#111111] py-24 lg:py-32 border-y border-[#2a2a2a]">
        <div ref={uniqueInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div
              className={`transition-all duration-700 ${
                uniqueInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
                <span className="w-8 h-px bg-[#f0f0f0]/30" />
                Jokainen projekti on yksilöllinen
              </span>
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-8">
                Helpotusta yrityksesi arkeen
              </h2>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Meille tärkeintä ei ole tehdä vain hyvännäköisiä verkkosivuja, vaan rakentaa ratkaisu, joka tukee yrityksesi toimintaa myös käytännössä. Sivuston tarkoitus on auttaa liiketoimintaasi, oli tavoitteena sitten saada enemmän yhteydenottoja, helpottaa ajanvarausta tai vähentää manuaalista työtä.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-150 ${
                uniqueInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-8">
                Kaikkea ei tarvitse päättää heti
              </h2>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Verkkosivua voidaan kehittää myös julkaisun jälkeen yrityksesi tarpeiden mukaan. Ylläpitopakettien kautta sivustoon voidaan myöhemmin lisätä esimerkiksi ajanvarausjärjestelmä, asiakaspalvelubotti, uusia toimintoja tai muita integraatioita ilman että koko sivusto täytyy rakentaa uudelleen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="hinnoittelu" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img src="/images/herokuva.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/75" />
        </div>
        <div ref={pricingInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 transition-all duration-700 ${
              pricingInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
              Hinnoittelu
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-2xl">
              Selkeä ja läpinäkyvä hinnoittelu
            </h2>
          </div>

          <div
            className={`grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${
              pricingInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main pricing card */}
            <div className="lg:col-span-2 p-8 lg:p-12 border border-[#2a2a2a] rounded-2xl bg-[#111111]">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <h3 className="text-[#f0f0f0] text-2xl font-display">
                  Mitä aloitushinta sisältää?
                </h3>
                <div className="flex items-baseline gap-2 shrink-0">
                  <span className="font-mono text-sm text-[#a0a0a0]">alkaen</span>
                  <span className="font-display text-5xl text-[#f0f0f0] leading-none">499€</span>
                </div>
              </div>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                  </div>
                  <p className="text-[#a0a0a0] leading-relaxed">
                   Räätälöity Next.js + Tailwind kokonaisuus, ei wordpressiä tai muita valmispohjia. 
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                  </div>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    Hakukone ja tekoälyhaku huomioitu alusta alkaen
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                  </div>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    Aloitushinta sisältää enintään 6 sivua sekä pakolliset
                    tietosuoja- ja käyttöehtosivut.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                  </div>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    Laajemmat kokonaisuudet – kuten varausjärjestelmät,
                    maksutoiminnot, integraatiot ja muut räätälöidyt ratkaisut –
                    suunnitellaan ja hinnoitellaan aina erikseen projektin laajuuden
                    mukaan.
                  </p>
                </div>
              </div>
              <p className="text-base lg:text-lg font-display text-[#f0f0f0] leading-snug mb-6">
                Kaikki sivumme tarvitsevat ylläpitoa toimiakseen nopeina ja luotettavina. Siksi suosittelemme ylläpitoa jotta sivustosi pysyy nopeana ja laadukkaana päivästä toiseen.
              </p>
              <p className="text-sm text-[#a0a0a0] italic mb-6">
                Otan mielelläni vastaan isommatkin projektit –{" "}
                <a
                  href="/#yhteystiedot"
                  className="text-[#f0f0f0] underline underline-offset-2 hover:text-[#a0a0a0] transition-colors"
                >
                  kysy lisää!
                </a>
              </p>

            </div>

            {/* Discount card + CTA */}
            <div className="flex flex-col gap-4">
            <div className="relative p-8 border border-[#b8960c]/60 rounded-2xl bg-black/30 overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
              <div className="relative">
                <span className="font-mono text-xs tracking-widest text-[#d4a017] uppercase block mb-6">
                  Ylläpitopaketti
                </span>
                <div className="mb-6">
                  <span className="font-display text-7xl text-[#f0c040] leading-none">
                    −25%
                  </span>
                </div>
                <p className="text-[#d4a017]/80 text-sm leading-relaxed mb-8">
                  Huolenpito- tai ylläpitopaketin tilaajat saavat kotisivun
                  hinnasta 25 % alennuksen.
                </p>
                <div className="pt-6 border-t border-[#b8960c]/40">
                  <a
                    href="/#paketit"
                    className="inline-flex items-center gap-2 text-sm text-[#d4a017] hover:text-[#f0c040] transition-colors group"
                  >
                    Lue lisää ylläpitopaketeista
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/#yhteystiedot"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-full group"
            >
              Pyydä tarjous
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection backgroundImage="/images/tumma.tausta.webp" />
    </>
  );
}
