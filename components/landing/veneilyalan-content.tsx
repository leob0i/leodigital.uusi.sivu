"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Check } from "lucide-react";

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

export function VeneilyalanContent() {
  const [isVisible, setIsVisible] = useState(false);
  const valueInView = useInView(0.1);
  const pricingInView = useInView(0.1);
  const formInView = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    yritysKuvaus: "",
    ongelma: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "a399d30b-4e5f-44e7-8591-64f8677eb68b",
        ...formData,
        _subject: "Veneilyalansivut – uusi yhteydenotto",
      }),
    });
    setFormData({ name: "", company: "", email: "", phone: "", yritysKuvaus: "", ongelma: "" });
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero + 3 kysymystä wrapper with shared background ── */}
      <div className="relative">
        {/* Shared background image spanning both sections */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/veneily.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0d0d0d]/55 z-[1]" />

          {/* Grid overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-[2]">
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

          <div className="relative z-[3] max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
            <div
              className={`mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0]">
                <span className="w-8 h-px bg-[#f0f0f0]/30" />
                Nettisivut koko veneilualalle
              </span>
            </div>

            <div className="mb-12">
              <div
                className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight text-[#f0f0f0] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block">Veneilyalan</span>
                <span className="block relative">
                  nettisivut
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f0f0f0]/10" />
                </span>
                <span className="block text-[#a0a0a0]">jotka tuovat asiakkaita</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-8">
              <div
                className={`transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-xl lg:text-2xl text-[#a0a0a0] leading-relaxed max-w-xl">
                  Enemmän kuin pelkkä nettisivu venehuollolle, venekaupalle tai venemyymälälle.
                  Rakennamme moderneja verkkosivuja, jotka herättävät luottamusta ja tuovat lisää yhteydenottoja – kaikki veneilyalan tuntemuksella.
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
                  <a href="#yhteydenotto">
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
                  <a href="#hinnoittelu">Hinnat</a>
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <ArrowDown className="w-5 h-5 text-[#a0a0a0] animate-bounce" />
          </div>
        </section>

        {/* ── 3 kysymystä ── */}
        <section className="relative py-12 lg:py-16 border-t border-[#2a2a2a]">
          <div className="absolute inset-0 bg-[#0d0d0d]/80 z-[1]" />
          <div className="relative z-[2] max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                  Tarvitseeko veneilyyritys oikeasti nettisivut?
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Yli 90 % suomalaisista etsii palveluja Googlesta ennen ostopäätöstä. Jos venehuolto tai venekauppa ei löydy netistä tai sivu näyttää vanhentuneelta, asiakas siirtyy kilpailijalle. Niin yksinkertaista se on.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                  Mitä hyvä nettisivu tekee veneilyyritykselle?
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Se tuo yhteydenottoja myös öisin ja viikonloppuisin, esittelee palvelut ja varaston selkeästi, vastaa yleisimpiin kysymyksiin automaattisesti – ja vähentää turhia puheluita.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                  Kenelle nämä sivut sopivat?
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Venehuolloille, venekaupalle, venetarvikemyymälöille, venetelakalle, venevuokraamoille ja kaikille muille veneilyalan yrityksille, jotka haluavat löytyä verkosta ammattimaisesti.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Ei vain näyttävä nettisivu ── */}
      <section id="ei-vain-nettisivu" className="bg-[#111111] py-24 lg:py-32 border-y border-[#2a2a2a]">
        <div ref={valueInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 transition-all duration-700 ${
              valueInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-3xl">
              Tarkoitus ei ole rakentaa vain näyttävää kotisivua
            </h2>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-700 delay-150 ${
              valueInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-lg text-[#a0a0a0] leading-relaxed mb-8">
                Rehellisesti. Mitä nettisivu tekee? Ei mitään muuta kuin näyttää hyvältä, jos se ei ratkaise ongelmaa, tuo uusia yhteydenottoja tai helpota yrityksesi arkea.
              </p>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Minun nettisivujen tarkoitus on ratkaista oikea ongelma ja tuottaa rahallista arvoa yrityksellesi. Onko se liian vähän yhteydenottoja, liikaa niitä, vai kuka niihin kerkeää vastata?
              </p>
            </div>
            <div>
              <p className="text-lg text-[#a0a0a0] leading-relaxed mb-8">
                Voidaan tehdä oikeesti fiksu asiakaspalvelubotti, joka lukee aina ajantasaista tietoa varastosta tai huoltoajoista. Tai yhdistää sivunne varausjärjestelmään. Tai rakentaa uusi sovellus arjen helpottamiseksi.
              </p>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <p className="text-xl font-display text-[#f0f0f0] leading-snug">
                  Tarkoitukseni on ratkaista ongelma ja tuottaa arvoa yrityksellesi, ei vain tehdä näyttävä nettisivu.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="shrink-0 rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40 whitespace-nowrap"
                  asChild
                >
                  <a href="/nettisivut">
                    Lue lisää Leodigitalin nettisivuista
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mitä voidaan rakentaa veneilymaalalle ── */}
      <section className="relative py-24 lg:py-32 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/vene.ylhaalta.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/80" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
            <span className="w-8 h-px bg-[#f0f0f0]/30" />
            Toimialat
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-3xl mb-16">
            Sivut kaikenlaisille veneilyalan yrityksille
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Venehuolto & -korjaus",
                desc: "Talvisäilytys, moottorihuollot, pinnoitukset ja korjaukset – sivusto joka tuo huoltotyöt kalenteriin.",
              },
              {
                title: "Venekauppa & -myynti",
                desc: "Esittele venekanta houkuttelevasti, lisää tarjouslomake ja anna asiakkaan löytää unelmaveneensä Googlesta.",
              },
              {
                title: "Venetarvikemyymälä",
                desc: "Tuotekatalogit, tarjoukset ja yhteystiedot selkeästi. Asiakkaat löytävät mitä etsivät ilman turhaa soittoa.",
              },
              {
                title: "Venetelakka & -säilytys",
                desc: "Kapasiteetti, hinnoittelu ja paikanvaraus verkossa. Vähemmän hallinnointia, enemmän aikaa itse töille.",
              },
              {
                title: "Venevuokraus",
                desc: "Online-varauskalenteri, venekuvastot ja hinnat – asiakas varaa suoraan sivulta, ei pelkästään soittamalla.",
              },
              {
                title: "Venekoulut & -kurssit",
                desc: "Kurssikalenteri, ilmoittautumislomake ja kurssien esittely – oppilaita löytyy myös verkosta.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors bg-[#111111]"
              >
                <h3 className="text-xl font-display text-[#f0f0f0] mb-3">{item.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hinnoittelu ── */}
      <section id="hinnoittelu" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img src="/images/sininen.tausta.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/80" />
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
                  Mitä veneilyalan sivuihin kuuluu
                </h3>
              </div>
              <div className="space-y-5 mb-10">
                {[
                  "Räätälöity ulkoasu – ei templaatteja, ei WordPressiä. Sivu tehdään juuri sinun veneilyyrityksellesi sopivaksi.",
                  "Hakukoneoptimointi (SEO) – oikeat avainsanat, tekninen rakenne ja sisältö, joka löytyy Googlesta kun asiakas etsii venehuoltoa tai venekauppaa.",
                  "Tekoälyhakuoptimointi (GEO) – sivusto on rakennettu niin, että ChatGPT, Perplexity ja muut tekoälypohjaiset haut suosittelevat yritystäsi.",
                  "Mobiilioptimoidut ja nopeat sivut – toimii moitteettomasti puhelimella, tabletilla ja tietokoneella.",
                  "Enintään 6 sivua – etusivu, palvelut, tietoa yrityksestä, yhteystiedot ja muut tarpeelliset.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                    </div>
                    <p className="text-[#a0a0a0] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug mb-6">
                Laajemmat kokonaisuudet – kuten varausjärjestelmät, integraatiot ja räätälöidyt ratkaisut – hinnoitellaan erikseen.
              </p>
              <p className="text-sm text-[#a0a0a0] italic mb-6">
                Otan mielelläni vastaan isommatkin projektit –{" "}
                <a
                  href="#yhteydenotto"
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
                  <span className="font-mono text-xs tracking-widest text-[#d4a017] uppercase block mb-4">
                    ⭐ Starter – Sivut + ylläpito
                  </span>
                  <div className="mb-4">
                    <span className="font-display text-4xl text-[#f0c040] leading-none">99 €</span>
                    <span className="font-mono text-sm text-[#d4a017] ml-2">+ 49 €/kk</span>
                  </div>
                  <p className="text-[#d4a017]/80 text-sm leading-relaxed mb-4">
                    Sivun rakennushinta + ylläpitopaketti sisältäen:
                  </p>
                  <ul className="space-y-2 mb-8">
                    {["Päivitykset ja muutokset WhatsApp:in kautta", "Domain & SSL-sertifikaatti", "Hosting & varmuuskopiot"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#d4a017]/80">
                        <Check className="w-3.5 h-3.5 text-[#d4a017] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-[#b8960c]/40">
                    <a
                      href="/yllapito"
                      className="inline-flex items-center gap-2 text-sm text-[#d4a017] hover:text-[#f0c040] transition-colors group"
                    >
                      Lue lisää ylläpitopaketeista
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#yhteydenotto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-full group"
              >
                Pyydä ilmainen demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/nettisivut"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#f0f0f0] font-medium border border-[#f0f0f0]/30 hover:border-[#f0f0f0]/60 transition-colors rounded-full group"
              >
                Lue lisää mitä sivut sisältää
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Yhteydenottolomake ── */}
      <section id="yhteydenotto" className="relative py-24 lg:py-32 border-t border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/taustakuva.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/80" />
        </div>
        <div ref={formInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 transition-all duration-700 ${
              formInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-2xl mb-8">
              Haluatko ilmaisen demon tai suunnitelman?
            </h2>
            <p className="text-xl text-[#a0a0a0] leading-relaxed max-w-2xl">
              Jätä yhteystietosi ja kerro yrityksestäsi muutamalla sanalla. Kerro myös
              mahdollinen ongelma, jota voisimme ratkaista – oli se sitten liian vähän
              yhteydenottoja tai liikaa. Tarkoituksemme on ratkaista ongelma ja tuottaa
              arvoa yrityksellesi, ei vain tehdä näyttävä nettisivu.
            </p>
          </div>

          <div
            className={`relative border border-[#2a2a2a] bg-[#111111] p-8 lg:p-12 transition-all duration-700 delay-100 ${
              formInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-[#f0f0f0]">✓</span>
                </div>
                <h3 className="text-2xl font-display text-[#f0f0f0] mb-4">Viesti lähetetty!</h3>
                <p className="text-[#a0a0a0]">Otan sinuun yhteyttä pian. Palataan asiaan!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ve-name" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Nimesi *
                    </label>
                    <input
                      type="text"
                      id="ve-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="Nimesi"
                    />
                  </div>
                  <div>
                    <label htmlFor="ve-company" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Yritys
                    </label>
                    <input
                      type="text"
                      id="ve-company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="Yrityksen nimi (valinnainen)"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ve-email" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Sähköposti *
                    </label>
                    <input
                      type="email"
                      id="ve-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="sahkoposti@esimerkki.fi"
                    />
                  </div>
                  <div>
                    <label htmlFor="ve-phone" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Puhelin
                    </label>
                    <input
                      type="tel"
                      id="ve-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="+358 40 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ve-yritys" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                    Kerro yrityksestäsi?
                  </label>
                  <textarea
                    id="ve-yritys"
                    rows={6}
                    value={formData.yritysKuvaus}
                    onChange={(e) => setFormData({ ...formData, yritysKuvaus: e.target.value })}
                    className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors resize-none"
                    placeholder="Mitä teette? Pää fokus? Kilpailijat? Mikä erottaa teidät?"
                  />
                </div>

                <div>
                  <label htmlFor="ve-ongelma" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                    Nykyinen ongelma?
                  </label>
                  <textarea
                    id="ve-ongelma"
                    rows={6}
                    value={formData.ongelma}
                    onChange={(e) => setFormData({ ...formData, ongelma: e.target.value })}
                    className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors resize-none"
                    placeholder="Kerro nykyisestä ongelmasta kuten vähän yhteydenottoja, liikaa asiakaspalvelua, tai mitä vaan missä voisimme mahdollisesti helpottaa?"
                  />
                </div>

                <p className="text-xs text-[#a0a0a0]">
                  Lähettämällä lomakkeen hyväksyt, että otamme sinuun yhteyttä.
                </p>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#0d0d0d] px-8 h-14 text-base rounded-full group cursor-pointer"
                >
                  Lähetä viesti
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
