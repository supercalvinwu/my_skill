import React from 'react';
import MainContentDemo from './MainContentDemo'
import MainContentSignIn from './MainContentSignIn'
import MainContentProject from './MainContentProject'

import {
  Switch,
  Route
} from "react-router-dom";

function MainContent() {

  // temporary fake data
  const signedIn = false;
  const adminSignedIn = false;

  return (
    <div className="MainContent">
      <div className="wrapper">

        <Switch>

          <Route path="/signin">
            <MainContentSignIn />
          </Route>

          <Route path="/project">
            <MainContentProject />
          </Route>

          <Route path="/">
            <MainContentDemo />
          </Route>

        </Switch>



      </div>
    </div>
  );
}

export default MainContent;