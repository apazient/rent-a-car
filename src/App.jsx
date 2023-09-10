import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import HomePage from "./pages/HomePage/HomePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
