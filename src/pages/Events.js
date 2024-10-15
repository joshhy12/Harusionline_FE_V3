import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../styles/Events.css';
import { fetchEvents } from '../api/api_events';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
      setLoading(false);
    };

    getEvents();
  }, []);

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.event_type.toLowerCase() === filter);

  return (
    <section className="events-section">
      <Container>
        <h2 className="section-title text-center mb-4">Our Events</h2>
        <div className="filter-buttons text-center mb-4">
          {['all', 'harusi', 'kitchen party', 'send-off', 'anniversary' ,'Engagement'].map(type => (
            <Button 
              key={type} 
              variant="outline-primary" 
              onClick={() => setFilter(type)} 
              className={`filter-btn ${filter === type ? 'active' : ''}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>

        {loading ? (
          <h2 className="text-center">Loading events...</h2>
        ) : (
          <div className="events-grid">
            {filteredEvents.map(event => (
              <Card key={event.id} className="event-card">
                <Card.Img variant="top" src={event.wallpaper[0]?.md_photo} alt={event.event_title} />
                <Card.Body>
                  <Card.Title>{event.event_title}</Card.Title>
                  <Card.Text>{event.event_type}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Event Date: {new Date(event.event_date).toLocaleDateString()}</small>
                  <Link to={`/event/${event.id}`} state={{ event }}>
                    <Button variant="primary" className="rounded-pill">View Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Events;
