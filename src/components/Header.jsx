import React from "react";
import logo from "media/logoGrande.jpg";

const Header = () => {
  return (
    <header>
      <ul className="navbar">
        <li>
          <img src={logo} alt="logo" className="logo" />
        </li>
        <li>
          <button className="button mainButton">Nuevo Post</button>
        </li>
        <li>
          <div className="buscar">
            <input placeholder="Buscar una raza" type="text" />
            <i className="fa-solid fa-magnifying-glass button iconoBusqueda"></i>{" "}
            {/* insertar ícono de lupa de fontawesome */}
          </div>
        </li>
        <li>
          <button className="button secondaryButton">Login</button>
        </li>
        <li>
          <button className="button mainButton">Registro</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
