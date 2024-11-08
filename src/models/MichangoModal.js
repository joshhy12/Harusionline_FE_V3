import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const MichangoModal = ({ show, handleClose }) => {
  const [newMichango, setNewMichango] = useState({
    fullName: '',
    amount: '',
    recordedBy: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new michango logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Fund</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              value={newMichango.fullName}
              onChange={(e) => setNewMichango({...newMichango, fullName: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              value={newMichango.amount}
              onChange={(e) => setNewMichango({...newMichango, amount: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={newMichango.date}
              onChange={(e) => setNewMichango({...newMichango, date: e.target.value})}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MichangoModal;
