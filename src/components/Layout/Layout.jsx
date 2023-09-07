import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { FlexContainer } from "./Layout.styled";

export const Layout = () => {
  return (
    <FlexContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </FlexContainer>
  );
};
