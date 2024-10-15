// src/components/WatoaHuduma.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getWatoaHuduma } from '../api/api_WatoaHuduma';
import '../styles/WatoaHudma.css';

const WatoaHuduma = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchServiceProviders = async () => {
      const data = await getWatoaHuduma();
      if (data) {
        setServiceProviders(data);
      }
    };
    fetchServiceProviders();
  }, []);

  const filteredProviders = serviceProviders.filter(
    (provider) => filter === 'all' || provider.categories.some(category => category.category.toLowerCase() === filter)
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
    <Container className="my-5">
      <h1 className="text-center mb-4">Watoa Huduma</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons text-center mb-4">
        <button
          style={filter === 'all' ? activeStyle : buttonStyle}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          style={filter === 'mapambo' ? activeStyle : buttonStyle}
          onClick={() => setFilter('mapambo')}
        >
          Mapambo
        </button>
        <button
          style={filter === 'vinywaji' ? activeStyle : buttonStyle}
          onClick={() => setFilter('vinywaji')}
        >
          Vinywaji
        </button>
        <button
          style={filter === 'mapishi' ? activeStyle : buttonStyle}
          onClick={() => setFilter('mapishi')}
        >
          Mapishi
        </button>
      </div>

      {/* Service Providers Cards */}
      <Row>
        {filteredProviders.map((provider) => (
          <Col key={provider.id} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={provider.wallpaper.md_photo} alt={provider.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{provider.name}</Card.Title>
                <Card.Text>{provider.location}</Card.Text>
                <div className="mt-auto"> {/* This div pushes the button to the bottom */}
                  <Link
                    to={`/watoa-huduma-details/${provider.id}`}
                    state={{ provider }} // Pass the provider data using state
                  >
                    <Button variant="primary" className="rounded-pill">View Details</Button>
                  </Link>
                </div>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WatoaHuduma;
