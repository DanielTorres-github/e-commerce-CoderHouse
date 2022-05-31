import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { cartContext } from '../../../../context/cartContext';
import imgCart from "./carrito.png"
import "./CartWidget.css"

function CartWidget() {
    const { contador } = useContext(cartContext)
    return (
        <>
            <Link to="/carrito">
                <img src={imgCart} alt="" className="carrito" />
                <span className='contador'>{contador === 0 ? "" : contador}</span>
            </Link>
        </>
    );
}

export default CartWidget;