import ItemCount from '../../ItemCount/ItemCount';
import "./CardItem.css"

function CardItem({ name, precio, desc, stock, img, agregarItem }) {

    return (
        <div className='card flex flex-col border-2 rounded-b-lg hover:shadow-xl'>
            <img src={img} alt="" className='img' />
            <p className='text-center m-2'>{name}</p>
            <p className='precio text-center m-2'>${precio}</p>
            <p className='flex flex-wrap text-center'>{desc}</p>
            <ItemCount stock={stock} agregarItem={agregarItem}></ItemCount>
        </div>
    );
}

export default CardItem;