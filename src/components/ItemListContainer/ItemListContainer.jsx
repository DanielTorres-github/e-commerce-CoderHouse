import { useEffect, useState } from "react";
import CardItemList from "./CardItemList/CardItemList";
import "./ItemListContainer.css"

const items = [
    { id: "1", stock: "10", color: "azul", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "sldkfjasldkfjñalkjg sadfsdgfg", img: "https://picsum.photos/200" },
    { id: "2", stock: "10", color: "rojo", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "sldkfjasldkfjñalkjg sadfsdgfg", img: "https://picsum.photos/200" },
    { id: "3", stock: "10", color: "violeta", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "sldkfjasldkfjñalkjg sadfsdgfg", img: "https://picsum.photos/200" },
    { id: "4", stock: "10", color: "naranja", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "sldkfjasldkfjñalkjg sadfsdgfg", img: "https://picsum.photos/200" },
    { id: "5", stock: "10", color: "negro", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "sldkfjasldkfjñalkjg sadfsdgfg", img: "https://picsum.photos/200" },
    { id: "6", stock: "10", color: "blanco", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "sldkfjasldkfjñalkjg sadfsdgfg", img: "https://picsum.photos/200" },
    { id: "7", stock: "10", color: "verde", rubro: "ropa", categoria: "indumentaria y accesorios", subCat: "gorras", name: "gorra", precio: "1222", descripcion: "sldkfjasldkfjñalkjg sadfsdgfg", img: "https://picsum.photos/200" }
]

const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(items)
    }, 3000)
})

function ItemListContainer({ titulo = "Titulo contenedor", agregarItem }) {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getFetch
            .then(resp => {
                resp = setProductos(resp)
            })
            .catch((err) => {
                console.log(err)
                alert("No se puede Cargar productos")
            })
            .finally(() => setCargando(false))
    }, [])

    return (
        <section className="bloque">
            <h2 className="text-center">{titulo}</h2>
            {cargando ?
                <h2>Cargando...</h2>
                :
                <CardItemList agregarItem={agregarItem} prod={productos} ></CardItemList>
            }

        </section>
    );
}

export default ItemListContainer;