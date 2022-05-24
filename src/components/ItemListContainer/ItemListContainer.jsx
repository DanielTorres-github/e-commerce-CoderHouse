import { useEffect, useState } from "react";
import CardItemList from "./CardItemList/CardItemList";
import "./ItemListContainer.css"
import items from "../../Json.json"
import { useParams } from "react-router-dom";

const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(items)
    }, 2000)
})

function ItemListContainer({ titulo = "Titulo contenedor" }) {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [prodSimil, setprodSimil] = useState([])

    const { cat } = useParams()

    useEffect(() => {
        if (cat) {
            getFetch
                .then(resp => {
                    resp = setProductos(resp.filter((prods) => prods.subCat === cat))
                    setprodSimil(productos)
                })
                .catch((err) => {
                    console.log(err)
                    alert("No se puede Cargar productos")
                })
                .finally(() => setCargando(false))
        } else {
            getFetch
                .then(resp => {
                    resp = setProductos(resp)
                })
                .catch((err) => {
                    console.log(err)
                    alert("No se puede Cargar productos")
                })
                .finally(() => setCargando(false))
        }
    }, [cat])

    return (
        <section className="mt-5 item-container flex flex-col self-center justify-center">
            <h2 className="text-center">{titulo}</h2>
            {cargando ?
                <h2>Cargando...</h2>
                :
                <CardItemList prods={productos} simil={prodSimil} ></CardItemList>
            }

        </section>
    );
}

export default ItemListContainer;