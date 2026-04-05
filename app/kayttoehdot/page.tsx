import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Käyttö- ja sopimusehdot | Leo Digital",
  description: "Leo Digitalin pakettien käyttö- ja sopimusehdot. Perus, Plus ja Premium + Kirjanpito -pakettien ehdot.",
};

export default function KayttoehdotPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navigation />

      <section className="pt-40 pb-32 px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-6">
            Leo Digital
          </span>
          <h1 className="text-4xl lg:text-5xl font-light text-[#f0f0f0] leading-tight mb-6">
            Pakettien käyttö- ja sopimusehdot
          </h1>
          <p className="text-[#a0a0a0] text-lg font-light leading-relaxed">
            Nämä ehdot koskevat kaikkia Leo Digitalin palvelupaketteja, mukaan lukien verkkosivuston rakentaminen sekä ylläpitopaketit. Sopimus astuu voimaan, kun asiakas hyväksyy palvelun tilaamalla sen tai maksamalla laskun.
          </p>
        </div>

        {/* Verkkosivuston rakentaminen */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl font-light text-[#f0f0f0] mb-6">Verkkosivuston rakentaminen</h2>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p><span className="text-[#f0f0f0]">Projektin laajuus ja suunnitelma:</span> Ennen rakentamisen aloittamista Leo Digital ja asiakas sopivat yhdessä sivuston tavoitteista ja sisällöstä, joiden pohjalta Leo Digital laatii karkean suunnitelman. Tämä suunnitelma määrittelee projektin laajuuden.</p>
            <p><span className="text-[#f0f0f0]">Valmistuminen:</span> Sivusto katsotaan valmiiksi, kun se vastaa sovittua karkeaa suunnitelmaa. Asiakas voi seurata kehitystä ja esittää muutosehdotuksia, mutta tämä ei oikeuta koko sivurakenteen muuttamiseen, uusien alisivujen lisäämiseen tai muihin merkittäviin laajennuksiin, joita ei ole kirjattu alkuperäiseen suunnitelmaan, ellei niistä sovita erikseen kirjallisesti.</p>
            <p><span className="text-[#f0f0f0]">Muutokset projektin aikana:</span> Jos asiakas haluaa projektin aikana merkittäviä muutoksia alkuperäiseen suunnitelmaan, kuten uuden palvelusivun, uuden osion tai toiminnallisuuden, näistä sovitaan erikseen ja ne laskutetaan mahdollisesti lisätyönä (30 €/h + ALV).</p>
            <p><span className="text-[#f0f0f0]">Reklamaatio:</span> Asiakkaalla on oikeus reklamoida, jos toimitettava sivusto poikkeaa olennaisesti sovitusta suunnitelmasta ilman, että asiasta on erikseen sovittu. Reklamaatio on tehtävä kirjallisesti 14 päivän kuluessa sivuston luovuttamisesta.</p>
            <p><span className="text-[#f0f0f0]">Materiaalin toimittaminen:</span> Asiakas sitoutuu toimittamaan tarvittavan materiaalin (tekstit, kuvat, logot, tiedot) sovitussa aikataulussa. Asiakkaan aiheuttamat viivästykset eivät oikeuta hinnanalennukseen, ja ne voivat siirtää toimitusajankohtaa vastaavasti.</p>
            <p><span className="text-[#f0f0f0]">Immateriaalioikeudet:</span> Leo Digital pidättää oikeuden kaikkeen tuottamaansa koodiin, designiin ja tekniseen rakenteeseen. Asiakas saa käyttöoikeuden sivustoon palvelusopimuksen voimassaoloajaksi. Sopimuksen päättyessä asiakkaalla ei ole oikeutta vaatia sivuston koodia tai teknistä rakennetta luovutettavaksi, ellei tästä ole erikseen kirjallisesti sovittu.
            </p>
          </div>
        </div>

        {/* Domain, hosting ja infrastruktuuri */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl font-light text-[#f0f0f0] mb-6">Domain, hosting ja infrastruktuuri</h2>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p><span className="text-[#f0f0f0]">Omistajuus:</span> Leo Digital hankkii ja rekisteröi asiakkaan verkkotunnuksen (domainin) sekä hosting-palvelun omiin nimiinsä. Nämä pysyvät Leo Digitalin hallinnassa koko sopimuksen ajan.</p>
            <p><span className="text-[#f0f0f0]">Sopimuksen päättyminen:</span> Sopimuksen päättyessä asiakkaalla ei ole automaattista oikeutta säilyttää verkkotunnusta tai hostingia. Verkkotunnuksen siirtämisestä asiakkaan omiin nimiin voidaan sopia erikseen. Verkkotunnus uusitaan vuosittain Leo Digitalin toimesta — jos sopimus loppuu kesken vuosikauden, jäljellä olevaa osuutta ei hyvitetä.</p>
            <p><span className="text-[#f0f0f0]">SSL-sertifikaatti:</span> Kaikki paketit sisältävät SSL-sertifikaatin, jonka Leo Digital ylläpitää aktiivisesti.</p>
          </div>
        </div>

        {/* Poikkeuksellinen liikenne ja väärinkäyttö */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl font-light text-[#f0f0f0] mb-6">Poikkeuksellinen liikenne ja väärinkäyttö</h2>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p><span className="text-[#f0f0f0]">Botit ja hyökkäysliikenne:</span> Jos asiakkaan sivustolle kohdistuu poikkeuksellisen suuri kävijämäärä, joka johtuu bottiaktiivisuudesta, DDoS-hyökkäyksestä tai muusta ulkopuolisesta väärinkäytöstä, ja tämä aiheuttaa Leo Digitalin infrastruktuurikustannuksissa huomattavan nousun normaalitasosta, Leo Digitalilla on oikeus veloittaa syntyneet ylimääräiset kustannukset asiakkaalta todellisten kustannusten mukaan.</p>
            <p><span className="text-[#f0f0f0]">Ilmoitusvelvollisuus:</span> Leo Digital pyrkii ilmoittamaan asiakkaalle poikkeuksellisesta tilanteesta mahdollisimman nopeasti. Tarvittaessa Leo Digitalilla on oikeus tilapäisesti rajoittaa tai keskeyttää sivuston liikenne vahingon minimoimiseksi ilman ennakkoilmoitusta.</p>
            <p><span className="text-[#f0f0f0]">Asiakkaan vastuu:</span> Asiakas vastaa siitä, että sivustoa käytetään asianmukaisesti eikä se houkuttele väärinkäyttöä. Jos poikkeuksellinen liikenne johtuu asiakkaan omasta toiminnasta tai laiminlyönnistä, asiakas vastaa kaikista syntyneistä kustannuksista.</p>
          </div>
        </div>

        {/* Käyttökatko ja palvelun jatkuvuus */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl font-light text-[#f0f0f0] mb-6">Käyttökatko ja palvelun jatkuvuus</h2>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p><span className="text-[#f0f0f0]">Palautuminen:</span> Jos sivusto kaatuu teknisestä syystä, Leo Digitalilla on oikeus ja velvollisuus palauttaa palvelu toimintaan mahdollisimman nopeasti normaaliolosuhteissa. Tavoiteaika on 1–48 tuntia arkipäivisin.</p>
            <p><span className="text-[#f0f0f0]">Vastuunrajoitus käyttökatkoissa:</span> Leo Digital ei vastaa kolmansista osapuolista johtuvista palvelukatkoksista. Leo Digital ei korvaa liiketoiminnan keskeytymisestä tai muista välillisistä vahingoista aiheutuneita menetyksiä.</p>
          </div>
        </div>

        {/* Yhteiset ehdot */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl font-light text-[#f0f0f0] mb-6">Yhteiset ehdot kaikille paketeille</h2>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p>Kaikki ylläpitopaketit sisältävät domain-rekisteröinnin, SSL-sertifikaatin ja hostingin.</p>
            <p>Ylläpitopaketin voi vaihtaa pienemmästä suurempaan tarvittaessa ilman lisäkustannuksia.</p>
            <p>Sopimus on määräaikainen 6kk, jonka jälkeen se muuttuu toistaiseksi voimassa olevaksi. Tämä jälkeen irtisanomisaika on 30 päivää. Irtisanomisilmoitus toimitetaan kirjallisesti sähköpostitse osoitteeseen <span className="text-[#f0f0f0]">leo@leodigital.fi</span>.</p>
            <p>Sopimuksen loppuessa asiakas ei saa pitää domainosoitettaan, eikä asiakas itse omista domainia tai hostingia ellei erikseen sovita. Domain osoite maksetaan vuodeksi kerralla, ja kun kausi on loppu domain osoite voi vapautua.</p>
            <p>Leo Digital pidättää oikeuden päivittää hintoja tai ehtoja 30 päivän ennakkoilmoituksella. Asiakkaalla on tällöin oikeus irtisanoa sopimus ilman ylimääräistä irtisanomisaikaa.</p>
            <p>Asiakas sitoutuu toimittamaan tarvittavan materiaalin (tekstit, kuvat, tiedot) sovitussa aikataulussa. Viiveet asiakkaan puolelta eivät oikeuta hinnanalennukseen.</p>
            <p><span className="text-[#f0f0f0]">Maksuehto ja viivästyskorko:</span> Laskut erääntyvät 14 päivän kuluessa laskun päiväyksestä. Maksamattomille laskuille peritään viivästyskorkoa korkolain mukaisesti. Leo Digitalilla on oikeus keskeyttää palvelu, jos maksu on yli 30 päivää myöhässä, ilman erillistä irtisanomisilmoitusta.</p>
            <p><span className="text-[#f0f0f0]">Tietosuoja:</span> Leo Digital käsittelee asiakastietoja ainoastaan palvelun tuottamisen tarkoituksessa EU:n tietosuoja-asetuksen (GDPR) mukaisesti. Tietoja ei luovuteta kolmansille osapuolille ilman asiakkaan suostumusta.</p>
          </div>
        </div>

        {/* Perus */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-2xl font-light text-[#f0f0f0]">Perus-paketti</h2>
            <span className="font-mono text-sm text-[#a0a0a0]">14 €/kk + ALV</span>
          </div>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p>Perus-paketti on tarkoitettu pienyrityksille ja aloittaville yrityksille. Paketti kattaa domain-rekisteröinnin ja uusinnan, SSL-sertifikaatin, hosting-palvelun sekä automaattiset varmuuskopiot.</p>
            <p>Paketti ei sisällä sisältöpäivityksiä, SEO parannuksia, eikä muita lisäpalveluja. Lisätyöt laskutetaan (30 €/h + ALV).</p>
            <p>Tuki koskee ainoastaan palvelun tekniseen toimivuuteen liittyviä kysymyksiä sähköpostitse, vastausaika 0–5 arkipäivää.</p>
          </div>
        </div>

        {/* Plus */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-2xl font-light text-[#f0f0f0]">Plus-paketti</h2>
            <span className="font-mono text-sm text-[#a0a0a0]">39 €/kk + ALV</span>
          </div>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p>Paketti kattaa domain-rekisteröinnin ja uusinnan, SSL-sertifikaatin, hosting-palvelun sekä automaattiset varmuuskopiot.</p>
            <p><span className="text-[#f0f0f0]">Kuukausipäivitys:</span> Asiakas voi pyytää yhden sisältöpäivityksen kuukaudessa, esimerkiksi uuden alasivun, median lisäämisen/poiston, blogikirjoituksen tai muuta muokkausta vaativaa työtä. (Huom. Sisältää noin 2h työtä, ja isommat päivitykset sovitaan erikseen.) Päivityspyynnöt tulee toimittaa kuukauden 20.päivän mennessä. Käyttämättä jäänyt kuukausipäivitys ei siirry seuraavalle kuukaudelle.</p>
            <p><span className="text-[#f0f0f0]">SEO ja näkyvyys:</span> Paketti sisältää perus hakukoneoptimoinnin seurannan ja kehitystyön joka päivityksen yhteydessä.</p>
             <p><span className="text-[#f0f0f0]">Kuukausiraportti:</span> Paketti sisältää kuukausittaisen raportin, joka kokoaa sivuston näkyvyyden ja kävijätiedot, sekä mahdolliset parannusehdotukset. Raportti toimitetaan sähköpostitse kuukauden lopussa.</p>
            <p><span className="text-[#f0f0f0]">Tuki:</span> Tekninen tuki WhatsAppin ja sähköpostin kautta, vastausaika 0–2 arkipäivää.</p>
          </div>
        </div>

        {/* Premium + Kirjanpito */}
        {/* <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-2xl font-light text-[#f0f0f0]">Premium + Kirjanpito -paketti</h2>
            <span className="font-mono text-sm text-[#a0a0a0]">149 €/kk + ALV</span>
          </div>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p>Premium + Kirjanpito on kokonaisvaltainen digitaalinen kumppanuus, joka yhdistää kaikki Plus-paketin palvelut sekä kirjanpitopalvelun ja laajan markkinointituen.</p>
            <p><span className="text-[#f0f0f0]">Kirjanpito:</span> Kirjanpitopalvelu toteutetaan yhteistyössä Repolan kanssa. Kirjanpitoa koskevat ehdot, vastuut ja laajuus määritetään erikseen kirjanpitosopimuksessa, joka solmitaan asiakkaan, Leo Digitalin ja Repolan välillä.</p>
            <p><span className="text-[#f0f0f0]">Jatkuva kehitystyö:</span> Paketti sisältää jatkuvan verkkosivukehityksen ilman erillistä tuntilaskutusta sovitun laajuuden puitteissa. Erittäin laajat hankkeet (yli 10 h/kk) sovitaan erikseen.</p>
            <p><span className="text-[#f0f0f0]">Markkinointi ja some:</span> Paketti kattaa laajan markkinointituen sekä sosiaalisen median hallinnan sovittujen kanavien osalta. Mainosbudjetit eivät sisälly pakettihintaan ja laskutetaan erikseen.</p>
            <p><span className="text-[#f0f0f0]">Strategia:</span> Kuukausittaiset strategiapalaverit (etä tai paikan päällä) asiakkaan tilanteen ja tavoitteiden mukaan. Asiakas saa henkilökohtaisen yhteyshenkilön koko kumppanuuden ajaksi.</p>
            <p><span className="text-[#f0f0f0]">Räätälöinti:</span> Pakettiin voidaan lisätä asiakkaan tarpeiden mukaisia lisäominaisuuksia erillisellä sopimuksella.</p>
          </div>
        </div> */}

        {/* Vastuunrajoitus */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl font-light text-[#f0f0f0] mb-6">Vastuunrajoitus</h2>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p>Leo Digital ei vastaa välillisistä vahingoista, kuten saamatta jääneestä liikevoitosta tai liiketoiminnan keskeytymisestä.</p>
            <p>Leo Digital ei vastaa kolmansien osapuolten palveluiden (kuten hosting-palveluntarjoajan tai Google-palveluiden) toimintakatkoksista.</p>
            <p>Jos Leo Digital on aiheuttanut vahingon tahallaan tai törkeällä huolimattomuudella, korvausvastuu rajoittuu enintään asiakkaan maksamaan kolmen (3) kuukauden palvelumaksuun. Muissa tapauksissa korvausvastuu rajoittuu yhden (1) kuukauden palvelumaksuun tai sopimuksen purkuun ilman irtisanomisaikaa.</p>
          </div>
        </div>

        {/* Sovellettava laki ja riitojen ratkaisu */}
        <div className="mb-16 border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl font-light text-[#f0f0f0] mb-6">Sovellettava laki ja riitojen ratkaisu</h2>
          <div className="space-y-4 text-[#a0a0a0] font-light leading-relaxed">
            <p>Tähän sopimukseen sovelletaan Suomen lakia. Mahdolliset riidat pyritään ensisijaisesti ratkaisemaan osapuolten välisellä neuvottelulla. Jos sopuun ei päästä, asia ratkaistaan Helsingin käräjäoikeudessa.</p>
          </div>
        </div>

        {/* Yhteystiedot */}
        <div className="border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl font-light text-[#f0f0f0] mb-6">Kysymykset ja yhteydenotot</h2>
          <p className="text-[#a0a0a0] font-light leading-relaxed">
            Ehtoihin liittyvissä kysymyksissä ota yhteyttä:{" "}
            <a href="mailto:leo@leodigital.fi" className="text-[#f0f0f0] underline underline-offset-4 hover:text-white transition-colors">
              leo@leodigital.fi
            </a>
          </p>
          <p className="text-[#a0a0a0] font-light mt-4 text-sm">
            Päivitetty: huhtikuu 2026
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}