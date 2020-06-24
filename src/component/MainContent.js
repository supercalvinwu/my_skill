import React from 'react';
import CloudLogo from './CloudLogo'
import VMAvailable from './VMAvailable'
import MainContentBeforeLogin from './MainContentBeforeLogin'
import MainContentAfterLogin from './MainContentAfterLogin'

function MainContent() {
  const signedIn = true;

  return (
    <div className="MainContent">
      <div className="wrapper">

        <CloudLogo />

        <VMAvailable />

        {
          signedIn
            ? <MainContentAfterLogin />
            : <MainContentBeforeLogin />
        }


      </div>
    </div>
  );
}

export default MainContent;