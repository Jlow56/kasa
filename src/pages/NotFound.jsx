import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";
import " ./notFound.css";
export function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="not-found-container flex">
          <h2 className="not-found-h2">404</h2>
          <h3 className="not-found-h3">Oops! La page que vous demandez n'existe pas</h3>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
    </>
  );
}