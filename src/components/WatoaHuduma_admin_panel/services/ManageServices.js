import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: ''
  });

  useEffect(() => {
    // Fetch services data
    fetchServices();
  }, []);

  const fetchServices = async () => {
    // API call to fetch services
    // Placeholder data
    setServices([
      { id: 1, title: 'Service 1', description: 'Description 1', price: '100', category: 'Category 1' },
      { id: 2, title: 'Service 2', description: 'Description 2', price: '200', category: 'Category 2' }
    ]);
  };

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ title: '', description: '', price: '', category: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to add/update service
    handleClose();
    fetchServices();
  };

  const handleDelete = async (id) => {
    // API call to delete service
    fetchServices();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Services</h2>
        <Button variant="primary" onClick={handleAdd}>Add New Service</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.title}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
              <td>{service.category}</td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => setShowModal(true)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(service.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageServices;