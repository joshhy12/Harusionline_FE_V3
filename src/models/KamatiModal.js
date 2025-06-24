import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const KamatiModal = ({ show, handleClose }) => {
  const [newMember, setNewMember] = useState({
    name: '',
    phone: '',
    role: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new member logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ongeza Mwanakamati Mpya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Jina</Form.Label>
            <Form.Control
              type="text"
              value={newMember.name}
              onChange={(e) => setNewMember({...newMember, name: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Namba ya Simu</Form.Label>
            <Form.Control
              type="number"
              value={newMember.phone}
              onChange={(e) => setNewMember({...newMember, phone: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nafasi</Form.Label>
            <Form.Select
              value={newMember.role}
              onChange={(e) => setNewMember({...newMember, role: e.target.value})}
              required
            >
              <option value="">Chagua Nafasi</option>
              <option value="Mwenyekiti">Mwenyekiti</option>
              <option value="Mjumbe">Mjumbe</option>
              <option value="Katibu">Katibu</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Ongeza
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default KamatiModal;
    