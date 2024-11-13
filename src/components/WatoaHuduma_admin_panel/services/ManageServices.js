import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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
    navigate('/service-provider/services/create');
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
                <Button variant="info" size="sm" className="me-2">Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(service.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageServices;
