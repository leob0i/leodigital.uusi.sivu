"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { AutokorjaamoPricingSection } from "@/components/landing/autokorjaamo-pricing-section";

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

export function AutokorjaamoContent() {
  const [isVisible, setIsVisible] = useState(false);
  const valueInView = useInView(0.1);
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
        _subject: "Autokorjaamosivut – uusi yhteydenotto",
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
            src="/images/bmw.e30.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0d0d0d]/50 z-[1]" />

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
                Nettisivut koko autoalalle
              </span>
            </div>

            <div className="mb-12">
              <div
                className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight text-[#f0f0f0] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block">Autokorjaamon</span>
                <span className="block relative">
                  nettisivut
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f0f0f0]/10" />
                </span>
                <span className="block text-[#a0a0a0]">jotka tuovat töitä</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-8">
              <div
                className={`transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-xl lg:text-2xl text-[#a0a0a0] leading-relaxed max-w-xl">
                  Enemmän kuin pelkkä nettisivu autokorjaamolle, detailing-yritykselle tai teippipajalle.
Rakennamme näyttäviä verkkosivuja, jotka herättävät luottamusta ja tuovat lisää yhetydenottoja. Kaikki työt aidolla autoalan tuntemuksella ja korjaamokokemuksella
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
                  Tarvitseeko autokorjaamo oikeasti nettisivut?
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Yli 90 % suomalaisista etsii palveluja Googlesta ennen päätöstä. Jos korjaamo ei löydy netistä tai sivu näyttää vanhentuneelta, asiakas menee kilpailijalle. Niin yksinkertaista se on.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                  Mitä hyvä nettisivu tekee autokorjaamolle?
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Se tuo ajanvarauksia myös öisin ja viikonloppuisin, vastaa yleisimpiin kysymyksiin automaattisesti, esittelee palvelut ja hinnaston selkeästi — ja vähentää turhia soittoja.
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
                Rehellisesti. Mitä nettisivu tekee? Ei mitään muuta kuin näyttää
                hyvältä, jos se ei ratkaise ongelmaa, tuo uusia yhteydenottoja tai
                helpota yrityksesi arkea.
              </p>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Minun nettisivujen tarkoitus on ratkaista oikea ongelma ja tuottaa
                rahallista arvoa yrityksellesi. Onko se liian vähän yhteydenottoja,
                liikaa niitä, vai kuka niihin kerkeää vastata?
              </p>
            </div>
            <div>
              <p className="text-lg text-[#a0a0a0] leading-relaxed mb-8">
                Voidaan tehdä oikeesti fiksu asiakaspalvelubotti, joka lukee aina
                ajantasaista tietoa. Tai yhdistää sivunne varausjärjestelmään. Tai
                rakentaa uusi sovellus arjen helpottamiseksi.
              </p>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <p className="text-xl font-display text-[#f0f0f0] leading-snug">
                  Tarkoitukseni on ratkaista ongelma ja tuottaa arvoa yrityksellesi,
                  ei vain tehdä näyttävä nettisivu.
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

      {/* ── Mikä erottaa mut joukosta ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/mese.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/75" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
            <span className="w-8 h-px bg-[#f0f0f0]/30" />
            Tausta
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-3xl mb-10">
            Mikä erottaa mut joukosta?
          </h2>
          <div className="max-w-2xl space-y-6 mb-12">
            <p className="text-lg text-[#a0a0a0] leading-relaxed">
              Minulla on yli 6 vuoden kokemus BMW- ja Mercedes-Benz -merkkihuolloista, minkä kautta autoalan arki, asiakkaat ja toimintaympäristö ovat tulleet erittäin tutuiksi.
            </p>
            <p className="text-lg text-[#a0a0a0] leading-relaxed">
              Tiedän miltä laadukas palvelu näyttää myös työpaikalla ja netissä. Ja juuri siksi rakennan autoalan yrityksille moderneja sivustoja, jotka näyttävät yhtä ammattimaisilta kuin itse yritys.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
              asChild
            >
              <a href="/leodigital">
                Kuka olen?
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              className="h-12 px-6 text-base font-semibold rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white"
              asChild
            >
              <a href="https://wa.me/358452031377" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 32 32" style={{ width: '28px', height: '28px', minWidth: '28px' }} className="-mr-1 shrink-0" aria-hidden="true">
                  <path fill="currentColor" transform="translate(1.5 -0)" d="M19.11 17.53c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.74.9-.9 1.08-.17.18-.33.2-.6.06-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.49h-.55c-.2 0-.49.07-.74.35-.26.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
                  <path fill="currentColor" d="M16.01 3.2c-7.03 0-12.75 5.7-12.75 12.7 0 2.23.6 4.41 1.73 6.33L3.2 28.8l6.75-1.77a12.8 12.8 0 0 0 6.06 1.54c7.03 0 12.75-5.7 12.75-12.7S23.04 3.2 16.01 3.2zm0 23.12c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.51 10.51 0 0 1-1.61-5.57c0-5.8 4.75-10.52 10.66-10.52 5.9 0 10.66 4.72 10.66 10.52 0 5.8-4.76 10.55-10.66 10.55z" />
                </svg>
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

<AutokorjaamoPricingSection />

      {/* ── Yhteydenottolomake ── */}
      <section id="yhteydenotto" className="relative py-24 lg:py-32 border-t border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/kultanen.vanne.webp" alt="" className="w-full h-full object-cover" />
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
              mahdollinen ongelma, jota voisimme ratkaista — oli se sitten liian vähän
              yhteydenottoja tai liikaa! Tarkoituksenamme on ratkaista ongelma ja tuottaa
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
                    <label htmlFor="ak-name" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Nimesi *
                    </label>
                    <input
                      type="text"
                      id="ak-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="Nimesi"
                    />
                  </div>
                  <div>
                    <label htmlFor="ak-company" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Yritys
                    </label>
                    <input
                      type="text"
                      id="ak-company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="Yrityksen nimi (valinnainen)"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ak-email" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Sähköposti *
                    </label>
                    <input
                      type="email"
                      id="ak-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="sahkoposti@esimerkki.fi"
                    />
                  </div>
                  <div>
                    <label htmlFor="ak-phone" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Puhelin
                    </label>
                    <input
                      type="tel"
                      id="ak-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="+358 40 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ak-yritys" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                    Kerro yrityksestäsi?
                  </label>
                  <textarea
                    id="ak-yritys"
                    rows={6}
                    value={formData.yritysKuvaus}
                    onChange={(e) => setFormData({ ...formData, yritysKuvaus: e.target.value })}
                    className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors resize-none"
                    placeholder="Mitä teette? Pää fokus? Kilpailijat? Mikä erottaa teidät?"
                  />
                </div>

                <div>
                  <label htmlFor="ak-ongelma" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                    Nykyinen ongelma?
                  </label>
                  <textarea
                    id="ak-ongelma"
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
