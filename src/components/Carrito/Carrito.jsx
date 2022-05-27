import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { cartContext } from '../../context/cartContext';
import "./Carrito.css"


function Carrito() {
    const {cartList} = useContext(cartContext)
    return (
        <>
            <div className='flex flex-col justify-center'>
                {cartList.map(prod =>
                    <li> {prod.name} | Cantidad: {prod.cant}</li>
                    )}
            </div>
        </>
    );
}

export default Carrito;