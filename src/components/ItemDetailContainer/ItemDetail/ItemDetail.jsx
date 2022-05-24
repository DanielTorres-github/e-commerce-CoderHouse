import React, { useState } from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import "../ItemDetail/ItemDetail.css"


function SelectColor({ options, onSelect, defaultOp = 1 }) {
    return options.map((op) => {
        <>
            <select onChange={(event) => {
                onSelect(op.value)
            }}
                type="radio"
                name="color"
                checked={defaultOp === op.value}
                id={op.value}
            >
            </ select>
            <label for={op.value}>{op.text}</label>
        </>
    }
    )
}



function ItemDetail({ name, precio, desc, stock, color, img, prod, prodSimil }) {

    const options = [
        { value: 1, text: "red" },
        { value: 2, text: "blue" }
    ]
    // console.log(`esto es ${options} `)
    const [option, setOption] = useState(1)

    function OptionSelected(value) {
        setOption(value)
    }

    return (
        <div className='flex justify-center m-4 '>
            <div className='flex border border-sky-500 p-4 gap-2'>
                <img src={img} alt="" />
                <div className='flex flex-col text-center justify-around gap-1'>
                    <p className='nombre'>{name}</p>
                    <p className='desc w-96 mt-4'>{desc}</p>
                    <div className='flex justify-around items-center  mt-4'>
                        <p className='precio'>${precio}</p>
                        <SelectColor options={options} onSelect={OptionSelected} defaultOp={option}></SelectColor>
                    </div>
                    <div className='self-center w-60'>
                        <ItemCount stock={stock} prod={prod}></ItemCount>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;