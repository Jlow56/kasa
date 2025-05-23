import React from 'react';
import SlideShow from "../components/Housing/SlideShow.jsx";
import HousingDetails from "../components/Housing/HousingDetails"; 
import ErrorPage from "./Error";
import { useParams } from 'react-router-dom';
import data from "../datas/data.json";
import "./Housing.scss";

const Housing = () => {
  const { id } = useParams();
  const housingData = data.find(housingData => housingData.id === id);

  if (!housingData) {
    return <ErrorPage />;
  }

  return (
    <section key={housingData.id} className="housing-container">
      <SlideShow img={housingData.pictures} />
      <HousingDetails housingData={housingData} /> 
    </section>
  );
};

export default Housing;