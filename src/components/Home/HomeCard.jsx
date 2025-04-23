import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./HomeCard.scss";

const HomeCard = ({ id, cover, title }) => (
  <Link to={`/housing/${id}`} className="housing-card-container">
    <img className="housing-card-img" src={cover} alt={title} />
    <figcaption className="housing-card-title">{title}</figcaption>
  </Link>
);

// HousingCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   cover: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default HomeCard;