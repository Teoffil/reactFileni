const products = [
    {
        id:'1',
        name: 'Motherboard Msi Mpg B550 Gaming Plus Am4 Pcie M.2 Atx',
        price: 94000,
        category: 'motherboards',
        img: 'https://firebasestorage.googleapis.com/v0/b/react-2023-fdf7c.appspot.com/o/Motherboard.webp?alt=media&token=a638175f-5fd4-447e-ba2e-39ca2c20005c',
        stock: 25,
        description: 'Mejora el rendimiento de tu equipo con la Motherboard MSI MPG B550 Gaming Plus AM4 PCIe M.2 ATX. Con tecnología avanzada y alta velocidad, es ideal para los jugadores más exigentes. ¡Adquiérela ahora y lleva tus juegos al siguiente nivel!',
    },
    { id:'2', name: 'Motherboard Asus Prime B460m-a R2.0 Intel Socket 1200 Intel Color Negro', price: 54000, category: 'motherboards', img: 'https://firebasestorage.googleapis.com/v0/b/react-2023-fdf7c.appspot.com/o/MotherboardDos.webp?alt=media&token=79dc973b-936f-40cb-986f-be1ca8e7e6b8', stock: 10, description: 'Actualiza tu computadora con la Motherboard ASUS Prime B460M-A R2.0 Intel Socket 1200. Con su diseño en color negro y alto rendimiento, podrás experimentar una experiencia de juego increíblemente fluida y sin interrupciones. ¡Obtén la tuya ahora y disfruta de una nueva era de juegos!'},
    { id:'3', name: 'Placa de video Nvidia MSI Ventus GeForce RTX 30 Series RTX 3060Ti', price: 300000, category: 'gpus', img: 'https://firebasestorage.googleapis.com/v0/b/react-2023-fdf7c.appspot.com/o/gpu.webp?alt=media&token=c2980728-798b-4329-a6b6-1cccd555dbeb', stock: 15, description: 'Domina el mundo de los juegos con la placa de video NVIDIA MSI Ventus GeForce RTX 30 Series RTX 3060. Con su tecnología de vanguardia, podrás disfrutar de gráficos ultra-realistas y velocidades de fotogramas sorprendentes. ¡Consigue la tuya hoy y lleva tu experiencia de juego al siguiente nivel!'},
    { id:'4', name: 'Micro Procesador Amd Ryzen 5 Pro 4500 8mb 4.1ghz Am4 Pcreg', price: 72000, category: 'procesadores', img: 'https://firebasestorage.googleapis.com/v0/b/react-2023-fdf7c.appspot.com/o/procesadorAmd.webp?alt=media&token=ca8fea8a-8f0c-4737-906a-e73257dde66a', stock: 10, description: 'Experimenta un rendimiento excepcional con el microprocesador AMD Ryzen 5 Pro 4500 8MB 4.1GHz AM4 PCReg. Con su arquitectura avanzada y velocidades de reloj ultra-rápidas, este procesador te permitirá ejecutar tus aplicaciones más exigentes sin problemas. ¡Obtén el tuyo ahora y lleva tu experiencia informática al siguiente nivel!'},
    { id:'5', name: 'Mother B450 Gaming Plus Max Msi Sam4', price: 52000, category: 'motherboards', img: 'https://firebasestorage.googleapis.com/v0/b/react-2023-fdf7c.appspot.com/o/MotherboardTres.webp?alt=media&token=b860cca8-f436-43dd-a815-5fafddd9457c', stock: 5, description: 'Maximiza tu experiencia de juego con la Motherboard B450 Gaming Plus Max MSI SAM4. Con su diseño avanzado y tecnología de alta velocidad, esta placa es ideal para jugadores exigentes. ¡Consigue la tuya ahora y lleva tu equipo de juego al siguiente nivel!'},
    { id:'6', name: 'Placa de video Nvidia Evga FTW Gaming GeForce RTX 30 Series RTX 3080', price: 380000, category: 'gpus', img: 'https://firebasestorage.googleapis.com/v0/b/react-2023-fdf7c.appspot.com/o/gpuDos.webp?alt=media&token=9e296b4c-eb18-4ed4-b9e1-384c1a20e07c', stock: 7, description: 'Lleva tu experiencia de juego a un nivel completamente nuevo con la placa de video NVIDIA EVGA FTW Gaming GeForce RTX 30 Series RTX 3080 10G-P5-3897-KR 10GB. Con su tecnología de vanguardia, podrás disfrutar de gráficos ultra-realistas, rendimiento increíblemente rápido y una experiencia de juego fluida y sin interrupciones. ¡Consigue la tuya ahora y domina el mundo de los juegos!'},
    { id:'7', name: 'Procesador Intel Core i5-13600K BX8071513600K de 14 núcleos', price: 100000, category: 'procesadores', img: 'https://firebasestorage.googleapis.com/v0/b/react-2023-fdf7c.appspot.com/o/procesadorIntel.webp?alt=media&token=2488a4a8-ba3c-482b-9eb3-0f9ba023c1b0', stock: 30, description: 'Potencia tu sistema con el procesador Intel Core i5-13600K BX8071513600K de 14 núcleos y alto rendimiento. Con velocidades de reloj ultra-rápidas, este procesador te permitirá ejecutar aplicaciones exigentes y juegos sin problemas. ¡Consigue el tuyo ahora y lleva tu experiencia informática al siguiente nivel!'},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500)
    });
};
