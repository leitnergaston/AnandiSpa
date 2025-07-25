document.addEventListener('DOMContentLoaded', function () {
    //* Funcionalidad menu hamburguesa
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

    //* Año actualizado automaticamente en footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    //* ========== galeria de imagenes con nav ========== //
    // Select the gallery section
    const gallerySection = document.getElementById('galeria');

    // If the gallery section doesn't exist on the page, do nothing further
    if (!gallerySection) {
        return;
    }

    // Get all tab navigation links and the container for tab content panes
    const tabLinks = gallerySection.querySelectorAll('.gallery-nav-link');
    const tabPanesContainer = gallerySection.querySelector('.tab-content');

    // If there are no tab links or no tab panes container, do nothing further
    if (!tabLinks.length || !tabPanesContainer) {
        return;
    }

    const tabPanes = tabPanesContainer.querySelectorAll('.tab-pane');

    // Function to handle switching tabs
    function switchTab(clickedLink) {
        // Remove 'active' class from all tab links
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Remove 'active' class from all tab content panes
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
        });

        // Add 'active' class to the clicked navigation link
        clickedLink.classList.add('active');

        // Get the ID of the target content pane from the link's href attribute
        const targetPaneId = clickedLink.getAttribute('href').substring(1); // e.g., 'tab-2'
        const targetPane = document.getElementById(targetPaneId);

        // If the target pane exists, add 'active' class to it to display it
        if (targetPane) {
            targetPane.classList.add('active');
        }
    }

    // Attach event listeners to each tab navigation link
    tabLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default anchor link behavior (e.g., jumping to the hash)
            event.preventDefault();
            // Call the function to switch to the tab associated with this link
            switchTab(this);
        });
    });

    // Initial setup: Ensure the tab marked 'active' in HTML is correctly displayed.
    // This also cleans up any potential multiple 'active' classes in panes.
    const initiallyActiveLink = gallerySection.querySelector('.gallery-nav-link.active');
    if (initiallyActiveLink) {
        // Deactivate all panes first to ensure a clean state, except the one that should be active.
        const initialTargetPaneId = initiallyActiveLink.getAttribute('href').substring(1);
        tabPanes.forEach(pane => {
            if (pane.id === initialTargetPaneId) {
                pane.classList.add('active'); // Ensure the correct one is active
            } else {
                pane.classList.remove('active'); // Deactivate others
            }
        });
        // Ensure the link itself is active and others are not (already handled by HTML, but good for consistency)
        tabLinks.forEach(link => {
            if (link === initiallyActiveLink) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

    } else if (tabLinks.length > 0 && tabPanes.length > 0) {
        // Fallback: If no link/pane is 'active' in HTML, activate the first tab by default.
        // This ensures the gallery is not empty if HTML is misconfigured.
        // (The provided HTML has tab-1 active, so this is a safety net)
        tabLinks[0].classList.add('active');
        tabPanes[0].classList.add('active');
    }

    //* ========== BANNER TERMINOS Y CONDICIONES ========== //
    const termsBanner = document.getElementById('terms-banner');
    const acceptButton = document.getElementById('accept-terms-btn');
    const termsAcceptedKey = 'spaTermsAndConditionsAccepted_v1';

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

});






//* ========== Preloader de pagina inicio seccion galeria ========== //
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => {
                img.classList.add('loaded');
            };
            observer.unobserve(img);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll('.gallery-item img').forEach(img => {
    observer.observe(img);
});


// ========== Scroll Reveal ========== //
// ScrollReveal({
//     reset: false,
//     distance: '60px',
//     duration: 2000,
// });

// ScrollReveal().reveal('.hero', { delay: 300 });
// ScrollReveal().reveal('h1, h2', { delay: 500, origin: 'left' });
// ScrollReveal().reveal('.promo-card, .services', { delay: 600, origin: 'bottom' });
// ScrollReveal().reveal('.img-about-inicio', { delay: 300 });
// ScrollReveal().reveal('.about-text', { delay: 350 });
// ScrollReveal().reveal('.gallery-grid', { delay: 300 });


//* ========== Efecto scroll sections active link del navbar ========== //
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add("active")
        }
        else {
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove("active")
        }
    })
}


// ========== etiqueta hover tooltip para mini promo cards del hero ========== //
// const promoCards = document.querySelectorAll('.mini-promo-card');

// promoCards.forEach(card => {
//     const tooltip = card.querySelector('.tooltip');

//     card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         tooltip.style.left = `${x}px`;
//         tooltip.style.top = `${y}px`;
//         tooltip.style.opacity = '1';
//     });

//     card.addEventListener('mouseleave', () => {
//         tooltip.style.opacity = '0';
//     });
// });


//* ========== Promo Popup de terminos y condiciones ========== //
let redirectUrl = '';

function mostrarPromoPopup(url) {
    // Guardamos la URL personalizada de whatsapp que esta en el boton de cada card en la variable redirectUrl
    redirectUrl = url;
    // Mostramos el popup
    document.getElementById("terminos-promo-popup").style.display = "flex";
}

function aceptarPromoPopup() {
    // Redirigimos al link personalizado de whatsapp y lo abrimos en otra pestaña
    window.open(redirectUrl, "_blank");
    // Cerramos el popup despues de redirigir
    cerrarPromoPopup();
}

function cerrarPromoPopup() {
    // Ocultamos el popup
    document.getElementById("terminos-promo-popup").style.display = "none";
    // Reseteamos el link
    redirectUrl = '';
}


// ========== Testimonial Slider ========== //
// const testimonialContainer = document.querySelector('.testimonial-container');
// const testimonialCards = document.querySelectorAll('.testimonial-card');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// let currentTestimonial = 0;

// function showTestimonial(index) {
//     testimonialContainer.style.transform = `translateX(-${index * 100}%)`;
// }

// function nextTestimonial() {
//     currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
//     showTestimonial(currentTestimonial);
// }

// function prevTestimonial() {
//     currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
//     showTestimonial(currentTestimonial);
// }

//// nextBtn.addEventListener('click', nextTestimonial);
//// prevBtn.addEventListener('click', prevTestimonial);

// Auto-slide for testimonials
// setInterval(nextTestimonial, 5000); // Cambia de testimonio cada x milisegundos


//* ========== DESTACADAS =========== //
new Swiper('.destacadas-card-wrapper', {
    loop: true,
    spaceBetween: 30,

    autoplay: false,

    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1020: {
            slidesPerView: 3
        },
    }


});

//* ========== TESTIMONIOS 2 =========== //
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    autoplay: {
        delay: 4000,
    },

    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1020: {
            slidesPerView: 3
        },
    }


});



//* ========== Popup Servicios ========== //
const serviceButtons = document.querySelectorAll('.service-btn');
const popupOverlay = document.querySelector('.popup-servicios');
const popupContent = document.querySelector('.popup-servicios-content');
const popupImage = document.querySelector('.popup-servicios-img');
const popupTitle = document.querySelector('.popup-servicios-title');
const popupDescription = document.querySelector('.popup-servicios-description');
const popupClose = document.querySelector('.popup-servicios-close');

const serviceDetails = {
    'masajes-descontracturantes': {
        title: 'Masajes Descontracturantes',
        description: 'Alivia el dolor. Disuelve contracturas. Activa la circulación sanguínea y de la linfa eliminando toxinas. Relaja y ayuda a dormir bien. Alivia las migrañas y dolores de cabeza. Ayuda a evuacuar mejor. Mantiene la piel elástica eliminando células muertas y la nutre.',
        image: '/img/spa/servicios/img/servicios-masaje-descontracturante.jpg'
    },
    'masajes-relajantes': {
        title: 'Masajes Relajantes',
        description: 'Aumenta la función inmune. Mejora la calidad del sueño. Mejora la movilidad de las articulaciones. Estimula el movimiento linfático. Reduce el dolor muscular. Mejora la actividad mental. Agiliza la curación de lesiones de tejidos blandos. Alivia el estrés. Mejora la circulación y reduce la tensión muscular.',
        image: '/img/spa/servicios/img/servicios-masajes-relajantes.jpg'
    },
    'masajes-sedativos': {
        title: 'Masajes Sedativos',
        description: 'Induce a un estado de calma y tranquilidad, disminuyendo la ansiedad y el estrés. Alivia las tensiones musculares, especialmente en áreas como el cuello, los hombros y la espalda. Favorece un sueño mas profundo y reparador, al reducir la actividad del sistema nervioso. Ayuda a equilibrar las emociones y a promover una sensación de bienestar general.',
        image: '/img/spa/servicios/img/servicios-masajes-sedativos.webp'
    },
    'masaje-sueco': {
        title: 'Masaje Sueco',
        description: 'Alivia las tensiones musculares y aumenta la flexibilidad. Estimula la circulación sanguínea y linfática, favoreciendo la eliminación de toxinas. Alivia dolores musculares y articulares, como los asociados a la tensión o lesiones leves. Fortalece los músculos y mejora el tono muscular. Proporciona una sensación de bienestar y vitalidad.',
        image: '/img/spa/servicios/img/servicios-masaje-sueco.webp'
    },
    'hidromasaje': {
        title: 'Hidromasaje',
        description: 'Relajación muscular aliviando tensiones y dolores. Estimula la circulacion lo que ayuda a reducir la inflamación y a oxigenar los tejidos. Alivio del estrés. Ayuda a aliviar dolores musculares y articulares. Mejora la calidad del sueño. Ayuda a suavizar y nutrir la piel.',
        image: '/img/spa/servicios/img/servicios-hidromasaje.webp'
    },
    'sauna': {
        title: 'Sauna Finlandés',
        description: 'Ayuda a eliminar toxinas del cuerpo. Estimula el sistema inmunológico ayudando a prevenir enfermedades. La vasodilatación producida por el calor mejora la circulación sanguínea. El calor y la humedad relajan los músculos y la mente reduciendo el estrés y la ansiedad. Tambien ayuda a abrir los poros y trae un beneficio para la piel. Mejora la calidad del sueño.',
        image: '/img/spa/servicios/img/servicios-sauna.jpg'
    },
    'cutis': {
        title: 'Limpieza de cutis',
        description: 'Eliminación de impurezas. Reduce la aparición de acné e inflamaciones. Mejor absorción de nutrientes de cremas. Piel mas radiante y saludable.',
        image: '/img/servicios/img/'
    },
    'exfoliaciones': {
        title: 'Exfoliaciones',
        description: 'Elimina células muertas, estimulando la regeneración de la piel. Reduce la apariencia de manchas y cicatrices. Aumenta la luminosidad. Mejora la textura reduciendo la apariencia de piel áspera y seca. Facilita la absorción de los productos aplicados posteriormente. Previene vellos encarnados.',
        image: '/img/spa/servicios/img/servicios-exfo.jpg'
    },
    'piscina': {
        title: 'Piscina refrescante',
        description: 'Refrescante y revitalizante, el lugar perfecto para relajarte y recargar energías.',
        image: '/img/spa/servicios/img/servicios-piscina.jpg'
    },
    'meriendas': {
        title: 'Meriendas',
        description: 'Disfrutá luego de tu circuito de spa nuestras deliciosas meriendas. ',
        image: '/img/spa/servicios/img/servicios-meriendas.jpg'
    },
    'circuitos': {
        title: 'Circuitos de Spa',
        description: 'Experimenta una experiencia única individual o en compañia con nuestros circuitos de spa, relájate, revitaliza tu cuerpo y disfruta. ',
        image: '/img/spa/servicios/img/servicios-circuitos.jpg'
    },
    'promociones': {
        title: 'Promociones',
        description: 'No te pierdas nuestras increibles promos, aprivecha nuestras ofertas y comparte un momento de bienestar.',
        image: '/img/servicios/img/'
    }
};

serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const service = button.getAttribute('data-service');
        const details = serviceDetails[service];

        popupImage.src = details.image;
        popupImage.alt = details.title;
        popupTitle.textContent = details.title;
        popupDescription.textContent = details.description;

        popupOverlay.classList.add('active');
    });
});

popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});


//* ===== Imagen ampliada de promos ===== //
function openImagePopup(imageUrl) {
    document.getElementById('popupImageAmpliada').src = imageUrl;
    document.getElementById('imagePopup').style.display = 'flex';
}

function closeImagePopup() {
    document.getElementById('imagePopup').style.display = 'none';
}

// Agregar evento de clic a las imágenes de promoción
document.querySelectorAll('.promo-card .image-container').forEach(function (container) {
    container.addEventListener('click', function () {
        const img = this.querySelector('img');
        const largeImageUrl = img.src.replace('height=200&width=250', 'height=600&width=800');
        openImagePopup(largeImageUrl);
    });
});

// Cerrar el popup de imagen si se hace clic fuera de la imagen
document.getElementById('imagePopup').addEventListener('click', function (event) {
    if (event.target === this) {
        closeImagePopup();
    }
});


//* ===== SWIPER JS promos destacadas ===== //
// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     slidesPerView: 1,
//     spaceBetween: 10,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },


//     breakpoints: {
//         480: {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         },
//         620: {
//             slidesPerView: 1,
//             spaceBetween: 50,
//         },
//         680: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//         },
//         920: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//         },
//         1280: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//     }
// });