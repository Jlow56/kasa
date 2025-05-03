import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.scss";

const HomeCard = ({ id, cover, title }) => (
  <Link to={`/housing/${id}`} className="housing-card-container">
    <article className="housing-card flex">
      <img className="housing-card-img" src={cover} alt={title} />
      <figcaption className="housing-card-title">{title}</figcaption>
    </article>
  </Link>
);

export default HomeCard;