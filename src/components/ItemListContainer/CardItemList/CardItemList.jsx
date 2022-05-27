import CardItem from "../CardItem/CardItem";

function CardItemList({ prods, prodSimil }) {

    return (
        <>
            <div className="flex flex-wrap gap-2 justify-center">
                {prods.map((prod) =>
                    <div key={prod.id}>
                        <CardItem
                            id={prod.id}
                            name={prod.name}
                            precio={prod.precio}
                            desc={prod.descripcion}
                            stock={prod.stock}
                            img={prod.img}
                            productos={prods}
                            simil={prodSimil}>
                        </CardItem>
                    </div>
                )}

            </div>
        </>
    );
}

export default CardItemList;