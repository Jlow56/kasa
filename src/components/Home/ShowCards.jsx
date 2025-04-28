// src/components/ShowCards.jsx
import React from "react";
import PropTypes from "prop-types";
import HomeCard from "./HomeCard";
import "./ShowCards.scss";

function ShowCards({ accomodations }) {
  return (
    <section className="card-container flex">
      {accomodations.map((item) => (
        <HomeCard
          key={item.id}
          id={item.id}
          cover={item.cover}
          alt={item.title}
          title={item.title}
        />
      ))}
    </section>
  );
}

// ShowCards.propTypes = {
//   accomodations: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       cover: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ShowCards;