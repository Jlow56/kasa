// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/router";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);