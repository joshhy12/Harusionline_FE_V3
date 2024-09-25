import React from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#home" className="px-3">Home</Nav.Link>
            <Nav.Link href="#about" className="px-3">About</Nav.Link>
            <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="outline-light" className="me-2">Login</Button>
            <Button variant="light">Sign Up</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
