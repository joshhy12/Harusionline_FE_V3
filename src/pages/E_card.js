/**
 * Renders a component that displays a grid of digital event cards with filtering options.
 *
 * The `E_card` component fetches an array of event items, each with a title, description, image, category, and price. It allows the user to filter the items by category using a set of buttons.
 *
 * The component uses the `react-bootstrap` library for the layout and styling of the cards.
 *
 * @returns {JSX.Element} The rendered `E_card` component.
 */
// E_card.js



import React, { useState } from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import '../styles/e-card.css'; // Import your CSS



const  E_card  = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, title: 'Wedding Event', description: 'Beautiful wedding invitation for your big day.', image: image1, category: 'wedding', price: 'Tsh 400' },
    { id: 2, title: 'Send Off Event', description: 'Elegant send off celebration card.', image: image2, category: 'send-off', price: 'Tsh 900' },
    { id: 3, title: 'Kitchen Party Event', description: 'Bright kitchen party invitation with modern design.', image: image3, category: 'kitchen-party', price: 'Tsh 600' },
    { id: 4, title: 'Anniversary Event', description: 'Celebrate your special anniversary with this card.', image: image4, category: 'anniversary', price: 'Tsh 600' },
    { id: 5, title: 'Birthday Party', description: 'Colorful birthday invitation for all ages.', image: image1, category: 'wedding', price: 'Tsh 1400' },
    { id: 6, title: 'Graduation Ceremony', description: 'announcement and celebration card.', image: image2, category: 'send-off', price: 'Tsh 200' },
    { id: 7, title: 'Baby Shower', description: 'Cute and adorable baby shower invitation.', image: image3, category: 'send-off', price: 'Tsh 1000' },
    { id: 8, title: 'Corporate Event', description: 'Professional design for your business event.', image: image4, category: 'anniversary', price: 'Tsh 400' },
    { id: 9, title: 'Engagement Party', description: 'Romantic engagement announcement .', image: image1, category: 'kitchen-party', price: 'Tsh 800' },
    { id: 10, title: 'Retirement Celebration', description: 'Elegant retirement party invitation.', image: image2, category: 'anniversary', price: 'Tsh 600' },
    { id: 11, title: 'Housewarming Party', description: 'Welcoming housewarming party invitation.', image: image3, category: 'wedding', price: 'Tsh 500' },
    { id: 11, title: 'Housewarming Party', description: 'Welcoming housewarming party invitation.', image: image1, category: 'anniversary', price: 'Tsh 700' } 
   ];


  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <Container>
      <h2 className="text-center mb-4">Digital Card</h2>
      <div className="text-center mb-4">
        <Button onClick={() => handleFilterChange('all')} className="m-1">All</Button>
        <Button onClick={() => handleFilterChange('wedding')} className="m-1">Wedding</Button>
        <Button onClick={() => handleFilterChange('send-off')} className="m-1">Send Off</Button>
        <Button onClick={() => handleFilterChange('kitchen-party')} className="m-1">Kitchen Party</Button>
        <Button onClick={() => handleFilterChange('anniversary')} className="m-1">Anniversary</Button>
      </div>
      <Row>
        {filteredItems.map((item) => (
          <Col md={3} key={item.id}>

            <Card className="mb-4 shadow-sm" style={{ minHeight: '300px' }}>
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">{item.price}</span>
                  <Button variant="outline-secondary" size="sm">View</Button>
                </div>
              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default E_card;
