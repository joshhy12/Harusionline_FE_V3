import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/WhatsappDetailsModal.css';

const WhatsappDetailsModal = ({ show, handleClose, message }) => {
  if (!message) return null;

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return '-';
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const getStatusStyle = (status) => {
    if (status.includes('Read')) return 'status-read';
    if (status.includes('Delivered')) return 'status-delivered';
    return 'status-sent';
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" className="whatsapp-modal">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="text-primary">Message Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <div className="message-details">
          <div className="detail-card">
            <div className="detail-row">
              <strong>Recipient Name:</strong>
              <span className="detail-value">{message.name}</span>
            </div>
            <div className="detail-row">
              <strong>Phone Number:</strong>
              <span className="detail-value">{message.number}</span>
            </div>
            <div className="detail-row">
              <strong>Status:</strong>
              <span className={`status-badge ${getStatusStyle(message.status)}`}>
                {message.status}
              </span>
            </div>
            <div className="detail-row">
              <strong>Sent Time:</strong>
              <span className="detail-value">{formatDateTime(message.sentTime)}</span>
            </div>
            <div className="detail-row">
              <strong>Delivery Time:</strong>
              <span className="detail-value">{formatDateTime(message.deliveryTime)}</span>
            </div>
            <div className="detail-row message-section">
              <strong>Message:</strong>
              <div className="message-content">{message.reply}</div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <Button variant="secondary" onClick={handleClose} className="close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WhatsappDetailsModal;
