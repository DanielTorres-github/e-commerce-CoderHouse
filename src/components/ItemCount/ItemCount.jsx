import React, { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';


function ItemCount({ stock, prod }) {

  const [cont, SetCont] = useState(1)

  const { addToCart, cartList } = useContext(cartContext)

  function sumarProducto(valor) {
    SetCont(cont + valor)
  }
  function alCarrito(cantidad) {
    addToCart({ ...prod, cant: cantidad })
  }
  // console.log("mostrando producto")
  // console.log(prod)
  // console.log(cartList)
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className="flex flex-auto justify-around m-3 border-2 border-blue-400">
          <button onClick={() => sumarProducto(-1)} className="text-blue-500" disabled={cont < 2}>
            -
          </button>
          <p className="text-center">{stock == 0 ? "No hay stock" : cont}</p>
          <button onClick={() => sumarProducto(1)} className="text-blue-500" disabled={stock == 0 || cont == stock}>
            +
          </button>
        </div>
        <p className='text-amber-700 font-medium'>Stock: {stock}</p>
      </div>
      <button onClick={() => alCarrito(cont)} className="bg-blue-500 rounded m-3 mb-4 pt-1 pb-1 pl-2 pr-2" disabled={stock == 0}>Agregar Producto</button>
    </>
  );
}

export default ItemCount;
