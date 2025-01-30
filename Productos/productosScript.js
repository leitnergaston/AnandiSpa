// Datos de ejemplo de productos con categorías
const products = [
    {
        id: 1,
        code: 'PROD001',
        name: 'Frescor Castaña',
        price: 29680,
        image: './img/001.jpg',
        description: 'Ekos castaña frescor eav de toillette 150ml dulce floral',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 2,
        code: 'PROD002',
        name: 'Pulpa Castaña',
        price: 8048,
        image: './img/002.jpg',
        description: 'Pulpa hidratante castaña para manos 75g',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 3,
        code: 'PROD003',
        name: 'Desodorante Masculino',
        price: 4500,
        image: './img/003.jpg',
        description: 'Antitranspirante roll-on homem 75ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 4,
        code: 'PROD004',
        name: 'Cadena Dorada',
        price: 3000,
        image: './img/004.jpg',
        description: 'Cadena combinada dorada',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 5,
        code: 'PROD005',
        name: 'Cadena Plateada',
        price: 3000,
        image: './img/005.jpg',
        description: 'Cadena combinada plateada',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 6,
        code: 'PROD006',
        name: 'Cadena Plateada',
        price: 3500,
        image: './img/006.jpg',
        description: 'Detalle rosa grande, gema celeste',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 7,
        code: 'PROD007',
        name: 'Cadena Larga Búho',
        price: 3000,
        image: './img/007.jpg',
        description: 'Detalle búho, colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 8,
        code: 'PROD008',
        name: 'Cadena Larga Búho',
        price: 3000,
        image: './img/008.jpg',
        description: 'Detalle búho, colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 9,
        code: 'PROD009',
        name: 'Cadena Larga Ojo',
        price: 3000,
        image: './img/009.jpg',
        description: 'Plateado con negro',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 10,
        code: 'PROD010',
        name: 'Dije Corazón Plateado',
        price: 2800,
        image: './img/010.jpg',
        description: 'Detalle calado, tamaño grande',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 11,
        code: 'PROD011',
        name: 'Dije Bigote Fucsia',
        price: 2800,
        image: './img/011.jpg',
        description: 'Bigotes fucsia, detalle strass plateado',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 12,
        code: 'PROD012',
        name: 'Dije Cruz Plateado',
        price: 3000,
        image: './img/012.jpg',
        description: 'Cruz Jesús, calada',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 13,
        code: 'PROD013',
        name: 'Dije Cristo',
        price: 5000,
        image: './img/013.jpg',
        description: 'Tamaño chico',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 14,
        code: 'PROD014',
        name: 'Dije Bolita Violeta',
        price: 3000,
        image: './img/014.jpg',
        description: 'Bola de strass',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 15,
        code: 'PROD015',
        name: 'Pulsera Plateada',
        price: 5000,
        image: './img/015.jpg',
        description: 'Calada sin dije',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 16,
        code: 'PROD016',
        name: 'Pulsera Plateada',
        price: 5000,
        image: './img/016.jpg',
        description: 'Chapa plateada',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
    },
    {
        id: 17,
        code: 'PROD017',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/017.jpg',
        description: 'Hipoalergénico color "Outono" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 18,
        code: 'PROD018',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/018.jpg',
        description: 'Hipoalergénico color "Calor" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 19,
        code: 'PROD019',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/019.jpg',
        description: 'Hipoalergénico color "Pitanga" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 20,
        code: 'PROD020',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/020.jpg',
        description: 'Hipoalergénico color "Beijo" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 21,
        code: 'PROD021',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/021.jpg',
        description: 'Hipoalergénico color "Praia" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 22,
        code: 'PROD022',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/022.jpg',
        description: 'Hipoalergénico color "Car de pimenta" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 23,
        code: 'PROD023',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/023.jpg',
        description: 'Hipoalergénico color "Una n°1" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 24,
        code: 'PROD024',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/024.jpg',
        description: 'Hipoalergénico color "Flores" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 25,
        code: 'PROD025',
        name: 'Esmalte UNA',
        price: 12000,
        image: './img/025.jpg',
        description: 'Hipoalergénico color "Flores" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 26,
        code: 'PROD026',
        name: 'Labial Faces',
        price: 13000,
        image: './img/026.jpg',
        description: 'Baton color hidra, lápiz 3,5g, aquarela Natura',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 27,
        code: 'PROD027',
        name: 'Labial Faces',
        price: 13000,
        image: './img/027.jpg',
        description: 'Baton color hidra',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 28,
        code: 'PROD028',
        name: 'Labial Faces',
        price: 13000,
        image: './img/028.jpg',
        description: 'Baton Aquarela Natura',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 29,
        code: 'PROD029',
        name: 'Labial Faces',
        price: 13000,
        image: './img/029.jpg',
        description: 'Baton color hidra',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 30,
        code: 'PROD030',
        name: 'Labial Faces',
        price: 13000,
        image: './img/030.jpg',
        description: 'Baton color hidra',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 31,
        code: 'PROD031',
        name: 'Labial Raden',
        price: 1500,
        image: './img/031.jpg',
        description: 'Lapiz rojo',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
    },
    {
        id: 32,
        code: 'PROD032',
        name: 'Labial Raden',
        price: 1500,
        image: './img/032.jpg',
        description: 'Lapiz violeta',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
    },
    {
        id: 33,
        code: 'PROD033',
        name: 'Labial UNA',
        price: 23000,
        image: './img/033.jpg',
        description: 'Batom CC lapiz labial, 3.8g, "Rouge 8C"',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 34,
        code: 'PROD034',
        name: 'Labial UNA',
        price: 16000,
        image: './img/034.jpg',
        description: 'Batom acetinado en óleo 7ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 35,
        code: 'PROD035',
        name: 'Labial UNA',
        price: 16000,
        image: './img/035.jpg',
        description: 'Batom satinado en óleo',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 36,
        code: 'PROD036',
        name: 'Labial UNA',
        price: 16000,
        image: './img/036.jpg',
        description: 'Batom satinado en óleo',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 37,
        code: 'PROD037',
        name: 'Labial UNA',
        price: 16000,
        image: './img/037.jpg',
        description: 'Batom satinado en óleo',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 38,
        code: 'PROD038',
        name: 'Esmalte Jactans',
        price: 1500,
        image: './img/038.jpg',
        description: 'Violeta',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
    },
    {
        id: 39,
        code: 'PROD039',
        name: 'Neutralizador de espinillas Faces',
        price: 11000,
        image: './img/039.jpg',
        description: '10g',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
    },
    {
        id: 40,
        code: 'PROD040',
        name: 'Sombra de ojos Eye Shadow',
        price: 2500,
        image: './img/040.jpg',
        description: 'Combinado 2 colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
    },
    {
        id: 41,
        code: 'PROD041',
        name: 'Sombra de ojos Eye Shadow',
        price: 2500,
        image: './img/041.jpg',
        description: 'Combinado 2 colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
    },
    {
        id: 42,
        code: 'PROD042',
        name: 'Esponja Violetta',
        price: 3500,
        image: './img/042.jpg',
        description: 'Para maquillaje, 2 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
    },
    {
        id: 43,
        code: 'PROD043',
        name: 'Apaga Vela Corona',
        price: 3000,
        image: './img/043.jpg',
        description: 'Corona plateada de acero',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios'
    },
    {
        id: 44,
        code: 'PROD044',
        name: 'Apaga Vela Piramide',
        price: 3000,
        image: './img/044.jpg',
        description: 'Piramide plateada de acero',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios'
    },
    {
        id: 45,
        code: 'PROD045',
        name: 'Apaga Vela Pluma',
        price: 3000,
        image: './img/045.jpg',
        description: 'Pluma plateada de acero',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios'
    },
    {
        id: 46,
        code: 'PROD046',
        name: 'Apaga Vela Llave',
        price: 3000,
        image: './img/046.jpg',
        description: 'Llave plateada de acero',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios'
    },
];

const productsPerPage = 10;
let currentPage = 1;
let currentCategory = 'all';

// Función para crear los botones de categoría
function createCategoryButtons() {
    const categoryFilter = document.getElementById('category-filter');
    const categories = ['all', ...new Set(products.map(product => product.category))];
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category === 'all' ? 'Todos' : category;
        button.className = 'category-btn';
        button.setAttribute('data-category', category);
        button.addEventListener('click', () => {
            currentCategory = category;
            currentPage = 1;
            updateActiveCategory();
            createProductCards();
        });
        categoryFilter.appendChild(button);
    });
}

// Función para actualizar la categoría activa
function updateActiveCategory() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === currentCategory) {
            btn.classList.add('active');
        }
    });
}

// Función para filtrar productos por categoría
function filterProductsByCategory(products, category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Función para crear las tarjetas de producto
function createProductCards() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const filteredProducts = filterProductsByCategory(products, currentCategory);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);

    pageProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <p class="product-code">Código: ${product.code}</p>
                <h2>${product.name}</h2>
                <p class="product-price">$${new Intl.NumberFormat('es-ES').format(Math.floor(product.price))}</p>
                <button class="btn view-details" data-id="${product.id}">Ver detalles</button>
                <a href="${product.orderLink}" class="btn order" data-id="${product.id}" target="_blank">Pedir</a>
            </div>
        `;
        productList.appendChild(card);
    });

    // Añadir event listeners a los botones
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', showProductDetails);
    });

    updatePagination(totalPages);
}

// Función para actualizar la paginación
function updatePagination(totalPages) {
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            createProductCards();
        }
    });
    prevButton.disabled = currentPage === 1;
    paginationElement.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            createProductCards();
        }
    });
    nextButton.disabled = currentPage === totalPages;
    paginationElement.appendChild(nextButton);
}

// Función para mostrar los detalles del producto
function showProductDetails(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);

    const modal = document.getElementById('product-modal');
    const productDetails = document.getElementById('product-details');
    
    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <span class="product-category">${product.category}</span>
        <div class="imgContentDetalle">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <p><strong>Código:</strong> ${product.code}</p>
        <p><strong>Precio:</strong> $${new Intl.NumberFormat('es-ES').format(Math.floor(product.price))}</p>
        <p>${product.description}</p>
        <a href="${product.orderLink}" class="btn order" data-id="${product.id}">Pedir ahora</a>
    `;

    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    createCategoryButtons();
    createProductCards();

    // Cerrar el modal cuando se hace clic en la X
    document.querySelector('.close').addEventListener('click', closeModal);

    // Cerrar el modal cuando se hace clic fuera de él
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('product-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
});