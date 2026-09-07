"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Check, X } from "lucide-react";

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

const tunnistatko = [
  {
    q: "Minulla ei ole vielä nettisivuja.",
    a: (
      <>
        Yritys pyörii ja asiakkaita tulee muutenkin, mutta nettisivut ovat jääneet tekemättä. Ehkä
        olet ajatellut jo pitkään: &quot;Pitäisi varmaan tehdä nettisivut.&quot;
        <br />
        <br />
        Jos tämä kuulostaa tutulta, et ole myöhässä.{" "}
        <strong className="text-[#f0f0f0] font-medium">Nyt on ihan hyvä hetki tehdä ne.</strong>
        <br />
        <br />
        Rakennetaan sivut, joista asiakas näkee nopeasti kuka olet, mitä tarjoat, missä toimit ja
        miten sinuun saa yhteyden. Ei tarvitse aloittaa valtavasta verkkoprojektista — hyvät
        yrityksen kotisivut voivat olla aluksi hyvinkin selkeät.
      </>
    ),
  },
  {
    q: "Minulla on nettisivut, mutta en ole niihin tyytyväinen.",
    a: (
      <>
        Tämä on vielä yleisempää. Sivut ovat olemassa, mutta ne näyttävät vanhoilta, puhelimella
        käyttäminen on hankalaa, palvelut ovat epäselvästi esillä, yhteystiedot pitää etsiä, sivut
        latautuvat hitaasti, Google ei tunnu löytävän niitä, sivu ei näytä enää siltä yritykseltä
        joka olet tänään — tai koko sivuston päivittäminen tuntuu liian hankalalta.
        <br />
        <br />
        Silloin uutta sivua ei tarvitse tehdä vain siksi, että &quot;kaikilla pitää olla
        nettisivut&quot;.{" "}
        <strong className="text-[#f0f0f0] font-medium">
          Sen pitää ratkaista oikea ongelma.
        </strong>{" "}
        Jos nykyinen sivusi ei auta asiakasta löytämään yritystäsi, ymmärtämään palveluitasi tai
        ottamaan yhteyttä, siinä on jotain kehitettävää.
      </>
    ),
  },
  {
    q: "Osaisin tehdä sivut itse, mutta en jaksa.",
    a: (
      <>
        Tämä on ehkä yksi parhaista syistä ulkoistaa nettisivut. Nykyään nettisivujen tekeminen ei
        ole enää mikään mahdottoman vaikea asia — työkaluja löytyy joka lähtöön. Jos haluat
        rakentaa yrityksesi sivut itse, tee ihmeessä.
        <br />
        <br />
        Mutta mieti samalla, paljonko oma aikasi maksaa. Jos käytät 20, 30 tai 50 tuntia sivujen
        suunnitteluun, rakentamiseen, kuvien etsimiseen, tekstien kirjoittamiseen, ongelmien
        selvittämiseen ja kaiken opetteluun, se ei oikeastaan ole ilmaista. Se on omaa aikaasi.{" "}
        <strong className="text-[#f0f0f0] font-medium">
          Minun tehtäväni on säästää sitä aikaa.
        </strong>
      </>
    ),
  },
  {
    q: "Minulla ei ole hajuakaan miten nettisivut tehdään.",
    a: (
      <>
        Ei tarvitsekaan olla. Sinun ei tarvitse tietää mitä Next.js tarkoittaa, osata koodata,
        tietää mikä on DNS, SSL, hosting, sitemap tai canonical — eikä sinun tarvitse ymmärtää
        hakukoneoptimointia.{" "}
        <strong className="text-[#f0f0f0] font-medium">Minä hoidan teknisen puolen.</strong>
        <br />
        <br />
        Sinä kerrot minulle yrityksestäsi, palveluistasi ja siitä, millaisia asiakkaita haluat
        tavoittaa. Sen jälkeen suunnittelen ja rakennan kokonaisuuden. Saat testilinkin, jonka
        kautta voit katsoa sivut ennen julkaisua ja kertoa mitä haluat muuttaa.
      </>
    ),
  },
  {
    q: "Minulla on kyllä aikaa, mutta haluan keskittyä yritykseeni.",
    a: (
      <>
        Tämä on oikeastaan koko palveluni idea. Yrittäjän ei pitäisi joutua käyttämään
        sunnuntai-iltaa siihen, että yrittää vaihtaa nettisivuille uuden kuvan, miettiä miten uusi
        palvelu pitäisi lisätä sivuille, tai googlata miksi yhteydenottolomake ei toimi.
        <br />
        <br />
        <strong className="text-[#f0f0f0] font-medium">Laita minulle viesti.</strong> Kuva
        WhatsAppiin. Uusi palvelu WhatsAppiin. Uudet aukioloajat WhatsAppiin. Tarjous, jonka
        haluat etusivulle → WhatsApp. Minä hoidan muutoksen.
      </>
    ),
  },
];

const toimialat = [
  {
    icon: "🚗",
    title: "Autoalan yrityksille",
    desc: "Autokorjaamot, rengasliikkeet, autopesulat, detailing-yritykset, varaosaliikkeet, hitsauspajat, huoltamot ja muut autoalan yritykset. Asiakas etsii usein hyvin konkreettista palvelua — jarruhuolto, ilmastointihuolto, renkaiden vaihto, vikadiagnoosi. Siksi sivujen pitää kertoa nopeasti mitä teet ja miksi asiakkaan kannattaa ottaa juuri sinuun yhteyttä. Autoala on minulle myös henkilökohtaisesti tuttu ala.",
    link: { href: "/autokorjaamonsivut", label: "Katso myös autoalan kotisivut" },
  },
  {
    icon: "⚓",
    title: "Venealan ja merialan yrityksille",
    desc: "Venehuollot, korjaamot, talvisäilytys, veneiden kuljetukset, varustelu, myynti ja muut veneilyyn liittyvät palvelut. Asiakkaalla voi olla paljon kysymyksiä ennen yhteydenottoa — mitä teette, missä toimitte, mitä palvelu maksaa, miten työ etenee. Hyvä nettisivu vastaa näihin jo ennen ensimmäistä puhelua.",
    link: { href: "/veneilyalansivut", label: "Katso myös venealan kotisivut" },
  },
  {
    icon: "🏠",
    title: "Remontti-, rakennus- ja huoltoalan yrityksille",
    desc: "Putkimiehet, sähköasentajat, rakennusliikkeet, remonttifirmat, maalausyritykset, kiinteistöhuolto ja monet muut paikalliset palveluyritykset. Asiakas etsii usein palvelua läheltä. Siksi sivujen pitää löytyä — ja kun asiakas päätyy sivulle, hänen pitää ymmärtää nopeasti että olet oikea henkilö tai yritys hoitamaan työn.",
  },
  {
    icon: "💇",
    title: "Kauneus-, hyvinvointi- ja ajanvarauspalveluille",
    desc: "Parturit, kampaamot, hierojat, kosmetologit, personal trainerit, valmentajat, hyvinvointiyrittäjät ja muut ajanvarauspalvelut. Tärkeintä voi olla palveluiden selkeä esittely, hinnasto, kuvat, sijainti, ajanvaraus ja luottamuksen rakentaminen. Asiakkaan pitää vain löytää tarvitsemansa tieto mahdollisimman helposti.",
  },
  {
    icon: "🧑‍💼",
    title: "Asiantuntijayrityksille",
    desc: "Kirjanpitäjät, konsultit, suunnittelijat, valmentajat, IT-yritykset, lakipalvelut ja muut asiantuntijayritykset. Sivun tehtävä ei ole vain kertoa että olet olemassa — sen pitäisi vastata kysymykseen \"voinko luottaa tähän yritykseen?\". Siksi selkeä rakenne, palvelukuvaus, referenssit ja helposti löytyvät yhteystiedot ovat tärkeämpiä kuin hieno animaatio.",
  },
  {
    icon: "🏪",
    title: "Paikallisille yrityksille",
    desc: "Jos asiakkaasi etsivät sinua Googlen kautta — \"autokorjaamo Helsinki\", \"hieronta Espoo\", \"veneen huolto Turku\", \"kirjanpitäjä Vantaa\", \"rakennusliike Tampere\" — nettisivu on edelleen erittäin tärkeä osa kokonaisuutta. Sivujen pitää kertoa hakukoneille ja ihmisille selkeästi kuka olet, mitä teet, missä toimit ja kenelle palvelusi on tarkoitettu.",
  },
];

const teknisetVastuut = [
  { q: "Domain?", a: "Minä hoidan." },
  { q: "Hosting?", a: "Minä hoidan." },
  { q: "SSL-sertifikaatti?", a: "Minä hoidan." },
  { q: "Varmuuskopiot?", a: "Minä hoidan." },
  { q: "Tekniset päivitykset?", a: "Minä hoidan." },
  { q: "Sivuston kehittäminen?", a: "Katsotaan yhdessä." },
];

const hajallaan = [
  "Yksi domain yhdestä paikasta.",
  "Hosting toisesta.",
  "SSL jostain kolmannesta.",
  "Sähköpostit neljännestä.",
  "Joku tekee sivut, joku toinen ylläpitää niitä.",
];

const helppoudenHyodyt = [
  "modernin ja yrityksellesi suunnitellun verkkosivuston.",
  "teknisesti toimivan kokonaisuuden.",
  "hakukoneita ajatellen rakennetun perustan.",
  "mahdollisuuden kehittää sivuja myöhemmin.",
  "jonkun, jolle voit laittaa viestin — ei tikettijärjestelmää, ei kymmentä eri kirjautumista.",
];

const josOsaatItse = [
  { number: "01", title: "Rakenne", desc: "Mitä sivuja tarvitaan ja miten asiakas löytää oikean tiedon?" },
  { number: "02", title: "Sisältö", desc: "Mitä sivuilla oikeasti pitäisi sanoa?" },
  { number: "03", title: "Tekninen toteutus", desc: "Toimivatko sivut nopeasti ja oikein eri laitteilla?" },
  { number: "04", title: "SEO", desc: "Löytääkö Google sivut ja ymmärtääkö se mitä yrityksesi tekee?" },
  { number: "05", title: "Ylläpito", desc: "Kuka päivittää sivuja kuukauden päästä?" },
  { number: "06", title: "Kehitys", desc: "Mitä tapahtuu, kun haluat ajanvarauksen, uuden palvelun, chatbotin tai kokonaan uuden sivun?" },
];

const mitaMyyn = [
  "Saat räätälöidyt verkkosivut ilman valmista templaattia.",
  "Tekninen toteutus hoidetaan puolestasi.",
  "Domain, hosting, SSL, varmuuskopiot ja tekninen ylläpito voidaan hoitaa samasta paikasta.",
  "Sivusto rakennetaan hakukonevalmiiksi jo lähtökohtaisesti.",
  "Jos tarvitset myöhemmin muutoksia, sinun ei tarvitse opetella sivuston hallintaa — laita WhatsApp-viesti.",
];

const kasvunAskeleet = [
  "uusia palvelusivuja",
  "ajanvaraus",
  "chatbot",
  "lomakkeita",
  "integraatioita",
  "uusia sisältöjä",
  "uusia laskeutumissivuja",
  "SEO-optimointia",
  "GEO-optimointia",
];

const eiEhkaSinulle = [
  "Haluat opetella itse verkkokehitystä ja rakentaa kaiken itse.",
  "Haluat pelkän halvimman mahdollisen yhden illan templaatin.",
  "Et halua koskaan päivittää sivuja tai miettiä niiden sisältöä.",
];

const kannattaaJutella = [
  "hyvät sivut ilman säätämistä",
  "jonkun muun hoitamaan teknisen puolen",
  "helpon tavan pyytää muutoksia",
  "nopean ja modernin toteutuksen",
  "hakukonevalmiin perustan",
  "kumppanin, jolle voit vain laittaa viestin kun jotain pitää tehdä",
];

const perusKysymykset = [
  "Mitä teet?",
  "Kenelle myyt?",
  "Missä toimit?",
  "Mitä haluat asiakkaan tekevän nettisivuillasi?",
];

export function LeodigitalNettisivutContent() {
  const [isVisible, setIsVisible] = useState(false);
  const tunnistatkoInView = useInView(0.1);
  const toimialatInView = useInView(0.1);
  const helppoInView = useInView(0.1);
  const itseInView = useInView(0.1);
  const myynInView = useInView(0.1);
  const kasvuInView = useInView(0.1);
  const geoInView = useInView(0.1);
  const sopiiInView = useInView(0.1);
  const kysymyksetInView = useInView(0.1);
  const formInView = useInView(0.1);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    yritysKuvaus: "",
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
        _subject: "Kenelle sopii -sivu – uusi yhteydenotto",
      }),
    });
    setFormData({ name: "", company: "", email: "", phone: "", yritysKuvaus: "" });
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/herokuva..jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-[#0d0d0d]/70" />
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

        <div className="relative z-[2] max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0]">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
              Miksi valita Leo Digital Suomen nettisivut
            </span>
          </div>

          <div className="mb-10">
            <h1
              className={`text-[clamp(2.2rem,7vw,6rem)] font-display font-bold leading-[0.95] tracking-tight text-[#f0f0f0] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Kenelle ylläpidetyt</span>
              <span className="block relative">
                nettisivut sopii?
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f0f0f0]/10" />
              </span>
            </h1>
          </div>

          <div
            className={`space-y-6 text-base lg:text-lg text-[#a0a0a0] leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug">
              Jos olet yrittäjä, sinun aikasi on todennäköisesti paremmassa käytössä asiakkaissa,
              myynnissä ja itse yrityksesi pyörittämisessä kuin siinä, että otat yhtäkään
              lisähommaa itsellesi.
            </p>
            <p>
              Leo Digital tekee nettisivut puolestasi — ja hoitaa myös niiden teknisen puolen.
            </p>
            <p>
              <strong className="text-[#f0f0f0] font-medium">
                Sinä kerrot mitä yrityksesi tarvitsee.
              </strong>
              <br />
              <strong className="text-[#f0f0f0] font-medium">
                Minä rakennan, julkaisen ja pidän huolen lopusta.
              </strong>
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-start gap-4 mt-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#0d0d0d] px-8 h-14 text-base rounded-full group"
              asChild
            >
              <a href="#yhteydenotto">
                Pyydä maksuton demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
              asChild
            >
              <a href="https://wa.me/358452031377" target="_blank" rel="noopener noreferrer">
                Ota yhteyttä WhatsAppissa
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
              asChild
            >
              <a href="/nettisivut">
                Nettisivut
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowDown className="w-5 h-5 text-[#a0a0a0] animate-bounce" />
        </div>
      </section>

      {/* ── Ehkä tunnistat itsesi jostain näistä? ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div ref={tunnistatkoInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 transition-all duration-700 ${
              tunnistatkoInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
              Tunnistatko itsesi?
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-3xl">
              Ehkä tunnistat itsesi jostain näistä?
            </h2>
          </div>

          <div
            className={`flex flex-col gap-4 transition-all duration-700 delay-100 ${
              tunnistatkoInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {tunnistatko.map((item, i) => (
              <details
                key={item.q}
                open={i === 0}
                className="group border border-[#2a2a2a] rounded-2xl bg-[#111111] overflow-hidden transition-colors hover:border-[#f0f0f0]/20"
              >
                <summary className="flex items-center justify-between gap-4 p-6 lg:p-8 cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg lg:text-xl font-display text-[#f0f0f0] leading-snug">
                    &quot;{item.q}&quot;
                  </h3>
                  <span className="relative shrink-0 w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center text-[#f0f0f0] text-lg leading-none">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 -mt-2 text-[#a0a0a0] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nettisivut ilman verkkosivusäätöä ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div ref={helppoInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`transition-all duration-700 ${
              helppoInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Intro */}
            <div className="mb-16 max-w-4xl">
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-[#f0f0f0] leading-[1.05] mb-8">
                Yrityksen pyörittäminen vie jo kaiken aikasi, siksi Leo Digital on helpottamassa
                arkeasi!
              </h2>
              <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed">
                Sinun ei pitäisi joutua miettimään samalla, missä yrityksesi nettisivut ovat,
                milloin domain pitää uusia, onko SSL-sertifikaatti kunnossa tai miksi joku lomake
                ei yhtäkkiä lähetä viestejä.{" "}
                <strong className="text-[#f0f0f0] font-medium">
                  Siksi Leo Digitalissa ideana ei ole vain tehdä sinulle nettisivuja.
                </strong>{" "}
                Ideana on tehdä koko asiasta mahdollisimman helppo.
              </p>
            </div>

            {/* Yksi paikka, yksi yhteyshenkilö */}
            <div className="mb-20">
              <h3 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-4">
                Yksi paikka. Yksi yhteyshenkilö. Vähemmän säätöä.
              </h3>
              <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed max-w-3xl mb-10">
                Kun nettisivut tehdään kanssani, sinun ei tarvitse rakentaa itsellesi pientä
                verkkosivuprojektia, jota joudut itse ylläpitämään vuodesta toiseen.{" "}
                <strong className="text-[#f0f0f0] font-medium">
                  Minä hoidan teknisen puolen puolestasi.
                </strong>
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {teknisetVastuut.map((item) => (
                  <div key={item.q} className="p-6 border border-[#2a2a2a] bg-[#111111]">
                    <p className="text-sm text-[#a0a0a0] font-mono mb-2">{item.q}</p>
                    <p className="text-lg font-display text-[#f0f0f0]">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed max-w-3xl">
                Ja jos sivuille pitää lisätä uusi palvelu, vaihtaa kuva, päivittää teksti tai tehdä
                kokonaan uusi sivu, sinun ei tarvitse opetella tekemään sitä itse.{" "}
                <strong className="text-[#f0f0f0] font-medium">
                  Laita viesti WhatsAppissa.
                </strong>{" "}
                Siinä se.
              </p>
            </div>

            {/* Yksi paikka vs viisi eri paikkaa */}
            <div className="grid lg:grid-cols-2 gap-6 mb-20">
              <div className="p-8 lg:p-10 border border-[#2a2a2a] bg-[#111111]">
                <h3 className="text-xl font-display text-[#f0f0f0] mb-6">
                  Ei tarvitse tilata viittä eri palvelua viidestä eri paikasta
                </h3>
                <div className="space-y-4 mb-6">
                  {hajallaan.map((text) => (
                    <div key={text} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-[#a0a0a0]" />
                      </div>
                      <p className="text-[#a0a0a0] leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Ja vuoden päästä pitäisi vielä muistaa, millä sähköpostiosoitteella mikäkin
                  palvelu on rekisteröity.{" "}
                  <strong className="text-[#f0f0f0] font-medium">Ei kiitos.</strong>
                </p>
              </div>

              <div className="relative p-8 lg:p-10 border border-[#b8960c]/60 bg-black/30 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <h3 className="text-xl font-display text-[#f0c040] mb-6">
                    Leo Digitalissa kaikki saman katon alla
                  </h3>
                  <p className="text-[#d4a017]/90 leading-relaxed mb-4">
                    Tavoitteena on, että sinun ei tarvitse tietää edes sitä, missä asioiden
                    pitäisi olla.
                  </p>
                  <p className="text-[#d4a017]/90 leading-relaxed">
                    Sinä tiedät, että sinulla on toimivat nettisivut. Minä huolehdin siitä, mitä
                    niiden taustalla tapahtuu.
                  </p>
                </div>
              </div>
            </div>

            {/* Sinä tunnet yrityksesi, minä tunnen verkkosivut */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
              <div>
                <h3 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-4">
                  Sinä tunnet yrityksesi. Minä tunnen verkkosivut.
                </h3>
                <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed">
                  Sinun ei tarvitse muuttua verkkokehittäjäksi saadaksesi yrityksellesi hyvät
                  nettisivut. Sinun ei tarvitse käyttää iltoja teknisten asetusten opetteluun,
                  miettiä mikä palveluntarjoaja sopii mihinkin, tai yrittää ymmärtää jokaista
                  teknistä termiä.
                </p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug mb-4">
                  Riittää, että kerrot minulle mitä tarvitset.
                </p>
                <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed">
                  Minä hoidan toteutuksen.
                </p>
              </div>
            </div>

            {/* Helppous ei tarkoita vähemmän */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20">
              <div>
                <h3 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-6">
                  Helppous ei tarkoita sitä, että saat vähemmän.
                </h3>
                <div className="space-y-5">
                  {helppoudenHyodyt.map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                      </div>
                      <p className="text-[#a0a0a0] leading-relaxed">Saat {text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed mb-4">
                  Ei tikettijärjestelmää. Ei kymmentä eri kirjautumista. Ei &quot;ota yhteyttä
                  hosting-palvelusi tekniseen tukeen&quot; -vastauksia silloin kun et edes tiedä
                  mikä hosting-palvelu sinulla on.
                </p>
                <p className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug">
                  Laita minulle viesti. Minä selvitän.
                </p>
              </div>
            </div>

            {/* Yksinkertainen ratkaisu yrittäjälle */}
            <div className="pt-16 border-t border-[#2a2a2a] max-w-3xl">
              <h3 className="text-2xl lg:text-3xl font-display text-[#f0f0f0] mb-4">
                Yksinkertainen ratkaisu yrittäjälle
              </h3>
              <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed mb-6">
                Jos haluat itse hallita jokaista palvelua, asetusta ja teknistä yksityiskohtaa,
                siihen löytyy varmasti hyviä vaihtoehtoja. Mutta jos haluat käyttää aikasi siihen,
                missä olet itse parhaimmillasi — oman yrityksesi pyörittämiseen — nettisivujen ei
                tarvitse olla yksi asia lisää hoidettavaksi.
              </p>
              <p className="text-2xl lg:text-3xl font-display text-[#f0f0f0]">
                Leo Digital hoitaa digin puolestasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Entä jos osaan tehdä nettisivut itse? ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div ref={itseInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16 transition-all duration-700 ${
              itseInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
                <span className="w-8 h-px bg-[#f0f0f0]/30" />
                Entä jos osaan itse?
              </span>
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0]">
                Sitten tee ne itse. Oikeasti.
              </h2>
            </div>
            <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed">
              Jos sinulla on aikaa, kiinnostusta ja osaamista, itse tekeminen voi olla erittäin
              hyvä vaihtoehto. Mutta älä ajattele asiaa vain näin: &quot;Nettisivujen tekeminen
              itse maksaa 0 €.&quot; Todellisuudessa maksat omalla ajallasi. Ja nettisivujen
              tekeminen ei lopu siihen, että etusivu näyttää hyvältä. Sen jälkeen tulee esimerkiksi:
            </p>
          </div>

          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-100 ${
              itseInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {josOsaatItse.map((item) => (
              <div key={item.number} className="p-8 border border-[#2a2a2a] bg-[#111111]">
                <span className="font-mono text-sm text-[#606060] block mb-4">{item.number}</span>
                <h3 className="text-xl font-display text-[#f0f0f0] mb-3">{item.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
              itseInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg lg:text-xl font-display text-[#f0f0f0] leading-snug">
              Jos nämä asiat kiinnostavat sinua, hienoa. Tee itse.
            </p>
            <p className="text-lg lg:text-xl font-display text-[#f0f0f0] leading-snug">
              Jos taas ajattelet jo tässä kohtaa &quot;ei helvetti, en halua käyttää aikaani
              tähän&quot; — silloin voidaan jutella.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mitä minä oikeastaan myyn ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sininen.tausta.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/85" />
        </div>
        <div ref={myynInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-24 transition-all duration-700 ${
              myynInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
                <span className="w-8 h-px bg-[#f0f0f0]/30" />
                Mitä oikeastaan myyn
              </span>
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-6">
                En myy pelkkää nettisivua.
              </h2>
              <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed">
                Koska nettisivu itsessään ei ole kovin hyödyllinen, jos kukaan ei löydä sitä,
                asiakkaalle ei selviä mitä yrityksesi tekee tai sivujen päivittäminen on yhtä
                tuskaa. Leo Digitalilla ideana on tehdä koko hommasta mahdollisimman helppo.
              </p>
            </div>
            <div className="p-8 lg:p-10 border border-[#2a2a2a] rounded-2xl bg-[#111111]/80 backdrop-blur-sm">
              <div className="space-y-5">
                {mitaMyyn.map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                    </div>
                    <p className="text-[#a0a0a0] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nettisivut eivät ole valmis tuote ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div ref={kasvuInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-start transition-all duration-700 ${
              kasvuInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
                <span className="w-8 h-px bg-[#f0f0f0]/30" />
                Jatkuva kehitys
              </span>
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-6">
                Nettisivut eivät ole valmis tuote
              </h2>
              <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed mb-4">
                Yritys muuttuu. Palvelut muuttuvat. Hinnat muuttuvat. Aukioloajat muuttuvat.
                Joskus koko yritys muuttuu. Siksi nettisivujen ei pitäisi jäädä samaan tilaan
                kolmeksi vuodeksi julkaisun jälkeen.
              </p>
              <p className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug">
                Julkaisu ei ole loppu. Se on vasta alku.
              </p>
            </div>
            <div>
              <p className="text-sm text-[#a0a0a0] mb-6">
                Myöhemmin voidaan lisätä esimerkiksi:
              </p>
              <div className="flex flex-wrap gap-3">
                {kasvunAskeleet.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-[#2a2a2a] text-sm text-[#a0a0a0] bg-[#111111]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google ja tekoälyhaut ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#111111]">
        <div ref={geoInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 max-w-3xl transition-all duration-700 ${
              geoInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
              SEO ja GEO
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-6">
              Entä Google ja tekoälyhaut?
            </h2>
            <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed mb-4">
              Hyvä nettisivu ei tarkoita automaattisesti sitä, että sivusi näkyvät Googlessa
              ensimmäisenä. Etenkin kilpailuilla aloilla tarvitaan jatkuvaa SEO-työtä. Mutta
              lähtökohta voidaan tehdä oikein.
            </p>
            <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed">
              Ihmiset eivät enää aina kirjoita Googleen yhtä hakusanaa ja selaa kymmentä sivua.
              He voivat kysyä kokonaisen kysymyksen:
            </p>
          </div>

          <div
            className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-100 ${
              geoInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              "Mikä olisi hyvä nettisivutoimisto pienelle suomalaiselle yritykselle?",
              "Mistä löydän hyvän autokorjaamon Helsingissä?",
              "Mitä asioita autokorjaamon nettisivuilla pitäisi olla?",
            ].map((q) => (
              <p
                key={q}
                className="border-l-2 border-[#f0f0f0]/20 pl-6 py-1 text-lg font-display italic text-[#f0f0f0] leading-snug"
              >
                &quot;{q}&quot;
              </p>
            ))}
          </div>

          <div
            className={`max-w-3xl transition-all duration-700 delay-200 ${
              geoInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed">
              Siksi yrityksen verkkosisällön pitää olla muutakin kuin kasa avainsanoja. Sen pitää
              olla selkeää, hyödyllistä ja oikeasti vastata asiakkaan kysymyksiin. SEO auttaa
              löytymään hakukoneista. GEO auttaa tekemään yrityksen tiedoista ja sisällöstä
              mahdollisimman ymmärrettävää myös generatiivisille hakupalveluille.
            </p>
          </div>
        </div>
      </section>

      {/* ── Milloin Leo Digital ei ehkä ole sinulle ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div ref={sopiiInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 transition-all duration-700 ${
              sopiiInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
              Sopiiko tämä sinulle?
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-3xl">
              Milloin Leo Digital ei ehkä ole sinulle?
            </h2>
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${
              sopiiInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-8 lg:p-10 border border-[#2a2a2a] bg-[#111111]">
              <h3 className="text-xl font-display text-[#f0f0f0] mb-6">Ei ehkä sinulle, jos...</h3>
              <div className="space-y-4">
                {eiEhkaSinulle.map((text) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-[#a0a0a0]" />
                    </div>
                    <p className="text-[#a0a0a0] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-8 lg:p-10 border border-[#b8960c]/60 rounded-none bg-black/30 overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="relative">
                <h3 className="text-xl font-display text-[#f0c040] mb-6">
                  Kannattaa jutella, jos haluat...
                </h3>
                <div className="space-y-4">
                  {kannattaaJutella.map((text) => (
                    <div key={text} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-black/30 border border-[#b8960c]/50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#d4a017]" />
                      </div>
                      <p className="text-[#d4a017]/90 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sinun ei tarvitse tietää mitä tarvitset ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/punanen.tausta.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/85" />
        </div>
        <div ref={kysymyksetInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-all duration-700 ${
              kysymyksetInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-6">
                Sinun ei tarvitse tietää, mitä tarvitset.
              </h2>
              <p className="text-base lg:text-lg text-[#a0a0a0] leading-relaxed mb-4">
                Tämä on ehkä tärkein asia koko sivulla. Sinun ei tarvitse tulla luokseni valmiin
                suunnitelman kanssa. Ei tarvitse tietää kuinka monta sivua tarvitset, mitä
                teknologiaa pitäisi käyttää, mitä SEO tarkoittaa tai mitä sisältöä etusivulle
                pitäisi kirjoittaa.
              </p>
              <p className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug">
                Riittää, että tunnet oman yrityksesi.
              </p>
            </div>
            <div className="p-8 lg:p-10 border border-[#2a2a2a] bg-[#111111]/80 backdrop-blur-sm">
              <p className="text-sm text-[#a0a0a0] mb-6">Kerro minulle:</p>
              <div className="space-y-5">
                {perusKysymykset.map((q) => (
                  <p key={q} className="text-lg lg:text-xl font-display text-[#f0f0f0]">
                    {q}
                  </p>
                ))}
              </div>
              <p className="text-[#a0a0a0] leading-relaxed mt-6 pt-6 border-t border-[#2a2a2a]">
                Minä autan rakentamaan loput.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kenelle Leo Digitalin kotisivut sopivat ── */}
      <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#111111]">
        <div ref={toimialatInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 transition-all duration-700 ${
              toimialatInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
              Toimialat
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-3xl">
              Kenelle Leo Digitalin kotisivut sopivat?
            </h2>
          </div>

          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${
              toimialatInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {toimialat.map((item) => (
              <div
                key={item.title}
                className="flex flex-col p-8 border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors bg-[#0d0d0d]"
              >
                <span className="text-3xl mb-4">{item.icon}</span>
                <h3 className="text-xl font-display text-[#f0f0f0] mb-3">{item.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm flex-1">{item.desc}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    className="inline-flex items-center gap-2 text-sm text-[#f0f0f0] mt-6 group"
                  >
                    {item.link.label}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Yhteydenottolomake ── */}
      <section id="yhteydenotto" className="relative py-24 lg:py-32 border-t border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/taustakuva.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/80" />
        </div>
        <div ref={formInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`mb-16 transition-all duration-700 ${
              formInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
              Ja jos olet edelleen epävarma...
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-2xl mb-6">
              Pyydä maksuton demo
            </h2>
            <p className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug max-w-2xl mb-6">
              Sinä hoidat yritystäsi.
              <br />
              Minä hoidan digin.
            </p>
            <p className="text-lg text-[#a0a0a0] leading-relaxed max-w-2xl">
              Älä osta vielä mitään. Laita viesti ja kerro lyhyesti yrityksestäsi ja mitä olet
              ajatellut nettisivuista. Saat minulta ensin näkemyksen siitä, mitä yrityksesi
              oikeasti tarvitsee. Halutessasi teen myös maksuttoman demon, josta näet jo
              etukäteen miltä suunta voisi näyttää.{" "}
              <strong className="text-[#f0f0f0] font-medium">
                Ei sitoutumista. Ei painostusta.
              </strong>
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
                    <label htmlFor="ln-name" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Nimesi *
                    </label>
                    <input
                      type="text"
                      id="ln-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="Nimesi"
                    />
                  </div>
                  <div>
                    <label htmlFor="ln-company" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Yritys
                    </label>
                    <input
                      type="text"
                      id="ln-company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="Yrityksen nimi (valinnainen)"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ln-email" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Sähköposti *
                    </label>
                    <input
                      type="email"
                      id="ln-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="sahkoposti@esimerkki.fi"
                    />
                  </div>
                  <div>
                    <label htmlFor="ln-phone" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                      Puhelin
                    </label>
                    <input
                      type="tel"
                      id="ln-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                      placeholder="+358 40 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ln-yritys" className="block text-sm font-medium text-[#f0f0f0] mb-2">
                    Kerro lyhyesti yrityksestäsi ja mitä olet ajatellut nettisivuista
                  </label>
                  <textarea
                    id="ln-yritys"
                    rows={6}
                    value={formData.yritysKuvaus}
                    onChange={(e) => setFormData({ ...formData, yritysKuvaus: e.target.value })}
                    className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors resize-none"
                    placeholder="Mitä teette? Onko teillä jo sivut? Mikä niissä mättää, tai mitä toivoisit uusilta sivuilta?"
                  />
                </div>

                <p className="text-xs text-[#a0a0a0]">
                  Lähettämällä lomakkeen hyväksyt, että otamme sinuun yhteyttä.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#0d0d0d] px-8 h-14 text-base rounded-full group cursor-pointer"
                  >
                    Lähetä viesti
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
                    asChild
                  >
                    <a href="https://wa.me/358452031377" target="_blank" rel="noopener noreferrer">
                      Ota yhteyttä WhatsAppissa
                    </a>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
