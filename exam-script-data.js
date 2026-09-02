(() => {
  "use strict";

  const h = String.raw;

  window.MECHANICS_EXAM_SCRIPTS = {
    "premocrtno-potenciali": {
      duration: "7–9 min",
      title: "Če dobim potenciale, grem po teh 6 korakih",
      first: h`»Premočrtno gibanje opišem z eno koordinato \(x(t)\). Obravnavam konservativno silo, ki je odvisna samo od lege, zato jo lahko opišem s potencialno energijo \(U(x)\).«`,
      draw: [
        { title: "Osi", text: h`Vodoravno nariši \(x\,[\mathrm m]\), navpično \(U(x)\,[\mathrm J]\). Povej, da telo ne drsi po krivulji; krivulja je zemljevid energije.` },
        { title: "Potencial", text: "Nariši eno gladko jamo z minimumom in po možnosti še lokalni vrh. Minimum označi kot stabilno ravnovesje, vrh kot nestabilno." },
        { title: "Energija", text: h`Nariši vodoravno črto \(E\). Presečišči s potencialom označi \(a,b\), dovoljeni del \(U\le E\) pa poudari.` },
        { title: "Sila", text: h`Na padajočem delu grafa nariši puščico sile desno, na rastočem levo, ker je \(F=-U'\).` },
        { title: "Lokalna parabola", text: h`Ob minimumu \(x_0\) črtkano nariši parabolo in napiši \(U\approx U(x_0)+\tfrac12U''(x_0)(x-x_0)^2\).` }
      ],
      steps: [
        {
          title: "Postavim model in potencial",
          say: h`»Za konstantno maso velja drugi Newtonov zakon. Ker je sila konservativna, je enaka minus naklonu potencialne energije. Minus pomeni, da sila kaže v smer padanja potenciala.«`,
          write: [
            h`x=x(t),\qquad m\ddot{x}=F(x)`,
            h`\boxed{F(x)=-\frac{dU}{dx}}`,
            h`U(x)-U(x_{\rm ref})=-\int_{x_{\rm ref}}^{x}F(\xi)\,d\xi`
          ],
          legend: [
            { tex: h`x(t)`, meaning: "lega telesa ob času t" },
            { tex: h`m`, meaning: "masa telesa" },
            { tex: h`\ddot x`, meaning: "pospešek; drugi časovni odvod lege" },
            { tex: h`F(x)`, meaning: "sila pri legi x" },
            { tex: h`U(x),\ U'(x)`, meaning: "potencialna energija in njen naklon dU/dx" },
            { tex: h`x_{\rm ref},\ \xi`, meaning: "referenčna lega in pomožna integracijska spremenljivka" }
          ],
          meaning: h`\(U'\) je naklon in ima enoto \(\mathrm{J/m=N}\). Dodana konstanta v \(U\) ne spremeni sile.`
        },
        {
          title: "Izpeljem ohranitev energije",
          say: h`»Newtonovo enačbo pomnožim s hitrostjo \(\dot{x}\). Nato prepoznam dva časovna odvoda.«`,
          write: [
            h`m\ddot{x}=-U'(x)\quad\Big|\cdot\dot{x}`,
            h`m\ddot{x}\dot{x}=-U'(x)\dot{x}`,
            h`\frac{d}{dt}\!\left[\frac12m\bigl(\dot{x}\bigr)^2\right]+\frac{dU}{dt}=0`,
            h`\boxed{\frac12m\bigl(\dot{x}\bigr)^2+U(x)=E=\mathrm{konst.}}`
          ],
          legend: [
            { tex: h`\dot x=\frac{dx}{dt}`, meaning: "hitrost; ena pika pomeni prvi časovni odvod" },
            { tex: h`\ddot x=\frac{d^2x}{dt^2}`, meaning: "pospešek; dve piki pomenita drugi časovni odvod" },
            { tex: h`\dot x^{\,2}=v^2`, meaning: "kvadrat hitrosti — ni drugi odvod" },
            { tex: h`\frac d{dt}`, meaning: "odvod po času" },
            { tex: h`U'(x)`, meaning: "odvod potenciala po legi x" },
            { tex: h`E`, meaning: "stalna celotna mehanska energija" }
          ],
          meaning: h`Energijo določi začetno stanje: \(E=\tfrac12m v_i^2+U(x_i)\). Brez trenja se le pretaka med kinetično in potencialno.`
        },
        {
          title: "Iz grafa preberem celotno gibanje",
          say: h`»Kinetična energija ne more biti negativna. Zato je gibanje možno samo, kjer je \(U\le E\). Navpična razlika \(E-U\) je kinetična energija.«`,
          write: [
            h`\frac12m\bigl(\dot{x}\bigr)^2=E-U(x)\ge0`,
            h`\boxed{\dot{x}=\pm\sqrt{\frac{2}{m}\,[E-U(x)]}}`,
            h`U(a)=E,\quad U'(a)\ne0\Rightarrow\dot{x}(a)=0\quad\text{(navadno obračališče)}`,
            h`U'(x_0)=0,\quad U''(x_0)>0\Rightarrow\text{stabilno}`
          ],
          legend: [
            { tex: h`E-U(x)`, meaning: "kinetična energija; zato mora biti ≥ 0" },
            { tex: h`\dot x`, meaning: "hitrost" },
            { tex: h`\pm`, meaning: "gibanje desno oziroma levo" },
            { tex: h`a`, meaning: "navadno obračališče; U(a)=E in U′(a)≠0" },
            { tex: h`x_0`, meaning: "ravnovesna lega" },
            { tex: h`U'(x_0),\ U''(x_0)`, meaning: "naklon in ukrivljenost potenciala v ravnovesju" }
          ],
          meaning: "Plus je gibanje desno, minus levo. V navadnem obračališču je hitrost nič, sila pa ni nič in telo obrne. Če je hkrati tudi U′=0, gre lahko za mejni primer, na primer asimptotično približevanje separatrisi. Ravnovesna lega ima ničelno silo; telo v njej ostane le, če je tudi začetna hitrost nič."
        },
        {
          title: "Pokažem čas in periodo",
          say: h`»Iz energijske enačbe ločim \(dt=dx/\dot{x}\). Tako dobim čas kot integral oziroma kvadraturo.«`,
          write: [
            h`t-t_i=\pm\sqrt{\frac m2}\int_{x_i}^{x}\frac{d\xi}{\sqrt{E-U(\xi)}}`,
            h`\boxed{T(E)=\sqrt{2m}\int_a^b\frac{dx}{\sqrt{E-U(x)}}}`
          ],
          legend: [
            { tex: h`t_i,\ x_i`, meaning: "začetni čas in začetna lega" },
            { tex: h`t,\ x`, meaning: "trenutni čas in lega" },
            { tex: h`\xi`, meaning: "pomožna integracijska spremenljivka" },
            { tex: h`a,b`, meaning: "zaporedni obračališči" },
            { tex: h`T(E)`, meaning: "perioda pri izbrani energiji E" },
            { tex: h`\pm`, meaning: "trenutna smer gibanja" }
          ],
          meaning: h`\(a\to b\) je polovica nihaja, zato se čas podvoji. Pri splošnem potencialu je perioda odvisna od energije oziroma amplitude.`
        },
        {
          title: "Razložim formulo s Taylorjem brez preskoka",
          say: h`»Zelo blizu nedegeneriranega stabilnega ravnovesja, kjer je \(U''(x_0)>0\), je gladek potencial v najnižjem redu parabola. Ravnovesje označim z \(x_0\) in potencial razvijem okoli te točke, kjer je prvi odvod nič. Če je \(U''(x_0)=0\), moram pogledati višje člene.«`,
          write: [
            h`\eta=x-x_0`,
            h`U(x_0+\eta)=U(x_0)+U'(x_0)\eta+\frac12U''(x_0)\eta^2+\cdots`,
            h`U'(x_0)=0\Rightarrow\boxed{U(x)\approx U(x_0)+\frac12U''(x_0)(x-x_0)^2}`
          ],
          legend: [
            { tex: h`x_0`, meaning: "ravnovesna lega, okoli katere razvijamo" },
            { tex: h`\eta=x-x_0`, meaning: "majhen odmik od ravnovesja" },
            { tex: h`U'(x_0)=0`, meaning: "pogoj ravnovesja" },
            { tex: h`U''(x_0)`, meaning: "drugi odvod po x oziroma ukrivljenost potenciala" },
            { tex: h`\frac12=\frac1{2!}`, meaning: "Taylorjev koeficient kvadratnega člena" },
            { tex: h`\approx`, meaning: "zanemarimo kubične in višje člene" }
          ],
          meaning: h`Faktor \(1/2\) je \(1/2!\). Linearni člen izgine, ker je v ravnovesju \(F=-U'=0\). Višje potence zanemarimo samo za majhen odmik.`
        },
        {
          title: "Zaključim z majhnimi nihanji",
          say: h`»Drugi odvod potenciala se zato obnaša kot efektivna konstanta vzmeti. Dobim harmonični oscilator.«`,
          write: [
            h`F\approx-U''(x_0)\eta=-k_{\rm eff}\eta,\qquad k_{\rm eff}=U''(x_0)`,
            h`m\ddot\eta+U''(x_0)\eta=0`,
            h`\boxed{\omega_0=\sqrt{\frac{U''(x_0)}m},\qquad T_0=2\pi\sqrt{\frac m{U''(x_0)}}}`
          ],
          legend: [
            { tex: h`\eta`, meaning: "odmik od ravnovesja" },
            { tex: h`\ddot\eta`, meaning: "drugi časovni odvod odmika" },
            { tex: h`k_{\rm eff}=U''(x_0)`, meaning: "efektivna togost potencialne jame" },
            { tex: h`F`, meaning: "povratna sila" },
            { tex: h`\omega_0`, meaning: "kotna frekvenca majhnih nihanj" },
            { tex: h`T_0`, meaning: "perioda majhnih nihanj" },
            { tex: h`m`, meaning: "masa telesa" }
          ],
          meaning: "Bolj ukrivljena jama pomeni močnejšo povratno silo in hitrejše nihanje; večja masa pomeni počasnejše nihanje."
        }
      ],
      must: [
        h`Ne zamenjaj obračališča \(U=E\) z ravnovesjem \(U'=0\).`,
        h`Povej, da je \(E-U\) kinetična energija in zato ne sme biti negativna.`,
        h`Pri Taylorju obvezno povej: \(U'(x_0)=0\), \(1/2=1/2!\), odmik je majhen.`
      ],
      last: h`»Torej iz grafa \(U(x)\) dobim silo, dovoljena območja, obračališča in stabilnost, z energijsko kvadraturo čas, blizu nedegeneriranega minimuma pa harmonično nihanje.«`
    },

    "centralna-sila": {
      duration: "8–10 min",
      title: "Če dobim centralno silo, grem po teh 7 korakih",
      first: h`»Centralna sila je vedno usmerjena po zveznici med delcem in fiksnim centrom ter je po velikosti odvisna samo od razdalje \(r\).«`,
      draw: [
        { title: "Center in vektorji", text: h`Nariši center \(O\), delec, krajevni vektor \(\vec r\), radialno silo \(\vec F\) ter hitrost \(\vec v\).` },
        { title: "Ravnina", text: h`Pravokotno na ravnino nariši \(\vec L\) in povej, da njegova stalna smer zaklene gibanje v ravnino.` },
        { title: "Ploščine", text: "Na orbiti osenči dva ozka ploščinska izseka enake ploščine; bližje centru naj bo lok daljši." },
        { title: "Efektivni potencial", text: h`Nariši \(U(r)\), pozitivni centrifugalni člen in njuno vsoto \(U_{\rm ef}(r)\). Dodaj črto \(E\), obračališči \(r_-,r_+\) in minimum \(r_c\).` },
        { title: "Keplerjeva orbita", text: h`Če prideš do sile \(-k/r^2\), nariši elipso s centrom sile v gorišču in označi periapsido ter apoapsido.` }
      ],
      steps: [
        {
          title: "Definiram centralno silo",
          say: h`»Vektor \(\vec r\) kaže od centra do delca, \(r=|\vec r|\) je razdalja in \(\vec e_r=\vec r/r\) radialni enotski vektor. Negativni \(F(r)\) pomeni privlačno silo.«`,
          write: [
            h`\boxed{\vec F(\vec r)=F(r)\,\vec e_r},\qquad r=|\vec r|,\quad\vec e_r=\frac{\vec r}{r}`,
            h`\vec F=-U'(r)\vec e_r`
          ],
          legend: [
            { tex: h`\vec r`, meaning: "krajevni vektor od centra do delca" },
            { tex: h`r=|\vec r|`, meaning: "razdalja delca od centra" },
            { tex: h`\vec e_r=\vec r/r`, meaning: "radialni enotski vektor navzven" },
            { tex: h`\vec F`, meaning: "vektor centralne sile" },
            { tex: h`F(r)`, meaning: "predznačena radialna komponenta sile" },
            { tex: h`U'(r)=\frac{dU}{dr}`, meaning: "radialni odvod potenciala" }
          ],
          meaning: "Centralna ne pomeni nujno privlačna; pomeni radialna in odvisna samo od razdalje."
        },
        {
          title: "Iz ničelnega navora dobim ohranitev L in ravnino",
          say: h`»Ker sta \(\vec r\) in \(\vec F\) vzporedna, je njun vektorski produkt nič. Navor zato ne spreminja vrtilne količine.«`,
          write: [
            h`\vec N_O=\vec r\times\vec F=0`,
            h`\frac{d\vec L}{dt}=\vec N_O\Rightarrow\boxed{\vec L=\vec r\times m\vec v=\mathrm{konst.}}`,
            h`\vec r\cdot\vec L=0`
          ],
          legend: [
            { tex: h`\vec N_O`, meaning: "navor glede na center O" },
            { tex: h`\times`, meaning: "vektorski produkt" },
            { tex: h`\vec L`, meaning: "vrtilna količina" },
            { tex: h`\vec v`, meaning: "hitrost delca" },
            { tex: h`\dot{\vec L}`, meaning: "časovna sprememba vrtilne količine" },
            { tex: h`\vec r\cdot\vec L=0`, meaning: "r je pravokoten na stalno normalo ravnine" }
          ],
          meaning: h`Stalna smer \(\vec L\) določi fiksno ravnino gibanja. Če je \(L=0\), je gibanje čisto radialno po premici skozi center.`
        },
        {
          title: "Izpeljem ploščinski zakon",
          say: h`»V času \(dt\) krajevni vektor opiše tanek trikotnik. Njegova ploščina je polovica velikosti vektorskega produkta.«`,
          write: [
            h`dA=\frac12|\vec r\times d\vec r|`,
            h`\boxed{\dot A=\frac12|\vec r\times\vec v|=\frac{L}{2m}=\mathrm{konst.}}`,
            h`L=mr^2\dot\varphi`
          ],
          legend: [
            { tex: h`A,\ dA`, meaning: "pometena ploščina in njen majhen prirastek" },
            { tex: h`\dot A=\frac{dA}{dt}`, meaning: "ploščinska hitrost" },
            { tex: h`\vec r,\ \vec v`, meaning: "lega in hitrost delca" },
            { tex: h`L=|\vec L|`, meaning: "velikost vrtilne količine" },
            { tex: h`m`, meaning: "masa delca" },
            { tex: h`\varphi,\ \dot\varphi`, meaning: "polarni kot in kotna hitrost" }
          ],
          meaning: "V enakih časih se opišejo enake ploščine. Ko je r manjši, se mora kot spreminjati hitreje. To je drugi Keplerjev zakon in velja za vsako centralno silo."
        },
        {
          title: "Razstavim hitrost in izpeljem efektivni potencial",
          say: h`»Hitrost ima radialni del in tangencialni del. Tangencialno kinetično energijo z ohranjeno \(L\) zapišem kot člen, odvisen samo od \(r\).«`,
          write: [
            h`\vec v=\dot r\,\vec e_r+r\dot\varphi\,\vec e_\varphi`,
            h`E=\frac12m\dot r^2+\frac12mr^2\dot\varphi^2+U(r)`,
            h`\dot\varphi=\frac{L}{mr^2}\Rightarrow\frac12mr^2\dot\varphi^2=\frac{L^2}{2mr^2}`,
            h`\boxed{\frac12m\dot r^2+U_{\rm ef}(r)=E},\qquad\boxed{U_{\rm ef}(r)=U(r)+\frac{L^2}{2mr^2}}`
          ],
          legend: [
            { tex: h`\dot r\,\vec e_r`, meaning: "radialni del hitrosti" },
            { tex: h`r\dot\varphi\,\vec e_\varphi`, meaning: "tangencialni del hitrosti" },
            { tex: h`E`, meaning: "celotna mehanska energija" },
            { tex: h`U(r)`, meaning: "pravi potencial centralne sile" },
            { tex: h`L`, meaning: "ohranjena vrtilna količina" },
            { tex: h`\frac{L^2}{2mr^2}`, meaning: "tangencialna kinetična energija" },
            { tex: h`U_{\rm ef}(r)`, meaning: "U(r) plus centrifugalni člen" }
          ],
          meaning: h`Člen \(L^2/(2mr^2)\) je tangencialna kinetična energija, zapisana kot funkcija \(r\); ni nova realna sila. Pri majhnem \(r\) tvori centrifugalno pregrado.`
        },
        {
          title: "Preberem radialno gibanje in krožni tir",
          say: h`»Radialni problem zdaj berem enako kot enodimenzionalni potencial.«`,
          write: [
            h`\dot r=\pm\sqrt{\frac2m[E-U_{\rm ef}(r)]},\qquad U_{\rm ef}\le E`,
            h`E=U_{\rm ef}(r_\pm)\Rightarrow\dot r=0`,
            h`U_{\rm ef}'(r_c)=0\Rightarrow\text{krožni tir}`,
            h`U_{\rm ef}''(r_c)>0\Rightarrow\text{stabilni krožni tir}`
          ],
          legend: [
            { tex: h`\dot r`, meaning: "radialna hitrost" },
            { tex: h`\pm`, meaning: "gibanje navzven oziroma navznoter" },
            { tex: h`r_-,\ r_+`, meaning: "radialni obračališči" },
            { tex: h`r_c`, meaning: "polmer krožnega tira" },
            { tex: h`U_{\rm ef}'`, meaning: "radialni naklon efektivnega potenciala" },
            { tex: h`U_{\rm ef}''`, meaning: "ukrivljenost in kriterij stabilnosti" },
            { tex: h`E`, meaning: "vodoravna energijska črta" }
          ],
          meaning: h`V radialnem obračališču je nič samo \(\dot r\); delec ima za \(L\ne0\) še vedno tangencialno hitrost.`
        },
        {
          title: "Če zahteva obliko orbite, uvedem Binetovo enačbo",
          say: h`»Efektivni potencial opisuje \(r(t)\). Za samo geometrijsko obliko orbite odstranim čas in uvedem \(u(\varphi)=1/r\).«`,
          write: [
            h`u(\varphi)=\frac1r,\qquad C_0=r^2\dot\varphi=\frac Lm`,
            h`a_r=-C_0^2u^2(u''+u)`,
            h`\boxed{u''+u=-\frac{m}{L^2u^2}\,F\!\left(\frac1u\right)}`
          ],
          legend: [
            { tex: h`u(\varphi)=1/r`, meaning: "obratna razdalja kot funkcija kota" },
            { tex: h`u',\ u''`, meaning: "odvoda po kotu φ, ne po času" },
            { tex: h`C_0=\frac Lm=r^2\dot\varphi`, meaning: "specifična vrtilna količina" },
            { tex: h`a_r`, meaning: "radialna komponenta pospeška" },
            { tex: h`F(1/u)`, meaning: "radialna sila pri r=1/u" },
            { tex: h`\varphi`, meaning: "polarni kot" }
          ],
          meaning: h`Črtici na \(u\) sta zdaj odvoda po kotu \(\varphi\), ne po času ali po \(r\). Binet poda \(r(\varphi)\), torej zemljevid orbite.`
        },
        {
          title: "Za gravitacijo dobim stožnico in Keplerja",
          say: h`»Pri gravitacijski sili \(1/r^2\) se Binetova enačba spremeni v linearno enačbo s konstantno desno stranjo.«`,
          write: [
            h`\vec F=-\frac{k}{r^2}\vec e_r,\qquad U(r)=-\frac kr,\qquad k=GMm`,
            h`u''+u=\frac{mk}{L^2}=\frac1p`,
            h`\boxed{r(\varphi)=\frac{p}{1+\varepsilon\cos(\varphi-\varphi_0)}},\qquad p=\frac{L^2}{mk}`,
            h`\boxed{T^2=\frac{4\pi^2}{GM}a^3}`
          ],
          legend: [
            { tex: h`k=GMm`, meaning: "konstanta gravitacijske privlačne sile" },
            { tex: h`G`, meaning: "gravitacijska konstanta" },
            { tex: h`M,\ m`, meaning: "centralna masa in masa delca" },
            { tex: h`p=\frac{L^2}{mk}`, meaning: "goriščni parameter orbite" },
            { tex: h`\varepsilon`, meaning: "ekscentričnost; določa obliko stožnice" },
            { tex: h`\varphi_0`, meaning: "kotna smer periapside" },
            { tex: h`a`, meaning: "velika polos elipse" },
            { tex: h`T`, meaning: "obhodna doba" }
          ],
          meaning: h`\(0\le\varepsilon<1\) je elipsa, \(\varepsilon=1\) parabola, \(\varepsilon>1\) hiperbola. Prvi Kepler je stožnica, drugi ploščinski zakon, tretji zveza \(T^2\propto a^3\).`
        }
      ],
      must: [
        h`Veriga mora biti: radialna sila \(\Rightarrow N=0\Rightarrow L\) konstanten \(\Rightarrow\) ravnina in ploščinski zakon.`,
        h`Pri \(U_{\rm ef}\) povej, da dodatni člen prihaja iz tangencialne kinetične energije.`,
        h`Loči cilj: \(U_{\rm ef}\) daje radialno gibanje \(r(t)\), Binet pa obliko \(r(\varphi)\).`
      ],
      last: h`»Torej ohranitev vrtilne količine problem reducira na ravnino in eno radialno koordinato; pri sili \(1/r^2\) Binetova enačba da Keplerjeve stožnice.«`
    },

    "togo-telo": {
      duration: "10–12 min",
      title: "Če dobim togo telo, grem po teh 8 korakih",
      first: h`»Togo telo je sistem materialnih točk, pri katerem so vse medsebojne razdalje konstantne. Splošno gibanje razcepim na translacijo masnega središča in rotacijo okoli njega.«`,
      draw: [
        { title: "Telo, C in P", text: h`Nariši poševno knjigo ali ploščo. Označi masno središče \(C\), poljubno točko \(P\), \(\vec r_C\) in \(\vec\xi_P\) od \(C\) do \(P\).` },
        { title: "Hitrosti", text: h`Pri \(C\) nariši \(\vec v_C\), skozi telo os \(\vec\omega\), pri \(P\) pa tangencialno puščico \(\vec\omega\times\vec\xi_P\).` },
        { title: "Glavne osi", text: h`Skozi \(C\) nariši telesne osi \(\vec e_1,\vec e_2,\vec e_3\) in ob njih napiši \(J_1,J_2,J_3\).` },
        { title: "Prosta vrtavka", text: h`Nariši fiksni \(\vec L\), telesno os \(\vec e_3\) in \(\vec\omega\); os \(\vec e_3\) naj okoli \(\vec L\) opisuje stožec.` },
        { title: "Kotaljenje", text: h`Če profesor vpraša primer, nariši kolo z \(C\), stično točko \(A\), \(v_A=0\), \(v_C\) in \(v_{\rm zgoraj}=2v_C\).` }
      ],
      steps: [
        {
          title: "Definiram togost in šest prostostnih stopenj",
          say: h`»Tri koordinate določijo lego masnega središča, tri pa orientacijo. Orientacijo opišem z rotacijsko matriko \(Q(t)\).«`,
          write: [
            h`|\vec r_P-\vec r_Q|=\mathrm{konst.}`,
            h`\boxed{\vec r_P=\vec r_C+\vec\xi_P},\qquad\vec\xi_P=Q(t)\vec a_P`,
            h`Q^TQ=I,\qquad\det Q=1`
          ],
          legend: [
            { tex: h`\vec r_P,\ \vec r_Q`, meaning: "legi dveh materialnih točk" },
            { tex: h`\vec r_C`, meaning: "lega masnega središča" },
            { tex: h`\vec\xi_P`, meaning: "trenutni prostorski vektor od C do P" },
            { tex: h`\vec a_P`, meaning: "stalne koordinate P v telesnem sistemu" },
            { tex: h`Q(t)`, meaning: "rotacijska matrika orientacije" },
            { tex: h`I`, meaning: "identitetna matrika" },
            { tex: h`Q^TQ=I,\ \det Q=1`, meaning: "Q je prava rotacija, ki ohranja dolžine" }
          ],
          meaning: h`\(\vec a_P\) je stalen zapis točke v telesnih oseh, \(\vec\xi_P\) pa njen trenutni vektor v prostoru. \(Q\) predstavlja orientacijo; \(\vec\omega\) predstavlja hitrost spreminjanja orientacije.`
        },
        {
          title: "Izpeljem hitrost poljubne točke",
          say: h`»Odvajam lego. Ker je \(P\) pritrjena na vrteče telo, velja \(\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P\).«`,
          write: [
            h`\vec r_P=\vec r_C+\vec\xi_P`,
            h`\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P`,
            h`\boxed{\vec v_P=\vec v_C+\vec\omega\times\vec\xi_P}`
          ],
          legend: [
            { tex: h`\vec r_P,\ \vec r_C`, meaning: "legi točke P in masnega središča C" },
            { tex: h`\vec\xi_P`, meaning: "ročica oziroma vektor od C do P" },
            { tex: h`\dot{\vec\xi}_P`, meaning: "sprememba ročice v prostoru" },
            { tex: h`\vec\omega`, meaning: "kotna hitrost" },
            { tex: h`\vec v_P,\ \vec v_C`, meaning: "hitrosti točke P in središča C" },
            { tex: h`\times`, meaning: "vektorski produkt; poda tangencialno smer" }
          ],
          meaning: h`Prvi člen je enaka translacija za vse točke. Drugi je tangencialna hitrost zaradi rotacije z velikostjo \(\omega r_\perp\). Točka na osi ima rotacijsko hitrost nič.`
        },
        {
          title: "Še enkrat odvajam in dobim pospešek",
          say: h`»Uporabim produktno pravilo. Dobim translacijski, tangencialni in centripetalni del.«`,
          write: [
            h`\boxed{\vec a_P=\vec a_C+\dot{\vec\omega}\times\vec\xi_P+\vec\omega\times(\vec\omega\times\vec\xi_P)}`
          ],
          legend: [
            { tex: h`\vec a_P,\ \vec a_C`, meaning: "pospeška točke P in masnega središča" },
            { tex: h`\dot{\vec\omega}`, meaning: "kotni pospešek" },
            { tex: h`\vec\xi_P`, meaning: "ročica od C do P" },
            { tex: h`\dot{\vec\omega}\times\vec\xi_P`, meaning: "tangencialni pospešek" },
            { tex: h`\vec\omega\times(\vec\omega\times\vec\xi_P)`, meaning: "centripetalni pospešek proti osi" }
          ],
          meaning: h`Drugi člen nastane zaradi kotnega pospeška, tretji pa ostane tudi pri konstantni \(\vec\omega\) in kaže proti osi. Coriolisovega člena ni, ker je točka pritrjena na telo.`
        },
        {
          title: "Opišem razpored mase z vztrajnostnim tenzorjem",
          say: h`»Za eno os je vztrajnostni moment vsota mase krat kvadrat pravokotne razdalje. Ker se telo okoli različnih osi vrti različno težko, splošno potrebujem tenzor.«`,
          write: [
            h`J_{\vec e}=\int_B r_\perp^2\,dm`,
            h`\boxed{J_C=\int_B\left(|\vec\xi|^2I-\vec\xi\otimes\vec\xi\right)dm}`,
            h`J=\operatorname{diag}(J_1,J_2,J_3)\quad\text{v glavnih oseh}`,
            h`\boxed{\vec L_C=J_C\vec\omega},\qquad\boxed{T=\frac12M|\vec v_C|^2+\frac12\vec\omega\cdot J_C\vec\omega}`
          ],
          legend: [
            { tex: h`J_{\vec e},\ \vec e`, meaning: "vztrajnostni moment okoli izbrane osi" },
            { tex: h`r_\perp,\ dm`, meaning: "pravokotna razdalja do osi in masni element" },
            { tex: h`J_C`, meaning: "vztrajnostni tenzor glede na C" },
            { tex: h`I,\ \otimes`, meaning: "identiteta in zunanji produkt" },
            { tex: h`J_1,J_2,J_3`, meaning: "glavni vztrajnostni momenti" },
            { tex: h`\vec L_C`, meaning: "vrtilna količina glede na C" },
            { tex: h`T`, meaning: "celotna kinetična energija" },
            { tex: h`M,\ \vec v_C,\ \vec\omega`, meaning: "masa, hitrost središča in kotna hitrost" }
          ],
          meaning: h`Masa daleč od osi prispeva z razdaljo na kvadrat. \(\vec L\) in \(\vec\omega\) nista nujno vzporedna, ker \(J_1,J_2,J_3\) različno pomnožijo komponente.`
        },
        {
          title: "Napišem Newton–Eulerjevo dinamiko",
          say: h`»Rezultanta zunanjih sil spreminja translacijo masnega središča, rezultanta zunanjih navorov pa vrtilno količino.«`,
          write: [
            h`\boxed{M\vec a_C=\vec F^{\rm ext}}`,
            h`\boxed{\vec N_C=\left(\frac{d\vec L_C}{dt}\right)_{\rm prostor}}`
          ],
          legend: [
            { tex: h`M`, meaning: "celotna masa telesa" },
            { tex: h`\vec a_C`, meaning: "pospešek masnega središča" },
            { tex: h`\vec F^{\rm ext}`, meaning: "rezultanta zunanjih sil" },
            { tex: h`\vec N_C`, meaning: "rezultanta zunanjih navorov okoli C" },
            { tex: h`\vec L_C`, meaning: "vrtilna količina okoli C" },
            { tex: h`(d/dt)_{\rm prostor}`, meaning: "odvod v inertnem prostorskem sistemu" }
          ],
          meaning: "Pri sili, navoru, vrtilni količini in vztrajnostnem tenzorju mora biti referenčna točka dosledno ista."
        },
        {
          title: "S transportnim izrekom izpeljem Eulerjevo enačbo",
          say: h`»Komponente v telesnih oseh se spreminjajo, poleg tega pa se vrtijo še same osi. Zato prostorski in telesni odvod nista enaka.«`,
          write: [
            h`\left(\frac{d\vec A}{dt}\right)_{\rm prostor}=\left(\frac{d\vec A}{dt}\right)_{\rm telo}+\vec\omega\times\vec A`,
            h`\vec L=J\vec\omega`,
            h`\boxed{J\dot{\vec\omega}+\vec\omega\times(J\vec\omega)=\vec N_C}`
          ],
          legend: [
            { tex: h`\vec A`, meaning: "poljuben vektor" },
            { tex: h`(d/dt)_{\rm prostor}`, meaning: "odvod, ki ga vidi inercialni opazovalec" },
            { tex: h`(d/dt)_{\rm telo}`, meaning: "odvod komponent v vrtečih telesnih oseh" },
            { tex: h`\vec\omega`, meaning: "kotna hitrost vrteče baze" },
            { tex: h`J`, meaning: "vztrajnostni tenzor v telesnih oseh" },
            { tex: h`\vec L=J\vec\omega`, meaning: "vrtilna količina" },
            { tex: h`\vec N_C`, meaning: "zunanji navor okoli C" }
          ],
          meaning: h`Žiroskopski člen ni dodaten fizični navor; nastane zaradi zapisa v vrtečih se telesnih oseh. Pri vrtenju okoli glavne osi izgine in ostane \(J_i\dot\omega_i=N_i\).`
        },
        {
          title: "Za prosto vrtavko povem ohranitve in stabilnost",
          say: h`»Prosta vrtavka pomeni ničelni zunanji navor glede na masno središče. Zato sta vrtilna količina v prostoru in rotacijska energija konstantni.«`,
          write: [
            h`\vec N_C=0\Rightarrow\boxed{\vec L_C=\mathrm{konst.\ v\ prostoru}}`,
            h`T_{\rm rot}=\frac12\vec\omega\cdot J\vec\omega=\mathrm{konst.}`,
            h`J_1<J_2<J_3:\qquad\vec e_1,\vec e_3\ \text{stabilni},\quad\vec e_2\ \text{nestabilna}`
          ],
          legend: [
            { tex: h`\vec N_C=0`, meaning: "ni zunanjega navora okoli C" },
            { tex: h`\vec L_C`, meaning: "v prostoru stalna vrtilna količina" },
            { tex: h`T_{\rm rot}`, meaning: "rotacijska kinetična energija" },
            { tex: h`\vec\omega`, meaning: "kotna hitrost" },
            { tex: h`J,\ J_i`, meaning: "vztrajnostni tenzor in glavni momenti" },
            { tex: h`\vec e_1,\vec e_2,\vec e_3`, meaning: "glavne telesne osi" }
          ],
          meaning: h`Telesna os in \(\vec\omega\) lahko precesirata okoli fiksnega \(\vec L\). Vrtenje okoli najmanjše in največje glavne osi je stabilno, okoli srednje pa nestabilno.`
        },
        {
          title: "Zaključim s kotaljenjem kot uporabo kinematike",
          say: h`»Pri kotaljenju brez drsenja po nepremični podlagi je trenutna hitrost stične materialne točke nič.«`,
          write: [
            h`\boxed{\vec v_A=\vec v_C+\vec\omega\times\vec\xi_A=0}`,
            h`v_C=R\omega,\qquad a_C=R\dot\omega`,
            h`a=\frac{g\sin\beta}{1+J_C/(MR^2)}`
          ],
          legend: [
            { tex: h`A,\ \vec\xi_A`, meaning: "stična točka in ročica od C do A" },
            { tex: h`\vec v_A=0`, meaning: "hipna hitrost stične materialne točke" },
            { tex: h`\vec v_C`, meaning: "hitrost masnega središča" },
            { tex: h`\vec\omega,\ \dot\omega`, meaning: "kotna hitrost in kotni pospešek" },
            { tex: h`R`, meaning: "polmer kolesa" },
            { tex: h`a_C,\ a`, meaning: "pospešek središča vzdolž podlage" },
            { tex: h`g,\ \beta`, meaning: "težni pospešek in naklon klanca" },
            { tex: h`J_C,\ M`, meaning: "vztrajnostni moment in masa" }
          ],
          meaning: h`Spodnja točka ima trenutno hitrost 0, središče \(v_C\), zgornja pa \(2v_C\). Zadnja formula velja za pasivno kotaljenje po klancu brez drsenja.`
        }
      ],
      must: [
        "Najprej loči geometrijo in kinematiko, šele nato uvedi sile in dinamiko.",
        h`Ne reci, da \(\vec\omega\) predstavlja orientacijo; orientacijo predstavlja \(Q(t)\), \(\vec\omega\) pa njeno hitrost spreminjanja.`,
        h`Pri prosti vrtavki je v prostoru zagotovo konstanten \(\vec L\), ne nujno \(\vec\omega\) ali telesna os.`
      ],
      last: h`»Torej lego togega telesa določata translacija in orientacija, hitrosti dobim z \(\vec\omega\times\vec\xi\), razpored mase opiše \(J\), dinamiko pa Newtonova in Eulerjeva enačba.«`
    }
  };
})();
