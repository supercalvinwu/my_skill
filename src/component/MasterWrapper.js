import React from 'react';
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'

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
