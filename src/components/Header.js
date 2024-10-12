import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import '../images/logo1.png';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar bg="white" variant="light" expand="lg" sticky="top" className="py-3 custom-shadow" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand as={Link} to="/Home" onClick={closeNavbar}>
          <img
            src="/logo1.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Harusi Online"
          /> Harusi Online
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/Home" className="px-3 nav-link" onClick={closeNavbar}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/e_card" className="px-3 nav-link" onClick={closeNavbar}>E-Card</Nav.Link>
            <Nav.Link as={NavLink} to="/WatoaHuduma" className="px-3 nav-link" onClick={closeNavbar}>Watoa Huduma</Nav.Link>

            <Nav.Link as={NavLink} to="/login" className="px-3 nav-link" onClick={closeNavbar}>Jisajili / Ingia</Nav.Link>

            <NavDropdown title="More Options" id="basic-nav-dropdown" className="px-3">
              <NavDropdown.Item as={NavLink} to="/About" onClick={closeNavbar}>About</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Contact" onClick={closeNavbar}>Contact</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Gharama" onClick={closeNavbar}>Gharama</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/TermsAndConditions" onClick={closeNavbar}>Terms and Condtions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/settings" onClick={closeNavbar}>Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;