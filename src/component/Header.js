import React from 'react';
import Logo from './Logo'

function Header () {
  return (
    <div className="Header">
        <div className="wrapper">

          <Logo />

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
