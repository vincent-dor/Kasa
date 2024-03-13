import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__home">
        ACCUEIL
      </NavLink>
      <NavLink to="/about" className="nav__about">
        A PROPOS
      </NavLink>
    </nav>
  );
};

export default Nav;
