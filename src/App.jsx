import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar.jsx"
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Carrito from './components/Carrito/Carrito.jsx';

function App() {

  return (
    <BrowserRouter>
      <NavBar > </NavBar>
      <div className="cuerpo">
        <Routes>
          <Route path='/' element={<ItemListContainer titulo="Productos nuevos" />} />
          <Route path='/cat/:cat' element={<ItemListContainer />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer ></ItemDetailContainer>}></Route>
          <Route path="/*" element={<Navigate to="/" replace></Navigate>}></Route>
          <Route path='/carrito' element={<Carrito></Carrito>}></Route>
        </Routes>
      </div>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;