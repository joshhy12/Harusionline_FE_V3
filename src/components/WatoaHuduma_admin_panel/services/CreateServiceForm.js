import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CreateServiceForm = () => {
  const [serviceData, setServiceData] = useState({
    name: '',
    mobile: '',
    email: '',
    website: '',
    description: '',
    location: '',
    categories: [],
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    wallpaper: null
  });

  const categories = [
    { id: 1, name: 'Music & Mc' },
    { id: 2, name: 'Mapambo' },
    { id: 3, name: 'Mapishi' },
    { id: 4, name: 'Vinywaji' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to save service
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setServiceData({...serviceData, wallpaper: file});
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Create New Service</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Service Name</Form.Label>
              <Form.Control 
                type="text"
                value={serviceData.name}
                onChange={(e) => setServiceData({...serviceData, name: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control 
                type="tel"
                value={serviceData.mobile}
                onChange={(e) => setServiceData({...serviceData, mobile: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                value={serviceData.email}
                onChange={(e) => setServiceData({...serviceData, email: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control 
                type="url"
                value={serviceData.website}
                onChange={(e) => setServiceData({...serviceData, website: e.target.value})}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea"
                rows={3}
                value={serviceData.description}
                onChange={(e) => setServiceData({...serviceData, description: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control 
                type="text"
                value={serviceData.location}
                onChange={(e) => setServiceData({...serviceData, location: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categories</Form.Label>
              {categories.map(category => (
                <Form.Check 
                  key={category.id}
                  type="checkbox"
                  label={category.name}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setServiceData({
                        ...serviceData, 
                        categories: [...serviceData.categories, category.id]
                      });
                    } else {
                      setServiceData({
                        ...serviceData,
                        categories: serviceData.categories.filter(id => id !== category.id)
                      });
                    }
                  }}
                />
              ))}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Service Image</Form.Label>
              <Form.Control 
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </Form.Group>
          </Col>
        </Row>

        <h4 className="mt-4">Social Media Links</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Facebook</Form.Label>
              <Form.Control 
                type="url"
                value={serviceData.facebook}
                onChange={(e) => setServiceData({...serviceData, facebook: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Instagram</Form.Label>
              <Form.Control 
                type="url"
                value={serviceData.instagram}
                onChange={(e) => setServiceData({...serviceData, instagram: e.target.value})}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Twitter</Form.Label>
              <Form.Control 
                type="url"
                value={serviceData.twitter}
                onChange={(e) => setServiceData({...serviceData, twitter: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>YouTube</Form.Label>
              <Form.Control 
                type="url"
                value={serviceData.youtube}
                onChange={(e) => setServiceData({...serviceData, youtube: e.target.value})}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Create Service
        </Button>
      </Form>
    </Container>
  );
};

export default CreateServiceForm;
