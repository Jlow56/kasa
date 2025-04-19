import React from "react";
import Banner from "../layouts/Banner.jsx";
import ShowCards from "../components/ShowCards.jsx";
import accomodations from "../datas/data.json";
import "./Home.css";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ShowCards accomodations={accomodations}/>
    </>
  );
}

export default HomePage;