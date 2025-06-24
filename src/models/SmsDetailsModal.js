import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SmsDetailsModal = ({ show, handleClose, sms }) => {
  if (!sms) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>SMS Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="sms-details">
          <p><strong>Date & Time:</strong> {sms.muda}</p>
          <p><strong>Recipient:</strong> {sms.recipientName}</p>
          <p><strong>Phone Number:</strong> {sms.phoneNumber}</p>
          <p><strong>Status:</strong> 
            <span style={{
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: sms.status === 'Success' ? '#e8edfb' : '#ffebee',
              color: sms.status === 'Success' ? '#0066ee' : '#d32f2f',
              marginLeft: '10px'
            }}>
              {sms.status}
            </span>
          </p>
          <p><strong>Full Message:</strong></p>
          <div className="message-box" style={{
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
            whiteSpace: 'pre-wrap'
          }}>
            {sms.message}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SmsDetailsModal;
