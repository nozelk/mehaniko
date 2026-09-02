(() => {
  "use strict";

  const h = String.raw;

  if (!window.MECHANICS_FOUNDATIONS || typeof window.MECHANICS_FOUNDATIONS !== "object") {
    window.MECHANICS_FOUNDATIONS = {};
  }

  window.MECHANICS_FOUNDATIONS["togo-telo"] = {
    title: "Togo telo od prve definicije do Eulerjevih enačb",
    intro: "Tu ne začnemo z vztrajnostnim tenzorjem. Najprej zgradimo pomen masnega središča, orientacije, kotne hitrosti, navora in vrtilne količine; šele nato vsaka formula dobi jasen razlog.",
    coreQuestion: {
      question: "Zakaj se knjiga ob potisku premakne, včasih pa se tudi zavrti?",
      answer: h`Rezultanta zunanjih sil spreminja hitrost masnega središča, rezultanta zunanjih navorov pa spreminja vrtilno količino. Če sila deluje skozi masno središče, je njen navor okoli masnega središča nič. Če ista sila deluje mimo masnega središča, ima ročico in telo praviloma hkrati translacijsko pospeši ter zavrti.`,
      tex: h`\boxed{\begin{aligned}M\vec a_C&=\vec F^{\rm ext},\\[5pt]\left(\frac{d\vec L_C}{dt}\right)_{\rm prostor}&=\vec N_C^{\rm ext}\end{aligned}}`,
      warning: h`Orientacija in kotna hitrost nista ista količina. Orientacijo telesa podaja rotacijska matrika \(Q(t)\), vektor \(\vec\omega\) pa pove, kako hitro in okoli katere trenutne osi se orientacija spreminja.`
    },
    chain: [
      "Sistem materialnih točk ima maso in masno središče.",
      "Togost ohrani vse medsebojne razdalje.",
      "Lego telesa zato določata translacija in orientacija.",
      "Odvod orientacije določi kotno hitrost.",
      "Kotna hitrost določi hitrosti vseh točk telesa.",
      "Razpored mase določi vztrajnostni tenzor.",
      "Sila spreminja gibanje masnega središča, navor pa vrtilno količino.",
      "Transportni izrek pretvori izrek o vrtilni količini v Eulerjeve enačbe."
    ],
    definitions: [
      {
        title: "Materialna točka in sistem materialnih točk",
        definition: h`Materialna točka je idealizirano telo z maso, katerega velikost zanemarimo. Sistem materialnih točk je množica točk z masami \(m_i\), legami \(\vec r_i\) in hitrostmi \(\vec v_i\). Sile delimo na zunanje sile iz okolice in notranje sile med delci sistema.`,
        intuition: "Togo telo bomo najprej obravnavali kot zelo veliko majhnih mas, ki so med seboj trdno povezane.",
        tex: h`M=\sum_{i=1}^{N}m_i,\qquad \vec p_i=m_i\vec v_i,\qquad \vec P=\sum_i\vec p_i`,
        say: h`»Togo telo najprej razumem kot poseben sistem materialnih točk, pri katerem so notranje razdalje konstantne.«`
      },
      {
        title: "Masno središče",
        definition: h`Masno središče \(C\) je z maso uteženo povprečje leg vseh delcev. Težji delci bolj vplivajo na njegovo lego. Če uvedemo relativni vektor \(\vec\xi_i=\vec r_i-\vec r_C\), je prvi masni moment okoli \(C\) enak nič.`,
        intuition: "To je ravnotežna točka telesa; pri homogenem ravnilu je na sredini.",
        tex: h`\boxed{\vec r_C=\frac1M\sum_i m_i\vec r_i},\qquad \boxed{\sum_i m_i\vec\xi_i=0}`,
        say: h`»Masno središče izberem zato, ker se translacijsko in rotacijsko gibanje okoli njega najčisteje ločita.«`
      },
      {
        title: "Kaj pomeni togo telo?",
        definition: h`Togo telo je sistem materialnih točk, pri katerem je razdalja med poljubnima materialnima točkama \(P\) in \(S\) ves čas konstantna. Telo se sme premakniti in zavrteti, ne sme pa se deformirati. Prosto togo telo v prostoru ima tri translacijske in tri rotacijske prostostne stopnje.`,
        intuition: "Idealna knjiga lahko leti in se obrača, njeni robovi pa ostanejo enako dolgi.",
        tex: h`\boxed{|\vec r_P(t)-\vec r_S(t)|=\mathrm{konst.}},\qquad 3+3=6\ \text{prostostnih stopenj}`,
        say: h`»Togost ne pomeni mirovanja; pomeni le ohranjanje notranje geometrije telesa.«`
      },
      {
        title: "Prostorski in telesni koordinatni sistem",
        definition: h`Prostorska ortonormirana baza \(\vec E_1,\vec E_2,\vec E_3\) miruje v inercialnem prostoru. Telesna baza \(\vec e_1(t),\vec e_2(t),\vec e_3(t)\) je pritrjena na telo in se vrti z njim. Koordinate materialne točke v telesni bazi so konstantne, njene prostorske komponente pa se spreminjajo.`,
        intuition: "Robovi sobe so prostorske osi; tri puščice, narisane na knjigi, so telesne osi.",
        tex: h`\vec e_i\cdot\vec e_j=\delta_{ij},\qquad \vec\xi_P=Q(t)\vec a_P,\qquad \dot{\vec a}_P=0`,
        say: h`»\(\vec a_P\) so stalne telesne koordinate točke, \(\vec\xi_P\) pa njen trenutni prostorski vektor od \(C\).«`
      },
      {
        title: "Orientacija in rotacijska matrika",
        definition: h`Rotacijska matrika \(Q(t)\) preslika komponente iz telesne baze v prostorsko bazo. Njeni stolpci so telesni bazni vektorji, zapisani v prostorskih koordinatah. Pogoj \(Q^TQ=I\) zagotovi ohranjanje dolžin in kotov, \(\det Q=1\) pa izključi zrcaljenje.`,
        intuition: "Q je trenutni odgovor na vprašanje: kam kažejo osi, narisane na telesu?",
        tex: h`\boxed{Q^TQ=QQ^T=I},\qquad \boxed{\det Q=1},\qquad Q\in SO(3)`,
        say: h`»Orientacijo podaja \(Q\), ne \(\vec\omega\); kotna hitrost bo nastala šele z odvajanjem \(Q\).«`
      },
      {
        title: "Vektorski produkt",
        definition: h`Vektorski produkt \(\vec a\times\vec b\) je vektor, pravokoten na \(\vec a\) in \(\vec b\). Njegova velikost je \(|\vec a|\,|\vec b|\sin\theta\), smer pa sledi pravilu desne roke. Zato hkrati pravilno opiše tangencialno smer vrtenja in pravokotno ročico sile.`,
        intuition: "Če sta vektorja vzporedna, ni ne tangencialne hitrosti ne navora: sinus kota je nič.",
        tex: h`|\vec a\times\vec b|=|\vec a|\,|\vec b|\sin\theta,\qquad \vec a\times\vec b=-\vec b\times\vec a`,
        say: h`»Znak \(\times\) pomeni vektorski produkt; vrstni red vektorjev je pomemben.«`
      },
      {
        title: "Kotna hitrost",
        definition: h`Kotna hitrost \(\vec\omega\) je edinstven vektor, ki določa trenutni rotacijski del spremembe vsakega na telo pritrjenega vektorja. Kaže vzdolž trenutne osi vrtenja, njegova velikost pa je hitrost vrtenja v radianih na sekundo.`,
        intuition: "Pri kolesu kaže ω vzdolž osi pesta, ne v smeri gibanja točke na obodu.",
        tex: h`\boxed{\dot{\vec e}_i=\vec\omega\times\vec e_i},\qquad \boxed{\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P}`,
        say: h`»Kotna hitrost je en sam vektor, ki v danem trenutku opiše rotacijski del hitrosti vseh točk.«`
      },
      {
        title: "Transportni izrek",
        definition: h`Odvod vektorja v prostoru ima dva prispevka: spreminjanje njegovih komponent v telesni bazi in vrtenje same baze. Transportni izrek pove natančno zvezo med prostorskim in telesnim odvodom.`,
        intuition: "Puščica na vrtiljaku se lahko spreminja glede na vrtiljak, vrtiljak pa jo obenem obrača glede na tla.",
        tex: h`\boxed{\left(\frac{d\vec A}{dt}\right)_{\rm prostor}=\left(\frac{d\vec A}{dt}\right)_{\rm telo}+\vec\omega\times\vec A}`,
        say: h`»Prostorski odvod je telesni odvod plus sprememba zaradi vrtenja baze.«`
      },
      {
        title: "Hitrost in pospešek v vrtečem sistemu",
        definition: h`Če se točka glede na vrteči sistem tudi sama premika, njena hitrost vsebuje translacijski, rotacijski in relativni del. Pospešek ima poleg tega tangencialni, centripetalni in Coriolisov člen. Pri materialni točki togega telesa sta relativna hitrost in relativni pospešek nič.`,
        intuition: "Človek na vrtiljaku ima Coriolisov člen samo, če po vrtiljaku hodi; narisana pika na vrtiljaku ga nima.",
        tex: h`\vec v=\vec v_C+\vec\omega\times\vec\xi+\vec v_{\rm rel},\quad \vec a=\vec a_C+\dot{\vec\omega}\times\vec\xi+\vec\omega\times(\vec\omega\times\vec\xi)+2\vec\omega\times\vec v_{\rm rel}+\vec a_{\rm rel}`,
        say: h`»Za točko, pritrjeno na togo telo, postavim \(\vec v_{\rm rel}=\vec a_{\rm rel}=0\).«`
      },
      {
        title: "Rezultanta sile in gibalna količina",
        definition: h`Gibalna količina delca je \(\vec p=m\vec v\), skupna gibalna količina sistema pa vsota vseh \(\vec p_i\). Rezultanta zunanjih sil je vektorska vsota zunanjih sil in spreminja skupno gibalno količino oziroma hitrost masnega središča.`,
        intuition: "Notranje sile lahko prerazporedijo gibanje med deli sistema, ne morejo pa same pospešiti celotnega masnega središča.",
        tex: h`\vec P=\sum_i m_i\vec v_i=M\vec v_C,\qquad \boxed{\dot{\vec P}=\vec F^{\rm ext}=M\vec a_C}`,
        say: h`»Translacijo celotnega telesa določa samo rezultanta zunanjih sil.«`
      },
      {
        title: "Navor",
        definition: h`Navor sile okoli pola \(O\) je vektorski produkt ročice in sile. Meri sposobnost sile, da spremeni vrtenje okoli izbranega pola. Pomembna je pravokotna razdalja nosilke sile od pola, ne samo velikost sile.`,
        intuition: "Vrata najlažje zavrtiš pri kljuki in pravokotno na vrata, ne tik ob tečaju.",
        tex: h`\boxed{\vec N_O=(\vec r-\vec r_O)\times\vec F},\qquad |\vec N_O|=r_\perp F`,
        say: h`»Navor vedno navedem glede na izbrani pol; ob spremembi pola se praviloma spremeni.«`
      },
      {
        title: "Vrtilna količina",
        definition: h`Vrtilna količina delca okoli pola \(O\) je vektorski produkt ročice in gibalne količine. Za sistem seštejemo prispevke vseh delcev. Rezultanta zunanjih navorov spreminja vrtilno količino.`,
        intuition: "Ista masa z isto hitrostjo ima več vrtilne količine, če se giblje dlje od izbranega pola.",
        tex: h`\boxed{\vec L_O=\sum_i(\vec r_i-\vec r_O)\times m_i\vec v_i},\qquad \boxed{\dot{\vec L}_O=\vec N_O^{\rm ext}}`,
        say: h`»Pri navoru in vrtilni količini moram ves čas uporabljati isti pol.«`
      },
      {
        title: "Zvezno telo, gostota in masni element",
        definition: h`Pri zveznem telesu diskretno vsoto nadomesti integral. Majhen masni element je \(dm=\rho_m(\vec r)\,dV\), kjer je \(\rho_m\) masna gostota. Oznaka \(\rho_m\) je tu gostota in je ne zamenjujemo s koordinatami materialne točke.`,
        intuition: "Telo razrežemo na zelo majhne koščke mase in njihove prispevke seštejemo z integralom.",
        tex: h`M=\int_Bdm=\int_B\rho_m\,dV,\qquad \vec r_C=\frac1M\int_B\vec r\,dm,\qquad \int_B\vec\xi\,dm=0`,
        say: h`»Pri prehodu na zvezno telo vsoto nadomestim z integralom po masi.«`
      },
      {
        title: "Vztrajnostni moment okoli ene osi",
        definition: h`Vztrajnostni moment okoli osi z enotskim vektorjem \(\vec e\) je integral mase krat kvadrat pravokotne razdalje od osi. Je rotacijski analog mase samo za to izbrano os.`,
        intuition: "Masa dvakrat dlje od osi prispeva štirikrat več.",
        tex: h`\boxed{J_{\vec e}=\int_B r_\perp^2\,dm=\int_B|\vec e\times\vec\xi|^2\,dm}`,
        say: h`»Najprej razložim skalarni moment za eno os; tenzor potrebujem šele za vse smeri hkrati.«`
      },
      {
        title: "Vztrajnostni tenzor",
        definition: h`Vztrajnostni tenzor \(J_C\) je linearna preslikava, ki kotni hitrosti priredi vrtilno količino okoli masnega središča. Njegova matrika je odvisna od izbrane baze, fizikalna preslikava pa ne. Tenzorski oziroma zunanji produkt je določen z \((\vec\xi\otimes\vec\xi)\vec a=\vec\xi(\vec\xi\cdot\vec a)\).`,
        intuition: "Ena sama masa ne pove, kako težko je telo zavrteti v različnih smereh; J vsebuje tudi razpored mase.",
        tex: h`\boxed{J_C=\int_B\left(|\vec\xi|^2I-\vec\xi\otimes\vec\xi\right)dm},\qquad \boxed{\vec L_C=J_C\vec\omega}`,
        say: h`»\(J\) je simetričen tenzor, ki kodira razpored mase glede na izbrani pol.«`
      },
      {
        title: "Glavne vztrajnostne osi",
        definition: h`Glavna vztrajnostna os je lastna smer tenzorja \(J\): če \(J\vec e_i=J_i\vec e_i\), vrtenje okoli te osi da \(\vec L\parallel\vec\omega\). Ker je \(J\) realen in simetričen, lahko izberemo tri med seboj pravokotne glavne osi, v katerih je njegova matrika diagonalna.`,
        intuition: "To so posebne smeri telesa, v katerih J ne obrne smeri vektorja, ampak ga samo pomnoži.",
        tex: h`J\vec e_i=J_i\vec e_i,\qquad \boxed{J=\operatorname{diag}(J_1,J_2,J_3)},\qquad \vec L=(J_1\omega_1,J_2\omega_2,J_3\omega_3)`,
        say: h`»Na splošno \(\vec L\) in \(\vec\omega\) nista vzporedna; vzporedna sta, kadar je \(\vec\omega\) lastni vektor tenzorja \(J\).«`
      },
      {
        title: "Sistem sil in sprememba pola",
        definition: h`Sistem zunanjih sil lahko opišemo z rezultanto \(\vec R\) in navorom okoli izbranega pola. Če pol premaknemo iz \(O\) v \(O'\), rezultanta ostane ista, navor pa dobi dodaten člen. Dva sistema sil sta ekvivalentna, če imata isto rezultanto in isti navor okoli istega pola.`,
        intuition: "Isti potisk na različnih višinah enako pospešuje masno središče, vendar ne enako zavrti telesa.",
        tex: h`\vec R=\sum_k\vec F_k,\qquad \vec N_O=\sum_k(\vec r_k-\vec r_O)\times\vec F_k,\qquad \vec N_{O'}=\vec N_O+(\vec r_O-\vec r_{O'})\times\vec R`,
        say: h`»Rezultanta ni odvisna od pola, navor pa je; zato pri vsaki enačbi povem, okoli katere točke računam.«`
      }
    ],
    derivations: [
      {
        title: "Iz rotacijske matrike do vektorja kotne hitrosti",
        goal: h`Brez ugibanja izpeljati \(\dot{\vec\xi}=\vec\omega\times\vec\xi\).`,
        steps: [
          { reason: "Rotacijska matrika ohranja skalarne produkte in dolžine.", tex: h`Q(t)Q^T(t)=I` },
          { reason: "Enačbo odvajamo po času.", tex: h`\dot Q Q^T+Q\dot Q^T=0` },
          { reason: "Uvedemo matriko, ki meri trenutno spremembo orientacije v prostoru.", tex: h`\Omega=\dot Q Q^T` },
          { reason: "Prejšnja enačba pove, da je ta matrika antisimetrična.", tex: h`\Omega^T=Q\dot Q^T=-\dot Q Q^T=-\Omega` },
          { reason: "V treh dimenzijah vsaki antisimetrični matriki pripada natanko en vektor ω.", tex: h`\Omega=\widehat\omega=\begin{pmatrix}0&-\omega_3&\omega_2\\ \omega_3&0&-\omega_1\\ -\omega_2&\omega_1&0\end{pmatrix},\qquad \widehat\omega\vec a=\vec\omega\times\vec a` },
          { reason: "Na telo pritrjen vektor ima stalne telesne koordinate a in prostorski zapis ξ=Qa.", tex: h`\vec\xi(t)=Q(t)\vec a,\qquad \dot{\vec a}=0` },
          { reason: "Odvajamo in vstavimo identiteto QᵀQ=I.", tex: h`\dot{\vec\xi}=\dot Q\vec a=\dot Q Q^T\vec\xi=\Omega\vec\xi` },
          { reason: "Antisimetrično preslikavo zapišemo kot vektorski produkt.", tex: h`\boxed{\dot{\vec\xi}=\vec\omega\times\vec\xi}` }
        ],
        result: "Kotna hitrost ni dodatna predpostavka; v treh dimenzijah nastane iz odvoda ortogonalne orientacije Q."
      },
      {
        title: "Transportni izrek za poljuben vektor",
        goal: "Povezati odvod v inercialnih prostorskih oseh z odvodom v vrtečih telesnih oseh.",
        steps: [
          { reason: "Vektor razpišemo po telesni bazi; spreminjajo se lahko komponente in baza.", tex: h`\vec A(t)=\sum_{i=1}^{3}A_i(t)\vec e_i(t)` },
          { reason: "Odvajamo s produktnim pravilom.", tex: h`\left(\frac{d\vec A}{dt}\right)_{\rm prostor}=\sum_i\dot A_i\vec e_i+\sum_i A_i\dot{\vec e}_i` },
          { reason: "Prva vsota je po definiciji odvod komponent v telesnem sistemu.", tex: h`\left(\frac{d\vec A}{dt}\right)_{\rm telo}=\sum_i\dot A_i\vec e_i` },
          { reason: "Vsak telesni bazni vektor je pritrjen na telo.", tex: h`\dot{\vec e}_i=\vec\omega\times\vec e_i` },
          { reason: "Vektorski produkt je linearen, zato drugo vsoto združimo.", tex: h`\sum_i A_i(\vec\omega\times\vec e_i)=\vec\omega\times\sum_iA_i\vec e_i=\vec\omega\times\vec A` },
          { reason: "Dobimo transportni izrek.", tex: h`\boxed{\left(\frac{d\vec A}{dt}\right)_{\rm prostor}=\left(\frac{d\vec A}{dt}\right)_{\rm telo}+\vec\omega\times\vec A}` }
        ],
        result: "Člen ω×A ni nova sila; nastane samo zato, ker se telesna baza glede na prostor vrti."
      },
      {
        title: "Splošna relativna hitrost in pospešek, nato toga poenostavitev",
        goal: "Izpeljati formule iz vrtečega sistema in jasno pokazati, kateri členi pri togem telesu izginejo.",
        steps: [
          { reason: "Lego točke razstavimo na lego izhodišča vrtečega sistema in relativni vektor.", tex: h`\vec r=\vec r_C+\vec\xi` },
          { reason: "Relativno hitrost definiramo kot telesni odvod relativnega vektorja.", tex: h`\vec v_{\rm rel}=\left(\frac{d\vec\xi}{dt}\right)_{\rm telo}` },
          { reason: "Transportni izrek da prostorski odvod relativnega vektorja.", tex: h`\left(\frac{d\vec\xi}{dt}\right)_{\rm prostor}=\vec v_{\rm rel}+\vec\omega\times\vec\xi` },
          { reason: "Odvajamo lego in dobimo splošno hitrost.", tex: h`\boxed{\vec v=\vec v_C+\vec\omega\times\vec\xi+\vec v_{\rm rel}}` },
          { reason: "Za pospešek odvajamo oba dodatna člena v prostoru.", tex: h`\vec a=\vec a_C+\frac d{dt}(\vec\omega\times\vec\xi)_{\rm prostor}+\left(\frac{d\vec v_{\rm rel}}{dt}\right)_{\rm prostor}` },
          { reason: "Za prvi člen uporabimo produktno pravilo in že znani odvod ξ.", tex: h`\frac d{dt}(\vec\omega\times\vec\xi)=\dot{\vec\omega}\times\vec\xi+\vec\omega\times(\vec v_{\rm rel}+\vec\omega\times\vec\xi)` },
          { reason: "Tudi relativno hitrost odvajamo s transportnim izrekom.", tex: h`\left(\frac{d\vec v_{\rm rel}}{dt}\right)_{\rm prostor}=\vec a_{\rm rel}+\vec\omega\times\vec v_{\rm rel}` },
          { reason: "Združimo oba enaka člena z relativno hitrostjo.", tex: h`\boxed{\vec a=\vec a_C+\dot{\vec\omega}\times\vec\xi+\vec\omega\times(\vec\omega\times\vec\xi)+2\vec\omega\times\vec v_{\rm rel}+\vec a_{\rm rel}}` },
          { reason: "Materialna točka P je pritrjena na togo telo, zato se v telesnih koordinatah ne premika.", tex: h`\vec v_{\rm rel}=0,\qquad \vec a_{\rm rel}=0` },
          { reason: "Ostaneta kinematični formuli za poljubno točko togega telesa.", tex: h`\boxed{\vec v_P=\vec v_C+\vec\omega\times\vec\xi_P},\qquad \boxed{\vec a_P=\vec a_C+\dot{\vec\omega}\times\vec\xi_P+\vec\omega\times(\vec\omega\times\vec\xi_P)}` }
        ],
        result: "Coriolisov člen manjka namenoma: točka, pritrjena na togo telo, nima relativne hitrosti."
      },
      {
        title: "Iz sistema delcev do enačbe gibanja masnega središča",
        goal: h`Izpeljati \(M\vec a_C=\vec F^{\rm ext}\) in pokazati, zakaj notranje sile izginejo.`,
        steps: [
          { reason: "Začnemo z definicijo masnega središča; mase so konstantne.", tex: h`M\vec r_C=\sum_i m_i\vec r_i` },
          { reason: "Enkrat odvajamo in dobimo skupno gibalno količino.", tex: h`M\vec v_C=\sum_i m_i\vec v_i=\vec P` },
          { reason: "Še enkrat odvajamo.", tex: h`M\vec a_C=\sum_i m_i\vec a_i` },
          { reason: "Za vsak delec uporabimo drugi Newtonov zakon in ločimo zunanje ter notranje sile.", tex: h`m_i\vec a_i=\vec F_i^{\rm ext}+\sum_{j\ne i}\vec F_{ij}` },
          { reason: "Seštejemo enačbe vseh delcev.", tex: h`M\vec a_C=\sum_i\vec F_i^{\rm ext}+\sum_i\sum_{j\ne i}\vec F_{ij}` },
          { reason: "Vsaka notranja sila nastopi v paru z nasprotno silo po tretjem Newtonovem zakonu.", tex: h`\vec F_{ij}=-\vec F_{ji}` },
          { reason: "Vsota notranjih sil je zato nič.", tex: h`\sum_i\sum_{j\ne i}\vec F_{ij}=\sum_{i<j}(\vec F_{ij}+\vec F_{ji})=0` },
          { reason: "Ostane samo rezultanta zunanjih sil.", tex: h`\boxed{M\vec a_C=\vec F^{\rm ext}},\qquad \vec F^{\rm ext}=\sum_i\vec F_i^{\rm ext}` }
        ],
        result: "Masno središče se giblje, kakor da bi bila vsa masa zbrana v C in bi tam delovala rezultanta zunanjih sil."
      },
      {
        title: "Iz definicije vrtilne količine do izreka o vrtilni količini",
        goal: h`Izpeljati \(\dot{\vec L}_O=\vec N_O^{\rm ext}\) in navesti pogoj za izničenje notranjih navorov.`,
        steps: [
          { reason: "Naj bo O mirujoč pol v inercialnem sistemu.", tex: h`\vec L_O=\sum_i(\vec r_i-\vec r_O)\times m_i\vec v_i` },
          { reason: "Odvajamo s produktnim pravilom.", tex: h`\dot{\vec L}_O=\sum_i\vec v_i\times m_i\vec v_i+\sum_i(\vec r_i-\vec r_O)\times m_i\vec a_i` },
          { reason: "Vektorski produkt vzporednih vektorjev je nič.", tex: h`\vec v_i\times m_i\vec v_i=0` },
          { reason: "Uporabimo Newtonovo enačbo in ločimo zunanje ter notranje sile.", tex: h`\dot{\vec L}_O=\sum_i(\vec r_i-\vec r_O)\times\vec F_i^{\rm ext}+\sum_i\sum_{j\ne i}(\vec r_i-\vec r_O)\times\vec F_{ij}` },
          { reason: "Notranja navora delcev i in j združimo v par in uporabimo Fji=−Fij.", tex: h`(\vec r_i-\vec r_O)\times\vec F_{ij}+(\vec r_j-\vec r_O)\times\vec F_{ji}=(\vec r_i-\vec r_j)\times\vec F_{ij}` },
          { reason: "Pri centralnih notranjih silah je sila vzporedna z veznico delcev, zato je parni notranji navor nič.", tex: h`\vec F_{ij}\parallel(\vec r_j-\vec r_i)\quad\Rightarrow\quad(\vec r_i-\vec r_j)\times\vec F_{ij}=0` },
          { reason: "Ostane rezultanta zunanjih navorov.", tex: h`\boxed{\dot{\vec L}_O=\vec N_O^{\rm ext}},\qquad \vec N_O^{\rm ext}=\sum_i(\vec r_i-\vec r_O)\times\vec F_i^{\rm ext}` },
          { reason: "Za gibajoči se pol A na splošno nastane popravek s skupno gibalno količino.", tex: h`\frac{d\vec L_A}{dt}=\vec N_A^{\rm ext}-\vec v_A\times\vec P` },
          { reason: "Pri A=C je P=MvC, zato je popravek nič.", tex: h`\vec v_C\times\vec P=\vec v_C\times M\vec v_C=0\quad\Rightarrow\quad\boxed{\left(\frac{d\vec L_C}{dt}\right)_{\rm prostor}=\vec N_C^{\rm ext}}` }
        ],
        result: "Za izničenje notranjih navorov tretji Newtonov zakon ni dovolj sam: notranje sile morajo delovati vzdolž veznice delcev."
      },
      {
        title: "Od vrtilne količine togega telesa do vztrajnostnega tenzorja",
        goal: h`Izpeljati \(\vec L_C=J_C\vec\omega\), komponente J in pomen glavnih osi.`,
        steps: [
          { reason: "Pri zveznem telesu seštevanje nadomestimo z integralom po masi.", tex: h`\vec L_C=\int_B\vec\xi\times(\vec v-\vec v_C)\,dm` },
          { reason: "Pri togem telesu je relativna hitrost masnega elementa ω×ξ.", tex: h`\vec v-\vec v_C=\vec\omega\times\vec\xi` },
          { reason: "Vstavimo jo v definicijo vrtilne količine.", tex: h`\vec L_C=\int_B\vec\xi\times(\vec\omega\times\vec\xi)\,dm` },
          { reason: "Uporabimo identiteto za dvojni vektorski produkt.", tex: h`\vec\xi\times(\vec\omega\times\vec\xi)=|\vec\xi|^2\vec\omega-(\vec\xi\cdot\vec\omega)\vec\xi` },
          { reason: "Drugi člen zapišemo s tenzorskim produktom.", tex: h`(\vec\xi\otimes\vec\xi)\vec\omega=\vec\xi(\vec\xi\cdot\vec\omega)` },
          { reason: "Celoten izraz je linearen v ω, zato koeficient pred ω definiramo kot J.", tex: h`\boxed{J_C=\int_B\left(|\vec\xi|^2I-\vec\xi\otimes\vec\xi\right)dm},\qquad \boxed{\vec L_C=J_C\vec\omega}` },
          { reason: "Vztrajnostni moment okoli osi e dobimo tako, da J projiciramo na isto smer.", tex: h`J_{\vec e}=\vec e\cdot J_C\vec e=\int_B\left(|\vec\xi|^2-(\vec e\cdot\vec\xi)^2\right)dm=\int_B r_\perp^2\,dm` },
          { reason: "V ortonormirani bazi preberemo komponente.", tex: h`\boxed{J_{ij}=\int_B\left(|\vec\xi|^2\delta_{ij}-\xi_i\xi_j\right)dm}` },
          { reason: "Diagonalni in izvendiagonalni členi imajo konkretno obliko.", tex: h`J_{11}=\int_B(\xi_2^2+\xi_3^2)dm,\qquad J_{12}=-\int_B\xi_1\xi_2\,dm` },
          { reason: "Ker je Jij=Jji, je J simetričen in ima ortonormirano bazo lastnih vektorjev.", tex: h`J\vec e_i=J_i\vec e_i,\qquad \boxed{J=\operatorname{diag}(J_1,J_2,J_3)}` },
          { reason: "Če ω kaže po glavni osi, J ne spremeni njegove smeri.", tex: h`\vec\omega=\omega_i\vec e_i\quad\Rightarrow\quad\vec L_C=J_i\omega_i\vec e_i\parallel\vec\omega` }
        ],
        result: "Vztrajnostni tenzor ni skrivnostna nova sila, ampak linearni zapis vpliva razporeditve mase na vrtilno količino."
      },
      {
        title: "Razcep kinetične energije na translacijo in rotacijo",
        goal: h`Izpeljati \(T=\tfrac12M|\vec v_C|^2+\tfrac12\vec\omega\cdot J_C\vec\omega\).`,
        steps: [
          { reason: "Kinetično energijo zveznega telesa dobimo s seštevanjem energij masnih elementov.", tex: h`T=\frac12\int_B|\vec v|^2dm` },
          { reason: "Vstavimo hitrost točke togega telesa.", tex: h`\vec v=\vec v_C+\vec\omega\times\vec\xi` },
          { reason: "Kvadrat vsote razširimo brez preskoka.", tex: h`T=\frac12\int_B\left(|\vec v_C|^2+2\vec v_C\cdot(\vec\omega\times\vec\xi)+|\vec\omega\times\vec\xi|^2\right)dm` },
          { reason: "Prvi člen vsebuje konstantni vC in integral mase.", tex: h`\frac12\int_B|\vec v_C|^2dm=\frac12M|\vec v_C|^2` },
          { reason: "Mešani člen je nič zaradi definicije masnega središča.", tex: h`\int_B\vec v_C\cdot(\vec\omega\times\vec\xi)dm=\vec v_C\cdot\left(\vec\omega\times\int_B\vec\xi\,dm\right)=0` },
          { reason: "Kvadrat vektorskega produkta zapišemo s tenzorjem J.", tex: h`|\vec\omega\times\vec\xi|^2=\vec\omega\cdot\left(|\vec\xi|^2I-\vec\xi\otimes\vec\xi\right)\vec\omega` },
          { reason: "Integral zadnjega člena je rotacijska energija.", tex: h`\frac12\int_B|\vec\omega\times\vec\xi|^2dm=\frac12\vec\omega\cdot J_C\vec\omega` },
          { reason: "Seštejemo translacijski in rotacijski del.", tex: h`\boxed{T=\frac12M|\vec v_C|^2+\frac12\vec\omega\cdot J_C\vec\omega}` }
        ],
        result: "Izbira masnega središča odstrani mešani člen in zato najčisteje loči translacijo od rotacije."
      },
      {
        title: "Steinerjev izrek brez skritega razširjanja",
        goal: "Prenesti znani vztrajnostni tenzor iz masnega središča C na drug pol O.",
        steps: [
          { reason: "Vektor od O do masnega elementa razstavimo na vektor od O do C in vektor od C do elementa.", tex: h`\vec\xi_O=\vec d+\vec\xi,\qquad \vec d=\vec r_C-\vec r_O` },
          { reason: "Začnemo z definicijo tenzorja okoli O.", tex: h`J_O=\int_B\left(|\vec d+\vec\xi|^2I-(\vec d+\vec\xi)\otimes(\vec d+\vec\xi)\right)dm` },
          { reason: "Razširimo kvadrat in tenzorski produkt.", tex: h`|\vec d+\vec\xi|^2I=(d^2+2\vec d\cdot\vec\xi+\xi^2)I` },
          { reason: "Tudi drugi del razširimo po členih.", tex: h`(\vec d+\vec\xi)\otimes(\vec d+\vec\xi)=\vec d\otimes\vec d+\vec d\otimes\vec\xi+\vec\xi\otimes\vec d+\vec\xi\otimes\vec\xi` },
          { reason: "Člene, ki vsebujejo samo ξ, prepoznamo kot JC.", tex: h`\int_B(\xi^2I-\vec\xi\otimes\vec\xi)dm=J_C` },
          { reason: "Vsi mešani členi izginejo, ker je prvi masni moment okoli C nič.", tex: h`\int_B\vec\xi\,dm=0\quad\Rightarrow\quad\int_B(2\vec d\cdot\vec\xi)I\,dm=\int_B\vec d\otimes\vec\xi\,dm=\int_B\vec\xi\otimes\vec d\,dm=0` },
          { reason: "Členi, ki vsebujejo samo d, se pomnožijo s skupno maso.", tex: h`\int_B(d^2I-\vec d\otimes\vec d)dm=M(d^2I-\vec d\otimes\vec d)` },
          { reason: "Dobimo tenzorski Steinerjev izrek.", tex: h`\boxed{J_O=J_C+M\left(d^2I-\vec d\otimes\vec d\right)}` },
          { reason: "Za vzporedni osi ostane znana skalarna oblika.", tex: h`\boxed{J_O^{(\vec e)}=J_C^{(\vec e)}+Md_\perp^2}` }
        ],
        result: "Steinerjev izrek velja za vzporedne osi; d⊥ je pravokotna razdalja med njima."
      },
      {
        title: "Od izreka o vrtilni količini do Eulerjevih enačb",
        goal: "Izpeljati vektorsko Eulerjevo enačbo in jo razpisati v glavnih telesnih oseh.",
        steps: [
          { reason: "Za pol C velja izrek o vrtilni količini v inercialnem prostoru.", tex: h`\vec N_C^{\rm ext}=\left(\frac{d\vec L_C}{dt}\right)_{\rm prostor}` },
          { reason: "Vrtilno količino zapišemo v telesni bazi, kjer so komponente J konstantne.", tex: h`\vec L_C=J_C\vec\omega` },
          { reason: "Prostorski odvod pretvorimo s transportnim izrekom.", tex: h`\left(\frac{d\vec L_C}{dt}\right)_{\rm prostor}=\left(\frac{d\vec L_C}{dt}\right)_{\rm telo}+\vec\omega\times\vec L_C` },
          { reason: "Ker je telo togo in je baza pritrjena nanj, je matrika J v tej bazi časovno konstantna.", tex: h`\left(\frac{d\vec L_C}{dt}\right)_{\rm telo}=\frac d{dt}(J_C\vec\omega)_{\rm telo}=J_C\dot{\vec\omega}` },
          { reason: "Vstavimo L=Jω in dobimo Eulerjevo vektorsko enačbo.", tex: h`\boxed{J_C\dot{\vec\omega}+\vec\omega\times(J_C\vec\omega)=\vec N_C^{\rm ext}}` },
          { reason: "Izberemo glavne telesne osi, v katerih je J diagonalna.", tex: h`J_C=\operatorname{diag}(J_1,J_2,J_3),\qquad J_C\vec\omega=(J_1\omega_1,J_2\omega_2,J_3\omega_3)` },
          { reason: "Izračunamo žiroskopski člen z vektorskim produktom.", tex: h`\vec\omega\times(J\vec\omega)=\big((J_3-J_2)\omega_2\omega_3,(J_1-J_3)\omega_3\omega_1,(J_2-J_1)\omega_1\omega_2\big)` },
          { reason: "Prva komponenta vektorske enačbe je prva Eulerjeva enačba.", tex: h`\boxed{J_1\dot\omega_1+(J_3-J_2)\omega_2\omega_3=N_1}` },
          { reason: "Druga komponenta je druga Eulerjeva enačba.", tex: h`\boxed{J_2\dot\omega_2+(J_1-J_3)\omega_3\omega_1=N_2}` },
          { reason: "Tretja komponenta je tretja Eulerjeva enačba.", tex: h`\boxed{J_3\dot\omega_3+(J_2-J_1)\omega_1\omega_2=N_3}` }
        ],
        result: "V vseh členih morajo biti J, ω in N zapisani glede na isti pol in v isti telesni bazi. Čista oblika velja okoli masnega središča ali okoli materialne točke telesa, ki miruje v inercialnem koordinatnem sistemu."
      },
      {
        title: "Kako se navor spremeni ob premiku pola?",
        goal: h`Izpeljati \(\vec N_{O'}=\vec N_O+(\vec r_O-\vec r_{O'})\times\vec R\).`,
        steps: [
          { reason: "Navor istega sistema sil najprej zapišemo okoli novega pola O′.", tex: h`\vec N_{O'}=\sum_k(\vec r_k-\vec r_{O'})\times\vec F_k` },
          { reason: "Novo ročico razstavimo na staro ročico in vektor med poloma.", tex: h`\vec r_k-\vec r_{O'}=(\vec r_k-\vec r_O)+(\vec r_O-\vec r_{O'})` },
          { reason: "Vstavimo razcep in zaradi linearnosti vektorskega produkta ločimo vsoti.", tex: h`\vec N_{O'}=\sum_k(\vec r_k-\vec r_O)\times\vec F_k+(\vec r_O-\vec r_{O'})\times\sum_k\vec F_k` },
          { reason: "Prva vsota je stari navor, druga vsota sil pa rezultanta.", tex: h`\vec N_O=\sum_k(\vec r_k-\vec r_O)\times\vec F_k,\qquad \vec R=\sum_k\vec F_k` },
          { reason: "Dobimo pravilo za spremembo pola.", tex: h`\boxed{\vec N_{O'}=\vec N_O+(\vec r_O-\vec r_{O'})\times\vec R}` }
        ],
        result: "Če je rezultanta nič, je navor para sil neodvisen od pola; sicer moramo pol vedno jasno navesti."
      }
    ]
  };
})();
