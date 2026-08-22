"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Search,
  Sparkles,
  BarChart3,
  Layers,
} from "lucide-react";
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
      <span className="w-8 h-px bg-[#f0f0f0]/30" />
      {children}
    </span>
  );
}

function CheckList({ items, dense = false }: { items: string[]; dense?: boolean }) {
  return (
    <div className={dense ? "space-y-3" : "space-y-4"}>
      {items.map((text) => (
        <div key={text} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-[#f0f0f0]" />
          </div>
          <p className="text-[#a0a0a0] leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}

function SeoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="17" cy="17" r="11" stroke="currentColor" strokeWidth="2" />
      <line x1="25" y1="25" x2="34" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11.5 19l3-4.5 3 2 4-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GeoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 4L23 16.2L35 20L23 23.8L20 36L17 23.8L5 20L17 16.2Z"
        fill="currentColor"
      />
      <circle cx="32" cy="8" r="2.2" fill="currentColor" />
    </svg>
  );
}

function ChipGrid({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="px-4 py-2 text-sm text-[#d0d0d0] border border-[#2a2a2a] bg-[#141414] rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

const seoTyoValikoima = [
  "tekninen SEO ja indeksoitavuus",
  "hakusanatutkimus ja hakuintenttien analysointi",
  "sivurakenteen kehittäminen",
  "title- ja meta description -optimointi",
  "otsikkorakenteen kehittäminen",
  "olemassa olevien sisältöjen SEO-optimointi",
  "sisäinen linkitys",
  "kuvien optimointi",
  "rakenteinen data tarpeen mukaan",
  "paikallisen hakunäkyvyyden kehittäminen",
];

const geoTyoValikoima = [
  "tekoälyhakujen näkyvyyden kuukausittainen mittaus",
  "20 ostoaikeisen kysymyksen testijoukko",
  "yrityksen ja palveluiden mainintojen seuranta",
  "sisältöjen kehittäminen tekoälyhakua varten",
  "kysymys–vastausrakenteiden kehittäminen",
  "yritystietojen yhdenmukaisuuden tarkistaminen",
  "paikallisen näkyvyyden kehittäminen",
  "tärkeimpien asiantuntemus- ja palvelusignaalien vahvistaminen",
];

const seurantaKohteet = [
  "Google Search Consolen data",
  "orgaaninen liikenne",
  "hakukyselyt",
  "näyttökerrat ja CTR",
  "tärkeimpien hakusanojen sijoitukset",
  "tekniset SEO-ongelmat",
  "tekoälyhakujen näkyvyys",
];

const prosessi = [
  {
    number: "01",
    title: "Lähtötilanne",
    paragraphs: [
      "Aloitamme nykytilan analyysillä. Selvitämme, miten sivustosi näkyy tällä hetkellä Googlessa, millaista orgaanista liikennettä se saa ja missä suurimmat mahdollisuudet ovat.",
      "Samalla muodostamme ensimmäisen GEO-baselinen ja testaamme, miten yrityksesi näkyy relevanteissa tekoälyhauissa.",
    ],
  },
  {
    number: "02",
    title: "Auditointi ja priorisointi",
    paragraphs: [
      "Käymme läpi teknisen toteutuksen, sisältörakenteen, hakusanat, kilpailijat ja tärkeimmät laskeutumissivut.",
      "Kaikkea ei tarvitse korjata kerralla. Priorisoimme työt sen mukaan, millä muutoksilla on todennäköisesti suurin vaikutus näkyvyyteen ja liiketoimintaan.",
    ],
  },
  {
    number: "03",
    title: "Optimointi",
    paragraphs: [
      "Teemme sovitut muutokset suoraan verkkosivustolle. Kehitämme olemassa olevia sivuja, rakennetta, sisäistä linkitystä, metatietoja, sisältöjä ja teknisiä SEO-tekijöitä.",
      "GEO osalta kehitämme samalla sitä, miten yrityksen palvelut, osaaminen, sijainti ja muut tärkeät tiedot välittyvät tekoälyjärjestelmille.",
    ],
  },
  {
    number: "04",
    title: "Mittaus ja seuraava kierros",
    paragraphs: [
      "Seuraamme muutosten vaikutuksia ja vertaamme tuloksia aiempaan tilanteeseen. Jos jokin toimii, sitä voidaan vahvistaa. Jos jokin ei toimi, muutetaan lähestymistapaa.",
      "SEO ja GEO eivät ole kertaluonteinen temppu, vaan jatkuva optimointisykli.",
    ],
  },
];

const alustat = [
  "WordPress-sivustolle",
  "Webflow-sivustolle",
  "Shopify-kauppaan",
  "räätälöidylle verkkosivustolle",
  "muulle toimivalle verkkosivualustalle",
];

const paketit = [
  {
    price: "599 €",
    unit: "/ kk",
    title: "Aktiivinen SEO + GEO",
    tagline: "Suositeltu vaihtoehto yritykselle, joka haluaa kehittää hakukonenäkyvyyttään aktiivisesti.",
    featured: true,
    features: [
      "2 optimointikierrosta / kk",
      "enintään 10 optimoitavaa sivua / kk",
      "GEO-näkyvyyden kuukausittainen mittaus",
      "30 tärkeimmän hakusanan sijoitusseuranta",
      "teknisen SEO jatkuva seuranta",
      "kuukausittainen raportointi",
      "pieniä SEO yhteydessä tehtäviä sivustomuutoksia enintään noin 1 h / kk",
    ],
    footnote:
      "Tavoite: rakentaa orgaanista näkyvyyttä pitkäjänteisesti ja kasvattaa niiden hakujen määrää, joilla yrityksesi voi saada relevanttia liikennettä ja uusia asiakkaita.",
  },
  {
    price: "499 €",
    unit: "/ kk",
    title: "Kevyempi SEO + GEO",
    tagline: "Jatkuva optimointi pienemmällä kuukausittaisella työmäärällä.",
    featured: false,
    features: [
      "1 optimointikierros / kk",
      "enintään 5 optimoitavaa sivua / kk",
      "GEO-näkyvyyden kuukausittainen mittaus",
      "30 tärkeimmän hakusanan sijoitusseuranta",
      "teknisen SEO jatkuva seuranta",
      "kuukausittainen raportointi",
      "pieniä SEO yhteydessä tehtäviä sivustomuutoksia enintään noin 1 h / kk",
    ],
    footnote:
      "Sopii esimerkiksi yritykselle, jonka sivusto on jo hyvässä kunnossa, mutta näkyvyyttä halutaan kehittää tasaisesti kuukausi kuukaudelta.",
  },
];

const ensimmainenKuukausi = [
  "tekninen SEO-auditointi",
  "sisällöllinen SEO-analyysi",
  "nykyisen hakunäkyvyyden baseline",
  "orgaanisen liikenteen analyysi",
  "tärkeimpien hakusanojen määrittely",
  "kilpailija-analyysi",
  "ensimmäinen GEO-näkyvyyden mittaus",
  "tärkeimpien sivujen priorisointi",
  "kuuden kuukauden toimenpidesuunnitelma",
];

const teknisetOngelmat = [
  "indeksointiongelmia",
  "404-virheitä",
  "uudelleenohjauksia",
  "canonical-asetuksia",
  "sitemap-asioita",
  "robots.txt-tiedostoa",
  "mobiilikäytettävyyttä",
  "rakenteista dataa",
  "SEO kannalta olennaisia suorituskykyongelmia",
];

const raporttiSisalto = [
  "mitä tehtiin",
  "miten orgaaninen näkyvyys kehittyi",
  "miten liikenne kehittyi",
  "mitkä hakusanat muuttuivat",
  "miten GEO-näkyvyys kehittyi",
  "mitä seuraavaksi kannattaa tehdä",
];

const lisatyoEsimerkit = [
  "uusien sivujen rakentaminen",
  "pitkien uusien sisältöjen kirjoittaminen",
  "layout- ja rakennemuutokset",
  "uudet toiminnallisuudet",
  "integraatiot ja automaatiot",
  "laajemmat WordPress- tai teemakehitykset",
  "laajemmat suorituskykyoptimoinnit",
  "analytiikka- ja seurantajärjestelmien käyttöönotot tai korjaukset",
];

export function HakukoneoptimointiContent() {
  const [isVisible, setIsVisible] = useState(false);
  const defineInView = useInView(0.15);
  const whyInView = useInView(0.1);
  const approachInView = useInView(0.1);
  const includedInView = useInView(0.1);
  const monitorInView = useInView(0.1);
  const processInView = useInView(0.1);
  const combineInView = useInView(0.1);
  const pricingInView = useInView(0.05);
  const philosophyInView = useInView(0.1);
  const technicalInView = useInView(0.1);
  const reportInView = useInView(0.1);
  const extraInView = useInView(0.1);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/seo.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
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
              SEO + GEO — Hakukone- ja tekoälyhaun optimointi
            </span>
          </div>

          {/* Headline */}
          <div className="mb-12">
            <h1
              className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.95] tracking-tight text-[#f0f0f0] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Enemmän kuin</span>
              <span className="block relative text-[#f0c040]">
                parempia sijoituksia
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f0c040]/10" />
              </span>
            </h1>
          </div>

          {/* Description + CTAs */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-8">
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl lg:text-2xl text-[#a0a0a0] leading-relaxed max-w-xl mb-6">
                Hyvä hakukoneoptimointi ei tarkoita vain sitä, että verkkosivusi nousee Googlessa. Tavoite on löytää oikeat ihmiset oikealla hetkellä — ja saada heidät myös toimimaan.
              </p>
              <p className="text-lg text-[#a0a0a0]/90 leading-relaxed max-w-xl">
                Leo Digitalin SEO + GEO -palvelussa yhdistyvät tekninen hakukoneoptimointi, sisältöjen kehittäminen, jatkuva datan seuranta ja tekoälyhakujen näkyvyyden kehittäminen.
              </p>
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
                <a href="#yhteystiedot">
                  Aloitetaan nykytilanteesta
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
                asChild
              >
                <a href="#paketit">Katso paketit ja hinnat</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO / GEO määritelmät ── */}
      <section className="relative pt-10 lg:pt-14 pb-20 lg:pb-28 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div ref={defineInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-2 transition-all duration-700 ${
              defineInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="pb-10 lg:pb-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
              <SeoMark className="w-10 h-10 text-[#f0f0f0] mb-5" />
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-3">
                SEO <span className="text-base font-sans text-[#a0a0a0] font-normal">— Search Engine Optimization</span>
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed text-lg">
                SEO auttaa yritystäsi löytymään Googlesta ja muista hakukoneista silloin, kun potentiaalinen asiakas etsii tarjoamiasi tuotteita tai palveluita.
              </p>
            </div>
            <div className="pt-10 lg:pt-0 lg:pl-12">
              <GeoMark className="w-10 h-10 text-[#f0c040] mb-5" />
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-3">
                GEO <span className="text-base font-sans text-[#a0a0a0] font-normal">— Generative Engine Optimization</span>
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed text-lg">
                GEO auttaa tekemään yrityksestäsi ymmärrettävän ja löydettävän tekoälypohjaisissa hakukokemuksissa, kuten ChatGPTä ja muissa generatiivisissa hakupalveluissa.
              </p>
            </div>
          </div>

          <p
            className={`mt-14 text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug max-w-3xl transition-all duration-700 delay-150 ${
              defineInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Emme tee optimointia raporttia varten. Analysoimme datan, priorisoimme tärkeimmät kehityskohteet ja viemme sovitut muutokset suoraan verkkosivustolle.
          </p>
        </div>
      </section>

      {/* ── Miksi näkyvyys ei voi perustua vain Googleen ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/tumma.tausta.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0a]/92" />
        </div>
        <div ref={whyInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`max-w-3xl mb-16 transition-all duration-700 ${
              whyInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Eyebrow>Muuttuva hakukäyttäytyminen</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-6">
              Miksi yrityksen näkyvyys ei voi enää perustua vain Googleen?
            </h2>
            <p className="text-lg text-[#a0a0a0] leading-relaxed">
              Google on edelleen yksi tärkeimmistä paikoista, joissa asiakas etsii yritystä, palvelua tai ratkaisua. Hakukäyttäytyminen kuitenkin muuttuu nopeasti.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              whyInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm font-mono text-[#a0a0a0] uppercase tracking-widest mb-6">
              Asiakas voi nykyään kysyä esimerkiksi:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-8 border-l-2 border-[#f0c040] bg-[#111111]/60 backdrop-blur-sm">
                <p className="text-xl lg:text-2xl font-display italic text-[#f0f0f0] leading-snug">
                  &ldquo;Mikä on hyvä verkkosivutoimisto pienelle suomalaiselle yritykselle?&rdquo;
                </p>
              </div>
              <div className="p-8 border-l-2 border-[#f0c040] bg-[#111111]/60 backdrop-blur-sm">
                <p className="text-xl lg:text-2xl font-display italic text-[#f0f0f0] leading-snug">
                  &ldquo;Mistä löydän luotettavan autokorjaamon Mikkelissä?&rdquo;
                </p>
              </div>
            </div>

            <p className="text-lg text-[#a0a0a0] leading-relaxed max-w-3xl mb-10">
              Sen sijaan, että hän avaisi kymmenen hakutulosta, tekoäly voi muodostaa vastauksen useiden lähteiden perusteella ja suositella muutamaa vaihtoehtoa.
            </p>

            <div className="p-8 lg:p-10 border border-[#f0f0f0]/15 bg-[#0d0d0d]/70 mb-10">
              <p className="text-2xl lg:text-3xl font-display text-[#f0f0f0] leading-snug">
                Siksi yrityksen kannattaa olla näkyvissä kahdessa paikassa: <span className="text-[#f0c040]">hakutuloksissa</span> ja niiden taustalla olevassa <span className="text-[#f0c040]">tiedossa</span>.
              </p>
            </div>

            <p className="text-lg text-[#a0a0a0] leading-relaxed max-w-3xl">
              SEO kasvattaa orgaanista näkyvyyttä Googlessa. GEO auttaa rakentamaan verkkosivustosta ja yrityksestä kokonaisuuden, jonka sisältö, palvelut, sijainti, asiantuntemus ja muut olennaiset tiedot ovat mahdollisimman selkeästi ymmärrettävissä myös tekoälyjärjestelmille.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEO + GEO Leo Digitalin tavalla ── */}
      <section className="relative py-24 lg:py-32 bg-[#0d0d0d] border-t border-[#2a2a2a]">
        <div ref={approachInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-14 transition-all duration-700 ${
              approachInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Eyebrow>Työskentelytapa</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-3xl mb-6">
              SEO + GEO Leo Digitalin tavalla
            </h2>
            <p className="text-xl text-[#f0f0f0]/90 font-display max-w-3xl leading-snug">
              Emme optimoi verkkosivustoa vain hakukoneelle. Optimoimme sen hakijalle, hakukoneelle ja tekoälylle.
            </p>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 transition-all duration-700 delay-100 ${
              approachInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-[#a0a0a0] leading-relaxed mb-4">
                Työ alkaa datasta: mitä ihmiset hakevat, millä termeillä sivusto löytyy, missä kilpailijat ovat vahvempia ja millaiset sivut tuovat liiketoiminnalle arvoa.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed">
                Sen jälkeen muutokset tehdään käytäntöön.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Layers className="w-5 h-5 text-[#f0f0f0] shrink-0 mt-1" />
                <p className="text-[#a0a0a0] leading-relaxed">
                  <span className="text-[#f0f0f0]">SEO-työ</span> voi tarkoittaa esimerkiksi sivurakenteen, otsikoiden, sisältöjen, sisäisen linkityksen, metatietojen, teknisen toteutuksen tai rakenteisen datan kehittämistä.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="w-5 h-5 text-[#f0c040] shrink-0 mt-1" />
                <p className="text-[#a0a0a0] leading-relaxed">
                  <span className="text-[#f0f0f0]">GEO-työssä</span> tarkastelemme lisäksi sitä, miten yritys ja sen palvelut näyttäytyvät tekoälypohjaisissa hauissa. Testaamme palveluihin ja ostoaikeeseen liittyviä kysymyksiä ja kehitämme sisältöä sekä yritystietoja havaintojen perusteella.
                </p>
              </div>
            </div>
          </div>

          {/* Ei pelkkää raportointia */}
          <div
            className={`p-8 lg:p-12 border border-[#2a2a2a] bg-[#111111] transition-all duration-700 delay-150 ${
              approachInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-5">Ei pelkkää raportointia</h3>
            <p className="text-[#a0a0a0] leading-relaxed mb-2">
              Moni SEO-palvelu päättyy auditointiin, avainsanalistaan ja kuukausiraporttiin.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              Meillä raportti kertoo, mitä tapahtui — mutta työ ei lopu siihen.
            </p>
            <div className="flex flex-wrap items-center gap-2 lg:gap-3">
              {["Analysoimme", "Priorisoimme", "Optimoimme", "Mittaamme", "Kehitämme"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2 lg:gap-3">
                  <span className="px-4 py-2 lg:px-5 lg:py-3 text-sm lg:text-base font-mono text-[#f0f0f0] border border-[#3a3a3a] rounded-full">
                    {step}
                  </span>
                  {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#606060] shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mitä palveluun kuuluu ── */}
      <section className="bg-[#111111] py-24 lg:py-32 border-y border-[#2a2a2a]">
        <div ref={includedInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`max-w-3xl mb-16 transition-all duration-700 ${
              includedInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Eyebrow>Palvelun sisältö</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-6">
              Mitä SEO + GEO -palveluun kuuluu?
            </h2>
            <p className="text-lg text-[#a0a0a0] leading-relaxed">
              Palvelu rakennetaan yrityksesi tilanteen mukaan. Tyypillisesti kokonaisuus sisältää:
            </p>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-700 delay-100 ${
              includedInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-8 lg:p-10 border border-[#2a2a2a] bg-[#0d0d0d]">
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-5 h-5 text-[#f0f0f0]" />
                <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0]">Hakukoneoptimointi</h3>
              </div>
              <CheckList items={seoTyoValikoima} />
            </div>
            <div className="p-8 lg:p-10 border border-[#f0c040]/25 bg-[#0d0d0d]">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-[#f0c040]" />
                <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0]">GEO — näkyvyys tekoälyhauissa</h3>
              </div>
              <CheckList items={geoTyoValikoima} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Jatkuva seuranta ── */}
      <section className="relative py-24 lg:py-32 bg-[#0d0d0d]">
        <div ref={monitorInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 transition-all duration-700 ${
              monitorInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-2xl">
              <Eyebrow>Datalähtöinen työ</Eyebrow>
              <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-4">
                Jatkuva seuranta
              </h2>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">Seuraamme esimerkiksi:</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <BarChart3 className="w-9 h-9 text-[#f0f0f0]/60" />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-100 mb-10 ${
              monitorInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ChipGrid items={seurantaKohteet} />
          </div>

          <p
            className={`text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug max-w-3xl transition-all duration-700 delay-150 ${
              monitorInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Dataa ei kerätä vain raporttiin. Sen perusteella päätämme, mitä seuraavaksi kannattaa tehdä.
          </p>
        </div>
      </section>

      {/* ── Prosessi ── */}
      <section className="relative py-20 lg:py-28 bg-[#0a0a0a] border-t border-[#2a2a2a]">
        <div ref={processInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-12 transition-all duration-700 ${
              processInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Eyebrow>Vaihe vaiheelta</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#f0f0f0]">
              SEO- ja GEO-työn prosessi
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {prosessi.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-8 py-10 border-b border-[#2a2a2a] transition-all duration-700 ${
                  processInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="text-4xl lg:text-5xl font-display font-bold text-blue-500 shrink-0 leading-none mt-1">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-3">{step.title}</h3>
                  {step.paragraphs.map((p) => (
                    <p key={p} className="text-lg text-[#a0a0a0] leading-relaxed max-w-3xl mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Yhdistäminen verkkosivuprojektiin ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/taustakuva.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0a]/90" />
        </div>
        <div ref={combineInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-3 gap-12 transition-all duration-700 ${
              combineInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="lg:col-span-2">
              <Eyebrow>Yhdistettävissä verkkosivuprojektiin</Eyebrow>
              <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-6">
                SEO + GEO voidaan yhdistää myös verkkosivuprojektiin
              </h2>
              <p className="text-lg text-[#a0a0a0] leading-relaxed mb-4">
                SEO ja GEO ei tarvitse alkaa vasta uuden verkkosivuston valmistuttua. Voit hankkia SEO + GEO -palvelun uuden Leo Digital -verkkosivuston yhteydessä tai jo olemassa olevalle verkkosivustolle.
              </p>
              <p className="text-lg text-[#a0a0a0] leading-relaxed mb-6">
                Palvelu voidaan toteuttaa esimerkiksi:
              </p>
              <div className="mb-8">
                <ChipGrid items={alustat} />
              </div>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Näin verkkosivuston tekninen toteutus, sisältö ja hakunäkyvyys voidaan suunnitella alusta asti samaan kokonaisuuteen.
              </p>
            </div>

            <div className="relative p-8 border border-[#b8960c]/60 rounded-2xl bg-black/30 backdrop-blur-sm h-fit self-center">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
              <div className="relative">
                <span className="font-mono text-xs tracking-widest text-[#d4a017] uppercase block mb-4">
                  Nykyisille ja tuleville asiakkaille
                </span>
                <div className="mb-4">
                  <span className="font-display text-5xl text-[#f0c040] leading-none">-20%</span>
                </div>
                <p className="text-[#d4a017]/85 text-sm leading-relaxed">
                  Jos olet jo Leo Digitalin asiakas tai tilaat verkkosivuston meiltä, saat SEO + GEO -paketeista -20 % alennuksen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Paketit ── */}
      <section id="paketit" className="bg-[#0d0d0d] py-24 lg:py-32 border-t border-[#2a2a2a]">
        <div ref={pricingInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`max-w-2xl mb-16 transition-all duration-700 ${
              pricingInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Eyebrow>Hinnoittelu</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-[#f0f0f0]">
              SEO + GEO -paketit
            </h2>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-6 mb-10 transition-all duration-700 delay-100 ${
              pricingInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {paketit.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col p-8 lg:p-10 rounded-2xl border ${
                  pkg.featured ? "border-[#f0c040]/50 bg-[#141210]" : "border-[#2a2a2a] bg-[#111111]"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-8 px-3 py-1 text-xs font-mono uppercase tracking-widest bg-[#f0c040] text-[#0d0d0d] rounded-full">
                    Suositeltu
                  </span>
                )}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`font-display text-4xl lg:text-5xl leading-none ${pkg.featured ? "text-[#f0c040]" : "text-[#f0f0f0]"}`}>
                      {pkg.price}
                    </span>
                    <span className="text-lg text-[#a0a0a0]">{pkg.unit}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-2">{pkg.title}</h3>
                  <p className="text-sm text-[#a0a0a0] leading-relaxed">{pkg.tagline}</p>
                </div>

                <div className="mb-8 flex-1">
                  <CheckList items={pkg.features} dense />
                </div>

                <p className="text-sm text-[#a0a0a0]/90 leading-relaxed border-t border-[#2a2a2a] pt-6">
                  {pkg.footnote}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`p-8 lg:p-10 border border-[#2a2a2a] bg-[#111111] transition-all duration-700 delay-150 ${
              pricingInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-2">
              Ensimmäinen kuukausi: lähtötilanne kuntoon
            </h3>
            <p className="text-[#a0a0a0] leading-relaxed mb-6 max-w-2xl">
              Ensimmäinen kuukausi sisältää normaalin optimointityön lisäksi laajemman lähtötilanteen analyysin. Siihen kuuluu:
            </p>
            <div className="mb-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {ensimmainenKuukausi.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#f0f0f0]" />
                    </div>
                    <p className="text-[#a0a0a0] leading-relaxed text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-[#a0a0a0]/80 leading-relaxed border-t border-[#2a2a2a] pt-6">
              Ensimmäisen kuukauden tavallista suuremman analyysityön vuoksi varsinaisia sivuoptimointeja tehdään noin puolet paketin määrästä.{" "}
              <span className="text-[#f0f0f0]">Sopimus on 3kk määräaikainen jonka jälkeen toistaiseksi voimassa oleva.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── SEO ei tarkoita tekstin määrää ── */}
      <section className="relative py-20 lg:py-28 bg-[#111111] border-y border-[#2a2a2a]">
        <div ref={philosophyInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
              philosophyInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-display tracking-tight text-[#f0f0f0] leading-tight">
              SEO ei tarkoita sitä, että kirjoitetaan mahdollisimman paljon tekstiä
            </h2>
            <div className="space-y-4">
              <p className="text-[#a0a0a0] leading-relaxed text-lg">
                Hyvä SEO-sisältö vastaa siihen, mitä potentiaalinen asiakas oikeasti etsii. Siksi emme lisää sivustolle tekstiä vain hakusanojen vuoksi.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed text-lg">
                Kehitämme ensin olemassa olevaa sisältöä ja rakennetta. Jos uusi sisältö on tarpeen, sen aihe ja hakuintentti perustellaan datalla.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed text-lg">
                Uusien pitkien tekstisisältöjen kirjoittaminen ei sisälly kuukausittaiseen optimointikierrokseen, mutta niitä voidaan toteuttaa erillisenä työnä.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tekninen SEO ── */}
      <section className="relative py-20 lg:py-28 bg-[#0d0d0d]">
        <div ref={technicalInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`max-w-3xl mb-10 transition-all duration-700 ${
              technicalInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-4">
              Tekninen SEO kuuluu jatkuvaan työhön
            </h2>
            <p className="text-[#a0a0a0] leading-relaxed">
              Seuraamme verkkosivuston teknistä toimivuutta ja korjaamme palveluun kuuluvia pieniä SEO-ongelmia, kuten:
            </p>
          </div>
          <div
            className={`mb-8 transition-all duration-700 delay-100 ${
              technicalInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ChipGrid items={teknisetOngelmat} />
          </div>
          <p className="text-sm text-[#a0a0a0]/80 leading-relaxed max-w-3xl">
            Laajemmat WordPress-, palvelin-, teema- tai verkkosivukehitystyöt hinnoitellaan erikseen.
          </p>
        </div>
      </section>

      {/* ── Kuukausiraportti ── */}
      <section className="relative py-20 lg:py-28 bg-[#111111] border-y border-[#2a2a2a]">
        <div ref={reportInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-700 ${
              reportInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-4">
                Kuukausiraportti kertoo, mitä oikeasti tapahtui
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">
                Saat kuukausittain selkeän yhteenvedon:
              </p>
              <p className="text-sm text-[#a0a0a0]/80 leading-relaxed">
                Tarvittaessa pidämme lisäksi lyhyen, enintään 30 minuutin kuukausittaisen läpikäynnin.
              </p>
            </div>
            <CheckList items={raporttiSisalto} />
          </div>
        </div>
      </section>

      {/* ── Lisätyöt ── */}
      <section className="relative py-20 lg:py-28 bg-[#0d0d0d]">
        <div ref={extraInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-3 gap-10 lg:gap-16 transition-all duration-700 ${
              extraInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-4">Lisätyöt</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-6">
                Kuukausipakettiin sisältyvien optimointien lisäksi pienet SEO yhteydessä tehtävät sivustomuutokset sisältyvät palveluun enintään noin yhden työtunnin kuukausittaisella enimmäismäärällä.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed mb-4">
                Ylimenevä työ sekä muut verkkosivukehitykseen liittyvät työt:
              </p>
              <p className="text-3xl font-display text-[#f0c040] mb-8">
                30 € / h <span className="text-base text-[#a0a0a0] font-sans">+ kulloinkin voimassa oleva ALV</span>
              </p>
              <p className="text-[#a0a0a0] leading-relaxed mb-4">Lisätyötä voivat olla esimerkiksi:</p>
              <ChipGrid items={lisatyoEsimerkit} />
            </div>
            <div className="p-8 border border-[#2a2a2a] bg-[#111111] h-fit">
              <p className="text-[#a0a0a0] leading-relaxed">
                WordPressin jatkuva tekninen ylläpito, kuten päivitykset, varmuuskopiot ja tietoturva, ei sisälly tähän palveluun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lomake ── */}
      <CtaSection
        backgroundImage="/images/punanen.tausta.webp"
        title="Haluatko tietää, missä yrityksesi näkyy tällä hetkellä?"
        description="Aloitetaan nykytilanteesta. Käydään läpi verkkosivustosi hakukonenäkyvyys, tärkeimmät kehityskohteet ja mahdollisuudet myös tekoälyhauissa. SEO + GEO ei ole lupaus tietystä sijoituksesta. Se on jatkuvaa työtä sen eteen, että yrityksesi löytyy silloin, kun potentiaalinen asiakas etsii juuri sitä, mitä tarjoat."
        messagePlaceholder="Kerro yrityksestäsi ja verkkosivustostasi — mitä toivot SEO + GEO -työltä?"
      />
    </>
  );
}
