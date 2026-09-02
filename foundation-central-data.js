(() => {
  "use strict";

  const h = String.raw;
  if (!window.MECHANICS_FOUNDATIONS || typeof window.MECHANICS_FOUNDATIONS !== "object" || Array.isArray(window.MECHANICS_FOUNDATIONS)) {
    window.MECHANICS_FOUNDATIONS = {};
  }

  window.MECHANICS_FOUNDATIONS["centralna-sila"] = {
    title: "Od radialne sile do Keplerjeve orbite — od samih osnov",
    intro: "Najprej razumi pojme in fizično sliko. Nato sledi verigi brez preskokov: potencial → sila → navor → vrtilna količina → efektivni potencial → Binet → Kepler.",
    coreQuestion: {
      question: "Zakaj planet ne odleti po premici in zakaj ne pade naravnost v Sonce?",
      answer: h`Gravitacija mu po drugem Newtonovem zakonu ves čas daje pospešek proti Soncu, zato se smer hitrosti spreminja in se tir ukrivlja. Ker ima planet tudi začetno prečno hitrost, je njegova vrtilna količina različna od nič. Gravitacija ga obrača proti Soncu, prečno gibanje pa preprečuje navaden radialni padec.`,
      tex: h`\begin{aligned}m\vec a&=\vec F,\\[2pt]\vec r\times\vec F&=\vec0,\\[2pt]\vec L&=\vec r\times m\vec v=\mathrm{konst.}\end{aligned}`,
      warning: h`Sila ne »ustvari hitrosti«, ampak spreminja vektor hitrosti. Pospešek je lahko neničeln tudi takrat, ko se spreminja samo smer hitrosti.`
    },
    chain: [
      "Potencialna energija U(r) določi radialno silo.",
      "Radialna sila ima glede na središče ničelni navor.",
      "Ničelni navor ohrani vrtilno količino in ravnino gibanja.",
      "Ohranjena vrtilna količina da enake pometene ploščine.",
      "Energija in vrtilna količina dasta efektivni potencial.",
      "Binetova enačba določi geometrijsko obliko orbite.",
      "Pri sili 1/r² dobimo stožnice in Keplerjeve zakone."
    ],
    definitions: [
      {
        title: "Materialna točka, lega, hitrost in pospešek",
        definition: h`Delec obravnavamo kot materialno točko. Lego glede na središče \(O\) opiše krajevni vektor \(\vec r(t)\). Hitrost je časovni odvod lege, pospešek pa časovni odvod hitrosti.`,
        intuition: "Lega pove, kje je delec; hitrost, kam se trenutno giblje; pospešek, kako se hitrost spreminja.",
        tex: h`\vec v=\dot{\vec r},\qquad \vec a=\dot{\vec v}=\ddot{\vec r}`,
        say: h`»Sila po drugem Newtonovem zakonu določa pospešek, torej spremembo vektorja hitrosti.«`
      },
      {
        title: "Inercialni sistem in drugi Newtonov zakon",
        definition: h`V inercialnem sistemu prosto telo miruje ali se giblje enakomerno premočrtno. Neničelna rezultanta zunanjih sil povzroči pospešek v smeri rezultante.`,
        intuition: "Brez sile planet odleti po tangenti; gravitacija njegovo hitrost neprestano obrača proti Soncu.",
        tex: h`\sum\vec F=m\vec a`,
        say: h`»Centralna sila ukrivlja tir, ker spreminja smer hitrosti delca.«`
      },
      {
        title: "Skalarno in vektorsko polje",
        definition: h`Skalarno polje vsaki točki priredi eno število; potencialna energija \(U(\vec r)\) je skalarno polje. Vektorsko polje vsaki točki priredi vektor; sila \(\vec F(\vec r)\) ima velikost in smer. Tu \(U\) pomeni potencialno energijo v joulih.`,
        intuition: "Energijska pokrajina poda višino, polje sile pa smer in moč potiska.",
        tex: h`U:\mathbb R^3\to\mathbb R,\qquad \vec F:\mathbb R^3\to\mathbb R^3,\qquad[U]=\mathrm J`,
        say: "»Potencialna energija je skalarno polje, sila pa vektorsko polje.«"
      },
      {
        title: "Gradient in potencialna sila",
        definition: h`Gradient \(\nabla U\) je vektor krajevnih odvodov in kaže v smer najhitrejšega naraščanja potencialne energije. Delo konservativne sile zmanjša potencialno energijo, zato velja \(\vec F=-\nabla U\).`,
        intuition: "Gradient kaže v najbolj strm klanec navzgor, minus gradient pa navzdol.",
        tex: h`\nabla U=\left(\frac{\partial U}{\partial x},\frac{\partial U}{\partial y},\frac{\partial U}{\partial z}\right),\qquad\boxed{\vec F=-\nabla U}`,
        say: "»Minus pomeni, da sila kaže v smer najhitrejšega padanja potencialne energije.«"
      },
      {
        title: "Definicija centralne sile",
        definition: h`Izberemo fiksno središče \(O\). Centralna sila leži na premici med \(O\) in delcem, njena predznačena radialna komponenta \(F_r(r)\) pa je odvisna samo od razdalje. \(F_r<0\) pomeni privlačno in \(F_r>0\) odbojno silo.`,
        intuition: "Centralna ne pomeni nujno privlačna; pomeni radialna in pri isti razdalji enaka v vseh smereh.",
        tex: h`\vec r=\overrightarrow{OP},\quad r=|\vec r|,\quad\vec e_r=\frac{\vec r}{r},\quad\boxed{\vec F=F_r(r)\vec e_r}`,
        say: h`»\(F_r\) je predznačena komponenta; velikost sile je \(|F_r|\).«`
      },
      {
        title: "Polarni koordinati in premična baza",
        definition: h`V ravnini lego opišemo z razdaljo \(r\) in kotom \(\varphi\). \(\vec e_r\) kaže radialno navzven, \(\vec e_\varphi\) pa pravokotno v smeri naraščanja kota. Ker se baza vrti, moramo pri odvajanju odvajati tudi enotska vektorja.`,
        intuition: "Delec se lahko hkrati približuje središču in se pomika okoli njega.",
        tex: h`\vec e_r=(\cos\varphi,\sin\varphi),\quad\vec e_\varphi=(-\sin\varphi,\cos\varphi),\quad\dot{\vec e}_r=\dot\varphi\vec e_\varphi,\quad\dot{\vec e}_\varphi=-\dot\varphi\vec e_r`,
        say: "»Polarna baza se vrti, zato njena časovna odvoda nista nič.«"
      },
      {
        title: "Vektorski produkt",
        definition: h`Vektorski produkt \(\vec a\times\vec b\) je pravokoten na oba faktorja, smer določa pravilo desne roke, velikost pa \(ab\sin\alpha\). Za vzporedna ali nasprotno vzporedna vektorja je nič.`,
        intuition: "Meri prečni del; vzporedna vektorja nimata prečnega učinka.",
        tex: h`|\vec a\times\vec b|=ab\sin\alpha,\qquad\vec a\parallel\vec b\Rightarrow\vec a\times\vec b=\vec0`,
        say: "»Pravilen slovenski izraz je vektorski produkt.«"
      },
      {
        title: "Navor in vrtilna količina",
        definition: h`Navor meri vrtilni učinek sile glede na \(O\); njegova velikost je sila krat pravokotna ročica. Vrtilna količina meri prečni del gibanja okoli \(O\). Njuna zveza je vrtilna oblika drugega Newtonovega zakona.`,
        intuition: "Potisk naravnost proti tečaju vrat nima pravokotne ročice in vrat ne zavrti.",
        tex: h`\vec N_O=\vec r\times\vec F,\qquad\vec L_O=\vec r\times m\vec v,\qquad\dot{\vec L}_O=\vec N_O`,
        say: "»Premica delovanja centralne sile gre skozi O, zato je njen navor nič.«"
      },
      {
        title: "Integral gibanja in ravnina",
        definition: h`Integral gibanja je količina, ki med gibanjem ostane konstantna. Pri časovno neodvisni centralni sili sta ključna integrala \(\vec L\) in \(E\). Če je \(L\ne0\), stalna smer \(\vec L\) določi normalo na fiksno ravnino orbite.`,
        intuition: "Vektor L je kot nepremična os, pravokotna na list, po katerem se giblje delec.",
        tex: h`\vec L=\mathrm{konst.},\qquad E=\mathrm{konst.},\qquad\vec r\cdot\vec L=0`,
        say: "»Ohranja se vektor L, zato ostaneta stalni njegova velikost in smer.«"
      },
      {
        title: "Ploščinska hitrost",
        definition: h`Ploščinska hitrost je ploščina, ki jo krajevni vektor pomete na čas. Pri centralni sili je konstantna, zato so v enakih časih pometene enake ploščine. To je drugi Keplerjev zakon.`,
        intuition: "Pri manjši razdalji mora delec v istem času prepotovati daljši prečni lok.",
        tex: h`\dot A=\frac12r^2\dot\varphi=\frac{L}{2m}=\mathrm{konst.}`,
        say: "»Drugi Keplerjev zakon velja za vsako centralno silo.«"
      },
      {
        title: "Efektivni potencial",
        definition: h`Efektivni potencial je pripomoček za radialno gibanje. Združi pravo potencialno energijo \(U(r)\) in tangencialno kinetično energijo, ki jo z ohranjeno \(L\) prepišemo kot funkcijo \(r\). Centrifugalni člen ni nov zunanji potencial.`,
        intuition: "Ravninsko gibanje skrčimo na gibanje ene radialne koordinate po energijski pokrajini.",
        tex: h`\boxed{U_{\rm ef}=U+\frac{L^2}{2mr^2}},\qquad\frac12m\dot r^2+U_{\rm ef}=E`,
        say: h`»Člen \(L^2/(2mr^2)\) je prepisana tangencialna kinetična energija.«`
      },
      {
        title: "Orbita, apsidi in krožni tir",
        definition: h`Časovni potek podajata \(r(t)\) in \(\varphi(t)\), orbito pa geometrijska zveza \(r(\varphi)\). Periapsida je najmanjša, apoapsida največja razdalja. Tam je \(\dot r=0\), ne nujno celotna hitrost. Krožni tir ima stalen \(r=r_c\).`,
        intuition: "Orbita je zemljevid poti, časovni potek pa urnik gibanja po njej.",
        tex: h`E=U_{\rm ef}(r_\pm)\Rightarrow\dot r=0,\qquad U_{\rm ef}'(r_c)=0,\quad E=U_{\rm ef}(r_c)`,
        say: h`»Radialno obračališče ni mirovanje, ker pri \(L\ne0\) ostane tangencialna hitrost.«`
      },
      {
        title: "Keplerjev problem",
        definition: h`Keplerjev problem je gibanje v privlačni sili \(1/r^2\). Pri gravitaciji je \(k=GMm\), ničlo potencialne energije pa izberemo pri neskončnosti. Rešitve so stožnice s središčem sile v gorišču.`,
        intuition: "Začetna energija in vrtilna količina izbereta krog, elipso, parabolo ali hiperbolo.",
        tex: h`F_r=-\frac{k}{r^2},\qquad U=-\frac{k}{r},\qquad k=GMm,\qquad U(\infty)=0`,
        say: "»Rešitev Keplerjevega problema je stožnica; vezani planetarni tir je elipsa.«"
      }
    ],
    derivations: [
      {
        title: "Iz radialnega skalarnega polja do centralne sile",
        goal: h`Pokazati \(\nabla U=U'(r)\vec e_r\), \(\vec F=-U'(r)\vec e_r\) in obratno zvezo za \(U\).`,
        steps: [
          { reason: "Razdaljo zapišemo s kartezičnimi koordinatami.", tex: h`r=\sqrt{x^2+y^2+z^2}` },
          { reason: "Izračunamo krajevne odvode razdalje.", tex: h`\frac{\partial r}{\partial x}=\frac xr,\quad\frac{\partial r}{\partial y}=\frac yr,\quad\frac{\partial r}{\partial z}=\frac zr` },
          { reason: "Gradient razdalje je radialni enotski vektor.", tex: h`\nabla r=\left(\frac xr,\frac yr,\frac zr\right)=\frac{\vec r}{r}=\vec e_r` },
          { reason: "Za sestavljeno funkcijo U(r(x,y,z)) uporabimo verižno pravilo.", tex: h`\nabla U(r)=U'(r)\nabla r=U'(r)\vec e_r` },
          { reason: "Potencialna sila je minus gradient.", tex: h`\boxed{\vec F=-\nabla U=-U'(r)\vec e_r}` },
          { reason: "Če poznamo Fᵣ, enačbo integriramo med referenčno in trenutno razdaljo.", tex: h`\boxed{U(r)-U(r_0)=-\int_{r_0}^{r}F_r(s)\,ds}` }
        ],
        result: "Aditivna konstanta v U ne vpliva na silo; minus pomeni smer najhitrejšega padanja energije."
      },
      {
        title: "Iz ničelnega navora do ohranitve L in ravnine",
        goal: h`Iz definicije \(\vec L\) izpeljati \(\dot{\vec L}=0\) in ravninskost gibanja.`,
        steps: [
          { reason: "Definiramo vrtilno količino delca glede na O.", tex: h`\vec L=\vec r\times m\dot{\vec r}` },
          { reason: "Odvajamo in uporabimo produktno pravilo.", tex: h`\dot{\vec L}=\dot{\vec r}\times m\dot{\vec r}+\vec r\times m\ddot{\vec r}` },
          { reason: "Prvi člen je vektorski produkt vektorja s samim seboj.", tex: h`m\vec v\times\vec v=\vec0` },
          { reason: "V drugem členu uporabimo m a = F.", tex: h`\dot{\vec L}=\vec r\times\vec F=\vec N_O` },
          { reason: "Centralna sila je vzporedna z r, zato je navor nič.", tex: h`\vec r\times F_r(r)\vec e_r=\vec0` },
          { reason: "Ničelni odvod pomeni stalni vektor L.", tex: h`\boxed{\dot{\vec L}=\vec0\Rightarrow\vec L=\mathrm{konst.}}` },
          { reason: "Po definiciji vektorskega produkta je r pravokoten na L.", tex: h`\vec r\cdot\vec L=0` },
          { reason: "Stalni neničelni L določi fiksno ravnino; pri L = 0 je gibanje radialno.", tex: h`L\ne0:\ \vec r(t)\in\vec L^\perp,\qquad L=0:\ \vec r\parallel\vec v` }
        ],
        result: "Centralna sila tridimenzionalni problem skrči na eno fiksno ravnino."
      },
      {
        title: "Polarna pot do hitrosti, pospeška in C₀",
        goal: h`Izpeljati polarni pospešek ter \(C_0=r^2\dot\varphi=L/m\).`,
        steps: [
          { reason: "Zapišemo premična enotska vektorja.", tex: h`\vec e_r=(\cos\varphi,\sin\varphi),\quad\vec e_\varphi=(-\sin\varphi,\cos\varphi)` },
          { reason: "Odvajamo ju po času.", tex: h`\dot{\vec e}_r=\dot\varphi\vec e_\varphi,\qquad\dot{\vec e}_\varphi=-\dot\varphi\vec e_r` },
          { reason: "Odvajamo krajevni vektor r eᵣ.", tex: h`\boxed{\vec v=\dot r\vec e_r+r\dot\varphi\vec e_\varphi}` },
          { reason: "Odvajamo še enkrat in zberemo obe komponenti.", tex: h`\boxed{\vec a=(\ddot r-r\dot\varphi^2)\vec e_r+(r\ddot\varphi+2\dot r\dot\varphi)\vec e_\varphi}` },
          { reason: "Centralna sila nima tangencialne komponente.", tex: h`m(r\ddot\varphi+2\dot r\dot\varphi)=0` },
          { reason: "Pomnožimo z r in prepoznamo odvod produkta.", tex: h`r^2\ddot\varphi+2r\dot r\dot\varphi=\frac d{dt}(r^2\dot\varphi)=0` },
          { reason: "Dobimo konstanto in jo povežemo z L.", tex: h`\boxed{C_0=r^2\dot\varphi=\frac Lm=\mathrm{konst.}},\qquad L=mr^2\dot\varphi` }
        ],
        result: "Isto ohranitev dobimo geometrijsko iz navora ali komponentno iz polarne enačbe."
      },
      {
        title: "Iz L do ploščinskega zakona",
        goal: h`Izpeljati \(\dot A=L/(2m)\).`,
        steps: [
          { reason: "V času dt krajevni vektor pomete majhen trikotnik.", tex: h`dA=\frac12|\vec r\times d\vec r|` },
          { reason: "Vstavimo d r = v dt in delimo z dt.", tex: h`\dot A=\frac12|\vec r\times\vec v|` },
          { reason: "Uporabimo velikost vrtilne količine.", tex: h`L=m|\vec r\times\vec v|\quad\Rightarrow\quad\boxed{\dot A=\frac L{2m}=\mathrm{konst.}}` },
          { reason: "Isto zvezo zapišemo v polarnih koordinatah.", tex: h`dA=\frac12r^2d\varphi,\qquad\dot A=\frac12r^2\dot\varphi=\frac{C_0}{2}` }
        ],
        result: "V enakih časih so pometene enake ploščine: drugi Keplerjev zakon za vsako centralno silo."
      },
      {
        title: "Iz energije in L do efektivnega potenciala",
        goal: h`Izpeljati \(\frac12m\dot r^2+U_{\rm ef}(r)=E\).`,
        steps: [
          { reason: "Radialna in tangencialna hitrost sta pravokotni.", tex: h`v^2=\dot r^2+r^2\dot\varphi^2` },
          { reason: "Zapišemo celotno mehansko energijo.", tex: h`E=\frac12m\dot r^2+\frac12mr^2\dot\varphi^2+U(r)` },
          { reason: "Odvod energije je nič zaradi m a = F in Fᵣ = −U′.", tex: h`\dot E=m\vec v\cdot\vec a+U'\dot r=F_r\dot r+U'\dot r=0` },
          { reason: "Iz L izrazimo kotno hitrost.", tex: h`\dot\varphi=\frac{L}{mr^2}` },
          { reason: "Prepišemo tangencialno kinetično energijo.", tex: h`\frac12mr^2\dot\varphi^2=\frac{L^2}{2mr^2}` },
          { reason: "Člena, odvisna samo od r, združimo.", tex: h`\boxed{U_{\rm ef}(r)=U(r)+\frac{L^2}{2mr^2}}` },
          { reason: "Dobimo enodimenzionalno radialno energijsko enačbo.", tex: h`\boxed{\frac12m\dot r^2+U_{\rm ef}(r)=E}` }
        ],
        result: "Centrifugalni člen je prepisana tangencialna kinetična energija, ne nova zunanja sila."
      },
      {
        title: "Iz Uₑf do gibanja, radialne enačbe in kroga",
        goal: "Iz grafa in enačbe prebrati dovoljene razdalje, kvadrature ter stabilnost krožnega tira.",
        steps: [
          { reason: "Izoliramo radialno hitrost; njen kvadrat ni negativen.", tex: h`\dot r=\pm\sqrt{\frac2m[E-U_{\rm ef}(r)]},\qquad U_{\rm ef}\le E` },
          { reason: "V apsidah je nič samo radialna hitrost.", tex: h`E=U_{\rm ef}(r_\pm)\Rightarrow\dot r=0,\qquad v_\varphi=\frac{L}{mr}` },
          { reason: "Ločimo čas in razdaljo.", tex: h`\boxed{t-t_0=\pm\sqrt{\frac m2}\int_{r_0}^{r}\frac{ds}{\sqrt{E-U_{\rm ef}(s)}}}` },
          { reason: "Kot obnovimo iz razmerja φ̇/ṙ.", tex: h`\boxed{\varphi-\varphi_0=\pm\int_{r_0}^{r}\frac{L\,ds}{s^2\sqrt{2m[E-U_{\rm ef}(s)]}}}` },
          { reason: "Odvajamo energijo; na odsekih z ṙ ≠ 0 pokrajšamo, nato zvezo razširimo po zveznosti.", tex: h`m\dot r\ddot r+U_{\rm ef}'\dot r=0\Rightarrow\boxed{m\ddot r=-U_{\rm ef}'(r)}` },
          { reason: "Odvod centrifugalnega člena da ekvivalentno radialno enačbo.", tex: h`m\ddot r=F_r(r)+\frac{L^2}{mr^3}` },
          { reason: "Krožni tir zahteva ravnovesje in ustrezno energijo.", tex: h`\boxed{U_{\rm ef}'(r_c)=0,\qquad E=U_{\rm ef}(r_c)}` },
          { reason: "Minimum je radialno stabilen in da majhna harmonična nihanja.", tex: h`m\ddot\eta+U_{\rm ef}''(r_c)\eta=0,\qquad U_{\rm ef}''(r_c)>0,\qquad\omega_r=\sqrt{\frac{U_{\rm ef}''(r_c)}m}` }
        ],
        result: "Graf Uₑf pokaže apsidi, vezanost in krožne tire; obračališče ni isto kot ravnovesje."
      },
      {
        title: "Binetova enačba — od časa do oblike orbite",
        goal: h`Izpeljati enačbo za \(u(\varphi)=1/r\); črtica pomeni odvod po \(\varphi\).`,
        steps: [
          { reason: "Uvedemo specifično vrtilno količino in obratno razdaljo.", tex: h`C_0=r^2\dot\varphi=\frac Lm,\qquad u=\frac1r` },
          { reason: "Iz r = 1/u dobimo kotno hitrost.", tex: h`\dot\varphi=C_0u^2` },
          { reason: "Časovni odvod r pretvorimo v odvod po kotu.", tex: h`\dot r=\frac{dr}{d\varphi}\dot\varphi=-C_0u'` },
          { reason: "Odvajamo še enkrat po času.", tex: h`\ddot r=-C_0u''\dot\varphi=-C_0^2u^2u''` },
          { reason: "Izrazimo geometrijski centripetalni člen.", tex: h`r\dot\varphi^2=C_0^2u^3` },
          { reason: "Sestavimo radialno komponento pospeška.", tex: h`a_r=\ddot r-r\dot\varphi^2=-C_0^2u^2(u''+u)` },
          { reason: "Uporabimo radialni Newtonov zakon pri r = 1/u.", tex: h`m[-C_0^2u^2(u''+u)]=F_r(1/u)` },
          { reason: "Izoliramo u.", tex: h`\boxed{u''+u=-\frac{F_r(1/u)}{mC_0^2u^2}=-\frac{mF_r(1/u)}{L^2u^2}}` }
        ],
        result: "Binet poda geometrijo r(φ); za časovni potek dodatno uporabimo φ̇ = C₀/r²."
      },
      {
        title: "Iz sile 1/r² do Keplerjeve stožnice",
        goal: "Rešiti Binetovo enačbo in povezati ekscentričnost z energijo.",
        steps: [
          { reason: "Pri r = 1/u postane privlačna sila −ku².", tex: h`F_r(r)=-\frac{k}{r^2}\Rightarrow F_r(1/u)=-ku^2` },
          { reason: "Binetova desna stran je konstanta.", tex: h`u''+u=\frac{k}{mC_0^2}=\frac{mk}{L^2}=\frac1p,\qquad p=\frac{L^2}{mk}` },
          { reason: "Seštejemo homogeno in partikularno rešitev.", tex: h`u=\frac1p+A\cos\varphi+B\sin\varphi` },
          { reason: "Konstanti združimo v ekscentričnost in fazo.", tex: h`u=\frac1p[1+\varepsilon\cos(\varphi-\varphi_0)]` },
          { reason: "Obrnemo u = 1/r.", tex: h`\boxed{r(\varphi)=\frac{p}{1+\varepsilon\cos(\varphi-\varphi_0)}}` },
          { reason: "Energijo zapišemo z u in u′.", tex: h`E=\frac12mC_0^2(u'^2+u^2)-ku` },
          { reason: "Vstavimo rešitev; odvisnost od kota se izniči.", tex: h`E=\frac{mk^2}{2L^2}(\varepsilon^2-1)\quad\Rightarrow\quad\boxed{\varepsilon^2=1+\frac{2EL^2}{mk^2}}` },
          { reason: "Pri U(∞) = 0 predznak energije določi vrsto orbite.", tex: h`E<0:\ 0\le\varepsilon<1,\quad E=0:\ \varepsilon=1,\quad E>0:\ \varepsilon>1` }
        ],
        result: "Dobimo elipso (krog pri ε = 0), parabolo ali hiperbolo, vedno s središčem sile v gorišču."
      },
      {
        title: "Iz ploščinskega zakona do tretjega Keplerjevega zakona",
        goal: h`Za vezano gravitacijsko elipso izpeljati \(T^2=4\pi^2a^3/(GM)\).`,
        steps: [
          { reason: "Ploščina elipse z veliko polosjo a in malo polosjo b je πab.", tex: h`A_{\rm el}=\pi ab` },
          { reason: "V eni periodi je pometena celotna elipsa.", tex: h`T=\frac{A_{\rm el}}{\dot A}` },
          { reason: "Uporabimo konstantno ploščinsko hitrost.", tex: h`\dot A=\frac{L}{2m}\Rightarrow T=\frac{2\pi abm}{L}` },
          { reason: "Goriščni parameter elipse je povezan s polosema.", tex: h`p=a(1-\varepsilon^2)=\frac{b^2}{a}` },
          { reason: "Za gravitacijo k = GMm in p = L²/(mk).", tex: h`p=\frac{L^2}{GMm^2}\Rightarrow L^2=GMm^2p` },
          { reason: "Kvadriramo periodo ter vstavimo L² in p.", tex: h`T^2=\frac{4\pi^2a^2b^2m^2}{L^2}=\frac{4\pi^2a^2b^2}{GM(b^2/a)}` },
          { reason: "Pokrajšamo b².", tex: h`\boxed{T^2=\frac{4\pi^2}{GM}a^3}` }
        ],
        result: "Prvi zakon poda elipso, drugi ploščinsko hitrost, tretji pa zvezo med veliko polosjo in periodo. Za primerljivi masi uporabimo G(M + m)."
      }
    ]
  };
})();
