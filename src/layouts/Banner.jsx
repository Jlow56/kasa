import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Banner.scss";

function Banner() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <figure className='banner-home-container'>
        <img className='banner-home-img' src="home-banner.png" alt="paysage de rivage avec la montagne" />
        <div className='banner-home-text'>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </figure>
    );
  }
  if (location.pathname === "/about") {
    return (
      <div className='banner-about-container'>
        <img className='banner-about-img' src="about-banner.png" alt="paysage de montagne" />
      </div>
    );
  }

  return null;
}

export default Banner;