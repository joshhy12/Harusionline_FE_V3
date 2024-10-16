import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import { fetchECards } from '../api/api_Ecard'; // Adjust the import path as necessary
import '../styles/e-card.css';

const E_card = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //search by name and by event type functin 
  const filteredItems = items.filter(item => {
    const matchesCategory = filter === 'all' || item.card_category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.event_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.card_category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  //the grid style for the phone and deskitop
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

      <Row className="mb-4">
        <Col md={8} className="d-flex align-items-center">
          <Button variant="outline-primary" onClick={() => handleFilterChange('all')} className={`m-1 rounded-pill ${filter === 'all' ? 'active' : ''}`}>All</Button>
          <Button variant="outline-primary" onClick={() => handleFilterChange('Invitation')} className={`m-1 rounded-pill ${filter === 'Invitation' ? 'active' : ''}`}>Invitation</Button>
          <Button variant="outline-primary" onClick={() => handleFilterChange('Harusi')} className={`m-1 rounded-pill ${filter === 'Harusi' ? 'active' : ''}`}>Harusi</Button>
          {/* Add more filters as needed */}
        </Col>
        <Col md={4}>
          <Form className="d-flex justify-content-end">
            <Form.Control
              type="text"
              placeholder="Search by name or event type"
              value={searchTerm}
              onChange={handleSearchChange}
              className="me-2" // Add margin-end for spacing
            />
            <Button variant="outline-primary" className="rounded-pill">Search</Button>
          </Form>
        </Col>
      </Row>

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
