import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Form, Button } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import { generateWaalikwaPDF } from './WaalikwaPDF';
import WaalikwaModal from '../../models/WaalikwaModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Waalikwa = () => {
  const [perPage, setPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(null);

  const visitorsData = [
    { id: 1, name: 'John Doe', phone: '0753123456', cardType: 'Single', cardNumber: '14A' },
    { id: 2, name: 'Jane Smith', phone: '0753987654', cardType: 'Double', cardNumber: '39F' },
    { id: 3, name: 'Robert White', phone: '0753765432', cardType: 'Single', cardNumber: '1A' },
    { id: 4, name: 'Neema Johnson', phone: '0753234567', cardType: 'Double', cardNumber: '22B' },
    { id: 5, name: 'Michael Brown', phone: '0753345678', cardType: 'Single', cardNumber: '45C' },
  ];

  const handleDownloadPDF = () => {
    generateWaalikwaPDF(visitorsData);
  };

  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1,
      width: '60px'
    },
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Phone', selector: (row) => row.phone, sortable: true },
    { name: 'Card Type', selector: (row) => row.cardType, sortable: true },
    { name: 'Card Number', selector: (row) => row.cardNumber, sortable: true }
  ];

  const filteredData = visitorsData.filter(visitor =>
    visitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visitor.phone.includes(searchTerm)
  );

  return (
    <div className="container">
      <div className="row">
        <div className="container-fluid mt-4">
          <h2 className="text-center" style={{ color: '#24366b' }}>Wageni Waalikwa</h2>
          
          <div className="d-flex justify-content-between mb-3">
            <Button variant="primary" onClick={() => setShowModal(true)}>
              <FaUserPlus className="me-2" />
              Add New Guest
            </Button>
            <Button variant="outline-primary" onClick={handleDownloadPDF}>
              Waalikwa PDF
            </Button>
          </div>

          <Form.Group controlId="searchInput" className="mb-3">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by name or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>

          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            paginationRowsPerPageOptions={[100, 200, 500]}
            paginationPerPage={perPage}
            onChangeRowsPerPage={setPerPage}
            highlightOnHover
            striped
            dense
            responsive
          />
        </div>
      </div>

      <WaalikwaModal 
        show={showModal}
        handleClose={() => setShowModal(false)}
        guest={selectedGuest}
      />
    </div>
  );
};

export default Waalikwa;
