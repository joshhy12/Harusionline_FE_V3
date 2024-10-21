import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaCog, FaWrench, FaFolder, FaChartArea, FaTable } from 'react-icons/fa'

function Sidebar() {
  return (
    <Nav className="flex-column sidebar-nav">
      <div className="sidebar-brand">
        <h2>AdminPanel<sup>....</sup></h2>
      </div>
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          <FaTachometerAlt /> Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/components">
          <FaCog /> Components
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/utilities">
          <FaWrench /> Utilities
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/pages">
          <FaFolder /> Pages
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/charts">
          <FaChartArea /> Charts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/tables">
          <FaTable /> Tables
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Sidebar