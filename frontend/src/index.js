import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { SearchProducts } from "./components/pages/SearchProducts";

ReactDOM.render(
  <React.StrictMode>
    <SearchProducts />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
