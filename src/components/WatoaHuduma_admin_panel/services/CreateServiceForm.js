import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CreateServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    website: '',
    description: '',
    location: '',
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    categories: [],
    wallpaper: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    setFormData(prevState => ({
      ...prevState,
      wallpaper: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API submission logic here
  };

  return (
    <Container className="mt-4">
      <h2>Create New Service</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                name="wallpaper"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h4>Social Media Links</h4>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="url"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>YouTube</Form.Label>
              <Form.Control
                type="url"
                name="youtube"
                value={formData.youtube}
                onChange={handleInputChange}
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
