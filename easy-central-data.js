(() => {
  "use strict";

  const h = String.raw;

  if (!window.MECHANICS_EASY || typeof window.MECHANICS_EASY !== "object" || Array.isArray(window.MECHANICS_EASY)) {
    window.MECHANICS_EASY = {};
  }

  window.MECHANICS_EASY["centralna-sila"] = {
    question: "Gibanje v polju centralne sile",
    promise: "Po tej temi boš razumel, zakaj centralna sila zapre gibanje v ravnino, zakaj planet ob Soncu pospeši, kako iz energije narišemo dovoljene razdalje in kako Binetova enačba pripelje do Keplerjevih orbit.",
    before: [
      h`Puščica nad simbolom pomeni vektor: \(\vec r\) ima velikost in smer. Brez puščice je \(r=|\vec r|\) samo razdalja, torej nenegativno število. Enako je \(\vec L\) vektor, \(L=|\vec L|\) pa njegova velikost.`,
      h`Pika pomeni odvod po času: \(\dot r=dr/dt\) in \(\dot\varphi=d\varphi/dt\). Pri Binetovi enačbi črtica pomeni nekaj drugega: \(u'=du/d\varphi\), odvod po kotu.`,
      h`Vektorski produkt \(\vec a\times\vec b\) je pravokoten na oba vektorja. Njegova velikost je \(ab\sin\alpha\), zato je nič, kadar sta vektorja vzporedna.`,
      h`V polarnih koordinatah \(r\) pove oddaljenost od centra, \(\varphi\) pa smer. Enotski vektor \(\vec e_r\) kaže radialno navzven, \(\vec e_\varphi\) pa pravokotno v smeri naraščanja kota.`,
      h`V zapisu \(\vec F=F(r)\vec e_r\) je \(F(r)\) predznačeno število. \(F(r)<0\) pomeni privlačno silo proti centru, \(F(r)>0\) pa odbojno silo navzven.`,
      h`»Integral gibanja« pomeni količino, ki se med gibanjem ne spreminja. Tu sta najpomembnejša vrtilna količina \(\vec L\) in mehanska energija \(E\).`
    ],
    basics: [
      {
        title: "1. Kaj je centralna sila?",
        body: h`Izberemo fiksno točko \(O\), imenovano center sile. Sila na delec vedno leži na premici med \(O\) in delcem, njena velikost pa je odvisna samo od razdalje \(r\). Lahko je privlačna ali odbojna.`,
        analogy: "Kot napeta vrv, ki vleče kamen naravnost proti roki, ne pa postrani."
      },
      {
        title: "2. Zakaj je navor nič?",
        body: h`Navor glede na center je \(\vec N_O=\vec r\times\vec F\). Ker sta pri centralni sili \(\vec r\) in \(\vec F\) vzporedna, je njun vektorski produkt nič. Sila zato ne more spremeniti vrtilne količine okoli centra.`,
        analogy: "Vrata se ne zavrtijo, če jih potiskaš naravnost proti tečaju."
      },
      {
        title: "3. Zakaj gibanje ostane v ravnini?",
        body: h`Ničelni navor pomeni \(\vec L=\text{konst.}\). Vektor \(\vec L=\vec r\times m\vec v\) je pravokoten na lego in hitrost. Ker njegova smer ostane stalna, sta \(\vec r\) in \(\vec v\) vedno v isti ravnini, pravokotni na \(\vec L\).`,
        analogy: "Stalna puščica L je kakor toga normala, ki določi eno samo list papirja, po katerem se sme gibati delec."
      },
      {
        title: "4. Kaj pravi ploščinski zakon?",
        body: h`Krajevni vektor od centra do delca v enakih časih pomete enake ploščine. Blizu centra mora delec v istem času prepotovati daljši lok, zato se tam giblje hitreje. To je drugi Keplerjev zakon in velja za vsako centralno silo.`,
        analogy: "Kakor kamen na vrvi: ko je bližje roki in ni zunanjega navora, se mora okoli nje gibati hitreje."
      },
      {
        title: "5. Dve poti do rešitve",
        body: h`Energija skupaj z \(L\) da efektivni potencial in pove, med katerima razdaljama se delec giblje ter kako se \(r\) spreminja s časom. Binetova enačba pa odstrani čas in neposredno poišče obliko poti \(r(\varphi)\).`,
        analogy: "Efektivni potencial je vozni red po razdalji, Binetova enačba pa zemljevid poti."
      },
      {
        title: "6. Zakaj je gravitacija posebna?",
        body: h`Pri gravitacijski sili \(1/r^2\) se Binetova enačba zelo poenostavi. Rešitev je stožnica: krog, elipsa, parabola ali hiperbola. Vezani planetarni tir je elipsa s Soncem v enem gorišču.`,
        analogy: "Isti zakon sile ustvari celo družino orbit; začetna hitrost odloči, katero dobimo."
      }
    ],
    spotlight: {
      label: "Glavna izpeljava po kosih",
      title: "Kako iz ravninskega gibanja nastane radialni efektivni potencial?",
      tex: h`\boxed{\frac12m\dot r^2+U_{\rm ef}(r)=E,\qquad U_{\rm ef}(r)=U(r)+\frac{L^2}{2mr^2}}`,
      plain: h`Celotno gibanje po ravnini razdelimo na približevanje oziroma oddaljevanje in gibanje okoli centra. Ker je vrtilna količina \(L\) stalna, lahko kotni del kinetične energije zapišemo samo z \(r\). Tako dobimo navaden enodimenzionalni energijski problem za radialno koordinato.`,
      terms: [
        { tex: h`m`, meaning: "masa gibajočega se delca" },
        { tex: h`r`, meaning: "trenutna razdalja od centra sile" },
        { tex: h`\dot r`, meaning: "radialna hitrost; pove, kako hitro se razdalja spreminja" },
        { tex: h`\varphi,\dot\varphi`, meaning: "polarni kot in njegova časovna sprememba" },
        { tex: h`L`, meaning: h`velikost ohranjene vrtilne količine \(\vec L\)` },
        { tex: h`U(r)`, meaning: "prava potencialna energija centralne sile" },
        { tex: h`\frac{L^2}{2mr^2}`, meaning: "tangencialna kinetična energija, prepisana kot funkcija razdalje" },
        { tex: h`U_{\rm ef}(r)`, meaning: "efektivni potencial: U skupaj s centrifugalnim členom" },
        { tex: h`E`, meaning: "stalna celotna mehanska energija" },
        { tex: h`\frac12m\dot r^2`, meaning: "kinetična energija radialnega gibanja" }
      ],
      derivation: [
        {
          title: "Razcepimo hitrost",
          text: "Majhen premik ima radialni del dr in prečni lok r dφ. Zato ima hitrost dve pravokotni komponenti.",
          tex: h`\vec v=\dot r\,\vec e_r+r\dot\varphi\,\vec e_\varphi,\qquad v^2=\dot r^2+r^2\dot\varphi^2`
        },
        {
          title: "Zapišemo celotno energijo",
          text: "Prvi kinetični člen pripada spreminjanju razdalje, drugi pa kroženju okoli centra.",
          tex: h`E=\frac12m\dot r^2+\frac12mr^2\dot\varphi^2+U(r)`
        },
        {
          title: "Uporabimo ohranjeno vrtilno količino",
          text: "Pri ravninskem gibanju je velikost vrtilne količine masa krat r krat tangencialna hitrost.",
          tex: h`L=mr(r\dot\varphi)=mr^2\dot\varphi=\text{konst.}`
        },
        {
          title: "Izločimo kotno hitrost",
          text: "Ker je L znan in stalen, izrazimo dot φ samo z razdaljo.",
          tex: h`\dot\varphi=\frac{L}{mr^2}`
        },
        {
          title: "Prepišemo kotno kinetično energijo",
          text: "Vstavimo izraz za kotno hitrost. Tako izgine φ in ostane samo r.",
          tex: h`\frac12mr^2\dot\varphi^2=\frac12mr^2\left(\frac{L}{mr^2}\right)^2=\frac{L^2}{2mr^2}`
        },
        {
          title: "Združimo člena, ki sta odvisna od r",
          text: "Pravi potencial in kotno energijo poimenujemo efektivni potencial.",
          tex: h`U_{\rm ef}(r)=U(r)+\frac{L^2}{2mr^2}`
        },
        {
          title: "Dobimo enodimenzionalno energijsko enačbo",
          text: "Radialna koordinata se obnaša kot telo na polpremici r ≥ 0 v potencialu Uef.",
          tex: h`\frac12m\dot r^2+U_{\rm ef}(r)=E`
        },
        {
          title: "Iz enačbe preberemo gibanje",
          text: "Razlika E−Uef je radialna kinetična energija. Negativna ne more biti.",
          tex: h`\dot r=\pm\sqrt{\frac2m\left[E-U_{\rm ef}(r)\right]},\qquad U_{\rm ef}(r)\le E`
        }
      ],
      units: h`Vrtilna količina ima enoto \([L]=\mathrm{kg\,m^2/s}\). Zato je \([L^2/(mr^2)]=\mathrm{kg\,m^2/s^2}=\mathrm J\), enako kot \(U\), \(E\) in kinetična energija. Odvod \(-dU_{\rm ef}/dr\) ima enoto \(\mathrm{J/m=N}\), zato se obnaša kot radialna sila.`,
      example: h`V preprostih brezdimenzijskih enotah naj bo \(m=L=k=1\) in \(U(r)=-1/r\). Tedaj je \(U_{\rm ef}=-1/r+1/(2r^2)\). Minimum je pri \(r_c=1\) in ima vrednost \(-0.5\), zato je tam stabilen krožni tir. Pri energiji \(E=-0.4\) sta obračališči približno \(r_-=0.69\) in \(r_+=1.81\): razdalja niha med njima, delec pa se ves čas tudi vrti.`
    },
    formulas: [
      {
        title: "Vektor lege in definicija centralne sile",
        tex: h`\boxed{\vec r=\overrightarrow{OP},\quad r=|\vec r|,\quad \vec e_r=\frac{\vec r}{r},\quad \vec F(\vec r)=F(r)\vec e_r}`,
        plain: "Centralna sila je vedno na premici med centrom O in delcem P. Predznak F(r) odloča, ali kaže navznoter ali navzven.",
        symbols: [
          { tex: h`O`, meaning: "fiksni center sile" },
          { tex: h`P`, meaning: "trenutna lega delca" },
          { tex: h`\vec r`, meaning: "vektor od O do P" },
          { tex: h`r`, meaning: "razdalja od centra" },
          { tex: h`\vec e_r`, meaning: "enotski vektor radialno navzven" },
          { tex: h`F(r)`, meaning: "predznačena radialna komponenta sile" }
        ],
        origin: [
          { text: "Najprej izberemo center O in lego merimo od njega." },
          { text: "Vektor delimo z njegovo dolžino, da dobimo samo smer.", tex: h`\vec e_r=\vec r/r` },
          { text: "Centralnost pomeni, da sila nima komponente pravokotno na radialno smer." },
          { text: "Privlačna gravitacija ima negativen radialni predznak.", tex: h`\vec F_g=-\frac{GMm}{r^2}\vec e_r` }
        ],
        use: "To je začetna formula celotnega odgovora. Takoj pove, da bo navor glede na O enak nič."
      },
      {
        title: "Navor centralne sile",
        tex: h`\boxed{\vec N_O=\vec r\times\vec F=\vec0}`,
        plain: "Navor meri vrtilni učinek sile okoli O. Centralna sila nima ročice, ker njena premica poteka skozi O.",
        symbols: [
          { tex: h`\vec N_O`, meaning: "navor sile glede na center O" },
          { tex: h`\times`, meaning: "vektorski produkt" },
          { tex: h`N=r|\vec F|\sin\alpha`, meaning: "velikost navora; α je kot med r in F" }
        ],
        origin: [
          { text: "Splošna velikost navora je sila krat pravokotna ročica.", tex: h`N=r|\vec F|\sin\alpha` },
          { text: "Pri centralni sili sta r in F vzporedna ali nasprotno vzporedna, zato je α enak 0 ali π." },
          { text: "Ker je sinus obeh kotov nič, je navor nič." }
        ],
        use: "Uporabi analogijo vrat: sila proti tečaju vrat ne zavrti. Iz N=0 neposredno sledi ohranitev L."
      },
      {
        title: "Vrtilna količina in njena ohranitev",
        tex: h`\boxed{\vec L=\vec r\times m\vec v,\qquad \dot{\vec L}=\vec N_O=\vec0\Rightarrow\vec L=\text{konst.}}`,
        plain: "Vrtilna količina meri, koliko prečnega gibanja ima delec okoli centra. Brez navora se ne spremenita niti njena velikost niti smer.",
        symbols: [
          { tex: h`m\vec v`, meaning: "gibalna količina delca" },
          { tex: h`\vec L`, meaning: "vektor vrtilne količine" },
          { tex: h`L=|\vec L|`, meaning: "njena velikost" },
          { tex: h`\dot{\vec L}`, meaning: "časovna sprememba vrtilne količine" }
        ],
        origin: [
          { text: "Odvajamo definicijo L.", tex: h`\dot{\vec L}=\dot{\vec r}\times m\vec v+\vec r\times m\vec a` },
          { text: "Prvi člen je vektorski produkt hitrosti same s seboj, zato je enak nič.", tex: h`\vec v\times m\vec v=\vec0` },
          { text: "Newtonov zakon m a=F spremeni drugi člen v navor.", tex: h`\dot{\vec L}=\vec r\times\vec F=\vec N_O` },
          { text: "Za centralno silo je navor nič, zato je L konstanten." }
        ],
        use: "To je prvi integral gibanja. Iz njega sledijo ravninskost, ploščinski zakon in centrifugalni člen."
      },
      {
        title: "Zakaj je gibanje ravninsko?",
        tex: h`\boxed{\vec r\cdot\vec L=0,\qquad \vec v\cdot\vec L=0,\qquad \vec L=\text{stalna normala}}`,
        plain: "Vektor L je ves čas pravokoten na lego in hitrost. Ker njegova smer ne niha, se delec giblje po eni fiksni ravnini skozi center.",
        symbols: [
          { tex: h`\cdot`, meaning: "skalarni produkt; nič pomeni pravokotnost" },
          { tex: h`\vec L`, meaning: "normala na ravnino gibanja" },
          { tex: h`L=0`, meaning: "posebni primer čisto radialnega gibanja" }
        ],
        origin: [
          { text: "Vektorski produkt r×mv je po definiciji pravokoten na r in v." },
          { text: "Ničelni navor ohrani smer L." },
          { text: "Vsi možni vektorji r so zato v isti ravnini, pravokotni na isto stalno smer L." },
          { text: "Če je L=0, sta r in v vzporedna in tir je premica skozi center." }
        ],
        use: "Tridimenzionalni problem lahko od tu naprej rešujemo z ravninskima polarnima koordinatama r in φ."
      },
      {
        title: "Polarni razcep hitrosti",
        tex: h`\boxed{\vec v=\dot r\,\vec e_r+r\dot\varphi\,\vec e_\varphi,\qquad v^2=\dot r^2+r^2\dot\varphi^2}`,
        plain: "Delec se lahko hkrati približuje centru in drsi okoli njega. Ti dve hitrosti sta pravokotni, zato se njuna kvadrata seštejeta.",
        symbols: [
          { tex: h`\dot r\,\vec e_r`, meaning: "radialna komponenta hitrosti" },
          { tex: h`r\dot\varphi\,\vec e_\varphi`, meaning: "tangencialna oziroma obodna komponenta" },
          { tex: h`\varphi`, meaning: "polarni kot" },
          { tex: h`\vec e_\varphi`, meaning: "enotski vektor pravokotno na e_r" }
        ],
        origin: [
          { text: "V času dt se razdalja spremeni za dr, kar da radialni premik." },
          { text: "Hkrati sprememba kota dφ ustvari majhen lok dolžine r dφ." },
          { text: "Delimo oba premika z dt.", tex: h`v_r=dr/dt=\dot r,\qquad v_\varphi=r\,d\varphi/dt=r\dot\varphi` },
          { text: "Ker sta smeri pravokotni, uporabimo Pitagorov izrek." }
        ],
        use: "Brez te formule ni razumljiva niti energija niti efektivni potencial."
      },
      {
        title: "Ploščinska hitrost in drugi Keplerjev zakon",
        tex: h`\boxed{\dot A=\frac12|\vec r\times\vec v|=\frac{L}{2m}=\text{konst.},\qquad C_0=r^2\dot\varphi=\frac Lm}`,
        plain: "Krajevni vektor v enakih časih pomete enake ploščine. Ko je r manjši, morata biti kotna in tangencialna hitrost večji.",
        symbols: [
          { tex: h`A`, meaning: "ploščina, ki jo pomete krajevni vektor" },
          { tex: h`\dot A`, meaning: "ploščina na čas" },
          { tex: h`C_0`, meaning: "specifična vrtilna količina oziroma dvojna ploščinska hitrost" },
          { tex: h`r^2\dot\varphi`, meaning: "konstanta pri vsakem centralnem gibanju" }
        ],
        origin: [
          { text: "V kratkem času nastane tanek trikotnik.", tex: h`dA=\frac12|\vec r\times d\vec r|` },
          { text: "Uporabimo d r vektorsko = v dt in delimo z dt.", tex: h`\dot A=\frac12|\vec r\times\vec v|` },
          { text: "Ker je L=m|r×v|, dobimo dot A=L/(2m)." },
          { text: "V polarnih koordinatah je dot A=r² dot φ/2." }
        ],
        use: "Če se r prepolovi, se pri istem L kotna hitrost poveča štirikrat. To pojasni hitrejše gibanje pri periapsidi."
      },
      {
        title: "Potencial in ohranitev energije",
        tex: h`\boxed{\vec F=-U'(r)\vec e_r,\qquad E=\frac12mv^2+U(r)=\text{konst.}}`,
        plain: "Sila kaže po potencialu navzdol. Brez trenja se energija le pretaka med kinetično in potencialno obliko.",
        symbols: [
          { tex: h`U(r)`, meaning: "potencialna energija" },
          { tex: h`U'(r)=dU/dr`, meaning: "sprememba potenciala z razdaljo" },
          { tex: h`E`, meaning: "stalna vsota kinetične in potencialne energije" },
          { tex: h`v=|\vec v|`, meaning: "velikost celotne hitrosti" }
        ],
        origin: [
          { text: "Odvajamo energijo po času.", tex: h`\dot E=m\vec v\cdot\vec a+U'(r)\dot r` },
          { text: "Uporabimo m a=F in v·e_r=dot r.", tex: h`\dot E=F(r)\dot r+U'(r)\dot r` },
          { text: "Ker je F(r)=-U'(r), se člena izničita.", tex: h`\dot E=0` }
        ],
        use: "To je drugi osnovni integral gibanja. Skupaj z L določi dovoljene razdalje in časovni potek."
      },
      {
        title: "Efektivni potencial in centrifugalni člen",
        tex: h`\boxed{\frac12m\dot r^2+U_{\rm ef}(r)=E,\qquad U_{\rm ef}(r)=U(r)+\frac{L^2}{2mr^2}}`,
        plain: "Uef je energijski zemljevid za razdaljo r. Drugi člen ni nov zunanji potencial, ampak tangencialna kinetična energija pri stalnem L.",
        symbols: [
          { tex: h`U_{\rm ef}`, meaning: "efektivni potencial" },
          { tex: h`L^2/(2mr^2)`, meaning: "centrifugalni člen oziroma tangencialna kinetična energija" },
          { tex: h`\tfrac12m\dot r^2`, meaning: "radialna kinetična energija" }
        ],
        origin: [
          { text: "Začnemo s polarno energijo.", tex: h`E=\frac12m\dot r^2+\frac12mr^2\dot\varphi^2+U(r)` },
          { text: "Iz L=mr² dot φ izrazimo kotno hitrost.", tex: h`\dot\varphi=L/(mr^2)` },
          { text: "Kotna kinetična energija postane L²/(2mr²)." },
          { text: "Vse, kar je samo funkcija r, združimo v Uef." }
        ],
        use: "Za gravitacijo U=-k/r gre centrifugalni člen pri majhnem r kot +1/r² in pri L≠0 ustvari pregrado pred centrom."
      },
      {
        title: "Dovoljene razdalje in radialna obračališča",
        tex: h`\boxed{\dot r=\pm\sqrt{\frac2m[E-U_{\rm ef}(r)]},\qquad E\ge U_{\rm ef}(r),\qquad E=U_{\rm ef}(r_\pm)}`,
        plain: "Vodoravna energijska črta na grafu Uef določi, kam lahko delec pride. Presečišči sta najmanjša in največja razdalja.",
        symbols: [
          { tex: h`r_-`, meaning: "notranje obračališče oziroma periapsida" },
          { tex: h`r_+`, meaning: "zunanje obračališče oziroma apoapsida" },
          { tex: h`\pm`, meaning: "plus za gibanje navzven, minus za gibanje navznoter" },
          { tex: h`E-U_{\rm ef}`, meaning: "razpoložljiva radialna kinetična energija" }
        ],
        origin: [
          { text: "Iz radialne energije izoliramo kinetični člen.", tex: h`\frac12m\dot r^2=E-U_{\rm ef}` },
          { text: "Kvadrat hitrosti ne more biti negativen, zato je dovoljeno le Uef≤E." },
          { text: "Pri enakosti je dot r=0 in radialna smer se obrne." },
          { text: "Tangencialna hitrost tam ostane L/(mr), zato delec ne miruje." }
        ],
        use: "Iz grafa brez reševanja enačb prebereš vezanost, periapsido, apoapsido in področja, kamor delec ne more."
      },
      {
        title: "Radialna sila, krožni tir in stabilnost",
        tex: h`\boxed{m\ddot r=-\frac{dU_{\rm ef}}{dr}=F(r)+\frac{L^2}{mr^3},\quad U_{\rm ef}'(r_c)=0,\quad U_{\rm ef}''(r_c)>0\Rightarrow\text{stabilno}}`,
        plain: "Krožni tir pomeni stalno razdaljo. Zato mora biti radialna koordinata v ravnovesju; minimum Uef jo po majhni motnji potisne nazaj.",
        symbols: [
          { tex: h`r_c`, meaning: "polmer krožnega tira" },
          { tex: h`L^2/(mr^3)`, meaning: "navzven usmerjeni radialni učinek centrifugalnega člena" },
          { tex: h`U_{\rm ef}'`, meaning: "naklon efektivnega potenciala" },
          { tex: h`U_{\rm ef}''`, meaning: "ukrivljenost; pozitivna v minimumu" }
        ],
        origin: [
          { text: "Radialna koordinata sledi isti obliki Newtonovega zakona kot 1D delec.", tex: h`m\ddot r=-U_{\rm ef}'(r)` },
          { text: "Odvajamo centrifugalni člen.", tex: h`-\frac d{dr}\frac{L^2}{2mr^2}=+\frac{L^2}{mr^3}` },
          { text: "Za stalni r mora biti radialna sila nič, zato Uef′(rc)=0." },
          { text: "Minimum vrne delec proti rc, maksimum pa ga odmakne." }
        ],
        use: "Za gravitacijo U=-k/r dobiš rc=L²/(mk). Pri tej sili je krožni tir stabilen."
      },
      {
        title: "Radialna kvadratura in ponovna določitev kota",
        tex: h`\boxed{t-t_0=\pm\sqrt{\frac m2}\int_{r_0}^{r}\frac{ds}{\sqrt{E-U_{\rm ef}(s)}}},\qquad \boxed{\varphi-\varphi(t_0)=\pm\int_{r_0}^{r}\frac{L\,ds}{s^2\sqrt{2m[E-U_{\rm ef}(s)]}}}`,
        plain: "Prvi integral pove, koliko časa potrebujemo do izbrane razdalje. Drugi pove, za koliko se v istem radialnem odseku zasukamo okoli centra.",
        symbols: [
          { tex: h`t_0,r_0`, meaning: "začetni čas in začetna razdalja" },
          { tex: h`s`, meaning: "pomožna integracijska spremenljivka za razdaljo" },
          { tex: h`\pm`, meaning: "trenutna radialna smer gibanja" },
          { tex: h`\varphi(t_0)`, meaning: "začetni polarni kot" }
        ],
        origin: [
          { text: "Iz energije dobimo dr/dt.", tex: h`\frac{dr}{dt}=\pm\sqrt{\frac2m(E-U_{\rm ef})}` },
          { text: "Ločimo čas in razdaljo.", tex: h`dt=\pm\sqrt{\frac m2}\frac{dr}{\sqrt{E-U_{\rm ef}(r)}}` },
          { text: "Integriramo od začetnega stanja do trenutne razdalje." },
          { text: "Ohranjeni L poda kotno hitrost.", tex: h`\dot\varphi=L/(mr^2)` },
          { text: "Razmerje dot φ/dot r da neposredno kotno kvadraturo.", tex: h`\frac{d\varphi}{dr}=\pm\frac{L}{r^2\sqrt{2m(E-U_{\rm ef})}}` }
        ],
        use: "To pokaže, v katerem smislu je problem reduciran na 1D: radialna enačba da čas, druga kvadratura pa obliko oziroma kot."
      },
      {
        title: "Binetova enačba: od časa do oblike orbite",
        tex: h`\boxed{u=\frac1r,\quad a_r=-C_0^2u^2(u''+u),\quad u''+u=-\frac{F(1/u)}{mC_0^2u^2}}`,
        plain: "Binet ne išče urnika r(t), ampak zemljevid r(φ). Zamenjava u=1/r je posebej priročna za sile z obratnimi potencami r.",
        symbols: [
          { tex: h`u(\varphi)=1/r`, meaning: "obratna razdalja kot funkcija kota" },
          { tex: h`u',u''`, meaning: "prvi in drugi odvod po φ, ne po času" },
          { tex: h`C_0=L/m=r^2\dot\varphi`, meaning: "specifična vrtilna količina" },
          { tex: h`a_r=\ddot r-r\dot\varphi^2`, meaning: "radialna komponenta pospeška" }
        ],
        origin: [
          { text: "Iz C0=r² dot φ in u=1/r dobimo kotno hitrost.", tex: h`\dot\varphi=C_0u^2` },
          { text: "Časovni odvod r spremenimo v odvod po φ.", tex: h`\dot r=\frac{dr}{d\varphi}\dot\varphi=-C_0u'` },
          { text: "Odvajamo še enkrat.", tex: h`\ddot r=-C_0^2u^2u''` },
          { text: "Geometrijski centripetalni člen je r dot φ²=C0²u³." },
          { text: "V radialni pospešek vstavimo oba člena.", tex: h`a_r=-C_0^2u^2(u''+u)` },
          { text: "Nazadnje uporabimo m ar=F(1/u) in izoliramo u''+u." }
        ],
        use: "Ko profesor vpraša po obliki tira za dano centralno silo, vstavi F(r) v zadnjo enačbo in reši za u(φ)."
      },
      {
        title: "Gravitacijska sila in Keplerjeva stožnica",
        tex: h`\boxed{\vec F=-\frac{k}{r^2}\vec e_r,\quad U=-\frac kr,\quad r(\varphi)=\frac{p}{1+\varepsilon\cos(\varphi-\varphi_p)},\quad p=\frac{L^2}{mk}}`,
        plain: "Pri sili 1/r² postane desna stran Binetove enačbe konstanta. Rešitev konstanta plus kosinus je stožnica s centrom sile v gorišču.",
        symbols: [
          { tex: h`k=GMm`, meaning: "gravitacijska konstanta problema; M je centralna masa" },
          { tex: h`p`, meaning: "goriščni parameter, ki določa merilo orbite" },
          { tex: h`\varepsilon`, meaning: "ekscentričnost, ki določa obliko orbite" },
          { tex: h`\varphi_p`, meaning: "kotna smer periapside" },
          { tex: h`G`, meaning: "gravitacijska konstanta" }
        ],
        origin: [
          { text: "Za F(1/u)=-k u² se faktor u² v Binetovi enačbi pokrajša.", tex: h`u''+u=\frac{k}{mC_0^2}=\frac{mk}{L^2}=\frac1p` },
          { text: "Rešitev homogene enačbe je sinus in kosinus, partikularna rešitev pa 1/p." },
          { text: "Sinus in kosinus združimo v eno amplitudo ε in fazo φp.", tex: h`u=\frac1p[1+\varepsilon\cos(\varphi-\varphi_p)]` },
          { text: "Ker je r=1/u, dobimo enačbo stožnice." }
        ],
        use: "ε=0 je krog, 0<ε<1 elipsa, ε=1 parabola, ε>1 hiperbola. Sonce je v gorišču, ne v središču elipse."
      },
      {
        title: "Energija določi vrsto Keplerjeve orbite",
        tex: h`\boxed{\varepsilon^2=1+\frac{2EL^2}{mk^2},\qquad E<0:\ \text{elipsa},\quad E=0:\ \text{parabola},\quad E>0:\ \text{hiperbola}}`,
        plain: "Negativna energija pomeni, da delec nima dovolj energije za pobeg v neskončnost. Pri ničelni energiji ravno pobegne, pri pozitivni pa odleti z ostankom hitrosti.",
        symbols: [
          { tex: h`E`, meaning: "celotna mehanska energija, če ničlo U izberemo v neskončnosti" },
          { tex: h`\varepsilon`, meaning: "ekscentričnost orbite" },
          { tex: h`k=GMm`, meaning: "koeficient v potencialu U=-k/r" },
          { tex: h`r_p,r_a`, meaning: "periapsida in apoapsida pri elipsi" }
        ],
        origin: [
          { text: "Za Keplerjev potencial je ekscentričnost določena z obema integraloma E in L." },
          { text: "Če je E<0, je ε<1 in tir je vezan." },
          { text: "Če je E=0, je ε=1 in dobimo mejno parabolično orbito." },
          { text: "Če je E>0, je ε>1 in dobimo nevezano hiperbolo." },
          { text: "Za elipso sta apsidi neposredno razvidni iz enačbe orbite.", tex: h`r_p=\frac{p}{1+\varepsilon},\qquad r_a=\frac{p}{1-\varepsilon}` }
        ],
        use: "Pri p=1 in ε=0.5 je rp=2/3, ra=2. To je hiter numerični primer za ustni odgovor."
      },
      {
        title: "Trije Keplerjevi zakoni",
        tex: h`\boxed{\text{I: elipsa z goriščem v Soncu},\qquad \text{II: }\dot A=\text{konst.},\qquad \text{III: }T^2=\frac{4\pi^2}{GM}a^3}`,
        plain: "Prvi zakon pove obliko poti, drugi spreminjanje hitrosti po poti, tretji pa zvezo med velikostjo orbite in časom enega obhoda.",
        symbols: [
          { tex: h`a`, meaning: "velika polos elipse" },
          { tex: h`b`, meaning: "mala polos elipse" },
          { tex: h`T`, meaning: "obhodna doba" },
          { tex: h`A_{\rm el}=\pi ab`, meaning: "celotna ploščina elipse" },
          { tex: h`p=b^2/a`, meaning: "zveza goriščnega parametra s polosema" }
        ],
        origin: [
          { text: "I. zakon sledi iz Binetove rešitve za vezano orbito ε<1." },
          { text: "II. zakon sledi iz ničelnega navora in zato velja za vsako centralno silo." },
          { text: "V eni periodi krajevni vektor pomete celotno elipso.", tex: h`T=\frac{A_{\rm el}}{\dot A}=\frac{2\pi abm}{L}` },
          { text: "Za gravitacijsko elipso velja p=b²/a in p=L²/(GMm²)." },
          { text: "Vstavimo in pokrajšamo b.", tex: h`T^2=\frac{4\pi^2a^2b^2m^2}{L^2}=\frac{4\pi^2}{GM}a^3` }
        ],
        use: "Če je a=4 AU, je glede na Zemljo T=4^(3/2)=8 let. Za primerljivi masi v natančnem problemu uporabi G(M+m)."
      }
    ],
    checkpoints: [
      "Znaš brez mešanja razložiti razliko med vektorjem r⃗ in razdaljo r ter med L⃗ in L?",
      "Znaš povedati, kaj pomeni predznak skalarja F(r) v zapisu F⃗=F(r)e⃗r?",
      "Znaš z analogijo vrat pojasniti, zakaj ima centralna sila ničelni navor?",
      "Znaš iz definicije L⃗ izpeljati L̇⃗=N⃗=0 in povedati, zakaj je gibanje ravninsko?",
      "Znaš narisati tanek ploščinski trikotnik in izpeljati Ȧ=L/(2m)?",
      "Znaš razcepiti hitrost na radialni del ṙ in tangencialni del rφ̇?",
      "Znaš po kosih izpeljati Uef=U+L²/(2mr²) in povedati, zakaj drugi člen ni nova realna sila?",
      "Znaš iz grafa Uef določiti dovoljeno območje, obe apsidi in razliko med obračališčem ter mirovanjem?",
      "Znaš zapisati pogoja za krožni tir in za njegovo stabilnost?",
      "Znaš razložiti vsak simbol v radialni kvadraturi ter nato obnoviti kot iz φ̇=L/(mr²)?",
      "Znaš pri Binetu povedati, zakaj uvedemo u=1/r in zakaj črtica pomeni odvod po φ?",
      "Znaš izpeljati ar=−C₀²u²(u″+u), ne samo zapisati končne formule?",
      "Znaš pri gravitaciji definirati k, p, ε in φp ter razvrstiti krog, elipso, parabolo in hiperbolo?",
      "Znaš jasno navesti vse tri Keplerjeve zakone in povedati, kateri velja za vsako centralno silo?",
      "Znaš iz ploščine elipse in ploščinske hitrosti izpeljati T²=4π²a³/(GM)?"
    ]
  };
})();
