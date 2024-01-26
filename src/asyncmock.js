const productos = [
    {id: "1", nombre: "Army of Mushrooms", precio: 20, img: "../img/album1.jpeg", idCat: "1", stock: 10},
    {id: "2", nombre: "Friends on mushrooms", precio: 18, img: "../img/album2.jpeg", idCat: "1", stock: 15},
    {id: "3", nombre: "Legend of the black shawarma", precio: 18, img: "../img/album3.jpeg", idCat: "1", stock: 8},
    {id: "4", nombre: "Return to the souce", precio: 20, img: "../img/album4.jpeg", idCat: "1", stock: 8},
    {id: "5", nombre: "Piece of mind", precio: 25, img: "../img/album5.jpeg", idCat: "1", stock: 8},
    {id: "6", nombre: "Killers", precio: 25, img: "../img/album6.jpeg", idCat: "1", stock: 8},
    {id: "7", nombre: "The number of the beast", precio: 25, img: "../img/album7.jpeg", idCat: "1", stock: 8},
    {id: "8", nombre: "Fear of the dark", precio: 25, img: "../img/album8.jpeg", idCat: "1", stock: 8},
    {id: "9", nombre: "Paranoid", precio: 20, img: "../img/album9.jpeg", idCat: "1", stock: 8},
    {id: "10", nombre: "Black Sabbath", precio: 20, img: "../img/album10.jpeg", idCat: "1", stock: 8},
    {id: "11", nombre: "Sabbath bloody sabbath", precio: 20, img: "../img/album11.jpeg", idCat: "1", stock: 8},
    {id: "12", nombre: "Born Again", precio: 20, img: "../img/album12.jpeg", idCat: "1", stock: 8},
    {id: "13", nombre: "Popeye", precio: 20, img: "../img/Ts1.png", idCat: "2", stock: 8},
    {id: "14", nombre: "Master of the universe", precio: 20, img: "../img/Ts2.png", idCat: "2", stock: 8},
    {id: "15", nombre: "Hagar", precio: 20, img: "../img/Ts3.png", idCat: "2", stock: 8},
    {id: "16", nombre: "Voltron", precio: 20, img: "../img/Ts4.png", idCat: "2", stock: 8},
    {id: "17", nombre: "Coder", precio: 20, img: "../img/Ts5.webp", idCat: "2", stock: 8},
    {id: "18", nombre: "Fix It", precio: 20, img: "../img/Ts6.webp", idCat: "2", stock: 8},
    {id: "19", nombre: "Node", precio: 20, img: "../img/Ts7.webp", idCat: "2", stock: 8},
    {id: "20", nombre: "GitHub", precio: 20, img: "../img/Ts8.webp", idCat: "2", stock: 8}
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto)
        }, 500)
    })
}

export const getProductosCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}