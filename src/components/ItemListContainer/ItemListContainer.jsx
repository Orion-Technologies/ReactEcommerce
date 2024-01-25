import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList.jsx";
import {getProductos, getProductosCategoria} from "../../asyncmock.js";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosCategoria : getProductos;
        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    }, [idCategoria]);

    return (
        <div>
            <h2 className="bigelow-rules-regular display-2">Productos</h2>
            <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;
