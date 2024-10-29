import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Modal } from 'react-bootstrap';
import styles from '../../styles/CardDetails.module.css'; // CSS module import

const AdminCardDetails = () => {
  const location = useLocation();
  const { card } = location.state || {}; 

  const [showModal, setShowModal] = useState(false);

  if (!card) {
    return <div>Card not found</div>; 
  }

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6}>
          <img
            src={card.wallpaper}
            alt={card.name}
            className={styles.cardImage}
            onClick={handleOpenModal}
          />
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
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

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body>
          <img src={card.wallpaper} alt={card.name} className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminCardDetails;
