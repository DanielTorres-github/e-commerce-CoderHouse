import CardItem from "./CardItem/CardItem";
import "./ItemListContainer.css"

function ItemListContainer({ titulo = "Titulo contenedor" }) {
    return (
        <section className="bloque">
            <h2>{titulo}</h2>
            <CardItem stock="5"></CardItem>
        </section>
    );
}

export default ItemListContainer;