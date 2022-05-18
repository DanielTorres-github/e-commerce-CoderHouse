import React from 'react';
import { Link } from "react-router-dom"
import imgCart from "./carrito.png"
import "./CartWidget.css"

function CartWidget({ contador = "" }) {
    return (
        <>
            <Link to="/carrito">
                <img src={imgCart} alt="" className="carrito" />
                <span className='contador'>{contador}</span>
            </Link>
        </>
    );
}

export default CartWidget;