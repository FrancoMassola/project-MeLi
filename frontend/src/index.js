import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MainApp } from "./components/MainApp";

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
