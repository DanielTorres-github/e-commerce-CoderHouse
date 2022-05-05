import "./ItemListContainer.css"

function ItemListContainer({titulo="Titulo contenedor"}) {
    return (
        <section className="bloque">
            <h2>{titulo}</h2>
        </section>
    );
}

export default ItemListContainer;