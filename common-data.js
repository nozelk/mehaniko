(() => {
  "use strict";

  const h = String.raw;

  window.MECHANICS_COMMON_FOUNDATIONS = {
    title: "Skupne osnove mehanike — še brez posebne teme",
    intro: "Ta del se ne začne s potencialom, centralno silo ali togim telesom. Najprej zgradi jezik, ki ga uporabljajo vsa tri vprašanja; posebnosti pridejo šele pozneje.",
    coreQuestion: {
      question: "Kaj mehanika sploh poskuša ugotoviti?",
      answer: h`Izberemo model telesa, opišemo njegovo trenutno stanje in sile, ki nanj delujejo. Newtonov drugi zakon najprej pove spremembo gibalne količine; pri konstantni masi s tem določi pospešek. Iz pospeška in začetnih pogojev nato določimo hitrost ter lego v prihodnosti.`,
      tex: h`\boxed{\text{model}+\text{sile}+\text{začetno stanje}\ \Longrightarrow\ \text{gibanje}}`,
      warning: "Rezultanta sil ne povzroča samega gibanja, ampak spreminja gibalno količino; pri konstantni masi zato spreminja vektor hitrosti. Telo se lahko giblje tudi takrat, ko je rezultanta sil nič."
    },
    chain: [
      "Izberemo telo in koordinatni sistem.",
      "Z lego in hitrostjo podamo začetno stanje.",
      "Seštejemo zunanje sile.",
      "Newtonov zakon določi spremembo gibalne količine; pri konstantni masi pospešek.",
      "Z odvajanjem in integriranjem povežemo a, v in r.",
      "Dobimo časovni razvoj gibanja."
    ],
    definitions: [
      {
        title: "1. Mehanika",
        definition: "Mehanika je del fizike, ki opisuje gibanje teles in razloge za spreminjanje gibanja. Kinematika gibanje samo opiše; dinamika ga poveže s silami.",
        intuition: "Kinematika pove, kako se avto giblje; dinamika pojasni, zakaj pospešuje ali zavira.",
        tex: h`\text{mehanika}=\text{kinematika}+\text{dinamika}`,
        say: "»Najprej opišem gibanje, nato z Newtonovimi zakoni pojasnim njegov vzrok.«"
      },
      {
        title: "2. Model telesa",
        definition: "Materialna točka je idealizirano telo, pri katerem velikost in vrtenje zanemarimo. Sistem materialnih točk je več takih delcev. Togo telo je razsežen sistem, v katerem vse medsebojne razdalje ostanejo konstantne.",
        intuition: "Planet lahko pri orbiti obravnavamo kot točko; knjige pri vrtenju ne moremo, ker je pomembna razporeditev mase.",
        tex: h`|\vec r_i-\vec r_j|=\mathrm{konst.}\quad\text{(togo telo)}`,
        say: "»Najprej povem, kateri idealizirani model telesa uporabljam.«"
      },
      {
        title: "3. Koordinatni sistem in čas",
        definition: "Koordinatni sistem določi izhodišče in smeri, glede na katere merimo lego. Čas označimo s t. V inercialnem koordinatnem sistemu prosto telo miruje ali se giblje enakomerno premočrtno.",
        intuition: "Preden podaš naslov, moraš določiti zemljevid in njegovo izhodišče.",
        tex: h`t\in\mathbb R,\qquad (O;\vec e_1,\vec e_2,\vec e_3)`,
        say: "»Newtonove zakone zapisujem v inercialnem koordinatnem sistemu.«"
      },
      {
        title: "4. Lega, krajevni vektor in tir",
        definition: h`Lego materialne točke ob času \(t\) podaja krajevni vektor \(\vec r(t)\). Njegova dolžina \(r=|\vec r|\) je oddaljenost točke od izbranega izhodišča. Tir je množica točk, skozi katere gre telo; \(\vec r(t)\) pove še, kdaj je v posamezni točki.`,
        intuition: "Črta na zemljevidu je tir, premikajoča pika z uro pa je časovni zakon gibanja.",
        tex: h`\vec r(t)=x(t)\vec e_x+y(t)\vec e_y+z(t)\vec e_z,\qquad r=|\vec r|`,
        say: h`»Vektor \(\vec r\) ima smer in velikost, skalar \(r\) pa pomeni oddaljenost od izhodišča.«`
      },
      {
        title: "5. Vektor hitrosti in brzina",
        definition: h`Vektor hitrosti je časovni odvod lege in je tangenten na tir. Pove, kako hitro in v kateri smeri se lega spreminja. Njegova velikost \(v=|\vec v|\) se imenuje brzina.`,
        intuition: "Merilnik hitrosti pokaže velikost, puščica na zemljevidu pa še smer.",
        tex: h`\vec v=\dot{\vec r}=\frac{d\vec r}{dt},\qquad v=|\vec v|`,
        say: "»Vektor hitrosti določa tudi smer, brzina pa je samo njegova velikost.«"
      },
      {
        title: "6. Pospešek",
        definition: "Pospešek je časovni odvod vektorja hitrosti. Neničeln je, kadar se spreminja velikost hitrosti, njena smer ali oboje. Zato ima telo pri kroženju pospešek tudi pri stalni brzini.",
        intuition: "Avto pospešuje tudi v ovinku s stalnim prikazom na merilniku, ker obrača smer hitrosti.",
        tex: h`\vec a=\dot{\vec v}=\ddot{\vec r}=\frac{d^2\vec r}{dt^2}`,
        say: "»Pospešek meri spremembo celotnega vektorja hitrosti, ne le njegove velikosti.«"
      },
      {
        title: "7. Skalar in vektor",
        definition: "Skalar ima samo številsko vrednost, vektor pa velikost in smer. Masa, čas in energija so skalarji; lega, hitrost, pospešek, sila in vrtilna količina so vektorji.",
        intuition: "Temperatura je število; veter potrebuje še smer.",
        tex: h`m,t,E\in\mathbb R,\qquad \vec r,\vec v,\vec a,\vec F,\vec L\in\mathbb R^3`,
        say: "»Pri vektorju moram poleg velikosti vedno upoštevati tudi smer.«"
      },
      {
        title: "8. Skalarno in vektorsko polje",
        definition: "Polje vsaki točki prostora priredi fizikalno količino. Skalarno polje priredi eno število, vektorsko polje pa vektor. Temperatura je primer skalarnega polja, veter ali gravitacijska sila pa vektorskega.",
        intuition: "Na vsakem mestu zemljevida lahko zapišeš eno temperaturo ali narišeš puščico vetra.",
        tex: h`f:\mathbb R^3\to\mathbb R,\qquad \vec G:\mathbb R^3\to\mathbb R^3`,
        say: "»Skalarno polje nima smeri; vektorsko polje ima v vsaki točki tudi smer.«"
      },
      {
        title: "9. Masa in gibalna količina",
        definition: h`Masa \(m\) meri vztrajnost telesa, torej njegovo upiranje spremembi hitrosti. Gibalna količina je produkt mase in hitrosti. Pri konstantni masi je njen odvod \(m\vec a\).`,
        intuition: "Enak potisk spremeni hitrost lahke žoge bolj kakor hitrost težkega vozička.",
        tex: h`\vec p=m\vec v,\qquad \dot{\vec p}=m\vec a\quad(m=\mathrm{konst.})`,
        say: "»Večja masa pri isti rezultanti pomeni manjši pospešek.«"
      },
      {
        title: "10. Sila in rezultanta sil",
        definition: "Sila je vektorska mera medsebojnega delovanja teles. Na telo lahko deluje več sil; v Newtonov zakon vstopi njihova vektorska vsota, imenovana rezultanta zunanjih sil.",
        intuition: "Dva enaka potiska v nasprotnih smereh se izničita, čeprav obe sili obstajata.",
        tex: h`\vec F^{\rm ext}=\sum_i\vec F_i`,
        say: "»Najprej narišem vse zunanje sile in jih vektorsko seštejem.«"
      },
      {
        title: "11. Newtonovi zakoni",
        definition: "Prvi zakon opredeli inercialni sistem. Drugi pravi, da rezultanta zunanjih sil spreminja gibalno količino. Tretji pravi, da sili med dvema telesoma nastopata v enako velikem in nasprotno usmerjenem paru, vendar delujeta na različni telesi.",
        intuition: "Brez rezultante se hitrost ne spreminja; z rezultanto se spreminja po smeri sile.",
        tex: h`\boxed{\vec F^{\rm ext}=\frac{d\vec p}{dt}}\qquad\stackrel{m=\rm konst.}{\Longrightarrow}\qquad\boxed{\vec F^{\rm ext}=m\vec a}`,
        say: "»Sila določa pospešek, začetni pogoji pa nato določijo konkretno gibanje.«"
      },
      {
        title: "12. Delo in moč",
        definition: h`Delo meri prenos energije zaradi sile med premikom. Prispeva samo komponenta sile v smeri premika. Moč je hitrost opravljanja dela.`,
        intuition: "Če težko torbo držiš pri miru, se utrudiš, vendar mehansko delo sile na torbi ni opravljeno, ker ni premika.",
        tex: h`A_{1\to2}=\int_1^2\vec F\cdot d\vec r,\qquad P=\frac{dA}{dt}=\vec F\cdot\vec v`,
        say: "»Skalarni produkt izbere del sile, ki deluje vzdolž premika.«"
      },
      {
        title: "13. Kinetična energija in izrek o delu",
        definition: h`Kinetična energija \(T\) je energija zaradi gibanja in je odvisna od izbranega opazovalnega sistema. Delo rezultante vseh sil je enako spremembi kinetične energije. Ta izrek sledi iz drugega Newtonovega zakona.`,
        intuition: "Pozitivno delo rezultante poveča kinetično energijo, negativno delo rezultante pa jo zmanjša.",
        tex: h`T=\frac12mv^2,\qquad A^{\rm rez}_{1\to2}=T_2-T_1=\Delta T`,
        say: "»Kinetična energija je skalar, je nenegativna in je odvisna od opazovalnega sistema.«"
      },
      {
        title: "14. Konservativna sila",
        definition: "Sila je konservativna oziroma potencialna, če je njeno delo med dvema legama neodvisno od poti. Tedaj je delo po sklenjeni poti nič in lahko uvedemo potencialno energijo.",
        intuition: "Pri idealni gravitaciji je sprememba energije odvisna od začetne in končne višine, ne od vijugaste poti.",
        tex: h`\oint\vec F\cdot d\vec r=0,\qquad A_{1\to2}\ \text{je neodvisno od poti}`,
        say: "»Potencialno energijo lahko uvedem zato, ker je sila konservativna.«"
      },
      {
        title: "15. Potencialna energija U — zakaj se tako imenuje?",
        definition: h`Potencialna energija \(U\) je energija medsebojnega delovanja, ki je odvisna od konfiguracije oziroma lege sistema. Imenuje se »potencialna«, ker konfiguracija daje sistemu možnost, da opravi delo: padec \(U\) je delo konservativne sile. \(U\) ni nujno shranjena v enem telesu, ampak pripada sistemu. Na tej strani \(U\) vedno pomeni potencialno energijo v joulih; gravitacijski potencial na enoto mase je druga količina, \(\Phi=U/m\).`,
        intuition: "Energija dvignjene žoge pripada sistemu Zemlja–žoga; pri padcu se pretvarja v kinetično energijo.",
        tex: h`\begin{gathered}U_2-U_1=-A_{1\to2}^{\rm konservativna},\qquad [U]=\mathrm J,\\[3pt]\Phi=\frac Um,\qquad [\Phi]=\mathrm{J/kg}\end{gathered}`,
        say: "»Fizikalno so pomembne razlike potencialne energije; njeno ničlo lahko izberem poljubno.«"
      },
      {
        title: "16. Gradient in zveza med U ter silo",
        definition: h`Gradient iz skalarnega polja sestavi vektorsko polje in kaže v smeri najhitrejšega naraščanja. Komponentni zapis spodaj velja v kartezičnih koordinatah. Ker velja \(dU=\nabla U\cdot d\vec r\), delo konservativne sile pa je \(dA=\vec F\cdot d\vec r=-dU\), sledi \(\vec F=-\nabla U\).`,
        intuition: "Gradient kaže v najbolj strm klanec navzgor, minus gradient pa navzdol.",
        tex: h`\begin{gathered}\nabla U=\left(\frac{\partial U}{\partial x},\frac{\partial U}{\partial y},\frac{\partial U}{\partial z}\right),\qquad [\nabla U]=\mathrm{J/m}=\mathrm N,\\ dA=\vec F\cdot d\vec r=-dU=-\nabla U\cdot d\vec r\quad\Longrightarrow\quad\boxed{\vec F=-\nabla U}\end{gathered}`,
        say: "»Minus pomeni, da sila kaže v smeri najhitrejšega padanja potencialne energije.«"
      },
      {
        title: "17. Mehanska energija E",
        definition: h`Simbol \(E\) označuje celotno mehansko energijo: vsoto kinetične energije \(T\) in potencialne energije \(U\). \(E\) ni tretja nova vrsta energije, ampak ime za njuno vsoto v izbranem stanju.`,
        intuition: "Isti skupni znesek je razdeljen med del za gibanje in del, povezan s konfiguracijo.",
        tex: h`\boxed{E=T+U},\qquad [E]=\mathrm J`,
        say: "»E je celotna mehanska energija sistema; njeno vrednost določijo začetni pogoji.«"
      },
      {
        title: "18. Kdaj je E konstanta?",
        definition: h`Mehanska energija se ohranja, kadar so upoštevane sile konservativne in potencialna energija nima eksplicitne časovne odvisnosti. Splošneje njeno hitrost spreminjanja določata moč nekonservativnih sil \(P_{\rm nk}\) in eksplicitna časovna odvisnost potenciala. Če slednje ni, velja \(\Delta E=A_{\rm nk}\).`,
        intuition: "Brez izgub se energija le pretaka med T in U; zavore jo pretvorijo v notranjo energijo in toploto.",
        tex: h`\begin{gathered}\frac{dE}{dt}=P_{\rm nk}+\frac{\partial U}{\partial t},\\[3pt]P_{\rm nk}=0,\ \frac{\partial U}{\partial t}=0\quad\Longrightarrow\quad\boxed{\frac{dE}{dt}=0}\end{gathered}`,
        say: "»Energije ne razglasim za konstantno brez pogojev; najprej povem, katere sile delujejo.«"
      },
      {
        title: "19. Začetni pogoji",
        definition: "Diferencialna enačba poda družino možnih gibanj. Konkretno gibanje izbereta začetna lega in začetna hitrost. Energija je zato določena iz začetnega stanja, kadar se ohranja.",
        intuition: "Isti zakon sile da različne poti, če telo spustiš z drugega mesta ali z drugo začetno hitrostjo.",
        tex: h`\begin{gathered}\vec r(t_i)=\vec r_i,\qquad \vec v(t_i)=\vec v_i,\\[3pt]E=\frac12mv_i^2+U(\vec r_i)\end{gathered}`,
        say: "»Zakon gibanja in začetni pogoji skupaj določijo rešitev.«"
      }
    ],
    energy: {
      title: "E, T in U v enem stavku",
      tex: h`\boxed{E=T+U}`,
      explanation: h`Če se sistem giblje hitreje, je večji \(T\). Če spremenimo njegovo lego ali konfiguracijo proti delovanju konservativnih sil, se spremeni \(U\). Pri konservativnem, časovno neodvisnem sistemu se \(T\) in \(U\) lahko spreminjata, njuna vsota \(E\) pa ostane ista.`,
      symbols: [
        { tex: h`E`, text: "celotna mehanska energija sistema [J]" },
        { tex: h`T`, text: "kinetična energija zaradi gibanja [J]" },
        { tex: h`U`, text: "potencialna energija konfiguracije [J]" }
      ],
      caveats: [
        "E ni vedno konstanta; konstanta je le ob navedenih pogojih.",
        "Potencialna energija pripada konfiguraciji sistema, ne nujno enemu telesu.",
        "Dodatek konstante k U spremeni tudi številčno vrednost E, ne pa sil ali gibanja.",
        "Pri trenju se mehanska energija T+U pretvarja v notranjo energijo; energija se ohranja, če obravnavamo ustrezno razširjen zaprt sistem."
      ],
      examples: [
        { name: "Vzmet · x merimo od ravnovesja", tex: h`U(x)=\frac12kx^2,\qquad E=\frac12m\dot x^2+\frac12kx^2` },
        { name: "Težnost · konstanten g in izbrana ničla", tex: h`U(h)=mgh,\qquad E=\frac12mv^2+mgh` },
        { name: "Gravitacija · ničla U(∞)=0", tex: h`U(r)=-\frac{GMm}{r},\qquad E=\frac12mv^2-\frac{GMm}{r}` }
      ]
    },
    reminders: {
      "premocrtno-potenciali": [
        { tex: h`v=\dot x,\ a=\ddot x`, text: "Najprej loči lego, hitrost in pospešek." },
        { tex: h`m\ddot x=F(x)`, text: "Rezultanta sile določi pospešek, ne same hitrosti." },
        { tex: h`F=-dU/dx`, text: "U uvedemo šele za konservativno silo." },
        { tex: h`E=T+U`, text: "E je vsota kinetične in potencialne energije." }
      ],
      "centralna-sila": [
        { tex: h`m\vec a=\vec F`, text: "Radialna sila ukrivlja vektor hitrosti." },
        { tex: h`\vec F=-\nabla U`, text: "Centralna potencialna energija je skalarno polje U(r)." },
        { tex: h`\vec N=\vec r\times\vec F`, text: "Vektorski produkt meri vrtilni učinek sile." },
        { tex: h`E=T+U`, text: "E ostane konstanta pri časovno neodvisni konservativni sili." }
      ],
      "togo-telo": [
        { tex: h`\vec F^{\rm ext}=M\vec a_C`, text: "Rezultanta sil spreminja gibanje masnega središča." },
        { tex: h`\vec N_C=\left(\frac{d\vec L_C}{dt}\right)_{\!I}`, text: "Rezultanta navorov spreminja vrtilno količino; odvod je tu v inercialnem sistemu." },
        { tex: h`\vec N=\vec r\times\vec F,\quad \vec v_P=\vec v_C+\vec\omega\times\vec\rho_P`, text: "Vektorski produkt poda smer po pravilu desne roke." },
        { tex: h`E=T+U`, text: "Če so sile konservativne, lahko tudi pri togem telesu uporabimo energijo." }
      ]
    }
  };
})();
