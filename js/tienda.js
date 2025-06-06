// Datos de ejemplo de productos con categorías
const products = [
    {
        id: 1,
        code: 'PROD001',
        name: 'Frescor Castaña',
        price: 29680,
        // discount: 10,
        // isOnSale: true,
        //isNew: true,
        stock: true,
        image: '/img/tienda/productos/001.jpg',
        description: 'Ekos castaña frescor eav de toillette 150ml dulce floral',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
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
        category: 'Natura'
    },
    {
        id: 3,
        code: 'PROD003',
        name: 'Desodorante Masculino',
        price: 4500,
        stock: true,
        image: '/img/tienda/productos/003.jpg',
        description: 'Antitranspirante roll-on homem 75ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
    },
    {
        id: 8,
        code: 'PROD008',
        name: 'Cadena Larga Búho',
        price: 3000,
        stock: false,
        image: '/img/tienda/productos/008.jpg',
        description: 'Detalle búho, colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Bijouterie'
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
        category: 'Esmaltes'
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
        category: 'Esmaltes'
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
        category: 'Esmaltes'
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
        category: 'Esmaltes'
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
        category: 'Esmaltes'
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
        category: 'Esmaltes'
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
        category: 'Esmaltes'
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
        category: 'Esmaltes'
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
        category: 'Esmaltes'
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
        category: 'Labiales'
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
        category: 'Labiales'
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
        category: 'Labiales'
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
        category: 'Labiales'
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
        category: 'Labiales'
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
        category: 'Labiales'
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
        category: 'Labiales'
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
        category: 'Labiales'
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
        category: 'Natura'
    },
    {
        id: 40,
        code: 'PROD040',
        name: 'Sombra de ojos Eye Shadow',
        price: 2500,
        stock: true,
        image: '/img/tienda/productos/040.jpg',
        description: 'Combinado 2 colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
    },
    {
        id: 41,
        code: 'PROD041',
        name: 'Sombra de ojos Eye Shadow',
        price: 2500,
        stock: true,
        image: '/img/tienda/productos/041.jpg',
        description: 'Combinado 2 colores',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
    },
    {
        id: 42,
        code: 'PROD042',
        name: 'Esponja Violetta',
        price: 3500,
        stock: true,
        image: '/img/tienda/productos/042.jpg',
        description: 'Para maquillaje, 2 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Otros'
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
        category: 'Accesorios'
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
        category: 'Accesorios'
    },
    {
        id: 45,
        code: 'PROD045',
        name: 'Apaga Vela Pluma',
        price: 3000,
        stock: true,
        image: '/img/tienda/productos/045.jpg',
        description: 'Pluma plateada de acero',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Accesorios'
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
        category: 'Accesorios'
    },
    {
        id: 47,
        code: 'PROD047',
        name: 'Base nude',
        price: 25000,
        stock: false,
        image: '/img/tienda/productos/047.jpg',
        description: 'Base nude UNA claro 22 30ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura'
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
        category: 'Natura'
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
        category: 'Natura'
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
        category: 'Natura'
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
        category: 'Natura'
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
        category: 'Natura'
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
        category: 'Natura'
    },
    {
        id: 55,
        code: 'PROD055',
        name: 'Saphirus Linah',
        price: 4500,
        stock: true,
        image: '/img/tienda/productos/055.jpg',
        description: 'Aromatizador Saphirus Linah 250ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus'
    },
    {
        id: 56,
        code: 'PROD056',
        name: 'Saphirus Flores Blancas',
        price: 4500,
        stock: true,
        image: '/img/tienda/productos/056.jpg',
        description: 'Aromatizador Saphirus Flores Blancas 250ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus'
    },
    {
        id: 57,
        code: 'PROD057',
        name: 'Saphirus Limon',
        price: 4500,
        stock: true,
        image: '/img/tienda/productos/057.jpg',
        description: 'Aromatizador Saphirus Limon 250ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus'
    },
    {
        id: 58,
        code: 'PROD058',
        name: 'Saphirus Paula',
        price: 4500,
        stock: false,
        image: '/img/tienda/productos/058.jpg',
        description: 'Aromatizador Saphirus Paula 250ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus'
    },
    {
        id: 59,
        code: 'PROD059',
        name: 'Saphirus Cony',
        price: 4500,
        stock: true,
        image: '/img/tienda/productos/059.jpg',
        description: 'Aromatizador Saphirus Cony 250ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus'
    },
    {
        id: 61,
        code: 'PROD061',
        name: 'Sahumerios Citronella Orange Palo Santo',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/061.jpg',
        description: 'Sahumerios Citronella Orange Palo Santo, Natural, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 62,
        code: 'PROD062',
        name: 'Sahumerios Myrhh Olibanum',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/062.jpg',
        description: 'Sahumerios Myrhh Olibanum, Natural, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 63,
        code: 'PROD063',
        name: 'Sahumerios Amber Ambar',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/063.jpg',
        description: 'Sahumerios Amber Ambar, Natural, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 64,
        code: 'PROD064',
        name: 'Sahumerios Mirra',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/064.jpg',
        description: 'Sahumerios Mirra, Natural, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 65,
        code: 'PROD065',
        name: 'Sahumerios Olíbano Frankincense',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/065.jpg',
        description: 'Sahumerios Olíbano Frankincense, Natural, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 66,
        code: 'PROD066',
        name: 'Sahumerios Yagra de la Abundancia',
        price: 3290,
        stock: true,
        image: '/img/tienda/productos/066.jpg',
        description: 'Sahumerios Yagra de la Abundancia, Tibetanos, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 67,
        code: 'PROD067',
        name: 'Sahumerios Magia Asiática',
        price: 3290,
        stock: true,
        image: '/img/tienda/productos/067.jpg',
        description: 'Sahumerios Magia Asiática, Tibetanos, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 68,
        code: 'PROD068',
        name: 'Sahumerios Capuccino Italiano',
        price: 3290,
        stock: true,
        image: '/img/tienda/productos/068.jpg',
        description: 'Sahumerios Capuccino Italiano, Tibetanos, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 69,
        code: 'PROD069',
        name: 'Sahumerios Esencias de la India',
        price: 3290,
        stock: true,
        image: '/img/tienda/productos/069.jpg',
        description: 'Sahumerios Esencias de la India, Tibetanos, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 70,
        code: 'PROD070',
        name: 'Sahumerios Coco Beach',
        price: 3290,
        stock: true,
        image: '/img/tienda/productos/070.jpg',
        description: 'Sahumerios Coco Beach, Tibetanos, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 71,
        code: 'PROD071',
        name: 'Sahumerios Palo Santo con Fresias',
        price: 2500,
        stock: false,
        image: '/img/tienda/productos/071.jpg',
        description: 'Sahumerios Palo Santo con Fresias, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 72,
        code: 'PROD072',
        name: 'Sahumerios Palo Santo con Vainilla',
        price: 2500,
        stock: true,
        image: '/img/tienda/productos/072.jpg',
        description: 'Sahumerios Palo Santo con Vainilla, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 73,
        code: 'PROD073',
        name: 'Sahumerios Palo Santo con Mirra',
        price: 2500,
        stock: true,
        image: '/img/tienda/productos/073.jpg',
        description: 'Sahumerios Palo Santo con Mirra, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 74,
        code: 'PROD074',
        name: 'Sahumerios Palo Santo con Yagra',
        price: 2500,
        stock: true,
        image: '/img/tienda/productos/074.jpg',
        description: 'Sahumerios Palo Santo con Yagra, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 75,
        code: 'PROD075',
        name: 'Sahumerios Palo Santo con Copal',
        price: 2500,
        stock: false,
        image: '/img/tienda/productos/075.jpg',
        description: 'Sahumerios Palo Santo con Copal, Sagrada Madre, 8 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 76,
        code: 'PROD076',
        name: 'Sahumerios Rosa Mosqueta',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/076.jpg',
        description: 'Sahumerios Rosa Mosqueta, Patagonia, Sagrada Madre, 6 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 77,
        code: 'PROD077',
        name: 'Sahumerios Jazmín',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/077.jpg',
        description: 'Sahumerios Jazmín, Patagonia, Sagrada Madre, 6 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 78,
        code: 'PROD078',
        name: 'Sahumerios Ruda',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/078.jpg',
        description: 'Sahumerios Ruda, Patagonia, Sagrada Madre, 6 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 79,
        code: 'PROD079',
        name: 'Sahumerios Hibiscus',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/079.jpg',
        description: 'Sahumerios Hibiscus, Patagonia, Sagrada Madre, 6 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 80,
        code: 'PROD080',
        name: 'Sahumerios Palmarosa',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/080.jpg',
        description: 'Sahumerios Palmarosa, Patagonia, Sagrada Madre, 6 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 81,
        code: 'PROD081',
        name: 'Sahumerios Neroli',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/081.jpg',
        description: 'Sahumerios Neroli, Patagonia, Sagrada Madre, 6 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 82,
        code: 'PORD082',
        name: 'Sahumerios Yerba Mate Menta',
        price: 2600,
        stock: true,
        image: '/img/tienda/productos/082.jpg',
        description: 'Sahumerios Yerba Mate Menta, Patagonia, Sagrada Madre, 6 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 83,
        code: 'PROD083',
        name: 'Sahumerios Lavanda Menta',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/083.jpg',
        description: 'Sahumerios lavanda Menta, Sahumerios de la India, 12 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 84,
        code: 'PROD084',
        name: 'Sahumerios Fresas de la patagonia',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/084.jpg',
        description: 'Sahumerios Fresas de la patagonia, Sahumerios de la India, 12 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 85,
        code: 'PROD085',
        name: 'Sahumerios Mirra Palo Santo',
        price: 1300,
        stock: true,
        image: '/img/tienda/productos/085.jpg',
        description: 'Sahumerios Mirra Palo Santo, Sahumerios de la India, 12 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 86,
        code: 'PROD086',
        name: 'Sahumerios Magnolia Vainilla',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/086.jpg',
        description: 'Sahumerios Magnolia Vainilla, Sahumerios de la India, 12 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 87,
        code: 'PROD087',
        name: 'Sahumerios Ruda Romero',
        price: 1300,
        stock: true,
        image: '/img/tienda/productos/087.jpg',
        description: 'Sahumerios Ruda Romero, Sahumerios de la India, 12 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 88,
        code: 'PROD088',
        name: 'Sahumerios Vainilla Africana',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/088.jpg',
        description: 'Sahumerios Vainilla Africana, Sahumerios de la India, 12 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 89,
        code: 'PROD089',
        name: 'Sahumerios Yagra Palo Santo',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/089.jpg',
        description: 'Sahumerios Yagra Palo Santo, Sahumerios de la India, 12 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 90,
        code: 'PROD090',
        name: 'Conitos Cascada Amor',
        price: 1690,
        stock: true,
        image: '/img/tienda/productos/090.jpg',
        description: 'Conitos Cascada Amor, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Conitos'
    },
    {
        id: 91,
        code: 'PROD091',
        name: 'Conitos Cascada Dinero',
        price: 1690,
        stock: true,
        image: '/img/tienda/productos/091.jpg',
        description: 'Conitos Cascada Dinero, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Conitos'
    },
    {
        id: 92,
        code: 'PROD092',
        name: 'Conitos Cascada Energia Limpia',
        price: 1690,
        stock: true,
        image: '/img/tienda/productos/092.jpg',
        description: 'Conitos Cascada Energia Limpia, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Conitos'
    },
    {
        id: 93,
        code: 'PROD093',
        name: 'Conitos Cascada Meditacion',
        price: 1690,
        stock: true,
        image: '/img/tienda/productos/093.jpg',
        description: 'Conitos Cascada Meditacion, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Conitos'
    },
    {
        id: 94,
        code: 'PROD094',
        name: 'Conitos Cascada Pasion',
        price: 1690,
        stock: true,
        image: '/img/tienda/productos/094.jpg',
        description: 'Conitos Cascada Pasion, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Conitos'
    },
    {
        id: 95,
        code: 'PROD095',
        name: 'Sahumerios Magicos Vainilla',
        price: 2990,
        stock: false,
        image: '/img/tienda/productos/095.jpg',
        description: 'Sahumerios Magicos Vainilla, Aromanza, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 96,
        code: 'PROD096',
        name: 'Sahumerios Magicos Aqua Marine',
        price: 2990,
        stock: true,
        image: '/img/tienda/productos/096.jpg',
        description: 'Sahumerios Magicos Aqua Marine, Aromanza, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 97,
        code: 'PROD097',
        name: 'Sahumerios Magicos Sándalo Hindú',
        price: 2990,
        stock: true,
        image: '/img/tienda/productos/097.jpg',
        description: 'Sahumerios Magicos Sándalo Hindú, Aromanza, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 98,
        code: 'PROD098',
        name: 'Sahumerios Magicos Rosa Real',
        price: 2990,
        stock: true,
        image: '/img/tienda/productos/098.jpg',
        description: 'Sahumerios Magicos Rosa Real, Aromanza, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 99,
        code: 'PROD099',
        name: 'Sahumerios Magicos Escencias de la India',
        price: 2990,
        stock: true,
        image: '/img/tienda/productos/099.jpg',
        description: 'Sahumerios Magicos Escencias de la India, Aromanza, 10 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 100,
        code: 'PROD100',
        name: 'Sahumerios Citronela',
        price: 1350,
        stock: false,
        image: '/img/tienda/productos/100.jpg',
        description: 'Sahumerios Citronela, marca, 5 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 101,
        code: 'PROD101',
        name: 'Sahumerios Limpieza Energética',
        price: 1350,
        stock: true,
        image: '/img/tienda/productos/101.jpg',
        description: 'Sahumerios Limpieza Energética, marca, 5 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 102,
        code: 'PROD102',
        name: 'Sahumerios Energía Amorosa',
        price: 1350,
        stock: true,
        image: '/img/tienda/productos/102.jpg',
        description: 'Sahumerios Energía Amorosa, marca, 5 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 103,
        code: 'PROD103',
        name: 'Sahumerios Purificación Amorosa',
        price: 1350,
        stock: true,
        image: '/img/tienda/productos/103.jpg',
        description: 'Sahumerios Purificación Amorosa, marca, 5 unidades',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 104,
        code: 'PROD104',
        name: 'Sahumerios Vainilla',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/104.jpg',
        description: 'Sahumerios Vainilla, Sahumerios de la India Hexagonal, ',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 105,
        code: 'PROD105',
        name: 'Sahumerios Sándalo',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/105.jpg',
        description: 'Sahumerios',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 106,
        code: 'PROD106',
        name: 'Sahumerios Lavanda',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/106.jpg',
        description: 'Sahumerios',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 107,
        code: 'PROD107',
        name: 'Sahumerios Citronela',
        price: 1300,
        stock: false,
        image: '/img/tienda/productos/107.jpg',
        description: 'Sahumerios',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 108,
        code: 'PROD108',
        name: 'Sahumerios Mirrh',
        price: 1300,
        stock: true,
        image: '/img/tienda/productos/108.jpg',
        description: 'Sahumerios',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 109,
        code: 'PROD109',
        name: 'Sahumerios Incense',
        price: 1300,
        stock: true,
        image: '/img/tienda/productos/109.jpg',
        description: 'Sahumerios',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
    },
    {
        id: 110,
        code: 'PROD110',
        name: 'Sahumerios Strawberry',
        price: 1300,
        stock: true,
        image: '/img/tienda/productos/110.jpg',
        description: 'Sahumerios',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Sahumerios'
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
    },
    {
        id: 115,
        code: 'PROD115',
        name: 'Desodorante Tododia Femenino',
        price: 5000,
        stock: true,
        image: '/img/tienda/productos/115.jpg',
        description: 'Desodorante antitranspirante Tododia Femenino 70ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Natura',
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
    },
    {
        id: 119,
        code: 'PROD119',
        name: 'Saphirus Amour',
        price: 4500,
        stock: true,
        image: '/img/tienda/productos/119.jpg',
        description: 'Aromatizador Saphirus Amour 250ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus',
    },
    {
        id: 120,
        code: 'PROD120',
        name: 'Saphirus Greeen',
        price: 4500,
        stock: true,
        image: '/img/tienda/productos/120.jpg',
        description: 'Aromatizador Saphirus Green 250ml',
        orderLink: 'https://wa.me/+5492615104019',
        category: 'Saphirus',
    }
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
        // Solo mostrar la imagen sin stock si no hay stock
        const defaultSinStockImage = '/img/tienda/sin-stock-img.png';
        const sinStockHTML = !product.stock ? `<img class="sin-stock-img" src="${defaultSinStockImage}" alt="Sin stock">` : '';

        // Bloquear boton de pedir cuando no hay stock, sino mostrar boton normal
        const orderButtonHTML = !product.stock
            ? `<button class="btn order disabled" disabled>No disponible</button>`
            : `<a href="${product.orderLink}" class="btn order" data-id="${product.id}" target="_blank">Pedir</a>`;

        // etiqueta de 'nuevo' en productos nuevos
        const newTagHTML = product.isNew ? `<span class="new-tag">Nuevo</span>` : '';
        // Etiqueta "%dcto"
        const offerTagHTML = product.isOnSale ? `<span class="new-tag offer">-${product.discount}%</span>` : '';

        // Precio
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
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave al inicio
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
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave al inicio
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
        <p class="product-detail-code">Código:${product.code}</p>
        <p><strong>Precio:</strong> $${new Intl.NumberFormat('es-ES').format(Math.floor(product.price))}</p>
        <p class="product-details-description">${product.description}</p>
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