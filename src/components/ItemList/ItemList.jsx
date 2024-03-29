import Item from "../Item/Item.jsx";
import './ItemList.css';

const ItemList = ({productos}) => {

    return (
        <div className="contenedorProductos">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;
