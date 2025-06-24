import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Layout.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar on route change in mobile view
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  }, [location]);

  // Close sidebar on window resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768)  {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`admin-layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        <TopNav toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />


        <main className="main-content">
          <Outlet />
        </main>
        <Footer />

      </div>
      {sidebarOpen && (
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} 
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Layout;