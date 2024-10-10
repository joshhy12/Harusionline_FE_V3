import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import image2 from '../card/2.jpg';
import image3 from '../card/3.jpg';
import image4 from '../card/4.jpg';

const EventDetails = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the events data
    const fetchEvents = async () => {
      // Simulate an API call or use a real one
      const data = [
        { id: 1, name: "John & Jane's Wedding", tag: "wedding", date: "2023-08-15", image: image2 },
        { id: 2, name: "Lillith Kitchen Party", tag: "kitchenparty", date: "2023-07-20", image: image3 },
        // Add more event data here...
      ];

      setEvents(data);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  // If still loading or data is missing, display a loading message
  if (loading) {
    return <div>Loading event details...</div>;
  }

  // Find the specific event by id
  const event = events.find(e => e.id === parseInt(id));

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
          <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button variant="primary">RSVP</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;
