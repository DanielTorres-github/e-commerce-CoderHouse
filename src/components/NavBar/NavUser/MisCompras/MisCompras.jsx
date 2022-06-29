import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

function MisCompras() {
    const [compras, setCompras] = useState([])

    useEffect(() => {

        const db = getFirestore()
        const querycollection = collection(db, "orders")

        getDocs(querycollection)
            .then(resp => setCompras(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch(err => console.log(err))

    }, [])


    return (
        <>
            <div className='flex flex-col justify-center'>
                <p>Compras realizadas</p>
                {compras.map(item =>
                    <div className='border-2 m-2 flex' key={item.id}>
                        <div className='m-2 border-r-2'>
                            <p className='m-2'>id de compra:</p>
                            <p className='m-2'>{item.id}</p>
                        </div>
                        <div className='flex'>
                            <div className='m-2'>
                                <p>Productos comprados:</p>

                                {item.items.map(prod =>
                                    <div className='flex-col' key={prod.id}>
                                        <div className='flex'>
                                            <p className='m-2'>{prod.name}</p>
                                            <p className='m-2'> cantidad: {prod.cantidad} </p>
                                            <p className='m-2'>precio: ${prod.precio}</p>
                                            <p className='m-2'> precio total: ${prod.cantidad * prod.precio}</p>

                                        </div>
                                    </div>
                                )}
                                <p className='m-2 border-t-4'>Total: ${item.total}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default MisCompras;