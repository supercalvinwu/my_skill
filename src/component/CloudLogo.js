import React from 'react';
import logo from '../resource/cloud_logo.png'

function CloudLogo () {
  return (
    <div className="CloudLogo">
        <img src={logo} alt="CloudLogo" width={80} height={80} />
        <h2>Calvin Online Resource Lending Service</h2>
    </div>
  )
};

export default CloudLogo;