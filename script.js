
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const year = document.getElementById("year");

function aplicarTema(tema) {
  const temaClaro = tema === "light";

  document.body.dataset.theme = temaClaro ? "light" : "dark";

  themeToggle.textContent = temaClaro ? "☾" : "☀";

  themeToggle.setAttribute(
    "aria-label",
    temaClaro ? "Ativar tema escuro" : "Ativar tema claro"
  );
}

function obterTemaSalvo() {
  try {
    return localStorage.getItem("nova-theme") || "dark";
  } catch {
    return "dark";
  }
}

function salvarTema(tema) {
  try {
    localStorage.setItem("nova-theme", tema);
  } catch {
    return;
  }
}

function alternarTema() {
  const temaAtual = document.body.dataset.theme;
  const novoTema = temaAtual === "dark" ? "light" : "dark";

  aplicarTema(novoTema);
  salvarTema(novoTema);
}

function definirMenu(aberto) {
  menu.classList.toggle("open", aberto);

  menuToggle.textContent = aberto ? "✕" : "☰";

  menuToggle.setAttribute("aria-expanded", String(aberto));

  menuToggle.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );
}

themeToggle.addEventListener("click", alternarTema);

menuToggle.addEventListener("click", () => {
  definirMenu(!menu.classList.contains("open"));
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => definirMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    definirMenu(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    definirMenu(false);
  }
});

aplicarTema(obterTemaSalvo());

year.textContent = new Date().getFullYear();
