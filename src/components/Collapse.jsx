import React, { useState, useId } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);           // fermé par défaut
  const contentId = useId();                             // identifiant unique

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={toggle}
        aria-expanded={isOpen}                           // vrai quand ouvert
        aria-controls={contentId}                        // lie au panneau
      >
        <h2>{title}</h2>
        <span className={`collapse__icon ${isOpen ? "open" : ""}`} />
      </button>
      <div
        id={contentId}
        className={`collapse__content ${isOpen ? "open" : "closed"}`}
        role="region"                                    // région ARIA
        aria-labelledby={contentId + "-label"}          // référence si besoin
      >
        {children}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};