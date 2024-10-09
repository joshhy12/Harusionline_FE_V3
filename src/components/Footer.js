import React from 'react';
import logo from '../images/logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6} className="footer-info">


          <div style={{ textAlign: 'center' }}>
  <h3 style={{ marginBottom: '15px', color: 'black' }}>Harusi online Tanzania</h3>
  <img src={logo} alt="Company Logo" className="img-fluid mb-3" style={{ maxWidth: '150px' }} />
  <p style={{ color: 'black' }}>
    A108 Adam Street <br />
    NY 535022, USA<br />
    <strong>Phone:</strong> +1 5589 55488 55<br />
    <strong>Email:</strong> info@example.com<br />
  </p>
</div>


              <div className="social-links mt-3">
                <a href="#" className="btn btn-outline-primary me-2"><FaTwitter /></a>
                <a href="#" className="btn btn-outline-primary me-2"><FaFacebook /></a>
                <a href="#" className="btn btn-outline-primary me-2"><FaInstagram /></a>
                <a href="#" className="btn btn-outline-primary me-2"><FaWhatsapp /></a>
                <a href="#" className="btn btn-outline-primary me-2"><FaLinkedin /></a>
              </div>
            </Col>
            <Col lg={2} md={6} className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </Col>
            <Col lg={4} md={6} className="footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>

              <h5 className="mt-4">Download Our App</h5>
              <div className="d-flex">
                <a href="https://www.apple.com" className="me-3" target="_blank" rel="noopener noreferrer">
                  <img src={require('../images/apple.png')} alt="Apple App Store" style={{ width: '124px', height: '39px' }} />
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                  <img src={require('../images/android.png')} alt="Google Play Store" style={{ width: '124px', height: '39px' }} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="copyright">
          <p>&copy; {currentYear} Harusi online Tanzania. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;