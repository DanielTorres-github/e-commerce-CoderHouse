import React from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import "../ItemDetail/ItemDetail.css"

function ItemDetail({
    name,
    precio,
    desc,
    stock,
    img,
    prod
}) {


    return (
        <div className='flex justify-center m-4 '>
            <div className='flex border border-sky-500 p-4 gap-2'>
                <img src={img}
                    alt=""/>
                <div className='flex flex-col text-center justify-around gap-1'>
                    <p className='nombre'>
                        {name}</p>
                    <p className='desc w-96 mt-4'>
                        {desc}</p>
                    <div className='flex justify-around items-center  mt-4'>
                        <p className='precio'>${precio}</p>
                    </div>
                    <div className='self-center w-60'>
                        <ItemCount stock={stock}
                            prod={prod}></ItemCount>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
