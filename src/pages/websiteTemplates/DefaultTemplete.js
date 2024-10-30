import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../../styles/websiteTemplates/DefaultTemplate.module.css';

const DefaultTemplate = ({ event, theme = 'light', color = 'primary' }) => {
  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  const colorClass = styles[color] || '';

  return (
    <div className={`${styles.defaultTemplate} ${themeClass} ${colorClass}`}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>{event?.event_title || "Event Title"}</h1>
        <p>{event?.event_date ? new Date(event.event_date).toLocaleDateString() : "Event Date"}</p>
      </header>

      <Container>
        {/* Main Content Section */}
        <Row className={styles.mainContent}>
          <Col md={6}>
            <img src={event?.wallpaper?.[0]?.md_photo || '/default-image.jpg'} alt="Event" className={styles.eventImage} />
          </Col>
          <Col md={6}>
            <h2>Our Story</h2>
            <p>{event?.description || "We're excited to celebrate our special day with you!"}</p>
            <Button variant="outline-primary" className={styles.actionButton}>RSVP</Button>
          </Col>
        </Row>

        {/* Event Details Section */}
        <Row className={styles.eventDetails}>
          <Col md={4}>
            <h3>Ceremony</h3>
            <p>Time: 2:00 PM</p>
            <p>Location: Beautiful Garden</p>
          </Col>
          <Col md={4}>
            <h3>Reception</h3>
            <p>Time: 5:00 PM</p>
            <p>Location: Grand Ballroom</p>
          </Col>
          <Col md={4}>
            <h3>Dress Code</h3>
            <p>Semi-formal</p>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>We can't wait to celebrate with you!</p>
      </footer>
    </div>
  );
};

export default DefaultTemplate;