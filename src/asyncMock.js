const products = [
    {
        id:'1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'https://cbafederal.net/w-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12',
    },
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
