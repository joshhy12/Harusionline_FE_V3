import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import styles from '../styles/EventDetails.module.css'; // Import the CSS module

const EventDetails = () => {
  const location = useLocation();
  const { event } = location.state;

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6}>
          <img
            src={event.wallpaper[0]?.md_photo}
            alt={event.event_title}
            className={styles.eventImage} // Apply the CSS module class
          />
        </Col>
        <Col md={6}>
          <Card className={`${styles.card} h-100`}> {/* Apply the CSS module class */}
            <Card.Body>
              <Card.Title className={styles.cardTitle}>{event.event_title}</Card.Title> {/* Apply the CSS module class */}
              <Card.Text><strong>Type:</strong> {event.event_type}</Card.Text>
              <Card.Text><strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}</Card.Text>
              <Card.Text><strong>Description:</strong> {event.description || "No description available."}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;
