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
        servicios: [
            './Assets/imgServicios/exfoliacion1.jpg',
            './Assets/imgServicios/exfoliacion2.jpg',
            './Assets/imgServicios/exfoliacion3.jpg',
            './Assets/imgServicios/exfoliacion4.jpg',
            './Assets/imgServicios/exfoliacion5.jpg',
            './Assets/imgServicios/exfoliacion6.jpg',
            './Assets/imgServicios/exfoliacion7.jpg',
            './Assets/imgServicios/facial1.jpg',
            './Assets/imgServicios/facial2.jpg',
            './Assets/imgServicios/facial3.jpg',
            './Assets/imgServicios/facial4.jpg',
            './Assets/imgServicios/facial5.jpg',
            './Assets/imgServicios/facial6.jpg',
            './Assets/imgServicios/facial7.jpg',
            './Assets/imgServicios/hidro1.jpg',
            './Assets/imgServicios/hidro2.jpg',
            './Assets/imgServicios/hidro3.jpg',
            './Assets/imgServicios/hidro4.jpg',
            './Assets/imgServicios/pial1.jpg',
            './Assets/imgServicios/pial2.jpg',
            './Assets/imgServicios/pial3.jpg',
            './Assets/imgServicios/pial4.jpg',
            './Assets/imgServicios/pial5.jpg',
            './Assets/imgServicios/pial6.jpg',
            './Assets/imgServicios/pial7.jpg',
            './Assets/imgServicios/pial8.jpg',
            './Assets/imgServicios/pial9.jpg',
            './Assets/imgServicios/sauna1.jpg',
            './Assets/imgServicios/sauna2.jpg',
            './Assets/imgServicios/sauna3.jpg',
            './Assets/imgServicios/sauna4.jpg',
            './Assets/imgServicios/sauna5.jpg',
            './Assets/imgServicios/sauna6.jpg',
            './Assets/imgServicios/sauna7.jpg',
            './Assets/imgServicios/sauna8.jpg',
            './Assets/imgServicios/sauna9.jpg',
            './Assets/imgServicios/sauna10.jpg',
            './Assets/imgServicios/sauna11.jpg',
            './Assets/imgServicios/sauna12.jpg',
            './Assets/imgServicios/piedras1.jpg',
            './Assets/imgServicios/piedras2.jpg',
            './Assets/imgServicios/piedras3.jpg',
            './Assets/imgServicios/piedras4.jpg',
            './Assets/imgServicios/piedras5.jpg',
            './Assets/imgServicios/piedras6.jpg',
            './Assets/imgServicios/piedras7.jpg',
            './Assets/imgServicios/piedras8.jpg',
            './Assets/imgServicios/piedras9.jpg',
            './Assets/imgServicios/piedras10.jpg',
            './Assets/imgServicios/piedras11.jpg',
            './Assets/imgServicios/piedras12.jpg',
            './Assets/imgServicios/piedras13.jpg',
            './Assets/imgServicios/piedras14.jpg',
            './Assets/imgServicios/piedras15.jpg',
            './Assets/imgServicios/piedras16.jpg',
            './Assets/imgServicios/piedras17.jpg',
            './Assets/imgServicios/piedras18.jpg',
            './Assets/imgServicios/piedras19.jpg',
            './Assets/imgServicios/piedras20.jpg',
            './Assets/imgServicios/piedras21.jpg',
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
            './Assets/imgClientes/clientes21.jpg',
            './Assets/imgClientes/clientes22.jpg',
            './Assets/imgClientes/clientes23.jpg',
            './Assets/imgClientes/clientes24.jpg',
            './Assets/imgClientes/clientes25.jpg',
            './Assets/imgClientes/clientes26.jpg',
            './Assets/imgClientes/clientes27.jpg',
            './Assets/imgClientes/clientes28.jpg',
            './Assets/imgClientes/clientes29.jpg',
            './Assets/imgClientes/clientes30.jpg',
            './Assets/imgClientes/clientes31.jpg',
            './Assets/imgClientes/clientes32.jpg',
            './Assets/imgClientes/clientes33.jpg',
            './Assets/imgClientes/clientes34.jpg',
            './Assets/imgClientes/clientes35.jpg',
            './Assets/imgClientes/clientes36.jpg',
            './Assets/imgClientes/clientes37.jpg',
            './Assets/imgClientes/clientes38.jpg',
            './Assets/imgClientes/clientes39.jpg',
            './Assets/imgClientes/clientes40.jpg',
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

