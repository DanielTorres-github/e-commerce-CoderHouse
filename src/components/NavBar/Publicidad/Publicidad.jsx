import imgPublicidad from "./publicidad.webp"
import "./Publicidad.css"
import { Link } from "react-router-dom";

function Publicidad() {
    return (
        <>
            <Link to="/">
                <img src={imgPublicidad} alt="" className="publicidad" />
            </Link>
        </>
    );
}

export default Publicidad;