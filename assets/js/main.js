/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

const navMenu = document.getElementById("nav-menu");

if (navToggle) {
  //Verifica se o botão existe. Case existe ele adicionara a classe para abrir o menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  //Verifica se o botão existe. Case existe ele removera a classe para fechar o menu
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
