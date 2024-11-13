import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    // API call to fetch services
    
    
    // Placeholder data based on API structure
    setServices([
      { 
        id: 1, 
        title: 'Dj Lebbz', 
        description: 'Pata Muziki mnono by Dj Lebby', 
        price: '300',
        categories: ['Mapishi', 'Vinywaji']
      },
      { 
        id: 2, 
        title: 'Abeid The Dancer', 
        description: 'Abeid The Dancer. Karibu nikuhudumie', 
        price: '250',
        categories: ['Music & Mc', 'Mapambo', 'Vinywaji']
      },
      { 
        id: 3, 
        title: 'Abeid Dancer', 
        description: 'Abeid Dancer. Karibu nikuhudumie', 
        price: '200',
        categories: ['Music & Mc', 'Mapambo', 'Vinywaji', 'Vinywaji']
      }
    ]);
  };

  const handleAdd = () => {
    navigate('/service-provider/services/create');
  };

  const handleDelete = async (id) => {
    // API call to delete service
    fetchServices();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Services</h2>
        <Button variant="primary" onClick={handleAdd}>Add New Service</Button>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Col key={service.id}>
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>
                  <p>{service.description}</p>
                  <p><strong>Price:</strong> ${service.price}</p>
                  <p><strong>Categories:</strong> {service.categories.join(', ')}</p>
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="info" size="sm">Edit</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(service.id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageServices;