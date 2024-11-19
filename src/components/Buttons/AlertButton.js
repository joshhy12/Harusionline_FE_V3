import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function AlertButtons() {
  const [showModal, setShowModal] = useState({
    delete: false,
    logout: false,
    register: false,
    login: false,
    upload: false,
    import: false
  });

  const handleShowModal = (type) => {
    setShowModal({ ...showModal, [type]: true });
  };

  const handleCloseModal = (type) => {
    setShowModal({ ...showModal, [type]: false });
  };

  const handleConfirm = (type) => {
    setShowModal({ ...showModal, [type]: false });
  };

  return (
    <div className="alert-container">
      {/* Delete Button and Modal */}
      <Button variant="danger" onClick={() => handleShowModal('delete')}>
        Delete Item
      </Button>
      <Modal show={showModal.delete} onHide={() => handleCloseModal('delete')}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal('delete')}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleConfirm('delete')}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Logout Button and Modal */}
      <Button variant="secondary" onClick={() => handleShowModal('logout')}>
        Logout
      </Button>
      <Modal show={showModal.logout} onHide={() => handleCloseModal('logout')}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal('logout')}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleConfirm('logout')}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add similar Modal components for register, login, upload, and import */}
    </div>
  );
}

export default AlertButtons;