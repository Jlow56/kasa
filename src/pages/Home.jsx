import React from "react";
import Banner from "../layouts/Banner.jsx";
import ShowCards from "../components/Home/ShowCards.jsx";
import accomodations from "../datas/data.json";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ShowCards accomodations={accomodations}/>
    </>
  );
}

export default HomePage;