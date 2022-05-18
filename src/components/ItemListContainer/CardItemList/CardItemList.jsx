import CardItem from "../CardItem/CardItem";

function CardItemList({ agregarItem, prod }) {


    return (
        <>
            <div className="flex flex-wrap gap-2 justify-center">
                {prod.map((prod) =>
                    <div key={prod.id}>
                        <CardItem
                            id={prod.id}
                            name={prod.name}
                            precio={prod.precio}
                            desc={prod.descripcion}
                            stock={prod.stock}
                            img={prod.img}
                            agregarItem={agregarItem}>
                        </CardItem>
                    </div>
                )}

            </div>
        </>
    );
}

export default CardItemList;