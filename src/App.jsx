import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Mundo!" />
    </>
  );
};

export default App;
