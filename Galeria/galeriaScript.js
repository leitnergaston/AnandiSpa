document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    
    const galeriaImagenes = {
        lugar: [
            './Assets/imgLugar/lugar1.jpg',
            './Assets/imgLugar/lugar101.jpg',
            './Assets/imgLugar/lugar102.jpg',
            './Assets/imgLugar/lugar49.jpg',
            './Assets/imgLugar/lugar67.jpg',
            './Assets/imgLugar/lugar7.jpg',
            './Assets/imgLugar/lugar76.jpg',
            './Assets/imgLugar/lugar80.jpg',
            './Assets/imgLugar/lugar81.jpg',
            './Assets/imgLugar/lugar83.jpg',
            './Assets/imgLugar/lugar90.jpg',
            './Assets/imgLugar/lugar96.jpg',
            './Assets/imgLugar/lugar98.jpg',
            './Assets/imgLugar/lugar99.jpg',
            // Agrega más rutas de imágenes aquí
        ],
        meriendas: [
            './Assets/imgMeriendas/meriendas1.jpg',
            './Assets/imgMeriendas/meriendas2.jpg',
            './Assets/imgMeriendas/meriendas3.jpg',
            './Assets/imgMeriendas/meriendas4.jpg',
            './Assets/imgMeriendas/meriendas5.jpg',
            './Assets/imgMeriendas/meriendas6.jpg',
            './Assets/imgMeriendas/meriendas7.jpg',
            './Assets/imgMeriendas/meriendas8.jpg',
            './Assets/imgMeriendas/meriendas9.jpg',
            './Assets/imgMeriendas/meriendas10.jpg',
            './Assets/imgMeriendas/meriendas11.jpg',
            './Assets/imgMeriendas/meriendas12.jpg',
            './Assets/imgMeriendas/meriendas13.jpg',
            './Assets/imgMeriendas/meriendas14.jpg',
            './Assets/imgMeriendas/meriendas15.jpg',
            // Agrega más rutas de imágenes aquí
        ],
        clientes: [
            './Assets/imgClientes/clientes1.jpg',
            './Assets/imgClientes/clientes2.jpg',
            './Assets/imgClientes/clientes3.jpg',
            './Assets/imgClientes/clientes4.jpg',
            './Assets/imgClientes/clientes5.jpg',
            './Assets/imgClientes/clientes6.jpg',
            './Assets/imgClientes/clientes7.jpg',
            './Assets/imgClientes/clientes8.jpg',
            './Assets/imgClientes/clientes9.jpg',
            './Assets/imgClientes/clientes10.jpg',
            './Assets/imgClientes/clientes11.jpg',
            './Assets/imgClientes/clientes12.jpg',
            './Assets/imgClientes/clientes13.jpg',
            './Assets/imgClientes/clientes14.jpg',
            './Assets/imgClientes/clientes15.jpg',
            './Assets/imgClientes/clientes16.jpg',
            './Assets/imgClientes/clientes17.jpg',
            './Assets/imgClientes/clientes18.jpg',
            './Assets/imgClientes/clientes19.jpg',
            './Assets/imgClientes/clientes20.jpg',
            // Agrega más rutas de imágenes aquí
        ]
    };
    
    carousels.forEach(carousel => {
        const container = carousel.querySelector('.carousel-container');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentPage = 0;
        
        const carouselId = carousel.parentElement.id;
        const images = galeriaImagenes[carouselId];
        
        // Crear páginas de carrusel
        const imagesPerPage = 10;
        const pages = Math.ceil(images.length / imagesPerPage);
        
        for (let i = 0; i < pages; i++) {
            const page = document.createElement('div');
            page.classList.add('carousel-page');
            
            for (let j = i * imagesPerPage; j < (i + 1) * imagesPerPage && j < images.length; j++) {
                const item = document.createElement('div');
                item.classList.add('carousel-item');
                const img = document.createElement('img');
                img.src = images[j];
                img.alt = `Imagen de ${carouselId}`;
                item.appendChild(img);
                page.appendChild(item);
            }
            
            container.appendChild(page);
        }
        
        const updateCarousel = () => {
            container.style.transform = `translateX(-${currentPage * 100}%)`;
        };
        
        const moveCarousel = (direction) => {
            if (direction === 'next' && currentPage < pages - 1) {
                currentPage++;
            } else if (direction === 'prev' && currentPage > 0) {
                currentPage--;
            }
            updateCarousel();
        };
        
        prevButton.addEventListener('click', () => moveCarousel('prev'));
        nextButton.addEventListener('click', () => moveCarousel('next'));
        
        // Inicializar el carrusel
        updateCarousel();
    });
});

