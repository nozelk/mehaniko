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
          goal: h`Pokazati \(\vec F=-\nabla U\) in nato enodimenzionalni zapis \(F=-U'\).`,
          steps: [
            { reason: "Potencialna energija je funkcija treh koordinat.", tex: h`U=U(x,y,z)` },
            { reason: "Njen diferencial zapišemo s krajevnimi odvodi.", tex: h`dU=\frac{\partial U}{\partial x}dx+\frac{\partial U}{\partial y}dy+\frac{\partial U}{\partial z}dz=\nabla U\cdot d\vec r` },
            { reason: "Majhno delo sile je skalarni produkt sile in premika.", tex: h`dA=\vec F\cdot d\vec r` },
            { reason: "Definicija potencialne sile pravi, da njeno delo zmanjša potencialno energijo.", tex: h`dA=-dU` },
            { reason: "Enačimo izraza; zveza mora veljati za vsak poljuben premik.", tex: h`\vec F\cdot d\vec r=-\nabla U\cdot d\vec r\quad\Rightarrow\quad \boxed{\vec F=-\nabla U}` },
            { reason: "Če je dovoljeno gibanje samo vzdolž osi x, ostane ena komponenta.", tex: h`\vec F=F_x\vec e_x,\quad \nabla U=\frac{dU}{dx}\vec e_x\quad\Rightarrow\quad\boxed{F_x=-\frac{dU}{dx}}` }
          ],
          result: "Gradient pokaže navzgor, sila pa zaradi minusa navzdol po energijski pokrajini."
        },
        {
          title: "Iz dela do izreka o kinetični energiji",
          goal: h`Pokazati, da je delo rezultante sil enako spremembi kinetične energije: \(A_{1\to2}=T_2-T_1\).`,
          steps: [
            { reason: "Začnemo z definicijo dela vzdolž poti.", tex: h`A_{1\to2}=\int_1^2\vec F\cdot d\vec r` },
            { reason: "Uporabimo Newtonov zakon in zvezo d r = v dt.", tex: h`A_{1\to2}=\int_{t_1}^{t_2}m\vec a\cdot\vec v\,dt` },
            { reason: "Skalarni produkt pospeška in hitrosti je polovica odvoda kvadrata hitrosti.", tex: h`\vec a\cdot\vec v=\frac{d\vec v}{dt}\cdot\vec v=\frac12\frac d{dt}(v^2)` },
            { reason: "Integriramo časovni odvod.", tex: h`A_{1\to2}=\int_{t_1}^{t_2}\frac d{dt}\!\left(\frac12mv^2\right)dt` },
            { reason: "Dobimo razliko končne in začetne kinetične energije.", tex: h`\boxed{A_{1\to2}=\frac12mv_2^2-\frac12mv_1^2=T_2-T_1}` },
            { reason: "Za potencialno silo je isto delo enako U1−U2; enačenje da ohranitev mehanske energije.", tex: h`T_2-T_1=U_1-U_2\quad\Rightarrow\quad\boxed{T_1+U_1=T_2+U_2}` }
          ],
          result: "Energijski zakon ni nova predpostavka: za potencialno silo ga izpeljemo iz Newtonovega zakona in definicije dela."
        },
        {
          title: "Iz Newtonove enačbe do ohranitve energije",
          goal: h`Izpeljati \(\tfrac12m\dot x^2+U(x)=E\).`,
          steps: [
            { reason: "Začnemo z drugim Newtonovim zakonom in potencialno silo.", tex: h`m\ddot x=F(x)=-U'(x)` },
            { reason: "Obe strani pomnožimo s hitrostjo. To omogoči verižno pravilo.", tex: h`m\ddot x\,\dot x=-U'(x)\dot x` },
            { reason: "Leva stran je časovni odvod kinetične energije.", tex: h`m\ddot x\dot x=\frac d{dt}\!\left(\frac12m\dot x^2\right)` },
            { reason: "Desno uporabimo verižno pravilo za sestavljeno funkcijo U(x(t)).", tex: h`U'(x)\dot x=\frac{dU(x(t))}{dt}` },
            { reason: "Oba odvoda prestavimo na isto stran.", tex: h`\frac d{dt}\!\left(\frac12m\dot x^2+U(x)\right)=0` },
            { reason: "Količina z ničelnim časovnim odvodom je konstanta.", tex: h`\boxed{\frac12m\dot x^2+U(x)=E=\mathrm{konst.}}` }
          ],
          result: "Začetni pogoji določijo vrednost E; med gibanjem se spreminjata T in U, ne pa njuna vsota."
        },
        {
          title: "Iz energije do dovoljenega območja, hitrosti in časa",
          goal: "Iz energijske enačbe prebrati gibanje in dobiti kvadraturo.",
          steps: [
            { reason: "Potencial prestavimo na desno.", tex: h`\frac12m\dot x^2=E-U(x)` },
            { reason: "Leva stran je kinetična energija in ne more biti negativna.", tex: h`E-U(x)\ge0\quad\Longleftrightarrow\quad U(x)\le E` },
            { reason: "Izoliramo hitrost; predznak pove smer gibanja.", tex: h`\dot x=\pm\sqrt{\frac2m\,[E-U(x)]}` },
            { reason: "Uporabimo \(\dot x=dx/dt\) in ločimo spremenljivki.", tex: h`dt=\pm\sqrt{\frac m2}\,\frac{dx}{\sqrt{E-U(x)}}` },
            { reason: "Integriramo od začetnega stanja do trenutne lege.", tex: h`\boxed{t-t_i=\pm\sqrt{\frac m2}\int_{x_i}^{x}\frac{d\xi}{\sqrt{E-U(\xi)}}}` }
          ],
          result: "Ta integral je kvadratura: praviloma najprej dobimo t kot funkcijo x, nato zvezo po potrebi obrnemo."
        },
        {
          title: "Iz kvadrature do periode nihanja",
          goal: h`Izpeljati \(T(E)=\sqrt{2m}\int_a^b dx/\sqrt{E-U(x)}\).`,
          steps: [
            { reason: "Naj bosta a in b zaporedni obračališči.", tex: h`U(a)=U(b)=E` },
            { reason: "Za pot od a do b izberemo pozitivno smer.", tex: h`t_{a\to b}=\sqrt{\frac m2}\int_a^b\frac{dx}{\sqrt{E-U(x)}}` },
            { reason: "Cel nihaj vsebuje še enako dolgo pot nazaj od b do a.", tex: h`T=2t_{a\to b}` },
            { reason: "Združimo faktorja.", tex: h`\boxed{T(E)=\sqrt{2m}\int_a^b\frac{dx}{\sqrt{E-U(x)}}}` }
          ],
          result: "Pri splošnem potencialu je perioda odvisna od energije oziroma amplitude."
        },
        {
          title: "Taylorjev razvoj in majhna nihanja",
          goal: "Pokazati, zakaj je gladka potencialna jama blizu minimuma harmonični oscilator.",
          steps: [
            { reason: "Odmik od ravnovesja označimo z eta.", tex: h`\eta=x-x_0` },
            { reason: "Potencial razvijemo okoli x0.", tex: h`U(x_0+\eta)=U(x_0)+U'(x_0)\eta+\frac12U''(x_0)\eta^2+O(\eta^3)` },
            { reason: "V ravnovesju je sila nič, zato izgine linearni člen.", tex: h`F(x_0)=-U'(x_0)=0` },
            { reason: "Za majhen odmik zanemarimo kubične in višje člene.", tex: h`U(x)\approx U(x_0)+\frac12U''(x_0)(x-x_0)^2` },
            { reason: "Odvajanje da linearno povratno silo.", tex: h`F\approx-U''(x_0)\eta` },
            { reason: "Vstavimo v Newtonovo enačbo.", tex: h`m\ddot\eta+U''(x_0)\eta=0` },
            { reason: "Primerjamo z enačbo harmoničnega oscilatorja.", tex: h`\boxed{\omega_0=\sqrt{\frac{U''(x_0)}m}},\qquad\boxed{T_0=2\pi\sqrt{\frac m{U''(x_0)}}}` }
          ],
          result: "Minimum mora imeti U″(x0)>0; tedaj je sila za majhen odmik usmerjena nazaj."
        }
      ]
    },

    "centralna-sila": {},
    "togo-telo": {}
  };
})();
