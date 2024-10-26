import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Settings.css';


const EventSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <Container className="p-4">
      <Tabs
        id="event-settings-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="general" title="General Settings">
          <h2 className="text-primary mb-4">General Settings</h2>
          <Row>
            <Col md={6}>
              <Form.Group controlId="eventTitle" className="mb-3">
                <Form.Label className="text-danger">Required</Form.Label>
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text" defaultValue="Fortunatus&Dorah" />
              </Form.Group>
              <Form.Group controlId="eventType" className="mb-3">
                <Form.Label>Event Type</Form.Label>
                <Form.Control type="text" defaultValue="Harusi" />
              </Form.Group>
              <Form.Group controlId="eventLocation" className="mb-3">
                <Form.Label>Event Location</Form.Label>
                <Form.Control type="text" placeholder="Event Location: eg Arusha" />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="ibadaTime" className="mb-3">
                <Form.Label>Ibada Time</Form.Label>
                <Form.Control type="text" placeholder="-- : --" />
              </Form.Group>
              <Form.Group controlId="receptionTime" className="mb-3">
                <Form.Label>Reception Time</Form.Label>
                <Form.Control type="text" placeholder="-- : --" />
              </Form.Group>
              <Button variant="primary">Save</Button>
            </Col>
            <Col md={6}>
              <Form.Group controlId="eventDescription" className="mb-3">
                <Form.Label className="text-danger">Required</Form.Label>
                <Form.Label>Event Description</Form.Label>
                <Form.Control as="textarea" placeholder="Event Description" />
              </Form.Group>
              <Form.Group controlId="eventDate" className="mb-3">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="text" defaultValue="14/09/2024" />
              </Form.Group>
              <Form.Group controlId="mobile" className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" defaultValue="+255764192949" />
              </Form.Group>
              <Form.Group controlId="ibadaLocation" className="mb-3">
                <Form.Label>Ibada Location</Form.Label>
                <Form.Control type="text" placeholder="Ibada Location" />
              </Form.Group>
              <Form.Group controlId="receptionLocation" className="mb-3">
                <Form.Label>Reception Location</Form.Label>
                <Form.Control type="text" placeholder="Reception Location" />
              </Form.Group>
              <Form.Group controlId="eventReceptionMessage" className="mb-3">
                <Form.Label>Event Reception Message</Form.Label>
                <Form.Control as="textarea" placeholder="Ujumbe wa utangulizi kwenye ripoti" />
              </Form.Group>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="price" title="Price Settings">
          <h2 className="text-primary mb-4">Price Settings</h2>
          {/* Price settings form content */}
          <Form.Group controlId="eventPrice" className="mb-3">
            <Form.Label>Event Price</Form.Label>
            <Form.Control type="text" placeholder="Enter price for the event" />
          </Form.Group>
          <Button variant="primary">Save Price Settings</Button>
        </Tab>

        <Tab eventKey="color-theme" title="Color & Theme Settings">
          <h2 className="text-primary mb-4">Color & Theme Settings</h2>
          {/* Color & theme settings form content */}
          <Form.Group controlId="primaryColor" className="mb-3">
            <Form.Label>Primary Color</Form.Label>
            <Form.Control type="color" defaultValue="#007bff" />
          </Form.Group>
          <Form.Group controlId="secondaryColor" className="mb-3">
            <Form.Label>Secondary Color</Form.Label>
            <Form.Control type="color" defaultValue="#6c757d" />
          </Form.Group>
          <Button variant="primary">Save Color & Theme Settings</Button>
        </Tab>

        <Tab eventKey="notification" title="Notification Settings">
          <h2 className="text-primary mb-4">Notification Settings</h2>
          {/* Notification settings form content */}
          <Form.Group controlId="emailNotifications" className="mb-3">
            <Form.Check type="checkbox" label="Enable Email Notifications" />
          </Form.Group>
          <Form.Group controlId="smsNotifications" className="mb-3">
            <Form.Check type="checkbox" label="Enable SMS Notifications" />
          </Form.Group>
          <Button variant="primary">Save Notification Settings</Button>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default EventSettings;
