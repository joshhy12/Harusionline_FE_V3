import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Settings.css';


const EventSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <Container className="settings-container p-4">
      <Tabs
        id="event-settings-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="settings-nav-tabs settings-mb-4"
      >
        <Tab eventKey="general" title="General Settings" className="settings-nav-link">
          <h2 className="settings-text-primary settings-mb-4">General Settings</h2>
          <Row>
            <Col md={6}>
              <Form.Group controlId="eventTitle" className="settings-mb-3">
                <Form.Label className="settings-text-danger">Required</Form.Label>
                <Form.Label className="settings-form-label">Event Title</Form.Label>
                <Form.Control type="text" defaultValue="Fortunatus&Dorah" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="eventType" className="settings-mb-3">
                <Form.Label className="settings-form-label">Event Type</Form.Label>
                <Form.Control type="text" defaultValue="Harusi" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="eventLocation" className="settings-mb-3">
                <Form.Label className="settings-form-label">Event Location</Form.Label>
                <Form.Control type="text" placeholder="Event Location: eg Arusha" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="email" className="settings-mb-3">
                <Form.Label className="settings-form-label">Email</Form.Label>
                <Form.Control type="email" placeholder="Email" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="ibadaTime" className="settings-mb-3">
                <Form.Label className="settings-form-label">Ibada Time</Form.Label>
                <Form.Control type="time" placeholder="-- : --" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="receptionTime" className="settings-mb-3">
                <Form.Label className="settings-form-label">Reception Time</Form.Label>
                <Form.Control type="time" placeholder="-- : --" className="settings-form-control" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="eventDescription" className="settings-mb-3">
                <Form.Label className="settings-text-danger">Required</Form.Label>
                <Form.Label className="settings-form-label">Event Description</Form.Label>
                <Form.Control as="textarea" placeholder="Event Description" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="eventDate" className="settings-mb-3">
                <Form.Label className="settings-form-label">Event Date</Form.Label>
                <Form.Control type="date" defaultValue="14/09/2024" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="mobile" className="settings-mb-3">
                <Form.Label className="settings-form-label">Mobile</Form.Label>
                <Form.Control type="number" defaultValue="+255764192949" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="ibadaLocation" className="settings-mb-3">
                <Form.Label className="settings-form-label">Ibada Location</Form.Label>
                <Form.Control type="text" placeholder="Ibada Location" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="receptionLocation" className="settings-mb-3">
                <Form.Label className="settings-form-label">Reception Location</Form.Label>
                <Form.Control type="text" placeholder="Reception Location" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="eventReceptionMessage" className="settings-mb-3">
                <Form.Label className="settings-form-label">Event Reception Message</Form.Label>
                <Form.Control as="textarea" placeholder="Ujumbe wa utangulizi kwenye ripoti" className="settings-form-control" />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" className="settings-btn-primary">Save</Button>
          </div>
        </Tab>



        <Tab eventKey="price" title="Price Settings" className="settings-nav-link">
          <h2 className="settings-text-primary settings-mb-4">Price Settings</h2>
          <Row>
            <Col md={6}>
              <Form.Group controlId="eventTitle" className="settings-mb-3">
                <Form.Label className="settings-form-label">Single Minimum Rate</Form.Label>
                <Form.Control type="number" min="0" onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault()
                  }
                }} defaultValue="0" className="settings-form-control" />
              </Form.Group>
              <Form.Group controlId="eventType" className="settings-mb-3">
                <Form.Label className="settings-form-label">Default Pledge Amount</Form.Label>
                <Form.Control type="number" min="0" onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault()
                  }
                }} defaultValue="0" className="settings-form-control" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="eventTitle" className="settings-mb-3">
                <Form.Label className="settings-form-label">Double Minimum Rate</Form.Label>
                <Form.Control type="number" min="0" onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault()
                  }
                }} defaultValue="0" className="settings-form-control" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" className="settings-btn-primary">Save Price Settings</Button>
        </Tab>






        <Tab eventKey="color-theme" title="Color & Theme Settings" className="settings-nav-link">
          <h2 className="settings-text-primary settings-mb-4">Color & Theme Settings</h2>
          <Form.Group controlId="primaryColor" className="settings-mb-3">
            <Form.Label className="settings-form-label">Primary Color</Form.Label>
            <Form.Control type="color" defaultValue="#007bff" className="settings-color-input" />
          </Form.Group>
          <Form.Group controlId="secondaryColor" className="settings-mb-3">
            <Form.Label className="settings-form-label">Secondary Color</Form.Label>
            <Form.Control type="color" defaultValue="#6c757d" className="settings-color-input" />
          </Form.Group>
          <Form.Group controlId="secondaryColor" className="settings-mb-3">
            <Form.Label className="settings-form-label">Tertiary Color</Form.Label>
            <Form.Control type="color" defaultValue="" className="settings-color-input" />
          </Form.Group>
          <Button variant="primary" className="settings-btn-primary">Save Color & Theme Settings</Button>
        </Tab>


        <Tab eventKey="notification" title="Notification Settings" className="settings-nav-link">
          <h2 className="settings-text-primary settings-mb-4">Notification Settings</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Event Information Message</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="3">
                Habari #jina, Tuna furaha kukuarifu #shughuli ya #title itakayofanyika #tarehe (siku #siku kutoka sasa ). Mawasiliano #simu.
              </textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Pledge Reminder Message</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="3">
                Habari #jina, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (#title) #saliolaahadi
              </textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Pledge Acknowledgement Message</label>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" checked />
                <span>Enable</span>
              </div>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="3">
                Hello #jina. Asante kwa ahadi yako ya mchango wa #title. Kwa maelezo zaidi wasiliana nasi kwa Barua pepe #email au kwa simu: #simu
              </textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Cash Acknowledgment Message</label>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" checked />
                <span>Enable</span>
              </div>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="3">
                Ahsante sana #jina, Mchango wako umepokelewa kwa furaha kubwa! Kamati inakushukuru na kukupogeza kwa kukomboa ahadi yako.
              </textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Event Invitation Message</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="3">
                Karibu #jina, kwenye #shughuli ya #title Namba ya kadi #kadi. #tarehe ,#mahali ,#muda. Fika na Meseji hii
              </textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Event Thanknote Message</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="3">
                Event Thank-Note Message
              </textarea>
            </div>
          </div>
          <Button variant="primary" className="mt-4 settings-btn-primary">Save Notification Settings</Button>
        </Tab>

      </Tabs>
    </Container>
  );
};

export default EventSettings;