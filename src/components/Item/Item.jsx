import React from 'react';
import './Item.css';
import {Link} from "react-router-dom";

const Item = ({id, nombre, precio, stock, img}) => {
    return (
        <div className='cardProducto'>
            <img src={img} alt={nombre}/>
            <h3 className="bigelow-rules-regular">Nombre:</h3>
            <h3 className="bigelow-rules-regular">{nombre}</h3>
            <p>ID: {id}</p>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
            <Link to={`/item/${id}`}>
                <button className="btn btn-outline-light">
                Ver detalles
                </button></Link>
        </div>
    );
};

export default Item;