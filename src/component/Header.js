import React from 'react';
import CalvinLogo from './CalvinLogo'
import MainNav from './MainNav'

function Header () {
  return (
    <div className="Header">
        <div className="wrapper">

          <CalvinLogo />

          <MainNav />

        </div>
    </div>
  );
}

export default Header;
