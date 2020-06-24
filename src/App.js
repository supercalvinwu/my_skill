import React from 'react';
import './App.css';
import MasterWrapper from './component/MasterWrapper'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MasterWrapper />
      </Router>
    </div>
  );
}

export default App;




