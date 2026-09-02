(() => {
  "use strict";

  const h = String.raw;

  if (!window.MECHANICS_EASY || typeof window.MECHANICS_EASY !== "object") {
    window.MECHANICS_EASY = {};
  }

  window.MECHANICS_EASY["togo-telo"] = {
    question: "Togo telo: od premikanja knjige do Eulerjevih enačb",
    promise: "Po tej temi boš znal najprej s sliko in nato s formulami razložiti translacijo, rotacijo, vztrajnostni tenzor, vrtilno količino, prosto vrtavko in kotaljenje.",
    before: [
      h`Najprej si predstavljaj knjigo, ki jo hkrati potisneš in zavrtiš. Premikanje njenega središča je translacija, obračanje knjige pa rotacija.`,
      h`Vektor je puščica: ima velikost in smer. Puščica nad simbolom, na primer \(\vec v\), nas opomni, da sama številka ni dovolj.`,
      h`Pika pomeni odvod po času: \(\dot{\vec r}=\vec v\), \(\dot{\vec v}=\vec a\), \(\dot{\vec\omega}\) pa je kotni pospešek.`,
      h`Ves čas uporabljamo isto masno središče \(C\). Točka \(P\) je poljubna točka, pritrjena na telo, \(\vec\xi_P=\vec r_P-\vec r_C\) pa je puščica od \(C\) do \(P\).`,
      h`Kinematika pove, kako se telo giblje. Dinamika se začne šele, ko uvedemo zunanje sile \(\vec F\) in navore \(\vec N\).`
    ],
    basics: [
      {
        title: "1. Kaj pomeni togo?",
        body: h`Telo je togo, če se razdalja med katerimakoli materialnima točkama ne spreminja. Telo lahko leti, drsi in se vrti, ne sme pa se raztegniti, stisniti ali ukriviti.`,
        analogy: "Lesena knjiga v idealnem modelu ohrani obliko, kos plastelina pa ne."
      },
      {
        title: "2. Translacija in rotacija",
        body: h`Pri translaciji se vse točke premaknejo enako. Pri rotaciji se točke gibljejo po krogih okoli trenutne osi; bolj oddaljene točke imajo večjo hitrost. Splošno gibanje je vsota obeh učinkov.`,
        analogy: "Vožnja in vrtenje kolesa: pesto potuje naprej, kolo pa se hkrati obrača."
      },
      {
        title: "3. Prostorske in telesne osi",
        body: h`Prostorske osi mirujejo v prostoru. Telesne osi so narisane na telesu in se vrtijo z njim. Koordinate materialne točke so v telesnih oseh stalne, v prostorskih pa se spreminjajo.`,
        analogy: "Puščice, narisane na knjigi, se vrtijo s knjigo; robovi mize ostanejo pri miru."
      },
      {
        title: "4. Kaj je kotna hitrost?",
        body: h`Vektor \(\vec\omega\) v enem trenutku opiše rotacijski del hitrosti vseh točk. Kaže po trenutni osi vrtenja, njegova velikost pa pove hitrost vrtenja v radianih na sekundo.`,
        analogy: "Os kolesa kaže smer vektorja ω, vrtenje obroča pa določa njegov predznak po pravilu desne roke."
      },
      {
        title: "5. Zakaj ni dovolj samo masa?",
        body: h`Pri translaciji je pomembna skupna masa. Pri rotaciji je pomembno tudi, kako daleč od osi je masa. To opiše vztrajnostni tenzor \(J\).`,
        analogy: "Vrata lažje odpreš pri kljuki kakor tik ob tečaju, ker ima ista sila daljšo ročico."
      },
      {
        title: "6. Kdaj se začne dinamika?",
        body: h`Formule za lego, hitrost in pospešek so kinematika. Ko vprašamo, katera sila pospeši masno središče in kateri navor spremeni vrtenje, preidemo na Newton–Eulerjevo dinamiko.`,
        analogy: "Kinematika opiše posnetek gibanja; dinamika razloži, kdo je telo potisnil ali zavrtel."
      }
    ],
    spotlight: {
      label: "Najpomembnejša začetna formula",
      title: "Hitrost točke = translacija + rotacija",
      tex: h`\boxed{\vec v_P=\vec v_C+\vec\omega\times\vec\xi_P}`,
      plain: h`Vsaka točka telesa najprej dobi hitrost masnega središča. Nato dobi še tangencialno hitrost zaradi vrtenja okoli masnega središča. Znak \(\times\) je vektorski produkt, ne navadno množenje.`,
      terms: [
        { tex: h`P`, meaning: "poljubna materialna točka, pritrjena na telo" },
        { tex: h`C`, meaning: "masno središče; referenčna točka za translacijo" },
        { tex: h`\vec v_P`, meaning: "dejanska hitrost točke P, merjena v prostoru" },
        { tex: h`\vec v_C`, meaning: "hitrost masnega središča; translacijski prispevek" },
        { tex: h`\vec\xi_P=\vec r_P-\vec r_C`, meaning: "trenutni vektor od C do P" },
        { tex: h`\vec\omega`, meaning: "kotna hitrost; smer je trenutna os vrtenja" },
        { tex: h`\vec\omega\times\vec\xi_P`, meaning: "rotacijska hitrost; pravokotna je na ω in ξₚ" },
        { tex: h`|\vec\omega\times\vec\xi_P|=\omega r_\perp`, meaning: "hitrost je večja za točke, ki so dlje od osi" }
      ],
      derivation: [
        { title: "Razstavimo lego", text: "Položaj P je položaj središča plus vektor od središča do P.", tex: h`\vec r_P=\vec r_C+\vec\xi_P` },
        { title: "Točka je pritrjena na telo", text: "Njene telesne koordinate aₚ so stalne, trenutni prostorski vektor pa dobimo z rotacijo Q.", tex: h`\vec\xi_P=Q(t)\vec a_P,\qquad \dot{\vec a}_P=0` },
        { title: "Vrteči vektor odvajamo z vektorskim produktom", text: "Sprememba na telo pritrjenega vektorja je tangencialna na njegov krožni tir.", tex: h`\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P` },
        { title: "Odvajamo lego", text: "Časovni odvod položaja je hitrost.", tex: h`\dot{\vec r}_P=\dot{\vec r}_C+\dot{\vec\xi}_P` },
        { title: "Vstavimo rotacijski odvod", text: "Dobimo vsoto skupne translacije in dodatne rotacijske hitrosti.", tex: h`\vec v_P=\vec v_C+\vec\omega\times\vec\xi_P` }
      ],
      units: h`\([\vec v]=\mathrm{m/s}\), \([\vec\omega]=\mathrm{rad/s}\) in \([\vec\xi]=\mathrm m\). Radian je brezdimenzijski, zato ima \(\omega\xi\) pravilno enoto \(\mathrm{m/s}\).`,
      example: h`Kolo s polmerom \(R=0.20\,\mathrm m\) se brez drsenja kotali s \(v_C=1\,\mathrm{m/s}\), zato je \(\omega=v_C/R=5\,\mathrm{rad/s}\). Rotacijski prispevek na obodu ima velikost \(\omega R=1\,\mathrm{m/s}\). Spodaj nasprotuje translaciji, zato je hitrost stične točke 0; zgoraj se z njo sešteje, zato je hitrost zgornje točke \(2\,\mathrm{m/s}\).`
    },
    formulas: [
      {
        title: "Togost in opis lege z rotacijo Q",
        tex: h`\boxed{|\vec r_P-\vec r_S|=\text{konst.}},\qquad \boxed{\vec r_P=\vec r_C+Q(t)\vec a_P}`,
        plain: "Prva formula prepove deformacijo. Druga pove, da lego vsake točke dobimo iz translacije središča in orientacije telesa.",
        symbols: [
          { tex: h`\vec r_P,\vec r_S`, meaning: "prostorska položaja dveh materialnih točk P in S" },
          { tex: h`\vec r_C`, meaning: "položaj masnega središča" },
          { tex: h`\vec a_P`, meaning: "stalne koordinate P v telesnem sistemu" },
          { tex: h`Q(t)`, meaning: "rotacijska matrika, ki telesni vektor zavrti v prostor" },
          { tex: h`Q^TQ=I,\ \det Q=1`, meaning: "Q ohranja dolžine in je rotacija, ne zrcaljenje" }
        ],
        origin: [
          { text: "Izberemo eno referenčno točko C in na telo pritrjene osi." },
          { text: "V teh oseh je aₚ stalen, ker se P glede na telo ne premika." },
          { text: "Q spremeni samo orientacijo, r_C pa premakne celotno telo.", tex: h`\vec\xi_P=Q\vec a_P,\qquad \vec r_P=\vec r_C+\vec\xi_P` },
          { text: "Tri komponente r_C in trije rotacijski parametri pomenijo šest prostostnih stopenj." }
        ],
        use: "To je najbolj natančen zapis trditve »splošno gibanje = translacija + rotacija«."
      },
      {
        title: "Vektorski produkt in pravilo desne roke",
        tex: h`\boxed{|\vec a\times\vec b|=|\vec a|\,|\vec b|\sin\theta},\qquad \vec a\times\vec b\perp\vec a,\vec b`,
        plain: "Vektorski produkt izdela puščico, pravokotno na oba vhodna vektorja. Njegova velikost meri tudi, kako pravokotna sta vektorja.",
        symbols: [
          { tex: h`\theta`, meaning: "manjši kot med a in b" },
          { tex: h`\sin\theta`, meaning: "nič za vzporedna in ena za pravokotna vektorja" },
          { tex: h`\perp`, meaning: "pravokotno" },
          { tex: h`\vec a\times\vec b`, meaning: "smer določimo tako, da prste desne roke zavrtimo od a proti b" }
        ],
        origin: [
          { text: "Vektor b razstavimo na del vzporedno in pravokotno na a." },
          { text: "Vzporedni del ne prispeva k vektorskemu produktu; ostane pravokotni del velikosti |b| sin θ." },
          { text: "Zato pri vrtenju dobimo tangencialno hitrost.", tex: h`|\vec\omega\times\vec\xi|=\omega\xi\sin\theta=\omega r_\perp` }
        ],
        use: "Če točka leži na osi, je r⊥=0. Če je daleč od osi, je njena tangencialna hitrost večja."
      },
      {
        title: "Hitrost poljubne točke",
        tex: h`\boxed{\vec v_P=\vec v_C+\vec\omega\times\vec\xi_P}`,
        plain: "Ista formula deluje za vsak vogal, rob in masni element togega telesa.",
        symbols: [
          { tex: h`\vec v_C`, meaning: "enak translacijski prispevek za vse točke" },
          { tex: h`\vec\omega\times\vec\xi_P`, meaning: "tangencialni prispevek, ki je odvisen od lege P" },
          { tex: h`\vec\xi_P`, meaning: "ročica od C do P v trenutni legi" }
        ],
        origin: [
          { text: "Začnemo z lego.", tex: h`\vec r_P=\vec r_C+\vec\xi_P` },
          { text: "Odvajamo po času.", tex: h`\vec v_P=\vec v_C+\dot{\vec\xi}_P` },
          { text: "Za na telo pritrjen vektor uporabimo rotacijski odvod.", tex: h`\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P` }
        ],
        use: "Uporabi jo pri vseh nalogah s kotaljenjem, vrvmi na kolutih, zobniki in hitrostmi točk telesa."
      },
      {
        title: "Pospešek poljubne točke",
        tex: h`\boxed{\vec a_P=\vec a_C+\dot{\vec\omega}\times\vec\xi_P+\vec\omega\times(\vec\omega\times\vec\xi_P)}`,
        plain: "Pospešek je vsota translacijskega, tangencialnega in centripetalnega dela.",
        symbols: [
          { tex: h`\vec a_C`, meaning: "pospešek masnega središča" },
          { tex: h`\dot{\vec\omega}\times\vec\xi_P`, meaning: "tangencialni pospešek zaradi spreminjanja vrtenja" },
          { tex: h`\vec\omega\times(\vec\omega\times\vec\xi_P)`, meaning: "centripetalni pospešek proti osi" }
        ],
        origin: [
          { text: "Odvajamo formulo za hitrost.", tex: h`\vec a_P=\vec a_C+\frac d{dt}(\vec\omega\times\vec\xi_P)` },
          { text: "Uporabimo produktno pravilo.", tex: h`\frac d{dt}(\vec\omega\times\vec\xi)=\dot{\vec\omega}\times\vec\xi+\vec\omega\times\dot{\vec\xi}` },
          { text: "Ponovno vstavimo ξ̇=ω×ξ." },
          { text: "Coriolisovega člena ni, ker je P pritrjena na telo in ima v telesnih oseh nič relativne hitrosti." }
        ],
        use: "Pri enakomerni rotaciji je ω̇=0, centripetalni člen pa ostane, ker se smer hitrosti še vedno spreminja."
      },
      {
        title: "Vztrajnostni moment okoli ene osi",
        tex: h`\boxed{J_{\vec e}=\int_B r_\perp^2\,dm}`,
        plain: "Najprej obravnavaj eno os: vsak košček mase prispeva svojo maso krat kvadrat razdalje od osi.",
        symbols: [
          { tex: h`\vec e`, meaning: "enotski vektor izbrane osi" },
          { tex: h`r_\perp`, meaning: "najkrajša pravokotna razdalja masnega koščka od osi" },
          { tex: h`dm`, meaning: "majhen košček mase; pri masni gostoti ρ_m velja dm=ρ_m dV" },
          { tex: h`B`, meaning: "celotno telo, prek katerega seštevamo maso" }
        ],
        origin: [
          { text: "Za eno točkasto maso je moment mr²." },
          { text: "Za veliko majhnih mas prispevke seštejemo." },
          { text: "Pri zveznem telesu vsoto nadomesti integral.", tex: h`\sum_k m_kr_{\perp,k}^2\longrightarrow\int_B r_\perp^2dm` }
        ],
        use: "Masa dvakrat dlje od osi prispeva štirikrat več. Enota J je kg m²."
      },
      {
        title: "Vztrajnostni tenzor J",
        tex: h`\boxed{J_C=\int_B\left(|\vec\xi|^2I-\vec\xi\otimes\vec\xi\right)dm}`,
        plain: "Ker ima telo za različne osi različne vztrajnostne momente, en skalar ne zadošča. J je matrika, ki zbere podatke za vse smeri.",
        symbols: [
          { tex: h`J_C`, meaning: "vztrajnostni tenzor glede na masno središče C" },
          { tex: h`I`, meaning: "identitetna matrika; vektor pusti nespremenjen" },
          { tex: h`\vec\xi\otimes\vec\xi`, meaning: "zunanji produkt; (ξ⊗ξ)u=(ξ·u)ξ" },
          { tex: h`|\vec\xi|^2`, meaning: "kvadrat razdalje masnega elementa od C" }
        ],
        origin: [
          { text: "Relativna hitrost masnega elementa je ω×ξ." },
          { text: "Njegov prispevek k vrtilni količini je ξ×(ω×ξ)." },
          { text: "Uporabimo trojni produkt.", tex: h`\vec\xi\times(\vec\omega\times\vec\xi)=|\vec\xi|^2\vec\omega-(\vec\xi\cdot\vec\omega)\vec\xi` },
          { text: "Izraz je linearen v ω, zato lahko pred ω izpostavimo matriko J." }
        ],
        use: "To je težji formalni zapis. Za intuicijo vedno najprej pomisli na Jₑ=∫r⊥²dm."
      },
      {
        title: "Komponente in glavne osi",
        tex: h`\boxed{J_{ij}=\int_B\left(|\vec\xi|^2\delta_{ij}-\xi_i\xi_j\right)dm},\qquad \boxed{J=\operatorname{diag}(J_1,J_2,J_3)}`,
        plain: "J je simetrična matrika. Zato obstajajo tri med seboj pravokotne smeri, v katerih je matrika diagonalna; to so glavne osi.",
        symbols: [
          { tex: h`\delta_{ij}`, meaning: "ena, če i=j, in nič, če i≠j" },
          { tex: h`J_{ii}`, meaning: "vztrajnostni moment okoli i-te koordinatne osi" },
          { tex: h`J_{ij}=-\int_B\xi_i\xi_jdm,\ i\ne j`, meaning: "izven-diagonalna komponenta; v glavnih oseh je nič" },
          { tex: h`J_1,J_2,J_3`, meaning: "glavni vztrajnostni momenti" }
        ],
        origin: [
          { text: "Ker sta I in ξ⊗ξ simetrična, je tudi J simetričen." },
          { text: "Vsako realno simetrično matriko lahko diagonaliziramo z ortonormiranimi lastnimi vektorji." },
          { text: "Lastni vektorji postanejo glavne osi, lastne vrednosti pa J₁, J₂, J₃." },
          { text: "Ravnine simetrije pogosto pokažejo glavne osi brez računanja." }
        ],
        use: "Eulerjeve enačbe so najpreprostejše prav v telesnem sistemu glavnih osi."
      },
      {
        title: "Vrtilna količina L in zakaj ni vedno vzporedna z ω",
        tex: h`\boxed{\vec L_C=J_C\vec\omega},\qquad \vec L=(J_1\omega_1,J_2\omega_2,J_3\omega_3)` ,
        plain: "Vrtilna količina je rotacijski analog gibalne količine. J lahko različno spremeni tri komponente ω, zato se lahko spremeni tudi smer.",
        symbols: [
          { tex: h`\vec L_C`, meaning: "vrtilna količina glede na C, v kg m²/s" },
          { tex: h`\omega_i`, meaning: "komponente kotne hitrosti po glavnih oseh" },
          { tex: h`J_i\omega_i`, meaning: "ustrezne komponente vrtilne količine" }
        ],
        origin: [
          { text: "Za masni element je dL=ξ×dm(v−v_C).", tex: h`\vec L_C=\int_B\vec\xi\times(\vec\omega\times\vec\xi)dm` },
          { text: "Trojni produkt pretvori integral v Jω.", tex: h`\vec L_C=\left[\int_B(|\vec\xi|^2I-\vec\xi\otimes\vec\xi)dm\right]\vec\omega` },
          { text: "Primer: J=diag(1,2,3), ω=(1,1,0), zato L=(1,2,0); smeri nista enaki." }
        ],
        use: "L∥ω natanko tedaj, ko je ω lastni vektor J; to vključuje vrtenje okoli glavne osi in poljubno smer pri sferičnem telesu."
      },
      {
        title: "Kinetična energija togega telesa",
        tex: h`\boxed{T=\frac12M|\vec v_C|^2+\frac12\vec\omega\cdot J_C\vec\omega}`,
        plain: "Energija se razcepi na energijo premikanja masnega središča in energijo vrtenja okoli njega.",
        symbols: [
          { tex: h`M`, meaning: "celotna masa telesa" },
          { tex: h`\tfrac12M|\vec v_C|^2`, meaning: "translacijska kinetična energija" },
          { tex: h`\tfrac12\vec\omega\cdot J_C\vec\omega`, meaning: "rotacijska kinetična energija" }
        ],
        origin: [
          { text: "Začnemo z energijo vseh masnih delov.", tex: h`T=\frac12\int_B|\vec v_C+\vec\omega\times\vec\xi|^2dm` },
          { text: "Razširimo kvadrat na translacijski, mešani in rotacijski del." },
          { text: "Mešani del izgine, ker je C masno središče.", tex: h`\int_B\vec\xi\,dm=0` },
          { text: "Rotacijski del je 1/2 ω·Jω." }
        ],
        use: "Pri kotaljenju moraš upoštevati oba dela; telo hkrati potuje in se vrti."
      },
      {
        title: "Steinerjev izrek — premik pola",
        tex: h`\boxed{J_O=J_C+M\left(|\vec d|^2I-\vec d\otimes\vec d\right)},\qquad \vec d=\vec r_C-\vec r_O`,
        plain: "Če tenzor poznamo okoli masnega središča, ga lahko prestavimo na vzporedno os skozi drugo točko O.",
        symbols: [
          { tex: h`O`, meaning: "novi pol oziroma točka, skozi katero gre premaknjena os" },
          { tex: h`\vec d`, meaning: "vektor od O do C" },
          { tex: h`|\vec d|^2`, meaning: "kvadrat razdalje med poloma" },
          { tex: h`J_O,J_C`, meaning: "tenzorja glede na O in C" }
        ],
        origin: [
          { text: "Za masni element napišemo ročico glede na O.", tex: h`\vec\xi_O=\vec\xi_C+\vec d` },
          { text: "Vstavimo jo v definicijo J in razširimo kvadrat ter zunanji produkt." },
          { text: "Mešani členi izginejo zaradi definicije masnega središča.", tex: h`\int_B\vec\xi_Cdm=0` },
          { text: "Za eno vzporedno os ostane znana skalarna oblika.", tex: h`J_O^{(e)}=J_C^{(e)}+Md_\perp^2` }
        ],
        use: "Uporabi ga, ko poznaš moment okoli osi skozi C, potrebuješ pa moment okoli vzporedne osi."
      },
      {
        title: "Rezultanta sile, navor in izrek o vrtilni količini",
        tex: h`\boxed{M\vec a_C=\vec F^{\rm ext}},\qquad \boxed{\vec N_C=\sum_k(\vec r_k-\vec r_C)\times\vec F_k=\left(\frac{d\vec L_C}{dt}\right)_{\rm prostor}}`,
        plain: "Tu se začne dinamika: sila spreminja translacijo, navor pa vrtilno količino.",
        symbols: [
          { tex: h`\vec F^{\rm ext}`, meaning: "vektorska vsota vseh zunanjih sil" },
          { tex: h`\vec N_C`, meaning: "vektorska vsota navorov okoli C" },
          { tex: h`\vec r_k-\vec r_C`, meaning: "ročica od C do prijemališča k-te sile" },
          { tex: h`\vec F_k`, meaning: "k-ta zunanja sila" }
        ],
        origin: [
          { text: "Newtonov zakon seštejemo po vseh masnih elementih; notranje sile se izničijo." },
          { text: "Za rotacijo vsak zakon vektorsko pomnožimo z ročico in seštejemo." },
          { text: "Daljša in bolj pravokotna ročica pomeni večji navor.", tex: h`|\vec N|=rF\sin\theta` }
        ],
        use: "Vedno uporabljaj isti pol pri J, L in N. Čista enačba velja glede na C ali glede na telesno točko, ki miruje v inercialnem sistemu."
      },
      {
        title: "Transportni izrek za vrteče osi",
        tex: h`\boxed{\left(\frac{d\vec A}{dt}\right)_{\rm prostor}=\left(\frac{d\vec A}{dt}\right)_{\rm telo}+\vec\omega\times\vec A}`,
        plain: "Opazovalec v prostoru vidi spremembo komponent vektorja in še obračanje samih telesnih osi.",
        symbols: [
          { tex: h`\vec A`, meaning: "poljuben vektor, na primer vrtilna količina L" },
          { tex: h`(d/dt)_{\rm prostor}`, meaning: "odvod v mirujočih inercialnih oseh" },
          { tex: h`(d/dt)_{\rm telo}`, meaning: "odvod komponent v oseh, ki se vrtijo s telesom" },
          { tex: h`\vec\omega\times\vec A`, meaning: "sprememba samo zaradi vrtenja baze" }
        ],
        origin: [
          { text: "Vektor zapišemo v telesni bazi.", tex: h`\vec A=A_i\vec e_i` },
          { text: "Odvajamo komponente in bazne vektorje.", tex: h`\dot{\vec A}=\dot A_i\vec e_i+A_i\dot{\vec e}_i` },
          { text: "Bazne osi se vrtijo z ω.", tex: h`\dot{\vec e}_i=\vec\omega\times\vec e_i` },
          { text: "Seštevek drugih členov je ω×A." }
        ],
        use: "Predstavljaj si puščico na vrtiljaku: glede na vrtiljak miruje, opazovalcu na tleh pa se njena smer spreminja."
      },
      {
        title: "Eulerjeva dinamična enačba",
        tex: h`\boxed{J_C\dot{\vec\omega}+\vec\omega\times(J_C\vec\omega)=\vec N_C}`,
        plain: "Prvi člen je rotacijski analog M a. Drugi člen ni nova sila; nastane, ker L zapisujemo v vrtečih telesnih oseh.",
        symbols: [
          { tex: h`J_C\dot{\vec\omega}`, meaning: "sprememba komponent vrtenja v telesnem sistemu" },
          { tex: h`\vec\omega\times(J_C\vec\omega)`, meaning: "obračanje vrtilne količine zaradi vrteče baze" },
          { tex: h`\vec N_C`, meaning: "zunanji navor glede na C, zapisan v isti bazi" }
        ],
        origin: [
          { text: "Začnemo z izrekom o vrtilni količini v prostoru.", tex: h`\vec N_C=(d\vec L_C/dt)_{\rm prostor}` },
          { text: "Uporabimo transportni izrek.", tex: h`\vec N_C=(d\vec L_C/dt)_{\rm telo}+\vec\omega\times\vec L_C` },
          { text: "V telesnih oseh je J konstanten in L=Jω.", tex: h`(d\vec L_C/dt)_{\rm telo}=J_C\dot{\vec\omega}` },
          { text: "Vstavimo oba izraza in dobimo Eulerjevo enačbo." }
        ],
        use: "Če se telo vrti samo okoli glavne osi, sta L in ω vzporedna, žiroskopski člen izgine in ostane Jᵢ ω̇ᵢ=Nᵢ."
      },
      {
        title: "Eulerjeve enačbe v glavnih oseh",
        tex: h`\boxed{\begin{aligned}J_1\dot\omega_1+(J_3-J_2)\omega_2\omega_3&=N_1,\\J_2\dot\omega_2+(J_1-J_3)\omega_3\omega_1&=N_2,\\J_3\dot\omega_3+(J_2-J_1)\omega_1\omega_2&=N_3.\end{aligned}}`,
        plain: "To je isti vektorski zakon, razpisan v treh glavnih telesnih smereh.",
        symbols: [
          { tex: h`\omega_i`, meaning: "komponente ω v telesnih glavnih oseh" },
          { tex: h`N_i`, meaning: "komponente navora v istih oseh" },
          { tex: h`J_i`, meaning: "glavni vztrajnostni momenti" },
          { tex: h`\dot\omega_i`, meaning: "časovni odvodi telesnih komponent" }
        ],
        origin: [
          { text: "V glavnih oseh je Jω=(J₁ω₁,J₂ω₂,J₃ω₃)." },
          { text: "Izračunamo vektorski produkt.", tex: h`\vec\omega\times J\vec\omega=((J_3-J_2)\omega_2\omega_3,(J_1-J_3)\omega_3\omega_1,(J_2-J_1)\omega_1\omega_2)` },
          { text: "Pri čistem vrtenju okoli e₃ sta ω₁=ω₂=0, zato ostane J₃ω̇₃=N₃." }
        ],
        use: "Pred uporabo preveri: ista baza, isti pol in pravilen vrstni red J₁,J₂,J₃."
      },
      {
        title: "Prosta vrtavka: kaj se res ohranja?",
        tex: h`\boxed{\vec N_C=0\Rightarrow\vec L_C=\text{konst. v prostoru}},\qquad \boxed{T_{\rm rot}=\frac12\vec\omega\cdot J\vec\omega=\text{konst.}}`,
        plain: "Brez navora je v prostoru fiksen L, ne nujno ω. Telo se lahko obrača okoli stalnega vektorja vrtilne količine.",
        symbols: [
          { tex: h`\vec N_C=0`, meaning: "ni zunanjega navora glede na masno središče" },
          { tex: h`T_{\rm rot}`, meaning: "rotacijska kinetična energija" },
          { tex: h`\vec L_C`, meaning: "prostorski vektor vrtilne količine" }
        ],
        origin: [
          { text: "Iz izreka o vrtilni količini takoj sledi L̇=0." },
          { text: "Eulerjevo enačbo skalarno pomnožimo z ω." },
          { text: "Žiroskopski člen ne prispeva, ker je pravokoten na ω.", tex: h`\vec\omega\cdot[\vec\omega\times(J\vec\omega)]=0` },
          { text: "Preostali člen je odvod rotacijske energije.", tex: h`\frac d{dt}\left(\frac12\vec\omega\cdot J\vec\omega\right)=0` }
        ],
        use: "Pri simetrični prosti vrtavki simetrijska os riše stožec okoli stalnega L. Splošno triosno telo nima nujno tako preprostega stožca; vrtavka na mizi zaradi teže pa ni prosta."
      },
      {
        title: "Simetrična prosta vrtavka in stabilnost",
        tex: h`\boxed{J_1=J_2=J_\perp:\ \dot\omega_3=0,\quad \Omega_b=\frac{J_3-J_\perp}{J_\perp}\omega_3},\qquad \boxed{J_1<J_2<J_3:\ e_1,e_3\ \text{stabilni},\ e_2\ \text{nestabilna}}`,
        plain: "Pri simetričnem telesu ostane vrtenje okoli simetrijske osi stalno, prečni komponenti pa krožita. Pri nesimetričnem telesu je vrtenje okoli srednje glavne osi nestabilno.",
        symbols: [
          { tex: h`J_\perp`, meaning: "moment okoli katerekoli osi pravokotno na simetrijsko os" },
          { tex: h`J_3`, meaning: "moment okoli simetrijske osi e₃" },
          { tex: h`\Omega_b`, meaning: "podpisana hitrost kroženja komponent ω v telesnem sistemu" },
          { tex: h`e_i`, meaning: "glavne telesne osi" }
        ],
        origin: [
          { text: "Pri J₁=J₂ tretja Eulerjeva enačba da ω̇₃=0." },
          { text: "Prvi dve postaneta krožni sistem.", tex: h`\dot\omega_1=-\Omega_b\omega_2,\qquad \dot\omega_2=\Omega_b\omega_1` },
          { text: "Zato se prečni komponenti obnašata harmonično.", tex: h`\omega_1=A\cos(\Omega_bt+\delta),\qquad\omega_2=A\sin(\Omega_bt+\delta)` },
          { text: "Za J₁<J₂<J₃ linearizacija da omejene motnje okoli skrajnih osi in rastočo motnjo okoli srednje osi." }
        ],
        use: "Za intuicijo zavrti knjigo ali teniški lopar okoli treh glavnih osi; srednja os povzroči značilen obrat."
      },
      {
        title: "Sistem več togih teles",
        tex: h`\boxed{M_\alpha\vec a_{C_\alpha}=\vec F_\alpha},\qquad \boxed{J_\alpha\dot{\vec\omega}_\alpha+\vec\omega_\alpha\times(J_\alpha\vec\omega_\alpha)=\vec N_{C_\alpha}}`,
        plain: "Za vsako telo napišemo lastno translacijsko in rotacijsko enačbo, nato telesa povežemo z reakcijami in veznimi pogoji.",
        symbols: [
          { tex: h`\alpha`, meaning: "oznaka izbranega telesa, ne kot" },
          { tex: h`\vec F_\alpha`, meaning: "vse zunanje sile in reakcije, ki delujejo na telo α" },
          { tex: h`\vec N_{C_\alpha}`, meaning: "njihov skupni navor okoli masnega središča telesa α" },
          { tex: h`g(\vec q,t)=0`, meaning: "primer splošnega geometrijskega veznega pogoja" }
        ],
        origin: [
          { text: "Vsako telo najprej osamimo in narišemo njegov diagram sil." },
          { text: "V stikih vključimo akcijo in reakcijo; za dve telesi velja F₁₂=−F₂₁." },
          { text: "Dodamo kinematične pogoje zgibov, vrvi, zobnikov ali kotaljenja." },
          { text: "Notranje reakcije odpadejo šele pri seštevanju enačb celotnega sistema, ne v enačbi posameznega telesa." }
        ],
        use: "Vedno preštej neznanke in enačbe: dve dinamični enačbi na telo ter toliko dodatnih enačb, kolikor je vezi."
      },
      {
        title: "Kotaljenje brez drsenja",
        tex: h`\boxed{\vec v_A=\vec v_C+\vec\omega\times\vec\xi_A=0},\qquad \boxed{v_C=R\omega,\quad a_C=R\dot\omega}`,
        plain: "Na nepremični podlagi se translacijska in rotacijska hitrost v trenutni stični točki ravno izničita.",
        symbols: [
          { tex: h`A`, meaning: "trenutna materialna točka valja v stiku s podlago" },
          { tex: h`R`, meaning: "polmer valja ali kolesa" },
          { tex: h`\vec\xi_A`, meaning: "vektor od C do stične točke" },
          { tex: h`F_t`, meaning: "statična sila trenja; neznana reakcija, ne avtomatično μN" }
        ],
        origin: [
          { text: "Za točko A uporabimo splošno formulo za hitrost." },
          { text: "Brez drsenja mora biti njena hitrost enaka hitrosti podlage, ki je tukaj nič." },
          { text: "Za krožno telo se v tangencialni smeri velikosti izenačita.", tex: h`v_C=R\omega` },
          { text: "Odvajanje da zvezo pospeškov vzdolž podlage.", tex: h`a_C=R\dot\omega` }
        ],
        use: "Skalarni zvezi veljata za ravno mirujočo podlago ob dosledni izbiri predznakov. Stična materialna točka ima v tistem trenutku hitrost nič, njen pospešek pa ni nujno nič."
      },
      {
        title: "Primer: homogen valj na klancu",
        tex: h`\boxed{Ma=Mg\sin\beta-F_t},\qquad \boxed{J_C\dot\omega=F_tR},\qquad \boxed{a=R\dot\omega\Rightarrow a=\frac{g\sin\beta}{1+J_C/(MR^2)}}`,
        plain: "Trenje pri pasivnem valju kaže navzgor po klancu in ustvari navor, zaradi katerega se valj zavrti.",
        symbols: [
          { tex: h`\beta`, meaning: "naklon klanca" },
          { tex: h`a`, meaning: "pospešek masnega središča navzdol po klancu" },
          { tex: h`F_t`, meaning: "statično trenje navzgor po klancu v tem primeru" },
          { tex: h`J_C`, meaning: "vztrajnostni moment okoli osi valja skozi C" }
        ],
        origin: [
          { text: "Translacija vzdolž klanca da Ma=Mg sinβ−Fₜ." },
          { text: "Le trenje ima navor okoli C, zato Jω̇=FₜR." },
          { text: "Iz vezi a=Rω̇ dobimo Fₜ=J a/R²." },
          { text: "Vstavimo v translacijo.", tex: h`\left(M+\frac{J_C}{R^2}\right)a=Mg\sin\beta` },
          { text: "Za poln valj velja J_C=MR²/2.", tex: h`a=\frac23g\sin\beta` }
        ],
        use: "Po izračunu preveri |Fₜ|≤μₛN. Če pogoj ni izpolnjen, valj drsi in zveza a=Rω̇ ne velja."
      }
    ],
    checkpoints: [
      "Znaš s primerom knjige brez formule ločiti translacijo od rotacije?",
      "Znaš povedati smer in velikost vektorskega produkta ω×ξ?",
      "Znaš razložiti, zakaj točka na osi nima rotacijske hitrosti?",
      "Znaš po kosih razložiti vsak simbol v vₚ=v_C+ω×ξₚ?",
      "Znaš iz formule za hitrost brez preskoka izpeljati formulo za pospešek?",
      "Znaš razložiti razliko med telesnim vektorjem aₚ in trenutnim vektorjem ξₚ?",
      "Znaš s primerom dveh mas pojasniti, zakaj masa daleč od osi prispeva z razdaljo na kvadrat?",
      "Znaš najprej razložiti skalarni Jₑ in šele nato tenzor J?",
      "Znaš s številčnim primerom pokazati, zakaj L in ω nista nujno vzporedna?",
      "Znaš pojasniti, zakaj Eulerjev žiroskopski člen ni dodatna fizična sila?",
      "Znaš povedati, kaj je pri prosti vrtavki konstantno v prostoru in kaj se lahko spreminja glede na telo?",
      "Znaš z besedami definirati precesijo in ločiti e₃, ω ter L?",
      "Znaš pojasniti, zakaj sta vrtenji okoli najmanjše in največje glavne osi stabilni, srednja os pa ne?",
      "Znaš za kotaljenje pojasniti hitrosti spodnje, srednje in zgornje točke kolesa?",
      "Znaš iz treh enačb izpeljati pospešek homogenega valja po klancu in povedati, zakaj Fₜ ni avtomatično μN?"
    ]
  };
})();
