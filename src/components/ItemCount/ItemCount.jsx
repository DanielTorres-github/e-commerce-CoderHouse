import React, { useState } from 'react';


function ItemCount({stock, agregarItem }) {

  const [cont, SetCont] = useState(0)

  function Sumar() {
    if (cont < stock)
      SetCont(cont + 1)
    else { alert("No hay stock") }
  }
  function Restar() {
    if (cont !== 0)
      SetCont(cont - 1)
  }

  return (
    <>
      <div className="flex justify-around m-3 border-2 border-blue-400">
        <button onClick={Restar} className="text-blue-500">
          -
        </button>
        <p className="text-center">{cont}</p>
        <button onClick={Sumar} className="text-blue-500">
          +
        </button>
      </div>
      <button onClick={agregarItem} className="bg-blue-500 rounded m-3 mb-4">Agregar Producto</button>
    </>
  );
}

export default ItemCount;
