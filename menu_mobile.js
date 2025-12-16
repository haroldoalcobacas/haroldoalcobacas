/* ===========================
    MENU MOBILE
=========================== */

console.log("menu_mobile.js carregado");

const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');
const btnFecharMenu = document.querySelector('#btn-fechar-menu');

if (btnAbrirMenuMobile && menuMobile && btnFecharMenu) {
  btnAbrirMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
  });

  btnFecharMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
  });

  menuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuMobile.classList.remove('abrir-menu');
    });
  });
}

/* ===========================
    SCROLL SUAVE
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 120,
      behavior: 'smooth'
    });

    this.blur();
  });
});


