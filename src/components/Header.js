import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            alt="My React App Logo"
          />
          My React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" className="px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/About" className="px-3">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="px-3">Contact</Nav.Link>
            <Nav.Link as={Link} to="/e_card" className="px-3">E-Card</Nav.Link>
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
