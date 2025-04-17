import React from "react";
import "./Home.css";
import Banner from "../layouts/Banner.jsx";
import ShowCards from "../components/ShowCards.jsx";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ShowCards/>
    </>
  );
}

export default HomePage;