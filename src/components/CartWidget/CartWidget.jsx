import React from "react";
import "./cartWidget.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext.jsx";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div>
        <Link to="/cart">
      <img className="imgCarrito" src="../img/cart.png" alt="cart" />
            {
                cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
            }
        </Link>
    </div>
  );
};

export default CartWidget;
