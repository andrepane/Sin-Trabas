import { techniques, panelData } from "./data.js";
import { renderTechniqueCards, renderTechniqueDetail, attachPhraseControls, renderPanel } from "./ui.js";
import { enableSmoothAnchors, getQueryParam, setActiveNav } from "./router.js";

const page = document.body.dataset.page;
setActiveNav(page);
enableSmoothAnchors();

if (page === "home") {
  const cardsContainer = document.querySelector("#technique-cards");
  if (cardsContainer) {
    renderTechniqueCards(techniques.slice(0, 3), cardsContainer);
  }
  attachPhraseControls(document.querySelector("[data-phrase-section]") || document);
}

if (page === "tecnicas") {
  const listContainer = document.querySelector("#techniques-list");
  if (listContainer) {
    renderTechniqueCards(techniques, listContainer);
  }
}

if (page === "tecnica") {
  const detailContainer = document.querySelector("#technique-detail");
  const id = getQueryParam("id");
  const technique = techniques.find((item) => item.id === id);
  if (detailContainer) {
    renderTechniqueDetail(technique, detailContainer);
  }
}

if (page === "panel") {
  const panelContainer = document.querySelector("#panel-content");
  if (panelContainer) {
    renderPanel(panelData, panelContainer);
  }
}
