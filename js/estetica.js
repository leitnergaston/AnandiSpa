document.addEventListener('DOMContentLoaded', function () {

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


