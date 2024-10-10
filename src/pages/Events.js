import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../styles/Events.css';

import image1 from '../card/1.png';
import image2 from '../card/2.jpg';
import image3 from '../card/3.jpg';
import image4 from '../card/4.jpg';
import image5 from '../card/5.jpg';
import image6 from '../card/6.jpg';
import image7 from '../card/7.jpg';
import image8 from '../card/8.jpg';

const events = [
  { id: 1, name: "John & Jane's Wedding", tag: "wedding", date: "2023-08-15", image: image1 },
  { id: 2, name: "Sarah's Kitchen Party", tag: "kitchenparty", date: "2023-07-20", image: image2 },
  { id: 3, name: "Mike's Send Off", tag: "sendoff", date: "2023-09-05", image: image3 },
  { id: 4, name: "Tom & Lisa's Anniversary", tag: "anniversary", date: "2023-10-10", image: image4 },
  { id: 5, name: "Emma's Bridal Shower", tag: "kitchenparty", date: "2023-08-01", image: image5 },
  { id: 6, name: "David & Maria's Wedding", tag: "wedding", date: "2023-11-20", image: image6 },
  { id: 7, name: "Robert's Retirement Send Off", tag: "sendoff", date: "2023-09-30", image: image7 },
  { id: 8, name: "Silver Wedding Anniversary", tag: "anniversary", date: "2023-12-05", image: image8 },
];

const Events = () => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.tag === filter);

  return (
    <Container className="events-container">
      <h2 className="text-center">Our Events</h2>
      <div className="filter-buttons">
        <Button variant="outline-primary" onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</Button>
        <Button variant="outline-primary" onClick={() => setFilter('wedding')} className={filter === 'wedding' ? 'active' : ''}>Wedding</Button>
        <Button variant="outline-primary" onClick={() => setFilter('kitchenparty')} className={filter === 'kitchenparty' ? 'active' : ''}>Kitchen Party</Button>
        <Button variant="outline-primary" onClick={() => setFilter('sendoff')} className={filter === 'sendoff' ? 'active' : ''}>Send Off</Button>
        <Button variant="outline-primary" onClick={() => setFilter('anniversary')} className={filter === 'anniversary' ? 'active' : ''}>Anniversary</Button>
      </div>
     
      <Row>
        {filteredEvents.map(event => (
          <Col key={event.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="event-card">
              <Card.Img variant="top" src={event.image} alt={event.name} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <span className="event-tag">{event.tag}</span>
                <span className="event-date">{event.date}</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      
    </Container>
  );
};

export default Events;