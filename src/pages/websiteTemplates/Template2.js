import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../../styles/websiteTemplates/Template2.module.css';

const Template2 = ({ event, theme, color }) => {
  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  const colorClass = styles[color];

  return (
    <div className={`${styles.template2} ${themeClass} ${colorClass}`}>
      <header className={styles.header}>
        <Container>
          <h1>{event.event_title}</h1>
          <p>{new Date(event.event_date).toLocaleDateString()}</p>
        </Container>
      </header>
      
      <section className={styles.hero}>
        <Container>
          <Row>
            <Col md={6}>
              <img src={event.wallpaper[0]?.md_photo} alt="Couple" className={styles.heroImage} />
            </Col>
            <Col md={6} className={styles.heroContent}>
              <h2>We're Getting Married!</h2>
              <p>{event.description || "Join us for a celebration of love and commitment."}</p>
              <Button variant="primary" className={styles.rsvpButton}>RSVP Now</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.countdown}>
        <Container>
          <h2>Countdown to Our Big Day</h2>
          <div className={styles.timer}>
            {/* You can implement a real countdown timer here */}
            <div>30 Days</div>
            <div>12 Hours</div>
            <div>45 Minutes</div>
          </div>
        </Container>
      </section>

      <section className={styles.details}>
        <Container>
          <Row>
            <Col md={4}>
              <h3>Ceremony</h3>
              <p>2:00 PM at Beautiful Chapel</p>
            </Col>
            <Col md={4}>
              <h3>Reception</h3>
              <p>5:00 PM at Elegant Ballroom</p>
            </Col>
            <Col md={4}>
              <h3>Afterparty</h3>
              <p>10:00 PM at Rooftop Lounge</p>
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