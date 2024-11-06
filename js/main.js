document.addEventListener('DOMContentLoaded', function () {
    // Carrusel de imagenes
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);

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


// ========== Boton wapp flotante ========== //
const backToTopButton = document.getElementById("mostrarWapp");

window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backToTopButton.style.transform = "scale(1)";
    } else {
        backToTopButton.style.transform = "scale(0)";
    }
};

backToTopButton.onclick = function () {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};



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
setInterval(nextTestimonial, 3000); // Cambia de testimonio cada 7 segundos
