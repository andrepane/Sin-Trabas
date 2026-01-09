export const getQueryParam = (key) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
};

export const setActiveNav = (page) => {
  const links = document.querySelectorAll("[data-nav]");
  links.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === page);
  });
};

export const enableSmoothAnchors = () => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
};
