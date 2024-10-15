import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../styles/WatoaHudumaDetails.css'; // Import the CSS file

const WatoaHudumaDetails = () => {
  const location = useLocation();
  const { provider } = location.state || {}; // Get provider data from location state

  if (!provider) {
    return <div>Service Provider not found</div>;
  }

  return (
    <Container className="my-5">
      <Card className="h-100">
        <Row>
          <Col md={4}>
            <Card.Img variant="top" src={provider.wallpaper.md_photo} alt={provider.name} className="provider-image" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{provider.name}</Card.Title>
              <Card.Text><strong>ID:</strong> {provider.id}</Card.Text>
              <Card.Text><strong>Mobile:</strong> {provider.mobile}</Card.Text>
              <Card.Text><strong>Email:</strong> {provider.email}</Card.Text>
              <Card.Text><strong>Website:</strong> <a href={provider.website} target="_blank" rel="noopener noreferrer">{provider.website}</a></Card.Text>
              <Card.Text><strong>Description:</strong> {provider.description}</Card.Text>
              <Card.Text><strong>Location:</strong> {provider.location}</Card.Text>
              <Card.Text><strong>Status:</strong> {provider.status === 1 ? 'Active' : 'Inactive'}</Card.Text>
              <Card.Text><strong>Categories:</strong> {provider.categories.map(cat => cat.category).join(', ')}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default WatoaHudumaDetails;
