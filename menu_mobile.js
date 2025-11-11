const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');
const btnFecharMenu = document.querySelector('#btn-fechar-menu');

// Abrir menu
btnAbrirMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
});

// Fechar menu ao clicar no X
btnFecharMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});

// Fechar menu ao clicar em qualquer link do menu (UX melhor)
const linksMenu = menuMobile.querySelectorAll('ul li a');
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu'); 
    });
});
