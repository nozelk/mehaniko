(() => {
  "use strict";

  const h = String.raw;

  const boards = {
    straight: h`<svg class="focus-svg" viewBox="0 0 960 420" role="img" aria-labelledby="straight-board-title straight-board-desc">
      <title id="straight-board-title">Potencial, energija, dovoljena območja in harmonična aproksimacija</title>
      <desc id="straight-board-desc">Dvojna potencialna jama z energijsko črto, obračališči, stabilnimi minimumi, nestabilnim maksimumom ter približkom s parabolo.</desc>
      <defs>
        <marker id="arrow-coral-straight" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#ff806f"/></marker>
      </defs>
      <rect class="board-panel" x="18" y="18" width="662" height="376" rx="18"/>
      <text class="board-kicker" x="46" y="50">1 · IZ GRAFA PREBEREŠ CELOTNO GIBANJE</text>
      <path class="board-axis" d="M64 345 H650 M64 345 V70"/>
      <text class="board-label" x="33" y="74">U [J]</text><text class="board-label" x="625" y="368">x [m]</text>
      <path class="board-potential" d="M74 91 C126 95 139 304 229 304 C303 304 323 170 379 170 C437 170 454 304 535 304 C608 304 623 113 654 91"/>
      <path class="board-energy" d="M86 238 H642"/><text class="board-energy-text" x="610" y="228">E</text>
      <path class="board-separatrix" d="M86 170 H642"/><text class="board-amber-text" x="536" y="159">separatrisa</text>
      <path class="board-allowed" d="M161 345 H292 M468 345 H584"/><text class="board-green-text" x="169" y="378">dovoljeno: U ≤ E</text>
      <circle class="board-turn" cx="162" cy="238" r="6"/><circle class="board-turn" cx="294" cy="238" r="6"/>
      <circle class="board-turn" cx="466" cy="238" r="6"/><circle class="board-turn" cx="586" cy="238" r="6"/>
      <path class="board-guide" d="M162 238 V344 M294 238 V344"/>
      <text class="board-label" x="155" y="363">a</text><text class="board-label" x="288" y="363">b</text>
      <circle class="board-stable" cx="229" cy="304" r="6"/><circle class="board-stable" cx="535" cy="304" r="6"/>
      <circle class="board-unstable" cx="379" cy="170" r="6"/>
      <text class="board-green-text" x="195" y="324">stabilno</text><text class="board-red-text" x="345" y="145">nestabilno</text>
      <path class="board-force" d="M119 282 H153" marker-end="url(#arrow-coral-straight)"/>
      <path class="board-force" d="M337 214 H305" marker-end="url(#arrow-coral-straight)"/>
      <text class="board-coral-text" x="92" y="273">F = −U′</text>
      <text class="board-note" x="397" y="386">obrat: v = 0, toda navadno F ≠ 0</text>

      <rect class="board-panel" x="700" y="18" width="242" height="376" rx="18"/>
      <text class="board-kicker" x="724" y="50">2 · POVEČAJ MINIMUM</text>
      <path class="board-axis" d="M730 327 H918 M730 327 V90"/>
      <path class="board-potential" d="M738 124 C776 244 797 299 824 299 C852 299 873 244 911 124"/>
      <path class="board-harmonic" d="M748 153 Q824 443 900 153"/>
      <circle class="board-stable" cx="824" cy="299" r="6"/><path class="board-guide" d="M824 299 V327"/>
      <text class="board-label" x="812" y="349">x₀</text>
      <text class="board-amber-text" x="742" y="104">U(x)</text><text class="board-violet-text" x="742" y="181">kvadratni približek</text>
      <text class="board-note" x="721" y="356">U₀ = U(x₀)</text>
      <text class="board-formula" x="708" y="380">U ≈ U₀ + ½U″(x₀)(x−x₀)²</text>
    </svg>`,

    central: h`<svg class="focus-svg" viewBox="0 0 960 440" role="img" aria-labelledby="central-board-title central-board-desc">
      <title id="central-board-title">Geometrija centralne sile, ploščinski zakon in efektivni potencial</title>
      <desc id="central-board-desc">Eliptična orbita s silo proti centru in enakima ploščinama ter graf efektivnega potenciala z radialnima obračališčema in stabilno krožno orbito.</desc>
      <defs>
        <marker id="arrow-cyan-central" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#58d5f7"/></marker>
        <marker id="arrow-coral-central" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#ff806f"/></marker>
      </defs>
      <rect class="board-panel" x="18" y="18" width="442" height="398" rx="18"/>
      <text class="board-kicker" x="45" y="50">1 · GEOMETRIJA IN DVA INTEGRALA</text>
      <ellipse class="board-orbit" cx="244" cy="225" rx="171" ry="105" transform="rotate(-10 244 225)"/>
      <circle class="board-center" cx="167" cy="239" r="8"/><circle class="board-particle" cx="365" cy="153" r="7"/>
      <path class="board-radius" d="M167 239 L365 153" marker-end="url(#arrow-cyan-central)"/>
      <path class="board-force" d="M359 157 L301 182" marker-end="url(#arrow-coral-central)"/>
      <path class="board-velocity" d="M365 153 L400 202" marker-end="url(#arrow-cyan-central)"/>
      <path class="board-area board-area-one" d="M167 239 L101 180 A171 105 -10 0 1 136 136 Z"/>
      <path class="board-area board-area-two" d="M167 239 L389 273 A171 105 -10 0 1 362 319 Z"/>
      <text class="board-label" x="148" y="260">O</text><text class="board-label" x="372" y="148">m</text>
      <text class="board-cyan-text" x="257" y="180">r</text><text class="board-coral-text" x="300" y="174">F(r)eᵣ</text><text class="board-cyan-text" x="403" y="207">v</text>
      <text class="board-green-text" x="82" y="151">ΔA₁</text><text class="board-green-text" x="372" y="337">ΔA₂</text>
      <circle class="board-l-dot" cx="218" cy="84" r="15"/><circle class="board-l-core" cx="218" cy="84" r="4"/>
      <text class="board-violet-text" x="242" y="89">L ⟂ ravnina</text>
      <text class="board-formula" x="48" y="389">N = r×F = 0  ⇒  L = konst.  ⇒  Ȧ = L/(2m)</text>

      <rect class="board-panel" x="478" y="18" width="464" height="398" rx="18"/>
      <text class="board-kicker" x="505" y="50">2 · RADIALNO GIBANJE JE 1D</text>
      <path class="board-axis" d="M522 342 H913 M522 342 V78"/>
      <text class="board-label" x="498" y="82">Uₑ𝒻</text><text class="board-label" x="906" y="365">r</text>
      <path class="board-effective" d="M535 83 C548 118 567 229 612 276 C654 320 696 293 726 249 C764 192 810 178 910 174"/>
      <path class="board-bare-potential" d="M539 331 C568 267 617 215 690 195 C756 178 832 175 910 174"/>
      <path class="board-energy" d="M548 219 H907"/>
      <circle class="board-turn" cx="574" cy="219" r="6"/><circle class="board-turn" cx="750" cy="219" r="6"/>
      <path class="board-guide" d="M574 219 V341 M750 219 V341"/>
      <text class="board-label" x="560" y="363">r₋</text><text class="board-label" x="738" y="363">r₊</text>
      <circle class="board-stable" cx="676" cy="292" r="7"/><path class="board-guide" d="M676 292 V341"/>
      <text class="board-green-text" x="644" y="318">krožni tir</text><text class="board-energy-text" x="879" y="209">E</text>
      <text class="board-violet-text" x="785" y="158">Uₑ𝒻(r)</text><text class="board-coral-text" x="789" y="195">U(r)</text>
      <text class="board-violet-text" x="535" y="105">centrifugalna pregrada</text>
      <text class="board-formula" x="510" y="390">Uₑ𝒻(r) = U(r) + L²/(2mr²)</text>
    </svg>`,

    rigid: h`<svg class="focus-svg" viewBox="0 0 960 540" role="img" aria-labelledby="rigid-board-title rigid-board-desc">
      <title id="rigid-board-title">Togo telo: kinematika, vztrajnost, dinamika in kotaljenje</title>
      <desc id="rigid-board-desc">Štirje prikazi: translacija in rotacija telesa, glavne osi z nevzporednima omega in L, precesija proste vrtavke ter kotaljenje brez drsenja.</desc>
      <defs>
        <marker id="arrow-cyan-rigid" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#58d5f7"/></marker>
        <marker id="arrow-coral-rigid" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#ff806f"/></marker>
        <marker id="arrow-violet-rigid" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#9d83f4"/></marker>
      </defs>
      <rect class="board-panel" x="18" y="18" width="447" height="238" rx="18"/>
      <text class="board-kicker" x="43" y="49">1 · LEGA = TRANSLACIJA + ROTACIJA</text>
      <path class="board-body" d="M185 83 L325 68 L401 142 L354 220 L211 208 L143 147 Z"/>
      <circle class="board-center" cx="273" cy="151" r="7"/><circle class="board-particle" cx="365" cy="111" r="6"/>
      <path class="board-radius" d="M273 151 L365 111" marker-end="url(#arrow-cyan-rigid)"/>
      <path class="board-velocity" d="M273 151 L273 92" marker-end="url(#arrow-cyan-rigid)"/>
      <path class="board-force" d="M365 111 L389 165" marker-end="url(#arrow-coral-rigid)"/>
      <path class="board-omega" d="M273 151 L229 69" marker-end="url(#arrow-violet-rigid)"/>
      <text class="board-label" x="257" y="172">C</text><text class="board-label" x="375" y="106">P</text>
      <text class="board-cyan-text" x="312" y="124">ξₚ</text><text class="board-cyan-text" x="282" y="94">v꜀</text>
      <text class="board-coral-text" x="383" y="183">ω×ξₚ</text><text class="board-violet-text" x="209" y="68">ω</text>
      <text class="board-formula" x="42" y="239">vₚ = v꜀ + ω×ξₚ</text>

      <rect class="board-panel" x="483" y="18" width="459" height="238" rx="18"/>
      <text class="board-kicker" x="508" y="49">2 · RAZPORED MASE DOLOČA J</text>
      <ellipse class="board-ellipsoid" cx="695" cy="151" rx="120" ry="65" transform="rotate(-12 695 151)"/>
      <path class="board-axis" d="M555 151 H836 M695 229 V69 M620 203 L785 95"/>
      <circle class="board-center" cx="695" cy="151" r="6"/>
      <path class="board-omega" d="M695 151 L753 79" marker-end="url(#arrow-violet-rigid)"/>
      <path class="board-radius" d="M695 151 L806 112" marker-end="url(#arrow-cyan-rigid)"/>
      <text class="board-violet-text" x="746" y="73">ω</text><text class="board-cyan-text" x="811" y="111">L = Jω</text>
      <text class="board-red-text" x="551" y="222">na splošno L ∦ ω</text>
      <text class="board-formula" x="512" y="239">J = diag(J₁,J₂,J₃) v glavnih oseh</text>

      <rect class="board-panel" x="18" y="274" width="447" height="242" rx="18"/>
      <text class="board-kicker" x="43" y="305">3 · PROSTA VRTAVKA</text>
      <path class="board-radius" d="M242 487 L242 326" marker-end="url(#arrow-cyan-rigid)"/>
      <ellipse class="board-guide" cx="242" cy="356" rx="93" ry="29"/>
      <path class="board-body-axis" d="M242 487 L311 342" marker-end="url(#arrow-coral-rigid)"/>
      <path class="board-omega" d="M242 487 L288 332" marker-end="url(#arrow-violet-rigid)"/>
      <path class="board-precession" d="M177 373 C207 401 277 402 311 366" marker-end="url(#arrow-coral-rigid)"/>
      <text class="board-cyan-text" x="252" y="329">L = konst.</text><text class="board-coral-text" x="316" y="343">e₃</text>
      <text class="board-violet-text" x="292" y="331">ω</text><text class="board-coral-text" x="313" y="386">precesija</text>
      <text class="board-formula" x="42" y="500">N = 0 ⇒ L in Tᵣₒₜ sta konstantna</text>

      <rect class="board-panel" x="483" y="274" width="459" height="242" rx="18"/>
      <text class="board-kicker" x="508" y="305">4 · SISTEM TELES: DODAJ VEZI</text>
      <path class="board-ground" d="M520 469 H906"/><circle class="board-body" cx="697" cy="401" r="68"/>
      <circle class="board-center" cx="697" cy="401" r="7"/><circle class="board-contact" cx="697" cy="469" r="7"/>
      <path class="board-radius" d="M697 401 L814 401" marker-end="url(#arrow-cyan-rigid)"/>
      <path class="board-omega-arc" d="M655 370 A51 51 0 0 1 726 354" marker-end="url(#arrow-violet-rigid)"/>
      <text class="board-cyan-text" x="812" y="391">v꜀</text><text class="board-violet-text" x="732" y="350">ω</text>
      <text class="board-green-text" x="714" y="482">vₐ = 0</text>
      <text class="board-formula" x="510" y="500">kotaljenje: v꜀ = Rω; statično trenje ni nujno μN</text>
    </svg>`
  };

  const guides = [
    {
      number: "01",
      id: "premocrtno-potenciali",
      title: "Premočrtno gibanje s potenciali",
      short: "Iz ene krivulje U(x) prebereš dovoljeno gibanje, obrate, ravnovesja in periodo.",
      minutes: "7–8 min",
      accent: "#ff806f",
      intro: h`Premočrtno gibanje je sistem z eno prostostno stopnjo \(x(t)\). Če je sila odvisna samo od lege, jo opišemo s potencialom \(U(x)\), zato se drugi Newtonov zakon spremeni v energijski problem, ki ga lahko skoraj v celoti razberemo iz grafa.`,
      essence: h`Ključna ideja je \(\frac12m\dot x^2=E-U(x)\): razlika med celotno energijo in potencialom je kinetična energija.`,
      board: boards.straight,
      legend: [
        { color: "coral", label: "potencial U(x) in smer sile" },
        { color: "cyan", label: "izbrana celotna energija E" },
        { color: "green", label: "dovoljeno gibanje in stabilnost" },
        { color: "red", label: "nestabilno ravnovesje" },
        { color: "violet", label: "harmonični približek" }
      ],
      drawSteps: [
        { title: "Osi in potencial", body: h`Nariši osi \(x\) in \(U\), nato krivuljo z vsaj enim minimumom in maksimumom. Reci: »Naklon potenciala določa silo, \(F=-U'\).«` },
        { title: "Energijska črta", body: h`Z modro vodoravno črto nariši \(E\). Presečišča z \(U\) označi z \(a,b\): tam je \(E=U\), zato je \(\dot x=0\).` },
        { title: "Dovoljeno območje", body: h`Z zeleno poudari dele osi, kjer \(U\le E\). Kjer je \(U>E\), bi bila kinetična energija negativna, zato je območje klasično prepovedano.` },
        { title: "Ravnovesja", body: h`Ekstreme označi posebej: minimum je stabilen, maksimum nestabilen. Obvezno povej, da obračališče in ravnovesje nista ista stvar.` },
        { title: "Povečaj minimum", body: h`Ob minimumu skiciraj parabolo. To neposredno vodi do \(U\simeq U_0+\tfrac12U''(x_0)(x-x_0)^2\) in majhnih harmoničnih nihanj.` }
      ],
      opening: h`»Premočrtno gibanje opišem z eno koordinato \(x(t)\). Za konservativno silo, ki je odvisna samo od lege, uvedem potencial z zvezo \(F(x)=-U'(x)\). Newtonova enačba je zato \(m\ddot x=-U'(x)\). Če jo pomnožim z \(\dot x\), dobim ohranitev energije. Iz grafa potenciala nato brez reševanja diferencialne enačbe določim dovoljena območja, obračališča, ravnovesja in ali je gibanje vezano.«`,
      intuition: [
        { title: "Kaj potencial sploh je?", body: h`Potencial \(U(x)\) je energijska pokrajina. Telo se ne giblje po narisani krivulji; dejansko se giblje po osi \(x\). Višina krivulje samo pove, koliko energije je pri danem \(x\) shranjene kot potencialna energija.` },
        { title: "Zakaj sila kaže navzdol po potencialu?", body: h`Ker je \(F=-U'\). Če \(U\) z \(x\) narašča, je \(U'>0\) in sila kaže v negativno smer. Če \(U\) pada, sila kaže v pozitivno smer. Sistem zato potiska proti minimumu.` },
        { title: "Kaj pomeni E − U?", body: h`To je kinetična energija. Velika navpična razlika med črto \(E\) in krivuljo \(U\) pomeni veliko hitrost; v presečišču je razlika nič in telo se obrne.` },
        { title: "Vezano ali nevezano?", body: h`Če je dostopni del osi zaprt med dvema obračališčema, telo ostane ujeto in praviloma periodično niha. Če dovoljeno območje sega v neskončnost, lahko pobegne.` }
      ],
      flow: [
        {
          time: "0:00–0:45",
          title: "Definiraj model in potencial",
          say: h`Najprej jasno povej, da gre za eno koordinato in avtonomno konservativno silo. Referenčna vrednost potenciala ni fizikalno pomembna; pomembne so razlike in odvod.`,
          write: [h`m\ddot x=F(x),\qquad F(x)=-\frac{dU}{dx}`, h`U(x)=-\int^x F(\xi)\,d\xi+C`],
          meaning: h`Konstanta \(C\) ne spremeni sile. Znak minus pomeni, da sila kaže proti padanju potenciala.`
        },
        {
          time: "0:45–2:00",
          title: "Izpelji energijski integral brez preskoka",
          say: h`Newtonovo enačbo pomnožim z \(\dot x\). Na levi prepoznam časovni odvod kinetične energije, na desni pa minus časovni odvod potenciala. Zato je njuna vsota konstantna.`,
          write: [h`m\ddot x\,\dot x=-U'(x)\dot x`, h`\frac{d}{dt}\left(\frac12m\dot x^2\right)=-\frac{dU}{dt}`, h`\boxed{\frac12m\dot x^2+U(x)=E}`],
          meaning: h`To je prvi integral: diferencialno enačbo drugega reda smo znižali na enačbo prvega reda.`
        },
        {
          time: "2:00–3:20",
          title: "Iz grafa kvalitativno preberi gibanje",
          say: h`Ker je kinetična energija nenegativna, mora veljati \(E-U(x)\ge0\). Presečišča \(U=E\) so obračališča. Minimum potenciala je stabilno ravnovesje, maksimum pa nestabilno. Smer in velikost sile preberem iz naklona.`,
          write: [h`\dot x=\pm\sqrt{\frac{2}{m}[E-U(x)]}`, h`U(x)\le E`, h`U'(x_e)=0;\quad U''(x_e)>0\ \text{stabilno},\ U''(x_e)<0\ \text{nestabilno}`],
          meaning: h`V običajnem obračališču je \(\dot x=0\), vendar \(F=-U'\ne0\), zato se telo takoj začne gibati nazaj. V ravnovesju je poleg hitrosti nič tudi sila.`
        },
        {
          time: "3:20–4:15",
          title: "Pokaži, kako dobiš x(t)",
          say: h`Energijsko enačbo separiram. Predznak izberem glede na trenutno smer gibanja; ob obračališču ga zamenjam. Dobljeni integral je kvadratura in implicitno določa \(x(t)\).`,
          write: [h`dt=\pm\sqrt{\frac m2}\,\frac{dx}{\sqrt{E-U(x)}}`, h`\boxed{t-t_0=\pm\sqrt{\frac m2}\int_{x_0}^{x}\frac{d\xi}{\sqrt{E-U(\xi)}}}`],
          meaning: h`Ni nujno, da integral znamo izraziti z elementarnimi funkcijami; že ta zapis je rešitev po kvadraturi.`
        },
        {
          time: "4:15–5:10",
          title: "Izpelji periodo vezanega gibanja",
          say: h`Če sta \(a\) in \(b\) zaporedni obračališči, integral od \(a\) do \(b\) da le čas poti v eno smer, torej polovico periode. Zato ga pomnožim z dva.`,
          write: [h`\frac{T}{2}=\sqrt{\frac m2}\int_a^b\frac{dx}{\sqrt{E-U(x)}}`, h`\boxed{T(E)=\sqrt{2m}\int_a^b\frac{dx}{\sqrt{E-U(x)}}}`],
          meaning: h`Pri splošnem potencialu je perioda odvisna od energije oziroma amplitude. Korenasta singularnost v navadnem obračališču je integrabilna.`
        },
        {
          time: "5:10–6:25",
          title: "Majhna nihanja okoli stabilnega minimuma",
          say: h`Okoli stabilnega ravnovesja \(x_0\) potencial Taylorjevo razvijem. Linearni člen izgine, ker je \(U'(x_0)=0\). Pri majhnem odmiku \(\eta=x-x_0\) obdržim kvadratni člen in dobim harmonični oscilator.`,
          write: [h`U(x_0+\eta)\simeq U(x_0)+\frac12U''(x_0)\eta^2`, h`m\ddot\eta+U''(x_0)\eta=0`, h`\boxed{\omega_0=\sqrt{\frac{U''(x_0)}m},\qquad T_0=2\pi\sqrt{\frac m{U''(x_0)}}}`],
          meaning: h`Ukrivljenost potenciala \(U''(x_0)\) je efektivna togost: bolj ozka jama pomeni hitrejše nihanje.`
        },
        {
          time: "6:25–7:30",
          title: "Konkreten primer: dvojna jama",
          say: h`S primerom pokažem, da znam graf res uporabiti. Dvojna jama ima dva stabilna minimuma in nestabilno pregrado. Energija pod pregrado telo ujame v eni jami; nad pregrado prehaja med obema.`,
          write: [h`U(x)=\frac{\alpha}{4}x^4-\frac{\beta}{2}x^2,\qquad F=\beta x-\alpha x^3`, h`x=0\ \text{nestabilno},\qquad x_\pm=\pm\sqrt{\beta/\alpha}\ \text{stabilno}`, h`\omega_0=\sqrt{\frac{2\beta}{m}},\qquad T_0=2\pi\sqrt{\frac{m}{2\beta}}`],
          meaning: h`Pri \(U_{\min}<E<0\) je gibanje v eni jami; \(E=0\) je separatrisa; pri \(E>0\) telo prečka obe jami.`
        }
      ],
      traps: [
        h`Obračališče ni ravnovesje: pri prvem je le \(\dot x=0\), pri drugem mora veljati tudi \(U'=0\).`,
        h`Črta \(E\) ni dodatna sila in telo se ne giblje po krivulji \(U(x)\).`,
        h`Integral od \(a\) do \(b\) je polovica periode; za celo periodo potrebuješ faktor \(2\).`,
        h`Če je \(U''(x_0)=0\), test drugega odvoda ne odloči stabilnosti; pogledati je treba višje člene oziroma obliko grafa.`,
        h`Na separatrisi se telo nestabilnemu ravnovesju približuje neskončno dolgo, zato perioda divergira.`
      ],
      questions: [
        { q: "Zakaj lahko potencialu prištejemo konstanto?", a: h`Ker sila vsebuje le odvod: \(-d(U+C)/dx=-dU/dx\). Hkrati se za isto konstanto premakne številčna vrednost \(E\), gibanje pa ostane enako.` },
        { q: "Kje je hitrost največja?", a: h`Tam, kjer je \(E-U(x)\) največji, torej praviloma pri najnižjem dostopnem potencialu. Velja \(v=\sqrt{2(E-U)/m}\).` },
        { q: "Ali je vsako vezano gibanje periodično?", a: h`Za gladek enodimenzionalni konservativni potencial med dvema navadnima obračališčema da, razen posebnih mejnih primerov, kot je separatrisa z neskončnim časom.` },
        { q: "Kaj se zgodi, če je E manjša od minimuma U?", a: h`Ni nobene klasično dovoljene lege, ker bi morala biti kinetična energija negativna.` },
        { q: "Zakaj je minimum stabilen?", a: h`Majhen odmik povzroči povratno silo: \(F\simeq-U''(x_0)(x-x_0)\). Pri \(U''>0\) kaže nazaj proti ravnovesju.` },
        { q: "Kaj pomeni U″(x₀) = 0?", a: h`Test drugega odvoda je nedoločen. Pogledamo višje člene; na primer \(U=x^4\) ima kljub \(U''(0)=0\) stabilen ploščat minimum.` },
        { q: "Zakaj integral pri navadnem obračališču ostane končen?", a: h`Blizu preprostega obrata je \(E-U(x)\propto|x-a|\), zato integrand raste le kot \(1/\sqrt{|x-a|}\), kar je integrabilno.` },
        { q: "Kdaj harmonična aproksimacija odpove?", a: h`Ko odmik ni majhen in kubični ter višji Taylorjevi členi niso zanemarljivi; tedaj je perioda navadno odvisna od amplitude.` }
      ],
      closing: h`»Torej graf potenciala skupaj z energijo popolnoma določi kvalitativno gibanje: \(U\le E\) da dovoljene lege, \(U=E\) obrate, ekstremi dajo ravnovesja, kvadratura časovni potek, lokalna parabola ob minimumu pa harmonično frekvenco.«`,
      links: [
        { label: "Uradni sklop 3", href: "#/ustno/premocrtno-gibanje" },
        { label: "Predhodno: delo in energija", href: "#/ustno/dinamika-tocke" }
      ]
    },
    {
      number: "02",
      id: "centralna-sila",
      title: "Gibanje v polju centralne sile",
      short: "Ničelni navor ustvari ravninsko gibanje, ploščinski zakon in radialni efektivni potencial.",
      minutes: "9–10 min",
      accent: "#58d5f7",
      intro: h`Centralna sila je vedno usmerjena po zveznici s fiksnim centrom in njena velikost je odvisna samo od razdalje. Ta geometrija izniči navor, zato se ohranja vrtilna količina in tridimenzionalni problem postane ravninski ter nato radialno enodimenzionalen.`,
      essence: h`Veriga odgovora je: \(\vec F=F(r)\vec e_r\Rightarrow\vec N=0\Rightarrow\vec L=\text{konst.}\Rightarrow\) ravnina + enake ploščine \(\Rightarrow U_{\rm ef}(r)\Rightarrow\) orbita.`,
      board: boards.central,
      legend: [
        { color: "coral", label: "centralna sila in potencial" },
        { color: "cyan", label: "r, v in energija" },
        { color: "green", label: "enake ploščine in stabilni tir" },
        { color: "violet", label: "vrtilna količina ter centrifugalna pregrada" }
      ],
      drawSteps: [
        { title: "Center, točka in zveznica", body: h`Nariši center \(O\), točko \(P\), vektor \(\vec r\) in silo po isti premici proti ali stran od centra. Zraven napiši \(\vec F=F(r)\vec e_r\).` },
        { title: "Ravnina in vrtilna količina", body: h`Dodaj hitrost, nato \(\vec L=\vec r\times m\vec v\), pravokotno na ravnino. Ničelni navor ohrani smer \(\vec L\), zato \(\vec r\) ostaja v fiksni ravnini.` },
        { title: "Dva enaka ploščinska izseka", body: h`Na orbiti zasenči dve ploščini, pometeni v enakem času. Napiši \(\dot A=L/(2m)\); to je Keplerjev drugi zakon za vsako centralno silo.` },
        { title: "Graf efektivnega potenciala", body: h`Na novem grafu nariši \(U_{\rm ef}=U+L^2/(2mr^2)\), vodoravno energijo \(E\), radialni obračališči in minimum kot stabilni krožni tir.` },
        { title: "Če zahtevajo Keplerja", body: h`Pod orbito dodaj \(r=p/(1+\varepsilon\cos(\varphi-\varphi_0))\) in povej: \(\varepsilon<1\) elipsa, \(\varepsilon=1\) parabola, \(\varepsilon>1\) hiperbola. Center sile je v gorišču, ne v središču elipse.` }
      ],
      opening: h`»Centralno silo zapišem kot \(\vec F(\vec r)=F(r)\vec e_r\), torej je vzporedna z \(\vec r\). Zato je navor glede na center enak nič in vrtilna količina je konstantna. Ker je \(\vec r\cdot\vec L=0\), gibanje poteka v fiksni ravnini pravokotno na \(\vec L\). V polarnih koordinatah ohranitev \(L=mr^2\dot\varphi\) da ploščinski zakon, energija pa se reducira na enodimenzionalno radialno gibanje v efektivnem potencialu.«`,
      intuition: [
        { title: "Kaj pomeni centralna?", body: h`Ne pomeni samo »privlačna«. Sila je lahko privlačna ali odbojna; bistveno je, da leži na radialni premici in je njena velikost funkcija \(r\).` },
        { title: "Zakaj nastane ravnina?", body: h`Konstantni vektor \(\vec L\) določi fiksno normalo. Ker je \(\vec r\cdot\vec L=0\) v vsakem trenutku, vsi položaji ležijo v isti ravnini skozi center.` },
        { title: "Kaj je centrifugalna pregrada?", body: h`Člen \(L^2/(2mr^2)\) ni nov pravi potencial sile. Je obodni del kinetične energije, ki ga po ohranitvi \(L\) zapišemo kot funkcijo \(r\); pri \(L\ne0\) močno naraste ob \(r\to0\).` },
        { title: "Zakaj je problem skoraj 1D?", body: h`Najprej rešimo radialno enačbo za \(r(t)\) kot premočrtni problem v \(U_{\rm ef}\). Nato kot dobimo iz \(\dot\varphi=L/(mr^2)\).` }
      ],
      flow: [
        {
          time: "0:00–1:10",
          title: "Definicija in ohranitev vrtilne količine",
          say: h`Sila je radialna, zato ima glede na center ničelni navor. Odvajam \(\vec L\); prvi križni člen izgine, drugi je navor, ki je prav tako nič.`,
          write: [h`\vec F=F(r)\vec e_r=-U'(r)\vec e_r`, h`\dot{\vec L}=\dot{\vec r}\times m\dot{\vec r}+\vec r\times m\ddot{\vec r}=\vec r\times\vec F=\vec0`, h`\boxed{\vec L=\vec r\times m\dot{\vec r}=\text{konst.}}`],
          meaning: h`Če je \(L\ne0\), smer \(\vec L\) določi ravnino gibanja. Če je \(L=0\), je gibanje radialno po premici skozi center.`
        },
        {
          time: "1:10–2:00",
          title: "Izpelji ploščinski zakon",
          say: h`V kratkem času vektor \(\vec r\) pomete trikotnik s ploščino \(\tfrac12|\vec r\times d\vec r|\). Časovni odvod je zato neposredno povezan z vrtilno količino.`,
          write: [h`dA=\frac12|\vec r\times d\vec r|`, h`\boxed{\dot A=\frac12|\vec r\times\vec v|=\frac{L}{2m}=\text{konst.}}`, h`L=mr^2\dot\varphi`],
          meaning: h`V enakih časih so pometene enake ploščine. Blizu centra je zato kotna hitrost večja, daleč od centra manjša.`
        },
        {
          time: "2:00–3:00",
          title: "Dokaži ohranitev energije",
          say: h`Centralna sila brez eksplicitne časovne odvisnosti je potencialna. Skalarni produkt Newtonove enačbe s hitrostjo oziroma neposreden odvod energije da nič.`,
          write: [h`E=\frac12m|\dot{\vec r}|^2+U(r)`, h`\dot E=m\vec v\cdot\vec a+U'(r)\dot r=[F(r)+U'(r)]\dot r=0`, h`\boxed{E=\text{konst.}}`],
          meaning: h`Osnovna integrala gibanja sta \(\vec L\) in \(E\): prvi določi geometrijo ravnine, drugi dostopne razdalje.`
        },
        {
          time: "3:00–4:25",
          title: "Reduciraj na radialno premočrtno gibanje",
          say: h`Hitrost v polarnih koordinatah razcepim na radialni in obodni del. Iz \(L=mr^2\dot\varphi\) izločim kotno hitrost in obodno kinetično energijo prepišem kot funkcijo \(r\).`,
          write: [h`E=\frac12m\dot r^2+\frac12mr^2\dot\varphi^2+U(r),\qquad \dot\varphi=\frac{L}{mr^2}`, h`\boxed{\frac12m\dot r^2+U_{\rm ef}(r)=E}`, h`\boxed{U_{\rm ef}(r)=U(r)+\frac{L^2}{2mr^2}}`, h`t-t_0=\pm\sqrt{\frac m2}\int_{r_0}^{r}\frac{ds}{\sqrt{E-U_{\rm ef}(s)}}`],
          meaning: h`Radialno dovoljeno območje je \(U_{\rm ef}\le E\); presečišča so periapsida in apoapsida. Tam je \(\dot r=0\), vendar tangencialna hitrost praviloma ni nič.`
        },
        {
          time: "4:25–5:10",
          title: "Krožni tir in stabilnost",
          say: h`Na krožnem tiru je \(r=r_c\) konstanten, zato mora biti radialna koordinata v ravnovesju efektivnega potenciala. Minimum da stabilen krog, maksimum nestabilnega.`,
          write: [h`U_{\rm ef}'(r_c)=0,\qquad E=U_{\rm ef}(r_c)`, h`U_{\rm ef}''(r_c)>0\ \Rightarrow\ \text{stabilen krožni tir}`, h`m\ddot r=-\frac{dU_{\rm ef}}{dr}`],
          meaning: h`Majhna radialna motnja okoli minimuma povzroči radialno nihanje. Graf \(U_{\rm ef}\) je isti jezik kot pri premočrtnem gibanju.`
        },
        {
          time: "5:10–6:35",
          title: "Izpelji Binetovo enačbo",
          say: h`Za obliko orbite odpravim čas in uvedem \(u(\varphi)=1/r\). Črtica od tu naprej pomeni odvod po \(\varphi\). Iz ohranitve specifične vrtilne količine \(C_0=L/m\) dobim radialno hitrost in pospešek.`,
          write: [h`C_0=r^2\dot\varphi,\quad \dot\varphi=C_0u^2,\quad \dot r=-C_0u'`, h`\ddot r-r\dot\varphi^2=-C_0^2u^2(u''+u)`, h`\boxed{u''+u=-\frac{F(1/u)}{mC_0^2u^2}=-\frac{mF(1/u)}{L^2u^2}}`],
          meaning: h`Binetova enačba neposredno pove \(r(\varphi)\), torej geometrijsko obliko orbite, brez vmesnega računanja časa.`
        },
        {
          time: "6:35–7:45",
          title: "Keplerjev problem F = −k/r²",
          say: h`Pri privlačni sili \(1/r^2\) se desna stran Binetove enačbe spremeni v konstanto. Rešitev je konstanta plus kosinus, kar da stožnico z žariščem v centru sile.`,
          write: [h`F(r)=-\frac{k}{r^2}=-ku^2,\qquad u''+u=\frac{mk}{L^2}`, h`\boxed{r(\varphi)=\frac{p}{1+\varepsilon\cos(\varphi-\varphi_0)},\qquad p=\frac{L^2}{mk}}`, h`\varepsilon^2=1+\frac{2EL^2}{mk^2}`],
          meaning: h`Za gravitacijo je \(k=GMm\). \(\varepsilon<1\) da elipso, \(\varepsilon=1\) parabolo, \(\varepsilon>1\) hiperbolo; krog je \(\varepsilon=0\).`
        },
        {
          time: "7:45–9:00",
          title: "Poveži tri Keplerjeve zakone",
          say: h`Prvi zakon je oblika rešitve — elipsa s centralno maso v gorišču. Drugi je ploščinski zakon. Tretjega dobim iz ploščine elipse in konstantne ploščinske hitrosti.`,
          write: [h`A_{\rm elipse}=\pi ab,\qquad T=\frac{A}{\dot A}=\frac{2\pi abm}{L}`, h`p=\frac{b^2}{a}=\frac{L^2}{GMm^2}`, h`\boxed{T^2=\frac{4\pi^2}{GM}a^3}`],
          meaning: h`Za natančen problem dveh primerljivih mas nadomestimo \(GM\) z \(G(M+m)\). Drugi zakon velja za vsako centralno silo; prvi in tretji v tej obliki za gravitacijo \(1/r^2\).`
        }
      ],
      traps: [
        h`Centralna sila ni nujno privlačna; definira jo radialna smer in odvisnost velikosti samo od \(r\).`,
        h`Ohranja se prostorski vektor \(\vec L\), ne nujno kotna hitrost \(\dot\varphi\).`,
        h`\(U_{\rm ef}\) ni dodatni fizični potencial; vsebuje prepisan obodni del kinetične energije.`,
        h`Pri Binetu črtica pomeni odvod po kotu \(\varphi\), ne po času.`,
        h`Sonce oziroma center sile je v gorišču elipse, ne v njenem geometrijskem središču.`,
        h`»Redukcija na premočrtno gibanje« pomeni eno radialno koordinato \(r\ge0\), ne da je dejanska orbita premica.`
      ],
      questions: [
        { q: "Ali je vsaka centralna sila konservativna?", a: h`Če je \(\vec F=F(r)\vec e_r\) brez eksplicitne časovne odvisnosti, ji lahko priredimo \(U(r)=-\int F(r)\,dr\). Če je velikost odvisna tudi od časa, centralna smer sama ne zagotovi ohranitve energije.` },
        { q: "Kaj se zgodi pri L = 0?", a: h`Centrifugalni člen izgine in gibanje je čisto radialno po premici skozi center. Pri singularnem privlačnem potencialu je tedaj možen padec v center.` },
        { q: "Kako iz grafa Uef določiš krožno orbito?", a: h`Krog je ravnovesje radialnega gibanja: \(U_{\rm ef}'(r_c)=0\) in \(E=U_{\rm ef}(r_c)\). Stabilen je, če je tam minimum, torej \(U_{\rm ef}''(r_c)>0\).` },
        { q: "Zakaj je planet v periheliju najhitrejši?", a: h`Ker je \(\dot A=\tfrac12r^2\dot\varphi\) konstantna. Ko je \(r\) manjši, mora biti \(\dot\varphi\) večja; iz energije je večja tudi skupna hitrost.` },
        { q: "Ali telo v radialnem obračališču miruje?", a: h`Ne. Nič je le \(\dot r\); tangencialna hitrost \(v_\varphi=L/(mr)\) je pri \(L\ne0\) neničelna.` },
        { q: "Kako energija določi tip Keplerjeve orbite?", a: h`Za \(U=-k/r\): \(E<0\) pomeni elipso, \(E=0\) parabolo, \(E>0\) hiperbolo. Velja \(\varepsilon=\sqrt{1+2EL^2/(mk^2)}\).` },
        { q: "Kaj je apsida?", a: h`Radialno obračališče, kjer je \(\dot r=0\) in \(E=U_{\rm ef}\). Najbližja je periapsida, najbolj oddaljena apoapsida.` },
        { q: "Ali je orbita vedno zaprta?", a: h`Ne. Po Bertrandovem izreku so vse vezane orbite zaprte le za potenciala \(U\propto r^2\) in \(U\propto-1/r\). Pri splošnem potencialu orbita navadno precesira.` },
        { q: "Ali obstaja pri Keplerjevem problemu še en integral?", a: h`Da, Laplace–Runge–Lenzov vektor. Kaže proti periapsidi, njegova velikost pa je povezana z ekscentričnostjo. Za osnovni odgovor navadno zadostujeta \(E\) in \(\vec L\).` }
      ],
      closing: h`»Centralnost najprej izniči navor in ohrani \(\vec L\). To da ravnino ter ploščinski zakon. Energija in \(L\) nato skrčita problem na radialno gibanje v \(U_{\rm ef}\), Binetova enačba pa radialni zakon pretvori v geometrijsko obliko orbite. Za gravitacijo dobimo Keplerjeve stožnice in vse tri Keplerjeve zakone.«`,
      links: [
        { label: "Uradni sklop 4", href: "#/ustno/centralna-sila" },
        { label: "Ponovi polarni pospešek", href: "#/ustno/kinematika-tocke" }
      ]
    },
    {
      number: "03",
      id: "togo-telo",
      title: "Togo telo",
      short: "Translacija + rotacija, vztrajnostni tenzor, Eulerjeve enačbe, prosta vrtavka in vezi.",
      minutes: "10–12 min",
      accent: "#9d83f4",
      intro: h`Togo telo je sistem točk s stalnimi medsebojnimi razdaljami. Zato splošnega gibanja ne opisujemo za vsako točko posebej: translacijo predstavlja masno središče, rotacijo kotna hitrost, vpliv razporeditve mase pa vztrajnostni tenzor.`,
      essence: h`Celotna zgodba je: geometrija \(\Rightarrow \vec v_P=\vec V_C+\vec\omega\times\vec\xi_P\); masa \(\Rightarrow\vec L_C=J_C\vec\omega\); dinamika \(\Rightarrow M\vec a_C=\vec F\) in \(J\dot{\vec\omega}+\vec\omega\times J\vec\omega=\vec N\).`,
      board: boards.rigid,
      legend: [
        { color: "cyan", label: "translacija, položaj in L" },
        { color: "coral", label: "rotacijski prispevek ter telesna os" },
        { color: "violet", label: "kotna hitrost in glavne osi" },
        { color: "green", label: "izpolnjen vezni pogoj" }
      ],
      drawSteps: [
        { title: "Nariši telo, C in P", body: h`Izberi masno središče \(C\), poljubno točko \(P\) in \(\vec\xi_P=\vec r_P-\vec r_C\). Dodaj translacijsko hitrost \(\vec v_C\), os \(\vec\omega\) in tangentni člen \(\vec\omega\times\vec\xi_P\).` },
        { title: "Dodaj glavne osi", body: h`Skozi \(C\) nariši tri glavne osi in napiši \(J=\operatorname{diag}(J_1,J_2,J_3)\). Nariši \(\vec\omega\) in \(\vec L=J\vec\omega\) v različnih smereh.` },
        { title: "Pojasni nevzporednost", body: h`Komponente \(\omega_i\) se množijo z različnimi \(J_i\), zato se smer vektorja spremeni. Vzporedna sta le na glavni osi ali pri sfernem telesu.` },
        { title: "Nariši prosto vrtavko", body: h`V prostoru naj bo \(\vec L\) navpičen in fiksen; telesna os \(\vec e_3\) naj okoli njega zariše stožec. Tako vizualno ločiš stalni \(\vec L\) od spremenljivih telesnih komponent.` },
        { title: "Če vprašajo sistem teles", body: h`Dodaj kolo na podlagi, označi stik \(A\) in napiši \(\vec v_A=0\). Za vsako telo napišemo Newton–Euler ter dodamo reakcije in vezne pogoje.` }
      ],
      opening: h`»Togo telo je idealiziran sistem, pri katerem so razdalje med poljubnima materialnima točkama konstantne. Njegovo splošno gibanje razcepim na translacijo masnega središča in rotacijo okoli njega, zato ima v prostoru šest prostostnih stopenj. Kinematiko določa \(\vec v_P=\vec V_C+\vec\omega\times\vec\xi_P\), razpored mase opiše vztrajnostni tenzor \(J\), dinamiko pa Newtonova enačba za masno središče ter izrek o vrtilni količini oziroma Eulerjeve enačbe.«`,
      intuition: [
        { title: "Kaj pomeni togo?", body: h`Ne pomeni, da telo miruje ali se samo vrti. Pomeni le, da se notranja geometrija ne deformira: \(|\vec r_P-\vec r_Q|=\text{konst.}\).` },
        { title: "Kaj je ω?", body: h`Kotna hitrost je en sam vektor, ki v danem trenutku opiše rotacijski del hitrosti vseh točk. Smer je trenutna os vrtenja, velikost pa hitrost vrtenja v radianih na sekundo.` },
        { title: "Kaj meri J?", body: h`Vztrajnostni tenzor je rotacijski analog mase, vendar je smerno odvisen. Masa daleč od izbrane osi močneje prispeva, zato je telo okoli različnih osi različno težko zavrteti.` },
        { title: "Kinematika proti dinamiki", body: h`Kinematika pove, kako so povezane lege, hitrosti in pospeški točk. Dinamika šele pove, kako sile in navori spreminjajo \(\vec V_C\) ter \(\vec\omega\).` }
      ],
      flow: [
        {
          time: "0:00–1:15",
          title: "Definicija, šest prostostnih stopenj in lega",
          say: h`Izberem masno središče \(C\) in na telo pritrjen koordinatni sistem. Koordinate \(\vec\rho_P\) materialne točke v telesnem sistemu so konstantne, orientacijo telesa pa poda rotacijska matrika \(Q(t)\).`,
          write: [h`|\vec r_P-\vec r_Q|=\text{konst.}`, h`\boxed{\vec r_P(t)=\vec R_C(t)+Q(t)\vec\rho_P}`, h`Q^TQ=I,\qquad \det Q=1`],
          meaning: h`Tri komponente \(\vec R_C\) opisujejo translacijo, trije parametri rotacije \(Q\) orientacijo: skupaj šest prostostnih stopenj.`
        },
        {
          time: "1:15–2:40",
          title: "Izpelji hitrost in pospešek poljubne točke",
          say: h`Za vektor \(\vec\xi_P=Q\vec\rho_P\), ki je pritrjen na telo, velja transportno pravilo \(\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P\). Enkrat in dvakrat odvajam lego.`,
          write: [h`\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P`, h`\boxed{\vec v_P=\vec V_C+\vec\omega\times\vec\xi_P}`, h`\boxed{\vec a_P=\vec a_C+\dot{\vec\omega}\times\vec\xi_P+\vec\omega\times(\vec\omega\times\vec\xi_P)}`],
          meaning: h`V pospešku so translacijski, tangencialni in normalni oziroma centripetalni člen. Coriolisovega člena ni, ker je \(P\) pritrjena na telo in nima relativne hitrosti.`
        },
        {
          time: "2:40–4:20",
          title: "Vztrajnostni tenzor in njegov pomen",
          say: h`Vrtilno količino glede na masno središče izračunam iz \(\vec v_{\rm rel}=\vec\omega\times\vec\xi\). Z vektorskim trojnim produktom dobim linearno preslikavo med \(\vec\omega\) in \(\vec L_C\); to preslikavo imenujem vztrajnostni tenzor.`,
          write: [h`\vec L_C=\int\vec\xi\times(\vec\omega\times\vec\xi)\,dm`, h`\vec\xi\times(\vec\omega\times\vec\xi)=|\vec\xi|^2\vec\omega-(\vec\xi\cdot\vec\omega)\vec\xi`, h`\boxed{J_C=\int\left(|\vec\xi|^2I-\vec\xi\otimes\vec\xi\right)dm,\qquad \vec L_C=J_C\vec\omega}`, h`J_{ij}=\int(\xi^2\delta_{ij}-\xi_i\xi_j)\,dm,\qquad \vec L=(J_1\omega_1,J_2\omega_2,J_3\omega_3)`],
          meaning: h`Ker je \(J\) simetričen, obstajajo ortogonalne glavne osi, kjer je diagonalna matrika. Na splošno \(\vec L\) ni vzporeden z \(\vec\omega\).`
        },
        {
          time: "4:20–5:15",
          title: "Pojasni glavni moment, energijo in Steinerja",
          say: h`Za os z enotskim vektorjem \(\vec e\) je moment integral kvadrata pravokotne razdalje mase od osi. Kinetična energija se razcepi na translacijo in rotacijo. Za vzporedni premik pola uporabim Steinerja.`,
          write: [h`J_{\vec e}=\vec e\cdot J\vec e=\int r_\perp^2\,dm`, h`\boxed{T=\frac12M V_C^2+\frac12\vec\omega\cdot J_C\vec\omega}`, h`\boxed{J_O=J_C+M\left(d^2I-\vec d\otimes\vec d\right)}`],
          meaning: h`Masa dvakrat dlje od osi prispeva štirikrat več. Skalarno za vzporedni osi velja \(J_O=J_C+Md_\perp^2\).`
        },
        {
          time: "5:15–6:40",
          title: "Newton–Eulerjeva dinamika",
          say: h`Zdaj jasno preidem iz kinematike v dinamiko. Translacijo vodi rezultanta zunanjih sil. Rotacijo glede na masno središče vodi zunanji navor. Za prehod iz prostora v vrteče telesne osi uporabim transportno pravilo.`,
          write: [h`\boxed{M\vec a_C=\vec F^{\rm ext}}`, h`\left(\frac{d\vec A}{dt}\right)_{\rm prostor}=\left(\frac{d\vec A}{dt}\right)_{\rm telo}+\vec\omega\times\vec A`, h`\boxed{J\dot{\vec\omega}+\vec\omega\times(J\vec\omega)=\vec N_C}`],
          meaning: h`V telesnem sistemu je \(J\) konstanten; dodatni križni člen nastane zato, ker se sama baza vrti. Standardna oblika velja glede na masno središče ali fiksen pol.`
        },
        {
          time: "6:40–7:35",
          title: "Eulerjeve enačbe v glavnih oseh",
          say: h`V glavnih oseh je \(J\) diagonalna, zato vektorsko enačbo razpišem po komponentah.`,
          write: [h`J_1\dot\omega_1+(J_3-J_2)\omega_2\omega_3=N_1`, h`J_2\dot\omega_2+(J_1-J_3)\omega_3\omega_1=N_2`, h`J_3\dot\omega_3+(J_2-J_1)\omega_1\omega_2=N_3`],
          meaning: h`Komponente \(\omega_i\) in \(N_i\) morajo biti zapisane v istem telesnem sistemu glavnih osi.`
        },
        {
          time: "7:35–9:15",
          title: "Prosta vrtavka",
          say: h`Pri prosti vrtavki je zunanji navor nič. V prostoru sta zato konstantna \(\vec L\) in rotacijska energija, vendar \(\vec\omega\) na splošno ni konstanten. Za simetrično telo je \(\omega_3\) stalna, prečni komponenti pa krožita.`,
          write: [h`\vec N=0\Rightarrow \vec L=\text{konst.},\quad T_{\rm rot}=\frac12\vec\omega\cdot J\vec\omega=\text{konst.}`, h`L^2=\sum_iJ_i^2\omega_i^2,\qquad 2T_{\rm rot}=\sum_iJ_i\omega_i^2`, h`J_1=J_2=J_\perp:\quad \dot\omega_3=0,\qquad \Omega_b=\frac{J_3-J_\perp}{J_\perp}\omega_3`, h`\dot{\vec e}_3=\frac{\vec L}{J_\perp}\times\vec e_3,\qquad \Omega_s=\frac{L}{J_\perp}`],
          meaning: h`Telesna frekvenca \(\Omega_b\) opisuje kroženje komponent \(\vec\omega\) v telesu; \(\Omega_s\) opisuje prostorsko precesijo osi okoli \(\vec L\). To nista ista pojava.`
        },
        {
          time: "9:15–10:00",
          title: "Stabilnost vrtenja",
          say: h`Če so \(J_1<J_2<J_3\), je čisto vrtenje okoli osi z najmanjšim ali največjim momentom stabilno, okoli srednje osi pa nestabilno — efekt teniškega loparja.`,
          write: [h`J_1<J_2<J_3:\qquad e_1,e_3\ \text{stabilni},\quad e_2\ \text{nestabilna}`, h`\omega_2=\Omega,\ \omega_1=\eta_1,\ \omega_3=\eta_3:\quad \ddot\eta_1=\frac{(J_3-J_2)(J_2-J_1)}{J_1J_3}\Omega^2\eta_1`],
          meaning: h`Koeficient pri srednji osi je pozitiven, zato motnja eksponentno raste. Pri skrajnih oseh dobi ustrezna linearizirana enačba negativen koeficient in omejeno osciliranje.`
        },
        {
          time: "10:00–11:20",
          title: "Sistem togih teles in kotaljenje",
          say: h`Pri več telesih za vsako posebej napišem translacijsko ter rotacijsko enačbo, nato dodam sile stikov, akcijo–reakcijo in kinematične pogoje vezi. Za primer lahko pokažem valj na klancu.`,
          write: [h`M_\alpha\vec a_{C_\alpha}=\vec F_\alpha,\qquad J_\alpha\dot{\vec\omega}_\alpha+\vec\omega_\alpha\times J_\alpha\vec\omega_\alpha=\vec N_\alpha`, h`ma=mg\sin\beta-F,\quad J_C\dot\omega=FR,\quad a=R\dot\omega`, h`\boxed{a=\frac{g\sin\beta}{1+J_C/(mR^2)}}`],
          meaning: h`Pogoj kotaljenja je \(\vec v_A=0\). Statično trenje je neznana reakcija in ni avtomatično \(\mu_sN\); po rešitvi samo preverimo \(|F_t|\le\mu_sN\).`
        }
      ],
      traps: [
        h`Togo telo ima šest, ne devet prostostnih stopenj; devet elementov \(Q\) omejujejo pogoji \(Q^TQ=I\) in \(\det Q=1\).`,
        h`Točka, pritrjena na telo, ima v telesnem sistemu nič relativne hitrosti, v prostoru pa praviloma ne miruje.`,
        h`\(\vec L\) in \(\vec\omega\) nista nujno vzporedna. Vzporedna sta pri vrtenju okoli glavne osi ali če je \(J\) sorazmeren identiteti.`,
        h`V Eulerjevi enačbi morajo biti \(J,\vec\omega,\vec N\) izraženi glede na isti pol in v isti bazi.`,
        h`Brez zunanjega navora je konstanten \(\vec L\) v prostoru, ne nujno \(\vec\omega\).`,
        h`Kotaljenje brez drsenja ne pomeni, da je stik materialno ves čas ista točka, niti da je trenje vedno \(\mu N\).`
      ],
      questions: [
        { q: "Zakaj ima togo telo šest prostostnih stopenj?", a: h`Tri določijo lego izbrane točke oziroma masnega središča, tri pa orientacijo telesa. Rotacijska matrika ima devet elementov, a ortogonalnostni pogoji pustijo tri neodvisne parametre.` },
        { q: "Kdaj sta L in ω vzporedna?", a: h`Ko je \(\vec\omega\) lastni vektor tenzorja \(J\), torej leži na glavni osi, ali ko je telo sferno simetrično in \(J_1=J_2=J_3\).` },
        { q: "Zakaj pri hitrosti ni člena ω na kvadrat?", a: h`Ker hitrost dobimo z enim odvodom. Kvadratni centripetalni člen \(\vec\omega\times(\vec\omega\times\vec\xi)\) nastane šele pri drugem odvodu, v pospešku.` },
        { q: "Zakaj je J v telesnem sistemu konstanten?", a: h`Ker so gostota in telesne koordinate vseh masnih elementov v tem sistemu stalne. V prostorskem sistemu se njegove komponente z orientacijo telesa spreminjajo.` },
        { q: "Je J pozitivno definiten?", a: h`Velja \(\vec a\cdot J\vec a=\int|\vec a\times\vec\xi|^2dm\ge0\). Za običajno tridimenzionalno telo je pozitivno definiten; v degeneriranih primerih je lahko semidefiniten.` },
        { q: "Kaj je fizikalni pomen glavnih osi?", a: h`To so lastne smeri tenzorja \(J\). V njih je tenzor diagonalen; če telo vrti okoli ene izmed njih, je \(\vec L\parallel\vec\omega\).` },
        { q: "Kaj se ohranja pri prosti vrtavki?", a: h`Prostorski vektor vrtilne količine \(\vec L\), njegova velikost in rotacijska energija. Komponente \(\omega_i\) v telesu se lahko kljub temu spreminjajo.` },
        { q: "Zakaj je srednja os nestabilna?", a: h`Linearizacija Eulerjevih enačb okoli vrtenja po srednji osi da eksponentno rastočo motnjo, medtem ko pri skrajnih oseh dobimo omejeno osciliranje.` },
        { q: "Glede na kateri pol velja Eulerjeva enačba?", a: h`V navedeni standardni obliki glede na masno središče ali fiksen pol. Pri poljubnem pospešujočem polu nastanejo dodatni členi.` },
        { q: "Ali statično trenje pri kotaljenju opravlja delo?", a: h`Na nepremični podlagi je trenutna hitrost stične točke nič, zato idealno statično trenje ne opravlja moči. Njegova velikost pa se določi iz enačb in je le omejena z \(\mu_sN\).` }
      ],
      closing: h`»Togo telo zato rešujem v treh plasteh: kinematika razcepi gibanje na \(\vec R_C\) in rotacijo, tenzor \(J\) kodira razpored mase, Newton–Eulerjeve enačbe pa povežejo sile in navore z gibanjem. Pri več telesih tem enačbam dodam še reakcije in vezne pogoje.«`,
      links: [
        { label: "Uradni sklop 7: kinematika", href: "#/ustno/kinematika-togega-telesa" },
        { label: "Uradni sklop 8: dinamika", href: "#/ustno/dinamika-togega-telesa" }
      ]
    }
  ];

  window.MECHANICS_FOCUS = guides;
})();
