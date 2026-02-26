// panggil navbar dan hambuerger menu
const NavMenu = document.querySelector ('.nav-menu');
const hb = document.querySelector ('hamburger');

// ketika di klik
document.querySelector ('#hamburger').onclick = () => {
    NavMenu.classList.toggle('active');
}