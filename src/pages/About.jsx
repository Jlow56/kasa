import React from "react";
import Banner from "../layouts/Banner";
import AboutContent from "../components/About/AboutContent";
import about from "../datas/housing.json"; 


const AboutPage = () => {
  return (
    <>
      <Banner />
      <AboutContent about={about}/> 
    </>
  );
};

export default AboutPage;