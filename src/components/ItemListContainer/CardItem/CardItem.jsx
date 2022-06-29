import { Link } from 'react-router-dom';
import "./CardItem.css"

function CardItem({ id, name, precio, img, stock }) {

    return (
        <div className='card flex flex-col border-2 rounded-b-lg hover:shadow-xl'>
            <Link to={`/detalle/${id}`} className="self-center">
                <img src={img} alt="" className='img' />
            </Link>
            <Link to={`/detalle/${id}`} className="self-center">
                <p className='text-center m-2'>
                    {name}</p>
            </Link>
            <Link to={`/detalle/${id}`} className="self-center">
                <p className='precio text-center m-2'>${precio}</p>
                {stock === 0 ? <p className='text-red-400 text-center m-2'>Sin stock</p> : ""}
            </Link>
            <Link to={`/detalle/${id}`} className="self-center">
                <button className="bg-blue-500 rounded m-3 mb-4 pt-1 pb-1 pl-2 pr-2">Ver Producto</button>
            </Link>
        </div>
    );
}

export default CardItem;
