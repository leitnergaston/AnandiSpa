// Datos de ejemplo de productos
const products = [
    {
        id: 1,
        code: 'PROD001',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 2,
        code: 'PROD002',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 3,
        code: 'PROD003',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 4,
        code: 'PROD004',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 5,
        code: 'PROD005',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 6,
        code: 'PROD006',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 7,
        code: 'PROD007',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 8,
        code: 'PROD008',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 9,
        code: 'PROD009',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 10,
        code: 'PROD010',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 11,
        code: 'PROD011',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 12,
        code: 'PROD012',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 13,
        code: 'PROD013',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 14,
        code: 'PROD014',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    {
        id: 15,
        code: 'PROD015',
        name: '',
        price: 0,
        image: '',
        description: '',
        orderLink: ''
    },
    
];

const productsPerPage = 10;
let currentPage = 1;

// Función para crear las tarjetas de producto
function createProductCards(page) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);

    pageProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h2>${product.name}</h2>
                <p class="product-code">Código: ${product.code}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
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

    updatePagination();
}

// Función para actualizar la paginación
function updatePagination() {
    const totalPages = Math.ceil(products.length / productsPerPage);
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            createProductCards(currentPage);
        }
    });
    prevButton.disabled = currentPage === 1;
    paginationElement.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            createProductCards(currentPage);
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
        <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: auto;">
        <p><strong>Código:</strong> ${product.code}</p>
        <p><strong>Precio:</strong> $${product.price.toFixed(2)}</p>
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
    createProductCards(currentPage);

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