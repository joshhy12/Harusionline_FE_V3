import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const WatoaHudumaDetails = () => {
  const location = useLocation();
  const { provider } = location.state || {}; // Get provider data from location state

  if (!provider) {
    return <div>Service Provider not found</div>;
  }

  return (
    <Container className="my-5">
      <Card className="h-100">
        <Card.Img variant="top" src={provider.image} alt={provider.name} />
        <Card.Body>
          <Card.Title>{provider.name}</Card.Title>
          <Card.Text>Service: {provider.service}</Card.Text>
          <Card.Text>Details: {provider.details}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WatoaHudumaDetails;
