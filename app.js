(() => {
  "use strict";

  const DATA = window.MECHANICS_DATA;
  const FOCUS = window.MECHANICS_FOCUS;
  if (!DATA || !Array.isArray(DATA.chapters) || DATA.chapters.length !== 8) {
    throw new Error("Pričakovanih je natanko 8 ustnih sklopov.");
  }
  if (!Array.isArray(FOCUS) || FOCUS.length !== 3) {
    throw new Error("Pričakovane so natanko 3 prednostne ustne teme.");
  }

  const view = document.querySelector("#view");
  const breadcrumb = document.querySelector("#breadcrumb");
  const sidebar = document.querySelector("#sidebar");
  const sidebarScrim = document.querySelector("#sidebar-scrim");
  const searchInput = document.querySelector("#global-search");
  const searchResults = document.querySelector("#search-results");
  const toastEl = document.querySelector("#toast");
  const chapterById = new Map(DATA.chapters.map(chapter => [chapter.id, chapter]));
  const focusById = new Map(FOCUS.map(guide => [guide.id, guide]));
  const STORAGE_KEY = "mehanikaUstniV1";
  let toastTimer;

  const persisted = readStorage();
  const state = {
    completed: new Set(persisted.completed || []),
    lastChapter: persisted.lastChapter || DATA.chapters[0].id
  };

  function readStorage() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completed: [...state.completed],
        lastChapter: state.lastChapter
      }));
    } catch { /* Stran ostane uporabna tudi brez localStorage. */ }
    updateProgress();
  }

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>'"]/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[char]);
  }

  function normalize(value = "") {
    return value.toLocaleLowerCase("sl").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function routeParts() {
    const raw = location.hash.replace(/^#\/?/, "").split("?")[0];
    return (raw || "domov").split("/").filter(Boolean);
  }

  function toast(message) {
    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add("show");
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2300);
  }

  function M(tex, display = false) {
    return `<span class="js-math" data-tex="${escapeHtml(tex)}" data-display="${display ? "block" : "inline"}">${escapeHtml(tex)}</span>`;
  }

  function renderMath(root) {
    if (!window.katex) return;
    root.querySelectorAll(".js-math[data-tex]:not([data-math-ready])").forEach(node => {
      try {
        window.katex.render(node.dataset.tex, node, {
          displayMode: node.dataset.display === "block",
          output: "htmlAndMathml",
          throwOnError: false,
          strict: "ignore",
          trust: false
        });
        node.dataset.mathReady = "true";
      } catch { node.classList.add("math-fallback"); }
    });
    if (typeof window.renderMathInElement === "function") {
      window.renderMathInElement(root, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false,
        strict: "ignore",
        ignoredClasses: ["js-math", "katex", "katex-display"]
      });
    }
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

  function updateChrome(parts) {
    const base = parts[0] || "domov";
    document.querySelectorAll(".main-nav a").forEach(link => {
      link.classList.toggle("active", link.dataset.route === base);
    });
    const labels = { domov: "Pregled", fokus: "3 nujne teme", nacrt: "Načrt za 10 ur", ustno: "Ustna vprašanja", formule: "Formule" };
    let current = labels[base] || "Pregled";
    if (base === "ustno" && parts[1] && chapterById.has(parts[1])) current = `${chapterById.get(parts[1]).number}. ${chapterById.get(parts[1]).title}`;
    if (base === "fokus" && parts[1] && focusById.has(parts[1])) current = focusById.get(parts[1]).title;
    breadcrumb.innerHTML = `Mehanika <span>/</span> ${escapeHtml(current)}`;
    document.title = `${current} — Mehanika`;
  }

  function updateProgress() {
    const ratio = state.completed.size / DATA.chapters.length;
    const percent = Math.round(ratio * 100);
    const ring = document.querySelector(".ring-value");
    const label = document.querySelector("#sidebar-progress span");
    const copy = document.querySelector("#progress-copy");
    if (ring) ring.style.strokeDashoffset = String(113.1 * (1 - ratio));
    if (label) label.textContent = `${percent}%`;
    if (copy) copy.textContent = `${state.completed.size}/${DATA.chapters.length} sklopov`;
  }

  function topicCard(chapter) {
    const done = state.completed.has(chapter.id);
    return `<a class="topic-card ${done ? "done" : ""}" href="#/ustno/${chapter.id}" style="--topic-accent:${chapter.accent}" data-number="${chapter.number}">
      <div class="topic-card-top"><span>${done ? "opravljeno" : `${chapter.minutes} min`}</span><i></i></div>
      <h3>${escapeHtml(chapter.title)}</h3>
      <p>${escapeHtml(chapter.short)}</p>
      <footer>${chapter.subtopics.length} podvprašanj · odpri odgovor →</footer>
    </a>`;
  }

  function renderHome() {
    const next = DATA.chapters.find(chapter => !state.completed.has(chapter.id)) || DATA.chapters[0];
    setView(`
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">Uradni seznam · 8 sklopov · 22 podvprašanj</span>
          <h1>Mehanika.<br><span class="accent-script">Tako, da jo znaš povedati.</span></h1>
          <p class="lead">Pri vsakem vprašanju dobiš najprej pomen po domače, nato formulo, razlago oznak in kratko izpeljavo. Brez dolgih računskih nalog — samo snov za ustni izpit.</p>
          <div class="hero-actions">
            <a class="primary-button" href="#/fokus">Najprej obvladaj 3 nujne teme</a>
            <a class="secondary-button" href="#/ustno/${next.id}">${state.completed.size ? "Nadaljuj ostalo snov" : "Odpri vseh 8 sklopov"}</a>
            <a class="secondary-button" href="#/nacrt">Odpri načrt za 10 ur</a>
            <a class="secondary-button" href="../ustno.pdf" target="_blank" rel="noopener">Odpri seznam PDF ↗</a>
          </div>
        </div>
        <div class="hero-stat"><strong>${state.completed.size}<span>/8</span></strong><small>sklopov označenih kot »znam«</small></div>
      </section>

      <aside class="context-strip">
        <span>Kako se učiš</span>
        <p><strong>1.</strong> Povej okvirček »začni takole«. <strong>2.</strong> Napiši ključno formulo in razloži oznake. <strong>3.</strong> Brez gledanja ponovi izpeljavo. Ko to gre, označi sklop kot znan.</p>
      </aside>

      <section class="priority-ticket" aria-labelledby="priority-title">
        <header>
          <span class="eyebrow">Sošolec je dobil ta listek</span>
          <h2 id="priority-title">Najprej obvladaj <span>to trojico.</span></h2>
          <p>To ni ugibanje: to so tri dejanske teme z ustnega. Togo telo zajema kinematiko in dinamiko, zato sta zanj povezana sklopa 7 in 8.</p>
        </header>
        <div class="priority-grid">
          <a href="#/fokus/premocrtno-potenciali"><b>01</b><strong>Premočrtno gibanje s potenciali</strong><small>celoten govor · barvna tabla · vprašanja profesorja</small></a>
          <a href="#/fokus/centralna-sila"><b>02</b><strong>Gibanje v polju centralne sile</strong><small>celoten govor · Binet · Kepler · Uef</small></a>
          <a href="#/fokus/togo-telo"><b>03</b><strong>Togo telo</strong><small>kinematika + tenzor + Euler + vrtavka + vezi</small></a>
        </div>
      </section>

      <header class="section-head">
        <div><span class="eyebrow">Celotna snov</span><h2>Osem vprašanj, isti vrstni red kot v PDF-ju.</h2></div>
        <p>Naslovi niso izmišljene kategorije: neposredno sledijo datoteki <code>ustno.pdf</code> in ročnim zapiskom.</p>
      </header>
      <div class="topic-grid">${DATA.chapters.map(topicCard).join("")}</div>
      ${sourceNote()}
    `);
  }

  function focusCard(guide) {
    return `<a class="focus-card" href="#/fokus/${guide.id}" style="--focus-accent:${guide.accent}">
      <div class="focus-card-number">${guide.number}</div>
      <div class="focus-card-copy">
        <span>dejanski listek · ${escapeHtml(guide.minutes)}</span>
        <h2>${escapeHtml(guide.title)}</h2>
        <p>${escapeHtml(guide.short)}</p>
        <strong>Odpri popoln odgovor →</strong>
      </div>
    </a>`;
  }

  function renderFocusIndex() {
    setView(`
      <header class="page-intro focus-index-head">
        <span class="eyebrow">Prva prioriteta</span>
        <h1>Tri teme.<br><span class="accent-script">Brez slepih peg.</span></h1>
        <p class="lead">To so tri teme, ki jih je sošolec dejansko dobil na ustnem. Vsaka spodaj je narejena od prvega stavka do profesorjevih podvprašanj: razumevanje, barvna tabla, formule in izpeljave.</p>
      </header>
      <aside class="focus-rule">
        <strong>Kako jih osvojiš</strong>
        <p>Najprej 2 minuti glej sliko in razloži barve. Nato na glas preberi uvod. Tretjič odgovori po časovnici brez gledanja. Nazadnje na prazen list iz glave nariši tablo.</p>
      </aside>
      <div class="focus-index-grid">${FOCUS.map(focusCard).join("")}</div>
      <section class="focus-standard">
        <span class="eyebrow">Kdaj temo res znaš?</span>
        <div>
          <p><b>1</b> V 30 sekundah znaš povedati glavno idejo.</p>
          <p><b>2</b> Znaš pravilno narisati barvno shemo in pojasniti vsak element.</p>
          <p><b>3</b> Ključno formulo izpelješ brez preskoka.</p>
          <p><b>4</b> Odgovoriš na vsaj 6 profesorjevih vprašanj spodaj.</p>
        </div>
      </section>
    `);
  }

  function focusFlowStep(step, index) {
    return `<article class="focus-flow-step">
      <header>
        <span class="flow-index">${String(index + 1).padStart(2, "0")}</span>
        <div><small>${escapeHtml(step.time)}</small><h3>${escapeHtml(step.title)}</h3></div>
      </header>
      <div class="flow-say"><span>Povej</span><p>${step.say}</p></div>
      <div class="flow-write">
        <span>Napiši</span>
        <div>${step.write.map(tex => `<div class="focus-equation">${M(tex, true)}</div>`).join("")}</div>
      </div>
      <div class="flow-meaning"><span>Fizični pomen</span><p>${step.meaning}</p></div>
    </article>`;
  }

  function renderFocusGuide(guide) {
    const currentIndex = FOCUS.findIndex(item => item.id === guide.id);
    const previous = FOCUS[currentIndex - 1];
    const next = FOCUS[currentIndex + 1];
    setView(`
      <section class="focus-hero" style="--focus-accent:${guide.accent}">
        <div class="focus-hero-number">${guide.number}</div>
        <div>
          <span class="eyebrow">Nujna tema · popoln odgovor · ${escapeHtml(guide.minutes)}</span>
          <h1>${escapeHtml(guide.title)}</h1>
          <p class="lead">${guide.intro}</p>
          <div class="chapter-actions">
            <button class="primary-button" type="button" data-scroll-target="fokus-uvod">Začni z odgovorom</button>
            <button class="secondary-button" type="button" onclick="window.print()">Natisni / shrani PDF</button>
          </div>
        </div>
      </section>

      <nav class="focus-jump" aria-label="Kazalo popolnega odgovora">
        <button type="button" data-scroll-target="fokus-slika">Kaj narišem</button>
        <button type="button" data-scroll-target="fokus-uvod">Uvod na ustnem</button>
        <button type="button" data-scroll-target="fokus-pomen">Razumi od začetka</button>
        <button type="button" data-scroll-target="fokus-govor">Celoten govor</button>
        <button type="button" data-scroll-target="fokus-vprasanja">Profesor vpraša</button>
      </nav>

      <section class="focus-essence">
        <span>Bistvo v eni vrstici</span>
        <p>${guide.essence}</p>
      </section>

      <section class="focus-section" id="fokus-slika">
        <header class="focus-section-head">
          <div><span class="eyebrow">Tabla</span><h2>Točno to nariši.</h2></div>
          <p>Barve niso dekoracija. Vsaka loči drugo fizikalno vlogo, da lahko med govorom kažeš na pravi del slike.</p>
        </header>
        <div class="focus-board" style="--focus-accent:${guide.accent}">
          <div class="focus-board-canvas">${guide.board}</div>
          <div class="focus-legend">${guide.legend.map(item => `<span><i class="legend-${item.color}"></i>${escapeHtml(item.label)}</span>`).join("")}</div>
        </div>
        <div class="draw-order">
          ${guide.drawSteps.map((step, index) => `<article><b>${index + 1}</b><div><h3>${escapeHtml(step.title)}</h3><p>${step.body}</p></div></article>`).join("")}
        </div>
      </section>

      <section class="focus-section" id="fokus-uvod">
        <header class="focus-section-head">
          <div><span class="eyebrow">Prvih 30 sekund</span><h2>Začni dobesedno takole.</h2></div>
          <p>Ta uvod profesorju takoj pokaže, da vidiš celotno strukturo teme in ne naštevaš nepovezanih formul.</p>
        </header>
        <blockquote class="verbatim-answer">${guide.opening}</blockquote>
      </section>

      <section class="focus-section" id="fokus-pomen">
        <header class="focus-section-head">
          <div><span class="eyebrow">Od nič do intuicije</span><h2>Kaj stvari dejansko pomenijo.</h2></div>
          <p>Preden se učiš izpeljavo, moraš pri vsaki količini vedeti, katero fizikalno idejo predstavlja.</p>
        </header>
        <div class="intuition-grid">
          ${guide.intuition.map(item => `<article><h3>${escapeHtml(item.title)}</h3><p>${item.body}</p></article>`).join("")}
        </div>
      </section>

      <section class="focus-section" id="fokus-govor">
        <header class="focus-section-head">
          <div><span class="eyebrow">Celoten ustni odgovor</span><h2>Govori v tem vrstnem redu.</h2></div>
          <p>Vsak korak ima tri dele: kaj poveš, kaj napišeš in kakšen je fizični pomen. Časi so orientacijski.</p>
        </header>
        <div class="focus-flow">${guide.flow.map(focusFlowStep).join("")}</div>
      </section>

      <section class="focus-section focus-two-col">
        <div>
          <header class="focus-section-head compact"><div><span class="eyebrow">Pasti</span><h2>Tega ne zamešaj.</h2></div></header>
          <div class="focus-traps">${guide.traps.map((trap, index) => `<p><b>${index + 1}</b><span>${trap}</span></p>`).join("")}</div>
        </div>
        <div class="focus-close">
          <span class="eyebrow">Zaključni stavek</span>
          <p>${guide.closing}</p>
        </div>
      </section>

      <section class="focus-section" id="fokus-vprasanja">
        <header class="focus-section-head">
          <div><span class="eyebrow">Nadaljnja vprašanja</span><h2>Če profesor vrta naprej.</h2></div>
          <p>Najprej odgovori z odebeljenim jedrom, nato po potrebi dodaj formulo ali razlago.</p>
        </header>
        <div class="examiner-grid">
          ${guide.questions.map((item, index) => `<details ${index < 2 ? "open" : ""}><summary>${escapeHtml(item.q)}</summary><div>${item.a}</div></details>`).join("")}
        </div>
      </section>

      <section class="focus-finish">
        <div><span class="eyebrow">Preizkus brez gledanja</span><h2>Zapri stran. Nariši tablo. Govori ${escapeHtml(guide.minutes)}.</h2></div>
        <div class="focus-related">${guide.links.map(link => `<a href="${link.href}">${escapeHtml(link.label)} →</a>`).join("")}</div>
      </section>

      <nav class="next-chapter focus-next" aria-label="Druge nujne teme">
        ${previous ? `<a href="#/fokus/${previous.id}"><small>← prejšnja nujna tema</small><strong>${escapeHtml(previous.title)}</strong></a>` : `<a href="#/fokus"><small>← nazaj</small><strong>Vse 3 nujne teme</strong></a>`}
        ${next ? `<a href="#/fokus/${next.id}"><small>naslednja nujna tema →</small><strong>${escapeHtml(next.title)}</strong></a>` : `<a href="#/fokus"><small>končano →</small><strong>Ponovi vse tri</strong></a>`}
      </nav>
      <p class="source-note">Razširjeni modul je preverjen proti <code>ustno.pdf</code>, ročnim izpitnim odgovorom, predavanjem in zbranemu priročniku. Formule so zapisane v isti konvenciji skozi celoten odgovor.</p>
    `);
  }

  function renderPlan() {
    setView(`
      <header class="page-intro">
        <span class="eyebrow">En intenziven dan</span>
        <h1>Načrt za <span class="accent-script">10 ur.</span></h1>
        <p class="lead">Cilj ni popolnost, ampak da pri vsakem naslovu veš: kaj pojav pomeni, katero formulo napišeš in iz katerih dveh ali treh idej jo izpelješ.</p>
      </header>
      <section class="plan-summary">
        <div><strong>8 h 50 min</strong><small>prvi prehod skozi vseh 8 sklopov</small></div>
        <div><strong>1 h 15 min</strong><small>aktivni priklic, formule in naključna vprašanja</small></div>
      </section>
      <div class="plan-timeline">
        ${DATA.plan.map((item, index) => {
          const chapter = item.chapter ? chapterById.get(item.chapter) : null;
          return `<${chapter ? "a" : "article"} class="plan-item" ${chapter ? `href="#/ustno/${chapter.id}"` : ""}>
            <span class="plan-time">${item.time}</span>
            <span class="plan-number">${chapter ? chapter.number : "✓"}</span>
            <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.goal)}</p></div>
            <em>${item.duration}</em>
          </${chapter ? "a" : "article"}>`;
        }).join("")}
      </div>
      <aside class="context-strip">
        <span>Pravilo odmora</span>
        <p>Po vsakih približno 55 minutah naredi 5–10 minut odmora. Zadnjih 75 minut ne beri več: žrebaj vprašanja, govori na glas in na prazen list piši formule.</p>
      </aside>
    `);
  }

  function renderOralIndex() {
    setView(`
      <header class="page-intro">
        <span class="eyebrow">Ustni izpit</span>
        <h1>8 vprašanj.<br><span class="accent-script">8 pripravljenih odgovorov.</span></h1>
        <p class="lead">Vsak sklop je dovolj kratek za ponavljanje, vendar vsebuje vse formule in izpeljave, ki jih zahtevajo uradna podvprašanja.</p>
      </header>
      <div class="oral-index">
        ${DATA.chapters.map(chapter => `<a class="oral-row" href="#/ustno/${chapter.id}">
          <span class="oral-row-number">${chapter.number}</span>
          <div><h2>${escapeHtml(chapter.title)}</h2><p>${chapter.subtopics.map(item => `${item.letter}) ${escapeHtml(item.title)}`).join(" · ")}</p></div>
          <span class="oral-row-meta">${state.completed.has(chapter.id) ? "✓ znam" : `${chapter.minutes} min`}</span>
        </a>`).join("")}
      </div>
      ${sourceNote()}
    `);
  }

  function formulaPanel(formula) {
    return `<article class="formula-panel ${formula.wide ? "wide" : ""}">
      <span class="formula-label">${escapeHtml(formula.label)}</span>
      <div class="math-display">${M(formula.tex, true)}</div>
      <p>${formula.explain}</p>
    </article>`;
  }

  function notationList(entries = []) {
    if (!entries.length) return "";
    return `<span class="block-label">Pomen oznak</span><dl class="notation">${entries.map(entry => `<div><dt>${M(entry.tex)}</dt><dd>${escapeHtml(entry.meaning)}</dd></div>`).join("")}</dl>`;
  }

  function derivationBlock(item, chapter, index) {
    const id = `derive-${chapter.id}-${item.letter}`;
    return `<section class="derivation">
      <button class="derivation-toggle" type="button" data-action="toggle-derivation" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="${id}">
        <span>Izpeljava po korakih</span><span aria-hidden="true">+</span>
      </button>
      <div class="derivation-content" id="${id}" ${index === 0 ? "" : "hidden"}>
        ${item.derivation.map((step, stepIndex) => `<div class="derive-step">
          <span>${stepIndex + 1}</span>
          <div><strong>${escapeHtml(step.title)}</strong><p>${step.body}</p>${step.tex ? `<div class="derive-math">${M(step.tex, true)}</div>` : ""}</div>
        </div>`).join("")}
      </div>
    </section>`;
  }

  function answerCard(chapter, item, index) {
    return `<article class="answer-card" id="${chapter.id}-${item.letter}" style="--chapter-accent:${chapter.accent}">
      <header class="answer-head">
        <span class="answer-letter">${item.letter}</span>
        <div><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.question)}</p></div>
      </header>
      <div class="answer-body">
        <div class="spoken-start"><span>Začni takole</span><p>${item.start}</p></div>
        <span class="block-label">Ključne formule</span>
        <div class="formula-grid">${item.formulas.map(formulaPanel).join("")}</div>
        ${notationList(item.notation)}
        ${derivationBlock(item, chapter, index)}
        <div class="oral-summary"><span class="block-label">30-sekundni odgovor</span><p>${item.summary}</p></div>
        ${item.pitfall ? `<div class="pitfall"><strong>Pazi:</strong> ${item.pitfall}</div>` : ""}
      </div>
    </article>`;
  }

  function renderChapter(chapter) {
    const done = state.completed.has(chapter.id);
    const index = DATA.chapters.findIndex(item => item.id === chapter.id);
    const previous = DATA.chapters[index - 1];
    const next = DATA.chapters[index + 1];
    state.lastChapter = chapter.id;
    persist();
    setView(`
      <section class="chapter-hero" data-number="${chapter.number}" style="--chapter-accent:${chapter.accent}">
        <div>
          <span class="eyebrow">Vprašanje ${chapter.number} · ${chapter.minutes} minut</span>
          <h1>${escapeHtml(chapter.title)}</h1>
          <p class="lead">${chapter.intro}</p>
          <div class="chapter-actions">
            <button class="mark-button ${done ? "done" : ""}" type="button" data-action="toggle-complete" data-id="${chapter.id}">${done ? "✓ Označeno: znam" : "Označi: znam"}</button>
            <button class="secondary-button" type="button" data-action="expand-all">Odpri vse izpeljave</button>
            <button class="secondary-button" type="button" onclick="window.print()">Natisni</button>
          </div>
        </div>
        <div class="chapter-map" aria-label="Shematski prikaz teme">${chapter.diagram}</div>
      </section>
      <div class="answer-stack">${chapter.subtopics.map((item, itemIndex) => answerCard(chapter, item, itemIndex)).join("")}</div>
      <nav class="next-chapter" aria-label="Sosednja poglavja">
        ${previous ? `<a href="#/ustno/${previous.id}"><small>← prejšnje</small><strong>${previous.number}. ${escapeHtml(previous.title)}</strong></a>` : `<a href="#/ustno"><small>← nazaj</small><strong>Seznam vprašanj</strong></a>`}
        ${next ? `<a href="#/ustno/${next.id}"><small>naslednje →</small><strong>${next.number}. ${escapeHtml(next.title)}</strong></a>` : `<a href="#/formule"><small>končano →</small><strong>List vseh formul</strong></a>`}
      </nav>
      ${sourceNote(chapter.sources)}
    `);
  }

  function renderFormulaSheet() {
    setView(`
      <header class="page-intro">
        <span class="eyebrow">Za zadnjo uro</span>
        <h1>Vse formule.<br><span class="accent-script">Brez razlage.</span></h1>
        <p class="lead">To stran uporabi šele po prvem prehodu. Pokrij desno stran formule, povej pomen simbolov in nato iz glave obnovi prvi korak izpeljave.</p>
      </header>
      <div class="formula-sheet">
        ${DATA.chapters.map(chapter => `<section class="formula-chapter">
          <header><span>${chapter.number}</span><h2>${escapeHtml(chapter.title)}</h2></header>
          <div class="formula-list">${chapter.subtopics.flatMap(item => item.formulas.filter(formula => formula.core !== false)).map(formulaPanel).join("")}</div>
        </section>`).join("")}
      </div>
      ${sourceNote()}
    `);
  }

  function sourceNote(sources = []) {
    const sourceText = sources.length ? ` Preverjeno še posebej proti: ${sources.map(escapeHtml).join("; ")}.` : "";
    return `<p class="source-note">Vsebina sledi <code>ustno.pdf</code>, ročnim zapiskom <code>Mehanika Izpitna Vprašanja.pdf</code> in zbranemu priročniku <code>Klasicna_mehanika_izpitni_prirocnik.pdf</code>.${sourceText}</p>`;
  }

  function renderNotFound() {
    setView(`<header class="page-intro"><span class="eyebrow">404</span><h1>Te strani ni.</h1><p class="lead"><a href="#/domov">Vrni se na pregled.</a></p></header>`);
  }

  function renderRoute() {
    const parts = routeParts();
    searchResults.hidden = true;
    searchInput.blur();
    updateChrome(parts);
    closeSidebar();
    switch (parts[0]) {
      case "domov": renderHome(); break;
      case "fokus": parts[1] ? (focusById.has(parts[1]) ? renderFocusGuide(focusById.get(parts[1])) : renderNotFound()) : renderFocusIndex(); break;
      case "nacrt": renderPlan(); break;
      case "ustno": parts[1] ? (chapterById.has(parts[1]) ? renderChapter(chapterById.get(parts[1])) : renderNotFound()) : renderOralIndex(); break;
      case "formule": renderFormulaSheet(); break;
      default: renderNotFound();
    }
    updateProgress();
  }

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarScrim.hidden = false;
    document.querySelector("#mobile-menu").setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarScrim.hidden = true;
    document.querySelector("#mobile-menu").setAttribute("aria-expanded", "false");
  }

  function performSearch(query) {
    const term = normalize(query.trim());
    if (!term) { searchResults.hidden = true; searchResults.innerHTML = ""; return; }
    const hits = [];
    DATA.chapters.forEach(chapter => {
      chapter.subtopics.forEach(item => {
        const haystack = normalize([chapter.title, item.title, item.question, item.start, item.summary, ...item.formulas.map(f => `${f.label} ${f.explain}`)].join(" "));
        if (haystack.includes(term)) hits.push({
          href: `#/ustno/${chapter.id}`,
          small: `${chapter.number}.${item.letter} · ${chapter.title}`,
          title: item.title
        });
      });
    });
    FOCUS.forEach(guide => {
      const haystack = normalize([
        guide.title, guide.short, guide.intro, guide.essence, guide.opening, guide.closing,
        ...guide.intuition.flatMap(item => [item.title, item.body]),
        ...guide.flow.flatMap(item => [item.title, item.say, item.meaning]),
        ...guide.questions.flatMap(item => [item.q, item.a])
      ].join(" "));
      if (haystack.includes(term)) hits.unshift({
        href: `#/fokus/${guide.id}`,
        small: `★ nujna tema ${guide.number}`,
        title: guide.title
      });
    });
    searchResults.innerHTML = hits.length ? hits.slice(0, 8).map(hit => `<a class="search-result" href="${hit.href}"><small>${escapeHtml(hit.small)}</small><strong>${escapeHtml(hit.title)}</strong></a>`).join("") : `<div class="search-empty">Ni zadetkov. Poskusi npr. »Coriolis«, »energija«, »Binet« ali »tenzor«.</div>`;
    searchResults.hidden = false;
  }

  document.addEventListener("click", event => {
    const scrollTarget = event.target.closest("[data-scroll-target]")?.dataset.scrollTarget;
    if (scrollTarget) document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "toggle-derivation") {
      const button = event.target.closest("button");
      const content = document.getElementById(button.getAttribute("aria-controls"));
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      content.hidden = expanded;
    }
    if (action === "expand-all") {
      const buttons = [...view.querySelectorAll(".derivation-toggle")];
      const shouldOpen = buttons.some(button => button.getAttribute("aria-expanded") !== "true");
      buttons.forEach(button => {
        button.setAttribute("aria-expanded", String(shouldOpen));
        document.getElementById(button.getAttribute("aria-controls")).hidden = !shouldOpen;
      });
      event.target.textContent = shouldOpen ? "Zapri vse izpeljave" : "Odpri vse izpeljave";
    }
    if (action === "toggle-complete") {
      const button = event.target.closest("button");
      const id = button.dataset.id;
      if (state.completed.has(id)) state.completed.delete(id); else state.completed.add(id);
      persist();
      const done = state.completed.has(id);
      button.classList.toggle("done", done);
      button.textContent = done ? "✓ Označeno: znam" : "Označi: znam";
      toast(done ? "Sklop označen kot znan." : "Oznaka odstranjena.");
    }
    if (!event.target.closest(".search-box") && !event.target.closest(".search-results")) searchResults.hidden = true;
  });

  document.querySelector("#mobile-menu").addEventListener("click", () => sidebar.classList.contains("open") ? closeSidebar() : openSidebar());
  sidebarScrim.addEventListener("click", closeSidebar);
  searchInput.addEventListener("input", () => performSearch(searchInput.value));
  searchInput.addEventListener("keydown", event => {
    if (event.key === "Escape") { searchInput.value = ""; searchResults.hidden = true; searchInput.blur(); }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { event.preventDefault(); searchInput.focus(); }
  });
  document.querySelector("#random-topic").addEventListener("click", () => {
    const chapter = DATA.chapters[Math.floor(Math.random() * DATA.chapters.length)];
    location.hash = `#/ustno/${chapter.id}`;
  });
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
})();
