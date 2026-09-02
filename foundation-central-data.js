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
        goal: h`Iz radialnega potenciala \(U(r)\) izračunamo centralno silo \(\vec F(r)\), oziroma iz sile obnovimo potencial.`,
        steps: [
          { reason: "Razdaljo zapišemo s kartezičnimi koordinatami.", tex: h`r=\sqrt{x^2+y^2+z^2}` },
          { reason: "Izračunamo krajevne odvode razdalje.", rule: "verižno in potenčno pravilo", tex: h`\frac{\partial r}{\partial x}=\frac{x}{\sqrt{x^2+y^2+z^2}}=\frac xr,\quad\frac{\partial r}{\partial y}=\frac yr,\quad\frac{\partial r}{\partial z}=\frac zr` },
          { reason: "Gradient razdalje je radialni enotski vektor.", tex: h`\nabla r=\left(\frac xr,\frac yr,\frac zr\right)=\frac{\vec r}{r}=\vec e_r` },
          { reason: "Za sestavljeno funkcijo najprej odvajamo vsako komponento posebej.", rule: "verižno pravilo", tex: h`\frac{\partial U}{\partial x}=\frac{dU}{dr}\frac{\partial r}{\partial x}=U'(r)\frac xr,\qquad \frac{\partial U}{\partial y}=U'(r)\frac yr,\qquad \frac{\partial U}{\partial z}=U'(r)\frac zr` },
          { reason: "Komponente združimo v gradient, ki kaže radialno.", tex: h`\nabla U(r)=U'(r)\nabla r=U'(r)\vec e_r` },
          { reason: "Potencialna sila je minus gradient.", tex: h`\boxed{\vec F=-\nabla U=-U'(r)\vec e_r}` },
          { reason: "Če poznamo radialno silo, zvezo najprej zapišemo kot diferencial.", rule: "preureditev diferencialne enačbe", tex: h`F_r(r)=-\frac{dU}{dr}\qquad\Longrightarrow\qquad dU=-F_r(r)\,dr` },
          { reason: "Integriramo od referenčne razdalje do trenutne razdalje.", rule: "integriranje", tex: h`\int_{U(r_0)}^{U(r)}dU=-\int_{r_0}^{r}F_r(s)\,ds\qquad\Longrightarrow\qquad\boxed{U(r)-U(r_0)=-\int_{r_0}^{r}F_r(s)\,ds}` }
        ],
        result: "Aditivna konstanta v U ne vpliva na silo; minus pomeni smer najhitrejšega padanja energije."
      },
      {
        title: "Iz ničelnega navora do ohranitve L in ravnine",
        goal: h`Iz ničelnega navora dobimo konstantno vrtilno količino \(\vec L\) in ravnino gibanja.`,
        steps: [
          { reason: "Definiramo vrtilno količino delca glede na O.", tex: h`\vec L=\vec r\times m\dot{\vec r}` },
          { reason: "Pol O je fiksen, zato je časovni odvod krajevnega vektorja hitrost.", tex: h`\dot{\vec r}=\vec v,\qquad \ddot{\vec r}=\vec a` },
          { reason: "Odvajamo oba faktorja vektorskega produkta.", rule: "produktno pravilo", tex: h`\dot{\vec L}=\frac d{dt}(\vec r\times m\dot{\vec r})=\dot{\vec r}\times m\dot{\vec r}+\vec r\times m\ddot{\vec r}` },
          { reason: "Prvi člen je vektorski produkt vektorja s samim seboj.", tex: h`m\vec v\times\vec v=\vec0` },
          { reason: "V drugem členu uporabimo m a = F.", tex: h`\dot{\vec L}=\vec r\times\vec F=\vec N_O` },
          { reason: "Centralna sila je vzporedna z r, zato je navor nič.", tex: h`\vec r\times F_r(r)\vec e_r=\vec0` },
          { reason: "Ničelni odvod pomeni stalni vektor L.", tex: h`\boxed{\dot{\vec L}=\vec0\Rightarrow\vec L=\mathrm{konst.}}` },
          { reason: "Po definiciji vektorskega produkta je r v vsakem trenutku pravokoten na L.", tex: h`\vec r\cdot\vec L=\vec r\cdot(\vec r\times m\vec v)=0` },
          { reason: "Ker je isti neničelni vektor L ves čas stalen, je tudi njegova pravokotna ravnina ves čas ista.", tex: h`L\ne0:\qquad \vec r(t)\in\vec L^\perp` },
          { reason: "Če je L enak nič, sta r in v vzporedna in gibanje je radialno.", tex: h`L=0\quad\Longrightarrow\quad\vec r\times\vec v=0\quad\Longrightarrow\quad\vec v\parallel\vec r` }
        ],
        result: "Centralna sila tridimenzionalni problem skrči na eno fiksno ravnino."
      },
      {
        title: "Polarna pot do hitrosti, pospeška in C₀",
        goal: h`Izračunamo \(\vec v\) in \(\vec a\) v polarnih koordinatah ter konstanto \(C_0=L/m\).`,
        steps: [
          { reason: "Za L ≠ 0 izberemo os z v smeri vektorja L in pozitivno smer kota po pravilu desne roke. Tako je φ̇ ≥ 0 in L pomeni pozitivno velikost vrtilne količine.", tex: h`\vec e_z=\frac{\vec L}{L},\qquad \vec e_r\times\vec e_\varphi=\vec e_z,\qquad \dot\varphi\ge0` },
          { reason: "Zapišemo premična enotska vektorja.", tex: h`\vec e_r=(\cos\varphi,\sin\varphi),\quad\vec e_\varphi=(-\sin\varphi,\cos\varphi)` },
          { reason: "Ker sta enotska vektorja odvisna od kota φ(t), ju odvajamo po verižnem pravilu.", rule: "verižno pravilo", tex: h`\dot{\vec e}_r=\frac{d\vec e_r}{d\varphi}\dot\varphi=\dot\varphi\vec e_\varphi,\qquad\dot{\vec e}_\varphi=\frac{d\vec e_\varphi}{d\varphi}\dot\varphi=-\dot\varphi\vec e_r` },
          { reason: "Krajevni vektor je produkt razdalje in premičnega enotskega vektorja.", tex: h`\vec r=r\vec e_r` },
          { reason: "Odvajamo oba faktorja in vstavimo odvod radialnega enotskega vektorja.", rule: "produktno pravilo", tex: h`\vec v=\frac d{dt}(r\vec e_r)=\dot r\vec e_r+r\dot{\vec e}_r=\boxed{\dot r\vec e_r+r\dot\varphi\vec e_\varphi}` },
          { reason: "Za pospešek posebej odvajamo radialni člen hitrosti.", rule: "produktno pravilo", tex: h`\frac d{dt}(\dot r\vec e_r)=\ddot r\vec e_r+\dot r\dot{\vec e}_r=\ddot r\vec e_r+\dot r\dot\varphi\vec e_\varphi` },
          { reason: "Nato odvajamo še tangencialni člen hitrosti.", rule: "produktno pravilo", tex: h`\frac d{dt}(r\dot\varphi\vec e_\varphi)=(\dot r\dot\varphi+r\ddot\varphi)\vec e_\varphi+r\dot\varphi\dot{\vec e}_\varphi` },
          { reason: "Vstavimo odvod eφ in zapišemo vse štiri nastale člene.", tex: h`\vec a=\ddot r\vec e_r+\dot r\dot\varphi\vec e_\varphi+(\dot r\dot\varphi+r\ddot\varphi)\vec e_\varphi-r\dot\varphi^2\vec e_r` },
          { reason: "Zberemo radialne in tangencialne komponente.", tex: h`\boxed{\vec a=(\ddot r-r\dot\varphi^2)\vec e_r+(r\ddot\varphi+2\dot r\dot\varphi)\vec e_\varphi}` },
          { reason: "Centralna sila nima tangencialne komponente.", tex: h`m(r\ddot\varphi+2\dot r\dot\varphi)=0` },
          { reason: "Pomnožimo z r in prepoznamo odvod produkta.", rule: "prepoznavanje odvoda produkta", tex: h`r^2\ddot\varphi+2r\dot r\dot\varphi=\frac d{dt}(r^2\dot\varphi)=0` },
          { reason: "Ničelni odvod pomeni, da je r²φ̇ konstanta.", tex: h`r^2\dot\varphi=C_0=\mathrm{konst.}` },
          { reason: "Vrtilno količino izračunamo iz definicije; radialni del hitrosti ne prispeva.", tex: h`\vec L=m(r\vec e_r)\times(\dot r\vec e_r+r\dot\varphi\vec e_\varphi)=mr^2\dot\varphi\,\vec e_z` },
          { reason: "Zaradi izbrane orientacije je φ̇ nenegativen, zato lahko iz vektorske enačbe neposredno preberemo velikost L.", tex: h`L=mr^2\dot\varphi\qquad\Longrightarrow\qquad\boxed{C_0=r^2\dot\varphi=\frac Lm}` }
        ],
        result: "Isto ohranitev dobimo geometrijsko iz navora ali komponentno iz polarne enačbe."
      },
      {
        title: "Iz L do ploščinskega zakona",
        goal: h`Iz vrtilne količine izračunamo konstantno ploščinsko hitrost \(\dot A\).`,
        steps: [
          { reason: "V času dt krajevni vektor pomete majhen trikotnik.", tex: h`dA=\frac12|\vec r\times d\vec r|` },
          { reason: "Majhen premik izrazimo s hitrostjo.", tex: h`d\vec r=\vec v\,dt` },
          { reason: "Vstavimo premik in delimo z dt.", rule: "definicija časovnega odvoda", tex: h`dA=\frac12|\vec r\times\vec v|dt\qquad\Longrightarrow\qquad\dot A=\frac{dA}{dt}=\frac12|\vec r\times\vec v|` },
          { reason: "Uporabimo velikost vrtilne količine.", tex: h`L=m|\vec r\times\vec v|\quad\Rightarrow\quad\boxed{\dot A=\frac L{2m}=\mathrm{konst.}}` },
          { reason: "V polarnih koordinatah ima majhen trikotnik višino r in tangencialno osnovnico r dφ.", tex: h`dA=\frac12r(r\,d\varphi)=\frac12r^2d\varphi` },
          { reason: "Pri prej izbrani pozitivni orientaciji je dφ ≥ 0; delimo z dt in znova uporabimo C₀.", tex: h`\dot A=\frac12r^2\dot\varphi=\frac{C_0}{2}=\frac L{2m}` }
        ],
        result: "V enakih časih so pometene enake ploščine: drugi Keplerjev zakon za vsako centralno silo."
      },
      {
        title: "Iz energije in L do efektivnega potenciala",
        goal: h`Tridimenzionalno gibanje prevedemo na radialno enačbo z efektivnim potencialom \(U_{\rm ef}(r)\).`,
        steps: [
          { reason: "Radialna in tangencialna hitrost sta pravokotni.", tex: h`v^2=\dot r^2+r^2\dot\varphi^2` },
          { reason: "Zapišemo celotno mehansko energijo.", tex: h`E=\frac12m\dot r^2+\frac12mr^2\dot\varphi^2+U(r)` },
          { reason: "Kinetično energijo odvajamo po času.", rule: "verižno pravilo", tex: h`\frac d{dt}\!\left(\frac12mv^2\right)=m\vec v\cdot\dot{\vec v}=m\vec v\cdot\vec a=\vec v\cdot\vec F` },
          { reason: "Ker je sila radialna, skalarni produkt izbere radialno komponento hitrosti.", tex: h`\vec v\cdot\vec F=(\dot r\vec e_r+r\dot\varphi\vec e_\varphi)\cdot(F_r\vec e_r)=F_r\dot r` },
          { reason: "Tudi potencial odvajamo z verižnim pravilom.", rule: "verižno pravilo", tex: h`\frac{dU(r(t))}{dt}=U'(r)\dot r` },
          { reason: "Ker je Fᵣ = −U′, se odvoda kinetične in potencialne energije odštejeta.", tex: h`\dot E=F_r\dot r+U'(r)\dot r=[-U'(r)+U'(r)]\dot r=0` },
          { reason: "Iz L izrazimo kotno hitrost.", tex: h`L=mr^2\dot\varphi\qquad\Longrightarrow\qquad\dot\varphi=\frac{L}{mr^2}` },
          { reason: "Kotno hitrost vstavimo v tangencialno kinetično energijo in krajšamo.", rule: "vstavljanje in krajšanje", tex: h`\frac12mr^2\dot\varphi^2=\frac12mr^2\left(\frac{L}{mr^2}\right)^2=\frac12mr^2\frac{L^2}{m^2r^4}=\frac{L^2}{2mr^2}` },
          { reason: "Člena, odvisna samo od r, združimo.", tex: h`\boxed{U_{\rm ef}(r)=U(r)+\frac{L^2}{2mr^2}}` },
          { reason: "Dobimo enodimenzionalno radialno energijsko enačbo.", tex: h`\boxed{\frac12m\dot r^2+U_{\rm ef}(r)=E}` }
        ],
        result: "Centrifugalni člen je prepisana tangencialna kinetična energija, ne nova zunanja sila."
      },
      {
        title: "Iz Uₑf do gibanja, radialne enačbe in kroga",
        goal: h`Iz \(U_{\rm ef}\) določimo dovoljene razdalje, apside, čas, kot in stabilnost krožnega tira.`,
        steps: [
          { reason: "Iz energijske enačbe prestavimo efektivni potencial na desno.", tex: h`\frac12m\dot r^2=E-U_{\rm ef}(r)` },
          { reason: "Pomnožimo z 2/m in izoliramo kvadrat radialne hitrosti.", tex: h`\dot r^2=\frac2m[E-U_{\rm ef}(r)]` },
          { reason: "Koren ima dve veji; predznak pove, ali se r povečuje ali zmanjšuje.", rule: "korenjenje obeh strani", tex: h`\dot r=\pm\sqrt{\frac2m[E-U_{\rm ef}(r)]}` },
          { reason: "Kvadrat hitrosti ni negativen, zato dobimo dovoljeno območje gibanja.", tex: h`E-U_{\rm ef}(r)\ge0\qquad\Longleftrightarrow\qquad U_{\rm ef}(r)\le E` },
          { reason: "V apsidah je nič samo radialna hitrost.", tex: h`E=U_{\rm ef}(r_\pm)\Rightarrow\dot r=0,\qquad v_\varphi=\frac{L}{mr}` },
          { reason: "Za čas uporabimo ṙ = dr/dt in ločimo spremenljivki.", rule: "ločitev spremenljivk", tex: h`\frac{dr}{dt}=\pm\sqrt{\frac2m[E-U_{\rm ef}(r)]}\qquad\Longrightarrow\qquad dt=\pm\sqrt{\frac m2}\frac{dr}{\sqrt{E-U_{\rm ef}(r)}}` },
          { reason: "Na izbrani monotoni veji integriramo od začetnega stanja do trenutne razdalje.", rule: "integriranje", tex: h`\int_{t_0}^{t}dt=\pm\sqrt{\frac m2}\int_{r_0}^{r}\frac{ds}{\sqrt{E-U_{\rm ef}(s)}}` },
          { reason: "Dobimo čas kot funkcijo radialne razdalje.", tex: h`\boxed{t-t_0=\pm\sqrt{\frac m2}\int_{r_0}^{r}\frac{ds}{\sqrt{E-U_{\rm ef}(s)}}}` },
          { reason: "Za obliko orbite čas odstranimo z razmerjem kotne in radialne hitrosti.", rule: "verižno pravilo", tex: h`\frac{d\varphi}{dr}=\frac{d\varphi/dt}{dr/dt}=\frac{\dot\varphi}{\dot r}` },
          { reason: "Vstavimo φ̇ = L/(mr²) in že izračunani ṙ ter uredimo faktorje.", tex: h`\frac{d\varphi}{dr}=\frac{L/(mr^2)}{\pm\sqrt{2[E-U_{\rm ef}(r)]/m}}=\pm\frac{L}{r^2\sqrt{2m[E-U_{\rm ef}(r)]}}` },
          { reason: "Integriramo in dobimo kot kot funkcijo razdalje.", rule: "integriranje", tex: h`\boxed{\varphi-\varphi_0=\pm\int_{r_0}^{r}\frac{L\,ds}{s^2\sqrt{2m[E-U_{\rm ef}(s)]}}}` },
          { reason: "Za radialno enačbo uporabimo radialno komponento drugega Newtonovega zakona; ta velja tudi za točno krožni tir.", tex: h`m(\ddot r-r\dot\varphi^2)=F_r(r)` },
          { reason: "Vstavimo φ̇ = L/(mr²) in centrifugalni člen uredimo po potencah.", rule: "vstavljanje in krajšanje", tex: h`mr\dot\varphi^2=mr\left(\frac{L}{mr^2}\right)^2=\frac{L^2}{mr^3}` },
          { reason: "Radialni Newtonov zakon rešimo za radialni pospešek.", tex: h`\boxed{m\ddot r=F_r(r)+\frac{L^2}{mr^3}}` },
          { reason: "Efektivni potencial odvajamo člen za členom.", rule: "potenčno pravilo", tex: h`U_{\rm ef}'(r)=U'(r)+\frac{L^2}{2m}\frac d{dr}(r^{-2})=U'(r)-\frac{L^2}{mr^3}` },
          { reason: "Ker je Fᵣ = −U′, je ista radialna enačba enaka gibanju v efektivnem potencialu.", tex: h`-U_{\rm ef}'(r)=F_r(r)+\frac{L^2}{mr^3}\qquad\Longrightarrow\qquad\boxed{m\ddot r=-U_{\rm ef}'(r)}` },
          { reason: "Na krožnem tiru je razdalja stalna, zato sta radialna hitrost in pospešek nič.", tex: h`r(t)=r_c\qquad\Longrightarrow\qquad\dot r=0,\quad\ddot r=0` },
          { reason: "Radialna enačba in energija zato določita polmer ter energijo kroga.", tex: h`\boxed{U_{\rm ef}'(r_c)=0,\qquad E=U_{\rm ef}(r_c)}` },
          { reason: "Za majhen radialni odmik zapišemo r = r_c + η.", tex: h`r=r_c+\eta,\qquad |\eta|\ll r_c,\qquad\ddot r=\ddot\eta` },
          { reason: "Odvod efektivnega potenciala razvijemo okoli krožnega tira.", rule: "Taylorjev razvoj", tex: h`U_{\rm ef}'(r_c+\eta)\approx U_{\rm ef}'(r_c)+U_{\rm ef}''(r_c)\eta=U_{\rm ef}''(r_c)\eta` },
          { reason: "Vstavimo približek v radialno enačbo in dobimo harmonični oscilator.", tex: h`m\ddot\eta+U_{\rm ef}''(r_c)\eta=0` },
          { reason: "Minimum Uₑf pomeni stabilen krog in določi frekvenco majhnih radialnih nihanj.", tex: h`U_{\rm ef}''(r_c)>0,\qquad\boxed{\omega_r=\sqrt{\frac{U_{\rm ef}''(r_c)}m}}` }
        ],
        result: "Graf Uₑf pokaže apsidi, vezanost in krožne tire; obračališče ni isto kot ravnovesje."
      },
      {
        title: "Binetova enačba — od časa do oblike orbite",
        goal: h`Časovno enačbo pretvorimo v diferencialno enačbo za obliko orbite \(r(\varphi)\).`,
        steps: [
          { reason: "Uvedemo specifično vrtilno količino in obratno razdaljo.", tex: h`C_0=r^2\dot\varphi=\frac Lm,\qquad u=\frac1r` },
          { reason: "Iz r = 1/u dobimo kotno hitrost.", tex: h`\dot\varphi=\frac{C_0}{r^2}=C_0u^2` },
          { reason: "Ker je r = u⁻¹, ga najprej odvajamo po kotu; črtica od tu naprej pomeni d/dφ.", rule: "verižno in potenčno pravilo", tex: h`\frac{dr}{d\varphi}=\frac d{d\varphi}(u^{-1})=-u^{-2}u'=-\frac{u'}{u^2}` },
          { reason: "Časovni odvod r pretvorimo v odvod po kotu.", rule: "verižno pravilo", tex: h`\dot r=\frac{dr}{d\varphi}\dot\varphi=\left(-\frac{u'}{u^2}\right)(C_0u^2)=-C_0u'` },
          { reason: "Pri drugem časovnem odvodu moramo tudi u′ odvajati prek kota φ(t).", rule: "verižno pravilo", tex: h`\frac{du'}{dt}=\frac{du'}{d\varphi}\dot\varphi=u''\dot\varphi` },
          { reason: "Vstavimo kotno hitrost in dobimo radialni pospešek brez časa.", tex: h`\ddot r=-C_0\frac{du'}{dt}=-C_0u''\dot\varphi=-C_0u''(C_0u^2)=-C_0^2u^2u''` },
          { reason: "Izrazimo geometrijski centripetalni člen.", tex: h`r\dot\varphi^2=\frac1u(C_0u^2)^2=C_0^2u^3` },
          { reason: "Sestavimo radialno komponento pospeška.", tex: h`a_r=\ddot r-r\dot\varphi^2=-C_0^2u^2u''-C_0^2u^3=-C_0^2u^2(u''+u)` },
          { reason: "Uporabimo radialni Newtonov zakon pri r = 1/u.", tex: h`m[-C_0^2u^2(u''+u)]=F_r(1/u)` },
          { reason: "Enačbo delimo z −mC₀²u².", rule: "algebrsko urejanje", tex: h`u''+u=-\frac{F_r(1/u)}{mC_0^2u^2}` },
          { reason: "Nazadnje uporabimo C₀ = L/m oziroma mC₀² = L²/m.", tex: h`mC_0^2=m\frac{L^2}{m^2}=\frac{L^2}{m}\qquad\Longrightarrow\qquad\boxed{u''+u=-\frac{mF_r(1/u)}{L^2u^2}}` }
        ],
        result: "Binet poda geometrijo r(φ); za časovni potek dodatno uporabimo φ̇ = C₀/r²."
      },
      {
        title: "Iz sile 1/r² do Keplerjeve stožnice",
        goal: h`Izračunamo Keplerjevo orbito \(r(\varphi)\) in iz energije določimo vrsto stožnice.`,
        steps: [
          { reason: "Pri r = 1/u postane privlačna sila −ku².", tex: h`F_r(r)=-\frac{k}{r^2}\Rightarrow F_r(1/u)=-ku^2` },
          { reason: "Binetova desna stran je konstanta.", tex: h`u''+u=\frac{k}{mC_0^2}=\frac{mk}{L^2}=\frac1p,\qquad p=\frac{L^2}{mk}` },
          { reason: "Najprej rešimo homogeno enačbo.", rule: "homogena in partikularna rešitev", tex: h`u_h''+u_h=0\qquad\Longrightarrow\qquad u_h=A\cos\varphi+B\sin\varphi` },
          { reason: "Konstantna partikularna rešitev je 1/p.", tex: h`u_p=\frac1p,\qquad u_p''+u_p=\frac1p` },
          { reason: "Splošna rešitev je vsota homogene in partikularne rešitve.", tex: h`u=u_p+u_h=\frac1p+A\cos\varphi+B\sin\varphi` },
          { reason: "Konstanti A in B zapišemo z amplitudo ε/p in fazo φ₀.", tex: h`A=\frac\varepsilon p\cos\varphi_0,\qquad B=\frac\varepsilon p\sin\varphi_0` },
          { reason: "Uporabimo adicijski izrek za kosinus.", rule: "adicijski izrek", tex: h`A\cos\varphi+B\sin\varphi=\frac\varepsilon p[\cos\varphi\cos\varphi_0+\sin\varphi\sin\varphi_0]=\frac\varepsilon p\cos(\varphi-\varphi_0)` },
          { reason: "Tako dobimo obratno razdaljo kot funkcijo kota.", tex: h`u=\frac1p[1+\varepsilon\cos(\varphi-\varphi_0)]` },
          { reason: "Obrnemo u = 1/r.", tex: h`\boxed{r(\varphi)=\frac{p}{1+\varepsilon\cos(\varphi-\varphi_0)}}` },
          { reason: "Radialno in tangencialno hitrost izrazimo z u in u′.", tex: h`\dot r=-C_0u',\qquad r\dot\varphi=\frac1u(C_0u^2)=C_0u` },
          { reason: "Zato kinetična energija in potencial dobita preprost zapis.", tex: h`\frac12mv^2=\frac12mC_0^2(u'^2+u^2),\qquad U(r)=-\frac kr=-ku` },
          { reason: "Celotno energijo zapišemo z u in u′.", tex: h`E=\frac12mC_0^2(u'^2+u^2)-ku` },
          { reason: "Za krajši račun uvedemo θ = φ − φ₀ in izračunamo u′.", rule: "verižno pravilo", tex: h`\theta=\varphi-\varphi_0,\qquad u=\frac{1+\varepsilon\cos\theta}{p},\qquad u'=-\frac\varepsilon p\sin\theta` },
          { reason: "V energijo vstavimo oba izraza brez preskoka.", rule: "vstavljanje", tex: h`E=\frac{mC_0^2}{2p^2}\!\left[\varepsilon^2\sin^2\theta+(1+\varepsilon\cos\theta)^2\right]-\frac{k}{p}(1+\varepsilon\cos\theta)` },
          { reason: "Uporabimo 1/p = k/(mC₀²) in razširimo kvadrat.", rule: "algebrsko urejanje", tex: h`\frac{k}{p}=\frac{mC_0^2}{p^2},\qquad (1+\varepsilon\cos\theta)^2=1+2\varepsilon\cos\theta+\varepsilon^2\cos^2\theta` },
          { reason: "Linearni členi se odštejejo, sin²θ + cos²θ pa je 1.", tex: h`E=\frac{mC_0^2}{2p^2}\left[\varepsilon^2-1\right]` },
          { reason: "Vstavimo C₀ = L/m in p = L²/(mk).", rule: "vstavljanje", tex: h`\frac{mC_0^2}{p^2}=m\frac{L^2}{m^2}\frac{m^2k^2}{L^4}=\frac{mk^2}{L^2}` },
          { reason: "Iz energije izoliramo ekscentričnost.", rule: "algebrsko urejanje", tex: h`E=\frac{mk^2}{2L^2}(\varepsilon^2-1)\quad\Longrightarrow\quad\boxed{\varepsilon^2=1+\frac{2EL^2}{mk^2}}` },
          { reason: "Pri U(∞) = 0 predznak energije določi vrsto orbite.", tex: h`E<0:\ 0\le\varepsilon<1,\quad E=0:\ \varepsilon=1,\quad E>0:\ \varepsilon>1` }
        ],
        result: "Dobimo elipso (krog pri ε = 0), parabolo ali hiperbolo, vedno s središčem sile v gorišču."
      },
      {
        title: "Iz ploščinskega zakona do tretjega Keplerjevega zakona",
        goal: h`Izračunamo zvezo med obhodnim časom \(T\) in veliko polosjo \(a\).`,
        steps: [
          { reason: "Ploščina elipse z veliko polosjo a in malo polosjo b je πab.", tex: h`A_{\rm el}=\pi ab` },
          { reason: "V eni periodi je pometena celotna elipsa.", tex: h`T=\frac{A_{\rm el}}{\dot A}` },
          { reason: "Uporabimo konstantno ploščinsko hitrost.", tex: h`\dot A=\frac{L}{2m}\Rightarrow T=\frac{2\pi abm}{L}` },
          { reason: "Goriščni parameter elipse je povezan s polosema.", tex: h`p=a(1-\varepsilon^2)=\frac{b^2}{a}` },
          { reason: "Za gravitacijo k = GMm in p = L²/(mk).", tex: h`p=\frac{L^2}{GMm^2}\Rightarrow L^2=GMm^2p` },
          { reason: "Najprej kvadriramo izraz za periodo.", rule: "kvadriranje", tex: h`T=\frac{2\pi abm}{L}\qquad\Longrightarrow\qquad T^2=\frac{4\pi^2a^2b^2m^2}{L^2}` },
          { reason: "Vstavimo L² = GMm²p in pokrajšamo m².", rule: "vstavljanje in krajšanje", tex: h`T^2=\frac{4\pi^2a^2b^2m^2}{GMm^2p}=\frac{4\pi^2a^2b^2}{GMp}` },
          { reason: "Nato posebej vstavimo geometrijsko zvezo p = b²/a.", rule: "vstavljanje", tex: h`T^2=\frac{4\pi^2a^2b^2}{GM(b^2/a)}` },
          { reason: "Pokrajšamo b² in pomnožimo a² z a.", rule: "krajšanje", tex: h`\boxed{T^2=\frac{4\pi^2}{GM}a^3}` }
        ],
        result: "Prvi zakon poda elipso, drugi ploščinsko hitrost, tretji pa zvezo med veliko polosjo in periodo. Za primerljivi masi uporabimo G(M + m)."
      }
    ]
  };
})();
