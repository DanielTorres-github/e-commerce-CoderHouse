import imgPublicidad from "./publicidad.webp"
import "./Publicidad.css"

function Publicidad() {
    return (
        <>
            <a href="/">
                <img src={imgPublicidad} alt="" className="publicidad" />
            </a>
        </>
    );
}

export default Publicidad;