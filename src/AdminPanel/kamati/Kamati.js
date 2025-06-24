import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Form, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import KamatiModal from '../../models/KamatiModal';

const Kamati = () => {
  const [perPage, setPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const kamatiData = [
    { id: 1, name: 'Joshy lucas', phone: '+255 123 456 789', role: 'Chairman', status: 'Active' },
    { id: 2, name: 'Janneth Smith', phone: '+255 987 654 321', role: 'Secretary', status: 'Inactive' },
    { id: 3, name: 'Athu Membe', phone: '+255 123 456 789', role: 'Chairman', status: 'Active' },
    { id: 4, name: 'Kikwete Karia', phone: '+255 987 654 321', role: 'Secretary', status: 'Inactive' },
    { id: 5, name: 'Magufuli Karia', phone: '+255 123 456 789', role: 'Chairman', status: 'Active' }
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
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Phone', selector: (row) => row.phone, sortable: true },
    { name: 'Role', selector: (row) => row.role, sortable: true },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <div style={{ color: row.status === 'Active' ? '#0066ee' : 'red' }}>
          {row.status}
        </div>
      )
    },
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

  const filteredData = kamatiData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.phone.includes(searchTerm)
  );

  return (
    <div className="container">
      <div className="row">
        <div className="container-fluid mt-4">
          <h2 className="text-center" style={{ color: '#24366b' }}>Kamati Kuu</h2>
          <div className="buttons-container d-flex gap-2 mb-3">
            <Button variant="outline-primary" size="sm" onClick={handleDownloadPDF}>
              Kamati PDF
            </Button>
            <Button variant="primary" size="sm" onClick={handleShow}>
              Ongeza Mwanakamati
            </Button>
          </div>
          <div className="search-box">
            <Form.Group controlId="searchInput">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search by name or phone"
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

      <KamatiModal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Kamati;
