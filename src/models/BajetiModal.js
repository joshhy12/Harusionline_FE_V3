import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const BajetiModal = ({ show, handleClose }) => {
  const budgetCategories = [
    'Ukumbi',
    'Chakula', 
    'Usafiri',
    'Vinywaji',
    'Mapambo',
    'Muziki',
    'Mavazi',
    'Zawadi',
    'Mengineyo'
  ];

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Budget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Budget Title</Form.Label>
            <Form.Control type="text" placeholder="Enter budget title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select>
              <option value="">Select Category</option>
              {budgetCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Enter amount" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Amount Paid</Form.Label>
            <Form.Control type="number" placeholder="Enter amount paid" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">
          Save Budget
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BajetiModal;