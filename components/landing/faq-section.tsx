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

export function FaqSection() {
  const faqInView = useInView(0.1);

  return (
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
  );
}
