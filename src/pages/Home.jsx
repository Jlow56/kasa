import React from "react";
import "./Home.css";
import Banner from "../layout/Banner.jsx";
import Apartment from "../components/ShowCards.jsx";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Apartment/>
    </>
  );
}

export default HomePage;