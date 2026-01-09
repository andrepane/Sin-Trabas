import { phrases } from "./data.js";
import { speakText, startRecording } from "./audio.js";

export const renderTechniqueCards = (items, container) => {
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div>
        <p class="tag">Técnica</p>
        <h3>${item.name}</h3>
        <p>${item.summary}</p>
      </div>
      <div class="tech-card-footer">
        <a class="card-link" href="tecnica.html?id=${item.id}">Ver detalle</a>
        <span class="pill">Duración: 5 min</span>
      </div>
    `;
    container.appendChild(card);
  });
};

export const renderTechniqueDetail = (technique, container) => {
  if (!technique) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>404 · Técnica no encontrada</h2>
        <p>Revisa el enlace o vuelve al listado de técnicas.</p>
        <div class="inline-actions" style="justify-content:center; margin-top: 1.5rem;">
          <a class="btn" href="tecnicas.html">Ver técnicas</a>
          <a class="btn btn-ghost" href="index.html">Ir al inicio</a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="card">
      <span class="badge">${technique.name}</span>
      <p>${technique.detail}</p>
      <ul class="hero-list">
        ${technique.steps.map((step) => `<li>${step}</li>`).join("")}
      </ul>
    </div>
    <div class="card">
      <h3>Frase de práctica</h3>
      <div class="phrase-box" data-phrase>${technique.practice}</div>
      <p class="subtitle">Puedes generar nuevas frases o escucharla en voz alta.</p>
      <div class="inline-actions">
        <button class="btn" type="button" data-action="new-phrase">Nueva frase</button>
        <button class="btn btn-ghost" type="button" data-action="play">Play</button>
        <button class="btn btn-ghost" type="button" data-action="record">Grabar</button>
      </div>
      <div class="alert" data-status>Listo para practicar.</div>
    </div>
  `;

  attachPhraseControls(container);
};

export const attachPhraseControls = (scope = document) => {
  const phraseEl = scope.querySelector("[data-phrase]");
  const statusEl = scope.querySelector("[data-status]");
  if (!phraseEl || !statusEl) {
    return;
  }

  const setStatus = (message, isWarning = false) => {
    statusEl.textContent = message;
    statusEl.classList.toggle("notice-warning", isWarning);
  };

  const getRandomPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];

  scope.querySelector("[data-action='new-phrase']")?.addEventListener("click", () => {
    phraseEl.textContent = getRandomPhrase();
    setStatus("Frase actualizada. Repite con calma.", false);
  });

  scope.querySelector("[data-action='play']")?.addEventListener("click", () => {
    const result = speakText(phraseEl.textContent);
    if (!result.ok) {
      setStatus(result.message, true);
      return;
    }
    setStatus("Reproduciendo en voz alta…", false);
  });

  scope.querySelector("[data-action='record']")?.addEventListener("click", () => {
    startRecording(
      (transcript) => {
        setStatus(`Escuchamos: “${transcript}”`, false);
      },
      (message, isWarning) => {
        setStatus(message, isWarning);
      }
    );
  });
};

export const renderPanel = (panelData, container) => {
  container.innerHTML = `
    <div class="card">
      <h3>Progreso de la semana</h3>
      <div class="stack">
        ${panelData.progress
          .map(
            (item) => `
          <div>
            <div class="tech-card-footer">
              <span>${item.label}</span>
              <span class="tag">${item.value}/${item.total}</span>
            </div>
            <div class="progress">
              <span style="width:${Math.round((item.value / item.total) * 100)}%"></span>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
    <div class="card">
      <h3>Racha actual</h3>
      <p class="subtitle">Llevas <strong>${panelData.streak} días</strong> practicando.</p>
      <p class="notice">Próxima sesión: ${panelData.nextSession}</p>
      <button class="btn" type="button" data-action="demo-reset">Simular nueva sesión</button>
    </div>
    <div class="card">
      <h3>Lo mejor de tu práctica</h3>
      <ul class="hero-list">
        ${panelData.highlights.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </div>
  `;

  const resetButton = container.querySelector("[data-action='demo-reset']");
  resetButton?.addEventListener("click", () => {
    panelData.streak += 1;
    resetButton.textContent = "Sesión registrada";
    resetButton.disabled = true;
    container.querySelector(".notice").textContent = "¡Nueva sesión guardada!";
  });
};
