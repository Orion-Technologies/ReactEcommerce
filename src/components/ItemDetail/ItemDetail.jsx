import {useContext, useState} from 'react';
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount.jsx";
import {Link} from "react-router-dom";
import {CarritoContext} from "../../context/CarritoContext.jsx";

const ItemDetail = ({id, nombre, stock, precio, img, descripcion}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarAlCarrito} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = {id, nombre, precio};
        agregarAlCarrito(item, cantidad);
    };

    return (
        <div className='alignItems'>
            <div className='contenedorItem'>
                <h2>Nombre: {nombre}</h2>
                <h3>Precio: {precio}</h3>
                <p>ID: {id}</p>
                <p>Stock: {stock}</p>
                <p>Descripcion: {descripcion}</p>
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
