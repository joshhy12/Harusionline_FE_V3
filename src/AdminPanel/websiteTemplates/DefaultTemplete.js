import React from 'react';

const Header = () => (
  <header className="site-header">
    <nav className="main-nav">
      <div className="nav-brand">Harusi Online</div>
    </nav>
  </header>
);

const MainContent = ({ children }) => (
  <main className="main-content">
    {children}
  </main>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <p>© {new Date().getFullYear()} Harusi Online. All rights reserved.</p>
    </div>
  </footer>
);

const DefaultTemplate = ({ children }) => {
  return (
    <div className="default-template">
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
