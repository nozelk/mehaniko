(() => {
  "use strict";

  const h = String.raw;

  const topics = {
    "premocrtno-potenciali": {
      question: "Premočrtno gibanje s potenciali",
      promise: "Po tej temi boš iz enega grafa znal povedati, kje se telo lahko giblje, kje se obrne, kje miruje in kako hitro niha.",
      before: [
        h`Pika pomeni odvod po času: \(\dot x=dx/dt\) je hitrost, \(\ddot x=d^2x/dt^2\) pa pospešek.`,
        h`Odvod \(U'(x)\) je naklon grafa potenciala; drugi odvod \(U''(x)\) pove njegovo ukrivljenost.`,
        h`Telo se giblje po vodoravni koordinati \(x\), ne po narisani krivulji \(U(x)\). Krivulja je samo zemljevid energije.`,
        h`Predpostavimo konstantno maso, konservativno silo \(F(x)\) in brez trenja. Zato se mehanska energija ohranja.`,
        h`V formuli s tvoje slike je \(x_0\) ravnovesje. Za začetno lego pri gibanju bomo uporabili drugo oznako \(x_i\), da ju ne zamenjaš.`
      ],
      basics: [
        {
          title: "1. Kaj sploh obravnavamo?",
          body: h`Telo se lahko premika samo levo–desno po eni premici. Njegovo lego zato opiše ena sama številka \(x(t)\). Ko poznamo \(x(t)\), poznamo celotno gibanje.`,
          analogy: "Kot voziček na ravni tirnici."
        },
        {
          title: "2. Kaj je potencial U(x)?",
          body: h`Potencial je shranjena energija pri posamezni legi. Graf je podoben pokrajini: minimum je dolina, maksimum hrib. Toda kroglica ni na grafu — graf samo pove energijo kroglice na pravi osi \(x\).`,
          analogy: "Višje na hribu pomeni več shranjene gravitacijske energije."
        },
        {
          title: "3. Zakaj gledamo energijo?",
          body: h`Silo lahko pretvorimo v potencial, Newtonovo enačbo pa v ohranitev energije. Tako pogosto ni treba reševati težke diferencialne enačbe: že primerjava \(E\) in \(U(x)\) pove skoraj vse.`,
          analogy: "Celotni denar E je razdeljen na prihranek U in porabo za gibanje T."
        },
        {
          title: "4. Kaj pomeni stabilno?",
          body: h`V minimumu majhen odmik povzroči silo nazaj proti dnu, zato je ravnovesje stabilno. Na vrhu maksimuma majhen odmik povzroči oddaljevanje, zato je nestabilno.`,
          analogy: "Kroglica v skledi proti kroglici na vrhu hriba."
        }
      ],
      spotlight: {
        label: "Formula s tvoje slike",
        title: "Zakaj je potencial blizu minimuma parabola?",
        tex: h`\boxed{U(x)\approx U(x_0)+\frac12U''(x_0)(x-x_0)^2}`,
        plain: h`To pravi: če smo dovolj blizu stabilnega minimuma \(x_0\), zapleten potencial izgleda skoraj enako kot preprosta parabola oziroma idealna vzmet.`,
        terms: [
          { tex: h`x_0`, meaning: "ravnovesna lega oziroma dno potencialne jame" },
          { tex: h`x-x_0`, meaning: "majhen odmik od ravnovesja; pogosto ga označimo z η" },
          { tex: h`U_0=U(x_0)`, meaning: "potencialna energija na dnu; zapis U₀ na tvoji sliki je samo krajša oznaka" },
          { tex: h`U''(x_0)`, meaning: "ukrivljenost jame in efektivna togost k_eff" },
          { tex: h`\tfrac12`, meaning: "Taylorjev koeficient 1/2!; ni izmišljen" },
          { tex: h`\approx`, meaning: "približno, ker zanemarimo kubične in višje člene" }
        ],
        derivation: [
          { title: "Začnemo s Taylorjevo vrsto", text: "Gladko funkcijo razvijemo okoli x₀.", tex: h`U(x)=U(x_0)+U'(x_0)(x-x_0)+\frac{U''(x_0)}{2!}(x-x_0)^2+\frac{U'''(x_0)}{3!}(x-x_0)^3+\cdots` },
          { title: "V minimumu je naklon nič", text: "Ker je x₀ ravnovesje, velja U′(x₀)=0. Zato linearni člen izgine.", tex: h`U'(x_0)=0` },
          { title: "Zakaj je spredaj ravno 1/2?", text: "Taylorjev koeficient je 1/2!=1/2. Enako vidiš, če kvadratni člen zapišeš A(x−x₀)²: njegov drugi odvod je 2A, zato mora biti A=U″(x₀)/2.", tex: h`2A=U''(x_0)\quad\Rightarrow\quad A=\frac12U''(x_0)` },
          { title: "Odmik je majhen", text: "Kvadrat majhnega odmika je pomembnejši od kubika, četrte potence in naprej, zato obdržimo prvi neničelni člen.", tex: h`|x-x_0|\ \text{majhen}\quad\Rightarrow\quad (x-x_0)^3,(x-x_0)^4,\ldots\ \text{zanemarimo}` },
          { title: "Dobimo parabolo", text: "Drugi odvod postane konstanta, ki meri strmino oziroma togost jame.", tex: h`k_{\rm eff}=U''(x_0)>0` },
          { title: "Iz parabole dobimo vzmet", text: "Odvajamo potencial; sila je sorazmerna odmiku in kaže nazaj.", tex: h`F=-U'(x)\approx-U''(x_0)(x-x_0)=-k_{\rm eff}(x-x_0)` }
        ],
        units: h`\([U'']=\mathrm{J/m^2}=\mathrm{N/m}\). Zato ima \(U''/m\) enoto \(\mathrm{s^{-2}}\), njegov koren pa \(\mathrm{s^{-1}}\), kot mora imeti kotna frekvenca.`,
        example: h`Če je \(m=2\,\mathrm{kg}\), \(U''(x_0)=8\,\mathrm{N/m}\) in je odmik \(0.10\,\mathrm m\), je dodatna potencialna energija \(\Delta U\approx\tfrac12\cdot8\cdot0.10^2=0.04\,\mathrm J\). Frekvenca je \(\omega_0=\sqrt{8/2}=2\,\mathrm{rad/s}\), perioda pa \(T_0=2\pi/2=\pi\,\mathrm s\).`
      },
      formulas: [
        {
          title: "Lega, hitrost in pospešek",
          tex: h`\boxed{v=\dot x=\frac{dx}{dt},\qquad a=\ddot x=\frac{d^2x}{dt^2}}`,
          plain: "Hitrost pove, kako hitro se spreminja lega; pospešek pove, kako hitro se spreminja hitrost.",
          symbols: [
            { tex: h`x(t)`, meaning: "lega telesa ob času t" },
            { tex: h`\dot x`, meaning: "hitrost po premici; predznak pove smer" },
            { tex: h`\ddot x`, meaning: "pospešek po premici" }
          ],
          origin: [
            { text: "Hitrost je meja povprečne hitrosti.", tex: h`v=\lim_{\Delta t\to0}\frac{\Delta x}{\Delta t}` },
            { text: "Pospešek je enako definiran iz spremembe hitrosti.", tex: h`a=\lim_{\Delta t\to0}\frac{\Delta v}{\Delta t}` }
          ],
          use: "To je osnovni jezik celotnega vprašanja."
        },
        {
          title: "Sila je minus naklon potenciala",
          tex: h`\boxed{F(x)=-\frac{dU}{dx}}`,
          plain: "Sila vedno kaže v smer, v kateri potencial pada.",
          symbols: [
            { tex: h`F(x)`, meaning: "sila pri legi x, v njutonih" },
            { tex: h`U(x)`, meaning: "potencialna energija, v joulih" },
            { tex: h`U'(x)`, meaning: "naklon grafa U(x)" }
          ],
          origin: [
            { text: "Za majhen premik je delo sile dA=F dx." },
            { text: "Pri potencialni sili je delo izguba potencialne energije.", tex: h`dA=-dU` },
            { text: "Primerjamo oba zapisa.", tex: h`F\,dx=-dU\Rightarrow F=-dU/dx` }
          ],
          use: "Iz naklona grafa takoj določiš smer sile. Desno rastoč U pomeni silo levo."
        },
        {
          title: "Kako iz sile dobimo potencial",
          tex: h`\boxed{U(x)-U(x_{\rm ref})=-\int_{x_{\rm ref}}^xF(\xi)\,d\xi}`,
          plain: "Potencialna energija se spremeni za minus delo sile. Njeno ničlo lahko izberemo poljubno.",
          symbols: [
            { tex: h`x_{\rm ref}`, meaning: "izbrana referenčna lega, kjer določimo vrednost potenciala" },
            { tex: h`\xi`, meaning: "pomožna integracijska spremenljivka" },
            { tex: h`U(x_{\rm ref})`, meaning: "poljubno izbrana ničla oziroma konstanta potenciala" }
          ],
          origin: [
            { text: "Iz F=−dU/dx dobimo diferencial spremembe energije.", tex: h`dU=-F(x)\,dx` },
            { text: "Seštejemo vse majhne spremembe med referenco in x.", tex: h`\int_{U(x_{\rm ref})}^{U(x)}dU=-\int_{x_{\rm ref}}^xF(\xi)\,d\xi` },
            { text: "Primer vzmeti.", tex: h`F=-kx\Rightarrow U(x)-U(0)=\frac12kx^2` }
          ],
          use: "Dodajanje konstante U ničesar ne spremeni, ker sila vsebuje odvod; fizikalno pomembne so razlike energij."
        },
        {
          title: "Ohranitev mehanske energije",
          tex: h`\boxed{\frac12m\dot x^2+U(x)=E=\text{konst.}}`,
          plain: "Celotna energija E se le pretaka med gibanjem in potencialom.",
          symbols: [
            { tex: h`\tfrac12m\dot x^2`, meaning: "kinetična energija T" },
            { tex: h`U(x)`, meaning: "potencialna energija" },
            { tex: h`E`, meaning: "njuna stalna vsota; določijo jo začetni pogoji" }
          ],
          origin: [
            { text: "Newtonovo enačbo pomnožimo s hitrostjo.", tex: h`m\ddot x=-U'(x)\quad\Rightarrow\quad m\ddot x\dot x=-U'(x)\dot x` },
            { text: "Obe strani sta časovna odvoda.", tex: h`\frac d{dt}\left(\frac12m\dot x^2\right)=-\frac{dU}{dt}` },
            { text: "Prestavimo na isto stran in integriramo po času.", tex: h`\frac d{dt}(T+U)=0\Rightarrow T+U=E` },
            { text: "Vrednost E izračunamo iz začetne lege in hitrosti.", tex: h`\boxed{E=\frac12mv_i^2+U(x_i)}` }
          ],
          use: "To je najpomembnejša formula teme; iz nje sledi dovoljeno območje, hitrost, obrati in perioda."
        },
        {
          title: "Hitrost in dovoljena območja",
          tex: h`\boxed{\dot x=\pm\sqrt{\frac2m[E-U(x)]},\qquad U(x)\le E}`,
          plain: "Navpična razlika E−U je kinetična energija: večja razlika pomeni večjo hitrost.",
          symbols: [
            { tex: h`+`, meaning: "gibanje proti večjim x" },
            { tex: h`-`, meaning: "gibanje proti manjšim x" },
            { tex: h`E-U`, meaning: "razpoložljiva kinetična energija" }
          ],
          origin: [
            { text: "Iz energije izoliramo kinetični člen.", tex: h`\frac12m\dot x^2=E-U(x)` },
            { text: "Pomnožimo z 2/m in korenimo. Koren ima dve smeri.", tex: h`\dot x=\pm\sqrt{2(E-U)/m}` },
            { text: "Ker je kvadrat hitrosti nenegativen, mora veljati E−U≥0." }
          ],
          use: "Kjer je U>E, klasično gibanje ni mogoče. Kjer je U=E, je trenutna hitrost nič."
        },
        {
          title: "Obračališče proti ravnovesju",
          tex: h`\boxed{U(a)=E\Rightarrow\dot x(a)=0;\qquad U'(x_0)=0\Rightarrow F(x_0)=0}`,
          plain: "V obračališču se telo samo obrne; v ravnovesju na telo ni sile.",
          symbols: [
            { tex: h`a`, meaning: "obračališče" },
            { tex: h`x_0`, meaning: "ravnovesna lega; ista oznaka kot v formuli s tvoje slike" },
            { tex: h`U'(x_0)`, meaning: "naklon potenciala v ravnovesju" }
          ],
          origin: [
            { text: "Obrat sledi iz ničelne kinetične energije." },
            { text: "Ravnovesje sledi iz Newtona: za mirovanje potrebujemo F=0." },
            { text: "Navadno ima obračališče F≠0, zato se telo takoj pospeši nazaj." }
          ],
          use: "To je najpogostejša ustna past."
        },
        {
          title: "Stabilnost ravnovesja",
          tex: h`\boxed{U''(x_0)>0\Rightarrow\text{stabilno},\qquad U''(x_0)<0\Rightarrow\text{nestabilno}}`,
          plain: "Minimum je skleda, maksimum je vrh hriba.",
          symbols: [
            { tex: h`U''>0`, meaning: "krivulja je obrnjena navzgor; minimum" },
            { tex: h`U''<0`, meaning: "krivulja je obrnjena navzdol; maksimum" }
          ],
          origin: [
            { text: "Blizu ravnovesja je sila približno linearna.", tex: h`F\approx-U''(x_0)(x-x_0)` },
            { text: "Pri U″>0 kaže sila nazaj; pri U″<0 kaže stran." }
          ],
          use: "Če je U″=0, ta test ne odloči; pogledamo višje člene ali kar obliko grafa."
        },
        {
          title: "Čas kot integral — kvadratura",
          tex: h`\boxed{t-t_i=\pm\sqrt{\frac m2}\int_{x_i}^{x}\frac{d\xi}{\sqrt{E-U(\xi)}}}`,
          plain: "Ko poznamo potencial, ta integral pove, koliko časa telo potrebuje do izbrane lege.",
          symbols: [
            { tex: h`\xi`, meaning: "nema integracijska spremenljivka; ni nova fizikalna količina" },
            { tex: h`x_i,t_i`, meaning: "začetna lega in začetni čas" },
            { tex: h`\pm`, meaning: "trenutna smer gibanja" }
          ],
          origin: [
            { text: "Uporabimo hitrost dx/dt.", tex: h`\frac{dx}{dt}=\pm\sqrt{\frac2m(E-U)}` },
            { text: "Ločimo spremenljivki.", tex: h`dt=\pm\sqrt{\frac m2}\frac{dx}{\sqrt{E-U(x)}}` },
            { text: "Integriramo od začetnega do trenutnega stanja." }
          ],
          use: "Rešitev je lahko implicitna; integral ni nujno elementaren."
        },
        {
          title: "Perioda med dvema obračališčema",
          tex: h`\boxed{T(E)=\sqrt{2m}\int_a^b\frac{dx}{\sqrt{E-U(x)}}}`,
          plain: "Čas od a do b je samo polovica nihaja, zato ga pomnožimo z dva.",
          symbols: [
            { tex: h`a,b`, meaning: "zaporedni obračališči" },
            { tex: h`T(E)`, meaning: "perioda, ki je pri splošnem potencialu odvisna od energije" }
          ],
          origin: [
            { text: "Iz kvadrature vzamemo čas poti a→b.", tex: h`t_{a\to b}=\sqrt{\frac m2}\int_a^b\frac{dx}{\sqrt{E-U(x)}}` },
            { text: "Povratek b→a traja enako.", tex: h`T=2t_{a\to b}` }
          ],
          use: "Pri idealni vzmeti je T neodvisna od amplitude; splošno to ne velja."
        },
        {
          title: "Majhna nihanja in harmonična frekvenca",
          tex: h`\boxed{m\ddot\eta+U''(x_0)\eta=0,\qquad \omega_0=\sqrt{\frac{U''(x_0)}m},\qquad T_0=2\pi\sqrt{\frac m{U''(x_0)}}}`,
          plain: "Vsaka dovolj gladka stabilna jama je za majhne odmike približno idealna vzmet.",
          symbols: [
            { tex: h`\eta=x-x_0`, meaning: "odmik od ravnovesja" },
            { tex: h`\omega_0`, meaning: "kotna frekvenca v rad/s" },
            { tex: h`T_0`, meaning: "čas enega nihaja" }
          ],
          origin: [
            { text: "Uporabimo kvadratni približek potenciala.", tex: h`U\approx U(x_0)+\frac12U''(x_0)\eta^2` },
            { text: "Sila je minus odvod.", tex: h`F\approx-U''(x_0)\eta` },
            { text: "Newton da harmonično enačbo.", tex: h`m\ddot\eta=-U''(x_0)\eta` },
            { text: "Primerjamo z η¨+ω₀²η=0." }
          ],
          use: "Večja masa pomeni počasneje; bolj ukrivljena oziroma trša jama pomeni hitreje."
        },
        {
          title: "Najlažji primer: idealna vzmet",
          tex: h`\boxed{F=-kx,\qquad U=\frac12kx^2,\qquad \omega=\sqrt{\frac km},\qquad T=2\pi\sqrt{\frac mk}}`,
          plain: "Vzmet je natančno parabolični potencial. Zato je osnovni model vseh majhnih nihanj okoli stabilnega ravnovesja.",
          symbols: [
            { tex: h`k`, meaning: "konstanta vzmeti oziroma togost v N/m" },
            { tex: h`x`, meaning: "odmik od nenapete oziroma ravnovesne lege" },
            { tex: h`T`, meaning: "čas enega polnega nihaja" }
          ],
          origin: [
            { text: "Hookov zakon poda silo.", tex: h`F=-kx` },
            { text: "Integracija sile poda potencial.", tex: h`U(x)-U(0)=-\int_0^x(-k\xi)d\xi=\frac12kx^2` },
            { text: "Newtonova enačba postane harmonična.", tex: h`m\ddot x+kx=0` },
            { text: "Iz standardne rešitve preberemo frekvenco in periodo.", tex: h`x=A\cos(\omega t+\delta),\quad \omega^2=k/m` }
          ],
          use: "Če profesor želi konkreten primer, začni z vzmetjo, nato povej, da Taylorjev razvoj vsak gladek minimum lokalno spremeni v tak problem."
        },
        {
          title: "Primer: dvojna potencialna jama",
          tex: h`U(x)=\frac\alpha4x^4-\frac\beta2x^2,\qquad F(x)=\beta x-\alpha x^3`,
          plain: "Ta primer na enem grafu pokaže dva stabilna minimuma, nestabilni maksimum in separatriso.",
          symbols: [
            { tex: h`\alpha,\beta>0`, meaning: "konstanti; [α]=J/m⁴ in [β]=J/m²=N/m" },
            { tex: h`x_\pm=\pm\sqrt{\beta/\alpha}`, meaning: "stabilna minimuma" },
            { tex: h`x=0`, meaning: "nestabilni maksimum" }
          ],
          origin: [
            { text: "Ravnovesja dobimo iz U′=0.", tex: h`U'(x)=x(\alpha x^2-\beta)=0` },
            { text: "Drugi odvod razvrsti ekstreme.", tex: h`U''(0)=-\beta<0,\qquad U''(x_\pm)=2\beta>0` },
            { text: "Vrednost potenciala na dnu obeh jam.", tex: h`U(x_\pm)=-\frac{\beta^2}{4\alpha}` }
          ],
          use: "Pod vrhom pregrade je telo ujeto v eni jami; nad vrhom lahko prehaja med obema."
        }
      ],
      checkpoints: [
        "Znaš iz naklona U povedati smer sile?",
        "Znaš razložiti razliko med obračališčem in ravnovesjem?",
        "Znaš brez gledanja izpeljati energijo z množenjem z ẋ?",
        "Znaš pojasniti vsak člen Taylorjeve formule in zakaj linearni člen izgine?",
        "Znaš izpeljati periodo in povedati, zakaj je pred integralom faktor 2?"
      ]
    }
  };

  window.MECHANICS_EASY = Object.assign(window.MECHANICS_EASY || {}, topics);
})();
