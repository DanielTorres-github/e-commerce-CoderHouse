import { useEffect, useState } from "react";
import CardItemList from "./CardItemList/CardItemList";
import "./ItemListContainer.css"
import items from "../../Json.json"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from "firebase/firestore"

const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(items)
    }, 2000)
})

function ItemListContainer({ titulo = "Titulo contenedor" }) {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { cat } = useParams()

    //itemDetailContainer
    // const [producto, setProducto] = useState({})
    // useEffect(() => {
    //     const db = getFirestore()
    //     const dbQuery = doc(db, "items",
    //         "hLLC7LikfAGTEFtTN08J"
    //     )
    //     getDoc(dbQuery)
    //         .then(resp => setProducto({ id: resp.id, ...resp.data() }))
    // },[])
    // console.log(producto)


    // useEffect(() => {
    //     const db = getFirestore()
    //     const querycollection = collection(db, "items")
    //     const querycollectionFilter = query(querycollection, where("stock", "<=", 5))
    //     getDocs(querycollectionFilter)
    //         .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
    //         .catch((err) => {
    //             console.log(err)
    //             alert("No se puede Cargar productos")
    //         })
    //         .finally(() => setCargando(false))
    // }, [])
    // console.log(productos)

    useEffect(() => {
        if (cat) {
            getFetch
                .then(resp => {
                    resp = setProductos(resp.filter((prods) => prods.subCat === cat))
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
                <CardItemList prods={productos} ></CardItemList>
            }

        </section>
    );
}

export default ItemListContainer;