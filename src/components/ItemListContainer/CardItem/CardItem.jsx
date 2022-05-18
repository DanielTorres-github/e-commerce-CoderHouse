import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import "./CardItem.css"

function CardItem({ id, name, precio, desc, stock, img, agregarItem }) {
    
    return (
        <div className='card flex flex-col border-2 rounded-b-lg hover:shadow-xl'>
            <a href="/"><img src={img} alt="" className='img' /></a>
            <a href="/"><p className='text-center m-2'>{name}</p></a>
            <a href="/"><p className='precio text-center m-2'>${precio}</p></a>
            <Link to={`/detalle/${id}`} className="self-center" >
                <ItemCount stock={stock} agregarItem={agregarItem}></ItemCount>
            </Link>
        </div >
    );
}

export default CardItem;