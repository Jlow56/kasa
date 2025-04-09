import React from 'react';
import "./Banner.css"

function Banner() {
  return (
    <div className='banner-container'>
      <img className='banner-img' src="banner.png" alt="paysage de montagne" />
      <div className='banner-text'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner