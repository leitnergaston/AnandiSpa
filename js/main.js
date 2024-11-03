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

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});


// ⭣⭣⭣⭣⭣ Boton volver arriba ⭣⭣⭣⭣⭣ //
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backToTopButton.style.transform = "scale(1)";
        mostrarWapp.style.transform = "scale(1)";
    } else {
        backToTopButton.style.transform = "scale(0)";
        mostrarWapp.style.transform = "scale(0)";
    }
};

backToTopButton.onclick = function () {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};
// ⭡⭡⭡⭡⭡ Boton volver arriba ⭡⭡⭡⭡⭡ //



// ⭣⭣⭣⭣⭣ Preloader de pagina inicio seccion galeria ⭣⭣⭣⭣⭣ //
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
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2000,
});

ScrollReveal().reveal('.hero', { delay: 300 });
ScrollReveal().reveal('h1, h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.promo-card, .services', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.img-about-inicio', { delay: 300 });
ScrollReveal().reveal('.about-text', { delay: 350 });
ScrollReveal().reveal('.gallery-grid', { delay: 300 });


