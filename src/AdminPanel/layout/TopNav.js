import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaUser, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './style/TopNav.css';

const TopNav = ({ toggleSidebar }) => {
  const adminName = "Admin Name";

  return (
    <nav className="top-nav">
      <div className="left-section">
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaBars />
        </button>
        <h1 className="dashboard-title">Harusi Online</h1>
      </div>

      <Dropdown align="end" className="admin-dropdown">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="admin-toggle">
          {adminName}
        </Dropdown.Toggle>

        <Dropdown.Menu className="admin-menu">
          <Dropdown.Item href="#/profile">
            <FaUser className="menu-icon" /> Profile
          </Dropdown.Item>
          <Dropdown.Item href="/admin/settings">
            <FaCog className="menu-icon" /> Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/logout"  style={{ padding: '8px 15px', color: '#dc3545' }} className="logout-item">
            <FaSignOutAlt className="menu-icon" /> Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default TopNav;