import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink to="catalog">Catalog</NavLink>
      <NavLink to="favorites">Favorites</NavLink>
    </>
  );
};

export default NavBar;
