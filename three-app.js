(() => {
  "use strict";

  const TOPIC_IDS = ["premocrtno-potenciali", "centralna-sila", "togo-telo"];
  const RAW_FOCUS = window.MECHANICS_FOCUS;
  const EASY = window.MECHANICS_EASY || {};
  const EXAM_SCRIPTS = window.MECHANICS_EXAM_SCRIPTS || {};

  if (!Array.isArray(RAW_FOCUS) || RAW_FOCUS.length !== 3) {
    throw new Error("Pričakovani so natanko trije vodiči v window.MECHANICS_FOCUS.");
  }

  const focusById = new Map(RAW_FOCUS.map(guide => [guide.id, guide]));
  const topics = TOPIC_IDS.map(id => focusById.get(id));
  if (topics.some(topic => !topic)) {
    throw new Error("Manjka ena od treh dovoljenih tem: potenciali, centralna sila ali togo telo.");
  }
  if (TOPIC_IDS.some(id => !EASY[id] || !EXAM_SCRIPTS[id])) {
    throw new Error("Manjka začetniška razlaga ali izpitni scenarij za eno od treh tem.");
  }

  const topicById = new Map(topics.map(topic => [topic.id, topic]));

  const ESSENCE = {
    "premocrtno-potenciali": {
      tex: String.raw`\frac12\,m\,\bigl(\dot{x}\bigr)^2=E-U(x)`,
      text: String.raw`Razlika \(E-U(x)\) je kinetična energija, zato mora biti nenegativna.`,
      symbols: [
        { tex: String.raw`m`, meaning: "masa telesa [kg]" },
        { tex: String.raw`x(t)`, meaning: "lega telesa ob času t [m]" },
        { tex: String.raw`\dot{x}=\frac{dx}{dt}=v`, meaning: "hitrost; ena pika je prvi časovni odvod [m/s]" },
        { tex: String.raw`\dot{x}^{\,2}=v^2`, meaning: "kvadrat hitrosti — ni drugi odvod" },
        { tex: String.raw`U(x)`, meaning: "potencialna energija pri legi x [J]" },
        { tex: String.raw`E`, meaning: "stalna celotna mehanska energija [J]" }
      ],
      note: String.raw`Pozor: \(\bigl(\dot{x}\bigr)^2=(dx/dt)^2\) je hitrost na kvadrat. Drugi odvod oziroma pospešek se piše \(\ddot{x}=d^2x/dt^2\).`
    },
    "centralna-sila": {
      tex: String.raw`\vec N_O=0\ \Rightarrow\ \vec L=\mathrm{konst.},\qquad \frac12m\dot r^{\,2}+U_{\rm ef}(r)=E`,
      text: String.raw`Ničelni navor ohrani vrtilno količino in problem zmanjša na radialno gibanje v efektivnem potencialu.`,
      symbols: [
        { tex: String.raw`\vec N_O`, meaning: "navor sile glede na center O [N m]" },
        { tex: String.raw`\vec L`, meaning: "vrtilna količina; njena smer določa ravnino gibanja" },
        { tex: String.raw`r`, meaning: "razdalja delca od centra [m]" },
        { tex: String.raw`\dot r=\frac{dr}{dt}`, meaning: "radialna hitrost [m/s]" },
        { tex: String.raw`U_{\rm ef}(r)`, meaning: "potencial U plus centrifugalni člen" },
        { tex: String.raw`E`, meaning: "stalna celotna energija [J]" }
      ]
    },
    "togo-telo": {
      tex: String.raw`\vec v_P=\vec v_C+\vec\omega\times\vec\xi_P,\qquad \vec L_C=J_C\vec\omega`,
      text: String.raw`Prva enačba razcepi gibanje na translacijo in rotacijo; druga poveže vrtenje z razporedom mase.`,
      symbols: [
        { tex: String.raw`P`, meaning: "poljubna materialna točka telesa" },
        { tex: String.raw`C`, meaning: "masno središče telesa" },
        { tex: String.raw`\vec v_P,\vec v_C`, meaning: "hitrosti točke P in masnega središča" },
        { tex: String.raw`\vec\omega`, meaning: "kotna hitrost; smer kaže os vrtenja [rad/s]" },
        { tex: String.raw`\vec\xi_P`, meaning: "vektor od C do P [m]" },
        { tex: String.raw`\times`, meaning: "vektorski produkt; poda tangentno smer" },
        { tex: String.raw`J_C,\vec L_C`, meaning: "vztrajnostni tenzor in vrtilna količina glede na C" }
      ]
    }
  };
  const view = document.querySelector("#view");
  const breadcrumb = document.querySelector("#breadcrumb");
  const sidebar = document.querySelector("#sidebar");
  const sidebarScrim = document.querySelector("#sidebar-scrim");
  const searchInput = document.querySelector("#global-search");
  const searchResults = document.querySelector("#search-results");
  const toastEl = document.querySelector("#toast");
  const mobileMenu = document.querySelector("#mobile-menu");
  const randomButton = document.querySelector("#random-topic");

  if (!view || !breadcrumb || !sidebar || !sidebarScrim || !searchInput || !searchResults || !toastEl) {
    throw new Error("Stran nima vseh elementov, ki jih three-app.js potrebuje.");
  }

  const STORAGE_KEY = "mehanikaThreeV1";
  let toastTimer;
  const persisted = readStorage();
  const state = {
    completed: new Set(
      Array.isArray(persisted.completed)
        ? persisted.completed.filter(id => TOPIC_IDS.includes(id))
        : []
    ),
    lastTopic: TOPIC_IDS.includes(persisted.lastTopic) ? persisted.lastTopic : TOPIC_IDS[0]
  };

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>'"]/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    })[char]);
  }

  // Besedilo iz lokalnih podatkov ubežimo, matematične ločnice \(...\) pa
  // ostanejo navadno besedilo in jih po vstavljanju obdela KaTeX auto-render.
  function richText(value = "") {
    return escapeHtml(value);
  }

  function asArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function normalize(value = "") {
    return String(value)
      .toLocaleLowerCase("sl")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\\[a-zA-Z]+/g, " ")
      .replace(/[^a-z0-9čšž\s-]/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function M(tex, display = false) {
    const tag = display ? "div" : "span";
    return `<${tag} class="three-math ${display ? "math-display" : "math-inline"}" data-tex="${escapeHtml(tex)}" data-display="${display ? "block" : "inline"}">${escapeHtml(tex)}</${tag}>`;
  }

  function renderMath(root) {
    if (!root || !window.katex) return;

    root.querySelectorAll(".three-math[data-tex]:not([data-math-ready])").forEach(node => {
      try {
        window.katex.render(node.dataset.tex, node, {
          displayMode: node.dataset.display === "block",
          output: "htmlAndMathml",
          throwOnError: false,
          strict: "ignore",
          trust: false
        });
        node.dataset.mathReady = "true";
      } catch {
        node.classList.add("three-math-fallback");
      }
    });

    if (typeof window.renderMathInElement === "function") {
      window.renderMathInElement(root, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        ignoredClasses: ["three-math", "katex", "katex-display"],
        throwOnError: false,
        strict: "ignore"
      });
    }
  }

  function trustedBoardMarkup(board) {
    const source = String(board || "");
    const isSvg = /^\s*<svg\b/i.test(source);
    const unsafe = /<script\b|javascript:|\son[a-z]+\s*=/i.test(source);
    if (!isSvg || unsafe) {
      return `<pre class="three-board-fallback">${escapeHtml(source)}</pre>`;
    }
    return source;
  }

  function readStorage() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completed: [...state.completed],
        lastTopic: state.lastTopic
      }));
    } catch {
      // Aplikacija ostane uporabna, tudi če je lokalna shramba blokirana.
    }
    updateProgress();
  }

  function toast(message) {
    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add("show");
    toastTimer = window.setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  function updateProgress() {
    const count = TOPIC_IDS.filter(id => state.completed.has(id)).length;
    const ratio = count / 3;
    const percent = Math.round(ratio * 100);
    const ring = document.querySelector(".ring-value");
    const label = document.querySelector("#sidebar-progress span");
    const copy = document.querySelector("#progress-copy");

    if (ring) ring.style.strokeDashoffset = String(113.1 * (1 - ratio));
    if (label) label.textContent = `${percent}%`;
    if (copy) copy.textContent = `${count}/3 tem`;
  }

  function routeParts() {
    const raw = location.hash.replace(/^#\/?/, "").split("?")[0];
    return (raw || "domov").split("/").filter(Boolean).map(part => {
      try { return decodeURIComponent(part); }
      catch { return part; }
    });
  }

  function replaceHash(hash) {
    try { history.replaceState(null, "", hash); }
    catch { location.hash = hash; }
  }

  function canonicalRoute() {
    const parts = routeParts();
    if (parts.length === 1 && parts[0] === "domov") {
      return { name: "domov" };
    }
    if (parts.length === 2 && parts[0] === "tema" && topicById.has(parts[1])) {
      return { name: "tema", id: parts[1] };
    }
    if (parts.length === 2 && parts[0] === "fokus" && topicById.has(parts[1])) {
      replaceHash(`#/tema/${encodeURIComponent(parts[1])}`);
      return { name: "tema", id: parts[1] };
    }
    replaceHash("#/domov");
    return { name: "domov" };
  }

  function setView(html) {
    view.innerHTML = html;
    renderMath(view);
    view.classList.remove("view-enter");
    void view.offsetWidth;
    view.classList.add("view-enter");
    window.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  }

  function updateChrome(route) {
    document.querySelectorAll(".main-nav a").forEach(link => {
      const isHome = route.name === "domov" && link.dataset.route === "domov";
      const isTopic = route.name === "tema" && link.dataset.topic === route.id;
      link.classList.toggle("active", isHome || isTopic);
    });

    const topic = route.name === "tema" ? topicById.get(route.id) : null;
    const current = topic ? topic.title : "Samo 3 teme";
    breadcrumb.innerHTML = `Mehanika <span>/</span> ${escapeHtml(current)}`;
    document.title = `${current} — Mehanika`;
  }

  function topicCard(topic) {
    const easy = EASY[topic.id] || {};
    const done = state.completed.has(topic.id);
    return `<a class="focus-card three-topic-card three-card ${done ? "done" : ""}" data-number="${escapeHtml(topic.number)}" href="#/tema/${encodeURIComponent(topic.id)}" style="--focus-accent:${escapeHtml(topic.accent || "#ff806f")};--topic-accent:${escapeHtml(topic.accent || "#ff806f")}">
      <div class="focus-card-number three-topic-card-number">${escapeHtml(topic.number)}</div>
      <div class="focus-card-copy three-topic-card-copy">
        <span>${done ? "✓ opravljeno" : escapeHtml(topic.minutes || "ustni odgovor")}</span>
        <h2>${escapeHtml(topic.title)}</h2>
        <p>${escapeHtml(topic.short || topic.intro || "")}</p>
        ${easy.promise ? `<p class="three-card-promise">${richText(easy.promise)}</p>` : ""}
        <strong>Odpri samo to temo →</strong>
      </div>
    </a>`;
  }

  function renderHome() {
    const count = TOPIC_IDS.filter(id => state.completed.has(id)).length;
    const nextTopic = topics.find(topic => !state.completed.has(topic.id)) || topicById.get(state.lastTopic) || topics[0];
    setView(`
      <div class="three-home">
        <section class="hero three-home-hero three-hero">
          <div class="hero-copy">
            <span class="eyebrow">Natanko tri teme · nič drugega</span>
            <h1>Tri teme.<br><span class="accent-script">Do ustnega odgovora.</span></h1>
            <p class="lead">Potenciali, centralna sila in togo telo. Vsaka tema združi začetniško razlago, tablo, formule z izvorom ter pripravljen govor za ustni izpit.</p>
            <div class="hero-actions three-home-actions">
              <a class="primary-button" href="#/tema/${encodeURIComponent(nextTopic.id)}">${count === 3 ? "Ponovi prvo temo" : "Nadaljuj učenje"}</a>
              <button class="secondary-button" type="button" data-action="random-topic">Naključna od treh</button>
            </div>
          </div>
          <div class="hero-stat three-home-progress" aria-label="Napredek po treh temah">
            <strong>${count}<span>/3</span></strong>
            <small>označenih tem</small>
          </div>
        </section>

        <section class="three-ten-hour-plan study-strip" aria-labelledby="three-plan-title">
          <header class="three-section-head compact">
            <div><span class="eyebrow">Edini načrt na tej strani</span><h2 id="three-plan-title">10 ur samo za te tri.</h2></div>
          </header>
          <div class="three-plan-grid">
            <a class="three-plan-item" href="#/tema/premocrtno-potenciali"><strong>3 h</strong><span>Premočrtno gibanje s potenciali</span><small>graf, energija, perioda, harmonični približek</small></a>
            <a class="three-plan-item" href="#/tema/centralna-sila"><strong>3 h</strong><span>Gibanje v polju centralne sile</span><small>integrali, Kepler, Binet in efektivni potencial</small></a>
            <a class="three-plan-item" href="#/tema/togo-telo"><strong>4 h</strong><span>Kinematika in dinamika togega telesa</span><small>tenzor, Euler, prosta vrtavka in sistemi teles</small></a>
          </div>
        </section>

        <header class="page-intro three-home-intro">
          <span class="eyebrow">Izberi eno</span>
          <h1>Vse, kar je tukaj,<br><span class="accent-script">je del teh treh.</span></h1>
          <p class="lead">Iskanje, naključni izbor, napredek in povezave so omejeni na spodnje tri kartice.</p>
        </header>
        <div class="focus-index-grid three-topic-grid three-grid">${topics.map(topicCard).join("")}</div>
      </div>
    `);
  }

  function renderBefore(easy) {
    const before = asArray(easy.before);
    const glossary = asArray(easy.glossary || easy.dictionary);
    if (!before.length && !glossary.length) return "";

    return `<section class="focus-section three-section three-before-section before-box" id="three-before">
      <header class="focus-section-head three-section-head">
        <div><span class="eyebrow">Preden začneš</span><h2>Slovar in stvari, ki jih moraš vedeti.</h2></div>
        <p>Ta blok odstrani skrite predpostavke, preden pridejo formule.</p>
      </header>
      ${before.length ? `<ul class="three-before-list before-list">${before.map(item => `<li class="three-before-item"><span class="three-before-copy">${richText(item)}</span></li>`).join("")}</ul>` : ""}
      ${glossary.length ? `<dl class="three-glossary">${glossary.map(item => `<div><dt>${item.tex ? M(item.tex) : escapeHtml(item.term || "")}</dt><dd>${richText(item.meaning || item.text || "")}${item.unit ? `<small>${escapeHtml(item.unit)}</small>` : ""}</dd></div>`).join("")}</dl>` : ""}
    </section>`;
  }

  function renderBasics(easy) {
    const basics = asArray(easy.basics);
    if (!basics.length) return "";
    return `<section class="focus-section three-section three-basics-section" id="three-basics">
      <header class="focus-section-head three-section-head">
        <div><span class="eyebrow">Od popolnega začetka</span><h2>Najprej pomen, potem račun.</h2></div>
        <p>Vsako idejo poveži s preprosto predstavo, nato jo uporabi v formuli.</p>
      </header>
      <div class="intuition-grid three-basics-grid easy-grid">
        ${basics.map(item => `<article class="three-basic-card easy-card"><h3>${escapeHtml(item.title || "")}</h3><p>${richText(item.body || "")}</p>${item.analogy ? `<aside class="three-basic-analogy analogy"><span>Predstava</span>${escapeHtml(item.analogy)}</aside>` : ""}</article>`).join("")}
      </div>
    </section>`;
  }

  function renderBoardPreview(topic) {
    const notes = asArray(topic.boardNotes);
    return `<div class="exam-board-preview" id="three-board">
      <header class="exam-board-preview-head">
        <div><span>TAKO MORA IZGLEDATI KONČNA RISBA</span><h4>To prekopiraj na tablo.</h4></div>
        <p>Barve so samo pomoč za učenje; na izpitu zadošča čitljiva skica z vsemi oznakami.</p>
      </header>
      <div class="focus-board three-board exam-board" style="--focus-accent:${escapeHtml(topic.accent || "#ff806f")}">
        <p class="exam-board-mobile-hint"><span aria-hidden="true">↔</span> Povleci skico levo in desno; oznake ostanejo dovolj velike za branje.</p>
        <div class="focus-board-canvas three-board-canvas">${trustedBoardMarkup(topic.board)}</div>
        <div class="focus-legend three-board-legend">${asArray(topic.legend).map(item => `<span><i class="legend-${escapeHtml(item.color || "coral")}"></i>${escapeHtml(item.label || "")}</span>`).join("")}</div>
      </div>
      ${notes.length ? `<section class="exam-board-guide" aria-label="Razlaga elementov na risbi">
        <header>
          <span>KAJ NA SLIKI POMENI KAJ</span>
          <p>Preberi po številkah; vsaka kartica razloži en del skice, ki ga moraš znati pokazati in povedati.</p>
        </header>
        <div class="exam-board-guide-grid">
          ${notes.map((note, index) => `<article class="exam-board-note">
            <b>${String(index + 1).padStart(2, "0")}</b>
            <div><h5>${escapeHtml(note.title || "")}</h5><p>${richText(note.body || "")}</p></div>
          </article>`).join("")}
        </div>
      </section>` : ""}
    </div>`;
  }

  function renderSpotlight(easy) {
    const spot = easy.spotlight;
    if (!spot) return "";
    const terms = asArray(spot.terms);
    const derivation = asArray(spot.derivation);

    return `<section class="focus-section three-section three-spotlight spotlight-card" id="three-spotlight">
      <header class="focus-section-head three-section-head three-spotlight-header spotlight-head">
        <div><span class="eyebrow">${escapeHtml(spot.label || "Začetniški fokus")}</span><h2>${escapeHtml(spot.title || "Formula brez preskoka")}</h2></div>
        <p>Razstavi formulo na pomen simbolov, izvor in preverljiv primer.</p>
      </header>
      <div class="three-spotlight-overview">
        <div class="three-spotlight-primary">
          ${spot.tex ? `<div class="three-spotlight-formula spotlight-formula">${M(spot.tex, true)}</div>` : ""}
          ${spot.plain ? `<p class="three-spotlight-plain">${richText(spot.plain)}</p>` : ""}
        </div>
        ${terms.length ? `<section class="three-spotlight-legend"><h3>Legenda simbolov</h3><dl class="three-spotlight-terms term-grid">${terms.map(term => `<div class="term-card"><dt>${term.tex ? M(term.tex) : ""}</dt><dd>${escapeHtml(term.meaning || "")}</dd></div>`).join("")}</dl></section>` : ""}
      </div>
      ${derivation.length ? `<ol class="three-spotlight-derivation derivation-list">${derivation.map(step => `<li class="three-spotlight-step derivation-step"><div><h3>${escapeHtml(step.title || "")}</h3>${step.text ? `<p>${escapeHtml(step.text)}</p>` : ""}${step.tex ? `<div class="three-spotlight-step-math">${M(step.tex, true)}</div>` : ""}</div></li>`).join("")}</ol>` : ""}
      ${(spot.units || spot.example) ? `<div class="units-example-grid three-units-example-grid">${spot.units ? `<aside class="three-spotlight-units units-box"><strong>Enote</strong><p>${richText(spot.units)}</p></aside>` : ""}${spot.example ? `<aside class="three-spotlight-example example-box"><strong>Primer s številkami</strong><p>${richText(spot.example)}</p></aside>` : ""}</div>` : ""}
    </section>`;
  }

  function renderFormulaCard(formula, index) {
    const symbols = asArray(formula.symbols);
    const origin = asArray(formula.origin);
    return `<details class="three-formula-card formula-lesson" ${index === 0 ? "open" : ""}>
      <summary class="formula-summary"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(formula.title || "Formula")}</strong></summary>
      <div class="three-formula-body formula-body">
        <div class="three-formula-overview">
          <div class="three-formula-primary">
            ${formula.tex ? `<div class="three-formula-equation formula-preview">${M(formula.tex, true)}</div>` : ""}
            ${formula.plain ? `<p class="three-formula-plain">${escapeHtml(formula.plain)}</p>` : ""}
          </div>
          ${symbols.length ? `<section class="three-formula-symbols"><h4>Legenda simbolov</h4><dl class="symbol-grid">${symbols.map(symbol => `<div><dt>${symbol.tex ? M(symbol.tex) : ""}</dt><dd>${escapeHtml(symbol.meaning || "")}</dd></div>`).join("")}</dl></section>` : ""}
        </div>
        ${origin.length ? `<section class="three-formula-origin"><h4>Od kod pride</h4><ol class="origin-list">${origin.map(step => `<li><p>${escapeHtml(step.text || "")}</p>${step.tex ? `<div>${M(step.tex, true)}</div>` : ""}</li>`).join("")}</ol></section>` : ""}
        ${formula.use ? `<aside class="three-formula-use use-box"><strong>Kdaj jo uporabiš</strong><p>${escapeHtml(formula.use)}</p></aside>` : ""}
      </div>
    </details>`;
  }

  function renderFormulaCourse(easy) {
    const formulas = asArray(easy.formulas);
    if (!formulas.length) return "";
    return `<section class="focus-section three-section three-formula-section" id="three-formulas">
      <header class="focus-section-head three-section-head">
        <div><span class="eyebrow">Tečaj formul</span><h2>Vsaka formula: simboli, izvor, uporaba.</h2></div>
        <div class="three-formula-toolbar formula-toolbar"><button class="secondary-button three-formula-toggle" type="button" data-action="toggle-formulas" aria-expanded="false">Razširi vse formule</button></div>
      </header>
      <div class="three-formula-course formula-course">${formulas.map(renderFormulaCard).join("")}</div>
    </section>`;
  }

  function renderEssence(topic) {
    const essence = ESSENCE[topic.id];
    if (!essence) return "";
    const symbols = asArray(essence.symbols);
    return `<section class="focus-essence three-essence three-essence-clear" aria-label="Ključna ideja">
      <span>Ključna ideja</span>
      <div class="three-essence-body">
        <div class="three-essence-formula">${M(essence.tex, true)}</div>
        <aside class="three-essence-legend">
          <strong>Legenda simbolov</strong>
          <p>${richText(essence.text)}</p>
          ${symbols.length ? `<dl>${symbols.map(symbol => `<div><dt>${M(symbol.tex)}</dt><dd>${escapeHtml(symbol.meaning || "")}</dd></div>`).join("")}</dl>` : ""}
          ${essence.note ? `<div class="three-essence-note"><b>Pika ali dve piki?</b><p>${richText(essence.note)}</p></div>` : ""}
        </aside>
      </div>
    </section>`;
  }

  function renderExamScript(topic) {
    const script = EXAM_SCRIPTS[topic.id];
    if (!script) return "";
    const draw = asArray(script.draw);
    const steps = asArray(script.steps);
    const must = asArray(script.must);

    return `<section class="focus-section three-section exam-script" id="three-script" style="--script-accent:${escapeHtml(topic.accent || "#ff806f")}">
      <header class="exam-script-head">
        <div>
          <span class="eyebrow">To je jedro za učenje · ${escapeHtml(script.duration || "")}</span>
          <h2>${escapeHtml(script.title || "Točno tako odgovori")}</h2>
          <p>Če znaš spodnji blok brez gledanja, znaš odgovoriti na to vprašanje. Ostala stran samo razloži, zakaj koraki veljajo.</p>
        </div>
        <strong class="exam-enough">TO JE DOVOLJ ZA ODGOVOR</strong>
      </header>

      <article class="exam-first">
        <span>01 · ZAČNI DOBESEDNO</span>
        <p>${richText(script.first || "")}</p>
      </article>

      ${draw.length ? `<section class="exam-draw">
        <header><span>02 · RISBA NA TABLO</span><h3>Nariši v tem vrstnem redu.</h3></header>
        <ol class="exam-draw-grid">${draw.map(item => `<li><strong>${escapeHtml(item.title || "")}</strong><p>${richText(item.text || "")}</p></li>`).join("")}</ol>
        ${renderBoardPreview(topic)}
      </section>` : ""}

      ${steps.length ? `<section class="exam-equations">
        <header><span>03 · ENAČBE IN GOVOR</span><h3>Nato pojdi po teh korakih — brez preskakovanja.</h3></header>
        <div class="exam-step-list">${steps.map((step, index) => `<article class="exam-step">
          <header><b>${String(index + 1).padStart(2, "0")}</b><h3>${escapeHtml(step.title || "")}</h3></header>
          <div class="exam-step-say"><span>TOČNO TO RECI</span><p>${richText(step.say || "")}</p></div>
          ${asArray(step.write).length ? `<div class="exam-step-write"><span>TOČNO TO NAPIŠI</span><div class="exam-step-write-layout">
            <div class="exam-step-formulas">${asArray(step.write).map(tex => `<div>${M(tex, true)}</div>`).join("")}</div>
            ${asArray(step.legend).length ? `<aside class="exam-step-legend"><strong>LEGENDA SIMBOLOV</strong><dl>${asArray(step.legend).map(symbol => `<div><dt>${symbol.tex ? M(symbol.tex) : ""}</dt><dd>${escapeHtml(symbol.meaning || "")}</dd></div>`).join("")}</dl></aside>` : ""}
          </div></div>` : ""}
          <div class="exam-step-meaning"><span>KAJ TO POMENI</span><p>${richText(step.meaning || "")}</p></div>
        </article>`).join("")}</div>
      </section>` : ""}

      <div class="exam-script-finish">
        ${must.length ? `<aside class="exam-must"><span>TEH ${must.length} STVARI NE SMEŠ IZPUSTITI</span><ul>${must.map(item => `<li>${richText(item)}</li>`).join("")}</ul></aside>` : ""}
        <article class="exam-last"><span>ZAKLJUČI DOBESEDNO</span><p>${richText(script.last || topic.closing || "")}</p></article>
      </div>
    </section>`;
  }

  function renderFlowStep(step, index) {
    const writes = asArray(step.write);
    return `<article class="focus-flow-step three-flow-step">
      <header><span class="flow-index">${String(index + 1).padStart(2, "0")}</span><div><small>${escapeHtml(step.time || "")}</small><h3>${escapeHtml(step.title || "")}</h3></div></header>
      <div class="flow-say three-flow-say"><span>Povej</span><p>${richText(step.say || "")}</p></div>
      ${writes.length ? `<div class="flow-write three-flow-write"><span>Napiši</span><div>${writes.map(tex => `<div class="focus-equation three-flow-equation">${M(tex, true)}</div>`).join("")}</div></div>` : ""}
      <div class="flow-meaning three-flow-meaning"><span>Fizični pomen</span><p>${richText(step.meaning || "")}</p></div>
    </article>`;
  }

  function renderOralFlow(topic) {
    const flow = asArray(topic.flow);
    if (!flow.length) return "";
    return `<section class="focus-section three-section three-oral-section" id="three-oral">
      <header class="focus-section-head three-section-head">
        <div><span class="eyebrow">Celoten ustni odgovor</span><h2>Govori v tem vrstnem redu.</h2></div>
        <p>Pri vsakem koraku imaš poved, zapis na tablo in fizični pomen.</p>
      </header>
      <div class="focus-flow three-oral-flow">${flow.map(renderFlowStep).join("")}</div>
    </section>`;
  }

  function renderTrapsAndClosing(topic) {
    const traps = asArray(topic.traps);
    return `<section class="focus-section three-section focus-two-col three-traps-section" id="three-traps">
      <div>
        <header class="focus-section-head compact three-section-head"><div><span class="eyebrow">Pasti</span><h2>Tega ne zamešaj.</h2></div></header>
        <div class="focus-traps three-traps">${traps.map((trap, index) => `<p><b>${index + 1}</b><span>${richText(trap)}</span></p>`).join("")}</div>
      </div>
      <div class="focus-close three-closing"><span class="eyebrow">Zaključni stavek</span><p>${richText(topic.closing || "")}</p></div>
    </section>`;
  }

  function renderQuestions(topic) {
    const questions = asArray(topic.questions);
    if (!questions.length) return "";
    return `<section class="focus-section three-section three-question-section" id="three-questions">
      <header class="focus-section-head three-section-head">
        <div><span class="eyebrow">Profesor vpraša</span><h2>Kratko, neposredno, pravilno.</h2></div>
        <p>Najprej povej jedro odgovora; formulo dodaj samo, če pomaga.</p>
      </header>
      <div class="examiner-grid three-question-grid">${questions.map((item, index) => `<details class="three-question" ${index < 2 ? "open" : ""}><summary>${escapeHtml(item.q || "")}</summary><div>${richText(item.a || "")}</div></details>`).join("")}</div>
    </section>`;
  }

  function renderCheckpoints(easy) {
    const checkpoints = asArray(easy.checkpoints);
    if (!checkpoints.length) return "";
    return `<section class="focus-section three-section three-checkpoint-section" id="three-checkpoints">
      <header class="focus-section-head three-section-head">
        <div><span class="eyebrow">Preizkus brez gledanja</span><h2>Preden označiš »znam«.</h2></div>
        <p>Odkljukaj samo tisto, kar lahko razložiš na glas brez strani.</p>
      </header>
      <div class="three-checkpoint-list checkpoint-grid">${checkpoints.map((checkpoint, index) => `<label class="three-checkpoint checkpoint-card"><input type="checkbox"><span><b>${index + 1}</b>${escapeHtml(checkpoint)}</span></label>`).join("")}</div>
    </section>`;
  }

  function renderPager(topic) {
    const index = topics.findIndex(item => item.id === topic.id);
    const previous = topics[index - 1];
    const next = topics[index + 1];
    return `<nav class="next-chapter focus-next three-topic-pager" aria-label="Prejšnja in naslednja od treh tem">
      ${previous ? `<a href="#/tema/${encodeURIComponent(previous.id)}"><small>← prejšnja tema</small><strong>${escapeHtml(previous.title)}</strong></a>` : `<span class="three-pager-placeholder" aria-hidden="true"></span>`}
      ${next ? `<a href="#/tema/${encodeURIComponent(next.id)}"><small>naslednja tema →</small><strong>${escapeHtml(next.title)}</strong></a>` : `<span class="three-pager-placeholder" aria-hidden="true"></span>`}
    </nav>
    <p class="three-back-home"><a href="#/domov">← Nazaj na vse tri teme</a></p>`;
  }

  function renderTopic(topic) {
    const easy = EASY[topic.id] || {};
    const done = state.completed.has(topic.id);
    state.lastTopic = topic.id;
    persist();

    setView(`
      <article class="three-topic-page" data-topic-id="${escapeHtml(topic.id)}">
        <section class="focus-hero three-topic-hero" style="--focus-accent:${escapeHtml(topic.accent || "#ff806f")}">
          <div class="focus-hero-number three-topic-number">${escapeHtml(topic.number)}</div>
          <div class="three-topic-hero-copy">
            <span class="eyebrow">Ena od natanko treh · ${escapeHtml(topic.minutes || "ustni odgovor")}</span>
            <h1>${escapeHtml(topic.title)}</h1>
            <p class="lead">${richText(topic.intro || "")}</p>
            ${easy.promise ? `<p class="three-topic-promise">${richText(easy.promise)}</p>` : ""}
            <div class="chapter-actions three-topic-actions">
              <button class="primary-button" type="button" data-scroll-target="three-script">Začni: točno kaj naredim</button>
              <button class="mark-button ${done ? "done" : ""}" type="button" data-action="toggle-complete" data-id="${escapeHtml(topic.id)}">${done ? "✓ Označeno: znam" : "Označi: znam"}</button>
              <button class="secondary-button" type="button" data-action="print">Natisni / shrani PDF</button>
            </div>
          </div>
        </section>

        <nav class="focus-jump three-jump-nav" aria-label="Kazalo teme">
          <button type="button" data-scroll-target="three-script">Točno kaj naredim</button>
          <button type="button" data-scroll-target="three-board">Končna risba</button>
          <button type="button" data-scroll-target="three-before">Razumi osnove</button>
          <button type="button" data-scroll-target="three-spotlight">Glavna izpeljava</button>
          <button type="button" data-scroll-target="three-formulas">Vse formule</button>
          <button type="button" data-scroll-target="three-questions">Vprašanja</button>
        </nav>

        ${renderEssence(topic)}
        ${renderExamScript(topic)}

        ${renderBefore(easy)}
        ${renderBasics(easy)}
        ${renderSpotlight(easy)}
        ${renderFormulaCourse(easy)}
        ${renderTrapsAndClosing(topic)}
        ${renderQuestions(topic)}
        ${renderCheckpoints(easy)}
        ${renderPager(topic)}
        <p class="source-note three-source-note"><strong>Obseg te priprave:</strong> samo premočrtno gibanje s potenciali, centralna sila in togo telo.</p>
      </article>
    `);
  }

  function renderRoute() {
    const route = canonicalRoute();
    searchResults.hidden = true;
    searchInput.blur();
    closeSidebar();
    updateChrome(route);
    if (route.name === "tema") renderTopic(topicById.get(route.id));
    else renderHome();
    updateProgress();
  }

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarScrim.hidden = false;
    mobileMenu?.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarScrim.hidden = true;
    mobileMenu?.setAttribute("aria-expanded", "false");
  }

  function collectText(value, output = []) {
    if (typeof value === "string" || typeof value === "number") output.push(String(value));
    else if (Array.isArray(value)) value.forEach(item => collectText(item, output));
    else if (value && typeof value === "object") Object.values(value).forEach(item => collectText(item, output));
    return output;
  }

  function topicSearchText(topic) {
    const searchableGuide = {
      title: topic.title,
      short: topic.short,
      intro: topic.intro,
      essence: topic.essence,
      opening: topic.opening,
      drawSteps: topic.drawSteps,
      intuition: topic.intuition,
      flow: topic.flow,
      traps: topic.traps,
      questions: topic.questions,
      closing: topic.closing
    };
    return normalize(collectText([searchableGuide, EASY[topic.id] || {}, EXAM_SCRIPTS[topic.id] || {}]).join(" "));
  }

  function performSearch(query) {
    const terms = normalize(query).split(" ").filter(Boolean);
    if (!terms.length) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      return;
    }

    const hits = topics.filter(topic => {
      const haystack = topicSearchText(topic);
      return terms.every(term => haystack.includes(term));
    });

    searchResults.innerHTML = hits.length
      ? hits.map(topic => `<a class="search-result three-search-result" href="#/tema/${encodeURIComponent(topic.id)}"><small>Tema ${escapeHtml(topic.number)} od 3</small><strong>${escapeHtml(topic.title)}</strong></a>`).join("")
      : `<div class="search-empty three-search-empty">Ni zadetkov v teh treh temah. Poskusi »potencial«, »Binet« ali »tenzor«.</div>`;
    searchResults.hidden = false;
  }

  function goToRandomTopic() {
    const current = canonicalRoute();
    const choices = current.name === "tema" && topics.length > 1
      ? topics.filter(topic => topic.id !== current.id)
      : topics;
    const topic = choices[Math.floor(Math.random() * choices.length)];
    location.hash = `#/tema/${topic.id}`;
  }

  function toggleAllFormulas(button) {
    const cards = [...view.querySelectorAll(".three-formula-card")];
    if (!cards.length) return;
    const shouldOpen = cards.some(card => !card.open);
    cards.forEach(card => { card.open = shouldOpen; });
    button.setAttribute("aria-expanded", String(shouldOpen));
    button.textContent = shouldOpen ? "Zapri vse formule" : "Razširi vse formule";
  }

  document.addEventListener("click", event => {
    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      document.getElementById(scrollButton.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const actionButton = event.target.closest("[data-action]");
    const action = actionButton?.dataset.action;
    if (action === "toggle-complete") {
      const id = actionButton.dataset.id;
      if (!TOPIC_IDS.includes(id)) return;
      if (state.completed.has(id)) state.completed.delete(id);
      else state.completed.add(id);
      persist();
      const done = state.completed.has(id);
      actionButton.classList.toggle("done", done);
      actionButton.textContent = done ? "✓ Označeno: znam" : "Označi: znam";
      toast(done ? "Tema je označena kot znana." : "Oznaka je odstranjena.");
    }
    if (action === "toggle-formulas") toggleAllFormulas(actionButton);
    if (action === "print") window.print();
    if (action === "random-topic") goToRandomTopic();

    if (event.target.closest(".sidebar a")) closeSidebar();
    if (!event.target.closest(".search-box") && !event.target.closest(".search-results")) {
      searchResults.hidden = true;
    }
  });

  mobileMenu?.addEventListener("click", () => sidebar.classList.contains("open") ? closeSidebar() : openSidebar());
  sidebarScrim.addEventListener("click", closeSidebar);
  searchInput.addEventListener("input", () => performSearch(searchInput.value));
  searchInput.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchResults.hidden = true;
      searchInput.blur();
    }
  });
  document.addEventListener("keydown", event => {
    const tagName = document.activeElement?.tagName || "";
    if (event.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape" && sidebar.classList.contains("open")) closeSidebar();
  });
  randomButton?.addEventListener("click", goToRandomTopic);
  window.addEventListener("hashchange", renderRoute);

  renderRoute();
})();
