import ItemCount from '../../ItemCount/ItemCount';
import "./CardItem.css"

function CardItem() {
    let stock
    const valor = 50000
    const descripcion = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    return (
        <div className='card flex flex-col border-2 rounded-b-lg hover:shadow-xl'>
            <img src="/" alt="" className='img' />
            <p className='precio text-center m-2'>${valor}</p>
            <p className='flex flex-wrap text-center'>{descripcion}</p>
            <ItemCount stock={stock}></ItemCount>
        </div>
    );
}

export default CardItem;