import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Main></Main>
      <Outlet />
    </div>
  );
};
