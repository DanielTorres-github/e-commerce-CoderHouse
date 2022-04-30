import React from "react";
import "./styles/Header.css";
import "./img/logo.png";

function Header() {
  return (
    <header>
      <img src="./img/logo.png" alt="" className="logo"/>
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

export default Header;