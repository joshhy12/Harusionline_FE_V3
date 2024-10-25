import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Form } from 'react-bootstrap'; // For the Show Entries dropdown
import './wageni.css'; 


const Wageni = () => {
  const [perPage, setPerPage] = useState(10); // Entries dropdown

  // Sample Data
  const visitorsData = [
    { id: 1, name: 'John Doe', position: 'Security', office: 'New York', age: 35, startDate: '2021/01/01', salary: '$3000' },
    { id: 2, name: 'Jane Smith', position: 'Receptionist', office: 'Los Angeles', age: 28, startDate: '2020/05/10', salary: '$2500' },
    { id: 3, name: 'Robert White', position: 'Admin', office: 'Chicago', age: 40, startDate: '2019/08/15', salary: '$4000' },
    // Add more data as needed
  ];

  // Table Columns Definition
  const columns = [
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Position', selector: (row) => row.position, sortable: true },
    { name: 'Office', selector: (row) => row.office, sortable: true },
    { name: 'Age', selector: (row) => row.age, sortable: true },
    { name: 'Start date', selector: (row) => row.startDate, sortable: true },
    { name: 'Salary', selector: (row) => row.salary, sortable: true },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Wageni (Visitors) Management</h1>
      
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">About Visitors Management</h5>
          <p className="card-text">
            This section allows you to manage and track visitors to the premises. You can register new visitors,
            view visitor history, manage check-in/check-out times, and generate visitor reports. The system helps
            maintain security and keeps accurate records of all people visiting the facility.
          </p>
        </div>
      </div>

      {/* Entries Dropdown */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Group controlId="entriesDropdown" className="d-flex align-items-center">
          <Form.Label className="mr-2">Show</Form.Label>
          <Form.Control
            as="select"
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="w-auto"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </Form.Control>
          <Form.Label className="ml-2">entries</Form.Label>
        </Form.Group>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={visitorsData}
        pagination
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        paginationPerPage={perPage}
        searchable
        defaultSortFieldId={1}
        highlightOnHover
        striped
        dense
      />
    </div>
  );
};

export default Wageni;
