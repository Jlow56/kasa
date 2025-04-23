import React from 'react';
import Collapse from "../About/Collapse";
import "./HousingDescription.scss";

function HousingDescription({ description, equipments }) {
  return (
    <div className="housing-collapse-container">
        <>
            <Collapse
                title='Description'
                content={description}
            />
        </>
        <>
            <Collapse
                title='Équipements'
                content={equipments}
            />
        </>
    </div>
      
    );     
}

export default HousingDescription;