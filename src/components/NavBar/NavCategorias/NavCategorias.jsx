import "./NavCategorias.css"

function NavCategorias({user="", dir="Capital Federal"}) {

    // let dir = "Capital Federal"
    // let user = ""

    return (
        <>
            <nav className="nav flex justify-center">

                <div className="direccion rounded">
                    <a href="/" className="flex flex-col">
                        <span className="userNameDir">Enviar a {user}</span>
                        <span>{dir}</span>
                    </a>
                </div>

                <ol className="links">
                    <li>
                        <a href="/" className="pageLink">Categorias</a>
                    </li>
                    <li >
                        <a href="/" className="pageLink">Ofertas</a>
                    </li>
                    <li>
                        <a href="/" className="pageLink">Historial</a>
                    </li>
                    <li>
                        <a href="/" className="pageLink">Supermercado</a>
                    </li>
                    <li>
                        <a href="/" className="pageLink">Moda</a>
                    </li>
                    <li>
                        <a href="/" className="pageLink">Vender</a>
                    </li>
                    <li>
                        <a href="/" className="pageLink">Ayuda</a>
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default NavCategorias;