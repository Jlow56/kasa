import React from 'react';
import "./HousingHeader.scss";

function HousingHeader({ title, location, tags }) {
  return (
    <div className="housing-header">
      <h2 className="housing-title">{title}</h2>
      <h3 className="housing-location">{location}</h3>
      <div className="housing-tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="housing-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default HousingHeader;