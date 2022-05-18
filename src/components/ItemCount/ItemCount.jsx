import React, { useState } from 'react';


function ItemCount({ stock, agregarItem }) {

  const [cont, SetCont] = useState(1)

  function sumarProducto(valor) {
    SetCont(cont + valor)
  }

  return (
    <>
      <div className="flex justify-around m-3 border-2 border-blue-400">
        <button onClick={() => sumarProducto(-1)} className="text-blue-500" disabled={cont < 2}>
          -
        </button>
        <p className="text-center">{cont}</p>
        <button onClick={() => sumarProducto(1)} className="text-blue-500" disabled={cont == stock}>
          +
        </button>
      </div>
      <button onClick={agregarItem} className="bg-blue-500 rounded m-3 mb-4 pt-1 pb-1 pl-2 pr-2">Agregar Producto</button>
    </>
  );
}

export default ItemCount;
