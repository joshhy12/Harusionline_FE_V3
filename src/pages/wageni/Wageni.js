import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import { FaPaperPlane, FaUserFriends, FaDonate, FaWhatsapp, FaEdit, FaTrash, FaDownload  } from 'react-icons/fa';

import DataTable from 'react-data-table-component';
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './wageni.css';

const Wageni = () => {
  const [perPage, setPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showMultipleModal, setShowMultipleModal] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const [newWageni, setNewWageni] = useState({
    jina: '',
    kikundi: '',
    namba: '',
    mchango: '' 
  });

  const visitorsData = [
    { id: 1, jina: 'John Doe', kikundi: 'Kikundi A', namba: '0753123456', mchango: 'TZS 100,000' },
    { id: 2, jina: 'Jane Smith', kikundi: 'Kikundi B', namba: '0753987654', mchango: 'TZS 50,000' },
    { id: 3, jina: 'Robert White', kikundi: 'Kikundi A', namba: '0753765432', mchango: 'TZS 70,000' },
    { id: 4, jina: 'Neema Johnson', kikundi: 'Kikundi C', namba: '0753234567', mchango: 'TZS 80,000' },
    { id: 5, jina: 'Michael Brown', kikundi: 'Kikundi B', namba: '0753345678', mchango: 'TZS 65,000' },
    { id: 6, jina: 'Emma Davis', kikundi: 'Kikundi A', namba: '0753456789', mchango: 'TZS 90,000' },
    { id: 7, jina: 'James Wilson', kikundi: 'Kikundi C', namba: '0753567890', mchango: 'TZS 55,000' },
    { id: 8, jina: 'Linda Anderson', kikundi: 'Kikundi B', namba: '0753678901', mchango: 'TZS 75,000' },
    { id: 9, jina: 'Thomas Taylor', kikundi: 'Kikundi A', namba: '0753789012', mchango: 'TZS 85,000' },
    { id: 10, jina: 'Patricia Martin', kikundi: 'Kikundi C', namba: '0753890123', mchango: 'TZS 95,000' },
    { id: 11, jina: 'George Thompson', kikundi: 'Kikundi B', namba: '0753901234', mchango: 'TZS 60,000' },
    { id: 12, jina: 'Elizabeth Clark', kikundi: 'Kikundi A', namba: '0753012345', mchango: 'TZS 70,000' },
    { id: 13, jina: 'Daniel Lee', kikundi: 'Kikundi C', namba: '0753112233', mchango: 'TZS 80,000' },
    { id: 14, jina: 'Maria Garcia', kikundi: 'Kikundi B', namba: '0753223344', mchango: 'TZS 90,000' },
    { id: 15, jina: 'David Miller', kikundi: 'Kikundi A', namba: '0753334455', mchango: 'TZS 100,000' },
    { id: 16, jina: 'Susan Wilson', kikundi: 'Kikundi C', namba: '0753445566', mchango: 'TZS 65,000' },
    { id: 17, jina: 'Joseph Moore', kikundi: 'Kikundi B', namba: '0753556677', mchango: 'TZS 75,000' },
    { id: 18, jina: 'Margaret White', kikundi: 'Kikundi A', namba: '0753667788', mchango: 'TZS 85,000' },
    { id: 19, jina: 'Charles Jackson', kikundi: 'Kikundi C', namba: '0753778899', mchango: 'TZS 95,000' },
    { id: 20, jina: 'Nancy Davis', kikundi: 'Kikundi B', namba: '0753889900', mchango: 'TZS 55,000' },
    { id: 21, jina: 'Christopher Lee', kikundi: 'Kikundi A', namba: '0753990011', mchango: 'TZS 70,000' },
    { id: 22, jina: 'Amanda Brown', kikundi: 'Kikundi C', namba: '0753001122', mchango: 'TZS 80,000' },
    { id: 23, jina: 'Kevin Wilson', kikundi: 'Kikundi B', namba: '0753112233', mchango: 'TZS 90,000' },
    { id: 24, jina: 'Michelle Taylor', kikundi: 'Kikundi A', namba: '0753223344', mchango: 'TZS 100,000' },
    { id: 25, jina: 'Steven Johnson', kikundi: 'Kikundi C', namba: '0753334455', mchango: 'TZS 60,000' },
    { id: 26, jina: 'Laura Martin', kikundi: 'Kikundi B', namba: '0753445566', mchango: 'TZS 70,000' },
    { id: 27, jina: 'Ronald Thompson', kikundi: 'Kikundi A', namba: '0753556677', mchango: 'TZS 80,000' },
    { id: 28, jina: 'Lisa Anderson', kikundi: 'Kikundi C', namba: '0753667788', mchango: 'TZS 90,000' },
    { id: 29, jina: 'Mark Davis', kikundi: 'Kikundi B', namba: '0753778899', mchango: 'TZS 100,000' },
    { id: 30, jina: 'Sandra Clark', kikundi: 'Kikundi A', namba: '0753889900', mchango: 'TZS 65,000' },
    { id: 31, jina: 'Paul White', kikundi: 'Kikundi C', namba: '0753990011', mchango: 'TZS 75,000' },
    { id: 32, jina: 'Betty Moore', kikundi: 'Kikundi B', namba: '0753001122', mchango: 'TZS 85,000' },
    { id: 33, jina: 'Edward Lee', kikundi: 'Kikundi A', namba: '0753112233', mchango: 'TZS 95,000' },
    { id: 34, jina: 'Helen Garcia', kikundi: 'Kikundi C', namba: '0753223344', mchango: 'TZS 55,000' },
    { id: 35, jina: 'Frank Miller', kikundi: 'Kikundi B', namba: '0753334455', mchango: 'TZS 70,000' },
    { id: 36, jina: 'Carol Wilson', kikundi: 'Kikundi A', namba: '0753445566', mchango: 'TZS 80,000' },
    { id: 37, jina: 'Donald Brown', kikundi: 'Kikundi C', namba: '0753556677', mchango: 'TZS 90,000' },
    { id: 38, jina: 'Ruth Taylor', kikundi: 'Kikundi B', namba: '0753667788', mchango: 'TZS 100,000' },
    { id: 39, jina: 'Gary Johnson', kikundi: 'Kikundi A', namba: '0753778899', mchango: 'TZS 60,000' },
    { id: 40, jina: 'Dorothy Martin', kikundi: 'Kikundi C', namba: '0753889900', mchango: 'TZS 70,000' },
    // Add more data as needed
  ];

  const handleDownloadPDF = () => {
    // Implement PDF download logic here
  };

  const handleAddWageni = () => {
    // Implement add wageni logic here
    setShowModal(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log("File chosen:", file.name);
    }
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
    { name: 'Jina', selector: (row) => row.jina, sortable: true },
    { name: 'Kikundi', selector: (row) => row.kikundi, sortable: true },
    { name: 'Namba', selector: (row) => row.namba, sortable: true },
    { name: 'Ahadi / Mchango', selector: (row) => row.mchango, sortable: true },
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

  const filteredData = visitorsData.filter(visitor =>
    visitor.jina.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visitor.namba.includes(searchTerm)
  );

  return (
    <div className="container">
      <div className="row">
        <div className="container-fluid mt-4">
        <h2 className="text-center" style={{ color: '#24366b' }}>Wageni Wa Shughuli</h2>

        <div className="dashboard row mt-4">
            <div className="dashboard col text-center">
              <Link to="" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaPaperPlane className="mb-2" size={24} />
                    <div>Tuma Taarifa</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaDonate className="mb-2" size={24} />
                    <div>Kumbushia Michango</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaWhatsapp className="mb-2" size={24} />
                    <div>Tuma Mialiko</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="/admin/groups" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaUserFriends className="mb-2" size={24} />
                    <div>Makundi </div>
                  </div>
                </div>
              </Link>
            </div>
          </div><br></br>

          <div className="buttons-container">
            <Button variant="outline-primary" size="sm" onClick={() => setShowModal(true)}>
              Ongeza Mgeni
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => setShowMultipleModal(true)}>
              Import Contact
            </Button>
            <Button variant="outline-primary" size="sm" onClick={handleDownloadPDF}>
              Download PDF
            </Button>
          </div>
          <div className="search-box">
            <Form.Group controlId="searchInput">
              <Form.Label>Search Visitors</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search by name or number"
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

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Wageni</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Jina</Form.Label>
                  <Form.Control
                    type="text"
                    value={newWageni.jina}
                    onChange={(e) => setNewWageni({...newWageni, jina: e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Kikundi</Form.Label>
                  <Form.Control
                    type="text"
                    value={newWageni.kikundi}
                    onChange={(e) => setNewWageni({...newWageni, kikundi: e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Namba</Form.Label>
                  <Form.Control
                    type="text"
                    value={newWageni.namba}
                    onChange={(e) => setNewWageni({...newWageni, namba: e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mchango</Form.Label>
                  <Form.Control
                    type="text"
                    value={newWageni.mchango}
                    onChange={(e) => setNewWageni({...newWageni, mchango: e.target.value})}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddWageni}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showMultipleModal} onHide={() => setShowMultipleModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Import CSV / Excel File</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="text-muted mb-4">Upload a CSV or Excel file with contacts</p>
              <p className="text-muted mb-2">Click to download</p>
              <div className="mb-3">
                <a href="#" className="link-custom">CSV format <FaDownload /></a>
              </div>
              <div className="mb-4">
                <a href="#" className="link-custom">Excel format <FaDownload /></a>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-4">
                <input
                  type="file"
                  className="form-control-file mr-2"
                  accept=".csv, .xlsx"
                  onChange={handleFileUpload}
                />
                <span className="text-muted ml-2">{fileName}</span>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowMultipleModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Wageni;