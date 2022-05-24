import { useEffect, useState } from "react";
import React from 'react';
import ItemDetail from "./ItemDetail/ItemDetail";
import items from "../../Json.json"
import { useParams } from "react-router-dom";


const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(items)
    }, 1000)
})

function ItemDetailContainer() {

    const { detalleId } = useParams()

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            getFetch
                .then((resp) => {
                    resp = setProducto(resp[detalleId - 1])
                })
                .catch((err) => {
                    console.log(err)
                    alert("No se puede Cargar producto")
                })
                .finally(() => setCargando(false))
        }, 1000);
    }, [])

    return (
        <>
            {cargando ?
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
            }
        </>
    );
}

export default ItemDetailContainer;