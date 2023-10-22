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

  // Verifica se o valor do scroll vertical (this.scrollY) é maior ou igual a 50 pixels
  if (this.scrollY >= 50) {
    // Se o scroll for maior ou igual a 50 pixels, adiciona a classe "scroll-header" ao elemento do cabeçalho
    header.classList.add("scroll-header");
  } else {
    // Se o scroll for menor que 50 pixels, remove a classe "scroll-header" do elemento do cabeçalho
    header.classList.remove("scroll-header");
  }
};

//Chama a função scrollHeader quando o evento "scroll" ocorre
window.addEventListener("scroll", scrollHeader);

