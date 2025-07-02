import React from 'react';
import Collapse from "../../layouts/Collapse";
import "./HousingDescription.scss";

function HousingDescription({ description, equipments }) {
    return (
        <>
            <div className="housing-description-container">
                <Collapse title='Description'content={description}>   
                    <p  className="housing-description-p">{description}</p>
                </Collapse> 
            </div>
            <div className="housing-equipments-container">
                <Collapse title='Équipements'content={equipments}>
                    <ul className="housing-equipments-list">
                        {equipments.map((equipment, index) => (
                            <li key={index} className="housing-equipments-item">{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </>
    );     
}

export default HousingDescription;