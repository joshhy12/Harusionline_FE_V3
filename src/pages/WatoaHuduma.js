import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';

const serviceProviders = [
  { id: 1, name: 'Mpishi Bora', service: 'Catering', image: image1, details: 'Best catering service in town.' },
  { id: 2, name: 'Picha Nzuri', service: 'Photography', image: image2, details: 'Professional photography services.' },
  { id: 3, name: 'Muziki Safi', service: 'DJ Services', image: image1, details: 'Top-notch DJ services for any event.' },
  { id: 4, name: 'Mapambo Yetu', service: 'Decoration', image: image2, details: 'Elegant decoration services for weddings.' },
];

const WatoaHuduma = () => {
  const [filter, setFilter] = useState('all');

  const filteredProviders = serviceProviders.filter(
    (provider) => filter === 'all' || provider.service.toLowerCase() === filter
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
          style={filter === 'catering' ? activeStyle : buttonStyle}
          onClick={() => setFilter('catering')}
        >
          Catering
        </button>
        <button
          style={filter === 'photography' ? activeStyle : buttonStyle}
          onClick={() => setFilter('photography')}
        >
          Photography
        </button>
        <button
          style={filter === 'dj services' ? activeStyle : buttonStyle}
          onClick={() => setFilter('dj services')}
        >
          DJ Services
        </button>
        <button
          style={filter === 'decoration' ? activeStyle : buttonStyle}
          onClick={() => setFilter('decoration')}
        >
          Decoration
        </button>
      </div>

      {/* Service Providers Cards */}
      <Row>
        {filteredProviders.map((provider) => (
          <Col key={provider.id} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={provider.image} alt={provider.name} />
              <Card.Body>
                <Card.Title>{provider.name}</Card.Title>
                <Card.Text>{provider.service}</Card.Text>
                <Link 
                  to={`/watoa-huduma-details/${provider.id}`}
                  state={{ provider }} // Pass the provider data using state
                >
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WatoaHuduma;
