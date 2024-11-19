import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function InternetModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check internet connection when offline
    window.addEventListener('offline', () => {
      setShowModal(true);
    });

    // Check when connection is restored
    window.addEventListener('online', () => {
      setShowModal(false);
    });

    return () => {
      window.removeEventListener('offline', () => setShowModal(true));
      window.removeEventListener('online', () => setShowModal(false));
    };
  }, []);

  return (
    <Modal show={showModal} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>No Internet Connection</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please check your internet connection and try again.
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="primary" 
          onClick={() => window.location.reload()}
        >
          Retry Connection
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InternetModal;
