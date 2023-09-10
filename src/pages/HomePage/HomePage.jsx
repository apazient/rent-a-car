import React from "react";
import { StyledLink, WrapperHome, WrapperI } from "./HomePage.styled";

const HomePage = () => {
  return (
    <WrapperHome>
      <h1>Find your favorite car</h1>
      <WrapperI>
        <img
          src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg"
          alt="rental car"
        ></img>
      </WrapperI>

      <StyledLink to="catalog">Find car</StyledLink>
    </WrapperHome>
  );
};

export default HomePage;
