import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import EventDetails from '../pages/EventDetails'; // Import EventDetails component

import image2 from '../card/2.jpg';
import image3 from '../card/3.jpg';
import image4 from '../card/4.jpg';
import image5 from '../card/5.jpg';
import image6 from '../card/6.jpg';
import image7 from '../card/7.jpg';
import image8 from '../card/8.jpg';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call with added events
    const data = [
      { id: 1, name: "John & Jane's Wedding", tag: "wedding", date: "2023-08-15", image: image2 },
      { id: 2, name: "Lillith Kitchen Party", tag: "kitchenparty", date: "2023-07-20", image: image3 },
      { id: 3, name: "Mike's Send Off", tag: "sendoff", date: "2023-09-05", image: image4 },
      { id: 4, name: "Tom & Lisa's Anniversary", tag: "anniversary", date: "2023-10-10", image: image5 },
      { id: 5, name: "Emma's Bridal Shower", tag: "kitchenparty", date: "2023-08-01", image: image6 },
      { id: 6, name: "David & Maria's Wedding", tag: "wedding", date: "2023-11-20", image: image7 },
      { id: 7, name: "Robert's Retirement Send Off", tag: "sendoff", date: "2023-09-30", image: image8 },
      { id: 8, name: "Silver Wedding Anniversary", tag: "anniversary", date: "2023-12-05", image: image2 },
      { id: 9, name: "Mark & Lucy's Wedding", tag: "wedding", date: "2024-01-15", image: image3 },
      { id: 10, name: "Alice's Kitchen Party", tag: "kitchenparty", date: "2024-02-22", image: image4 },
      { id: 11, name: "James's Send Off", tag: "sendoff", date: "2024-03-18", image: image5 },
      { id: 12, name: "Lara & Noah's Anniversary", tag: "anniversary", date: "2024-04-12", image: image6 },
      { id: 13, name: "Nina's Bridal Shower", tag: "kitchenparty", date: "2024-05-25", image: image7 },
      { id: 14, name: "Grace & Paul's Wedding", tag: "wedding", date: "2024-06-14", image: image8 },
      { id: 15, name: "Samuel's Send Off", tag: "sendoff", date: "2024-07-19", image: image2 },
      { id: 16, name: "Golden Anniversary Celebration", tag: "anniversary", date: "2024-08-03", image: image3 },
      { id: 17, name: "Rachel's Kitchen Party", tag: "kitchenparty", date: "2024-09-09", image: image4 },
      { id: 18, name: "Mike & Anna's Wedding", tag: "wedding", date: "2024-10-15", image: image5 }
    ];
    setEvents(data);
    setLoading(false);
  }, []);

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.tag === filter
  );

  const buttonStyle = {
    margin: '0.25rem',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    borderRadius: '25px',
    border: '1px solid #007bff',
    backgroundColor: 'transparent',
    color: '#007bff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    outline: 'none',
  };

  const activeStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
  };

  return (
    <Container>
      <Routes>
        {/* Route for Event Details */}
        <Route path="/event/:id" element={<EventDetails events={events} />} />
      </Routes>

      <h2 className="text-center mb-4">All Events</h2>

      <div className="filter-buttons" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button
          style={filter === 'all' ? activeStyle : buttonStyle}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          style={filter === 'wedding' ? activeStyle : buttonStyle}
          onClick={() => setFilter('wedding')}
        >
          Wedding
        </button>
        <button
          style={filter === 'sendoff' ? activeStyle : buttonStyle}
          onClick={() => setFilter('sendoff')}
        >
          Send Off
        </button>
        <button
          style={filter === 'kitchenparty' ? activeStyle : buttonStyle}
          onClick={() => setFilter('kitchenparty')}
        >
          Kitchen Party
        </button>
        <button
          style={filter === 'anniversary' ? activeStyle : buttonStyle}
          onClick={() => setFilter('anniversary')}
        >
          Anniversary
        </button>
      </div>

      {loading ? (
        <div>Loading events...</div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredEvents.map(event => (
            <Col key={event.id}>
              <Card className="h-100" as={Link} to={`/event/${event.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card.Img variant="top" src={event.image} alt={event.name} />
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.tag}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Event Date: {event.date}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <br />
    </Container>
  );
}

export default Events;
