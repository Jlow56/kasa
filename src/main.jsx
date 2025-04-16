// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/router";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);