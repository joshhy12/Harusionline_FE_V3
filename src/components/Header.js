import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar bg="white" variant="light" expand="lg" sticky="top" className="py-3 custom-shadow">
      <Container>
        <Navbar.Brand as={Link} to="/Home">
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
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Home" className="px-3" activeClassName="active-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/About" className="px-3" activeClassName="active-link">About</Nav.Link>
            <Nav.Link as={NavLink} to="/Contact" className="px-3" activeClassName="active-link">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/e_card" className="px-3" activeClassName="active-link">E-Card</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="px-3" activeClassName="active-link">Portfolio</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="outline-primary" className="me-2">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
