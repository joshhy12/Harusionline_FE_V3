import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Form, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import MichangoModal from '../../models/MichangoModal';

const Michango = () => {
  const [perPage, setPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const data = [
    {
      fullName: 'John Doe',
      amount: '10,000',
      recordedBy: 'Admin User',
      date: '2024-01-20'
    },
    {
      fullName: 'Jane Smith',
      amount: '15,000',
      recordedBy: 'Admin User',
      date: '2024-01-21'
    },
    {
      fullName: 'Robert Johnson',
      amount: '20,000',
      recordedBy: 'Admin User',
      date: '2024-01-22'
    }
  ];

  const handleDownloadPDF = () => {
    // Implement PDF download logic here
  };

  const handleUpdate = (row) => {
    // Implement update logic here
  };

  const handleDelete = (row) => {
    // Implement delete logic here
  };

  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1,
      width: '60px'
    },
    { name: 'Full Name', selector: (row) => row.fullName, sortable: true },
    { name: 'Amount', selector: (row) => row.amount, sortable: true },
    { name: 'Recorded By', selector: (row) => row.recordedBy, sortable: true },
    { name: 'Date', selector: (row) => row.date, sortable: true },
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <FaEdit className="text-primary me-2 cursor-pointer" style={{ fontSize: '1.2rem' }} onClick={() => handleUpdate(row)} />
          <FaTrash className="text-danger cursor-pointer" style={{ fontSize: '1.2rem' }} onClick={() => handleDelete(row)} />
        </>
      ),
    },
  ];

  const filteredData = data.filter(item =>
    item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="container-fluid mt-4">
          <h2 className="text-center" style={{ color: '#24366b' }}>Michango Management</h2>
          <div className="buttons-container d-flex gap-2 mb-3">
            <Button variant="outline-primary" size="sm" onClick={handleDownloadPDF}>
              Funds PDF
            </Button>
            <Button variant="primary" size="sm" onClick={handleShow}>
              Add New Fund
            </Button>
          </div>
          <div className="search-box">
            <Form.Group controlId="searchInput">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="table-scroll">
            <div className="datatable-wrapper">
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
        </div>
      </div>

      <MichangoModal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Michango;
