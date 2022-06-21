import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import React, { useContext } from "react";
import { cartContext } from "../../../context/cartContext";

function CartDetail() {
  const { cartList, eliminarItem, vaciarCarrito, precioTotal } =
    useContext(cartContext);

  const user = {
    name: "pepe",
    email: "pepe@gmail.com",
    tel: "111111111",
  };

  function finalizarCompra() {

    let compra = {
      comprador: user,
      items: cartList.map(
        (item) =>
          (item = {
            id: item.id,
            name: item.name,
            precio: item.precio,
          })
      ),
      total: precioTotal,
    };

    const db = getFirestore();

    const querycollection = collection(db, "orders");
    addDoc(querycollection, compra)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => {
        actualizarStock();
        vaciarCarrito();
      });
    async function actualizarStock() {
      const db = getFirestore();
      const querycollectionStock = collection(db, "items");
      const queryActualizarStock = query(
        querycollectionStock,
        where(
          documentId(),
          "in",
          cartList.map((it) => it.id)
        )
      );

      const batch = writeBatch(db);
      await getDocs(queryActualizarStock)
        .then((resp) =>
          resp.docs.forEach((res) => {
            return batch.update(res.ref, {
              stock:
                res.data().stock -
                cartList.find((item) => item.id === res.id).cant,
            });
          })
        )
        .catch((err) => console.log(err))
        .finally();

      batch.commit();
    }
  }

  return (
    
    <div className="flex flex-col">
      <div className="flex flex-col border-1 shadow-md rounded-md vh">
        {cartList.map((prod) => (
          <div className="flex border-t-2 m-2 p-4" key={prod.id}>
            <div className="flex prod-left">
              <img src={prod.img} className="w-16 m-2 self-center" />
            </div>
            <div className="flex-col prod-right">
              <p className="pr-6 self-center">
                {prod.name}
              </p>
              <p className="pl-4 self-center">Cantidad: {prod.cant}</p>
            </div>
              <p className="pl-4 self-center">
                {" "}
                Precio: ${prod.cant * prod.precio}{" "}
              </p>
            <button
              onClick={() => eliminarItem(prod)}
              className="bg-red-500 text-white self-center ml-12 p-1 rounded-md"
            >
              Borrar
            </button>
          </div>
        ))}
        <div className="flex justify-center border-t-2 w-full">
          <p className="mt-5 text-xl">Precio total: ${precioTotal}</p>
        </div>
      </div>
      <div className="border-t-4 text-center flex justify-around ">
        <button
          onClick={vaciarCarrito}
          className="bg-red-500 text-white p-2 rounded-md self-center"
        >
          Vaciar Carrito
        </button>
        <button
          className="text-white bg-green-500 p-2 rounded-md"
          onClick={finalizarCompra}
        >
          Pagar
        </button>
      </div>
    </div>
  );
}

export default CartDetail;
