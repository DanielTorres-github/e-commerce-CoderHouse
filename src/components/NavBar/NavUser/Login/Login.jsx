import React, { useContext, useState } from 'react';
import { cartContext } from '../../../../context/cartContext';

function Login({ userName }) {

    const { chequearUser } = useContext(cartContext)

    // const [passType, setPassType] = useState(true)
    // const [pass, setPass] = useState("password")
    // 
    // function cambiarPassType() {
    //     if (passType) {
    //         setPass("text")
    //         setPassType(false)
    //     } else {
    //         setPass("password")
    //         setPassType(true)
    //     }
    // }

    const [dataForm, setDataForm] = useState({ name: "", email: "", tel: "" })

    function guardarDatos(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)

    return (
        <div className='flex flex-col h-full justify-center'>
            <div className='border-2 border-gray-200 shadow-md rounded-lg p-20 m-20 '>
                <h2 className='text-center'>Ingresar</h2>
                <div className='flex flex-col'>
                    <input type="text" name='name' onChange={(e) => guardarDatos(e)} className='border-2 border-gray-400 m-2 rounded-lg shadow-sm pl-2' placeholder='Nombre' required />
                    <input type="email" name='email' onChange={(e) => guardarDatos(e)} className='border-2 border-gray-400 m-2 rounded-lg shadow-sm pl-2' placeholder='Email' required />
                    <input type="number" name='tel' onChange={(e) => guardarDatos(e)} className='border-2 border-gray-400 m-2 rounded-lg shadow-sm pl-2' placeholder='Telefono' required />
                    {/* <input type={pass} name='pass' onChange={(e) => guardarDatos(e)} className='border-2 border-gray-400 m-2 rounded-lg shadow-sm pl-2' placeholder='Contraseña' /> */}
                    {/* <label><input type="checkbox" id='pass' onChange={cambiarPassType} /> Mostrar pass</label><br /> */}
                    <button className='text-white bg-sky-700 rounded-lg p-2' onClick={() => chequearUser(dataForm)}>logear</button>
                </div>
            </div>
        </div>
    );
}

export default Login;