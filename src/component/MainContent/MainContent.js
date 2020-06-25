import React from 'react';
import MainContentDemo from './MainContentDemo'
import MainContentSignIn from './MainContentSignIn'
import MainContentProject from './MainContentProject'
import FirebaseTesting from '../FirebaseTesting'

import {
  Switch,
  Route
} from "react-router-dom";

function MainContent() {

  const firebaseDebug = false;

  if (firebaseDebug) {
    return <FirebaseTesting />
  }

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