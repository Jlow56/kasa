import React from 'react';
import HousingHeader from './HousingHeader';
import HousingDescription from './HousingDescription';
import HousingHost from './HousingHost';
import HousingRating from './HousingRating';
import "./HousingDetails.scss";

function HousingDetails({ housingData }) {
  return (
    <article className="housing-details">
      <section className='top-container'>
        <HousingHeader
          title={housingData.title}
          location={housingData.location}
          tags={housingData.tags}
        />
        <div className='host-content'>
          <HousingHost host={housingData.host} />
          <HousingRating rating={housingData.rating} />
        </div>
      </section> 
      <section className='housing-collapse-container'>
        <HousingDescription
          description={housingData.description}
          equipments={housingData.equipments}
        />
      </section>
    </article>
  );
}

export default HousingDetails;