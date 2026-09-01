(() => {
  "use strict";

  const h = String.raw;

  const diagrams = {
    point: h`<svg viewBox="0 0 240 180" role="img" aria-label="Hitrost je tangentna, pospešek ima tangentno in normalno komponento">
      <path class="diagram-faint" d="M18 145 C62 31 155 42 222 102"/>
      <circle class="diagram-dot" cx="124" cy="58" r="5"/>
      <path class="diagram-cyan" d="M124 58 L188 74 M188 74 l-11-8 M188 74 l-13 2"/>
      <path class="diagram-line" d="M124 58 L105 116 M105 116 l-2-14 M105 116 l10-10"/>
      <text x="190" y="75">v — tangenta</text><text x="66" y="132">aₙ</text><text x="116" y="47">P</text>
    </svg>`,
    force: h`<svg viewBox="0 0 240 180" role="img" aria-label="Kroglica se giblje po potencialni jami">
      <path class="diagram-faint" d="M18 35 V150 H226"/>
      <path class="diagram-line" d="M25 61 C73 63 79 143 125 143 C170 143 174 68 220 56"/>
      <circle class="diagram-dot" cx="91" cy="125" r="6"/>
      <path class="diagram-cyan" d="M91 125 L117 137 M117 137 l-11 1 M117 137 l-7-8"/>
      <text x="24" y="27">U(x)</text><text x="205" y="166">x</text><text x="119" y="128">F = −∇U</text>
    </svg>`,
    straight: h`<svg viewBox="0 0 240 180" role="img" aria-label="Potencialna jama z energijo in obračališčema">
      <path class="diagram-faint" d="M18 25 V154 H225"/>
      <path class="diagram-line" d="M22 45 C66 49 67 135 122 135 C174 135 181 53 221 42"/>
      <path class="diagram-cyan" d="M33 92 H211"/>
      <circle class="diagram-dot" cx="72" cy="92" r="4"/><circle class="diagram-dot" cx="178" cy="92" r="4"/>
      <text x="187" y="86">E₀</text><text x="65" y="109">a</text><text x="174" y="109">b</text><text x="104" y="153">stabilno</text>
    </svg>`,
    central: h`<svg viewBox="0 0 240 180" role="img" aria-label="Eliptični tir okoli središča sile">
      <ellipse class="diagram-line" cx="128" cy="91" rx="92" ry="58" transform="rotate(-12 128 91)"/>
      <circle class="diagram-dot" cx="83" cy="101" r="6"/>
      <circle cx="185" cy="58" r="4" fill="#58d5f7"/>
      <path class="diagram-cyan" d="M83 101 L185 58 M185 58 l-12 0 M185 58 l-8 9"/>
      <path class="diagram-faint" d="M83 101 L178 123"/>
      <text x="70" y="119">O</text><text x="130" y="69">r</text><text x="188" y="52">P</text><text x="141" y="139">ΔA</text>
    </svg>`,
    relative: h`<svg viewBox="0 0 240 180" role="img" aria-label="Nepremični in vrteči koordinatni sistem">
      <path class="diagram-faint" d="M35 142 H118 M35 142 V54"/><circle class="diagram-dot" cx="35" cy="142" r="4"/>
      <path class="diagram-line" d="M110 125 L188 89 M110 125 L147 54"/><circle class="diagram-dot" cx="110" cy="125" r="4"/>
      <path class="diagram-cyan" d="M35 142 L110 125 M110 125 l-10-4 M110 125 l-8 8"/>
      <path class="diagram-cyan" d="M110 125 L188 58 M188 58 l-12 3 M188 58 l-3 12"/>
      <path class="diagram-line" d="M148 117 C159 107 162 94 158 80 M158 80 l-6 9 M158 80 l8 7"/>
      <text x="25" y="157">O</text><text x="104" y="142">O′</text><text x="61" y="127">r₀</text><text x="151" y="75">ξ</text><text x="167" y="103">ω</text>
    </svg>`,
    particles: h`<svg viewBox="0 0 240 180" role="img" aria-label="Sistem točk in masno središče">
      <path class="diagram-faint" d="M29 145 H220 M29 145 V26"/>
      <circle cx="68" cy="93" r="8" fill="#68718d"/><circle cx="142" cy="52" r="5" fill="#68718d"/><circle cx="186" cy="120" r="11" fill="#68718d"/>
      <circle class="diagram-dot" cx="132" cy="91" r="7"/>
      <path class="diagram-cyan" d="M29 145 L132 91 M132 91 l-12 1 M132 91 l-6 10"/>
      <path class="diagram-faint" d="M132 91 L68 93 M132 91 L142 52 M132 91 L186 120"/>
      <text x="138" y="88">R, M</text><text x="78" y="107">ρ₁</text><text x="42" y="130">R</text>
    </svg>`,
    rigid: h`<svg viewBox="0 0 240 180" role="img" aria-label="Translacija in rotacija togega telesa">
      <path class="diagram-faint" d="M24 148 H219 M24 148 V31"/>
      <path class="diagram-line" d="M91 119 L126 55 L196 78 L178 139 Z"/>
      <circle class="diagram-dot" cx="150" cy="99" r="6"/>
      <path class="diagram-cyan" d="M24 148 L150 99 M150 99 l-12-1 M150 99 l-7 10"/>
      <path class="diagram-line" d="M151 101 L181 70 M181 70 l-12 4 M181 70 l-4 12"/>
      <path class="diagram-line" d="M131 76 C145 61 164 59 179 66"/>
      <text x="156" y="112">P*</text><text x="76" y="119">r*</text><text x="184" y="68">ω</text>
    </svg>`,
    top: h`<svg viewBox="0 0 240 180" role="img" aria-label="Prosta simetrična vrtavka in precesija">
      <path class="diagram-faint" d="M120 157 V22"/>
      <ellipse class="diagram-faint" cx="120" cy="64" rx="67" ry="23"/>
      <path class="diagram-line" d="M120 157 L165 45 M165 45 l-9 9 M165 45 l1 13"/>
      <path class="diagram-cyan" d="M120 157 L120 37 M120 37 l-6 11 M120 37 l6 11"/>
      <path class="diagram-line" d="M79 70 C96 87 143 90 164 68 M164 68 l-11 2 M164 68 l-6-9"/>
      <text x="169" y="45">e₃</text><text x="124" y="35">L</text><text x="168" y="79">precesija</text>
    </svg>`
  };

  const chapters = [
    {
      number: 1,
      id: "kinematika-tocke",
      title: "Kinematika točke",
      short: "Lega, hitrost in pospešek v kartezičnem, polarnem in naravnem opisu.",
      minutes: 55,
      accent: "#58d5f7",
      intro: "Kinematika samo opisuje gibanje — še ne sprašuje, katera sila ga povzroča. Isto gibanje zapišemo z lego, njenima časovnima odvodoma in z bazami, ki so prilagojene tiru.",
      diagram: diagrams.point,
      sources: ["ročni zapiski str. 1–2", "priročnik str. 4–8"],
      subtopics: [
        {
          letter: "a",
          title: "Vektor hitrosti, pospeška in geometrijski pomen",
          question: "Definiraj hitrost in pospešek ter razloži, kam kažeta.",
          start: "Lego točke podam s krajevnim vektorjem. Hitrost je njegov prvi časovni odvod in je tangentna na tir; pospešek je odvod hitrosti in meri spremembo njene velikosti ali smeri.",
          formulas: [
            { label: "Definiciji", tex: h`\vec v=\dot{\vec r}=\frac{d\vec r}{dt},\qquad \vec a=\dot{\vec v}=\ddot{\vec r}`, explain: h`Hitrost spreminja lego, pospešek pa vektor hitrosti.`, wide: true },
            { label: "Kartezično", tex: h`\vec r=x\vec e_x+y\vec e_y+z\vec e_z`, explain: h`Zato je \(\vec v=\dot x\vec e_x+\dot y\vec e_y+\dot z\vec e_z\) in podobno za \(\vec a\).` },
            { label: "Ali brzina narašča?", tex: h`\frac{d}{dt}|\vec v|^2=2\vec a\!\cdot\!\vec v`, explain: h`\(\vec a\cdot\vec v>0\): pospeševanje; \(=0\): stalna brzina; \(<0\): zaviranje.` }
          ],
          notation: [
            { tex: h`\vec r(t)`, meaning: "krajevni vektor" },
            { tex: h`\vec v`, meaning: "vektor hitrosti" },
            { tex: h`v=|\vec v|`, meaning: "brzina, skalar" },
            { tex: h`\vec a`, meaning: "vektor pospeška" }
          ],
          derivation: [
            { title: "Iz sekante dobimo tangento", body: "Povprečna hitrost je sprememba lege na čas. Ko časovni interval skrčimo proti nič, dobimo odvod.", tex: h`\vec v(t)=\lim_{\Delta t\to0}\frac{\vec r(t+\Delta t)-\vec r(t)}{\Delta t}` },
            { title: "Hitrost je tangentna", body: "Vektor razlike dveh bližnjih leg leži vzdolž sekante tira; v limiti sekanta postane tangenta." },
            { title: "Še enkrat odvajamo", body: "Sprememba vektorja hitrosti je pospešek. Lahko spremeni dolžino hitrosti, njeno smer ali oboje.", tex: h`\vec a=\lim_{\Delta t\to0}\frac{\vec v(t+\Delta t)-\vec v(t)}{\Delta t}` },
            { title: "Znak skalarnega produkta", body: "Odvajamo kvadrat brzine. Ker je brzina pozitivna, znak njenega odvoda določa skalarni produkt.", tex: h`2v\dot v=\frac{d}{dt}(\vec v\cdot\vec v)=2\vec v\cdot\vec a` }
          ],
          summary: h`\(\vec v=d\vec r/dt\) je tangentna na tir, \(\vec a=d\vec v/dt\) pa opisuje spremembo velikosti in smeri hitrosti. Brzina narašča, če je \(\vec a\cdot\vec v>0\), je stalna pri ničelnem produktu in pada pri negativnem.`,
          pitfall: h`Stalna brzina ne pomeni ničelnega pospeška. Pri enakomernem kroženju je \(|\vec v|\) stalna, vendar se smer hitrosti spreminja, zato \(\vec a\neq0\).`
        },
        {
          letter: "b",
          title: "Hitrost in pospešek v polarnem koordinatnem sistemu",
          question: "Izpelji polarni zapis in poimenuj radialne ter obodne člene.",
          start: h`V ravnini zapišem lego kot \(\vec r=r\vec e_r\). Ker se bazna vektorja z kotom vrtita, moram pri odvajanju odvajati tudi bazo; prav od tod prideta centripetalni in člen \(2\dot r\dot\varphi\).`,
          formulas: [
            { label: "Odvoda polarne baze", tex: h`\dot{\vec e}_r=\dot\varphi\,\vec e_\varphi,\qquad \dot{\vec e}_\varphi=-\dot\varphi\,\vec e_r`, explain: h`Bazna vektorja nista konstantna, ampak se vrtita skupaj s kotom.`, wide: true },
            { label: "Hitrost", tex: h`\vec v=\dot r\,\vec e_r+r\dot\varphi\,\vec e_\varphi`, explain: h`Prvi člen je radialni, drugi obodni.` },
            { label: "Pospešek", tex: h`\vec a=(\ddot r-r\dot\varphi^2)\vec e_r+(r\ddot\varphi+2\dot r\dot\varphi)\vec e_\varphi`, explain: h`Radialno sta \(\ddot r\) in centripetalni člen; obodno sta kotni in Coriolisov člen.`, wide: true }
          ],
          notation: [
            { tex: h`r`, meaning: "oddaljenost od pola" },
            { tex: h`\varphi`, meaning: "polarni kot" },
            { tex: h`\vec e_r`, meaning: "radialna enota" },
            { tex: h`\vec e_\varphi`, meaning: "obodno usmerjena enota" }
          ],
          derivation: [
            { title: "Zapišemo bazo", body: h`V kartezičnih komponentah je radialna enota \((\cos\varphi,\sin\varphi)\), obodna pa \((-\sin\varphi,\cos\varphi)\).` },
            { title: "Odvajamo bazo", body: "Verižno pravilo da vrtenje obeh baznih vektorjev.", tex: h`\frac{d\vec e_r}{dt}=\frac{d\vec e_r}{d\varphi}\dot\varphi=\dot\varphi\vec e_\varphi` },
            { title: "Odvajamo lego", body: h`Produktno pravilo za \(r\vec e_r\) takoj da radialno in obodno hitrost.`, tex: h`\dot{\vec r}=\dot r\vec e_r+r\dot{\vec e}_r=\dot r\vec e_r+r\dot\varphi\vec e_\varphi` },
            { title: "Odvajamo hitrost", body: h`Odvajamo oba produkta in vstavimo oba odvoda baze; nato zberemo koeficiente pri \(\vec e_r\) in \(\vec e_\varphi\).`, tex: h`\dot{\vec v}=\ddot r\vec e_r+\dot r\dot\varphi\vec e_\varphi+(\dot r\dot\varphi+r\ddot\varphi)\vec e_\varphi-r\dot\varphi^2\vec e_r` }
          ],
          summary: h`Ker se polarna baza vrti, je \(\vec v=\dot r\vec e_r+r\dot\varphi\vec e_\varphi\) in \(\vec a=(\ddot r-r\dot\varphi^2)\vec e_r+(r\ddot\varphi+2\dot r\dot\varphi)\vec e_\varphi\). V izpeljavi je ključno odvajati tudi bazna vektorja.`,
          pitfall: h`Ne izpusti faktorja 2 pri \(2\dot r\dot\varphi\). Člen nastane dvakrat: enkrat iz radialnega in enkrat iz obodnega dela hitrosti.`
        },
        {
          letter: "c",
          title: "Kinematika gibanja po krivulji",
          question: "Uvedi naravni parameter in izpelji tangentno-normalni razcep pospeška.",
          start: h`Krivuljo parametriziram z dolžino loka \(s\). Enotska tangenta pove smer gibanja, njeno spreminjanje pa meri ukrivljenost; zato se pospešek razcepi na tangentni del, ki spreminja brzino, in normalni del, ki spreminja smer.`,
          formulas: [
            { label: "Naravni parameter", tex: h`s(t)=\int_{t_0}^{t}|\dot{\vec r}(\tau)|\,d\tau,\qquad \dot s=|\vec v|`, explain: h`\(s\) je prepotovana dolžina vzdolž tira.`, wide: true },
            { label: "Frenetova baza", tex: h`\vec e_t=\frac{d\vec r}{ds},\qquad \frac{d\vec e_t}{ds}=\kappa\vec e_n`, explain: h`\(\kappa=1/\rho\) je ukrivljenost, \(\rho\) krivinski radij.` },
            { label: "Razcep", tex: h`\vec v=\dot s\,\vec e_t,\qquad \vec a=\ddot s\,\vec e_t+\kappa\dot s^2\,\vec e_n`, explain: h`\(a_t=\ddot s\), \(a_n=v^2/\rho\).`, wide: true }
          ],
          notation: [
            { tex: h`s`, meaning: "dolžina loka" },
            { tex: h`\vec e_t`, meaning: "enotska tangenta" },
            { tex: h`\vec e_n`, meaning: "glavna normala" },
            { tex: h`\kappa=1/\rho`, meaning: "ukrivljenost" }
          ],
          derivation: [
            { title: "Verižno pravilo za lego", body: h`Lego razumemo kot \(\vec r(s(t))\).`, tex: h`\vec v=\frac{d\vec r}{ds}\frac{ds}{dt}=\dot s\,\vec e_t` },
            { title: "Odvajamo hitrost", body: "Produktno pravilo loči spremembo brzine od spremembe smeri tangente.", tex: h`\vec a=\ddot s\vec e_t+\dot s\frac{d\vec e_t}{dt}` },
            { title: "Uporabimo Frenetovo formulo", body: h`Tangenta se na enoto poti obrne za \(\kappa\) v smeri normale.`, tex: h`\frac{d\vec e_t}{dt}=\frac{d\vec e_t}{ds}\dot s=\kappa\dot s\vec e_n` },
            { title: "Dobimo razcep", body: "Vstavitev da tangentni in normalni prispevek; normalni vedno kaže proti središču ukrivljenosti.", tex: h`\vec a=\underbrace{\ddot s\vec e_t}_{\text{spreminja brzino}}+\underbrace{\kappa\dot s^2\vec e_n}_{\text{spreminja smer}}` }
          ],
          summary: h`Naravni parameter je dolžina loka in velja \(\dot s=v\). Ker je \(d\vec e_t/ds=\kappa\vec e_n\), dobimo \(\vec a=\ddot s\vec e_t+\kappa\dot s^2\vec e_n\): tangentni del spreminja brzino, normalni pa smer.`,
          pitfall: h`Pri enakomernem gibanju po krivulji je samo \(\ddot s=0\); normalni pospešek \(\kappa\dot s^2\) praviloma ostane.`
        }
      ]
    },
    {
      number: 2,
      id: "dinamika-tocke",
      title: "Dinamika točke",
      short: "Sile, potenciali ter izreka o delu in ohranitvi energije.",
      minutes: 50,
      accent: "#ff806f",
      intro: h`Dinamika poveže opis gibanja z vzrokom: v inercialnem sistemu je rezultanta sil enaka \(m\vec a\). Pri konzervativnih silah namesto treh diferencialnih enačb pogosto zadošča ena energijska bilanca.`,
      diagram: diagrams.force,
      sources: ["ročni zapiski str. 2–3", "priročnik str. 9–11"],
      subtopics: [
        {
          letter: "a",
          title: "Primeri sil in njihovi potenciali",
          question: "Povej Newtonov zakon, definiraj potencialno silo in navedi standardne primere.",
          start: "V inercialnem sistemu velja drugi Newtonov zakon. Sila je potencialna, če jo dobim kot negativni gradient skalarnega potenciala; minus pomeni, da sila kaže proti manjšemu potencialu.",
          formulas: [
            { label: "Newton in potencial", tex: h`m\vec a=\vec F,\qquad \vec F=-\nabla U`, explain: h`Če je \(U=U(\vec r)\) in ni eksplicitno odvisen od časa, je mehanska energija ohranjena.`, wide: true },
            { label: "Konstantna sila", tex: h`\vec F=\vec F_0,\qquad U=-\vec F_0\cdot\vec r+C`, explain: h`Za težnost blizu Zemlje lahko vzamemo \(U=mgh\).` },
            { label: "Gravitacija in Coulomb", tex: h`U_g(r)=-\frac{Gm_1m_2}{r},\qquad U_e(r)=\frac{q_1q_2}{4\pi\varepsilon_0r}`, explain: h`Obe sta centralni sili oblike \(1/r^2\).` },
            { label: "Vzmet", tex: h`\vec F=-kx\,\vec e_x,\qquad U(x)=\frac12kx^2`, explain: h`Sila je usmerjena nazaj proti ravnovesju.` },
            { label: "Nekonzervativna primera", tex: h`\vec F_u=-c\vec v,\qquad \vec F_L=q(\vec E+\vec v\times\vec B)`, explain: h`Upor disipira energijo; magnetni del je odvisen od hitrosti in ne opravlja dela.`, core: false, wide: true }
          ],
          notation: [
            { tex: h`U`, meaning: "potencialna energija" },
            { tex: h`\nabla U`, meaning: "gradient potenciala" },
            { tex: h`G`, meaning: "gravitacijska konstanta" },
            { tex: h`k`, meaning: "konstanta vzmeti" }
          ],
          derivation: [
            { title: "Definiramo delo potencialne sile", body: "Za potencialno silo mora biti delo med dvema točkama neodvisno od poti in enako negativni spremembi potenciala.", tex: h`\delta A=\vec F\cdot d\vec r=-dU` },
            { title: "Primerjamo komponente", body: h`Ker je \(dU=\nabla U\cdot d\vec r\), sledi zveza med silo in gradientom.`, tex: h`\vec F\cdot d\vec r=-\nabla U\cdot d\vec r\quad\Rightarrow\quad\vec F=-\nabla U` },
            { title: "Pri radialni sili", body: h`Če je \(U=U(r)\), gradient kaže radialno. Potencial dobimo z enim integralom.`, tex: h`\vec F=F(r)\vec e_r=-\frac{dU}{dr}\vec e_r,\qquad U(r)=-\int F(r)\,dr` },
            { title: "Preizkus konzervativnosti", body: "Na enostavno povezani domeni je polje konservativno, če je njegov rotor nič.", tex: h`\nabla\times\vec F=\vec0` }
          ],
          summary: h`V IKS velja \(m\vec a=\vec F\). Potencialna sila ima obliko \(\vec F=-\nabla U\). Znati moram potencial za konstantno silo, gravitacijo, Coulombovo silo in vzmet; trenje ter hitrostno odvisna magnetna sila nista navadni konzervativni sili.`,
          pitfall: h`Magnetna sila ni potencialna v smislu skalarnega \(U(\vec r)\), vendar je vedno pravokotna na \(\vec v\), zato magnetni del Lorentzove sile ne spreminja kinetične energije.`
        },
        {
          letter: "b",
          title: "Izrek o delu in izrek o energiji",
          question: "Izpelji delo kot spremembo kinetične energije in nato ohranitev mehanske energije.",
          start: "Skalarno pomnožim Newtonovo enačbo s premikom. Leva stran postane totalni odvod kinetične energije, zato je delo rezultante enako njeni spremembi. Pri potencialni sili je isto delo tudi minus sprememba potenciala.",
          formulas: [
            { label: "Delo in moč", tex: h`A_{1\to2}=\int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r,\qquad \mathcal P=\vec F\cdot\vec v`, explain: h`Moč je delo na enoto časa.` },
            { label: "Izrek o delu", tex: h`A_{1\to2}=T_2-T_1,\qquad T=\frac12m v^2`, explain: h`Velja za rezultanto vseh sil, tudi nekonzervativnih.`, wide: true },
            { label: "Energijska enačba", tex: h`T+U=E=\text{konst.}`, explain: h`Velja, ko vse sile zajamemo s časovno neodvisnim potencialom.`, wide: true }
          ],
          notation: [
            { tex: h`A_{1\to2}`, meaning: "delo od 1 do 2" },
            { tex: h`T`, meaning: "kinetična energija" },
            { tex: h`U`, meaning: "potencialna energija" },
            { tex: h`\mathcal P`, meaning: "moč" }
          ],
          derivation: [
            { title: "Newtonovo enačbo skalarno množimo s hitrostjo", body: h`Uporabimo \(d\vec r=\vec v\,dt\).`, tex: h`\vec F\cdot\vec v=m\dot{\vec v}\cdot\vec v=\frac{d}{dt}\!\left(\frac12m v^2\right)` },
            { title: "Integriramo po času", body: "Levo dobimo delo, desno razliko kinetičnih energij.", tex: h`\int_{t_1}^{t_2}\vec F\cdot\vec v\,dt=\left[\frac12mv^2\right]_{t_1}^{t_2}=T_2-T_1` },
            { title: "Vstavimo potencialno silo", body: h`Za \(\vec F=-\nabla U\) je delo negativna sprememba potenciala.`, tex: h`A_{1\to2}=-\int_1^2\nabla U\cdot d\vec r=-(U_2-U_1)` },
            { title: "Enačimo oba zapisa dela", body: "Preureditev da ohranitev vsote kinetične in potencialne energije.", tex: h`T_2-T_1=U_1-U_2\quad\Rightarrow\quad T_1+U_1=T_2+U_2` }
          ],
          summary: h`Iz \(m\dot{\vec v}=\vec F\) po skalarnem množenju z \(\vec v\) dobim \(dT/dt=\vec F\cdot\vec v\); integracija da \(A=\Delta T\). Če je \(\vec F=-\nabla U\), je \(A=-\Delta U\), zato \(T+U\) ostaja konstantna.`,
          pitfall: h`Izrek o delu \(A=\Delta T\) velja vedno za rezultanto sil. Ohranitev \(T+U\) pa zahteva konzervativne sile oziroma pravilno upoštevanje nekonzervativnega dela.`
        }
      ]
    },
    {
      number: 3,
      id: "premocrtno-gibanje",
      title: "Premočrtno gibanje",
      short: "Kaj pove graf potenciala, kako dobimo periodo in kako obravnavamo gibanje po vezi.",
      minutes: 65,
      accent: "#9d83f4",
      intro: "Pri enodimenzionalnem gibanju energijska enačba skoraj v celoti nadomesti reševanje Newtonove enačbe. Iz grafa potenciala preberemo dovoljeno območje, obračališča, ravnovesja in stabilnost.",
      diagram: diagrams.straight,
      sources: ["ročni zapiski str. 3–4", "priročnik str. 12–14"],
      subtopics: [
        {
          letter: "a",
          title: "Kvalitativna obravnava",
          question: "Iz potenciala razberi dovoljeno gibanje, ravnovesja in stabilnost.",
          start: h`Za silo \(F(x)=-U'(x)\) se ohranja energija. Ker kinetična energija ne more biti negativna, je gibanje možno le tam, kjer je \(U(x)\le E\); presečišča \(U=E\) so obračališča.`,
          formulas: [
            { label: "Energijski integral", tex: h`\frac12m\dot x^2+U(x)=E`, explain: h`Osnovna enačba kvalitativne analize.`, wide: true },
            { label: "Hitrost in čas", tex: h`\dot x=\pm\sqrt{\frac{2}{m}[E-U(x)]},\qquad t-t_0=\pm\sqrt{\frac m2}\int_{x_0}^{x}\frac{d\xi}{\sqrt{E-U(\xi)}}`, explain: h`Predznak izbere smer gibanja.`, wide: true },
            { label: "Ravnovesje", tex: h`U'(x_0)=0:\quad U''(x_0)>0\ \text{stabilno},\quad U''(x_0)<0\ \text{nestabilno}`, explain: h`Minimum potenciala je stabilna jama, maksimum nestabilen vrh.` }
          ],
          notation: [
            { tex: h`E`, meaning: "celotna energija" },
            { tex: h`U(x)`, meaning: "potencial" },
            { tex: h`x_\pm`, meaning: "obračališči, U=E" },
            { tex: h`x_0`, meaning: "ravnovesna lega" }
          ],
          derivation: [
            { title: "Začnemo z ohranitvijo energije", body: "V enodimenzionalnem konservativnem problemu je vsota kinetične in potencialne energije stalna." },
            { title: "Osamimo hitrost", body: h`Koren je realen samo pri \(E-U\ge0\), zato takoj dobimo dovoljeno območje.`, tex: h`\dot x^2=\frac{2}{m}[E-U(x)]` },
            { title: "Ločimo spremenljivki", body: h`Ker je \(dt=dx/\dot x\), dobimo čas gibanja s kvadraturo.`, tex: h`dt=\pm\sqrt{\frac m2}\frac{dx}{\sqrt{E-U(x)}}` },
            { title: "Ravnovesje in stabilnost", body: "Ravnovesje zahteva ničelno silo. Taylorjev razvoj pokaže, ali majhen odmik povzroči povratno ali odbojno silo.", tex: h`F(x_0)=-U'(x_0)=0,\qquad F(x_0+\eta)\simeq-U''(x_0)\eta` }
          ],
          summary: h`Iz \(\tfrac12m\dot x^2+U=E\) sledi \(U\le E\). Točke \(U=E\) so obračališča, ničle \(U'\) ravnovesja; minimum je stabilen, maksimum nestabilen. Čas dobim z ločitvijo \(dt=dx/\dot x\).`,
          pitfall: h`Če je \(U''(x_0)=0\), drugi odvod ne odloči stabilnosti; pogledati moramo prvi neničelni višji člen ali neposredno obliko potenciala.`
        },
        {
          letter: "b",
          title: "Izračun periode in harmonična aproksimacija",
          question: "Izpelji integral za periodo ter periodo majhnih nihanj okoli minimuma.",
          start: "Pri vezanem gibanju med obračališčema je pol perioda čas od levega do desnega obračališča. Blizu stabilnega minimuma potencial nadomestim s parabolo in dobim harmonični oscilator.",
          formulas: [
            { label: "Točna perioda", tex: h`T=2\int_a^b\frac{dx}{\sqrt{\frac{2}{m}[E-U(x)]}}=\sqrt{2m}\int_a^b\frac{dx}{\sqrt{E-U(x)}}`, explain: h`\(a,b\) sta obračališči: \(U(a)=U(b)=E\).`, wide: true },
            { label: "Harmonična aproksimacija", tex: h`U(x)\simeq U(x_0)+\frac12k(x-x_0)^2,\qquad k=U''(x_0)`, explain: h`Linearni člen izgine, ker je \(x_0\) ravnovesje.` },
            { label: "Perioda majhnih nihanj", tex: h`\omega_0=\sqrt{\frac{U''(x_0)}{m}},\qquad T_0=2\pi\sqrt{\frac{m}{U''(x_0)}}`, explain: h`V kvadratni aproksimaciji ni odvisna od amplitude.`, wide: true }
          ],
          notation: [
            { tex: h`a,b`, meaning: "leva in desna obračalna točka" },
            { tex: h`x_0`, meaning: "stabilni minimum" },
            { tex: h`k=U''(x_0)`, meaning: "efektivna togost" },
            { tex: h`\omega_0`, meaning: "lastna krožna frekvenca" }
          ],
          derivation: [
            { title: "Čas poti od a do b", body: "Iz energijskega integrala vzamemo pozitivno vejo hitrosti.", tex: h`t_{a\to b}=\int_a^b\frac{dx}{\dot x}=\sqrt{\frac m2}\int_a^b\frac{dx}{\sqrt{E-U(x)}}` },
            { title: "Podvojimo", body: h`Povratek od \(b\) do \(a\) traja enako, zato je cela perioda dvakratnik.` },
            { title: "Razvijemo potencial", body: h`V minimumu je \(U'(x_0)=0\), zato ostane najprej kvadratni člen.`, tex: h`U(x_0+\eta)=U(x_0)+\frac12U''(x_0)\eta^2+O(\eta^3)` },
            { title: "Dobimo harmonično enačbo", body: "Newtonova enačba po linearizaciji postane standardni oscilator.", tex: h`m\ddot\eta=-U'(x_0+\eta)\simeq-U''(x_0)\eta\quad\Rightarrow\quad\ddot\eta+\omega_0^2\eta=0` },
            { title: "Preberemo periodo", body: h`Rešitev je sinusna ali kosinusna s frekvenco \(\omega_0\), zato je \(T_0=2\pi/\omega_0\).` }
          ],
          summary: h`Pol perioda je integral časa od \(a\) do \(b\), zato \(T=\sqrt{2m}\int_a^b dx/\sqrt{E-U}\). Blizu minimuma razvijem \(U\simeq U_0+\tfrac12U''_0(x-x_0)^2\), dobim \(\omega_0^2=U''_0/m\) in \(T_0=2\pi\sqrt{m/U''_0}\).`,
          pitfall: h`Integral od \(a\) do \(b\) je samo pol perioda. Harmonična formula velja za dovolj majhne odmike okoli stabilnega minimuma, ne okoli maksimuma.`
        },
        {
          letter: "c",
          title: "Gibanje po krivulji",
          question: "Zapiši gibalno enačbo po Frenetovi bazi in pojasni vlogo sile vezi.",
          start: h`Če je točka prisiljena na dano krivuljo, ostane ena prostostna stopnja \(s(t)\). Newtonovo enačbo razcepim na tangentno, normalno in binormalno smer; pri gladki vezi reakcija nima tangentne komponente.`,
          formulas: [
            { label: "Newton po krivulji", tex: h`m(\ddot s\,\vec e_t+\kappa\dot s^2\,\vec e_n)=\vec F+\vec S`, explain: h`\(\vec F\) je aktivna sila, \(\vec S\) reakcija vezi.`, wide: true },
            { label: "Komponente", tex: h`m\ddot s=F_t+S_t,\qquad m\kappa\dot s^2=F_n+S_n,\qquad 0=F_b+S_b`, explain: h`Tri projekcije določijo gibanje in reakcijo.` },
            { label: "Gladka vez", tex: h`S_t=\vec S\cdot\vec e_t=0,\qquad \delta A_S=0`, explain: h`Idealna reakcija ne opravlja dela.` },
            { label: "Pogoj odleta", tex: h`S_n=0`, explain: "Pri enostranski vezi stik izgine, ko potrebna normalna reakcija doseže nič." }
          ],
          notation: [
            { tex: h`\vec S`, meaning: "sila vezi" },
            { tex: h`F_t,F_n,F_b`, meaning: "komponente aktivne sile" },
            { tex: h`\kappa\dot s^2`, meaning: "normalni pospešek" },
            { tex: h`s(t)`, meaning: "koordinata vzdolž vezi" }
          ],
          derivation: [
            { title: "Vstavimo kinematični razcep", body: "Pospešek točke na krivulji že poznamo iz prvega poglavja.", tex: h`\vec a=\ddot s\vec e_t+\kappa\dot s^2\vec e_n` },
            { title: "Dodamo reakcijo", body: h`Vez prepreči gibanje iz krivulje, zato njeno delovanje predstavimo z neznano silo \(\vec S\).`, tex: h`m\vec a=\vec F+\vec S` },
            { title: "Projiciramo", body: "Skalarni produkt z vsakim Frenetovim baznim vektorjem da tri skalarne enačbe." },
            { title: "Pri gladki vezi", body: h`Dovoljeni virtualni premik je tangenten; idealna reakcija je pravokotna nanj, zato \(S_t=0\) in ne spremeni energije.` },
            { title: "Odlet", body: "Če vez lahko samo potiska, ne pa vleče, je meja stika trenutek, ko izračunana normalna reakcija postane nič." }
          ],
          summary: h`Za točko na krivulji zapišem \(m(\ddot s\vec e_t+\kappa\dot s^2\vec e_n)=\vec F+\vec S\) in projiciram na Frenetovo bazo. Pri gladki vezi je \(S_t=0\), zato reakcija ne dela; pri enostranskem stiku je pogoj odleta \(S_n=0\).`,
          pitfall: "Sila vezi ni avtomatično samo normalna pri hrapavi vezi. To drži za idealno gladko vez; trenje doda tangentno komponento."
        }
      ]
    },
    {
      number: 4,
      id: "centralna-sila",
      title: "Gibanje v polju centralne sile",
      short: "Ohranitveni količini, Keplerjevi zakoni, Binetova enačba in efektivni potencial.",
      minutes: 85,
      accent: "#f2c96d",
      intro: "Centralna sila vedno leži na zveznici s fiksnim centrom. Zato nima navora glede na center: vrtilna količina se ohranja, gibanje je ravninsko, energija in kot pa problem reducirata na eno radialno koordinato.",
      diagram: diagrams.central,
      sources: ["ročni zapiski str. 5–6", "priročnik str. 15–18"],
      subtopics: [
        {
          letter: "a",
          title: "Integrali gibanja",
          question: "Dokaži ohranitev vrtilne količine, ravninskost, ploščinsko hitrost in energijo.",
          start: h`Centralna sila ima obliko \(\vec F=F(r)\vec e_r\), zato je njen navor glede na center nič. Ohranjena vrtilna količina določa stalno ravnino gibanja in konstantno ploščinsko hitrost; če je sila konzervativna, se ohranja še energija.`,
          formulas: [
            { label: "Centralna sila", tex: h`\vec F(\vec r)=F(r)\vec e_r,\qquad U(r)=-\int F(r)\,dr`, explain: h`Smer je radialna, velikost je odvisna le od razdalje.` },
            { label: "Vrtilna količina", tex: h`\vec\ell=\vec r\times m\vec v=\text{konst.}`, explain: h`Ker je \(\vec\ell\perp\vec r\), ves tir leži v ravnini pravokotni na \(\vec\ell\).`, wide: true },
            { label: "Ploščinska hitrost", tex: h`\dot A=\frac12r^2\dot\varphi=\frac{|\vec\ell|}{2m}=\text{konst.}`, explain: h`To je drugi Keplerjev zakon.` },
            { label: "Energija", tex: h`E=\frac12m(\dot r^2+r^2\dot\varphi^2)+U(r)=\text{konst.}`, explain: h`Drugi neodvisni integral gibanja.`, wide: true }
          ],
          notation: [
            { tex: h`\vec\ell`, meaning: "vrtilna količina glede na center" },
            { tex: h`\dot A`, meaning: "ploščinska hitrost" },
            { tex: h`C=r^2\dot\varphi`, meaning: "dvakratna ploščinska hitrost" },
            { tex: h`U(r)`, meaning: "centralni potencial" }
          ],
          derivation: [
            { title: "Izračunamo navor", body: "Centralna sila je vzporedna s krajevnim vektorjem.", tex: h`\vec N=\vec r\times\vec F=\vec r\times F(r)\vec e_r=\vec0` },
            { title: "Uporabimo izrek o vrtilni količini", body: "Ničelnemu navoru ustreza konstantna vrtilna količina.", tex: h`\dot{\vec\ell}=\vec N=\vec0` },
            { title: "Ravninskost", body: h`Ker je \(\vec r(t)\cdot\vec\ell=0\) za vsak čas in je \(\vec\ell\) stalna, so vse lege v isti ravnini skozi center.` },
            { title: "Ploščina majhnega trikotnika", body: h`V času \(dt\) radij opiše ploščino \(dA=\tfrac12|\vec r\times d\vec r|\).`, tex: h`\dot A=\frac12|\vec r\times\vec v|=\frac{|\vec\ell|}{2m}` },
            { title: "Energija", body: h`Ker je \(\vec F=-\nabla U(r)\), iz izreka o energiji sledi drugi integral \(E=T+U\).` }
          ],
          summary: h`Za \(\vec F=F(r)\vec e_r\) je \(\vec r\times\vec F=0\), zato se \(\vec\ell=\vec r\times m\vec v\) ohranja in je tir ravninski. Od tod \(\dot A=|\ell|/(2m)\) ter \(r^2\dot\varphi=\text{konst.}\); pri potencialni sili se ohranja tudi energija.`,
          pitfall: h`Konstanta \(C=r^2\dot\varphi\) je specifična vrtilna količina: \(|\ell|=mC\). Ne zamenjaj ju in ne izgubi faktorja \(1/2\) pri ploščinski hitrosti.`
        },
        {
          letter: "b",
          title: "Keplerjevi zakoni in Binetova enačba",
          question: "Navedi tri zakone, izpelji Binetovo enačbo in pokaži stožnični tir pri sili 1/r².",
          start: h`Keplerjevi zakoni opisujejo tire pri gravitacijski sili. Binetova zamenjava \(u=1/r\) odstrani čas in spremeni radialno Newtonovo enačbo v diferencialno enačbo tira \(u(\varphi)\).`,
          formulas: [
            { label: "Keplerjevi zakoni", tex: h`\text{I: elipsa z goriščem v Soncu},\quad \text{II: }\dot A=\text{konst.},\quad \text{III: }T^2\propto a^3`, explain: h`Natančneje \(T^2=4\pi^2a^3/[G(M+m)]\), za planet \(m\ll M\).`, wide: true },
            { label: "Binetova enačba", tex: h`a_r=-C^2u^2(u''+u),\qquad u=\frac1r,\quad C=r^2\dot\varphi`, explain: h`Črtica pomeni odvod po \(\varphi\), ne po času.`, wide: true },
            { label: "Binet + Newton", tex: h`u''+u=-\frac{F(1/u)}{mC^2u^2}`, explain: h`Na desni vstavimo zakon centralne sile.` },
            { label: "Gravitacijski tir", tex: h`F(r)=-\frac{k}{r^2}\ \Rightarrow\ r(\varphi)=\frac{p}{1+e\cos(\varphi-\varphi_0)},\qquad p=\frac{mC^2}{k}=\frac{\ell^2}{mk}`, explain: h`\(e<1\) elipsa, \(e=1\) parabola, \(e>1\) hiperbola.`, wide: true }
          ],
          notation: [
            { tex: h`u=1/r`, meaning: "Binetova spremenljivka" },
            { tex: h`C=r^2\dot\varphi`, meaning: "specifična vrtilna količina" },
            { tex: h`a`, meaning: "velika polos elipse" },
            { tex: h`e`, meaning: "ekscentričnost" },
            { tex: h`p`, meaning: "parameter stožnice" },
            { tex: h`k=GMm`, meaning: "gravitacijski parameter sile" }
          ],
          derivation: [
            { title: "Čas zamenjamo s kotom", body: h`Iz ohranitve vrtilne količine je \(\dot\varphi=C/r^2=Cu^2\).`, tex: h`\frac d{dt}=\dot\varphi\frac d{d\varphi}=Cu^2\frac d{d\varphi}` },
            { title: "Izračunamo radialno hitrost", body: h`Ker je \(r=1/u\), se faktorja \(u^2\) odpravita.`, tex: h`\dot r=\frac{dr}{d\varphi}\dot\varphi=-\frac{u'}{u^2}Cu^2=-Cu'` },
            { title: "Izračunamo radialni pospešek", body: "Še en odvod in odštevanje centripetalnega člena dasta Binetov izraz.", tex: h`\ddot r=-C^2u^2u'',\qquad r\dot\varphi^2=C^2u^3\quad\Rightarrow\quad a_r=\ddot r-r\dot\varphi^2=-C^2u^2(u''+u)` },
            { title: "Vstavimo silo oblike 1/r²", body: h`Za \(F=-k/r^2=-ku^2\) postane desna stran konstanta.`, tex: h`u''+u=\frac{k}{mC^2}=\frac1p` },
            { title: "Rešimo linearno enačbo", body: h`Homogena rešitev je kosinus, partikularna pa \(1/p\); preureditev da stožnico.`, tex: h`u=\frac1p\,[1+e\cos(\varphi-\varphi_0)]` },
            { title: "Izpeljemo še tretji Keplerjev zakon", body: h`Za elipso je \(p=a(1-e^2)\), \(b=a\sqrt{1-e^2}\), ploščina pa \(\pi ab\). Ker je \(\dot A=C/2\) in \(C^2=\mu p\), \(\mu=G(M+m)\), dobimo periodo iz \(T=\pi ab/\dot A\).`, tex: h`T=\frac{2\pi ab}{C}\quad\Rightarrow\quad T^2=\frac{4\pi^2a^3}{G(M+m)}` }
          ],
          summary: h`Kepler: elipse z Soncem v gorišču, enake ploščine v enakih časih in \(T^2\propto a^3\). Z \(u=1/r\) in \(C=r^2\dot\varphi\) dobim \(a_r=-C^2u^2(u''+u)\). Za \(F=-k/r^2\) sledi \(u''+u=1/p\) in tir \(r=p/(1+e\cos\varphi)\).`,
          pitfall: h`V Binetovi enačbi \(u''\) pomeni \(d^2u/d\varphi^2\). Predznak sile je bistven: pri privlačni gravitaciji je \(F(r)<0\).`
        },
        {
          letter: "c",
          title: "Redukcija na premočrtno gibanje",
          question: "Izloči kotno gibanje in uvedi efektivni potencial.",
          start: h`Ohranjeno vrtilno količino vstavim v energijo. Kotna kinetična energija postane člen \(\ell^2/(2mr^2)\), ki ga prištejem potencialu; radialno gibanje je nato navaden enodimenzionalni problem.`,
          formulas: [
            { label: "Izločitev kota", tex: h`\ell=mr^2\dot\varphi\quad\Rightarrow\quad r^2\dot\varphi^2=\frac{\ell^2}{m^2r^2}`, explain: h`Kotna hitrost je določena z \(r\).` },
            { label: "Radialna energijska enačba", tex: h`\frac12m\dot r^2+U_{\rm eff}(r)=E`, explain: h`Ista oblika kot pri premočrtnem gibanju.`, wide: true },
            { label: "Efektivni potencial", tex: h`U_{\rm eff}(r)=U(r)+\frac{\ell^2}{2mr^2}`, explain: h`Drugi člen je centrifugalna bariera.` },
            { label: "Krožni tir in stabilnost", tex: h`U_{\rm eff}'(r_c)=0,\qquad U_{\rm eff}''(r_c)>0\ \text{za stabilen tir}`, explain: h`Obračališči \(U_{\rm eff}=E\) sta periapsa in apoapsa.`, wide: true }
          ],
          notation: [
            { tex: h`U_{\rm eff}`, meaning: "efektivni radialni potencial" },
            { tex: h`\ell`, meaning: "velikost vrtilne količine" },
            { tex: h`r_c`, meaning: "radij krožnega tira" },
            { tex: h`r_{\min},r_{\max}`, meaning: "radialni obračališči" }
          ],
          derivation: [
            { title: "Razcepimo brzino", body: "V polarnih koordinatah je kvadrat brzine vsota radialnega in obodnega dela.", tex: h`v^2=\dot r^2+r^2\dot\varphi^2` },
            { title: "Vstavimo vrtilno količino", body: h`Iz \(\ell=mr^2\dot\varphi\) izrazimo obodni člen.`, tex: h`\frac12mr^2\dot\varphi^2=\frac{\ell^2}{2mr^2}` },
            { title: "Združimo člene, odvisne od r", body: "V energiji pustimo radialno kinetično energijo, ostalo definiramo kot efektivni potencial.", tex: h`E=\frac12m\dot r^2+\underbrace{\left[U(r)+\frac{\ell^2}{2mr^2}\right]}_{U_{\rm eff}(r)}` },
            { title: "Uporabimo 1D sliko", body: h`Dovoljeno je \(U_{\rm eff}\le E\), obračališča so presečišča; pri krožnici je \(r\) stalna, zato je ekstrem \(U_{\rm eff}\).` }
          ],
          summary: h`Ker je \(\ell=mr^2\dot\varphi\), kotni del energije postane \(\ell^2/(2mr^2)\). Zato \(\tfrac12m\dot r^2+U_{\rm eff}(r)=E\), kjer je \(U_{\rm eff}=U+\ell^2/(2mr^2)\). Minimum da stabilen krožni tir, presečišča z \(E\) pa radialni obračališči.`,
          pitfall: h`Centrifugalni člen spada v efektivni potencial, ne v pravi potencial sile. Pri \(\ell=0\) bariera izgine in je gibanje čisto radialno.`
        }
      ]
    },
    {
      number: 5,
      id: "relativno-gibanje",
      title: "Relativno gibanje",
      short: "Kotna hitrost vrteče baze, absolutni razcep in navidezne sile.",
      minutes: 65,
      accent: "#58d5f7",
      intro: "Ko opazovalni sistem translira in se vrti, se spreminjajo tudi njegovi bazni vektorji. Eno samo pravilo odvajanja ustvari vse dodatne člene: Eulerjev, centrifugalni in Coriolisov pospešek.",
      diagram: diagrams.relative,
      sources: ["ročni zapiski str. 6–7", "priročnik str. 19–21"],
      subtopics: [
        {
          letter: "a",
          title: "Vektor kotne hitrosti",
          question: "Pokaži obstoj vektorja kotne hitrosti in zapiši transportni izrek.",
          start: h`Ker vrteča ortonormirana baza ohranja skalarne produkte, je matrika njenih odvodov antisimetrična. Vsaki antisimetrični matriki v treh dimenzijah pripada vektor \(\vec\omega\), tako da je odvod vsake bazne enote \(\vec\omega\times\vec e_i\).`,
          formulas: [
            { label: "Vrtenje baze", tex: h`\dot{\vec e}_i=\vec\omega\times\vec e_i`, explain: h`\(\vec\omega\) kaže vzdolž trenutne osi vrtenja.`, wide: true },
            { label: "Transportni izrek", tex: h`\left(\frac{d\vec Q}{dt}\right)_{\!abs}=\left(\frac{d\vec Q}{dt}\right)_{\!rel}+\vec\omega\times\vec Q`, explain: h`Velja za poljuben vektor, izražen v vrteči bazi.`, wide: true }
          ],
          notation: [
            { tex: h`\vec e_i(t)`, meaning: "bazne enote vrtečega KS" },
            { tex: h`\vec\omega`, meaning: "vektor kotne hitrosti" },
            { tex: h`(d/dt)_{abs}`, meaning: "odvod za mirujočega opazovalca" },
            { tex: h`(d/dt)_{rel}`, meaning: "odvod komponent v RKS" }
          ],
          derivation: [
            { title: "Odvajamo ortonormiranost", body: h`Skalarni produkt baznih vektorjev je ves čas \(\delta_{ij}\).`, tex: h`0=\frac d{dt}(\vec e_i\cdot\vec e_j)=\dot{\vec e}_i\cdot\vec e_j+\vec e_i\cdot\dot{\vec e}_j` },
            { title: "Matrika je antisimetrična", body: h`Če pišemo \(\dot{\vec e}_i=A_{ji}\vec e_j\), zgornja enačba da \(A_{ij}=-A_{ji}\).` },
            { title: "Antisimetrična matrika je križni produkt", body: h`V treh dimenzijah ima taka matrika tri neodvisne komponente, točno komponente vektorja \(\vec\omega\).`, tex: h`A\vec q=\vec\omega\times\vec q` },
            { title: "Odvajamo poljuben vektor", body: h`Pri \(\vec Q=Q_i\vec e_i\) odvajamo komponente in bazo.`, tex: h`\dot{\vec Q}=\dot Q_i\vec e_i+Q_i\dot{\vec e}_i=\left(\frac{d\vec Q}{dt}\right)_{rel}+\vec\omega\times\vec Q` }
          ],
          summary: h`Odvod pogoja \(\vec e_i\cdot\vec e_j=\delta_{ij}\) pokaže, da je matrika vrtenja baze antisimetrična, zato obstaja \(\vec\omega\) z \(\dot{\vec e}_i=\vec\omega\times\vec e_i\). Od tod sledi transportni izrek \((d\vec Q/dt)_{abs}=(d\vec Q/dt)_{rel}+\vec\omega\times\vec Q\).`,
          pitfall: h`Vrstni red križnega produkta je \(\vec\omega\times\vec Q\), ne obratno. Obratni vrstni red spremeni predznak.`
        },
        {
          letter: "b",
          title: "Relativna hitrost in pospešek",
          question: "Izpelji absolutno hitrost in vseh pet členov absolutnega pospeška.",
          start: "Absolutna lega je vsota lege izhodišča vrtečega sistema in relativne lege. Enkratno odvajanje da translacijsko, rotacijsko in relativno hitrost; drugo odvajanje da pet pospeškov.",
          formulas: [
            { label: "Lega", tex: h`\vec r=\vec r_0+\vec\xi`, explain: h`\(\vec\xi\) je zapisana v vrteči bazi.` },
            { label: "Absolutna hitrost", tex: h`\vec v=\dot{\vec r}_0+\vec\omega\times\vec\xi+\vec v_{rel}`, explain: h`Translacijski + rotacijski + relativni del.`, wide: true },
            { label: "Absolutni pospešek", tex: h`\vec a=\ddot{\vec r}_0+\dot{\vec\omega}\times\vec\xi+\vec\omega\times(\vec\omega\times\vec\xi)+2\vec\omega\times\vec v_{rel}+\vec a_{rel}`, explain: h`Po vrsti: translacijski, Eulerjev, centripetalni, Coriolisov, relativni.`, wide: true }
          ],
          notation: [
            { tex: h`\vec r_0`, meaning: "lega izhodišča RKS" },
            { tex: h`\vec\xi`, meaning: "relativna lega" },
            { tex: h`\vec v_{rel}`, meaning: "hitrost, merjena v RKS" },
            { tex: h`\vec a_{rel}`, meaning: "pospešek, merjen v RKS" }
          ],
          derivation: [
            { title: "Prvi odvod lege", body: h`Na \(\vec\xi\) uporabimo transportni izrek.`, tex: h`\dot{\vec r}=\dot{\vec r}_0+\left(\frac{d\vec\xi}{dt}\right)_{rel}+\vec\omega\times\vec\xi` },
            { title: "Odvajamo rotacijski člen", body: h`Produktno pravilo in transportni izrek za \(\vec\xi\).`, tex: h`\frac d{dt}(\vec\omega\times\vec\xi)=\dot{\vec\omega}\times\vec\xi+\vec\omega\times\vec v_{rel}+\vec\omega\times(\vec\omega\times\vec\xi)` },
            { title: "Odvajamo relativno hitrost", body: "Tudi relativni vektor hitrosti se vrti z bazo.", tex: h`\left(\frac{d\vec v_{rel}}{dt}\right)_{abs}=\vec a_{rel}+\vec\omega\times\vec v_{rel}` },
            { title: "Seštejemo", body: h`Dva enaka člena \(\vec\omega\times\vec v_{rel}\) data faktor 2 pri Coriolisovem pospešku.` }
          ],
          summary: h`Iz \(\vec r=\vec r_0+\vec\xi\) in transportnega izreka dobim \(\vec v=\dot{\vec r}_0+\vec\omega\times\vec\xi+\vec v_{rel}\). Drugi odvod da translacijski, Eulerjev, centripetalni, dvakratni Coriolisov in relativni pospešek.`,
          pitfall: h`Centripetalni pospešek v absolutnem razcepu je \(\vec\omega\times(\vec\omega\times\vec\xi)\), usmerjen proti osi. Centrifugalna sila v Newtonovi enačbi RKS ima nasproten predznak.`
        },
        {
          letter: "c",
          title: "Newtonova enačba v vrtečem sistemu",
          question: "Prenesi dodatne pospeške na desno in poimenuj navidezne sile.",
          start: "Newtonov zakon velja za absolutni pospešek. Če želim enačbo za relativno gibanje, vse pospeške opazovalnega sistema prenesem na desno in jih pomnožim z minus maso; dobim navidezne sile.",
          formulas: [
            { label: "Newton v RKS", tex: h`m\vec a_{rel}=\vec F-m\ddot{\vec r}_0-m\dot{\vec\omega}\times\vec\xi-m\vec\omega\times(\vec\omega\times\vec\xi)-2m\vec\omega\times\vec v_{rel}`, explain: h`Štirje dodatni členi so inercialna, Eulerjeva, centrifugalna in Coriolisova sila.`, wide: true },
            { label: "Centrifugalna sila", tex: h`\vec F_{cf}=-m\vec\omega\times(\vec\omega\times\vec\xi)=m\omega^2\vec\xi_\perp`, explain: h`Kaže proč od osi vrtenja.` },
            { label: "Coriolisova sila", tex: h`\vec F_C=-2m\vec\omega\times\vec v_{rel}`, explain: h`Obstaja le, kadar se točka giblje glede na RKS.` }
          ],
          notation: [
            { tex: h`\vec F`, meaning: "vsota realnih sil" },
            { tex: h`-m\ddot{\vec r}_0`, meaning: "translacijska inercialna sila" },
            { tex: h`-m\dot{\vec\omega}\times\vec\xi`, meaning: "Eulerjeva sila" },
            { tex: h`\vec F_C`, meaning: "Coriolisova sila" }
          ],
          derivation: [
            { title: "Začnemo v IKS", body: "Drugi Newtonov zakon vsebuje absolutni pospešek.", tex: h`m\vec a=\vec F` },
            { title: "Vstavimo kinematični razcep", body: h`Za \(\vec a\) uporabimo vseh pet členov iz prejšnje podtočke.` },
            { title: "Osamimo relativni pospešek", body: h`Vse člene razen \(m\vec a_{rel}\) prenesemo na desno; zato dobijo minus.` },
            { title: "Posebna primera", body: h`Če izhodišče ne pospešuje, prvi navidezni člen izgine. Pri enakomerni rotaciji je \(\dot{\vec\omega}=0\), zato ni Eulerjeve sile.` }
          ],
          summary: h`V \(m\vec a=\vec F\) vstavim absolutni razcep in osamim \(m\vec a_{rel}\). Na desni dobim realne sile ter z minusom translacijsko inercialno, Eulerjevo, centrifugalno in Coriolisovo silo. Coriolisova ima faktor 2 in izgine pri \(\vec v_{rel}=0\).`,
          pitfall: "Navidezne sile niso nove interakcije, ampak posledica izbire neinercialnega sistema. Vse imajo maso in predznak, dobljen s prenosom kinematičnih členov na desno."
        }
      ]
    },
    {
      number: 6,
      id: "sistem-tock",
      title: "Sistem materialnih točk",
      short: "Masno središče, bilanca vrtilne količine in energija sistema.",
      minutes: 60,
      accent: "#75ddb2",
      intro: "Pri mnogih točkah notranje sile nastopajo v parih. Tretji Newtonov zakon povzroči, da pri skupni gibalni količini odpadejo; za skupni navor potrebujemo še, da so notranje sile centralne.",
      diagram: diagrams.particles,
      sources: ["ročni zapiski str. 8–9", "priročnik str. 22–24"],
      subtopics: [
        {
          letter: "a",
          title: "Masno središče",
          question: "Definiraj masno središče in izpelji enačbo njegovega gibanja.",
          start: "Masno središče je masno uteženo povprečje leg. Ko seštejem Newtonove enačbe vseh točk, se notranje sile po tretjem Newtonovem zakonu paroma izničijo, zato masno središče pospešuje samo zaradi zunanjih sil.",
          formulas: [
            { label: "Definicija", tex: h`\vec R=\frac1M\sum_{i=1}^Nm_i\vec r_i,\qquad M=\sum_{i=1}^Nm_i`, explain: h`Za zvezno telo vsoto zamenja integral.` },
            { label: "Gibanje masnega središča", tex: h`M\ddot{\vec R}=\sum_i\vec F_i^{\,ext}=\vec F^{\,ext}`, explain: h`Sistem se translacijsko obnaša, kot da bi bila vsa masa v \(\vec R\).`, wide: true },
            { label: "Gibalna količina", tex: h`\vec P=\sum_i m_i\vec v_i=M\dot{\vec R},\qquad \dot{\vec P}=\vec F^{\,ext}`, explain: h`Če je zunanja rezultanta nič, se \(\vec P\) ohranja.` }
          ],
          notation: [
            { tex: h`M`, meaning: "celotna masa" },
            { tex: h`\vec R`, meaning: "lega masnega središča" },
            { tex: h`\vec P`, meaning: "skupna gibalna količina" },
            { tex: h`\vec F_i^{ext}`, meaning: "zunanja sila na i-točko" }
          ],
          derivation: [
            { title: "Dvakrat odvajamo definicijo", body: "Mase so stalne.", tex: h`M\ddot{\vec R}=\sum_i m_i\ddot{\vec r}_i` },
            { title: "Vstavimo Newtona za vsako točko", body: "Sila na točko je vsota zunanje in vseh notranjih sil.", tex: h`m_i\ddot{\vec r}_i=\vec F_i^{ext}+\sum_{j\ne i}\vec F_{ij}` },
            { title: "Notranje sile odpadejo", body: h`Za vsak par velja \(\vec F_{ij}=-\vec F_{ji}\), zato je dvojna vsota notranjih sil nič.` },
            { title: "Ostane zunanja rezultanta", body: "Tako neposredno dobimo enačbo masnega središča in bilanco gibalne količine." }
          ],
          summary: h`\(\vec R=M^{-1}\sum m_i\vec r_i\). Po dvojnem odvajanju in seštevanju Newtonovih enačb notranje sile zaradi akcije in reakcije odpadejo, zato \(M\ddot{\vec R}=\vec F^{ext}\). Če zunanjih sil ni, je \(\vec P=M\dot{\vec R}\) konstantna.`,
          pitfall: "Za izničenje skupne notranje sile zadošča tretji Newtonov zakon. Za izničenje notranjega navora pa potrebujemo še, da je parna sila vzdolž zveznice točk."
        },
        {
          letter: "b",
          title: "Izrek o vrtilni količini",
          question: "Izpelji bilanco vrtilne količine in razloži pogoj za izginotje notranjih navorov.",
          start: h`Vrtilno količino sistema glede na fiksni pol dobim s seštevkom \(\vec r_i\times m_i\vec v_i\). Pri odvajanju ostanejo navori sil; notranji navor vsakega para izgine, če sta sili enaki, nasprotni in centralni.`,
          formulas: [
            { label: "Vrtilna količina sistema", tex: h`\vec L_O=\sum_i(\vec r_i-\vec r_O)\times m_i\vec v_i`, explain: h`Pol \(O\) naj bo fiksen v IKS ali masno središče.` },
            { label: "Izrek", tex: h`\frac{d\vec L_O}{dt}=\vec N_O^{\,ext}`, explain: h`Velja, ko je notranji skupni navor nič.`, wide: true },
            { label: "Ohranitev", tex: h`\vec N_O^{\,ext}=\vec0\quad\Rightarrow\quad\vec L_O=\text{konst.}`, explain: h`Analog ohranitve gibalne količine za rotacijo.` }
          ],
          notation: [
            { tex: h`\vec L_O`, meaning: "vrtilna količina okoli O" },
            { tex: h`\vec N_O^{ext}`, meaning: "zunanji navor okoli O" },
            { tex: h`\vec F_{ij}`, meaning: "sila j na i" },
            { tex: h`\vec r_{ij}`, meaning: "zveznica para" }
          ],
          derivation: [
            { title: "Odvajamo posamezni člen", body: h`Člen \(\vec v_i\times m_i\vec v_i\) je nič.`, tex: h`\frac d{dt}(\vec r_i\times m_i\vec v_i)=\vec r_i\times m_i\vec a_i` },
            { title: "Seštejemo navore", body: "Vstavimo zunanje in notranje sile ter ločimo vsoti." },
            { title: "Združimo vsak notranji par", body: "Prispevka para sta", tex: h`\vec r_i\times\vec F_{ij}+\vec r_j\times\vec F_{ji}=(\vec r_i-\vec r_j)\times\vec F_{ij}` },
            { title: "Uporabimo centralnost", body: h`Če je \(\vec F_{ij}\parallel(\vec r_i-\vec r_j)\), je križni produkt nič. Ostane samo zunanji navor.` }
          ],
          summary: h`Za fiksni pol je \(\vec L_O=\sum\vec r_i\times m_i\vec v_i\). Odvod da vsoto navorov. Pri centralnih notranjih silah se navor vsakega para izniči, zato \(d\vec L_O/dt=\vec N_O^{ext}\); če je ta nič, se \(\vec L_O\) ohranja.`,
          pitfall: "Za poljuben pospešen gibajoči pol nastopi dodaten člen. Varna izbira pri ustnem je fiksni pol v IKS ali masno središče."
        },
        {
          letter: "c",
          title: "Energijska enačba",
          question: "Zapiši Königov razcep in pogoje za ohranitev energije sistema.",
          start: "Hitrost vsake točke razcepim na hitrost masnega središča in relativno hitrost. Mešani člen v kinetični energiji odpade, zato je energija vsota translacije masnega središča in notranjega gibanja.",
          formulas: [
            { label: "Relativne koordinate", tex: h`\vec r_i=\vec R+\vec\rho_i,\qquad \sum_i m_i\vec\rho_i=\vec0`, explain: h`\(\vec\rho_i\) meri lego glede na masno središče.` },
            { label: "Königov izrek", tex: h`T=\frac12M|\dot{\vec R}|^2+\frac12\sum_i m_i|\dot{\vec\rho}_i|^2`, explain: h`Translacijska plus relativna kinetična energija.`, wide: true },
            { label: "Energijska bilanca", tex: h`\frac{d}{dt}(T+U)=\mathcal P_{nc};\qquad \mathcal P_{nc}=0\Rightarrow T+U=E=\text{konst.}`, explain: h`\(\mathcal P_{nc}\) je moč sil, ki jih nismo zajeli s potencialom.` },
            { label: "Potencial notranjih parov", tex: h`U_{int}=\frac12\sum_{i\ne j}U_{ij}(r_{ij})`, explain: h`Faktor \(1/2\) prepreči dvojno štetje parov.`, core: false }
          ],
          notation: [
            { tex: h`\vec\rho_i`, meaning: "lega glede na MS" },
            { tex: h`T_{MS}`, meaning: "kinetična energija translacije" },
            { tex: h`T_{rel}`, meaning: "notranja kinetična energija" },
            { tex: h`U_{int}`, meaning: "potencial notranjih sil" }
          ],
          derivation: [
            { title: "Razcepimo hitrosti", body: h`Odvajanje \(\vec r_i=\vec R+\vec\rho_i\) da \(\vec v_i=\dot{\vec R}+\dot{\vec\rho}_i\).` },
            { title: "Razvijemo kvadrat", body: h`Vstavimo v \(T=\tfrac12\sum m_i v_i^2\).` },
            { title: "Mešani člen izgine", body: h`Ker je \(\sum m_i\vec\rho_i=0\), je tudi \(\sum m_i\dot{\vec\rho}_i=0\).`, tex: h`\dot{\vec R}\cdot\sum_i m_i\dot{\vec\rho}_i=0` },
            { title: "Dobimo Königov razcep", body: h`Preostaneta \(\tfrac12M\dot R^2\) in relativna vsota.` },
            { title: "Dodamo potenciale", body: "Delo konzervativnih zunanjih in notranjih sil je minus sprememba njunega potenciala, zato se celotna energija ohranja." }
          ],
          summary: h`Z \(\vec r_i=\vec R+\vec\rho_i\) in \(\sum m_i\vec\rho_i=0\) dobim Königov izrek \(T=\tfrac12M\dot R^2+\tfrac12\sum m_i\dot\rho_i^2\). Če so vse zunanje in notranje sile konzervativne, je \(T+U_{ext}+U_{int}\) konstantna.`,
          pitfall: h`Pri vsoti potencialov notranjih parov uporabi faktor \(1/2\) ali seštevaj samo po \(i<j\); sicer vsak par šteješ dvakrat.`
        }
      ]
    },
    {
      number: 7,
      id: "kinematika-togega-telesa",
      title: "Kinematika togega telesa",
      short: "Razcep gibanja na translacijo in rotacijo ter vztrajnostni tenzor.",
      minutes: 70,
      accent: "#9d83f4",
      intro: "Togo telo ohranja vse medsebojne razdalje. Njegovo lego določata translacija ene izbrane točke in rotacija, masno-geometrijski upor proti rotaciji pa zbere vztrajnostni tenzor.",
      diagram: diagrams.rigid,
      sources: ["ročni zapiski str. 9–10", "priročnik str. 25–27", "predavanja str. 32–35"],
      subtopics: [
        {
          letter: "a",
          title: "Opis gibanja togega telesa",
          question: "Definiraj togo telo ter razcepi lego, hitrost in kinetično energijo.",
          start: h`Togo telo je sistem točk s stalnimi medsebojnimi razdaljami. Konfiguracijo opišem z lego masnega središča in rotacijsko matriko; hitrost vsake točke je hitrost masnega središča plus \(\vec\omega\times\) njen relativni položaj.`,
          formulas: [
            { label: "Togost", tex: h`|\vec r_i(t)-\vec r_j(t)|=\text{konst.}`, explain: h`Telo se ne razteza in ne deformira.` },
            { label: "Lega", tex: h`\vec r_P(t)=\vec R(t)+Q(t)\vec\rho_P,\qquad Q^TQ=I`, explain: h`\(\vec\rho_P\) je stalna v telesnem sistemu, \(Q\) je rotacija.`, wide: true },
            { label: "Hitrost točke", tex: h`\vec v_P=\vec V+\vec\omega\times(\vec r_P-\vec R)`, explain: h`Translacija izbrane točke + trenutna rotacija.`, wide: true },
            { label: "Pospešek točke", tex: h`\vec a_P=\vec a_C+\dot{\vec\omega}\times\vec\xi_P+\vec\omega\times(\vec\omega\times\vec\xi_P)`, explain: h`Tangencialni in centripetalni rotacijski prispevek.`, wide: true },
            { label: "Kinetična energija", tex: h`T=\frac12M V^2+\frac12\vec\omega\cdot J_R\vec\omega`, explain: h`Če je \(R\) masno središče, ni mešanega člena.` }
          ],
          notation: [
            { tex: h`\vec R,\vec V`, meaning: "lega in hitrost masnega središča" },
            { tex: h`Q\in SO(3)`, meaning: "rotacijska matrika" },
            { tex: h`\vec\rho_P`, meaning: "telesna koordinata točke" },
            { tex: h`\vec\xi_P=\vec r_P-\vec R`, meaning: "trenutni relativni položaj" },
            { tex: h`\vec\omega`, meaning: "kotna hitrost telesa" }
          ],
          derivation: [
            { title: "Izberemo telesni sistem", body: h`Koordinate \(\vec\rho_P\) so v njem stalne, cel sistem pa se glede na prostor zavrti z \(Q(t)\).` },
            { title: "Odvajamo lego", body: h`Translacijski del da \(\vec V\), odvod zavrtenega vektorja pa po transportnem izreku križni produkt.`, tex: h`\frac d{dt}[Q(t)\vec\rho_P]=\vec\omega\times Q(t)\vec\rho_P` },
            { title: "Dobimo polje hitrosti", body: h`Ker je \(Q\vec\rho_P=\vec r_P-\vec R\), sledi formula za vsako točko.` },
            { title: "Še enkrat odvajamo", body: h`Ker je točka pritrjena na telo, je \(\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P\); produktno pravilo da kotni in centripetalni člen.`, tex: h`\vec a_P=\vec a_C+\dot{\vec\omega}\times\vec\xi_P+\vec\omega\times(\vec\omega\times\vec\xi_P)` },
            { title: "Energijo razcepimo okoli MS", body: h`Vstavimo \(\vec v_P=\vec V+\vec\omega\times\vec\rho\) v integral kinetične energije. Mešani člen izgine, ker \(\int\vec\rho\,dm=0\).` }
          ],
          summary: h`Togo telo ima stalne medsebojne razdalje in šest prostostnih stopenj: tri za translacijo ter tri za rotacijo. \(\vec r_P=\vec R+Q\vec\rho_P\), zato \(\vec v_P=\vec V+\vec\omega\times(\vec r_P-\vec R)\), energija okoli MS pa je \(\tfrac12MV^2+\tfrac12\omega\cdot J\omega\).`,
          pitfall: h`Formula \(\vec v_P=\vec V+\vec\omega\times\vec\rho\) uporablja relativni položaj od iste izbrane referenčne točke, katere hitrost je \(\vec V\).`
        },
        {
          letter: "b",
          title: "Vztrajnostni tenzor",
          question: "Izpelji tenzor iz vrtilne količine ter navedi glavne osi in Steinerjev izrek.",
          start: "Vztrajnostni tenzor je linearna preslikava, ki kotno hitrost poveže z vrtilno količino. Odvisen je od izbranega pola in porazdelitve mase; je simetričen, zato ga lahko diagonaliziram v glavnih oseh.",
          formulas: [
            { label: "Definicija tenzorja", tex: h`J_O=\int_B\left(\rho^2I-\vec\rho\otimes\vec\rho\right)dm`, explain: h`\(\vec\rho\) je lega masnega elementa glede na pol \(O\).`, wide: true },
            { label: "Vrtilna količina in energija", tex: h`\vec L_O=J_O\vec\omega,\qquad T_{rot}=\frac12\vec\omega\cdot J_O\vec\omega`, explain: h`\(\vec L\) in \(\vec\omega\) nista nujno vzporedna.`, wide: true },
            { label: "Komponente", tex: h`J_{ii}=\int(\rho_j^2+\rho_k^2)dm,\qquad J_{ij}=-\int\rho_i\rho_j\,dm\ (i\ne j)`, explain: h`Diagonalni so momenti, izvendiagonalni produkti vztrajnosti.` },
            { label: "Steiner", tex: h`J_O=J_C+M(d^2I-\vec d\otimes\vec d)`, explain: h`Za vzporedni osi: \(I_O=I_C+Md^2\).`, wide: true }
          ],
          notation: [
            { tex: h`J_O`, meaning: "vztrajnostni tenzor glede na O" },
            { tex: h`I`, meaning: "identična preslikava" },
            { tex: h`\otimes`, meaning: "tenzorski produkt" },
            { tex: h`J_1,J_2,J_3`, meaning: "glavni vztrajnostni momenti" },
            { tex: h`\vec d`, meaning: "vektor od MS do novega pola" },
            { tex: h`C`, meaning: "masno središče" }
          ],
          derivation: [
            { title: "Začnemo z vrtilno količino", body: h`Za čisto rotacijo okoli \(O\) je hitrost elementa \(\vec v=\vec\omega\times\vec\rho\).`, tex: h`\vec L_O=\int\vec\rho\times\vec v\,dm=\int\vec\rho\times(\vec\omega\times\vec\rho)\,dm` },
            { title: "Uporabimo trojni produkt", body: h`Identiteta spremeni dvojni križni produkt v izraz, linearen v \(\vec\omega\).`, tex: h`\vec\rho\times(\vec\omega\times\vec\rho)=\rho^2\vec\omega-(\vec\rho\cdot\vec\omega)\vec\rho` },
            { title: "Izpostavimo kotno hitrost", body: h`Preostala integralna preslikava je po definiciji \(J_O\).`, tex: h`\vec L_O=\left[\int(\rho^2I-\vec\rho\otimes\vec\rho)dm\right]\vec\omega` },
            { title: "Glavne osi", body: h`Ker je \(J\) realen in simetričen, ima ortonormirano bazo lastnih vektorjev; v njej je \(J=\operatorname{diag}(J_1,J_2,J_3)\).` },
            { title: "Premik pola", body: h`V \(\vec\rho_O=\vec\rho_C-\vec d\) razvijemo integral. Linearni člen izgine zaradi definicije masnega središča in ostane Steinerjev dodatek.` }
          ],
          summary: h`Iz \(\vec L=\int\rho\times(\omega\times\rho)dm\) in trojnega produkta dobim \(J=\int(\rho^2I-\rho\otimes\rho)dm\) ter \(\vec L=J\vec\omega\). Tenzor je simetričen, glavne osi ga diagonalizirajo, premik iz MS pa da \(J_O=J_C+M(d^2I-d\otimes d)\).`,
          pitfall: h`Izvendiagonalni elementi imajo minus. Zveza \(\vec L\parallel\vec\omega\) velja le pri vrtenju okoli glavne osi ali pri sferno simetričnem tenzorju.`
        }
      ]
    },
    {
      number: 8,
      id: "dinamika-togega-telesa",
      title: "Dinamika togega telesa",
      short: "Eulerjeve enačbe, prosta vrtavka in postavitev sistema togih teles.",
      minutes: 80,
      accent: "#ff806f",
      intro: h`V telesnem sistemu je vztrajnostni tenzor konstanten, vendar se sam sistem vrti. Transportni člen \(\vec\omega\times\vec L\) zato spremeni izrek o vrtilni količini v Eulerjevo dinamično enačbo.`,
      diagram: diagrams.top,
      sources: ["ročni zapiski str. 10", "priročnik str. 28–31", "Zapiski str. 36–40"],
      subtopics: [
        {
          letter: "a",
          title: "Eulerjeva dinamična enačba",
          question: "Izpelji vektorsko in komponentno obliko v telesnih glavnih oseh.",
          start: h`Izrek o vrtilni količini velja v prostoru: absolutni odvod \(\vec L\) je navor. Ker pa \(\vec L=J\vec\omega\) zapisujem v vrtečem telesnem sistemu, uporabim transportni izrek in dobim dodatni člen \(\vec\omega\times J\vec\omega\).`,
          formulas: [
            { label: "Eulerjeva enačba", tex: h`J\dot{\vec\omega}+\vec\omega\times(J\vec\omega)=\vec N`, explain: h`Odvod \(\dot{\vec\omega}\) je v telesnem sistemu, \(J\) je tam konstanten.`, wide: true },
            { label: "Glavne osi", tex: h`J_1\dot\omega_1+(J_3-J_2)\omega_2\omega_3=N_1`, explain: h`Drugi dve enačbi dobimo s ciklično permutacijo \(1\to2\to3\to1\).`, wide: true },
            { label: "Translacija", tex: h`M\ddot{\vec R}=\vec F^{ext}`, explain: h`Skupaj z Eulerjevo enačbo opiše splošno gibanje togega telesa.` },
            { label: "Energija", tex: h`T=\frac12MV^2+\frac12\vec\omega\cdot J\vec\omega`, explain: h`Rotacijska moč je \(\vec N\cdot\vec\omega\).` }
          ],
          notation: [
            { tex: h`J_i`, meaning: "glavni vztrajnostni momenti" },
            { tex: h`\omega_i`, meaning: "telesne komponente kotne hitrosti" },
            { tex: h`N_i`, meaning: "telesne komponente navora" },
            { tex: h`\vec L=J\vec\omega`, meaning: "vrtilna količina" }
          ],
          derivation: [
            { title: "Začnemo z izrekom v IKS", body: "Absolutni odvod vrtilne količine glede na MS ali fiksen pol je zunanji navor.", tex: h`\left(\frac{d\vec L}{dt}\right)_{abs}=\vec N` },
            { title: "Uporabimo transportni izrek", body: h`Telesni sistem se vrti z isto \(\vec\omega\) kot telo.`, tex: h`\left(\frac{d\vec L}{dt}\right)_{abs}=\left(\frac{d\vec L}{dt}\right)_{body}+\vec\omega\times\vec L` },
            { title: "Vstavimo L=Jω", body: h`V telesnem sistemu je \(J\) konstanten, zato je relativni odvod \(J\dot{\vec\omega}\).`, tex: h`\vec N=J\dot{\vec\omega}+\vec\omega\times(J\vec\omega)` },
            { title: "Izberemo glavne osi", body: h`Za diagonalni \(J\) izračunamo križni produkt in preberemo komponente.`, tex: h`\begin{aligned}J_1\dot\omega_1+(J_3-J_2)\omega_2\omega_3&=N_1,\\J_2\dot\omega_2+(J_1-J_3)\omega_3\omega_1&=N_2,\\J_3\dot\omega_3+(J_2-J_1)\omega_1\omega_2&=N_3.\end{aligned}` }
          ],
          summary: h`Iz \((d\vec L/dt)_{abs}=\vec N\), transportnega izreka in \(\vec L=J\vec\omega\) dobim \(J\dot{\omega}+\omega\times J\omega=N\). V telesnih glavnih oseh je \(J\) diagonalen in dobim tri ciklične Eulerjeve skalarne enačbe.`,
          pitfall: h`Komponentne Eulerjeve enačbe pišemo v telesnih glavnih oseh. V prostorskem sistemu \(J\) na splošno ni konstantna matrika.`
        },
        {
          letter: "b",
          title: "Prosta vrtavka",
          question: "Navedi integrale, reši simetrični primer in razloži stabilnost vrtenja okoli glavnih osi.",
          start: h`Prosta vrtavka nima zunanjega navora. Zato sta v prostoru konstantni vrtilna količina in rotacijska energija; v telesnih koordinatah se \(\vec\omega\) giblje po preseku ustreznih kvadrik.`,
          formulas: [
            { label: "Prosta Eulerjeva enačba", tex: h`J\dot{\vec\omega}+\vec\omega\times(J\vec\omega)=\vec0`, explain: h`Navor je nič.` },
            { label: "Dva integrala", tex: h`L^2=J_1^2\omega_1^2+J_2^2\omega_2^2+J_3^2\omega_3^2=\text{konst.},\qquad 2T=J_1\omega_1^2+J_2\omega_2^2+J_3\omega_3^2=\text{konst.}`, explain: h`Sfera vrtilne količine in energijski elipsoid.`, wide: true },
            { label: "Simetrična vrtavka", tex: h`J_1=J_2=J_\perp:\quad \dot\omega_3=0,\qquad \Omega_b=\frac{J_3-J_\perp}{J_\perp}\,\omega_3`, explain: h`\((\omega_1,\omega_2)\) se v telesnem sistemu vrti z podpisano frekvenco \(\Omega_b\); fizična frekvenca je \(|\Omega_b|\).`, wide: true },
            { label: "Precesija simetrijske osi v prostoru", tex: h`\dot{\vec e}_3=\frac{\vec L}{J_\perp}\times\vec e_3,\qquad \Omega_s=\frac{L}{J_\perp}`, explain: h`Os \(\vec e_3\) precesira okoli stalnega prostorskega vektorja \(\vec L\); \(\Omega_s\) ni isto kot \(\Omega_b\).`, wide: true },
            { label: "Stabilnost", tex: h`\text{najmanjša in največja glavna os: stabilno; srednja os: nestabilno}`, explain: h`To je izrek o vmesni osi oziroma efekt teniškega loparja.`, wide: true }
          ],
          notation: [
            { tex: h`\vec N=0`, meaning: "brez zunanjega navora" },
            { tex: h`J_\perp`, meaning: "prečni moment simetrične vrtavke" },
            { tex: h`J_3`, meaning: "moment okoli simetrijske osi" },
            { tex: h`\Omega_b`, meaning: "telesna frekvenca precesije ω" }
          ],
          derivation: [
            { title: "Ohranjena vrtilna količina", body: h`Iz \(d\vec L/dt=\vec N=0\) sledi, da je prostorski vektor \(\vec L\) konstanten.` },
            { title: "Ohranjena energija", body: h`Skalarni produkt Eulerjeve enačbe z \(\vec\omega\) odstrani križni člen.`, tex: h`\frac d{dt}\left(\frac12\vec\omega\cdot J\vec\omega\right)=\vec N\cdot\vec\omega=0` },
            { title: "Simetrični primer", body: h`Pri \(J_1=J_2=J_\perp\) tretja Eulerjeva enačba da \(\dot\omega_3=0\). Prvi dve sta sklopljen oscilator.`, tex: h`\dot\omega_1=-\Omega_b\omega_2,\qquad \dot\omega_2=\Omega_b\omega_1` },
            { title: "Rešitev", body: h`Prečni komponenti imata stalno amplitudo in krožita; znak \(\Omega_b\) določa smer.`, tex: h`\omega_1=A\cos(\Omega_b t+\delta),\qquad \omega_2=A\sin(\Omega_b t+\delta)` },
            { title: "Prostorska precesija", body: h`Iz \(\vec L=J_\perp\vec\omega+(J_3-J_\perp)\omega_3\vec e_3\) s križnim produktom dobimo gibanje simetrijske osi okoli stalnega \(\vec L\).`, tex: h`\dot{\vec e}_3=\vec\omega\times\vec e_3=\frac{\vec L}{J_\perp}\times\vec e_3` },
            { title: "Stabilnost osi", body: h`Linearizacija Eulerjevih enačb okoli čistega vrtenja pokaže omejene oscilacije pri najmanjšem in največjem \(J_i\), eksponentno rast motnje pri srednjem.` }
          ],
          summary: h`Pri \(N=0\) sta \(\vec L\) v prostoru in \(T=\tfrac12\omega\cdot J\omega\) konstantna. Za \(J_1=J_2=J_\perp\) je \(\omega_3\) stalna, prečni komponenti pa krožita s \(|(J_3-J_\perp)\omega_3/J_\perp|\). Vrtenje je stabilno okoli osi z najmanjšim ali največjim momentom, nestabilno okoli srednje.`,
          pitfall: h`Loči prostorsko precesijo telesne osi okoli stalnega \(\vec L\) od kroženja komponent \(\vec\omega\) v telesnem sistemu. Znak podpisane frekvence je odvisen od izbrane konvencije; njena velikost ni.`
        },
        {
          letter: "c",
          title: "Sistem togih teles",
          question: "Povej splošni postopek postavitve enačb in značilen vezni pogoj.",
          start: "Za vsako togo telo napišem translacijsko enačbo masnega središča in rotacijsko Eulerjevo enačbo. Nato dodam sile stikov ter toliko veznih pogojev, kolikor jih nalaga povezava, ležaj ali kotaljenje.",
          formulas: [
            { label: "Za vsako telo α", tex: h`M_\alpha\ddot{\vec R}_\alpha=\vec F_\alpha^{ext}+\vec F_\alpha^{vez}`, explain: h`Translacijska bilanca.` },
            { label: "Rotacija vsakega telesa", tex: h`J_\alpha\dot{\vec\omega}_\alpha+\vec\omega_\alpha\times(J_\alpha\vec\omega_\alpha)=\vec N_\alpha`, explain: h`V telesnih glavnih oseh.`, wide: true },
            { label: "Kotaljenje brez drsenja", tex: h`\vec v_{stik}=\vec0\quad\Longleftrightarrow\quad v_C=R\omega\ \text{v ravninskem primeru}`, explain: h`Stična točka glede na podlago trenutno miruje.` },
            { label: "Energija idealnega sistema", tex: h`E=\sum_\alpha\left(\frac12M_\alpha V_\alpha^2+\frac12\vec\omega_\alpha\cdot J_\alpha\vec\omega_\alpha\right)+U`, explain: h`Ohranja se, če idealne vezi ne opravljajo dela in so aktivne sile konzervativne.`, wide: true }
          ],
          notation: [
            { tex: h`\alpha`, meaning: "oznaka posameznega telesa" },
            { tex: h`\vec F^{vez}`, meaning: "reakcije vezi in stikov" },
            { tex: h`\vec N_\alpha`, meaning: "rezultantni navor na telo" },
            { tex: h`\vec v_{stik}`, meaning: "hitrost stične točke" }
          ],
          derivation: [
            { title: "Narišemo vsako telo posebej", body: "Na prostotelesnem diagramu prikažemo zunanje sile in reakcije vseh povezav." },
            { title: "Dve dinamični bilanci na telo", body: "Za translacijo uporabimo masno središče, za rotacijo najprimernejši pol ali telesne glavne osi." },
            { title: "Dodamo vezne enačbe", body: "Geometrija povezav poveže lege, hitrosti ali pospeške različnih teles. Pri kotaljenju je hitrost stične točke nič." },
            { title: "Uporabimo akcijo in reakcijo", body: "Sile med telesoma so enake in nasprotne; pri obravnavi celotnega sistema postanejo notranje." },
            { title: "Po potrebi uporabimo energijo", body: "Pri idealnih vezeh lahko reakcije izločimo z energijsko enačbo, vendar le če ne opravljajo dela." }
          ],
          summary: h`Za vsako telo napišem \(M\ddot R=F\) in \(J\dot\omega+\omega\times J\omega=N\), nato dodam reakcije in vezne pogoje. Pri kotaljenju brez drsenja je \(\vec v_{stik}=0\), v ravnini \(v_C=R\omega\). Število dinamičnih in veznih enačb mora zapreti vse neznanke.`,
          pitfall: h`Statično trenje pri kotaljenju ni avtomatično \(\mu N\); njegova velikost je neznanka in šele po rešitvi preverimo pogoj \(|F_t|\le\mu_sN\).`
        }
      ]
    }
  ];

  const plan = [
    { time: "0:00–0:55", duration: "55 min", chapter: "kinematika-tocke", title: "Kinematika točke", goal: "Nariši tangentno-normalni razcep in dvakrat izpelji polarni pospešek." },
    { time: "0:55–1:45", duration: "50 min", chapter: "dinamika-tocke", title: "Dinamika točke", goal: "Na pamet: štirje potenciali; brez gledanja dokaži delo in energijo." },
    { time: "1:45–2:50", duration: "65 min", chapter: "premocrtno-gibanje", title: "Premočrtno gibanje", goal: "Iz grafa U preberi gibanje; izpelji periodo in harmonično aproksimacijo." },
    { time: "2:50–4:15", duration: "85 min", chapter: "centralna-sila", title: "Centralna sila", goal: "Ravninskost, Kepler, Binet in Ueff poveži v en sam tok odgovora." },
    { time: "4:15–5:20", duration: "65 min", chapter: "relativno-gibanje", title: "Relativno gibanje", goal: "Napiši vseh pet členov pospeška in vsako navidezno silo poimenuj." },
    { time: "5:20–6:20", duration: "60 min", chapter: "sistem-tock", title: "Sistem materialnih točk", goal: "Trik notranjih sil uporabi pri masnem središču, navoru in energiji." },
    { time: "6:20–7:30", duration: "70 min", chapter: "kinematika-togega-telesa", title: "Kinematika togega telesa", goal: "Razcep translacija + rotacija; iz L izpelji tenzor in Steinerja." },
    { time: "7:30–8:50", duration: "80 min", chapter: "dinamika-togega-telesa", title: "Dinamika togega telesa", goal: "Eulerjeva enačba, prosta vrtavka, stabilnost osi in vezni pogoji." },
    { time: "8:50–10:00", duration: "70 min", title: "Aktivni priklic", goal: "Naključno izberi 8 podvprašanj. Za vsako: 30 s uvod, formula, 3 koraki izpeljave." }
  ];

  const ids = new Set();
  chapters.forEach((chapter, index) => {
    if (chapter.number !== index + 1 || ids.has(chapter.id) || !chapter.subtopics.length) throw new Error("Neveljavna struktura podatkov ustnega izpita.");
    ids.add(chapter.id);
  });

  window.MECHANICS_DATA = { chapters, plan };
})();
