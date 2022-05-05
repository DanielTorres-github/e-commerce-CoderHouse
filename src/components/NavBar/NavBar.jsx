import React from "react";
import "./NavBar.css";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Publicidad from "./Publicidad/Publicidad.jsx";
import NavCategorias from "./NavCategorias/NavCategorias";
import NavUser from "./NavUser/NavUser";

function NavBar() {
  return (
    <header className="flex flex-col justify-center pb-2">
      <div className="flex justify-center">
        <Logo />
        <Search />
        <Publicidad />
      </div>
      <div className="flex justify-center">
        <NavCategorias />
        <NavUser></NavUser>
      </div>
    </header>
  );
}

export default NavBar;