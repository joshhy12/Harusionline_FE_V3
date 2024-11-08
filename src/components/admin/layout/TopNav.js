import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt, FaBars, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import './style/TopNav.css';

const TopNav = ({ toggleSidebar }) => {
  //const adminName = "Admin Name";
  const notificationCount = 7; // You can make this dynamic based on your needs

  return (
    <nav className="top-nav">
      <div className="left-section">
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaBars />
        </button>


        <Dropdown className="mt-2 w-100">
          <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="w-100 d-flex align-items-center justify-content-center text-truncate" style={{ color: '#4a85ff', maxWidth: '200px' }}>
            <FaUserCircle className="me-2" style={{ fontSize: '20px' }} />
            <span className="text-truncate">Fortunatus & Dorah</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="w-100">
            <Dropdown.Item className="text-truncate">Fortunatus & Dorah</Dropdown.Item>
            <Dropdown.Item className="text-truncate">JoshuaLucasWedsAnnnahLucas...</Dropdown.Item>
            <Dropdown.Item className="text-truncate">Michael & Anna</Dropdown.Item>
            <Dropdown.Item className="text-truncate">Harusi ya Enock Mtonyole Weds Sarafina Chaula</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>



      </div>
      <div className="d-flex align-items-center">
      <Link to="/admin/whatsapp-card" className="text-decoration-none">
  <div className="position-relative me-3">
    <FaWhatsapp style={{ fontSize: '27px', color: '#25D366' }} />
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {notificationCount}
    </span>
  </div>
</Link>


<Dropdown align="end" className="admin-dropdown">
  <Dropdown.Toggle variant="light" id="dropdown-basic" className="admin-toggle">
    <i className="bi bi-person-circle" style={{ fontSize: '24px' }}></i>
  </Dropdown.Toggle>

  <Dropdown.Menu className="admin-menu">
    <Dropdown.Item href="#/profile">
      <FaUser className="menu-icon" /> Profile
    </Dropdown.Item>
    <Dropdown.Item href="/admin/settings">
      <FaCog className="menu-icon" /> Settings
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/logout" style={{ padding: '8px 15px', color: '#dc3545' }} className="logout-item">
      <FaSignOutAlt className="menu-icon" /> Logout
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


      </div>
    </nav>
  );
};

export default TopNav;