import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Carrito from "./components/Carrito/Carrito.jsx";
import CartContextProvider from "./context/cartContext.jsx";
import Login from "./components/NavBar/NavUser/Login/Login.jsx";
import MisCompras from "./components/NavBar/NavUser/MisCompras/MisCompras.jsx";
import CheckOut from "./components/Carrito/CheckOut/CheckOut.jsx";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <NavBar></NavBar>
                <div className="cuerpo">
                    <Routes>
                        <Route path="/login" element={<Login></Login>}></Route>
                        <Route path="/" element={<ItemListContainer titulo="Productos nuevos" />} />
                        <Route path="/cat/:cat" element={<ItemListContainer />} />
                        <Route path="/detalle/:detalleId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                        <Route path="/*" element={<Navigate to="/" replace></Navigate>}></Route>
                        <Route path="/carrito" element={<Carrito></Carrito>}></Route>
                        <Route path="/miscompras" element={<MisCompras></MisCompras>}></Route>
                        <Route path="/CheckOut" element={<CheckOut></CheckOut>}></Route>
                    </Routes>
                </div>
                <footer></footer>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
