import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      variant="light"
      expand="lg"
      className={`py-3 ${styles.customShadow} ${styles.fixedNav}`} // Ensures fixed nav
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/Home" onClick={closeNavbar}>
          <img
            src="/logo1.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Harusi Online"
          />
          Harusi Online
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/Home"
              className={`px-3 ${styles.navLink}`}
              onClick={closeNavbar}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/e_card"
              className={`px-3 ${styles.navLink}`}
              onClick={closeNavbar}
            >
              E-Card
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/WatoaHuduma"
              className={`px-3 ${styles.navLink}`}
              onClick={closeNavbar}
            >
              Watoa Huduma
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              className={`px-3 ${styles.navLink}`}
              onClick={closeNavbar}
            >
              Jisajili / Ingia
            </Nav.Link>

            <NavDropdown
              title="More Options"
              id="basic-nav-dropdown"
              className={`px-3 ${styles.dropdownToggle}`}
            >
              <NavDropdown.Item
                as={NavLink}
                to="/About"
                onClick={closeNavbar}
                className={styles.dropdownItem}
              >
                About
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Contact"
                onClick={closeNavbar}
                className={styles.dropdownItem}
              >
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Gharama"
                onClick={closeNavbar}
                className={styles.dropdownItem}
              >
                Gharama
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/TermsAndConditions"
                onClick={closeNavbar}
                className={styles.dropdownItem}
              >
                Terms and Conditions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={NavLink}
                to="/settings"
                onClick={closeNavbar}
                className={styles.dropdownItem}
              >
                Settings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
