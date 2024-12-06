//atualizando o tamanho da div que simula o tamanho da navbar

const navbar = document.querySelector("#navbar");
const spaceNavbar = document.querySelector("#space-navbar");

spaceNavbar.style.height = navbar.clientHeight + "px";


window.addEventListener("resize", () => {
    const navbarHeight = navbar.clientHeight;

    spaceNavbar.style.height = navbarHeight + "px";
});
