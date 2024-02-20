import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import {useParams} from "react-router-dom";
//import {getUnProducto} from "../../asyncmock.js";
import {db} from "../../services/config.js";
import {getDoc, doc} from "firebase/firestore";

import "../ItemListContainer/ItemListContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "productos", idItem)
        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = {id: res.id, ...data};
                setProducto(nuevoProducto);
            })
            .catch(error => console.log("Error", error))
    }, [idItem])

    return (
       <div>
           <ItemDetail {...producto} />
       </div>
    );
};

export default ItemDetailContainer;

