import React from 'react';
import CloudLogo from '../CloudLogo'
import VMAvailable from './VMAvailable'
import MainContentBeforeLogin from './MainContentBeforeLogin'
import MainContentAfterLogin from './MainContentAfterLogin'
import MainContentAdminView from './MainContentAdminView'

function MainContent() {

  // temporary fake data
  const signedIn = false;
  const adminSignedIn = false;

  return (
    <div className="MainContent">
      <div className="wrapper">

        <CloudLogo />

        <VMAvailable />

        {/* 
          Conditional rendering
          if the singed in user is admin  => show the admin view
          else if user is signed in       => show after login view
          else                            => show before login view 
        */}

        {
          adminSignedIn
            ? <MainContentAdminView />
            : signedIn
              ? <MainContentAfterLogin />
              : <MainContentBeforeLogin />
        }


      </div>
    </div>
  );
}

export default MainContent;