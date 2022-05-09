import './Logo.css'
import logo from "./logo.png"
function Logo() {
    return (
        <>
            <a href="/">
                <img src={logo} alt="" className="logo" />
            </a>
        </>
    );
}

export default Logo;