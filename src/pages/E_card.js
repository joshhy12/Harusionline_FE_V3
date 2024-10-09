import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
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
  { id: 1, title: 'Wedding Event', image: image9, category: 'kitchen-party', price: 'Tsh 400' },
  { id: 2, title: 'Send Off Event', image: image10, category: 'send-off', price: 'Tsh 900' },
  { id: 3, title: 'Kitchen Party Event', image: image3, category: 'kitchen-party', price: 'Tsh 600' },
  { id: 4, title: 'Anniversary Event', image: image4, category: 'anniversary', price: 'Tsh 600' },
  { id: 5, title: 'Birthday Party', image: image6, category: 'wedding', price: 'Tsh 1400' },
  { id: 6, title: 'Graduation Ceremony', image: image2, category: 'send-off', price: 'Tsh 200' },
  { id: 7, title: 'Baby Shower', image: image9, category: 'send-off', price: 'Tsh 1000' },
  { id: 8, title: 'Corporate Event', image: image5, category: 'anniversary', price: 'Tsh 400' },
  { id: 9, title: 'Engagement Party', image: image10, category: 'kitchen-party', price: 'Tsh 800' },
  { id: 10, title: 'Retirement Celebration', image: image8, category: 'anniversary', price: 'Tsh 600' },
  { id: 11, title: 'Housewarming Party', image: image7, category: 'wedding', price: 'Tsh 500' },
  { id: 12, title: 'Another Housewarming', image: image11, category: 'anniversary', price: 'Tsh 700' }
];

const E_card = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

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

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredItems.map(item => (
          <div key={item.id} className="card-wrapper">
            <Link to={`/card-details/${item.id}`}>
              <img src={item.image} alt={item.title} className="card-img" />
            </Link>
            {/* <div className="card-title">{item.title}</div> */}
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default E_card;