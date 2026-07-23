"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { NettisivutFeaturesSection } from "@/components/landing/nettisivut-features-section";
import { NettisivutStatsMarquee } from "@/components/landing/nettisivut-stats-marquee";

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

const sisaltyy = [
  "Räätälöity Next.js-toteutus — ei WordPress, ei templaatteja",
  "Hakukoneoptimointi (SEO) alusta alkaen — oikeat avainsanat, tekninen rakenne",
  "Tekoälyhakuoptimointi (GEO) — löydyt ChatGPT:stä, Perplexitystä ja Google AI:sta",
  "Mobiilioptimoidut ja nopeat sivut kaikilla laitteilla",
  "Aloitushinta 99€ sisältää 6 sivua (etusivu, palvelut, yhteystiedot + muut tarpeelliset).",
  "Domain & SSL-sertifikaatti hoidettu",
  "Hosting & varmuuskopiot mukana",
  "Tietoturva ja tekninen ylläpito — ei sinun huolesi",
  "Sisältöpäivitykset WhatsAppin kautta — uudet kuvat, palvelut, numerot",
  "Jatkuva kehitys — ajanvaraus, botti tai muita toimintoja lisättävissä myöhemmin",
  "Yrityssähköposti +5 €/kk per postilaatikko (esim. info@yrityksesi.fi)",
];

const miksiToimii = [
  {
    title: "Löydyt Googlesta ja tekoälyhauista",
    text: "Sivut rakennetaan teknisesti oikein alusta alkaen. Oikea rakenne, oikeat avainsanat, nopea lataus — niin Google kuin ChatGPT suosittelee sinua.",
  },
  {
    title: "Kaikki hoituu — ei säätöä",
    text: "Domain, hosting, tietoturva, päivitykset. Ei erillisiä laskuja eri palveluntarjoajilta. Yksi viesti WhatsAppiin ja asia hoituu.",
  },
  {
    title: "Sivut kasvavat yrityksesi mukana",
    text: "Julkaisu on vasta alku. Voidaan lisätä ajanvaraus, chatbotti, uusia sivuja tai integraatioita — ilman että koko sivu rakennetaan uudelleen.",
  },
];

const prosessi = [
  {
    number: "01",
    title: "Ilmainen kartoitus",
    description: "Kerrot yrityksestäsi ja tavoitteistasi. Saat demon sekä selkeän suunnitelman. Ei sido mihinkään vielä.",
  },
  {
    number: "02",
    title: "Toteutus alkaa",
    description: "Rakennan sivut sovitun suunnitelman mukaan. Saat testilinkin kommentoitavaksi ennen julkaisua.",
  },
  {
    number: "03",
    title: "Julkaisu ja jatko",
    description: "Sivut julkaistaan ja ylläpito alkaa. Päivitykset hoituvat nopeasti WhatsAppin kautta — myös viikonloppuisin.",
  },
];

const faq = [
  {
    q: "Mitä kotisivut maksavat yritykselle?",
    a: "Aloitusmaksu on 99 € ja sen jälkeen 49 €/kk. Hinta sisältää räätälöidyt sivut, ylläpidon, domainin, hostingin ja tietoturvan. Yrityssähköposti on +5 €/kk per postilaatikko.",
  },
  {
    q: "Onko sopimus määräaikainen?",
    a: "Sopimus on 12kk määräaikainen, jonka jälkeen se muuttuu toistaiseksi voimassaolevaksi 1kk irtisanomisajalla.",
  },
  {
    q: "Kuinka nopeasti sivut valmistuvat?",
    a: "Yksinkertaiset sivut valmistuvat tyypillisesti 1–2 viikossa alkukartoituksesta. Laajemmat projektit sovitaan erikseen.",
  },
  {
    q: "Tarvitseeko minun osata mitään teknistä?",
    a: "Ei. Sinun tehtäväsi on kertoa mitä haluat ja hyväksyä lopputulos. Minä hoidan kaiken teknisen.",
  },
  {
    q: "Voiko sivuja kehittää myöhemmin?",
    a: "Kyllä. Ylläpitoon sisältyvät pienet päivitykset, ja isommat lisäykset kuten ajanvaraus tai chatbotti voidaan toteuttaa erikseen sovittavalla hinnalla.",
  },
  {
    q: "Mitä minun pitää tehdä?",
    a: "Se riittää että kerrot perustiedot yrityksestäsi ja palveluistasi. Hoidan suunnittelun, toteutuksen, domainit yms puolestasi. Tottakai pääset mukaan suunnittelemaan, mutta ideana on tehdä mahdollisimman helppo ja vaivaton kiireisille yrittäjille.",
  },
  {
    q: "Mitä ylläpitoon oikeasti kuuluu — ja missä menee raja?",
    a: "Ylläpitoon kuuluu sivun valmistuttua pienet päivitykset kerran kuussa, kuten uusi kuva, yhteystietojen päivitys tai vaikka uusi palvelu. Sisältäen noin 2h työtä ja ylimenevä laskutetaan 30 €/h.",
  },
  {
    q: "Kuka omistaa sivut ja domainin — ja mitä tapahtuu jos irtisanon?",
    a: "Leo Digital Suomi hallinnoi domainia ja sivuja koko sopimuskauden aikana ellei toisin sovita. Sopimuksen loputtua domainin voi siirtää asiakkaan nimiin sovittaessa. Asiakas voi myös itse ostaa ja hallinnoida domain-osoitteensa. Myös nettisivun lähdekoodin voi lunastaa itselleen aloitusmaksun hinnalla sopimuksen päätyttyä.",
  },
];

export function NettisivutContent() {
  const [isVisible, setIsVisible] = useState(false);
  const mitaInView = useInView(0.1);
  const whyInView = useInView(0.1);
  const processInView = useInView(0.1);
  const faqInView = useInView(0.1);

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
            src="/images/sininen.tausta.webp"
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
              Kotisivut yritykselle · Google &amp; tekoälyhaut · Kaikki hoituu
            </span>
          </div>

          {/* Headline */}
          <div className="mb-12">
            <h1
              className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight text-[#f0f0f0] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Kotisivut yrityksellesi —</span>
              <span className="block relative text-[#f0c040]">
                49 €/kk
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
              <p className="text-xl lg:text-2xl text-[#a0a0a0] leading-relaxed max-w-xl">
                Räätälöidyt nettisivut, ylläpito, domain, hosting ja näkyvyys Googlessa — kaikki samassa paketissa. Sinä keskityt bisnekseen, minä hoidan digin.
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
                  Pyydä ilmainen demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
                asChild
              >
                <a href="#mita-sisaltyy">Katso hinnat ja mitä sisältyy</a>
              </Button>
            </div>
          </div>
        </div>

        <NettisivutStatsMarquee isVisible={isVisible} />
      </section>

      {/* ── Why ── */}
      <section className="relative py-12 lg:py-16 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Mitä nettisivut ja ylläpito maksavat vuonna 2026?
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                
                Sivuston teettäminen ammattilaisella: 500€ – 10.000€<br />
                
                Ylläpito isoilla digitoimistoilla: 50 € – 300 €/kk<br />
                Leo Digitalilla alk 99€ jonka jälkeen alk 49€/kk sisältäen kaiken
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Internet on täynnä turhia nettisivuja
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Nykyään kuka tahansa voi tehdä hienot sivut, mutta ne ovat hitaita, näkymättömiä hakutuloksissa, ei myy eikä erotu joukosta. Leodigitalin sivujen tarkoitus on tuottaa tulosta ja helpottaa liiketoimintaasi.
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Eikö pelkkä sosiaalinen media riitä?
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Some tukee, mutta ei korvaa. Nettisivu on yrityksesi oma kanava jossa esitellään selkeästi palvelut, hinnat, ajanvaraus jne... Luotatko itse yritykseen joilla ei ole kotisivuja mistä löytää vaikka takuuehdot?
              </p>
            </div>
          </div>
        </div>
      </section>

      <NettisivutFeaturesSection />

      {/* ── Mitä saat ── */}
      <section id="mita-sisaltyy" className="bg-[#111111] py-24 lg:py-32 border-y border-[#2a2a2a]">
        <div ref={mitaInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`flex flex-wrap items-end justify-between gap-6 mb-16 transition-all duration-700 ${
              mitaInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-2xl">
              Kaikki mitä tarvitset — yhdestä paikasta
            </h2>
            <div className="flex flex-col items-end shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
              <div className="flex items-baseline gap-2 lg:scale-150 origin-right">
                <div className="relative">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold balloon-shimmer">49€</span>
                </div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-display text-[#f0f0f0]">/kk</span>
              </div>
              <span className="text-sm text-[#a0a0a0] mt-2 text-right">
                Aloitus 99€
                <br />
                jonka jälkeen 12kk sopimus
              </span>
            </div>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-x-12 gap-y-5 transition-all duration-700 delay-100 ${
              mitaInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {sisaltyy.map((text) => (
              <div key={text} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                </div>
                <p
                  className={`leading-relaxed ${
                    text.startsWith("Yrityssähköposti") ? "text-white" : "text-[#a0a0a0]"
                  }`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#a0a0a0]">
              Sisältää noin 2h työtä / kuukausi, sisältäen kaiken edellämainitun. Isommat muutostoiveet 30€/h.
            </p>
            <a
              href="/kayttoehdot"
              className="text-sm text-[#f0f0f0] underline underline-offset-2 hover:text-[#a0a0a0] transition-colors shrink-0"
            >
              Lue lisää käyttöehdoista
            </a>
          </div>

          <div
            className={`mt-8 p-8 border border-[#2a2a2a] bg-[#0d0d0d] transition-all duration-700 delay-150 ${
              mitaInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-wrap items-baseline gap-3 mb-4">
              <h3 className="text-3xl lg:text-4xl font-display text-[#f0f0f0]">Maksut ja verkkokauppa</h3>
              <span className="text-xl font-display text-[#f0c040]">+15–99 €/kk lisää</span>
            </div>
            <p className="text-lg lg:text-xl font-bold text-[#f0c040] leading-relaxed mb-4">
              Sisältäen täysin räätälöidyn verkkokaupan ja tuotehallinnan.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              <span className="text-[#f0f0f0] font-medium">Entä maksujen välitys?</span> Kun asiakkaasi maksaa verkkokaupassa, rahaliikenne kulkee maksunvälittäjän kautta (esim. Stripe tai Visma Pay). He veloittavat jokaisesta myynnistä pienen palkkion — yleensä muutama prosentti + kiinteä sentti per tapahtuma, joillakin lisäksi kuukausimaksu. Tämä on alan vakiokäytäntö kaikilla verkkokaupoilla, ja maksat sen suoraan palveluntarjoajalle. Me emme ota siitä osuutta. Autamme sinut valitsemaan sopivimman vaihtoehdon ja kerromme etukäteen mitä se maksaa.
            </p>
          </div>
        </div>
      </section>

      {/* ── Asiakkaat ── */}
      <TestimonialsSection />

      {/* ── Miksi tämä toimii ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/tumma.tausta.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0a]/90" />
        </div>
        <div ref={whyInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-16 max-w-3xl transition-all duration-700 ${
              whyInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Verkkosivut jotka tuovat asiakkaita — ei vain näytä hyvältä
          </h2>
          <div
            className={`grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${
              whyInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {miksiToimii.map((item) => (
              <div key={item.title} className="p-8 border border-[#2a2a2a] bg-[#111111]/60 backdrop-blur-sm">
                <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">{item.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prosessi ── */}
      <section className="relative py-20 lg:py-28 bg-[#0a0a0a] border-t border-[#2a2a2a]">
        <div ref={processInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-12 transition-all duration-700 ${
              processInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Näin pääset alkuun
          </h2>

          <div className="flex flex-col gap-0">
            {prosessi.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-start gap-8 py-10 border-b border-[#2a2a2a] transition-all duration-700 ${
                  processInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="text-4xl lg:text-5xl font-display font-bold text-blue-500 shrink-0 leading-none mt-1">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-3">{step.title}</h3>
                  <p className="text-lg text-[#a0a0a0] leading-relaxed max-w-3xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div ref={faqInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-16 transition-all duration-700 ${
              faqInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Usein kysyttyä
          </h2>

          <div
            className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-100 ${
              faqInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {faq.map((item) => (
              <div key={item.q} className="p-8 border border-[#2a2a2a] bg-[#111111]">
                <h3 className="text-lg lg:text-xl font-display text-[#f0f0f0] mb-3">{item.q}</h3>
                <p className="text-[#a0a0a0] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lomake ── */}
      <CtaSection
        backgroundImage="/images/punanen.tausta.webp"
        title="Pyydä maksuton demo"
        description="Saat selkeän demon ja suunnitelman ilman sitoutumista!"
        messagePlaceholder="Kerro yrityksestäsi muutamalla sanalla, mitä teette? Palvelut? Tuleeko sivulle maksuominaisuudet? Mitään muita toiveita?"
      />
    </>
  );
}
