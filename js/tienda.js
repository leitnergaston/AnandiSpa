//* Lista de productos
const products = [
    {
        id: 1,
        code: 'PROD001',
        name: 'Frescor Castaña',
        price: 29680,
        // discount: 10,
        // isOnSale: true,
        // isNew: true,
        // isLiquidacion: true,
        stock: true,
        image: '/img/tienda/productos/001.jpg',
        description: 'Ekos castaña frescor eav de toillette 150ml dulce floral',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 2,
        code: 'PROD002',
        name: 'Pulpa Castaña',
        price: 8048,
        stock: true,
        image: '/img/tienda/productos/002.jpg',
        description: 'Pulpa hidratante castaña para manos 75g',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 4,
        code: 'PROD004',
        name: 'Cadena Dorada',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/004.jpg',
        description: 'Cadena combinada dorada',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 5,
        code: 'PROD005',
        name: 'Cadena Plateada',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/005.jpg',
        description: 'Cadena combinada plateada',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 6,
        code: 'PROD006',
        name: 'Cadena Plateada',
        price: 3500,
        stock: true,
        image: '/img/tienda/productos/006.jpg',
        description: 'Detalle rosa grande, gema celeste',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 7,
        code: 'PROD007',
        name: 'Cadena Larga Búho',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/007.jpg',
        description: 'Detalle búho, colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 9,
        code: 'PROD009',
        name: 'Cadena Larga Ojo',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/009.jpg',
        description: 'Plateado con negro',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 10,
        code: 'PROD010',
        name: 'Dije Corazón Plateado',
        price: 2800,
        stock: true,
        image: '/img/tienda/productos/010.jpg',
        description: 'Detalle calado, tamaño grande',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 11,
        code: 'PROD011',
        name: 'Dije Bigote Fucsia',
        price: 2800,
        stock: true,
        image: '/img/tienda/productos/011.jpg',
        description: 'Bigotes fucsia, detalle strass plateado',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 12,
        code: 'PROD012',
        name: 'Dije Cruz Plateado',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/012.jpg',
        description: 'Cruz Jesús, calada',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 13,
        code: 'PROD013',
        name: 'Dije Cristo',
        price: 5000,
        stock: true,
        image: '/img/tienda/productos/013.jpg',
        description: 'Tamaño chico',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 14,
        code: 'PROD014',
        name: 'Dije Bolita Violeta',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/014.jpg',
        description: 'Bola de strass',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 15,
        code: 'PROD015',
        name: 'Pulsera Plateada',
        price: 5000,
        stock: true,
        image: '/img/tienda/productos/015.jpg',
        description: 'Calada sin dije',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 16,
        code: 'PROD016',
        name: 'Pulsera Plateada',
        price: 5000,
        stock: true,
        image: '/img/tienda/productos/016.jpg',
        description: 'Chapa plateada',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie',
        dateAdded: '2025-05-01'
    },
    {
        id: 17,
        code: 'PROD017',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/017.jpg',
        description: 'Hipoalergénico color "Outono" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 18,
        code: 'PROD018',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/018.jpg',
        description: 'Hipoalergénico color "Calor" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 19,
        code: 'PROD019',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/019.jpg',
        description: 'Hipoalergénico color "Pitanga" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 20,
        code: 'PROD020',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/020.jpg',
        description: 'Hipoalergénico color "Beijo" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 21,
        code: 'PROD021',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/021.jpg',
        description: 'Hipoalergénico color "Praia" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 22,
        code: 'PROD022',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/022.jpg',
        description: 'Hipoalergénico color "Car de pimenta" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 23,
        code: 'PROD023',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/023.jpg',
        description: 'Hipoalergénico color "Una n°1" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 24,
        code: 'PROD024',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/024.jpg',
        description: 'Hipoalergénico color "Flores" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 25,
        code: 'PROD025',
        name: 'Esmalte UNA',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/025.jpg',
        description: 'Hipoalergénico color "Flores" 8ml vegano',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Esmaltes',
        dateAdded: '2025-05-01'
    },
    {
        id: 26,
        code: 'PROD026',
        name: 'Labial Faces',
        price: 13000,
        stock: true,
        image: '/img/tienda/productos/026.jpg',
        description: 'Baton color hidra, lápiz 3,5g, aquarela Natura',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Labiales',
        dateAdded: '2025-05-01'
    },
    {
        id: 27,
        code: 'PROD027',
        name: 'Labial Faces',
        price: 13000,
        stock: true,
        image: '/img/tienda/productos/027.jpg',
        description: 'Baton color hidra',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Labiales',
        dateAdded: '2025-05-01'
    },
    {
        id: 28,
        code: 'PROD028',
        name: 'Labial Faces',
        price: 13000,
        stock: true,
        image: '/img/tienda/productos/028.jpg',
        description: 'Baton Aquarela Natura',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Labiales',
        dateAdded: '2025-05-01'
    },

    {
        id: 30,
        code: 'PROD030',
        name: 'Labial Faces',
        price: 13000,
        stock: true,
        image: '/img/tienda/productos/030.jpg',
        description: 'Baton color hidra',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Labiales',
        dateAdded: '2025-05-01'
    },
    {
        id: 33,
        code: 'PROD033',
        name: 'Labial UNA',
        price: 23000,
        stock: true,
        image: '/img/tienda/productos/033.jpg',
        description: 'Batom CC lapiz labial, 3.8g, "Rouge 8C"',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Labiales',
        dateAdded: '2025-05-01'
    },
    {
        id: 34,
        code: 'PROD034',
        name: 'Labial UNA',
        price: 16000,
        stock: true,
        image: '/img/tienda/productos/034.jpg',
        description: 'Batom acetinado en óleo 7ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Labiales',
        dateAdded: '2025-05-01'
    },
    {
        id: 35,
        code: 'PROD035',
        name: 'Labial UNA',
        price: 16000,
        stock: true,
        image: '/img/tienda/productos/035.jpg',
        description: 'Batom satinado en óleo',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Labiales',
        dateAdded: '2025-05-01'
    },
    {
        id: 37,
        code: 'PROD037',
        name: 'Labial UNA',
        price: 16000,
        stock: true,
        image: '/img/tienda/productos/037.jpg',
        description: 'Batom satinado en óleo',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Labiales',
        dateAdded: '2025-05-01'
    },
    {
        id: 39,
        code: 'PROD039',
        name: 'Neutralizador de espinillas Faces',
        price: 11000,
        stock: true,
        image: '/img/tienda/productos/039.jpg',
        description: '10g',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 40,
        code: 'PROD040',
        name: 'Sombra de ojos Eye Shadow',
        price: 3500,
        discount: 30,
        isOnSale: true,
        isLiquidacion: true,
        stock: true,
        image: '/img/tienda/productos/040.jpg',
        description: 'Combinado 2 colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros',
        dateAdded: '2025-05-01'
    },
    {
        id: 41,
        code: 'PROD041',
        name: 'Sombra de ojos Eye Shadow',
        price: 3500,
        discount: 30,
        isOnSale: true,
        isLiquidacion: true,
        stock: true,
        image: '/img/tienda/productos/041.jpg',
        description: 'Combinado 2 colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros',
        dateAdded: '2025-05-01'
    },
    {
        id: 42,
        code: 'PROD042',
        name: 'Esponja Violetta',
        price: 4374,
        discount: 20,
        isOnSale: true,
        stock: true,
        isLiquidacion: true,
        image: '/img/tienda/productos/042.jpg',
        description: 'Para maquillaje, 2 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros',
        dateAdded: '2025-05-01'
    },
    {
        id: 43,
        code: 'PROD043',
        name: 'Apaga Vela Corona',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/043.jpg',
        description: 'Corona plateada de acero',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios',
        dateAdded: '2025-05-01'
    },
    {
        id: 44,
        code: 'PROD044',
        name: 'Apaga Vela Piramide',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/044.jpg',
        description: 'Piramide plateada de acero',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios',
        dateAdded: '2025-05-01'
    },
    {
        id: 46,
        code: 'PROD046',
        name: 'Apaga Vela Llave',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/046.jpg',
        description: 'Llave plateada de acero',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios',
        dateAdded: '2025-05-01'
    },
    {
        id: 48,
        code: 'PROD048',
        name: 'Pincel PRO',
        price: 34000,
        stock: true,
        image: '/img/tienda/productos/048.jpg',
        description: 'Pincel PRO base liquida',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 49,
        code: 'PROD049',
        name: 'Lapiz de Ojos',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/049.jpg',
        description: 'Lapiz de ojos FACES',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 50,
        code: 'PROD050',
        name: 'Perfume',
        price: 42200,
        stock: true,
        image: '/img/tienda/productos/050.jpg',
        description: 'Perfume kriska 100ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 51,
        code: 'PROD051',
        name: 'Mascara purificante',
        price: 46780,
        stock: true,
        image: '/img/tienda/productos/051.jpg',
        description: 'Mascara de argila purificante CHRONOS 70g',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 52,
        code: 'PROD052',
        name: 'Exfoliante CHRONOS',
        price: 31800,
        stock: true,
        image: '/img/tienda/productos/052.jpg',
        description: 'Exfoliante antiseñales CHRONOS 50g',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 53,
        code: 'PROD053',
        name: 'Repuesto crema corporal',
        price: 12000,
        stock: true,
        image: '/img/tienda/productos/053.jpg',
        description: 'Repuesto crema corporal avellana y casis tododia 400ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 111,
        code: 'PROD111',
        name: 'Crema castanha para manos',
        price: 5000,
        stock: true,
        image: '/img/tienda/productos/111.jpg',
        description: 'Crema castanha para manos 40g',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 112,
        code: 'PROD112',
        name: 'Crema corporal',
        price: 11000,
        stock: true,
        image: '/img/tienda/productos/112.jpg',
        description: 'Crema corporal nuez pecan y cacao tododia 200ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 113,
        code: 'PROD113',
        name: 'Crema corporal castanha',
        price: 10000,
        stock: true,
        image: '/img/tienda/productos/113.jpg',
        description: 'Crema corporal castanha 100ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 114,
        code: 'PROD114',
        name: 'Crema corporal',
        price: 8000,
        stock: true,
        image: '/img/tienda/productos/114.jpg',
        description: 'Crema corporal limon siciliano y flor de gardenia Tododia 80ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 116,
        code: 'PROD116',
        name: 'Balsamo post barba Homem',
        price: 8000,
        stock: true,
        image: '/img/tienda/productos/116.jpg',
        description: 'Balsamo post barba Homem 75ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 117,
        code: 'PROD117',
        name: 'Crema de afeitar Homem',
        price: 5000,
        stock: true,
        image: '/img/tienda/productos/117.jpg',
        description: 'Crema de afeitar para barbear homem 75ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 118,
        code: 'PROD118',
        name: 'Desodorante Kaiak Femenino',
        price: 5000,
        stock: true,
        image: '/img/tienda/productos/118.jpg',
        description: 'Desodorante antitranspirante Kaiak Femenino 75ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
        dateAdded: '2025-05-01'
    },
    {
        id: 121,
        code: 'PROD121',
        name: 'Perfumeros x unidad',
        price: 2500,
        stock: true,
        image: '/img/tienda/productos/121.jpg',
        description: 'Perfumeros',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios',
        dateAdded: '2025-05-01'
    },
    {
        id: 122,
        code: 'PROD122',
        name: 'Aromatizador para auto Limon',
        price: 3500,
        stock: true,
        image: '/img/tienda/productos/122.jpg',
        description: 'Aromatizador para auto de limon',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus',
        dateAdded: '2025-05-01'
    },
    {
        id: 123,
        code: 'PROD123',
        name: 'Aromatizador par auto Vainilla y Azucar',
        price: 3500,
        stock: true,
        image: '/img/tienda/productos/123.jpg',
        description: 'Aromatizador para auto de vainilla y azucar',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus',
        dateAdded: '2025-05-01'
    },
    {
        id: 124,
        code: 'PROD124',
        name: 'Cascada para conitos',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/124.jpg',
        description: 'Cascada para sahumerios conitos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Cascadas',
        dateAdded: '2025-05-01'
    },
    {
        id: 125,
        code: 'PROD125',
        name: 'Cascada para conitos',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/125.jpg',
        description: 'Cascada para sahumerios conitos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Cascadas',
        dateAdded: '2025-05-01'
    },
    {
        id: 126,
        code: 'PROD126',
        name: 'Cascada para conitos',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/126.jpg',
        description: 'Cascada para sahumerios conitos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Cascadas',
        dateAdded: '2025-05-01'
    },
    {
        id: 127,
        code: 'PROD127',
        name: 'Cascada para conitos',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/127.jpg',
        description: 'Cascada para sahumerios conitos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Cascadas',
        dateAdded: '2025-05-01'
    },
    {
        id: 128,
        code: 'PROD128',
        name: 'Cascada para conitos',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/128.jpg',
        description: 'Cascada para sahumerios conitos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Cascadas',
        dateAdded: '2025-05-01'
    },
    {
        id: 129,
        code: 'PROD129',
        name: 'Cascada para conitos',
        price: 5000,
        stock: true,
        image: '/img/tienda/productos/129.jpg',
        description: 'Cascada para sahumerios conitos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Cascadas',
        dateAdded: '2025-06-08'
    },
    {
        id: 130,
        code: 'PROD130',
        name: 'Cascada para conitos',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/130.jpg',
        description: 'Cascada para sahumerios conitos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Cascadas',
        dateAdded: '2025-06-08'
    },
    {
        id: 131,
        code: 'PROD131',
        name: 'Cascada para conitos',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/131.jpg',
        description: 'Cascada para sahumerios conitos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Cascadas',
        dateAdded: '2025-06-08'
    },
    {
        id: 133,
        code: 'PROD133',
        name: 'Aromatizante Ambiente Café con Chocolate',
        price: 4500,
        stock: true,
        image: '/img/tienda/productos/133.jpg',
        description: 'Aromatizante ambiente de cafe con chocolate',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus',
        dateAdded: '2025-06-08'
    },
    {
        id: 134,
        code: 'PROD134',
        name: 'Saphirus Textiles x unidad',
        price: 4000,
        stock: true,
        image: '/img/tienda/productos/134.jpg',
        description: 'Saphirus Textiles Varias fragancias (consultar fragancias)',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus',
        dateAdded: '2025-06-08'
    },
    {
        id: 134,
        code: 'PROD134',
        name: 'Promo 2 Saphirus Textiles a elección',
        price: 8000,
        discount: 12.5,
        isOnSale: true,
        stock: true,
        image: '/img/tienda/productos/134.jpg',
        description: 'Promo 2 Saphirus textiles a elección x $7.000 (consultar fragancias)',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus',
        dateAdded: '2025-06-08'
    },
    {
        id: 135,
        code: 'PROD135',
        name: 'Sahumerios Aromanza Palo Santo x unidad',
        price: 4000,
        stock: true,
        image: '/img/tienda/productos/135.jpg',
        description: 'Sahumerios Aromanza Palo Santo',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios',
        dateAdded: '2025-06-08'
    },
    {
        id: 136,
        code: 'PROD136',
        name: 'Sahumerios Aromanza Orgánicos x unidad',
        price: 2500,
        stock: true,
        image: '/img/tienda/productos/136.jpg',
        description: 'Sahumerios Aromanza Orgánicos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios',
        dateAdded: '2025-06-08'
    },
    {
        id: 137,
        code: 'PROD137',
        name: 'Sahumrios Aromanza Tibetanos x unidad',
        price: 4000,
        stock: true,
        image: '/img/tienda/productos/137.jpg',
        description: 'Sahumerios Aromanza Tibetanos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios',
        dateAdded: '2025-06-08'
    },
    {
        id: 139,
        code: 'PROD139',
        name: 'Sahumerios Aromanza Momentos x unidad',
        price: 4000,
        stock: true,
        image: '/img/tienda/productos/139.jpg',
        description: 'Sahumerios Aromanza Momentos',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios',
        dateAdded: '2025-06-08'
    },
];


const productsPerPage = 10; // Mostrar 10 productos en el grid por pagina
let currentPage = 1;
let currentCategory = 'all';

//* Buscador en tiempo real
// variable global para el termino de busqueda
let searchTerm = "";

//* Funcion para filtrar productos por busqueda (nombre o categoria)
function filterProductsBySearch(products, search) {
    if (!search) return products;
    const searchLower = search.trim().toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
    );
}

//* Variables para calcular productos nuevos
const HOY = new Date();
const DIAS_PARA_SER_NUEVO = 15; // Considerar nuevo si tiene 15 días o menos

//* Funcion para saber si es un producto nuevo
function esProductoNuevo(dateAddedString) {
    const fechaProducto = new Date(dateAddedString);
    const diferenciaTiempo = HOY.getTime() - fechaProducto.getTime();
    const diferenciaDias = diferenciaTiempo / (1000 * 3600 * 24);
    return diferenciaDias <= DIAS_PARA_SER_NUEVO;
}

//* Función para crear los botones de categoría
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

//* Función para actualizar la categoría activa
function updateActiveCategory() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === currentCategory) {
            btn.classList.add('active');
        }
    });
}

//* Función para filtrar productos por categoría
function filterProductsByCategory(products, category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

//? Función vieja para crear las tarjetas de producto (no se usa, solo de respaldo)
// function createProductCards() {
//     const productList = document.getElementById('product-list');
//     productList.innerHTML = '';

//     const filteredProducts = filterProductsByCategory(products, currentCategory);
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const startIndex = (currentPage - 1) * productsPerPage;
//     const endIndex = startIndex + productsPerPage;
//     const pageProducts = filteredProducts.slice(startIndex, endIndex);



//     pageProducts.forEach(product => {
//         // Solo mostrar la imagen sin stock si no hay stock
//         const defaultSinStockImage = '/img/tienda/sin-stock-img.png';
//         const sinStockHTML = !product.stock ? `<img class="sin-stock-img" src="${defaultSinStockImage}" alt="Sin stock">` : '';

//         // Bloquear boton de pedir cuando no hay stock, sino mostrar boton normal
//         const orderButtonHTML = !product.stock
//             ? `<button class="btn order disabled" disabled>No disponible</button>`
//             : `<a href="${product.orderLink}" class="btn order" data-id="${product.id}" target="_blank">Pedir</a>`;

//         // etiqueta de 'nuevo' en productos nuevos
//         const newTagHTML = product.isNew ? `<span class="new-tag">Nuevo</span>` : '';
//         // Etiqueta "%dcto"
//         const offerTagHTML = product.isOnSale ? `<span class="new-tag offer">-${product.discount}%</span>` : '';
//         // Etiqueta de liquidacion
//         const liquidacionTagHTML = product.isLiquidacion ? `<span class="new-tag liquidacion">Liquidacion</span>` : '';

//         // Precio
//         const hasDiscount = product.discount && product.isOnSale;
//         const discountedPrice = hasDiscount ? product.price * (1 - product.discount / 100) : product.price;
//         const priceHTML = hasDiscount
//             ? `<p class="product-price">
//         <span class="original-price">$${new Intl.NumberFormat('es-ES').format(Math.floor(product.price))}</span>
//         <span class="discounted-price">$${new Intl.NumberFormat('es-ES').format(Math.floor(discountedPrice))}</span>
//                 </p>`
//             : `<p class="product-price">$${new Intl.NumberFormat('es-ES').format(Math.floor(product.price))}</p>`;



//         const card = document.createElement('div');
//         card.className = 'product-card';

//         card.innerHTML = `
//         <div class="product-img-container">
//             ${sinStockHTML}
//             ${newTagHTML}
//             ${offerTagHTML}
//             ${liquidacionTagHTML}
//             <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
//         </div>
//         <div class="product-info">
//             <span class="product-category">${product.category}</span>
//             <p class="product-code">Cod: ${product.code}</p>
//             <h2>${product.name}</h2>
//             ${priceHTML}
//             <button class="btn view-details" data-id="${product.id}">Ver detalles</button>
//             ${orderButtonHTML}
//         </div>
//         `;
//         productList.appendChild(card);
//     });

//     // Añadir event listeners a los botones
//     document.querySelectorAll('.view-details').forEach(button => {
//         button.addEventListener('click', showProductDetails);
//     });

//     updatePagination(totalPages);
// }

//* NUEVA FUNCION PARA CREAR PRODUCTOS
function crearTarjetaProducto(product) {
    const defaultSinStockImage = '/img/tienda/sin-stock-img.png'; // mostrar la imagen 'sin stock' solo si no hay stock
    const sinStockHTML = !product.stock ? `<img class="sin-stock-img" src="${defaultSinStockImage}" alt="Sin stock">` : '';

    // Bloquear boton pedir cuando no hay stock, sino mostrar boton normal
    const orderButtonHTML = !product.stock
        ? `<button class="btn order disabled" disabled>No disponible</button>`
        : `<a href="${product.orderLink}" class="btn order" data-id="${product.id}" target="_blank">Pedir</a>`;

    // Usamos la función de fecha para saber si es nuevo
    const newTagHTML = esProductoNuevo(product.dateAdded) ? `<span class="tag new">Nuevo</span>` : ''; // agregar etiqueta 'Nuevo'
    const offerTagHTML = product.isOnSale ? `<span class="tag offer">-${product.discount}%</span>` : ''; // etiquieta de descuento
    const liquidacionTagHTML = product.isLiquidacion ? `<span class="tag liquidacion">Liquidacion</span>` : ''; // etiqueta de liquidacion

    // Calcular descuento y mostrar precios
    const hasDiscount = product.discount && product.isOnSale;
    const discountedPrice = hasDiscount ? product.price * (1 - product.discount / 100) : product.price;
    const priceHTML = hasDiscount
        ? `<p class="product-price">
            <span class="original-price">$${new Intl.NumberFormat('es-ES').format(Math.floor(product.price))}</span>
            <span class="discounted-price">$${new Intl.NumberFormat('es-ES').format(Math.floor(discountedPrice))}</span>
        </p>`
        : `<p class="product-price">$${new Intl.NumberFormat('es-ES').format(Math.floor(product.price))}</p>`;

    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <div class="product-img-container">
            ${sinStockHTML}
            ${newTagHTML}
            ${offerTagHTML}
            ${liquidacionTagHTML}
            <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <span class="product-category">${product.category}</span>
            <p class="product-code">Cod: ${product.code}</p>
            <h2>${product.name}</h2>
            ${priceHTML}
            <button class="btn view-details" data-id="${product.id}">Ver detalles</button>
            ${orderButtonHTML}
        </div>
    `;

    // Añadir event listener para ver detalles
    card.querySelector('.view-details').addEventListener('click', showProductDetails);

    return card;
}

//* Funcion para mostrar grid de productos
function createProductCards() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    // Filtrar por categoría y luego por búsqueda
    let filteredProducts = filterProductsByCategory(products, currentCategory);
    filteredProducts = filterProductsBySearch(filteredProducts, searchTerm);


    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Si la página actual se queda sin productos, volver a la primera
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = 1;
    }

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);

    pageProducts.forEach(product => {
        productList.appendChild(crearTarjetaProducto(product));
    });

    updatePagination(totalPages);
}

//* Funcion para mostrar grid de las novedades
function mostrarNovedades() {
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    if (!newArrivalsGrid) return;

    const productosNuevos = products
        .filter(product => esProductoNuevo(product.dateAdded))
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) // Los mas nuevos primero
        .slice(0, 10); // Mostrar solo los ultimos 8

    newArrivalsGrid.innerHTML = ''; // Limpiar por si acaso
    if (productosNuevos.length > 0) {
        document.getElementById('new-arrivals-section').style.display = 'block';
        productosNuevos.forEach(product => {
            newArrivalsGrid.appendChild(crearTarjetaProducto(product));
        });
    } else {
        document.getElementById('new-arrivals-section').style.display = 'none'; // Ocultar si no hay novedades
    }
}

//* Función para actualizar la paginación
function updatePagination(totalPages) {
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            createProductCards();

            // hacer scroll hasta la seccion de los filtros al darle clic a 'Anterior'
            const catalogSection = document.getElementById('category-filter');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
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

            // hacer scroll hasta la seccion de los filtros al darle clic a 'Siguiente'
            const catalogSection = document.getElementById('category-filter');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    nextButton.disabled = currentPage === totalPages;
    paginationElement.appendChild(nextButton);
}

//* Función para mostrar los detalles del producto
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
        <p class="product-detail-code">Código:${product.code}</p>
        <p><strong>Precio:</strong> $${new Intl.NumberFormat('es-ES').format(Math.floor(product.price))}</p>
        <p class="product-details-description">${product.description}</p>
        <a href="${product.orderLink}" class="btn order" data-id="${product.id}">Pedir ahora</a>
    `;

    modal.style.display = 'block';
}

//* Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

//* Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarNovedades();
    createCategoryButtons();
    createProductCards();

    // Evento para el input de busqueda
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            currentPage = 1;
            createProductCards();
        });
    }

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