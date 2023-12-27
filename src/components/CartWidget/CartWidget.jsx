import React from "react";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img className="imgCarrito" src="./img/cart.png" alt="cart" />
      <strong> 3 </strong>
    </div>
  );
};

export default CartWidget;
