import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const EcardModal = ({ show, handleClose, card, isAdmin }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{card?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <img src={card?.wallpaper} alt={card?.name} className="img-fluid" />
          </Col>
          <Col md={6}>
            <div className="card-details">
              <p><strong>Category:</strong> {card?.card_category}</p>
              <p><strong>Event Type:</strong> {card?.event_type}</p>
              <p><strong>Price:</strong> {card?.price}</p>
              {isAdmin && (
                <>
                  <p><strong>Template Type:</strong> {card?.template_type}</p>
                  <p><strong>WhatsApp Enabled:</strong> {card?.send_to_whatsapp}</p>
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Select>
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Select>
                  </Form.Group>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        {isAdmin && (
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EcardModal;
