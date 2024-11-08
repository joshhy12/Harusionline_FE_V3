import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';

const PhotoUploadModal = ({ show, handleClose, handleUpload, category }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload {category.charAt(0).toUpperCase() + category.slice(1)} Photos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Select Photos</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleUpload(e, category)}
            />
          </Form.Group>
          <div className="text-center">
            <FaUpload className="mb-2" size={24} />
            <p>Drag and drop your photos here or click to browse</p>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PhotoUploadModal;
