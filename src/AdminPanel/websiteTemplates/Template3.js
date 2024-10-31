import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from './styles/Template3.module.css';

const Template3 = ({ event, theme, color }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date(event.event_date);
      const now = new Date();
      const difference = eventDate - now;

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [event.event_date]);

  return (
    <div className={styles.template3}>
      <Navbar expand="lg" className={styles.customNavbar}>
        <Container fluid>
          <Navbar.Brand href="#" className={styles.navbarBrand}>Wedding</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT US</Nav.Link>
              <NavDropdown title="THE WEDDING" id="wedding-dropdown">
                <NavDropdown.Item href="#ceremony">Ceremony</NavDropdown.Item>
                <NavDropdown.Item href="#reception">Reception</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="GALLERY" id="gallery-dropdown">
                <NavDropdown.Item href="#photos">Photos</NavDropdown.Item>
                <NavDropdown.Item href="#videos">Videos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">BLOG</Nav.Link>
              <Nav.Link href="#registry">REGISTRY</Nav.Link>
              <Nav.Link href="#rsvp">RSVP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={styles.mainContent}>
        <div className={styles.decorativeLine}>❧❧❧</div>
        <h1>{event.event_title}</h1>
        <div className={styles.decorativeLine}>❧❧❧</div>
        <h2>Are getting Married in</h2>
        
        <div className={styles.countdown}>
          <div>
            <span>{countdown.days}</span>
            <small>DAYS</small>
          </div>
          <div>
            <span>{countdown.hours}</span>
            <small>HOURS</small>
          </div>
          <div>
            <span>{countdown.minutes}</span>
            <small>MIN.</small>
          </div>
          <div>
            <span>{countdown.seconds}</span>
            <small>SEC.</small>
          </div>
        </div>
      </div>

      {/* Keeping other sections but they can be modified as needed */}
      <section id="details" className={styles.details}>
        {/* ... existing details section ... */}
      </section>

      <section id="rsvp" className={styles.rsvp}>
        {/* ... existing RSVP section ... */}
      </section>

      <footer className={styles.footer}>
        <Container>
          <p>We can't wait to celebrate with you!</p>
        </Container>
      </footer>
    </div>
  );
};

export default Template3;
