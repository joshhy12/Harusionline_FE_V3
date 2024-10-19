import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import styles from '../styles/EventDetails.module.css';
import template1 from '../images/2.jpg';
import template2 from '../images/3.jpg';
import Template3 from '../images/4.jpg';



const EventDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state;

  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleWebsiteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '');
  };

  const handleCreateWebsite = () => {
    const slug = generateSlug(event.event_title);
    const websiteUrl = `https://${slug}.Harusi.Online`;
    const stateData = {
      event,
      template: selectedTemplate,
      theme: selectedTheme,
      color: selectedColor,
      primaryColor,
      secondaryColor,
    };

    // Encode the state data
    const encodedStateData = encodeURIComponent(JSON.stringify(stateData));

    // Open new window with state data in URL
    window.open(`${websiteUrl}?state=${encodedStateData}`, '_blank');

    // Close the modal
    setShowModal(false);
  };




  const templates = [
    { id: 1, preview: template1 },
    { id: 2, preview: template2 },
    { id: 3, preview: Template3 },
  ];

  const [primaryColor, setPrimaryColor] = useState('#000000'); // Default color
  const [secondaryColor, setSecondaryColor] = useState('#FFFFFF'); // Default color

  const handleColorChange = (color, type) => {
    if (type === 'primary') {
      setPrimaryColor(color);
    } else {
      setSecondaryColor(color);
    }
  };


  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6}>
          <img
            src={event.wallpaper[0]?.md_photo}
            alt={event.event_title}
            className={styles.eventImage}
          />
        </Col>
        <Col md={6}>
          <Card className={`${styles.card} h-100`}>
            <Card.Body>
              <Card.Title className={styles.cardTitle}>{event.event_title}</Card.Title>
              <Card.Text><strong>Type:</strong> {event.event_type}</Card.Text>
              <Card.Text><strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}</Card.Text>
              <Card.Text><strong>Description:</strong> {event.description || "No description available."}</Card.Text>
              <Button
                variant="primary"
                className={`${styles.websiteButton} mt-3`}
                onClick={handleWebsiteClick}
              >
                Create Wedding Website
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Choose Your Wedding Website Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Template</Form.Label>
              <div className={styles.templateGrid}>
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={`${styles.templateItem} ${selectedTemplate === template.id ? styles.selectedTemplate : ''}`}
                    onClick={() => handleTemplateSelect(template.id)}
                    style={{ cursor: 'pointer', border: selectedTemplate === template.id ? '2px solid blue' : '1px solid #ddd' }}
                  >
                    <img
                      src={template.preview}
                      alt={`Template ${template.id}`}
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Theme</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Light"
                  name="theme"
                  id="light-theme"
                  checked={selectedTheme === 'light'}
                  onChange={() => handleThemeChange('light')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Dark"
                  name="theme"
                  id="dark-theme"
                  checked={selectedTheme === 'dark'}
                  onChange={() => handleThemeChange('dark')}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Color Scheme</Form.Label>
              <div>
                <Form.Label>Primary Color:</Form.Label>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => handleColorChange(e.target.value, 'primary')}
                />
                <Form.Label>Secondary Color:</Form.Label>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => handleColorChange(e.target.value, 'secondary')}
                />
              </div>
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateWebsite}>
            Create Website
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default EventDetails;