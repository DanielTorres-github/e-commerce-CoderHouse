import {Link} from "react-router-dom";
import "./NavCategorias.css"

function NavCategorias() {
    return (
        <>
            <nav className="nav flex justify-center">

                <ol className="links">
                    <li>
                        <Link to="/">
                            <span href="/" className="pageLink">Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cat/gorras">
                            <span href="/" className="pageLink">Gorras</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cat/remeras">
                            <span href="/" className="pageLink">Remeras</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cat/celulares">
                            <span href="/" className="pageLink">Celulares</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cat/lavarropas">
                            <span href="/" className="pageLink">Lavarropas</span>
                        </Link>
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default NavCategorias;
