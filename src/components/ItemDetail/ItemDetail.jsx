import React from 'react';
import {useState} from "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount.jsx";
import {Link} from "react-router-dom";

const ItemDetail = ({id, nombre, stock, precio, img}) => {
    const [addQuantified, setAddQuantified] = useState(0);

    const handleQuantified = (cantidad) => {
        setAddQuantified(cantidad);
        console.log("Productos agregados: " + cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <p>ID: {id}</p>
            <p>Stock: {stock}</p>
            <p>Loren ipsum</p>
            <img src={img} alt={nombre}/>
    {
        addQuantified > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} addFunction={handleQuantified}/>)
    }
        </div>
    )
}

export default ItemDetail;