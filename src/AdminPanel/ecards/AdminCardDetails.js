import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Modal, Badge, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import styles from '../../styles/CardDetails.module.css';

const AdminCardDetails = () => {
  const location = useLocation();
  const { card } = location.state || {};
  const [showModal, setShowModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [statusFilter, setStatusFilter] = useState('NOT SENT');
  const [contactData, setContactData] = useState([
    {
      name: '4ward Design',
      phone: '255787914541',
      pledgeCard: 'TZS 0.00/TZS 0.00',
      type: 'Single Double',
      status: 'SENT'
    },
    {
      name: 'Agael Dalali',
      phone: '255754264892',
      pledgeCard: 'TZS 100,000.00/TZS 0.00',
      type: 'Single Double',
      status: 'NOT SENT'
    },
    {
      name: 'Agness',
      phone: '255755524342',
      pledgeCard: 'TZS 0.00/TZS 0.00',
      type: 'Single Double',
      status: 'SENT'
    },
    {
      name: 'Alikerow Change Money',
      phone: '255754577247',
      pledgeCard: 'TZS 0.00/TZS 0.00',
      type: 'Single Double',
      status: 'SENT'
    },
    {
      name: 'ASUMWISYE MWAJEKA',
      phone: '255752412609',
      pledgeCard: 'TZS 500,000.00/TZS 0.00',
      type: 'Single Double',
      status: 'NOT SENT'
    },
    {
      name: 'Belinda',
      phone: '255753889110',
      pledgeCard: 'TZS 200,000.00/TZS 0.00',
      type: 'Single Double',
      status: 'NOT SENT'
    }
  ]);

  const handleTypeChange = (row, value) => {
    const updatedData = contactData.map(item =>
      item.phone === row.phone ? { ...item, type: value } : item
    );
    setContactData(updatedData);
  };

  const filteredItems = useMemo(() => {
    return contactData.filter(item => {
      const matchesFilter = (
        (item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.phone && item.phone.includes(filterText)) ||
        (item.pledgeCard && item.pledgeCard.toLowerCase().includes(filterText.toLowerCase()))
      );

      if (statusFilter === 'ALL') {
        return matchesFilter;
      }
      return matchesFilter && item.status === statusFilter;
    });
  }, [contactData, filterText, statusFilter]);

  const columns = [
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Phone', selector: (row) => row.phone, sortable: true },
    { name: 'PledgeCard', selector: (row) => row.pledgeCard, sortable: true },
    {
      name: 'CardType',
      cell: (row) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <div
            onClick={() => handleTypeChange(row, 'Single')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              cursor: 'pointer',
              backgroundColor: row.type === 'Single' ? '#007bff' : '#e9ecef',
              color: row.type === 'Single' ? 'white' : '#495057',
              transition: 'all 0.3s ease'
            }}
          >
            Single
          </div>
          <div
            onClick={() => handleTypeChange(row, 'Double')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              cursor: 'pointer',
              backgroundColor: row.type === 'Double' ? '#007bff' : '#e9ecef',
              color: row.type === 'Double' ? 'white' : '#495057',
              transition: 'all 0.3s ease'
            }}
          >
            Double
          </div>
        </div>
      ),
      sortable: true
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span style={{
          padding: '6px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: row.status === 'SENT' ? '#e0f2e9' : '#ffebee',
          color: row.status === 'SENT' ? '#2e7d32' : '#d32f2f'
        }}>
          {row.status}
        </span>
      )
    }
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '40px',
      },
      highlightOnHoverStyle: {
        backgroundColor: '#f5f5f5',
        borderBottomColor: '#FFFFFF',
        borderRadius: '25px',
        outline: '1px solid #FFFFFF',
      },
    },
    headCells: {
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: row => selectedRows.some(selectedRow => selectedRow.phone === row.phone),
      style: {
        backgroundColor: '#e9eefb',
      },
    },
  ];

  const [clearRows, setClearRows] = useState(false);

  const handleClearRows = () => {
    setSelectedRows([]);
    setClearRows(!clearRows);
  };

  const handleSendCards = () => {
    console.log('Sending cards to:', selectedRows);
  };

  const handleRowClicked = (row) => {
    const isSelected = selectedRows.some(selectedRow => selectedRow.phone === row.phone);
    const newSelectedRows = isSelected
      ? selectedRows.filter(selectedRow => selectedRow.phone !== row.phone)
      : [...selectedRows, row];
    setSelectedRows(newSelectedRows);
    setClearRows(!clearRows);
  };

  const subHeaderComponent = (
    <div className={styles.filterContainer}>
      <Form.Control
        type="text"
        placeholder="Search contacts..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ maxWidth: '300px', flex: '1 1 auto', marginBottom: '10px' }}
      />
      <Button
        variant="primary"
        onClick={handleSendCards}
        disabled={selectedRows.length === 0}
        style={{
          margin: '0 20px',
          backgroundColor: '#e9eefb',
          color: '#0066ff',
          border: 'none',
          flex: '1 1 auto',
          marginBottom: '10px'
        }}
      >
         Tengeneza kadi ({selectedRows.length})
      </Button>

      <div className={styles.filterContainer}>
        <div
          onClick={() => setStatusFilter('NOT SENT')}
          className={`${styles.filterButton} ${statusFilter === 'NOT SENT' ? styles.notSent : styles.default}`}
        >
          Not Sent
        </div>
        <div
          onClick={() => setStatusFilter('SENT')}
          className={`${styles.filterButton} ${statusFilter === 'SENT' ? styles.sent : styles.default}`}
        >
          Sent
        </div>
        <div
          onClick={() => setStatusFilter('ALL')}
          className={`${styles.filterButton} ${statusFilter === 'ALL' ? styles.all : styles.default}`}
        >
          All
        </div>
      </div>
    </div>
  );

  if (!card) {
    return <div>Card not found</div>;
  }


  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6}>
          <img
            src={card.wallpaper}
            alt={card.name}
            className={styles.cardImage}
            onClick={handleOpenModal}
          />
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>
                <strong>Category:</strong> {card.card_category} <br />
                <strong>Price:</strong> {card.price} <br />
                <strong>Send to WhatsApp:</strong> {card.send_to_whatsapp ? 'Yes' : 'No'} <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <div className="mt-4">
        <h2 className="text-left" style={{ color: '#24366b' }}>Contact List</h2>
        <div className="table-scroll">
          <div className="datatable-wrapper">
            <DataTable
              columns={columns}
              data={filteredItems}
              pagination
              paginationRowsPerPageOptions={[10, 20, 50]}
              highlightOnHover
              striped
              dense
              responsive
              customStyles={customStyles}
              conditionalRowStyles={conditionalRowStyles}
              onRowClicked={handleRowClicked}
              clearSelectedRows={clearRows}
              subHeader
              subHeaderComponent={subHeaderComponent}
              persistTableHead
            />
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body>
          <img src={card.wallpaper} alt={card.name} className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminCardDetails;