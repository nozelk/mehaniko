(() => {
  "use strict";

  const h = String.raw;

  const boards = {
    straight: h`<svg class="focus-svg" viewBox="0 0 960 500" role="img" aria-labelledby="straight-board-title straight-board-desc">
      <title id="straight-board-title">Potencial, energija, dovoljena območja in harmonična aproksimacija</title>
      <desc id="straight-board-desc">Čista izpitna skica dvojne potencialne jame z energijsko črto, štirimi obračališči, stabilnimi minimumi, nestabilnim maksimumom in lokalno parabolo.</desc>
      <defs>
        <marker id="arrow-coral-straight" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#ff806f"/></marker>
      </defs>

      <rect class="board-panel" x="18" y="18" width="622" height="464" rx="18"/>
      <text class="board-kicker" x="44" y="50">1 · IZ GRAFA PREBEREŠ CELOTNO GIBANJE</text>
      <path class="board-axis" d="M62 410 H616 M62 410 V78"/>
      <text class="board-label" x="32" y="82">U [J]</text>
      <text class="board-label" x="590" y="433">x [m]</text>

      <path class="board-potential" d="M76 96 C112 96 123 258 145 258 C159 258 177 322 212 322 C251 322 276 258 310 258 C326 258 332 184 354 184 C376 184 382 258 400 258 C432 258 455 322 498 322 C535 322 551 258 566 258 C591 258 593 113 612 96"/>
      <path class="board-energy" d="M84 258 H614"/>
      <text class="board-energy-text" x="596" y="246">E</text>
      <path class="board-separatrix" d="M84 184 H614"/>
      <text class="board-amber-text" x="510" y="171">E = U maksimuma</text>

      <path class="board-allowed" d="M145 410 H310 M400 410 H566"/>
      <text class="board-green-text" x="191" y="397">U(x) ≤ E</text>
      <text class="board-green-text" x="443" y="397">U(x) ≤ E</text>
      <path class="board-guide" d="M145 258 V409 M310 258 V409 M400 258 V409 M566 258 V409"/>
      <circle class="board-turn" cx="145" cy="258" r="6"/>
      <circle class="board-turn" cx="310" cy="258" r="6"/>
      <circle class="board-turn" cx="400" cy="258" r="6"/>
      <circle class="board-turn" cx="566" cy="258" r="6"/>
      <text class="board-label" x="139" y="431">a</text>
      <text class="board-label" x="304" y="431">b</text>
      <text class="board-label" x="394" y="431">c</text>
      <text class="board-label" x="560" y="431">d</text>

      <circle class="board-stable" cx="212" cy="322" r="6"/>
      <circle class="board-stable" cx="498" cy="322" r="6"/>
      <circle class="board-unstable" cx="354" cy="184" r="6"/>
      <text class="board-green-text" x="175" y="347">minimum: stabilno</text>
      <text class="board-green-text" x="460" y="347">minimum: stabilno</text>
      <text class="board-red-text" x="312" y="158">maksimum: nestabilno</text>

      <path class="board-force" d="M105 220 H148" marker-end="url(#arrow-coral-straight)"/>
      <text class="board-coral-text" x="87" y="205">U′ &lt; 0 ⇒ F &gt; 0</text>
      <path class="board-force" d="M292 222 H250" marker-end="url(#arrow-coral-straight)"/>
      <text class="board-coral-text" x="230" y="207">U′ &gt; 0 ⇒ F &lt; 0</text>

      <rect class="board-footer" x="40" y="444" width="578" height="26" rx="8"/>
      <text class="board-formula" x="55" y="462">½mẋ² = E − U(x) ≥ 0;  pri a,b,c,d: ẋ = 0</text>

      <rect class="board-panel" x="658" y="18" width="284" height="464" rx="18"/>
      <text class="board-kicker" x="682" y="50">2 · POVEČAJ STABILNI MINIMUM</text>
      <path class="board-axis" d="M686 380 H918 M686 380 V88"/>
      <text class="board-label" x="671" y="91">U</text>
      <text class="board-label" x="912" y="400">x</text>
      <path class="board-potential" d="M696 130 C739 250 770 322 805 322 C841 322 872 250 914 130"/>
      <path class="board-harmonic" d="M705 154 Q805 488 905 154"/>
      <circle class="board-stable" cx="805" cy="322" r="6"/>
      <path class="board-guide" d="M805 322 V380"/>
      <text class="board-label" x="794" y="402">x₀</text>
      <text class="board-amber-text" x="868" y="119">U(x)</text>
      <path class="board-leader" d="M738 187 L756 215"/>
      <text class="board-violet-text" x="682" y="177">črtkano: parabola</text>
      <text class="board-note" x="682" y="406">U₀ = U(x₀)</text>
      <text class="board-green-text" x="682" y="424">U′(x₀)=0,  U″(x₀)&gt;0</text>
      <rect class="board-footer" x="676" y="442" width="248" height="28" rx="8"/>
      <text class="board-formula board-formula-small" x="687" y="461">U ≈ U₀ + ½U″(x₀)(x−x₀)²</text>
    </svg>`,

    central: h`<svg class="focus-svg" viewBox="0 0 960 500" role="img" aria-labelledby="central-board-title central-board-desc">
      <title id="central-board-title">Geometrija centralne sile, ploščinski zakon in efektivni potencial</title>
      <desc id="central-board-desc">Elipsa s centrom sile v gorišču, radialno silo, ploščinskim zakonom ter ločen graf efektivnega potenciala z apsidama in pogojem za stabilni krožni tir.</desc>
      <defs>
        <marker id="arrow-cyan-central" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#58d5f7"/></marker>
        <marker id="arrow-coral-central" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#ff806f"/></marker>
      </defs>

      <rect class="board-panel" x="18" y="18" width="442" height="464" rx="18"/>
      <text class="board-kicker" x="44" y="50">1 · NAVOR = 0 ⇒ RAVNINA + ENAKE PLOŠČINE</text>
      <ellipse class="board-orbit" cx="244" cy="226" rx="165" ry="98"/>
      <circle class="board-center" cx="111" cy="226" r="8"/>
      <circle class="board-particle" cx="370" cy="163" r="7"/>
      <path class="board-radius" d="M111 226 L370 163" marker-end="url(#arrow-cyan-central)"/>
      <path class="board-force" d="M363 165 L304 180" marker-end="url(#arrow-coral-central)"/>
      <path class="board-velocity" d="M370 163 L414 195" marker-end="url(#arrow-cyan-central)"/>
      <path class="board-area" d="M111 226 L119 172 A165 98 0 0 1 151 142 Z"/>
      <path class="board-area" d="M111 226 L380 278 A165 98 0 0 1 350 307 Z"/>

      <text class="board-label" x="94" y="248">O</text>
      <text class="board-label" x="380" y="155">P (masa m)</text>
      <text class="board-energy-text" x="226" y="181">r</text>
      <text class="board-coral-text" x="270" y="204">F = F(r)eᵣ,  F(r)&lt;0</text>
      <text class="board-energy-text" x="416" y="204">v</text>
      <text class="board-green-text" x="77" y="151">ΔA₁</text>
      <text class="board-green-text" x="366" y="323">ΔA₂</text>
      <text class="board-green-text" x="145" y="357">isti Δt  ⇒  ΔA₁ = ΔA₂</text>

      <circle class="board-l-dot" cx="218" cy="88" r="15"/>
      <circle class="board-l-core" cx="218" cy="88" r="4"/>
      <text class="board-violet-text" x="243" y="93">L iz ravnine</text>

      <rect class="board-footer" x="38" y="414" width="402" height="50" rx="8"/>
      <text class="board-formula" x="52" y="434">N = r × F = 0  ⇒  L = konst.</text>
      <text class="board-formula" x="52" y="454">dA/dt = L/(2m) = konst.</text>

      <rect class="board-panel" x="478" y="18" width="464" height="464" rx="18"/>
      <text class="board-kicker" x="504" y="50">2 · RADIALNO GIBANJE V EFEKTIVNEM POTENCIALU</text>
      <path class="board-axis" d="M522 386 H916 M522 386 V82"/>
      <text class="board-label" x="494" y="86">energija [J]</text>
      <text class="board-label" x="910" y="408">r</text>

      <path class="board-effective" d="M536 92 C548 135 558 204 579 238 C611 290 644 318 681 318 C713 318 730 276 756 238 C791 190 847 181 912 181"/>
      <path class="board-bare-potential" d="M540 368 C575 293 627 246 694 215 C758 188 835 183 912 181"/>
      <path class="board-energy" d="M548 238 H912"/>
      <text class="board-energy-text" x="894" y="226">E</text>

      <circle class="board-turn" cx="579" cy="238" r="6"/>
      <circle class="board-turn" cx="756" cy="238" r="6"/>
      <path class="board-guide" d="M579 238 V386 M756 238 V386"/>
      <text class="board-label" x="567" y="408">r₋</text>
      <text class="board-label" x="744" y="408">r₊</text>
      <path class="board-allowed board-allowed-thin" d="M579 369 H756"/>
      <text class="board-green-text" x="596" y="359">radialno dovoljeno</text>

      <circle class="board-stable" cx="681" cy="318" r="7"/>
      <path class="board-guide" d="M681 318 V386"/>
      <path class="board-circular-energy" d="M643 318 H719"/>
      <text class="board-green-text" x="694" y="342">minimum</text>
      <text class="board-label" x="669" y="408">r_c</text>
      <text class="board-green-text" x="724" y="322">E_c</text>

      <path class="board-leader" d="M589 111 L551 134"/>
      <text class="board-violet-text" x="548" y="105">L²/(2mr²) → ∞</text>
      <text class="board-violet-text" x="818" y="163">U_eff(r)</text>
      <text class="board-coral-text" x="821" y="207">U(r)</text>

      <rect class="board-footer" x="500" y="428" width="420" height="38" rx="8"/>
      <text class="board-formula" x="516" y="452">U_eff(r) = U(r) + L²/(2mr²)</text>
    </svg>`,

    rigid: h`<svg class="focus-svg" viewBox="0 0 960 650" role="img" aria-labelledby="rigid-board-title rigid-board-desc">
      <title id="rigid-board-title">Togo telo: kinematika, vztrajnost, prosta vrtavka in kotaljenje</title>
      <desc id="rigid-board-desc">Štirje ločeni, čitljivi prikazi: hitrost točke, glavne osi vztrajnosti, precesijski stožec proste vrtavke in kotaljenje brez drsenja.</desc>
      <defs>
        <marker id="arrow-cyan-rigid" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#58d5f7"/></marker>
        <marker id="arrow-coral-rigid" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#ff806f"/></marker>
        <marker id="arrow-violet-rigid" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#9d83f4"/></marker>
      </defs>

      <rect class="board-panel" x="18" y="18" width="447" height="292" rx="18"/>
      <text class="board-kicker" x="43" y="49">1 · KINEMATIKA IZBRANE TOČKE P</text>
      <path class="board-body" d="M180 91 L323 76 L406 149 L357 239 L205 227 L137 156 Z"/>
      <circle class="board-center" cx="267" cy="162" r="7"/>
      <circle class="board-particle" cx="366" cy="121" r="6"/>
      <path class="board-radius" d="M267 162 L366 121" marker-end="url(#arrow-cyan-rigid)"/>
      <path class="board-velocity" d="M267 162 L267 92" marker-end="url(#arrow-cyan-rigid)"/>
      <path class="board-force" d="M366 121 L410 176" marker-end="url(#arrow-coral-rigid)"/>
      <path class="board-omega-arc" d="M218 165 A50 50 0 0 1 253 113" marker-end="url(#arrow-violet-rigid)"/>
      <text class="board-label" x="250" y="184">C</text>
      <text class="board-label" x="378" y="118">P</text>
      <text class="board-energy-text" x="311" y="136">ξ_P</text>
      <text class="board-energy-text" x="278" y="97">v_C</text>
      <text class="board-violet-text" x="202" y="120">ω</text>
      <text class="board-coral-text" x="344" y="201">ω × ξ_P</text>
      <rect class="board-footer" x="34" y="267" width="415" height="29" rx="8"/>
      <text class="board-formula" x="50" y="287">v_P = v_C + ω × ξ_P</text>

      <rect class="board-panel" x="483" y="18" width="459" height="292" rx="18"/>
      <text class="board-kicker" x="508" y="49">2 · VZTRAJNOSTNI TENZOR IN GLAVNE OSI</text>
      <ellipse class="board-ellipsoid" cx="710" cy="160" rx="118" ry="62" transform="rotate(-12 710 160)"/>
      <path class="board-axis" d="M568 160 H856 M710 233 V80 M628 216 L799 98"/>
      <circle class="board-center" cx="710" cy="160" r="6"/>
      <path class="board-omega" d="M710 160 L758 95" marker-end="url(#arrow-violet-rigid)"/>
      <path class="board-radius" d="M710 160 L830 133" marker-end="url(#arrow-cyan-rigid)"/>
      <text class="board-note" x="845" y="150">e₁</text>
      <text class="board-note" x="718" y="86">e₂</text>
      <text class="board-note" x="614" y="223">e₃</text>
      <text class="board-violet-text" x="751" y="84">ω</text>
      <text class="board-energy-text" x="817" y="122">L = Jω</text>
      <text class="board-red-text" x="650" y="242">L ∦ ω, razen na glavni osi</text>
      <rect class="board-footer" x="499" y="267" width="427" height="29" rx="8"/>
      <text class="board-formula" x="515" y="287">J = diag(J₁,J₂,J₃),   L = Jω</text>

      <rect class="board-panel" x="18" y="328" width="447" height="304" rx="18"/>
      <text class="board-kicker" x="43" y="359">3 · PROSTA VRTAVKA (N = 0)</text>
      <path class="board-cone-side" d="M242 558 L136 422 M242 558 L348 422"/>
      <ellipse class="board-guide" cx="242" cy="422" rx="106" ry="30"/>
      <path class="board-radius" d="M242 558 L242 370" marker-end="url(#arrow-cyan-rigid)"/>
      <path class="board-omega" d="M242 558 L292 376" marker-end="url(#arrow-violet-rigid)"/>
      <path class="board-body-axis" d="M242 558 L342 422" marker-end="url(#arrow-coral-rigid)"/>
      <path class="board-precession" d="M136 422 C174 468 308 468 348 422" marker-end="url(#arrow-coral-rigid)"/>
      <circle class="board-center" cx="242" cy="558" r="6"/>
      <text class="board-energy-text" x="144" y="373">L = konst.</text>
      <text class="board-violet-text" x="298" y="378">ω</text>
      <text class="board-coral-text" x="350" y="425">e₃(t)</text>
      <text class="board-coral-text" x="282" y="486">precesija telesne osi</text>
      <rect class="board-footer" x="34" y="585" width="415" height="31" rx="8"/>
      <text class="board-formula" x="50" y="606">N = 0 ⇒ L = konst.,   T_rot = konst.</text>

      <rect class="board-panel" x="483" y="328" width="459" height="304" rx="18"/>
      <text class="board-kicker" x="508" y="359">4 · KOTALJENJE BREZ DRSENJA</text>
      <path class="board-ground" d="M520 537 H906"/>
      <circle class="board-body" cx="707" cy="465" r="72"/>
      <circle class="board-center" cx="707" cy="465" r="7"/>
      <circle class="board-contact" cx="707" cy="537" r="7"/>
      <path class="board-guide" d="M707 465 V537"/>
      <path class="board-radius" d="M707 465 L830 465" marker-end="url(#arrow-cyan-rigid)"/>
      <path class="board-omega-arc" d="M664 432 A54 54 0 0 1 739 413" marker-end="url(#arrow-violet-rigid)"/>
      <text class="board-label" x="687" y="454">C</text>
      <text class="board-label" x="688" y="529">A</text>
      <text class="board-note" x="717" y="505">R</text>
      <text class="board-energy-text" x="816" y="454">v_C</text>
      <text class="board-violet-text" x="745" y="411">ω</text>
      <text class="board-green-text" x="731" y="532">v_A = 0</text>
      <rect class="board-footer" x="499" y="585" width="427" height="31" rx="8"/>
      <text class="board-formula board-formula-small" x="515" y="606">v_A=0 ⇔ v_C=Rω;   |F_t| ≤ μ_sN</text>
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
      intro: h`Premočrtno gibanje je sistem z eno prostostno stopnjo \(x(t)\). Če je rezultanta sil odvisna samo od lege, jo v eni dimenziji opišemo s potencialno energijo \(U(x)\), zato se drugi Newtonov zakon spremeni v energijski problem, ki ga lahko skoraj v celoti razberemo iz grafa.`,
      essence: h`Ključna ideja je \(\frac12m\dot x^2=E-U(x)\): razlika med celotno mehansko energijo in potencialno energijo je kinetična energija.`,
      board: boards.straight,
      legend: [
        { color: "coral", label: "potencial U(x) in smer sile" },
        { color: "cyan", label: "izbrana celotna energija E" },
        { color: "green", label: "dovoljeno gibanje in stabilnost" },
        { color: "red", label: "nestabilno ravnovesje" },
        { color: "violet", label: "harmonični približek" }
      ],
      boardNotes: [
        { title: "Energijska slika", body: h`Oranžna krivulja je potencial \(U(x)\), modra vodoravna črta pa celotna energija \(E\). Telo se giblje po osi \(x\), ne po krivulji.` },
        { title: "Obračališča a, b, c, d", body: h`Rumene točke izpolnjujejo \(U=E\), zato je tam \(\dot x=0\). Zeleni odseki kažejo dovoljene lege \(U\le E\); med \(b\) in \(c\) telo pri tej energiji ne more biti.` },
        { title: "Sila in ravnovesje", body: h`Velja \(F=-U'\): na padajočem delu kaže sila desno, na rastočem levo. Zeleni minimum je stabilno ravnovesje, rožnati maksimum pa nestabilno.` },
        { title: "Povečan minimum", body: h`Pri \(x_0\) velja \(U_0=U(x_0)\), \(U'(x_0)=0\) in \(U''(x_0)>0\). Črtkana parabola je lokalni približek, iz katerega dobimo majhna harmonična nihanja.` }
      ],
      drawSteps: [
        { title: "Osi in potencial", body: h`Nariši osi \(x\) in \(U\), nato krivuljo z vsaj enim minimumom in maksimumom. Reci: »Naklon potenciala določa silo, \(F=-U'\).«` },
        { title: "Energijska črta", body: h`Z modro vodoravno črto nariši \(E\). V tej dvojni jami presečišča z \(U\) označi z \(a,b,c,d\): tam je \(E=U\), zato je \(\dot x=0\).` },
        { title: "Dovoljeno območje", body: h`Z zeleno poudari dele osi, kjer \(U\le E\). Kjer je \(U>E\), bi bila kinetična energija negativna, zato je območje klasično prepovedano.` },
        { title: "Ravnovesja", body: h`Ekstreme označi posebej: minimum je stabilen, maksimum nestabilen. Obvezno povej, da obračališče in ravnovesje nista ista stvar.` },
        { title: "Povečaj minimum", body: h`Ob minimumu skiciraj parabolo. To neposredno vodi do \(U\simeq U_0+\tfrac12U''(x_0)(x-x_0)^2\) in majhnih harmoničnih nihanj.` }
      ],
      opening: h`»Premočrtno gibanje opišem z eno koordinato \(x(t)\). Za časovno neodvisno konservativno rezultanto sil uvedem potencialno energijo z zvezo \(F(x)=-U'(x)\). Newtonova enačba je zato \(m\ddot x=-U'(x)\). Če jo pomnožim z \(\dot x\), dobim ohranitev mehanske energije. Iz grafa potencialne energije nato brez reševanja diferencialne enačbe določim dovoljena območja, navadna obračališča, ravnovesja in ali je gibanje vezano.«`,
      intuition: [
        { title: "Kaj potencial sploh je?", body: h`\(U(x)\) je potencialna energija sistema kot funkcija lege: vsaki legi \(x\) priredi eno število z enoto joule. Energijska pokrajina je le predstava; telo se ne giblje po narisani krivulji, ampak po osi \(x\).` },
        { title: "Zakaj sila kaže navzdol po potencialu?", body: h`Ker je \(F=-U'\). Če \(U\) z \(x\) narašča, je \(U'>0\) in sila kaže v negativno smer. Če \(U\) pada, sila kaže v pozitivno smer. Sistem zato potiska proti minimumu.` },
        { title: "Kaj pomeni E − U?", body: h`To je kinetična energija. Velika navpična razlika med črto \(E\) in krivuljo \(U\) pomeni veliko hitrost; v presečišču je razlika nič. Če je tam \(U'\ne0\), gre za navadno obračališče; pri \(U'=0\) je lahko mejni primer, kot je separatrisa.` },
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
          say: h`Ker je kinetična energija nenegativna, mora veljati \(E-U(x)\ge0\). Presečišče \(U=E\) z \(U'\ne0\) je navadno obračališče. Minimum potencialne energije je stabilna ravnovesna lega, maksimum pa nestabilna. Smer in velikost sile preberem iz naklona.`,
          write: [h`\dot x=\pm\sqrt{\frac{2}{m}[E-U(x)]}`, h`U(x)\le E`, h`U(a)=E,\ U'(a)\ne0\ \Rightarrow\ \text{navadno obračališče}`, h`U'(x_e)=0;\quad U''(x_e)>0\ \text{stabilno},\ U''(x_e)<0\ \text{nestabilno}`],
          meaning: h`V navadnem obračališču je \(\dot x=0\), vendar \(F=-U'\ne0\), zato se telo takoj začne gibati nazaj. Ravnovesna lega ima ničelno silo; telo v njej ostane le pri ničelni začetni hitrosti.`
        },
        {
          time: "3:20–4:15",
          title: "Pokaži, kako dobiš x(t)",
          say: h`Energijsko enačbo separiram. Predznak izberem glede na trenutno smer gibanja; ob obračališču ga zamenjam. Dobljeni integral je kvadratura in implicitno določa \(x(t)\).`,
          write: [h`dt=\pm\sqrt{\frac m2}\,\frac{dx}{\sqrt{E-U(x)}}`, h`\boxed{t-t_i=\pm\sqrt{\frac m2}\int_{x_i}^{x}\frac{d\xi}{\sqrt{E-U(\xi)}}}`],
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
          title: "Majhna nihanja okoli nedegeneriranega minimuma",
          say: h`Okoli nedegeneriranega stabilnega ravnovesja \(x_0\), kjer je \(U''(x_0)>0\), potencialno energijo Taylorjevo razvijem. Linearni člen izgine, ker je \(U'(x_0)=0\). Pri majhnem odmiku \(\eta=x-x_0\) obdržim kvadratni člen in dobim harmonični oscilator. Če je \(U''(x_0)=0\), moram upoštevati višje člene.`,
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
      closing: h`»Torej graf potencialne energije skupaj z mehansko energijo določi dovoljena območja in velikost hitrosti; začetna lega izbere povezano območje, začetna smer pa predznak hitrosti. Pogoj \(U\le E\) da dovoljene lege, navadna presečišča \(U=E\) obračališča, ekstremi ravnovesne lege, kvadratura časovni potek, lokalna parabola ob nedegeneriranem minimumu pa harmonično frekvenco.«`,
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
        { color: "cyan", label: "vektorja r, v in energijska črta E" },
        { color: "green", label: "enake ploščine in stabilni tir" },
        { color: "violet", label: "L, U_eff in centrifugalni člen" }
      ],
      boardNotes: [
        { title: "Smer centralne sile", body: h`\(\vec r\) kaže od centra \(O\) do delca \(P\). Sila leži na isti premici; narisana puščica proti \(O\) prikazuje privlačni primer \(F(r)<0\).` },
        { title: "Ravnina in ploščine", body: h`Ker je \(\vec N=\vec r\times\vec F=0\), je \(\vec L\) konstantna in pravokotna na ravnino. V enakih časih sta ploščini enaki: \(\Delta A_1=\Delta A_2\).` },
        { title: "Kaj pove energijska črta", body: h`Radialno gibanje je dovoljeno, kjer \(E\ge U_{\rm eff}\). \(r_-\) in \(r_+\) sta apsidi: tam je \(\dot r=0\), tangencialna hitrost pa pri \(L\ne0\) ostane.` },
        { title: "Minimum in pregrada", body: h`Stabilen krog pri \(r_c\) zahteva \(E_c=U_{\rm eff}(r_c)\). Člen \(L^2/(2mr^2)\) je prepisana obodna kinetična energija, ne nova fizična sila.` }
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
          say: h`Sila je radialna, zato ima glede na center ničelni navor. Odvajam \(\vec L\); prvi člen z vektorskim produktom izgine, drugi je navor, ki je prav tako nič.`,
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
        { color: "cyan", label: "translacija, vektor ξ_P in vrtilna količina L" },
        { color: "coral", label: "rotacijski prispevek in telesna os e₃" },
        { color: "violet", label: "kotna hitrost ω ter glavne osi" },
        { color: "green", label: "stična točka in izpolnjen vezni pogoj" }
      ],
      boardNotes: [
        { title: "Kinematika točke P", body: h`\(C\) je masno središče, \(P\) izbrana točka in \(\vec\xi_P\) vektor od \(C\) do \(P\). \(\vec v_C\) je translacija, \(\vec\omega\times\vec\xi_P\) rotacijski del; vsota je \(\vec v_P\).` },
        { title: "Vztrajnostni tenzor", body: h`\(e_1,e_2,e_3\) so glavne osi, kjer je \(J\) diagonalna. Ker se komponente \(\omega_i\) množijo z različnimi \(J_i\), \(\vec L=J\vec\omega\) na splošno ni vzporedna z \(\vec\omega\).` },
        { title: "Prosta vrtavka", body: h`Ko je \(\vec N=0\), je \(\vec L\) fiksna v prostoru in \(T_{\rm rot}\) se ohranja. Telesna os \(\vec e_3(t)\) precesira po stožcu okoli \(\vec L\).` },
        { title: "Kotaljenje brez drsenja", body: h`\(A\) je trenutna stična točka. Pogoj \(\vec v_A=0\) da \(v_C=R\omega\). Statično trenje se izračuna in mora zadoščati \(|F_t|\le\mu_sN\).` }
      ],
      drawSteps: [
        { title: "Nariši telo, C in P", body: h`Izberi masno središče \(C\), poljubno točko \(P\) in \(\vec\xi_P=\vec r_P-\vec r_C\). Dodaj translacijsko hitrost \(\vec v_C\), os \(\vec\omega\) in tangencialni člen \(\vec\omega\times\vec\xi_P\).` },
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
          say: h`Izberem masno središče \(C\) in na telo pritrjen koordinatni sistem. Koordinate \(\vec a_P\) materialne točke v telesnem sistemu so konstantne, orientacijo telesa pa poda rotacijska matrika \(Q(t)\).`,
          write: [h`|\vec r_P-\vec r_S|=\text{konst.}`, h`\boxed{\vec r_P(t)=\vec r_C(t)+Q(t)\vec a_P}`, h`Q^TQ=I,\qquad \det Q=1`],
          meaning: h`Tri komponente \(\vec R_C\) opisujejo translacijo, trije parametri rotacije \(Q\) orientacijo: skupaj šest prostostnih stopenj.`
        },
        {
          time: "1:15–2:40",
          title: "Izpelji hitrost in pospešek poljubne točke",
          say: h`Za vektor \(\vec\xi_P=Q\vec a_P\), ki je pritrjen na telo, velja transportno pravilo \(\dot{\vec\xi}_P=\vec\omega\times\vec\xi_P\). Enkrat in dvakrat odvajam lego.`,
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
          meaning: h`V telesnem sistemu je \(J\) konstanten; žiroskopski člen nastane zato, ker se sama baza vrti. Standardna oblika velja glede na masno središče ali telesno točko, ki miruje v inercialnem sistemu.`
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
        { q: "Glede na kateri pol velja Eulerjeva enačba?", a: h`V navedeni standardni obliki glede na masno središče ali glede na telesno točko, ki miruje v inercialnem sistemu. Pri poljubnem pospešujočem polu nastanejo dodatni členi.` },
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
