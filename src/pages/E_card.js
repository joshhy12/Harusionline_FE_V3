// src/E_card.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import { fetchECards } from '../api/api_Ecard'; // Adjust the import path as necessary
import '../styles/e-card.css';

const E_card = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getECards = async () => {
      const data = await fetchECards();
      setItems(data);
      setLoading(false);
    };

    getECards();
  }, []);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredItems = filter === 'all' ? items : items.filter(item => item.card_category === filter);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2
  };

  return (
    <Container>
      <br />
      <h2 className="text-center mb-4">Digital Card</h2>
      <div className="text-center mb-4">
        <Button variant="outline-primary" onClick={() => handleFilterChange('all')} className={`m-1 rounded-pill ${filter === 'all' ? 'active' : ''}`}>All</Button>
        <Button variant="outline-primary" onClick={() => handleFilterChange('Invitation')} className={`m-1 rounded-pill ${filter === 'Invitation' ? 'active' : ''}`}>Invitation</Button>
        <Button variant="outline-primary" onClick={() => handleFilterChange('Harusi')} className={`m-1 rounded-pill ${filter === 'Harusi' ? 'active' : ''}`}>Harusi</Button>
        {/* Add more filters as needed */}
      </div>

      {loading ? (
        <h2 className="text-center">Loading cards...</h2>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {filteredItems.map(item => (
            <div key={item.id} className="card-wrapper">
              <Link to={`/card-details/${item.id}`} state={{ card: item }}>
                <img src={item.wallpaper} alt={item.name} className="card-img" />
              </Link>
            </div>
          ))}
        </Masonry>
      )}
    </Container>
  );
};

export default E_card;
