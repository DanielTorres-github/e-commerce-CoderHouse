import "./NavUser.css"
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavUser() {
    let userName = "Creá tu cuenta"
    return (
        <>
            <nav className="flex justify-center items-center">
                <ol className="flex">
                    <li className="pageLink">
                        <Link to="/crearuser"><span>{userName}</span></Link>
                    </li>
                    <li className="pageLink">
                        <Link to="/login"><span>Ingresá</span></Link>
                    </li>
                    <li className="pageLink">
                        <a href="/">Mis Compras</a>
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