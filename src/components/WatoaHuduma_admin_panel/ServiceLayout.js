import React from 'react';
import { Outlet } from 'react-router-dom';
import ServiceNavbar from './ServiceNavbar';

const ServiceLayout = () => {
  return (
    <div>
      <ServiceNavbar />
      <div className="service-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ServiceLayout;
