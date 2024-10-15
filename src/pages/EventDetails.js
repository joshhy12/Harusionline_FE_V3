import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../styles/EventDetails.css';

const EventDetails = () => {
  const location = useLocation();
  const { event } = location.state;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img
            src={event.wallpaper[0]?.md_photo}
            alt={event.event_title}
            className="event-image"
          />
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{event.event_title}</Card.Title>
              <Card.Text><strong>Type:</strong> {event.event_type}</Card.Text>
              <Card.Text><strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}</Card.Text>
              {/* Add more details as needed */}
              <Card.Text><strong>Description:</strong> {event.description || "No description available."}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;
