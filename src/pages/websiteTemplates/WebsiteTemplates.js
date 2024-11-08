import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';    

import template1Thumbnail from './templete_images/template1.jpg';
import template2Thumbnail from './templete_images/template2.jpg';
import template3Thumbnail from './templete_images/template3.jpg';
import template4Thumbnail from './templete_images/template4.jpg';
import sampleImage from './templete_images/sample-image.jpg';
import './styles/WebsiteTemplates.css';

const WebsiteTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  const dummyEvent = {
    event_title: "Sample Wedding",
    event_date: new Date(),
    description: "Sample wedding description",
    wallpaper: [{ md_photo: sampleImage }]
  };

  const templates = [
    { id: 1, name: "Template 1", component: <Template1 event={dummyEvent} />, image: template1Thumbnail },
    { id: 2, name: "Template 2", component: <Template2 event={dummyEvent} />, image: template2Thumbnail },
    { id: 3, name: "Template 3", component: <Template3 event={dummyEvent} />, image: template3Thumbnail },
    { id: 4, name: "Template 4", component: <Template4 event={dummyEvent} />, image: template4Thumbnail }
  ];

  return (
    <Container className="templates-container">
      <h2 className="templates-title">Website Templates</h2>
      
      <Row className="templates-grid">
        {templates.map((template) => (
          <Col md={4} xs={12} key={template.id} className="template-column">
            <Card className="template-card">
              <Card.Img variant="top" src={template.image} alt={`${template.name} preview`} className="template-image"/>
              <Card.Body>
                <Card.Title className="template-name">{template.name}</Card.Title>
                <Button
                  className="preview-btn"
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  Preview Template
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Modal 
        show={selectedTemplate !== null} 
        onHide={() => setSelectedTemplate(null)}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Template Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="preview-content">
            {templates.find(t => t.id === selectedTemplate)?.component}
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default WebsiteTemplates;