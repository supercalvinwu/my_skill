import React from 'react';
import CalvinLogo from './CalvinLogo'

function Header () {
  return (
    <div className="Header">
        <div className="wrapper">

          <CalvinLogo />

          <div>
            <h2>
              menu bar 
            </h2>
          </div>


        </div>
    </div>
  );
}

export default Header;
