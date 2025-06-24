import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PaymentModal = ({ show, handleClose, amount, service }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Payment processing logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment for {service}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Amount to Pay</Form.Label>
            <Form.Control
              type="text"
              value={amount}
              disabled
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Mobile Money">Mobile Money</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Online">Online Payment</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Process Payment
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
