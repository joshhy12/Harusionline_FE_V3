import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import styles from './styles/Template2.module.css';

const Template2 = ({ event, theme, color }) => {
  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  const colorClass = styles[color];

  return (
    <div className={`${styles.template2} ${themeClass} ${colorClass}`}>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand href="#" className={styles.navbarBrand}>Send Off</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Pages</Nav.Link>
              <Nav.Link href="#">Portfolio</Nav.Link>
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
            </Nav>
            <div className={styles.navIcons}>
             
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={styles.saveTheDate}>
        <div className={styles.settingsIcon}>
          <i className="fas fa-cog"></i>
        </div>
        <h2>{event.couple_names || "Lucas & Mia"}</h2>
        <h1>Save The Date</h1>
        <p>We Are Getting Married {new Date(event.event_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className={styles.couplePhoto}>
          <img 
            src={event.wallpaper[0]?.md_photo} 
            alt="Main couple photo" 
            className={styles.mainPhoto}
          />
          <img 
            src={event.wallpaper[1]?.md_photo} 
            alt="Secondary couple photo" 
            className={styles.smallPhoto}
          />
          <div className={styles.decorativeElements}></div>
        </div>
      </div>

      <section className={styles.details}>
        <Container>
          <Row>
            <Col md={4}>
              <h3>Ceremony</h3>
              <p>{event.ceremony_time || "2:00 PM"} at {event.ceremony_location || "Beautiful Chapel"}</p>
            </Col>
            <Col md={4}>
              <h3>Reception</h3>
              <p>{event.reception_time || "5:00 PM"} at {event.reception_location || "Elegant Ballroom"}</p>
            </Col>
            <Col md={4}>
              <h3>Afterparty</h3>
              <p>{event.afterparty_time || "10:00 PM"} at {event.afterparty_location || "Rooftop Lounge"}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className={styles.footer}>
        <Container>
          <p>We look forward to celebrating with you!</p>
        </Container>
      </footer>
    </div>
  );
};

export default Template2;
