import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import { cartContext } from '../../context/cartContext';
import "./Carrito.css"


function Carrito() {
    const { cartList, eliminarItem, vaciarCarrito } = useContext(cartContext)

    return (
        <>
            {cartList.length === 0 ?
                <div className='vh flex flex-col text-center'>
                    <h2>Carrito vacio</h2>
                    <Link to="/">
                        <p className='m-4'>Ir a comprar</p>
                    </Link>
                </div>
                :
                <div className='flex flex-col'>
                    {/* <button onClick={carrito} className="bg-blue-400 m-2">mostrar</button> */}
                    <div className='flex flex-col justify-center vh'>
                        {cartList.map(prod =>
                            <div className='flex border-1 shadow-md rounded-md m-2 p-4' key={prod.id}>
                                <img src={prod.img} className="w-16 m-2 self-center" />
                                <p className='pr-6 border-r-2 border-indigo-500 self-center'>{prod.name}</p>
                                <p className='pl-2 self-center'> Cantidad: {prod.cant}</p>
                                <p className='pl-2 self-center'> Precio: {prod.cant * prod.precio}</p>
                                <button onClick={() => eliminarItem(prod)}>Eliminar</button>
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <p className='border-t-4 text-center'>Precio total: { }</p>
                    </div>
                </div>
            }

        </>
    );
}

export default Carrito;