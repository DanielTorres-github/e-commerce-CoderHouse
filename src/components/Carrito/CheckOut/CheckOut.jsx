
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/cartContext";

function CheckOut() {

    const { user, orderId } = useContext(cartContext);

    return (
        <div className="flex flex-col h-full justify-center">
            <div className="border-2 border-gray-200 shadow-md rounded-lg p-20 m-20 ">
                <h2 className="text-center">Tu Compra fue finalizada {user.name}</h2>
                <div className="flex flex-col">
                    <p className="text-center"> Codigo de compra: {orderId} </p>
                </div>
            </div>
            <Link to="/miscompras">
                <button className="text-white bg-green-500 p-2 rounded-md">
                    Ver mis compras
                </button>
            </Link>
        </div>
    )
}
export default CheckOut;