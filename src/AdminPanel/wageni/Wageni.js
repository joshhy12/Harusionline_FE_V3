import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaUserFriends, FaDonate, FaWhatsapp, FaEdit, FaTrash, FaDownload } from 'react-icons/fa';
import DataTable from 'react-data-table-component';
import { Form, Button, Modal } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
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
  const [previewData, setPreviewData] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

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

  const expectedHeaders = ['name', 'phone_number', 'email', 'pledge', 'fund', 'CardType'];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);

        // Map data to expected format
        const formattedData = data.map(row => ({
          name: row.name || '',
          phone_number: row.phone_number || '',
          email: row.email || '',
          pledge: row.pledge || '',
          fund: row.fund || '',
          CardType: row.CardType || ''
        }));

        setPreviewData(formattedData);
        setShowPreview(true);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleUpdate = (row) => {
    // Implement update logic here
  };

  const handleDelete = (row) => {
    // Implement delete logic here
  };

  const handleDownloadExcel = () => {
    // Create sample data
    const sampleData = [
      {
        name: 'Mr and Mrs Lucas',
        phone_number: '255123456789',
        email: 'lucas@gmail.com',
        pledge: 'TZS 50,000',
        fund: 'General',
        CardType: 'Single/Double'
      }
    ];

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(sampleData);
    XLSX.utils.book_append_sheet(wb, ws, "Template");

    // Save file
    XLSX.writeFile(wb, "excel_format_sample.xlsx");
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

  const [previewRowsToShow, setPreviewRowsToShow] = useState(20);


  return (
    <div className="container">
      <div className="row">
        <div className="container-fluid mt-4">
          <h1 className="stylish-heading text-center" style={{ color: '#4169e1' }}>Wageni Wa Shughuli</h1>


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
                    onChange={(e) => setNewWageni({ ...newWageni, jina: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Kikundi</Form.Label>
                  <Form.Control
                    type="text"
                    value={newWageni.kikundi}
                    onChange={(e) => setNewWageni({ ...newWageni, kikundi: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Namba</Form.Label>
                  <Form.Control
                    type="text"
                    value={newWageni.namba}
                    onChange={(e) => setNewWageni({ ...newWageni, namba: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mchango</Form.Label>
                  <Form.Control
                    type="text"
                    value={newWageni.mchango}
                    onChange={(e) => setNewWageni({ ...newWageni, mchango: e.target.value })}
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

          <Modal show={showMultipleModal} onHide={() => setShowMultipleModal(false)} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Import Excel File</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-4">
                <input
                  type="file"
                  className="form-control"
                  accept=".xlsx, .xls"
                  onChange={handleFileUpload}
                />
              </div>

              <p className="text-muted mb-2">Click to download</p>
              <div className="mb-4">
                <a href="#" className="link-custom" onClick={handleDownloadExcel}>
                  Excel format <FaDownload />
                </a>
              </div>


              {showPreview && previewData.length > 0 && (
                <div className="preview-container">
                  <h5>Preview</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="text-muted mb-0">Showing {Math.min(previewRowsToShow, previewData.length)} of {previewData.length} records</p>
                    <div className="d-flex align-items-center">
                      <label htmlFor="rowsToShow" className="me-2 mb-0">Rows to display:</label>
                      <Form.Select
                        id="rowsToShow"
                        className="form-select-sm"
                        style={{ width: '100px' }}
                        value={previewRowsToShow}
                        onChange={(e) => setPreviewRowsToShow(Number(e.target.value))}
                      >
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value={previewData.length}>All</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th>Pledge</th>
                          <th>Fund</th>
                          <th>Card Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {previewData.slice(0, previewRowsToShow).map((row, index) => (
                          <tr key={index}>
                            {Object.values(row).map((cell, i) => (
                              <td key={i}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}




            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowMultipleModal(false)}>
                Cancel
              </Button>
              {showPreview && (
                <Button
                  variant="primary"
                  onClick={() => {
                    // Handle import confirmation
                    console.log('Importing data:', previewData);
                    setShowMultipleModal(false);
                  }}
                >
                  Confirm Import
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Wageni;