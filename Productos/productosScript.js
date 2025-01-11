// Datos de ejemplo de productos con categorías
const products = [
    {
        id: 1,
        code: 'PROD001',
        name: 'Nombre',
        price: 0,
        image: './img/001.jpg',
        description: 'Un smartphone de última generación con características increíbles.',
        orderLink: 'https://ejemplo.com/pedir/smartphone-x',
        category: 'Natura'
    },
    {
        id: 2,
        code: 'PROD002',
        name: 'Nombre',
        price: 0,
        image: './img/002.jpg',
        description: 'Una laptop potente para profesionales y entusiastas.',
        orderLink: 'https://ejemplo.com/pedir/laptop-pro',
        category: 'Natura'
    },
    {
        id: 3,
        code: 'PROD003',
        name: 'Nombre',
        price: 0,
        image: './img/003.jpg',
        description: 'Un reloj inteligente con múltiples funciones para tu día a día.',
        orderLink: 'https://ejemplo.com/pedir/smartwatch-y',
        category: 'Natura'
    },
    {
        id: 4,
        code: 'PROD004',
        name: 'Nombre',
        price: 0,
        image: './img/004.jpg',
        description: 'Una tablet versátil para trabajo y entretenimiento.',
        orderLink: 'https://ejemplo.com/pedir/tablet-z',
        category: 'Joyeria'
    },
    {
        id: 5,
        code: 'PROD005',
        name: 'Nombre',
        price: 0,
        image: './img/005.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 6,
        code: 'PROD006',
        name: 'Nombre',
        price: 0,
        image: './img/006.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 7,
        code: 'PROD007',
        name: 'Nombre',
        price: 0,
        image: './img/007.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 8,
        code: 'PROD008',
        name: 'Nombre',
        price: 0,
        image: './img/008.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 9,
        code: 'PROD009',
        name: 'Nombre',
        price: 0,
        image: './img/009.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 10,
        code: 'PROD010',
        name: 'Nombre',
        price: 0,
        image: './img/010.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 11,
        code: 'PROD011',
        name: 'Nombre',
        price: 0,
        image: './img/011.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 12,
        code: 'PROD012',
        name: 'Nombre',
        price: 0,
        image: './img/012.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 13,
        code: 'PROD013',
        name: 'Nombre',
        price: 0,
        image: './img/013.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 14,
        code: 'PROD014',
        name: 'Nombre',
        price: 0,
        image: './img/014.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 15,
        code: 'PROD015',
        name: 'Nombre',
        price: 0,
        image: './img/015.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
    },
    {
        id: 16,
        code: 'PROD016',
        name: 'Nombre',
        price: 0,
        image: './img/016.jpg',
        description: '',
        orderLink: '',
        category: 'Joyeria'
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
                <a href="${product.orderLink}" class="btn order" data-id="${product.id}">Pedir</a>
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