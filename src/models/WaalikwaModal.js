import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const WaalikwaModal = ({ show, handleClose, guest }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cardType: 'Single',
    cardNumber: ''
  });

  useEffect(() => {
    if (guest) {
      setFormData(guest);
    }
  }, [guest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{guest ? 'Edit Guest' : 'Add New Guest'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Card Type</Form.Label>
            <Form.Select
              value={formData.cardType}
              onChange={(e) => setFormData({...formData, cardType: e.target.value})}
            >
              <option value="Single">Single</option>
              <option value="Double">Double</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              value={formData.cardNumber}
              onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {guest ? 'Update' : 'Add'} Guest
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WaalikwaModal;
