import React, { useState } from 'react';
import NavBar from "./components/NavBar/NavBar.jsx"
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  const [carrito, setCarrito] = useState([])
  function agregarItem() {
    setCarrito([...carrito, ""])
  }
  return (
    <>
      <NavBar contador={carrito.length}> </NavBar>
      <div className="cuerpo">
        <ItemListContainer titulo="Productos nuevos" agregarItem={agregarItem}></ItemListContainer>
      </div>
        <ItemDetailContainer></ItemDetailContainer>
      <footer></footer>
    </>
  );
}

export default App;