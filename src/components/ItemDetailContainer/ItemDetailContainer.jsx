import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getProducto} from "../../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();
    useEffect(() => {
        getProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem]);

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    );
};

export default ItemDetailContainer;