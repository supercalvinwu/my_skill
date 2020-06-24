import React from 'react';
import MainContentDemo from './MainContentDemo'

function MainContent() {

  // temporary fake data
  const signedIn = false;
  const adminSignedIn = false;

  return (
    <div className="MainContent">
      <div className="wrapper">

        <MainContentDemo />

      </div>
    </div>
  );
}

export default MainContent;