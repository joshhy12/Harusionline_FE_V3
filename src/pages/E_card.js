import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container,  } from 'react-bootstrap';
import image1 from '../card/1.png';
import image2 from '../card/2.jpg';
import image3 from '../card/3.jpg';
import image4 from '../card/4.jpg';
import image5 from '../card/5.jpg';
import image6 from '../card/6.jpg';
import image7 from '../card/7.jpg';
import image8 from '../card/8.jpg';
import image9 from '../card/9.jpg';
import image10 from '../card/10.jpg';
import image11 from '../card/11.jpg';
import '../styles/e-card.css';


export const items = [
  { id: 1, title: 'Wedding Event', description: 'Beautiful wedding invitation for your big day.', image: image1, category: 'wedding', price: 'Tsh 400' },
  { id: 2, title: 'Send Off Event', description: 'Elegant send off celebration card.', image: image10, category: 'send-off', price: 'Tsh 900' },
  { id: 3, title: 'Kitchen Party Event', description: 'Bright kitchen party invitation with modern design.', image: image3, category: 'kitchen-party', price: 'Tsh 600' },
  { id: 4, title: 'Anniversary Event', description: 'Celebrate your special anniversary with this card.', image: image4, category: 'anniversary', price: 'Tsh 600' },
  { id: 5, title: 'Birthday Party', description: 'Colorful birthday invitation for all ages.', image: image6, category: 'wedding', price: 'Tsh 1400' },
  { id: 6, title: 'Graduation Ceremony', description: 'Announcement and celebration card.', image: image2, category: 'send-off', price: 'Tsh 200' },
  { id: 7, title: 'Baby Shower', description: 'Cute and adorable baby shower invitation.', image: image9, category: 'send-off', price: 'Tsh 1000' },
  { id: 8, title: 'Corporate Event', description: 'Professional design for your business event.', image: image5, category: 'anniversary', price: 'Tsh 400' },
  { id: 9, title: 'Engagement Party', description: 'Romantic engagement announcement.', image: image10, category: 'kitchen-party', price: 'Tsh 800' },
  { id: 10, title: 'Retirement Celebration', description: 'Elegant retirement party invitation.', image: image8, category: 'anniversary', price: 'Tsh 600' },
  { id: 11, title: 'Housewarming Party', description: 'Welcoming housewarming party invitation.', image: image7, category: 'wedding', price: 'Tsh 500' },
  { id: 12, title: 'Another Housewarming', description: 'Welcoming housewarming party invitation.', image: image11, category: 'anniversary', price: 'Tsh 700' }
];

const E_card = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <Container>
<h2 className="text-center mb-4">Digital Card</h2>
<div className="text-center mb-4">
  <Button variant="outline-primary" onClick={() => handleFilterChange('all')} className={`m-1 ${filter === 'all' ? 'active' : ''}`}>All</Button>
  <Button variant="outline-primary" onClick={() => handleFilterChange('wedding')} className={`m-1 ${filter === 'wedding' ? 'active' : ''}`}>Wedding</Button>
  <Button variant="outline-primary" onClick={() => handleFilterChange('send-off')} className={`m-1 ${filter === 'send-off' ? 'active' : ''}`}>Send Off</Button>
  <Button variant="outline-primary" onClick={() => handleFilterChange('kitchen-party')} className={`m-1 ${filter === 'kitchen-party' ? 'active' : ''}`}>Kitchen Party</Button>
  <Button variant="outline-primary" onClick={() => handleFilterChange('anniversary')} className={`m-1 ${filter === 'anniversary' ? 'active' : ''}`}>Anniversary</Button>
</div>



      {/* Masonry Grid */}

      <div className="pinterest-grid">
        {filteredItems.map(item => (
          <Card key={item.id} className="mb-4 card">
            <Link to={`/card-details/${item.id}`} key={item.id}>
              <Card.Img variant="top" src={item.image} alt={item.title} className="card-img" />
            </Link>
            <Card.Body className="card-body">
              <Card.Title className="card-title">{item.title}</Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted">{item.price}</span>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      
    </Container>
  );
};

export default E_card;