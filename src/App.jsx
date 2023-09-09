import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};
