import "./NavUser.css"
import CartWidget from "./CartWidget/CartWidget";

function NavUser() {
    let userName = "Creá tu cuenta"
    return (
        <>
            <nav className="flex justify-center items-center">
                <ol className="flex">
                    <li className="pageLink">
                        <a href="/">{userName}</a>
                    </li>
                    <li className="pageLink">
                        <a href="/">Ingresá</a>
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