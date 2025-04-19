import React from 'react';
import Banner from '../layouts/Banner';
import Collapse from '../components/Collapse';
import "./About.css";

const AboutPage = () => {
  return (
    <>
      <Banner />
      <section className="about-section">
        <div className="about-container">
          <Collapse title='Fiabilité'content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'/>
        </div>
        
        <div className="about-container">
          <Collapse title='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme.'/>  
        </div>
       
        <div className="about-container">
          <Collapse title='Service' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        </div>
        
        <div className="about-container">
          <Collapse title='Sécurité'content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécuritéétablis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
      </section>
    </>
  )
}

export default AboutPage