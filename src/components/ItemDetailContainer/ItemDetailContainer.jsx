import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getUnProducto} from "../../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import '../ItemListContainer/ItemListContainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();
    useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem]);

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    );
};

export default ItemDetailContainer;

