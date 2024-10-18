import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../../styles/websiteTemplates/Template3.module.css';
const Template3 = ({ event, theme, color }) => {
  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  const colorClass = styles[color];

  return (
    <div className={`${styles.template3} ${themeClass} ${colorClass}`}>
      <nav className={styles.navbar}>
        <Container>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#details">Event Details</a></li>
            <li><a href="#rsvp">RSVP</a></li>
          </ul>
        </Container>
      </nav>

      <header id="home" className={styles.header}>
        <Container>
          <h1>{event.event_title}</h1>
          <p>{new Date(event.event_date).toLocaleDateString()}</p>
        </Container>
      </header>

      <section id="story" className={styles.story}>
        <Container>
          <Row>
            <Col md={6}>
              <img src={event.wallpaper[0]?.md_photo} alt="Couple" className={styles.storyImage} />
            </Col>
            <Col md={6}>
              <h2>Our Love Story</h2>
              <p>{event.description || "Every love story is beautiful, but ours is my favorite."}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="details" className={styles.details}>
  <Container>
    <h2>Wedding Details</h2>
    <Row>
      <Col md={4}>
        <div className={styles.detailCard}>
          <h3><i className="fas fa-church"></i> Ceremony</h3>
          <p>2:00 PM</p>
          <p>Sunset Beach</p>
        </div>
      </Col>
      <Col md={4}>
        <div className={styles.detailCard}>
          <h3>Reception</h3>
          <p>6:00 PM</p>
          <p>Oceanview Resort</p>
        </div>
      </Col>
      <Col md={4}>
        <div className={styles.detailCard}>
          <h3>Dress Code</h3>
          <p>Beach Formal</p>
          <p>Bring your dancing shoes!</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      <section id="rsvp" className={styles.rsvp}>
        <Container>
          <h2>RSVP</h2>
          <p>We would be delighted to have you join us on our special day.</p>
          <Button variant="outline-light" className={styles.rsvpButton}>Respond Now</Button>
        </Container>
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