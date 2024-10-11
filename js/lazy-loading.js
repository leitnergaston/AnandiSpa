// Configuracion nueva para que carguen lenta la galeria una sola vez a la primera vista, ya despues si se scrollea de nuevo a la seccion galeria carguen rapido y no esperar de nuevo
const loadedImages = new Set();

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (!loadedImages.has(img.dataset.src)) {
                        img.src = img.dataset.src;
                        img.onload = () => {
                            img.classList.add('loaded');
                            loadedImages.add(img.dataset.src);
                        };
                    } else {
                        img.classList.add('loaded');
                    }
                    observer.unobserve(img);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        document.querySelectorAll('.gallery-item img').forEach(img => {
            if (loadedImages.has(img.dataset.src)) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
            } else {
                observer.observe(img);
            }
        });

        // Opcional: Guardar el estado de las imágenes cargadas en sessionStorage
        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('loadedImages', JSON.stringify([...loadedImages]));
        });

        // Opcional: Recuperar el estado de las imágenes cargadas al cargar la página
        window.addEventListener('load', () => {
            const storedImages = JSON.parse(sessionStorage.getItem('loadedImages'));
            if (storedImages) {
                storedImages.forEach(src => loadedImages.add(src));
                document.querySelectorAll('.gallery-item img').forEach(img => {
                    if (loadedImages.has(img.dataset.src)) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                    }
                });
            }
        });


// Configuracion anterior para que carguen lento siempre que sea vista la seccion
// Configuración del Intersection Observer
// const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
// };

// // Callback para el Intersection Observer
// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             if (entry.target.tagName.toLowerCase() === 'img') {
//                 // Lazy loading para imágenes
//                 entry.target.src = entry.target.dataset.src;
//                 entry.target.removeAttribute('data-src');
//             } else {
//                 // Lazy loading para secciones
//                 entry.target.classList.add('loaded');
//                 // Aquí puedes añadir lógica adicional para cargar el contenido de la sección
//             }
//             observer.unobserve(entry.target);
//         }
//     });
// };

// // Crear el Intersection Observer
// const observer = new IntersectionObserver(observerCallback, observerOptions);

// // Observar imágenes y secciones
// document.querySelectorAll('img[data-src], .lazy-section').forEach(el => {
//     observer.observe(el);
// });
