import React from 'react';
import "./HousingHost.scss";

function HousingHost({ host }) {
  return (
    <div className="housing-host">
      <h4 className="housing-host-name">{host.name}</h4>
      <img className="housing-host-picture" src={host.picture} alt={host.name} />
    </div>
  );
}

export default HousingHost;