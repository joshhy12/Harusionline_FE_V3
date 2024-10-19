
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContent from '../../components/MainContent';

const DefaultTemplate = ({ children }) => {
  return (
    <div className="default-template">
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
