import React from 'react';
import CartItem from "../CartItem/CartItem.jsx";
import {Link} from "react-router-dom";
import {CarritoContext} from "../../context/CarritoContext.jsx";
import {useContext} from "react";

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);
    if (cantidadTotal === 0) {
        return (
            <>
            <div className="contenedorItem">
                <h2>Aun no haz agregado productos al carrito</h2>
                <Link className="btn btn-outline-light" to="/"> Home </Link>
            </div>
            </>
        )
    }
    return (
        <div className="contenedorItem">
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <p>Total: {total}</p>
            <button className="btn btn-outline-light" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link className="btn btn-outline-light" to="/checkout">Finalizar Compra</Link>
        </div>
    );
};

export default Cart;