(() => {
  const allowed = ["stealth", "signal", "studio", "terminal"];
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("design");
  const saved = localStorage.getItem("site-theme");
  const theme = allowed.includes(requested) ? requested : (allowed.includes(saved) ? saved : "stealth");

  if (allowed.includes(requested)) {
    localStorage.setItem("site-theme", requested);
  }

  document.body.dataset.theme = theme;
})();
