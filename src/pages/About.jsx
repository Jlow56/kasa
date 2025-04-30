import React from "react";
import Banner from "../layouts/Banner";
import Collapse from "../components/About/Collapse";
import about from "../datas/about.json";                        

const AboutPage = () => {
  return (
    <>
      <Banner />
      <section className="about-section">
        {about.map(({ id, title, content }) => (
          <div className="about-container" key={id}>
            <Collapse title={title}>
              <p className="about-p">{content}</p>
            </Collapse>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutPage;