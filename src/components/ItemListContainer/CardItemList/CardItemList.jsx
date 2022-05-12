import CardItem from "../CardItem/CardItem";

function CardItemList({ agregarItem, prod }) {


    return (
        <>
            <div className="flex gap-2">
                {prod.map((prod) =>
                    <div key={prod.id}>
                        <CardItem
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