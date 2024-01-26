import React, {useState} from 'react';
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount.jsx";
import {Link} from "react-router-dom";

const ItemDetail = ({id, nombre, stock, precio, img}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados: " + cantidad);
    }

    return (
        <div className='alignItems'>
            <div className='contenedorItem'>
                <h2>Nombre: {nombre}</h2>
                <h3>Precio: {precio}</h3>
                <p>ID: {id}</p>
                <p>Stock: {stock}</p>
                <p>Loren ipsum</p>
                <img src={img} alt={nombre}/>
                <div>
                    {
                        agregarCantidad > 0 ? (<Link to="/cart">
                            <button className="btn btn-outline-light">
                            Terminar Compra
                            </button>
                        </Link>) : (
                            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;