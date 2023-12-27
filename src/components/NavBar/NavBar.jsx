import React from "react";
import "./navbar.css";
import "../CartWidget/CartWidget.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";

function NavBar() {
  return (
    <header className="bg-primary">
      <h1 className="display-1">Tienda X</h1>
      <nav>
        <ul>
          <li>Lacteos</li> 
          <li>Bebidas</li>
          <li>Almacen</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
