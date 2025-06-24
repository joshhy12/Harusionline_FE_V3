import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Modal } from 'react-bootstrap';
import styles from '../styles/CardDetails.module.css'; // Import the CSS module

const CardDetails = () => {
  const location = useLocation();
  const { card } = location.state || {}; // Get card data from location state

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  if (!card) {
    return <div>Card not found</div>; // Handle case when card data is not found
  }

  const handleOpenModal = () => {
    setShowModal(true); // Show modal when clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal when dismissed
  };

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6} xs={12} className="mb-4 mb-md-0">
          <img
            src={card.wallpaper} // Assuming wallpaper is a single image URL
            alt={card.name}
            className={styles.cardImage} // Use CSS module class
            onClick={handleOpenModal} // Open modal on image click
          />
        </Col>
        <Col md={6} xs={12} className="d-flex align-items-start flex-column">
          <Card className={`${styles.card} h-100 w-100 overflow-auto`}>
            <Card.Body className="text-wrap">
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>
                <strong>Category:</strong> {card.card_category} <br />
                <strong>Price:</strong> {card.price} <br />
                <strong>Send to WhatsApp:</strong> {card.send_to_whatsapp ? 'Yes' : 'No'} <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for fullscreen view */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body className="p-0">
          <img
            src={card.wallpaper}
            alt={card.name}
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }} // Make sure the image covers full width
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CardDetails;
