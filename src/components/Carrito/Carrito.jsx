import React from 'react';
import "./Carrito.css"
import imgCart from "../img/carrito.png"

function Carrito() {
    const contador = ""
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