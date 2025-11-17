/* ===========================
      MENU MOBILE
=========================== */

console.log("menu_mobile.js carregado"); // para debug no console

const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');
const btnFecharMenu = document.querySelector('#btn-fechar-menu');

if (btnAbrirMenuMobile && menuMobile && btnFecharMenu) {
  btnAbrirMenuMobile.addEventListener('click', () => menuMobile.classList.add('abrir-menu'));
  btnFecharMenu.addEventListener('click', () => menuMobile.classList.remove('abrir-menu'));

  const linksMenu = menuMobile.querySelectorAll('ul li a');
  linksMenu.forEach(link => link.addEventListener('click', () => menuMobile.classList.remove('abrir-menu')));
}

/* ===========================
      MODAL DE GALERIA
=========================== */

const modal = document.getElementById("modalGallery");
const galleryContainer = document.getElementById("galleryContainer");
const closeBtn = document.getElementById("closeGallery");
let gallerySwiperInstance = null;

// Função para inicializar Swiper (após slides criados)
function initGallerySwiper() {
  // se já existe, destrói para reiniciar com novos slides
  if (gallerySwiperInstance) {
    gallerySwiperInstance.destroy(true, true);
    gallerySwiperInstance = null;
  }

  gallerySwiperInstance = new Swiper('.gallerySwiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

// Evento: clique nos banners
document.querySelectorAll('.img-port').forEach(img => {
  img.addEventListener('click', function () {
    const raw = this.getAttribute('data-gallery') || '';
    // split por vírgula e remove itens vazios
    const images = raw.split(',').map(s => s.trim()).filter(Boolean);

    if (images.length === 0) return;

    // limpar slides antigos
    galleryContainer.innerHTML = '';

    // criar slides
    images.forEach(src => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      const imgEl = document.createElement('img');
      imgEl.src = src;
      imgEl.alt = '';
      slide.appendChild(imgEl);
      galleryContainer.appendChild(slide);
    });

    // abrir modal e iniciar swiper depois do próximo tick
    modal.style.display = 'flex';

    // pequena espera para garantir que DOM atualizou antes de inicializar swiper
    setTimeout(initGallerySwiper, 50);
  });
});

// fechar modal
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// fechar clicando fora do conteúdo
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});


/* ===========================
   REMOVER FOCO / CURSOR AO CLICAR EM ÂNCORAS
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault(); // evita foco padrão
      const offset = target.offsetTop - 120; // ajustado por causa do header

      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }

    // Remover foco visual do link
    this.blur();
  });
});