import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Formulario from "./components/Formulario/Formulario.jsx";
import {CarritoProvider} from "./context/CarritoContext.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <CarritoProvider>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
                    <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/formulario' element={<Formulario/>} />
                    <Route path='*' element={<h2>Pagína no encontrada</h2>}/>
                </Routes>
                </CarritoProvider>
            </BrowserRouter>

        </>
    );
};

export default App;
