import React from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import "../ItemDetail/ItemDetail.css"

function ItemDetail({ name, precio, desc, stock, img }) {
    return (
        <div className='flex justify-center m-4 '>
            <div className='flex border border-sky-500 p-4 gap-2'>
                <img src={img} alt="" />
                <div className='flex flex-col text-center justify-around gap-1'>
                    <p className='nombre'>{name}</p>
                    <p className='desc w-96 mt-4'>{desc}</p>
                    <p className='precio mt-4'>${precio}</p>
                    <div className='self-center w-60'>
                        <ItemCount stock={stock}></ItemCount>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;