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
            .finally(fin => console.log(fin))
    }, [])

    return (
        <>
            <div className='flex flex-col justify-center'>
                <p>Compras realizadas</p>
                {compras.map(item =>
                    <div className='border-2 m-2 flex' key={item.id}>
                        <p className='m-2 border-r-2'>{item.id}</p>
                        <div className='flex'>
                            <p className='m-2'>Productos comprados:</p>
                            {item.items.map(prod =>

                                <div className='flex-col' key={prod.id}>
                                    <div className='flex'>
                                        <p className='m-2'>{prod.name}</p>
                                        <p className='m-2'>precio: ${prod.precio}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default MisCompras;