import React from 'react';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function MasterWrapper () {
  return (
    <div className="MasterWrapper">
         <Header />
         <MainContent />
         <Footer />
    </div>
  );
}

export default MasterWrapper;
