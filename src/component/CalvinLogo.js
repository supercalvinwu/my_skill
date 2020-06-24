import React from 'react';
import logo from '../resource/calvin_logo.png'
import {
  Link
} from "react-router-dom";

function CalvinLogo() {
  return (
    <div className="CalvinLogo">
      <Link to="/">
        <img src={logo} alt="CalvinLogo" width={50} height={50} />
      </Link>
    </div>
  )
};

export default CalvinLogo;
