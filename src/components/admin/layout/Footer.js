import React from 'react';
import './style/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-admin">
      <div className="container text-center">
        <span className="copyright-text">© {currentYear} harusionline </span>
      </div>
    </footer>
  );
};

export default Footer;
