"use client";

import { useEffect, useRef, useState } from "react";

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

const faqItems = [
  {
    q: "Mitä autokorjaamon nettisivut maksavat?",
    a: (
      <>
        Autokorjaamon nettisivut saat Leo Digitalilta alkaen{" "}
        <strong className="text-[#f0f0f0] font-medium">99 € + 49 €/kk</strong>. Kuukausihintaan
        sisältyvät hosting, domain, SSL-sertifikaatti, varmuuskopiot sekä sivuston päivitykset ja
        muutokset WhatsAppin kautta.
        <br />
        <br />
        Jos tarvitset esimerkiksi ajanvarausjärjestelmän, verkkokaupan, laajempia integraatioita
        tai muita räätälöityjä toimintoja, kokonaisuus voidaan suunnitella erikseen.
      </>
    ),
  },
  {
    q: "Mitä autokorjaamon kotisivuihin kuuluu?",
    a: (
      <>
        Rakennamme autokorjaamolle kokonaisuuden, joka toimii sekä asiakkaalle että hakukoneille.
        Sivustoon voidaan sisällyttää esimerkiksi:
        <ul className="mt-3 mb-3 space-y-1.5">
          {[
            "etusivu",
            "korjaamon palvelut ja huollot",
            "tietoa korjaamosta ja henkilökunnasta",
            "yhteystiedot ja sijainti",
            "ajanvaraus tai yhteydenottolomake",
            "palvelukohtaisia sisältöjä",
            "hinnasto tai hintaesimerkkejä",
            "Google Maps -kartta",
            "WhatsApp-yhteydenotto",
            "asiakasarvostelut ja referenssit",
          ].map((li) => (
            <li key={li} className="flex items-start gap-2.5">
              <span className="mt-2.5 w-1 h-1 rounded-full bg-[#606060] shrink-0" />
              {li}
            </li>
          ))}
        </ul>
        Sivujen tarkka rakenne tehdään aina korjaamon palveluiden ja asiakkaiden tarpeiden
        mukaan.
      </>
    ),
  },
  {
    q: "Miten autokorjaamo voi saada uusia asiakkaita Googlen kautta?",
    a: (
      <>
        Autokorjaamo voi saada uusia asiakkaita Googlen kautta tekemällä palveluistaan,
        sijainnistaan ja osaamisestaan selkeästi ymmärrettäviä sekä hakukoneille että
        asiakkaille.
        <br />
        <br />
        Tähän vaikuttavat esimerkiksi sivuston rakenne, palvelukohtainen sisältö, tekninen SEO,
        paikallinen löydettävyys, mobiilikäytettävyys ja Google Business Profile -profiili.
        <br />
        <br />
        Tavoitteena on, että asiakas löytää korjaamon silloin, kun hän etsii esimerkiksi huoltoa,
        korjausta tai tiettyä autohuollon palvelua omalla alueellaan.
      </>
    ),
  },
  {
    q: 'Voiko autokorjaamo löytyä hauilla kuten "autokorjaamo + paikkakunta"?',
    a: (
      <>
        Kyllä – ja juuri paikalliset haut ovat autokorjaamolle erityisen kiinnostavia.
        <br />
        <br />
        Esimerkiksi{" "}
        <strong className="text-[#f0f0f0] font-medium">
          &quot;autokorjaamo Tampere&quot;, &quot;autohuolto Turku&quot;, &quot;jarruremontti
          Lahti&quot;
        </strong>{" "}
        tai <strong className="text-[#f0f0f0] font-medium">&quot;BMW-huolto Oulu&quot;</strong>{" "}
        ovat hakuja, joissa asiakkaalla on usein jo konkreettinen tarve.
        <br />
        <br />
        Sivuston rakenne ja sisältö voidaan suunnitella niin, että yrityksen palvelut, sijainti
        ja erikoisosaaminen ovat hakukoneille mahdollisimman selkeitä.
      </>
    ),
  },
  {
    q: "Miten paikallinen SEO toimii autokorjaamolle?",
    a: (
      <>
        Paikallisessa SEO tavoitteena on auttaa hakukoneita ymmärtämään,{" "}
        <strong className="text-[#f0f0f0] font-medium">
          mikä yritys on, mitä palveluita se tarjoaa ja millä alueella se toimii
        </strong>
        .
        <br />
        <br />
        Autokorjaamolle tämä tarkoittaa esimerkiksi selkeitä palvelusivuja, sijainti- ja
        yhteystietoja, paikallisesti relevanttia sisältöä sekä hyvin rakennettua Google Business
        Profile -profiilia.
        <br />
        <br />
        Hyvä paikallinen SEO auttaa yritystä tavoittamaan ihmisiä, jotka etsivät juuri kyseisellä
        alueella autohuoltoa tai korjaamopalveluita.
      </>
    ),
  },
  {
    q: "Miten GEO auttaa autokorjaamoa näkymään tekoälyhauissa?",
    a: (
      <>
        GEO eli{" "}
        <strong className="text-[#f0f0f0] font-medium">Generative Engine Optimization</strong>{" "}
        tarkoittaa verkkosisällön kehittämistä niin, että myös tekoälypohjaiset hakupalvelut
        pystyvät ymmärtämään yrityksen palvelut, sijainnin ja asiantuntemuksen mahdollisimman
        selkeästi.
        <br />
        <br />
        Autokorjaamolle tämä tarkoittaa esimerkiksi sitä, että sivustolta löytyy selkeät
        vastaukset kysymyksiin kuten:
        <ul className="mt-3 mb-3 space-y-1.5">
          {[
            "Mitä palveluita korjaamo tarjoaa?",
            "Missä korjaamo sijaitsee?",
            "Mitä automerkkejä korjaamo huoltaa?",
            "Millaisia korjauksia siellä tehdään?",
            "Kenelle palvelu sopii?",
            "Miten huoltoon voi varata ajan?",
          ].map((li) => (
            <li key={li} className="flex items-start gap-2.5">
              <span className="mt-2.5 w-1 h-1 rounded-full bg-[#606060] shrink-0" />
              {li}
            </li>
          ))}
        </ul>
        Hyvin rakennettu sisältö auttaa sekä hakukoneita että tekoälypohjaisia hakupalveluita
        ymmärtämään yritystä.
      </>
    ),
  },
  {
    q: "Voiko asiakas varata huoltoajan suoraan nettisivuilta?",
    a: (
      <>
        Kyllä. Sivustolle voidaan yhdistää olemassa oleva ajanvarausjärjestelmä tai rakentaa
        yhteydenottoa varten selkeä varauslomake.
        <br />
        <br />
        Tavoitteena on tehdä yhteydenotosta mahdollisimman helppo: asiakkaan ei pitäisi joutua
        etsimään puhelinnumeroa tai lähettämään sähköpostia vain kysyäkseen, miten huoltoon
        pääsee.
      </>
    ),
  },
  {
    q: "Kannattaako autokorjaamon näyttää hinnasto verkossa?",
    a: (
      <>
        Kyllä, jos hinnasto tai hintaesimerkit voidaan esittää selkeästi.
        <br />
        <br />
        Autokorjaamossa asiakkaan ensimmäinen kysymys on usein{" "}
        <strong className="text-[#f0f0f0] font-medium">&quot;mitä tämä maksaa?&quot;</strong>.
        Selkeä hinnasto, hintaesimerkit tai vähintään hinnoitteluperiaatteet voivat madaltaa
        yhteydenoton kynnystä ja vähentää turhia hintakyselyitä.
        <br />
        <br />
        Kaikkia töitä ei kuitenkaan tarvitse hinnoitella kiinteästi. Myös esimerkiksi alkavat
        hinnat tai esimerkkihinnat voivat auttaa asiakasta hahmottamaan palvelun kustannustasoa.
      </>
    ),
  },
  {
    q: "Tarvitseeko autokorjaamo oman sivun jokaiselle palvelulle?",
    a: (
      <>
        Ei välttämättä, mutta tärkeimmille palveluille omat sisältösivut voivat olla erittäin
        hyödyllisiä.
        <br />
        <br />
        Esimerkiksi{" "}
        <strong className="text-[#f0f0f0] font-medium">
          määräaikaishuolto, jarruhuolto, ilmastointihuolto, rengaspalvelut, vikadiagnostiikka ja
          katsastukseen valmistava huolto
        </strong>{" "}
        voivat kaikki olla asiakkaan itsenäisesti hakemia palveluita.
        <br />
        <br />
        Jos kaikki palvelut on piilotettu yhdelle lyhyelle sivulle, hakukoneen on vaikeampi
        ymmärtää yrityksen tarjoaman palveluvalikoiman laajuutta.
      </>
    ),
  },
  {
    q: "Mikä tekee Leo Digitalin autokorjaamon nettisivuista erilaiset?",
    a: (
      <>
        En tee autokorjaamoille vain yleisiä yrityssivuja.
        <br />
        <br />
        Minulla on{" "}
        <strong className="text-[#f0f0f0] font-medium">
          yli kuuden vuoden kokemus BMW- ja Mercedes-Benz-merkkihuolloista
        </strong>
        , joten tunnen autoalan arkea myös toisesta näkökulmasta. Ymmärrän esimerkiksi sen,
        miten asiakkaat etsivät huolto- ja korjauspalveluita, millaisia kysymyksiä he esittävät
        ja mitä tietoja korjaamon sivuilta oikeasti tarvitaan.
        <br />
        <br />
        Siksi tavoitteena ei ole tehdä vain hienoa sivua.{" "}
        <strong className="text-[#f0f0f0] font-medium">
          Tavoitteena on rakentaa nettisivu, joka auttaa korjaamoa saamaan enemmän
          yhteydenottoja, ajanvarauksia ja löydettävyyttä.
        </strong>
      </>
    ),
  },
];

export function AutokorjaamoFaqSection() {
  const faqInView = useInView(0.1);

  return (
    <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
      <div ref={faqInView.ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`mb-16 transition-all duration-700 ${
            faqInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-3xl mb-6">
            Usein kysytyt kysymykset autokorjaamon nettisivuista
          </h2>
          <p className="text-lg lg:text-xl text-[#a0a0a0] leading-relaxed max-w-2xl">
            Mietitkö, mitä autokorjaamon nettisivujen uudistaminen maksaa, miten ne voivat
            auttaa Google-näkyvyydessä tai mitä sivustolle kannattaa sisällyttää? Kokosimme
            yleisimmät kysymykset ja vastaukset yhteen.
          </p>
        </div>

        <div
          className={`flex flex-col gap-4 transition-all duration-700 delay-100 ${
            faqInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group border border-[#2a2a2a] rounded-2xl bg-[#111111] overflow-hidden transition-colors hover:border-[#f0f0f0]/20"
            >
              <summary className="flex items-center justify-between gap-4 p-6 lg:p-8 cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg lg:text-xl font-display text-[#f0f0f0] leading-snug">
                  {item.q}
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
  );
}
