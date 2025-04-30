import React, { useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
    const [isVisible, setIsVisible] = useState(false); // affichage DOM
    const [isOpen, setIsOpen] = useState(false);        // animation d'ouverture
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        if (isOpen) {
            // On commence par fermer visuellement
            setIsOpen(false);
            // Puis on retire du DOM après la transition (0.5s = 500ms)
            setTimeout(() => setIsVisible(false), 500);
        } else {
            // On affiche la div dans le DOM d’abord
            setIsVisible(true);
            // Et on l’ouvre juste après (délai pour laisser le temps au DOM d’ajouter la div)
            setTimeout(() => setIsOpen(true), 10);
        }
    };

    return (
        <>
            <div onClick={toggleCollapse} className="collapse-header">
                <h2 className="collapse-header-title">{title}</h2>
                <i className={`collapse-header-icon ${isOpen ? "rotate" : ""}`}>
  {isOpen ? (
    <FontAwesomeIcon icon={faChevronDown} />
  ) : (
    <FontAwesomeIcon icon={faChevronUp} />
  )}
</i>
            </div>

            {isVisible && (
                <div
                    ref={contentRef}
                    className={`collapse-content ${isOpen ? "open" : "closed"}`}
                >
                    <div className="about-p">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Collapse;