import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';

const serviceProviders = [
  { id: 1, name: 'Mpishi Bora', service: 'Catering', image: image1 },
  { id: 2, name: 'Picha Nzuri', service: 'Photography', image: image2 },
  { id: 3, name: 'Muziki Safi', service: 'DJ Services', image: image1 },
  { id: 4, name: 'Mapambo Yetu', service: 'Decoration', image: image2 },
];
function WatoaHuduma() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Watoa Huduma</h1>
      <Row>
        {serviceProviders.map((provider) => (
          <Col key={provider.id} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={provider.image} />
              <Card.Body>
                <Card.Title>{provider.name}</Card.Title>
                <Card.Text>{provider.service}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WatoaHuduma;
