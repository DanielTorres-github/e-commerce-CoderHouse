import "./NavUser.css"
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../context/cartContext";

function NavUser() {
    const { user } = useContext(cartContext)
    return (
        <>
            <nav className="flex justify-center ml-20 items-center">
                <ol className="flex">
                    <li className="pageLink">
                        <Link to="/login"><span>{user.name === "" ? "Ingresar" : user.name}</span></Link>
                    </li>
                    <li className="pageLink">
                        <Link to="/miscompras">
                            <span>Mis Compras</span>
                        </Link>
                    </li>
                    <li className="pageLink">
                        <CartWidget></CartWidget>
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default NavUser;