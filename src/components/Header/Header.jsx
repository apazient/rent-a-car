import React from "react";
import NavBar from "../NavBar/NavBar";
import { FlexContainer } from "./Header.styled";

export const Header = () => {
  return (
    <FlexContainer>
      <div>Rent a car</div>
      <NavBar />
    </FlexContainer>
  );
};
