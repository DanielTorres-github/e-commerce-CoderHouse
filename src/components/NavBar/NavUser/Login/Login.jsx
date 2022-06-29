import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../../context/cartContext";

function Login() {
    const { cartList, chequearUser, user } = useContext(cartContext);

    const [dataForm, setDataForm] = useState({ name: "", email: "", tel: "", status: false });

    function guardarDatos(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    }
    function camposCompletos() {
        if (dataForm.name !== "" && dataForm.email !== "" && dataForm.tel !== "")
            chequearUser({ ...dataForm, status: true })
        else
            alert("completar campos")
    }

    function Haylogueo() {

        return (
            <>
                <div className="flex flex-col h-full justify-center">
                    <p> nombre: {user.name}</p>
                    <p> email: {user.email}</p>
                    <p> tel: {user.tel}</p>
                </div>
            </>
        )

    }


    return (
        <div className="flex flex-col h-full justify-center">
            <div className="border-2 border-gray-200 shadow-md rounded-lg p-20 m-20 ">
                {user.status === true ?
                    <Haylogueo></Haylogueo>
                    :
                    <>
                        <h2 className="text-center">Ingresar</h2>
                        <div className="flex flex-col">
                            <input type="text" name="name" onChange={(e) => guardarDatos(e)} className="border-2 border-gray-400 m-2 rounded-lg shadow-sm pl-2" placeholder="Nombre" required />
                            <input type="email" name="email" onChange={(e) => guardarDatos(e)} className="border-2 border-gray-400 m-2 rounded-lg shadow-sm pl-2" placeholder="Email" required />
                            <input type="number" name="tel" onChange={(e) => guardarDatos(e)} className="border-2 border-gray-400 m-2 rounded-lg shadow-sm pl-2" placeholder="Telefono" required />

                            <Link to={cartList.length === 0 ? "/" : "/carrito"}>
                                <button className="text-white bg-sky-700 rounded-lg p-2" onClick={camposCompletos} >
                                    logear
                                </button>
                            </Link>

                        </div>
                    </>

                }
            </div>

        </div>
    );
}

export default Login;
