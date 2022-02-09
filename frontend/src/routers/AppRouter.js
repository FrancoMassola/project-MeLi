import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProductDetails } from "../components/pages/ProductDetails";
import { Results } from "../components/pages/Results";
import { SearchProducts } from "../components/pages/SearchProducts";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/items/:id" exact element={<ProductDetails />} />
        <Route path="/items" exact element={<Results />} />
        <Route path="/" element={<SearchProducts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
