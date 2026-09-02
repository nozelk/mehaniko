(() => {
  "use strict";

  const h = String.raw;

  window.MECHANICS_FOUNDATIONS = {
    "premocrtno-potenciali": {
      title: "Od sile do gibanja — brez skritih predpostavk",
      intro: "To so definicije, pri katerih te profesor lahko ustavi še pred prvo izpeljavo. Nauči se jih v tem vrstnem redu.",
      coreQuestion: {
        question: "Zakaj se kroglica sploh začne premikati?",
        answer: h`Ker je rezultanta sil različna od nič, ima kroglica po drugem Newtonovem zakonu pospešek. Sila ne »ustvari hitrosti«, ampak spreminja hitrost. Če je sila nič in kroglica že ima hitrost, se še naprej giblje enakomerno.`,
        tex: h`\sum \vec F=m\vec a\qquad\Longrightarrow\qquad \vec a=\frac{\sum\vec F}{m}`,
        warning: h`Pri potencialni sili velja še \(\vec F=-\nabla U\): kroglica pospešuje v smeri najhitrejšega padanja potencialne energije.`
      },
      chain: [
        "Lega določi, kje je telo.",
        "Potencialna energija določi silo.",
        "Sila določi pospešek.",
        "Začetna lega in hitrost določita gibanje."
      ],
      definitions: [
        {
          title: "Materialna točka in premočrtno gibanje",
          definition: h`Materialna točka je idealizirano telo, katerega velikost zanemarimo. Pri premočrtnem gibanju se sme premikati samo po eni premici, zato njegovo lego opiše ena koordinata \(x(t)\).`,
          intuition: "Namesto cele kroglice spremljamo eno točko na ravni tirnici.",
          tex: h`x=x(t),\qquad v=\dot x=\frac{dx}{dt},\qquad a=\ddot x=\frac{d^2x}{dt^2}`,
          say: h`»Premočrtno gibanje ima eno prostostno stopnjo, zato ga opišem z eno funkcijo \(x(t)\).«`
        },
        {
          title: "Inercialni sistem in drugi Newtonov zakon",
          definition: h`Inercialni koordinatni sistem je sistem, v katerem prosto telo miruje ali se giblje enakomerno premočrtno. V njem je rezultanta zunanjih sil enaka produktu mase in pospeška.`,
          intuition: "Če se vsi potiski izničijo, se hitrost ne spreminja.",
          tex: h`\sum F_x=m\ddot x`,
          say: h`»Dinamiko začnem z drugim Newtonovim zakonom v inercialnem sistemu.«`
        },
        {
          title: "Skalar in vektor",
          definition: h`Skalar je število, na primer masa ali energija. Vektor ima velikost in smer, na primer sila, hitrost ali gradient. Zato potencialna energija in sila nista ista vrsta količine.`,
          intuition: "Temperatura je število; veter potrebuje še smer.",
          tex: h`U\in\mathbb R,\qquad \vec F=(F_x,F_y,F_z)\in\mathbb R^3`,
          say: "»Potencialna energija je skalar, sila pa vektor.«"
        },
        {
          title: "Kaj je skalarno polje?",
          definition: h`Skalarno polje vsaki točki prostora priredi eno število. Potencialna energija sistema \(U(\vec r)\) je skalarno polje: pove energijo medsebojnega delovanja pri izbrani legi delca. V eni dimenziji ostane funkcija \(U(x)\).`,
          intuition: "Topografski zemljevid vsaki točki priredi nadmorsko višino.",
          tex: h`U:\mathbb R^3\to\mathbb R,\quad (x,y,z)\mapsto U(x,y,z)`,
          say: h`»\(U\) je skalarno polje, ker vsaki legi priredi eno energijo.«`
        },
        {
          title: "Kaj je potencial in kaj je potencialna energija?",
          definition: h`Na tej strani simbol \(U\) pomeni potencialno energijo v joulih. V strožjem jeziku je potencial pogosto energija na enoto mase ali naboja, na primer \(U=m\Phi\) ali \(U=qV\). Na ustnem najvarneje reci »potencialna energija \(U\)«.`,
          intuition: "Ista pokrajina ima višino; težja kroglica ima pri isti višini več energije.",
          tex: h`[U]=\mathrm J,\qquad U=m\Phi\ \text{ali}\ U=qV`,
          say: "»Z (U) bom označil potencialno energijo; določena je do aditivne konstante.«"
        },
        {
          title: "Kaj naredi gradient?",
          definition: h`Gradient iz skalarnega polja sestavi vektorsko polje. Njegove komponente so krajevni odvodi. Kaže v smeri najhitrejšega naraščanja \(U\), njegova velikost pa pove, kako hitro \(U\) v tej smeri narašča.`,
          intuition: "Na zemljevidu gradient kaže naravnost v najbolj strm klanec navzgor.",
          tex: h`\nabla U=\left(\frac{\partial U}{\partial x},\frac{\partial U}{\partial y},\frac{\partial U}{\partial z}\right)`,
          say: "»Gradient skalarno polje pretvori v vektorsko polje najstrmejšega naraščanja.«"
        },
        {
          title: "Zakaj je sila minus gradient?",
          definition: h`Delo potencialne sile pri majhnem premiku je enako zmanjšanju potencialne energije: \(dA=-dU\). Ker sta \(dA=\vec F\cdot d\vec r\) in \(dU=\nabla U\cdot d\vec r\), mora veljati \(\vec F=-\nabla U\). Minus obrne smer navzgor v smer navzdol.`,
          intuition: "Spuščena kroglica se zakotali po energijskem klancu navzdol.",
          tex: h`\boxed{\vec F=-\nabla U}\qquad\stackrel{1\mathrm D}{\Longrightarrow}\qquad \boxed{F(x)=-\frac{dU}{dx}}`,
          say: "»Sila kaže v smeri najhitrejšega padanja potencialne energije.«"
        },
        {
          title: "Delo in konservativna sila",
          definition: h`Delo je energija, ki jo sila prenese med premikom. Sila je konservativna, če je njeno delo med dvema točkama neodvisno od poti; tedaj obstaja potencialna energija in je delo po sklenjeni poti nič.`,
          intuition: "Pri gravitaciji je pomembna višinska razlika, ne vijugasta pot do nje.",
          tex: h`A_{1\to2}=\int_1^2\vec F\cdot d\vec r=U(\vec r_1)-U(\vec r_2),\qquad \oint\vec F\cdot d\vec r=0`,
          say: "»Ker je sila konservativna, lahko njeno delo opišem z razliko potencialnih energij.«"
        },
        {
          title: "Kinetična, potencialna in celotna energija",
          definition: h`Kinetična energija \(T\) pripada gibanju, potencialna energija \(U\) legi, njuna vsota pa je mehanska energija \(E\). Pri časovno neodvisnem potencialu brez disipacije je \(E\) konstantna.`,
          intuition: "Energija se pretaka med hitrostjo in lego, skupna vsota pa ostane ista.",
          tex: h`T=\frac12m\dot x^2,\qquad E=T+U(x)=\mathrm{konst.}`,
          say: "»Potencial ne vsebuje časa in ni trenja, zato se mehanska energija ohranja.«"
        },
        {
          title: "Ravnovesje, stabilnost in obračališče",
          definition: h`Ravnovesje je lega, kjer je sila nič, zato je \(U'(x_0)=0\). Minimum z \(U''(x_0)>0\) je stabilen, maksimum z \(U''(x_0)<0\) nestabilen. Obračališče pa je lega \(a\), kjer je \(U(a)=E\) in trenutna hitrost nič; sila tam praviloma ni nič.`,
          intuition: "Dno sklede je ravnovesje; skrajna lega nihala je samo obrat gibanja.",
          tex: h`\underbrace{U'(x_0)=0}_{\text{ravnovesje}},\qquad \underbrace{U(a)=E}_{\text{obračališče}}`,
          say: "»Obračališča ne smem zamenjati z ravnovesjem.«"
        }
      ],
      derivations: [
        {
          title: "Iz skalarnega polja do vektorskega polja sile",
          goal: h`Iz potenciala \(U\) določimo velikost in smer sile \(\vec F\).`,
          steps: [
            { reason: "Potencialna energija je funkcija treh koordinat.", tex: h`U=U(x,y,z)` },
            { reason: "Poljubni majhen premik razpišemo po komponentah.", tex: h`d\vec r=dx\,\vec e_x+dy\,\vec e_y+dz\,\vec e_z` },
            { reason: "Celotni diferencial potenciala zapišemo s krajevnimi odvodi.", rule: "celotni diferencial", tex: h`dU=\frac{\partial U}{\partial x}dx+\frac{\partial U}{\partial y}dy+\frac{\partial U}{\partial z}dz=\nabla U\cdot d\vec r` },
            { reason: "Majhno delo sile razpišemo po istih komponentah.", rule: "definicija dela", tex: h`dA=\vec F\cdot d\vec r=F_xdx+F_ydy+F_zdz` },
            { reason: "Definicija potencialne sile pravi, da njeno delo zmanjša potencialno energijo.", rule: "definicija potencialne energije", tex: h`dA=-dU` },
            { reason: "Enačimo delo in spremembo potenciala ter vse prestavimo na levo.", tex: h`(\vec F+\nabla U)\cdot d\vec r=(F_x+U_x)dx+(F_y+U_y)dy+(F_z+U_z)dz=0` },
            { reason: "Zveza velja za vsak neodvisen dx, dy in dz, zato mora izginiti vsak koeficient.", rule: "enačenje komponent", tex: h`F_x=-U_x=-\frac{\partial U}{\partial x},\qquad F_y=-U_y=-\frac{\partial U}{\partial y},\qquad F_z=-U_z=-\frac{\partial U}{\partial z}` },
            { reason: "Tri komponentne enačbe združimo v vektorski zapis.", tex: h`\boxed{\vec F=-\nabla U}` },
            { reason: "Če je dovoljeno gibanje samo vzdolž osi x, ostane ena komponenta.", tex: h`\vec F=F_x\vec e_x,\quad \nabla U=\frac{dU}{dx}\vec e_x\quad\Rightarrow\quad\boxed{F_x=-\frac{dU}{dx}}` }
          ],
          result: "Gradient pokaže navzgor, sila pa zaradi minusa navzdol po energijski pokrajini."
        },
        {
          title: "Iz dela do izreka o kinetični energiji",
          goal: "Izračunamo, kako opravljeno delo spremeni kinetično energijo telesa.",
          steps: [
            { reason: "Začnemo z definicijo dela vzdolž poti.", tex: h`A_{1\to2}=\int_1^2\vec F\cdot d\vec r` },
            { reason: "Pot parametriziramo s časom, zato je diferencial poti hitrost krat dt.", rule: "parametrizacija poti", tex: h`\vec r=\vec r(t),\qquad d\vec r=\frac{d\vec r}{dt}dt=\vec v\,dt` },
            { reason: "Integral po poti prepišemo v časovni integral.", rule: "zamenjava spremenljivke", tex: h`A_{1\to2}=\int_{t_1}^{t_2}\vec F\cdot\vec v\,dt` },
            { reason: "Uporabimo drugi Newtonov zakon in definicijo pospeška.", tex: h`\vec F=m\vec a=m\frac{d\vec v}{dt}\quad\Rightarrow\quad A_{1\to2}=\int_{t_1}^{t_2}m\vec a\cdot\vec v\,dt` },
            { reason: "Produktno pravilo za skalarni produkt v·v da faktor dve.", rule: "produktno pravilo", tex: h`\frac d{dt}(\vec v\cdot\vec v)=\vec a\cdot\vec v+\vec v\cdot\vec a=2\vec a\cdot\vec v` },
            { reason: "Integrand je zato časovni odvod kinetične energije.", tex: h`m\vec a\cdot\vec v=\frac d{dt}\!\left(\frac12m\,\vec v\cdot\vec v\right)=\frac{dT}{dt}` },
            { reason: "Integral odvoda je razlika končne in začetne vrednosti.", rule: "temeljni izrek integralskega računa", tex: h`A_{1\to2}=\int_{t_1}^{t_2}\frac{dT}{dt}dt=T(t_2)-T(t_1)` },
            { reason: "Vstavimo T = mv²/2 in dobimo izrek o kinetični energiji.", tex: h`\boxed{A_{1\to2}=\frac12mv_2^2-\frac12mv_1^2=T_2-T_1}` },
            { reason: "Za potencialno silo je isto delo enako U1−U2; enačenje da ohranitev mehanske energije.", tex: h`T_2-T_1=U_1-U_2\quad\Rightarrow\quad\boxed{T_1+U_1=T_2+U_2}` }
          ],
          result: "Energijski zakon ni nova predpostavka: za potencialno silo ga izpeljemo iz Newtonovega zakona in definicije dela."
        },
        {
          title: "Iz Newtonove enačbe do ohranitve energije",
          goal: h`Iz enačbe gibanja dobimo ohranjeno mehansko energijo \(E=T+U\).`,
          steps: [
            { reason: "Začnemo z drugim Newtonovim zakonom in potencialno silo.", tex: h`m\ddot x=F(x)=-U'(x)` },
            { reason: "Obe strani pomnožimo s hitrostjo.", tex: h`m\ddot x\,\dot x=-U'(x)\dot x` },
            { reason: "Odvod kvadrata hitrosti izračunamo izrecno.", rule: "verižno pravilo", tex: h`\frac d{dt}(\dot x^2)=2\dot x\ddot x\quad\Rightarrow\quad m\ddot x\dot x=\frac d{dt}\!\left(\frac12m\dot x^2\right)=\frac{dT}{dt}` },
            { reason: "Ker je x funkcija časa, tudi potencial odvajamo po verižnem pravilu.", rule: "verižno pravilo", tex: h`\frac{d}{dt}U(x(t))=\frac{dU}{dx}\frac{dx}{dt}=U'(x)\dot x=\frac{dU}{dt}` },
            { reason: "Newtonova enačba zato pove, da povečanje T pomeni enako zmanjšanje U.", tex: h`\frac{dT}{dt}=-\frac{dU}{dt}` },
            { reason: "Oba odvoda prestavimo na isto stran in ju združimo.", rule: "linearnost odvoda", tex: h`\frac{dT}{dt}+\frac{dU}{dt}=\frac d{dt}(T+U)=0` },
            { reason: "Količina z ničelnim časovnim odvodom je konstantna mehanska energija.", tex: h`\boxed{\frac12m\dot x^2+U(x)=E},\qquad E=\frac12m\dot x_i^2+U(x_i)=\mathrm{konst.}` }
          ],
          result: "Začetni pogoji določijo vrednost E; med gibanjem se spreminjata T in U, ne pa njuna vsota."
        },
        {
          title: "Iz energije do dovoljenega območja, hitrosti in časa",
          goal: "Iz E določimo, kje se telo lahko giblje, njegovo hitrost in čas gibanja.",
          steps: [
            { reason: "Energijo določimo iz začetne lege in začetne hitrosti.", tex: h`E=\frac12m\dot x_i^2+U(x_i)` },
            { reason: "V energijski enačbi potencial prestavimo na desno.", tex: h`\frac12m\dot x^2=E-U(x)` },
            { reason: "Leva stran je kinetična energija in ne more biti negativna.", tex: h`E-U(x)\ge0\quad\Longleftrightarrow\quad U(x)\le E` },
            { reason: "Najprej izrazimo kvadrat hitrosti.", tex: h`\dot x^2=\frac2m[E-U(x)]` },
            { reason: "Koren ima dve veji: plus za naraščajoči x in minus za padajoči x.", tex: h`\dot x=\frac{dx}{dt}=\pm\sqrt{\frac2m[E-U(x)]}` },
            { reason: "Na odseku z izbrano smerjo enačbo obrnemo in dobimo dt/dx.", rule: "ločitev spremenljivk", tex: h`\frac{dt}{dx}=\pm\sqrt{\frac m2}\frac1{\sqrt{E-U(x)}}` },
            { reason: "Pomnožimo z dx, da je čas na eni strani in lega na drugi.", rule: "ločitev spremenljivk", tex: h`dt=\pm\sqrt{\frac m2}\,\frac{dx}{\sqrt{E-U(x)}}` },
            { reason: "Integriramo čas od ti do t in lego od xi do x; ξ je samo pomožna integracijska spremenljivka.", rule: "določeni integral", tex: h`\int_{t_i}^{t}d\tau=\pm\sqrt{\frac m2}\int_{x_i}^{x}\frac{d\xi}{\sqrt{E-U(\xi)}}` },
            { reason: "Dobimo čas prihoda do lege x na izbrani veji gibanja.", tex: h`\boxed{t-t_i=\pm\sqrt{\frac m2}\int_{x_i}^{x}\frac{d\xi}{\sqrt{E-U(\xi)}}}` }
          ],
          result: "Ta integral je kvadratura: praviloma najprej dobimo t kot funkcijo x, nato zvezo po potrebi obrnemo."
        },
        {
          title: "Iz kvadrature do periode nihanja",
          goal: "Izračunamo čas enega celotnega nihaja med obračališčema.",
          steps: [
            { reason: "Naj bosta a in b zaporedni obračališči.", tex: h`U(a)=U(b)=E` },
            { reason: "Na poti od a do b je x naraščajoč, zato uporabimo pozitivno vejo hitrosti.", tex: h`t_{a\to b}=\sqrt{\frac m2}\int_a^b\frac{dx}{\sqrt{E-U(x)}}` },
            { reason: "Na poti nazaj je hitrost negativna, zato v enačbi za dt nastopi minus.", tex: h`dt=-\sqrt{\frac m2}\frac{dx}{\sqrt{E-U(x)}}` },
            { reason: "Meji povratnega integrala sta b in a; minus in obrat mej se izničita.", rule: "zamenjava mej integrala", tex: h`t_{b\to a}=-\sqrt{\frac m2}\int_b^a\frac{dx}{\sqrt{E-U(x)}}=\sqrt{\frac m2}\int_a^b\frac{dx}{\sqrt{E-U(x)}}` },
            { reason: "Cel nihaj je pot od a do b in nato nazaj od b do a.", tex: h`T=t_{a\to b}+t_{b\to a}=2t_{a\to b}` },
            { reason: "Združimo faktorja.", tex: h`\boxed{T(E)=\sqrt{2m}\int_a^b\frac{dx}{\sqrt{E-U(x)}}}` }
          ],
          result: "Pri splošnem potencialu je perioda odvisna od energije oziroma amplitude."
        },
        {
          title: "Taylorjev razvoj in majhna nihanja",
          goal: "Potencial ob minimumu približamo s parabolo ter dobimo frekvenco in periodo majhnih nihanj.",
          steps: [
            { reason: "Naj bo x0 neizrojen stabilni minimum: prvi odvod izgine, drugi pa je strogo pozitiven.", tex: h`U'(x_0)=0,\qquad U''(x_0)>0` },
            { reason: "Odmik od ravnovesja označimo z eta; ker je x0 konstanta, se drugi odvod ne spremeni.", tex: h`x=x_0+\eta,\qquad \dot x=\dot\eta,\qquad\ddot x=\ddot\eta` },
            { reason: "Potencial razvijemo okoli x0 do drugega reda.", rule: "Taylorjev razvoj", tex: h`U(x_0+\eta)=U(x_0)+U'(x_0)\eta+\frac12U''(x_0)\eta^2+O(\eta^3)` },
            { reason: "V ravnovesju izgine linearni člen.", tex: h`U'(x_0)=0\quad\Rightarrow\quad U(x_0+\eta)=U(x_0)+\frac12U''(x_0)\eta^2+O(\eta^3)` },
            { reason: "Za majhen odmik zanemarimo kubične in višje člene.", tex: h`U(x)\approx U(x_0)+\frac12U''(x_0)(x-x_0)^2` },
            { reason: "Približek odvajamo po x in uporabimo F = −U′.", rule: "odvajanje Taylorjevega približka", tex: h`U'(x)\approx U''(x_0)(x-x_0)=U''(x_0)\eta\quad\Rightarrow\quad F\approx-U''(x_0)\eta` },
            { reason: "Povratno silo vstavimo v Newtonovo enačbo in delimo z m.", tex: h`m\ddot\eta=-U''(x_0)\eta\quad\Rightarrow\quad\ddot\eta+\frac{U''(x_0)}m\eta=0` },
            { reason: "Primerjamo s standardno enačbo harmoničnega oscilatorja.", tex: h`\ddot\eta+\omega_0^2\eta=0\quad\Rightarrow\quad\boxed{\omega_0=\sqrt{\frac{U''(x_0)}m}}` },
            { reason: "Standardna rešitev niha sinusno; amplitudo in fazo določita začetna pogoja.", rule: "rešitev harmoničnega oscilatorja", tex: h`\eta(t)=A\cos(\omega_0t+\delta),\qquad x(t)=x_0+A\cos(\omega_0t+\delta)` },
            { reason: "Čas enega obrata faze je 2π/ω0.", tex: h`\boxed{T_0=\frac{2\pi}{\omega_0}=2\pi\sqrt{\frac m{U''(x_0)}}}` }
          ],
          result: "Minimum mora imeti U″(x0)>0; tedaj je sila za majhen odmik usmerjena nazaj."
        }
      ]
    },

    "centralna-sila": {},
    "togo-telo": {}
  };
})();
