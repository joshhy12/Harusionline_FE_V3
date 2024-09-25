import React from 'react';
import logo from './images/logo.png';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaAndroid } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="mb-3">
          
          <Col md={3}>
            <img src={logo} alt="Company Logo" className="img-fluid mb-3" style={{maxWidth: '150px'}} />
            <p>© 2024 Your Company Name. All rights reserved.</p>
          </Col>

          <Col md={3}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Item><Nav.Link href="/" className="text-light">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/about" className="text-light">About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/services" className="text-light">Services</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/contact" className="text-light">Contact</Nav.Link></Nav.Item>
            </Nav>
          </Col>

          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://www.facebook.com" className="text-light me-3"><FaFacebook size={24} /></a>
              <a href="https://www.twitter.com" className="text-light me-3"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com" className="text-light me-3"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com" className="text-light"><FaLinkedin size={24} /></a>
            </div>
          </Col>

          <Col md={3}>
            <h5>Download Our App</h5>
            <div className="d-flex">
              <a href="#" className="text-light me-3"><FaApple size={24} /></a>
              <a href="#" className="text-light"><FaAndroid size={24} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;