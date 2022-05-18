import { useEffect, useState } from "react";
import React from 'react';
import ItemDetail from "./ItemDetail/ItemDetail";

const items = [
    { id: "1", stock: "10", color: "azul", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", img: "https://picsum.photos/200" },
    { id: "2", stock: "10", color: "rojo", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", img: "https://picsum.photos/200" },
    { id: "3", stock: "10", color: "violeta", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", img: "https://picsum.photos/200" },
    { id: "4", stock: "10", color: "naranja", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", img: "https://picsum.photos/200" },
    { id: "5", stock: "10", color: "negro", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", img: "https://picsum.photos/200" },
    { id: "6", stock: "10", color: "blanco", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", img: "https://picsum.photos/200" },
    { id: "7", stock: "10", color: "verde", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", img: "https://picsum.photos/200" }
]

const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(items)
    }, 4000)
})

function ItemDetailContainer() {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getFetch
            .then(resp => {
                const rand = Math.floor(Math.random() * resp.length)
                resp = setProducto(resp[rand])
            })
            .catch((err) => {
                console.log(err)
                alert("No se puede Cargar producto")
            })
            .finally(() => setCargando(false))
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
                ></ItemDetail>
            }
        </>
    );
}

export default ItemDetailContainer;