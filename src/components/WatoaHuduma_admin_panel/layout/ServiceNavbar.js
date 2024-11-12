import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/service-provider">Service Provider Panel</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/service-provider/services/manage">Services</Nav.Link>
            <Nav.Link as={Link} to="/service-provider/bookings">Bookings</Nav.Link>
            <Nav.Link as={Link} to="/service-provider/analytics">Analytics</Nav.Link>
            <Nav.Link as={Link} to="/service-provider/settings">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ServiceNavbar;
