import React from "react";
import Banner from "../layouts/Banner";
import Collapse from "../components/Collapse";
import about from "../datas/about.json";    
import "./About.css";                     

const AboutPage = () => {
  return (
    <>
      <Banner />
      <section className="about-section">
        {about.map(({ id, title, content }) => (
          <div className="about-container" key={id}>
            <Collapse title={title}>
              <p>{content}</p>
              consoloe.log(content);
            </Collapse>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutPage;