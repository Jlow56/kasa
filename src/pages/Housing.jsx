import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SlideShow from "../components/Housing/SlideShow.jsx";
import HousingDetails from "../components/Housing/HousingDetails"; 
import ErrorPage from "./Error";
import data from "../datas/data.json";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();
  const location = useLocation();

  const housingData = data.find(housing => housing.id === id);

  useEffect(() => {
    const path = location.pathname;

    if (/^\/Housing\/[^/]+$/.test(path)) {
      document.body.classList.add('page-housing');
    }

    return () => {
      document.body.classList.remove('page-housing');
    };
  }, [location]);

  if (!housingData) {
    return <ErrorPage />;
  }

  return (
    <section key={housingData.id} className="housing-container">
      <SlideShow img={housingData.pictures} />
      <HousingDetails housingData={housingData} /> 
    </section>
  );
}

export default Housing;