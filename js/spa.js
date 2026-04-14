document.addEventListener('DOMContentLoaded', function () {
    //* ========== Funcionalidad menu hamburguesa ========== //
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    //* Cerrar menu cuando se hace clic en un link del navbar
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    //* Cerrar menu cuando se hace clic en cualquier lado
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    //* ========== Año actualizado automaticamente en footer ========== //
    const gallerySection = document.getElementById('galeria');
    if (gallerySection) {
        const tabLinks = gallerySection.querySelectorAll('.gallery-nav-link');
        const tabPanesContainer = gallerySection.querySelector('.tab-content');

        if (tabLinks.length && tabPanesContainer) {
            const tabPanes = tabPanesContainer.querySelectorAll('.tab-pane');

            function switchTab(clickedLink) {
                tabLinks.forEach(link => link.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                clickedLink.classList.add('active');
                const targetId = clickedLink.getAttribute('href').substring(1);
                const targetPane = document.getElementById(targetId);
                if (targetPane) targetPane.classList.add('active');
            }

            tabLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    switchTab(this);
                });
            });
        }

        //* Lazy load imágenes de galería
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.add('loaded');
                    obs.unobserve(img);
                }
            });
        }, observerOptions);

        gallerySection.querySelectorAll('.gallery-item img').forEach(img => {
            observer.observe(img);
        });
    }

    //* ========== BANNER TERMINOS Y CONDICIONES ========== //
    const termsBanner = document.getElementById('terms-banner');
    const acceptButton = document.getElementById('accept-terms-btn');
    const termsAcceptedKey = 'spaTermsAndConditionsAccepted_v2';

    if (termsBanner) { // Asegurarse de que el banner existe
        // Verificar si los términos ya fueron aceptados
        if (!localStorage.getItem(termsAcceptedKey)) {
            // Forzar un pequeño retraso para que la transición de entrada funcione correctamente
            // si el CSS inicial es opacity 0 / transform translateY(100%)
            setTimeout(function () {
                termsBanner.classList.add('terms-banner--visible');
            }, 100); // Un pequeño retraso es a veces necesario para que el navegador registre el cambio de estado para la transición inicial
        } else {
            // Si ya están aceptados, no hacemos nada, el banner permanecerá oculto (con opacity 0, transform y visibility hidden)
            // O, si quieres asegurarte de que no ocupe espacio y no haya posibilidad de flash:
            termsBanner.style.display = 'none'; // Ocultar completamente si ya fue aceptado
        }

        // Manejar el clic en el botón "Aceptar"
        if (acceptButton) {
            acceptButton.addEventListener('click', function () {
                localStorage.setItem(termsAcceptedKey, 'true');
                termsBanner.classList.remove('terms-banner--visible'); // Prepara para ocultar
                termsBanner.classList.add('terms-banner--hiding');   // Inicia la animación de ocultar

                // Opcional: remover el elemento del DOM después de la animación para limpiar
                // Esto es útil si el banner, incluso con visibility:hidden, interfiriera con algo (raro).
                // O si quieres que no esté en el inspector de elementos.
                termsBanner.addEventListener('transitionend', function handleTransitionEnd() {
                    // Solo queremos que se ejecute si se está ocultando (opacity llega a 0)
                    if (termsBanner.classList.contains('terms-banner--hiding')) {
                        termsBanner.style.display = 'none'; // Ahora sí lo quitamos del flujo
                    }
                    termsBanner.removeEventListener('transitionend', handleTransitionEnd); // Limpiar el listener
                });
            });
        }
    }





    //* ========== Efecto scroll sections active link del navbar ========== //
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function () {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav-links a[href*=' + sectionId + ']');

            // null-check: si no existe el link en el nav, no crashea
            if (!navLink) return;

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    });




    //* ========== Popup de terminos y condiciones ========== //
    // window.mostrarPromoPopup = function (url) {
    //     window._redirectUrl = url;
    //     const popup = document.getElementById('terminos-promo-popup');
    //     if (popup) popup.style.display = 'flex';
    // };

    // window.aceptarPromoPopup = function () {
    //     if (window._redirectUrl) window.open(window._redirectUrl, '_blank');
    //     window.cerrarPromoPopup();
    // };

    // window.cerrarPromoPopup = function () {
    //     const popup = document.getElementById('terminos-promo-popup');
    //     if (popup) popup.style.display = 'none';
    //     window._redirectUrl = '';
    // };

});



//* ========== Popup Servicios ========== //
// const serviceButtons = document.querySelectorAll('.service-btn');
// const popupOverlay = document.querySelector('.popup-servicios');
// const popupContent = document.querySelector('.popup-servicios-content');
// const popupImage = document.querySelector('.popup-servicios-img');
// const popupTitle = document.querySelector('.popup-servicios-title');
// const popupDescription = document.querySelector('.popup-servicios-description');
// const popupClose = document.querySelector('.popup-servicios-close');

// const serviceDetails = {
//     'masajes-descontracturantes': {
//         title: 'Masajes Descontracturantes',
//         description: 'Alivia el dolor. Disuelve contracturas. Activa la circulación sanguínea y de la linfa eliminando toxinas. Relaja y ayuda a dormir bien. Alivia las migrañas y dolores de cabeza. Ayuda a evuacuar mejor. Mantiene la piel elástica eliminando células muertas y la nutre.',
//         image: '/img/spa/servicios/img/servicios-masaje-descontracturante.jpg'
//     },
//     'masajes-relajantes': {
//         title: 'Masajes Relajantes',
//         description: 'Aumenta la función inmune. Mejora la calidad del sueño. Mejora la movilidad de las articulaciones. Estimula el movimiento linfático. Reduce el dolor muscular. Mejora la actividad mental. Agiliza la curación de lesiones de tejidos blandos. Alivia el estrés. Mejora la circulación y reduce la tensión muscular.',
//         image: '/img/spa/servicios/img/servicios-masajes-relajantes.jpg'
//     },
//     'masajes-sedativos': {
//         title: 'Masajes Sedativos',
//         description: 'Induce a un estado de calma y tranquilidad, disminuyendo la ansiedad y el estrés. Alivia las tensiones musculares, especialmente en áreas como el cuello, los hombros y la espalda. Favorece un sueño mas profundo y reparador, al reducir la actividad del sistema nervioso. Ayuda a equilibrar las emociones y a promover una sensación de bienestar general.',
//         image: '/img/spa/servicios/img/servicios-masajes-sedativos.webp'
//     },
//     'masaje-sueco': {
//         title: 'Masaje Sueco',
//         description: 'Alivia las tensiones musculares y aumenta la flexibilidad. Estimula la circulación sanguínea y linfática, favoreciendo la eliminación de toxinas. Alivia dolores musculares y articulares, como los asociados a la tensión o lesiones leves. Fortalece los músculos y mejora el tono muscular. Proporciona una sensación de bienestar y vitalidad.',
//         image: '/img/spa/servicios/img/servicios-masaje-sueco.webp'
//     },
//     'hidromasaje': {
//         title: 'Hidromasaje',
//         description: 'Relajación muscular aliviando tensiones y dolores. Estimula la circulacion lo que ayuda a reducir la inflamación y a oxigenar los tejidos. Alivio del estrés. Ayuda a aliviar dolores musculares y articulares. Mejora la calidad del sueño. Ayuda a suavizar y nutrir la piel.',
//         image: '/img/spa/servicios/img/servicios-hidromasaje.webp'
//     },
//     'sauna': {
//         title: 'Sauna Finlandés',
//         description: 'Ayuda a eliminar toxinas del cuerpo. Estimula el sistema inmunológico ayudando a prevenir enfermedades. La vasodilatación producida por el calor mejora la circulación sanguínea. El calor y la humedad relajan los músculos y la mente reduciendo el estrés y la ansiedad. Tambien ayuda a abrir los poros y trae un beneficio para la piel. Mejora la calidad del sueño.',
//         image: '/img/spa/servicios/img/servicios-sauna.jpg'
//     },
//     'cutis': {
//         title: 'Limpieza de cutis',
//         description: 'Eliminación de impurezas. Reduce la aparición de acné e inflamaciones. Mejor absorción de nutrientes de cremas. Piel mas radiante y saludable.',
//         image: '/img/servicios/img/'
//     },
//     'exfoliaciones': {
//         title: 'Exfoliaciones',
//         description: 'Elimina células muertas, estimulando la regeneración de la piel. Reduce la apariencia de manchas y cicatrices. Aumenta la luminosidad. Mejora la textura reduciendo la apariencia de piel áspera y seca. Facilita la absorción de los productos aplicados posteriormente. Previene vellos encarnados.',
//         image: '/img/spa/servicios/img/servicios-exfo.jpg'
//     },
//     'piscina': {
//         title: 'Piscina refrescante',
//         description: 'Refrescante y revitalizante, el lugar perfecto para relajarte y recargar energías.',
//         image: '/img/spa/servicios/img/servicios-piscina.jpg'
//     },
//     'meriendas': {
//         title: 'Meriendas',
//         description: 'Disfrutá luego de tu circuito de spa nuestras deliciosas meriendas. ',
//         image: '/img/spa/servicios/img/servicios-meriendas.jpg'
//     },
//     'circuitos': {
//         title: 'Circuitos de Spa',
//         description: 'Experimenta una experiencia única individual o en compañia con nuestros circuitos de spa, relájate, revitaliza tu cuerpo y disfruta. ',
//         image: '/img/spa/servicios/img/servicios-circuitos.jpg'
//     },
//     'promociones': {
//         title: 'Promociones',
//         description: 'No te pierdas nuestras increibles promos, aprivecha nuestras ofertas y comparte un momento de bienestar.',
//         image: '/img/servicios/img/'
//     }
// };

// serviceButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const service = button.getAttribute('data-service');
//         const details = serviceDetails[service];

//         popupImage.src = details.image;
//         popupImage.alt = details.title;
//         popupTitle.textContent = details.title;
//         popupDescription.textContent = details.description;

//         popupOverlay.classList.add('active');
//     });
// });

// popupClose.addEventListener('click', () => {
//     popupOverlay.classList.remove('active');
// });

// popupOverlay.addEventListener('click', (e) => {
//     if (e.target === popupOverlay) {
//         popupOverlay.classList.remove('active');
//     }
// });


