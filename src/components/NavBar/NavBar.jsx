import React from "react";
import { StyledLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <>
      <StyledLink to="/">Rent a car</StyledLink>
      <StyledLink to="catalog">Catalog</StyledLink>
      <StyledLink to="favorites">Favorites</StyledLink>
    </>
  );
};

export default NavBar;
