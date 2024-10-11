import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const EventDetails = () => {
  const location = useLocation();
  const { event } = location.state || {}; // Get the event data from state

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={event.image} alt={event.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{event.name}</h2>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Category:</strong> {event.tag}</p>
          <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="primary">RSVP</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;
