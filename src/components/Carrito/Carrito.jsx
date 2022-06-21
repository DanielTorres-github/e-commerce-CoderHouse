import {
    addDoc,
    collection,
    documentId,
    Firestore,
    getDocs,
    getFirestore,
    query,
    where,
    writeBatch
} from "firebase/firestore";
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {cartContext} from "../../context/cartContext";
import "./Carrito.css";
import CartDetail from "./CartDetail/CartDetail";

function Carrito() {
    const {cartList} = useContext(cartContext);

    return (
        <> {
            cartList.length === 0 ? (
                <div className="vh flex flex-col text-center">
                    <h2>Carrito vacio</h2>
                    <Link to="/">
                        <p className="m-4">Ir a comprar</p>
                    </Link>
                </div>
            ) : (
                <CartDetail list={cartList}></CartDetail>
            )
        } </>
    );
}

export default Carrito;
