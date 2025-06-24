import React, { useEffect } from 'react';
import Collapse from "../../layouts/Collapse";
import "./AboutContent.scss";
import { useLocation } from 'react-router-dom';

function AboutContent({ about }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === '/about') {
      document.body.classList.add('page-about');
    } else if (
      path === '/' ||
      /^\/Housing\/[^/]+$/.test(path) || 
      path === '*'
    ) {
      document.body.classList.remove('page-about');
    }

    // Nettoyage : si le composant est démonté, je nettoie la classe
    return () => {
      document.body.classList.remove('page-about');
    };
  }, [location]);

  return (
    <section className="about-section">
      {about.map(({ id, title, content }) => (
        <div className="about-container" key={id}>
          <Collapse title={title}>
            <p className="about-p">{content}</p>
          </Collapse>
        </div>
      ))}
    </section>
  );
}

export default AboutContent;