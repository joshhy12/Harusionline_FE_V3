import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './styles/Template1.module.css';

const Template1 = ({ event, theme, color }) => {
  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  const colorClass = styles[color];

  return (
    <div className={`${styles.template1} ${themeClass} ${colorClass}`}>
      <header className={styles.header}>
        <h1>{event.event_title}</h1>
        <p>{new Date(event.event_date).toLocaleDateString()}</p>
      </header>

      <Container>
        <Row className={styles.mainContent}>
          <Col md={6} className={styles.coupleImageCol}>
            <img src={event.wallpaper[0]?.md_photo} alt="Couple" className={styles.coupleImage} />
          </Col>
          <Col md={6} className={styles.storyCol}>
            <h2>Our Story</h2>
            <p>{event.description || "We're excited to celebrate our special day with you!"}</p>
            <Button variant="outline-primary" className={styles.rsvpButton}>RSVP</Button>
          </Col>
        </Row>

        <Row className={styles.eventDetails}>
          <Col md={4} className={styles.detailCol}>
            <h3>Ceremony</h3>
            <p>Time: 2:00 PM</p>
            <p>Location: Beautiful Garden</p>
          </Col>
          <Col md={4} className={styles.detailCol}>
            <h3>Reception</h3>
            <p>Time: 5:00 PM</p>
            <p>Location: Grand Ballroom</p>
          </Col>
          <Col md={4} className={styles.detailCol}>
            <h3>Dress Code</h3>
            <p>Semi-formal</p>
          </Col>
        </Row>
      </Container>

      <footer className={styles.footer}>
        <p>We can't wait to celebrate with you!</p>
      </footer>
    </div>
  );
};

export default Template1;
