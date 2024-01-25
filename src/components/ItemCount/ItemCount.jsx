import { useState } from "react";

const ItemCount = ({inicial, stock, addFunction}) => {
    const [contador, setContador] = useState(1);

    const addOne = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const minusOne = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
            <button onClick={minusOne}> - </button>
            <p>{contador}</p>
            <button onClick={addOne}> + </button>
            </div>
            <button onClick={() => addFunction(contador)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;