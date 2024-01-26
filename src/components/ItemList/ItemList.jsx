import Item from "../Item/Item.jsx";
import './ItemList.css';
import {useEffect, useState} from "react";

const ItemList = ({productos}) => {
    const [animateClass, setAnimateClass] = useState("animate__animated animate__fadeIn");

    useEffect(() => {
        if (productos.length > 0) {
            setAnimateClass("animate__animated animate__fadeOut");
            const timeoutId = setTimeout(() => {
                setAnimateClass("animate__animated animate__fadeIn");
            }, 10);
            return () => clearTimeout(timeoutId);
        }
    }, [productos]);

    return (
        <div className={`contenedorProductos ${animateClass}`}>
            {productos?.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;