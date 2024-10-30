import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelopeOpenText,FaHome, FaUsers, FaUsersCog  , FaMoneyBillWave ,FaMoneyBill, FaDonate, FaImages, FaChartBar,  FaGlobe, FaSms, FaCog, FaUserCircle } from 'react-icons/fa';
import './style/Sidebar.css';
import logo from './assets/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    toggleSidebar();  // Close sidebar after navigation
  };

  return (
    <>      
      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="sidebar-logo" />
            <Dropdown className="mt-2 w-100">
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="w-100 d-flex align-items-center justify-content-center text-truncate" style={{ color: 'rgb(243 243 243)' }}>
                <FaUserCircle className="me-2" style={{ fontSize: '20px' }}/>
                Fortunatus&Dorah
              </Dropdown.Toggle>
            </Dropdown>        
          </div>
          
          <Nav className="flex-column">
            <NavItem to="/admin/dashboard" icon={FaHome} label="Dashboard" active={location.pathname === '/admin/dashboard'} onClick={handleLinkClick} />
            <NavItem to="/admin/wageni" icon={FaUsers} label="Wageni" active={location.pathname === '/admin/wageni'} onClick={handleLinkClick} />
            <NavItem to="/admin/kamati" icon={FaUsersCog} label="Kamati" active={location.pathname === '/admin/kamati'} onClick={handleLinkClick} />
            <NavItem to="/admin/waalikwa" icon={FaEnvelopeOpenText} label="Waalikwa" active={location.pathname === '/admin/waalikwa'} onClick={handleLinkClick} />
            {/*  <NavItem to="/admin/groups" icon={FaUserFriends} label="Vikundi" active={location.pathname === '/admin/groups'} onClick={handleLinkClick} />     */}      
            <NavItem to="/admin/bajeti" icon={FaMoneyBill} label="Bajeti" active={location.pathname === '/admin/bajeti'} onClick={handleLinkClick} />
            <NavItem to="/admin/payments" icon={FaMoneyBillWave} label="Payments" active={location.pathname === '/admin/payments'} onClick={handleLinkClick} />
            <NavItem to="/admin/michango" icon={FaDonate} label="Michango" active={location.pathname === '/admin/michango'} onClick={handleLinkClick} />
            <NavItem to="/admin/picha" icon={FaImages} label="Picha" active={location.pathname === '/admin/picha'} onClick={handleLinkClick} />
            <NavItem to="/admin/takwimu" icon={FaChartBar} label="Takwimu" active={location.pathname === '/admin/takwimu'} onClick={handleLinkClick} />
            <NavItem to="/admin/ecards" icon={FaEnvelopeOpenText} label="Ecards" active={location.pathname === '/admin/ecards'} onClick={handleLinkClick} />
            {/* <NavItem to="/admin/whatsapp-card" icon={FaWhatsapp} label="WhatsApp Card" active={location.pathname === '/admin/whatsapp-card'} onClick={handleLinkClick} /> 
            <NavItem to="/admin/payment-history" icon={FaHistory} label="Historia ya Malipo" active={location.pathname === '/admin/payment-history'} onClick={handleLinkClick} />*/}
            <NavItem to="/admin/sms-history" icon={FaSms} label="Historia Ya SMS" active={location.pathname === '/admin/sms-history'} onClick={handleLinkClick} />
            <NavItem to="/admin/WebsiteTemplates"icon={FaGlobe}label="Website" active={location.pathname === '/admin/WebsiteTemplates'}onClick={handleLinkClick} />
            <NavItem to="/admin/settings" icon={FaCog} label="Mipangilio" active={location.pathname === '/admin/settings'} onClick={handleLinkClick} />
          </Nav>
        </div>
        {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
      </div>
    </>
  );
};

const NavItem = ({ to, icon: Icon, label, active, onClick }) => (
  <Nav.Link
    as={Link}
    to={to}
    className={`nav-link-custom ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    <Icon className="d-block mx-auto mb-1" size={20} />
    {label}
  </Nav.Link>
);

export default Sidebar;