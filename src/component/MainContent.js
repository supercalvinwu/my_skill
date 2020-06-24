import React from 'react';
import CloudLogo from './CloudLogo'
import VMAvailable from './VMAvailable'
import CustomisedButton from './CustomisedButton'

function MainContent() {
  return (
    <div className="MainContent">
      <div className="wrapper">
        <CloudLogo />
        <VMAvailable />
        <CustomisedButton
          type={'A'}
          text={"Sign in to lend a VM"}
          handler={() => { console.log("Sign in to lend a VM is clicked") }} />
      </div>
    </div>
  );
}

export default MainContent;