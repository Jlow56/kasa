import React from 'react';
import HousingCard from './HousingCard';
import "./ShowCards.css"

function ShowCards() {
  return (
    <div className='card-container flex'>
        <HousingCard/>
        <HousingCard/>
        <HousingCard/>
        <HousingCard/>
        <HousingCard/>
        <HousingCard/>
    </div>
  )
}

export default ShowCards  