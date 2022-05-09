import React from 'react';
import "./Carrito.css"
import imgCart from "./carrito.png"



function Carrito({contador = ""}) {
    const carritoItems = []
    return (
        <>
            <a href="/">
                <img src={imgCart} alt="" className="carrito" />
                <span className='contador'>{contador}</span>
            </a>
        </>
    );
}

export default Carrito;