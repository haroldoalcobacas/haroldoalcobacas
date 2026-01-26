document.addEventListener("DOMContentLoaded", () => {
  const isCasePage = window.location.pathname.includes('/cases/');
  const basePath = isCasePage ? "../components/" : "components/";

  /* ==========================
     HEADER
  ========================== */
    const headerContainer = document.getElementById("site-header");

    if (headerContainer) {
        fetch(basePath + "header.html")
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;

            // MENU MOBILE
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
        })
        .catch(err => console.error('Erro ao carregar header:', err));
    }
    /* ==========================
    SUBMENU CASES
    ========================== */
    const submenuContainer = document.getElementById("submenu-cases");

    if (submenuContainer) {
        fetch(basePath + "submenu-cases.html")
            .then(response => response.text())
            .then(data => {
                submenuContainer.innerHTML = data;

                const links = submenuContainer.querySelectorAll('a');

                // Caminho completo da URL atual
                // Ex: /cases/lavanderia.html
                const currentPath = window.location.pathname;

                links.forEach(link => {
                    const linkHref = link.getAttribute('href');

                    // Marca ativo se o caminho atual contém o href do link
                    if (currentPath.includes(linkHref)) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            })
            .catch(err => console.error('Erro ao carregar submenu:', err));
    }
    /* ==========================
     FOOTER
    ======================== */
    const footerContainer = document.getElementById("footer");

    if (footerContainer) {
        fetch(basePath + "footer.html")
        .then(res => res.text())
        .then(data => footerContainer.innerHTML = data)
        .catch(err => console.error('Erro ao carregar footer:', err));
    }
});
