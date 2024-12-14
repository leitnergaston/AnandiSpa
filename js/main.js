document.addEventListener('DOMContentLoaded', function () {
    // // Carrusel de imagenes
    // const slides = document.querySelectorAll('.carousel-slide');
    // let currentSlide = 0;

    // function nextSlide() {
    //     slides[currentSlide].classList.remove('active');
    //     currentSlide = (currentSlide + 1) % slides.length;
    //     slides[currentSlide].classList.add('active');
    // }

    // setInterval(nextSlide, 5000);

    // Funcionalidad menu hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar menu cuando se hace clic en un link del navbar
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Cerrar menu cuando se hace clic en cualquier lado
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});




// ========== Preloader de pagina inicio seccion galeria ========== //
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


// ========== Efecto scroll sections active link del navbar ========== //
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
const promoCards = document.querySelectorAll('.mini-promo-card');

promoCards.forEach(card => {
    const tooltip = card.querySelector('.tooltip');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
        tooltip.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});


// ========== Promo Popup de terminos y condiciones ========== //
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
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

// nextBtn.addEventListener('click', nextTestimonial);
// prevBtn.addEventListener('click', prevTestimonial);

// Auto-slide for testimonials
setInterval(nextTestimonial, 4000); // Cambia de testimonio cada 7 segundos


// ========== Popup Servicios ========== //
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
        image: '/img/servicios/img/servicios-masaje-descontracturante.jpg'
    },
    'masajes-relajantes': {
        title: 'Masajes Relajantes',
        description: 'Aumenta la función inmune. Mejora la calidad del sueño. Mejora la movilidad de las articulaciones. Estimula el movimiento linfático. Reduce el dolor muscular. Mejora la actividad mental. Agiliza la curación de lesiones de tejidos blandos. Alivia el estrés. Mejora la circulación y reduce la tensión muscular.',
        image: '/img/servicios/img/servicios-masajes-relajantes.jpg'
    },
    'masajes-sedativos': {
        title: 'Masajes Sedativos',
        description: 'Induce a un estado de calma y tranquilidad, disminuyendo la ansiedad y el estrés. Alivia las tensiones musculares, especialmente en áreas como el cuello, los hombros y la espalda. Favorece un sueño mas profundo y reparador, al reducir la actividad del sistema nervioso. Ayuda a equilibrar las emociones y a promover una sensación de bienestar general.',
        image: '/img/servicios/img/servicios-masajes-sedativos.webp'
    },
    'masaje-sueco': {
        title: 'Masaje Sueco',
        description: 'Alivia las tensiones musculares y aumenta la flexibilidad. Estimula la circulación sanguínea y linfática, favoreciendo la eliminación de toxinas. Alivia dolores musculares y articulares, como los asociados a la tensión o lesiones leves. Fortalece los músculos y mejora el tono muscular. Proporciona una sensación de bienestar y vitalidad.',
        image: '/img/servicios/img/servicios-masaje-sueco.webp'
    },
    'hidromasaje': {
        title: 'Hidromasaje',
        description: 'Relajación muscular aliviando tensiones y dolores. Estimula la circulacion lo que ayuda a reducir la inflamación y a oxigenar los tejidos. Alivio del estrés. Ayuda a aliviar dolores musculares y articulares. Mejora la calidad del sueño. Ayuda a suavizar y nutrir la piel.',
        image: '/img/servicios/img/servicios-hidromasaje.webp'
    },
    'sauna': {
        title: 'Sauna Finlandés',
        description: 'Ayuda a eliminar toxinas del cuerpo. Estimula el sistema inmunológico ayudando a prevenir enfermedades. La vasodilatación producida por el calor mejora la circulación sanguínea. El calor y la humedad relajan los músculos y la mente reduciendo el estrés y la ansiedad. Tambien ayuda a abrir los poros y trae un beneficio para la piel. Mejora la calidad del sueño.',
        image: '/img/servicios/img/servicios-sauna.jpg'
    },
    'cutis': {
        title: 'Limpieza de cutis',
        description: 'Eliminación de impurezas. Reduce la aparición de acné e inflamaciones. Mejor absorción de nutrientes de cremas. Piel mas radiante y saludable.',
        image: '/img/servicios/img/'
    },
    'exfoliaciones': {
        title: 'Exfoliaciones',
        description: 'Elimina células muertas, estimulando al regeneración de la piel. Reduce la apariencia de manchas y cicatrices. Aumenta la luminosidad. Mejora la textura reduciendo la apariencia de piel áspera y seca. Facilita la absorción de los productos aplicados posteriormente. Previene vellos encarnados.',
        image: '/img/servicios/img/servicios-exfo.jpg'
    },
    'piscina': {
        title: 'Piscina refrescante',
        description: 'Refrescante y revitalizante, el lugar perfecto para relajarte y recargar energías.',
        image: '/img/servicios/img/servicios-piscina.jpg'
    },
    'meriendas': {
        title: 'Meriendas',
        description: 'Disfrutá luego de tu circuito de spa nuestras deliciosas meriendas. ',
        image: '/img/servicios/img/servicios-meriendas.jpg'
    },
    'circuitos': {
        title: 'Circuitos de Spa',
        description: 'Experimenta una experiencia única individual o en compañia con nuestros circuitos de spa, relájate, revitaliza tu cuerpo y disfruta. ',
        image: '/img/servicios/img/servicios-circuitos.jpg'
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


// ===== Imagen ampliada de promos ===== //
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


// ===== SWIPER JS promos destacadas ===== //
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    breakpoints: {
        620: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
});