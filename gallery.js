document.addEventListener('DOMContentLoaded', () => {

  const modal = document.getElementById('modalGallery');
  const galleryContainer = document.getElementById('galleryContainer'); 
  const closeBtn = document.getElementById('closeGallery');

  let swiper = null;

  function initSwiper() {
    // ESSA VERIFICAÇÃO É CRUCIAL para evitar erros de destroy:
    if (swiper && typeof swiper.destroy === 'function') { 
      swiper.destroy(true, true);
    }

    swiper = new Swiper('.gallerySwiper', {
      loop: false, // Mantido como false para evitar o Warning com poucos slides
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

  document.querySelectorAll('.img-port').forEach(card => {
    card.addEventListener('click', () => {

      const images = (card.dataset.gallery || '')
        .split(',')
        .map(i => i.trim())
        .filter(Boolean);

      if (!images.length) return;

      galleryContainer.innerHTML = '';

      images.forEach(src => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const img = document.createElement('img');
        img.src = src; // 'src' vem do data-gallery (ex: images/proj2_3.png)
        img.alt = 'Imagem da Galeria';

        slide.appendChild(img);
        galleryContainer.appendChild(slide);
      });

      modal.style.display = 'flex';
      // Garante que o Swiper inicie após a galeria ser renderizada.
      requestAnimationFrame(initSwiper); 
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) closeBtn.click();
  });
});