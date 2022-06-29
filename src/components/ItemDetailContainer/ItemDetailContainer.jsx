import { useEffect, useState } from "react";
import React from 'react';
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


function ItemDetailContainer() {

    const { detalleId } = useParams()

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore()
            const dbquery = doc(db, "items", detalleId)
            getDoc(dbquery).then(resp => setProducto({
                id: resp.id,
                ...resp.data()
            })).catch((err) => {
                alert("No se puede Cargar productos")
            }).finally(() => setCargando(false))
        }, 500);
    }, [])

    return (
        <> {cargando ?
            <h2 className="flex justify-center">Cargando...</h2>
            :
            <ItemDetail
                name={producto.name}
                precio={producto.precio}
                desc={producto.descripcion}
                stock={producto.stock}
                img={producto.img}
                prod={producto}
                color={producto.color}
            ></ItemDetail>
        } </>
    );
}

export default ItemDetailContainer;
