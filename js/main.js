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
    } else {
        backToTopButton.style.transform = "scale(0)";
    }
};

backToTopButton.onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};
// ⭡⭡⭡⭡⭡ Boton volver arriba ⭡⭡⭡⭡⭡ //