import React from 'react';
import Appartement from './Appartement';
import "./Card.css"

function Card() {
  return (
    <div className='card-container flex'>
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
        <Appartement/>
    </div>
  )
}

export default Card    