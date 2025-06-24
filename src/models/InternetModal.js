import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/InternetModal.css'; // We'll create this file

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
    <Modal 
      show={showModal} 
      backdrop="static" 
      keyboard={false}
      centered
      className="internet-modal"
    >
      <Modal.Header className="internet-modal-header">
        <Modal.Title>
          <i className="fa fa-wifi internet-icon"></i> No Internet Connection
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="internet-modal-body">
        <div className="text-center mb-3">
          <img 
            src="/images/no-internet.png" 
            alt="No Internet Connection" 
            className="no-internet-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <p className="internet-message">
          You are currently offline. Please check your internet connection and try again.
        </p>
      </Modal.Body>
      <Modal.Footer className="internet-modal-footer">
        <Button 
          variant="primary" 
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          <i className="fa fa-refresh me-2"></i>
          Retry Connection
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InternetModal;
