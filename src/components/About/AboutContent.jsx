import React from 'react';
import Collapse from "../../layouts/Collapse";
import "./AboutContent.scss";

function AboutContent({about}) {
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
  )
}

export default AboutContent