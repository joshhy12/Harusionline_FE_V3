import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById('newsletterForm');
    const email = form.email.value;
    
    // Here you can add your newsletter signup logic
    console.log('Subscribed email:', email);
    
    // Clear the form
    form.reset();
    
    // Optional: Show success message
    alert('Thanks for subscribing!');
  }

  return (
    <footer id="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6} className="footer-info">
              <h3>Harusi Online..</h3>

              <p style={{ color: 'black' }}>
                New Safari Hotel Business Center  <br />
                Arusha, Tanzania<br />
                <strong>Phone:</strong> <a href="tel:+255747636516">+255 747 636 516</a><br />
                <strong>Email:</strong> <a href="mailto:info@harusionline.com">info@harusionline.com</a><br />
              </p>


              <div className="social-links mt-3">
                <Link to="#" className="btn btn-outline-primary me-2"><i className="bi bi-twitter"></i></Link>
                <Link to="https://www.facebook.com/harusionlinetz/" className="btn btn-outline-primary me-2" target="_blank" ><i className="bi bi-facebook"></i></Link>
                <Link to="https://www.instagram.com/harusionline/" className="btn btn-outline-primary me-2" target="_blank"  ><i className="bi bi-instagram"></i></Link>
                <a href="https://wa.me/255747636516" className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer"> <i className="bi bi-whatsapp"></i>
                </a>
              </div>


            </Col>
            <Col lg={2} md={6} className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to="/Home">Home</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/about">About us</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/Gharama">Gharama</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/e_card">E-Card</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/login">Jisajili</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/admin/dashboard">Event Admin</Link></li>

              </ul>
            </Col>
            <Col lg={3} md={6} className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to="/Events">All Events</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="#tuma-taarifa">Tuma Taarifa</Link></li>
                <li><i className="bx bi-chevron-right"></i> <Link to="/e_card">Kadi za Kidigitali</Link></li>
                <li><i className="bx bi-chevron-right"></i> <Link to="#tuma-mialiko">Tuma Mialiko</Link></li>
                <li><i className="bx bi-chevron-right"></i> <Link to="#ripori-ya-fedha">Ripori ya Fedha</Link></li>
                <li><i className="bx bi-chevron-right"></i> <Link to="/WatoaHuduma">Login As MtoaHuduma</Link></li>

              </ul>
            </Col>
            <Col lg={4} md={6} className="footer-newsletter">
              <h4>Our Newsletter</h4>

              <p>Join our community of engaged couples and receive valuable insights directly to your inbox.</p>

              <form id="newsletterForm" onSubmit={handleSubmit}>
                <input type="email" name="email" required />
                <input type="submit" value="Subscribe" />
              </form>


              <h5 className="mt-4">Download Our App</h5>
              <div className="d-flex">
                <a href="https://apps.apple.com/us/app/harusi-online/id1629222934" className="me-3" target="_blank" rel="noopener noreferrer">
                  <img src={require('../images/apple.png')} alt="Apple App Store" style={{ width: '124px', height: '39px' }} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=harusi.online.mobile&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                  <img src={require('../images/android.png')} alt="Google Play Store" style={{ width: '124px', height: '39px' }} />
                </a>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
      <Container>
        <div className="copyright">
          <p>© {currentYear} Harusi online Tanzania. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;