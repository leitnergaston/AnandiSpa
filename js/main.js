// ⭣⭣⭣⭣⭣ Mobile menu toggle ⭣⭣⭣⭣⭣ //
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// ⭡⭡⭡⭡⭡ mobile menu toggle ⭡⭡⭡⭡⭡ //


// ⭣⭣⭣⭣⭣ Boton volver arriba ⭣⭣⭣⭣⭣ //
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backToTopButton.style.transform = "scale(1)";
        mostrarWapp.style.transform = "scale(1)";
    } else {
        backToTopButton.style.transform = "scale(0)";
        mostrarWapp.style.transform = "scale(0)";
    }
};

backToTopButton.onclick = function() {
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

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

sr.reveal('.hero',{delay:300});
sr.reveal('.container h2',{});
sr.reveal('.promo-card',{delay:300});
sr.reveal('.services',{delay:300});
sr.reveal('.img-about-inicio',{delay:300});
sr.reveal('.about-text',{delay:350});
sr.reveal('.gallery-grid',{delay:300});
sr.reveal('.gallery .btn',{delay:400});