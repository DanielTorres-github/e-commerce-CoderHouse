import { Link } from 'react-router-dom';
// import ItemCount from '../../ItemCount/ItemCount';
import "./CardItem.css"

function CardItem({ id, name, precio, img }) {

    return (
        <div className='card flex flex-col border-2 rounded-b-lg hover:shadow-xl'>
            <a href="/"><img src={img} alt="" className='img' /></a>
            <a href="/"><p className='text-center m-2'>{name}</p></a>
            <a href="/"><p className='precio text-center m-2'>${precio}</p></a>
            <Link to={`/detalle/${id}`} className="self-center" >
                <button className="bg-blue-500 rounded m-3 mb-4 pt-1 pb-1 pl-2 pr-2">Ver Producto</button>
            </Link>
        </div >
    );
}

export default CardItem;