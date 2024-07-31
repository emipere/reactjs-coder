import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // para los archivos se usa camelCase comenzando en mayuscula
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
