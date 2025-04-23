import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./HousingRating.scss";

function HousingRating({ rating }) {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="housing-rating">
      {range.map((value) =>
        rating >= value ? (
          <span key={value} className="housing-rating-star">
            <FontAwesomeIcon icon={faStar} style={{color: "#ff6060",}} />
          </span>
        ) : (
          <span key={value} className="housing-rating-star-grey">
            <FontAwesomeIcon icon={faStar} style={{color: "#e3e3e3",}} />
          </span>
        )
      )}
    </div>
  );
}

export default HousingRating;