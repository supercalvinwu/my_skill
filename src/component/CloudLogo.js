import React from 'react';
import logo from '../resource/cloud_logo.png'

function CloudLogo () {
  return (
    <div className="CloudLogo">
        <img style={{marginLeft:0}} src={logo} alt="CloudLogo" width={80} height={80} />
        <h2>Calvin Online Resourcing</h2>
    </div>
  )
};

export default CloudLogo;