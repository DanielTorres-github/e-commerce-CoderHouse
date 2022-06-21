import {useEffect, useState} from "react";
import CardItemList from "./CardItemList/CardItemList";
import "./ItemListContainer.css"
import {useParams} from "react-router-dom";
import {
    getFirestore,
    getDocs,
    collection,
    query,
    where
} from "firebase/firestore"

function ItemListContainer({titulo}) {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {cat} = useParams()

    if (cat) {
        titulo = cat
    } else {
        titulo = "productos nuevos"
    }

    useEffect(() => {
        const db = getFirestore()
        if (cat) {
            const querycollection = collection(db, "items")
            const querycollectionFilter = query(querycollection, where("subCat", "==", cat))
            getDocs(querycollectionFilter).then(resp => setProductos(resp.docs.map(item => ({
                id: item.id,
                ...item.data()
            })))).catch((err) => {
                console.log(err)
                alert("No se puede Cargar productos")
            }). finally(() => setCargando(false))
        } else {
            const querycollection = collection(db, "items")
            getDocs(querycollection).then(resp => setProductos(resp.docs.map(item => ({
                id: item.id,
                ...item.data()
            })))).catch((err) => {
                console.log(err)
                alert("No se puede Cargar productos")
            }). finally(() => setCargando(false))
        }
    }, [cat])

    return (
        <section className="mt-5 item-container flex flex-col self-center justify-center">
            <h2 className="text-center">
                {titulo}</h2>
            {
            cargando ? <h2>Cargando...</h2> : <CardItemList prods={productos}></CardItemList>
        } </section>
    );
}

export default ItemListContainer;
