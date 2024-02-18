//1-  Importar el hook useState y createContext
import {createContext, useState} from "react";

//2- creamos el nuevo contexto, valor inicial un objeto con las siguientes propiedades:
export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

//3- Creamos un componente llamado "CarritoProvider", se puede encontrar ene l material com : "Proveedor de Contextos".
export const CarritoProvider = ({children}) => {
    //Usamos useState para generar algunos estados para almacenar el carrito, el total y la cantidadTotal.

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //Metemos unos console.log de forma momentanea para ver que todo se este actualizando correctamente
    console.log(carrito);
    console.log("Monto total de la compra: ", total);
    console.log("Cantidad de items: ", cantidadTotal);

    //4- agregamos algunos metodos al proveedor de contexto para manipular el carrito de compras.
    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
        /*
        * La sintaxis
        * prev => [...prev, {item, cantidad}]
        * se utiliza para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto, que representa el nuevo producto
        * */
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }
    //Funcion para eliminar del carrito.
    const eliminarProducto = (id) => {
        // Me guardo una referencia del producto que vamos a borrar:

        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }

    //Función para vaciar el carrito de compras:
    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setCantidadTotal(0);
    }
    return (
        <CarritoContext.Provider value = {{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>{children}</CarritoContext.Provider>
    )
    // Le tenemos que agregar el children, que es una propiedad especial que utilizamos
}