import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
                    <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h2>Pagína no encontrada</h2>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default App;
