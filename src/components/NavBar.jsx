import React from "react";
import "./styles/NavBar.css";
// import "./img/logo.png";

function NavBar() {
  const img = "./img/logo.png"
  return (
    <header>
      <img src={img} alt="logo" className="logo"/>
      <nav className="nav">
        <ol className="links">
          <li>
            <a href="/" className="pageLink">Inicio</a>
          </li>
          <li>
            <a href="/" className="pageLink">Link 1</a>
          </li>
          <li>
            <a href="/" className="pageLink">Link 2</a>
          </li>
          <li>
            <a href="/" className="pageLink">Link 3</a>
          </li>
          <li>
            <a href="/" className="pageLink">Link 4</a>
          </li>
        </ol>
      </nav>
      <input type="text" className="buscador" placeholder="Buscar producto, marcas y más..."/>
    </header>
  );
}

export default NavBar;