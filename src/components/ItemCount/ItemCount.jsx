import { useState } from "react";
import '../ItemCount/ItemCount.css'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(1);

    const addOne = () => {
        console.log("add")
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const minusOne = () => {
        console.log("minus")
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="contador-container d-flex justify-content-center align-items-center">
            <button onClick={minusOne} className="btn btn-outline-light"> - </button>
            <p className="contador mx-2">{contador}</p>
            <button onClick={addOne} className="btn btn-outline-light"> + </button>
            </div>
            <div className="d-flex justify-content-center mt-2">
            <button onClick={() => funcionAgregar(contador)} className="btn btn-outline-light"> Agregar al Carrito </button>
            </div>
        </>
    )
}

export default ItemCount;