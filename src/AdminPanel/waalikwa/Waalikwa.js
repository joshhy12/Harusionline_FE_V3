  import React, { useState } from 'react';
  import DataTable from 'react-data-table-component';
  import { Form, Button } from 'react-bootstrap';
  import {  } from 'react-icons/fa';
  import 'bootstrap/dist/css/bootstrap.min.css';

  const Waalikwa = () => {
    const [perPage, setPerPage] = useState(100);
    const [searchTerm, setSearchTerm] = useState('');
      const visitorsData = [
        { id: 1, name: 'John Doe', phone: '0753123456', cardType: 'Single', cardNumber: '14A' },
        { id: 2, name: 'Jane Smith', phone: '0753987654', cardType: 'Double', cardNumber: '39F' },
        { id: 3, name: 'Robert White', phone: '0753765432', cardType: 'Single', cardNumber: '1A' },
        { id: 4, name: 'Neema Johnson', phone: '0753234567', cardType: 'Double', cardNumber: '22B' },
        { id: 5, name: 'Michael Brown', phone: '0753345678', cardType: 'Single', cardNumber: '45C' },
      ];

    const handleDownloadPDF = () => {
      // Implement PDF download logic here
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
      { name: 'Card Number', selector: (row) => row.cardNumber, sortable: true },
     
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
            <div className="buttons-container">
              <Button variant="outline-primary" size="sm" onClick={handleDownloadPDF}>
                Waalikwa PDF
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
      </div>
    );
  };

  export default Waalikwa;