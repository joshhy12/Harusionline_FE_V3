import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import styles from '../../styles/CardDetails.module.css';
import './admin_ecards.css';

const AdminCardDetails = () => {
  const location = useLocation();
  const { card } = location.state || {};
  const [filterText, setFilterText] = useState('');
  const [statusFilter, setStatusFilter] = useState('NOT SENT');
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  const [contactData, setContactData] = useState([
    {
      name: '4ward Design',
      phone: '255787914541',
      pledgeCard: 'TZS 0.00/TZS 0.00',
      type: 'Single',
      status: 'SENT'
    },
    {
      name: 'Agael Dalali',
      phone: '255754264892',
      pledgeCard: 'TZS 100,000.00/TZS 0.00',
      type: 'Double',
      status: 'NOT SENT'
    },
    {
      name: 'Agness',
      phone: '255755524342',
      pledgeCard: 'TZS 0.00/TZS 0.00',
      type: 'Single',
      status: 'SENT'
    },
    {
      name: 'Alikerow Change Money',
      phone: '255754577247',
      pledgeCard: 'TZS 0.00/TZS 0.00',
      type: 'Double',
      status: 'SENT'
    },
    {
      name: 'ASUMWISYE MWAJEKA',
      phone: '255752412609',
      pledgeCard: 'TZS 500,000.00/TZS 0.00',
      type: 'Single',
      status: 'NOT SENT'
    },
    {
      name: 'Belinda',
      phone: '255753889110',
      pledgeCard: 'TZS 200,000.00/TZS 0.00',
      type: 'Double',
      status: 'NOT SENT'
    }
  ]);

  const handleTypeChange = (phone, newType) => {
    setContactData(prevData => 
      prevData.map(contact => 
        contact.phone === phone ? { ...contact, type: newType } : contact
      )
    );
  };

  const filteredItems = useMemo(() => {
    return contactData.filter(item => {
      const matchesFilter = (
        (item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.phone && item.phone.includes(filterText))
      );

      if (statusFilter === 'ALL') {
        return matchesFilter;
      }
      return matchesFilter && item.status === statusFilter;
    });
  }, [contactData, filterText, statusFilter]);

  const toggleContactSelection = (phone) => {
    setSelectedContacts(prev => 
      prev.includes(phone) 
        ? prev.filter(p => p !== phone) 
        : [...prev, phone]
    );
  };

  const selectAllFiltered = () => {
    const allFilteredPhones = filteredItems.map(item => item.phone);
    if (selectedContacts.length === allFilteredPhones.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(allFilteredPhones);
    }
  };

  const handleGenerateCards = () => {
    // Get selected contacts data
    const selectedContactsData = contactData.filter(contact => 
      selectedContacts.includes(contact.phone)
    );
    console.log('Generating cards for:', selectedContactsData);
    // Here you would implement the card generation logic
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <Container className={`${styles.container} admin-main-content`}>
      <Row>
        <Col md={6}>
          <img
            src={card.wallpaper}
            alt={card.name}
            className={styles.cardImage}
            onClick={handleOpenModal}
            style={{ cursor: 'pointer' }}
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
        <h2 className="stylish-heading">Contact List</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>
                <Form.Control
                  type="text"
                  placeholder="Search contacts..."
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  className="table-search-input"
                />
              </th>
              <th>
                <Button
                  variant="primary"
                  disabled={selectedContacts.length === 0}
                  className="table-action-button"
                  onClick={handleGenerateCards}
                >
                  Generate Cards ({selectedContacts.length})
                </Button>
              </th>
              <th colSpan="3">
                <div className="status-filter">
                  <span
                    className={`filter-option ${statusFilter === 'NOT SENT' ? 'active' : ''}`}
                    onClick={() => setStatusFilter('NOT SENT')}
                  >
                    Not Sent
                  </span>
                  <span
                    className={`filter-option ${statusFilter === 'SENT' ? 'active' : ''}`}
                    onClick={() => setStatusFilter('SENT')}
                  >
                    Sent
                  </span>
                  <span
                    className={`filter-option ${statusFilter === 'ALL' ? 'active' : ''}`}
                    onClick={() => setStatusFilter('ALL')}
                  >
                    All
                  </span>
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <Form.Check
                  type="checkbox"
                  checked={selectedContacts.length > 0 && selectedContacts.length === filteredItems.length}
                  onChange={selectAllFiltered}
                  label="Name"
                />
              </th>
              <th>Phone</th>
              <th>PledgeCard</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr 
                key={index}
                className={selectedContacts.includes(item.phone) ? 'selected' : ''}
                onClick={() => toggleContactSelection(item.phone)}
              >
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={selectedContacts.includes(item.phone)}
                    onChange={() => toggleContactSelection(item.phone)}
                    label={item.name}
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                <td className="phone-column">{item.phone}</td>
                <td>{item.pledgeCard}</td>
                <td onClick={(e) => e.stopPropagation()}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div
                      onClick={() => handleTypeChange(item.phone, 'Single')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        backgroundColor: item.type === 'Single' ? '#007bff' : '#e9ecef',
                        color: item.type === 'Single' ? 'white' : '#495057',
                        transition: 'all 0.3s ease',
                        fontSize: '11px'
                      }}
                    >
                      Single
                    </div>
                    <div
                      onClick={() => handleTypeChange(item.phone, 'Double')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        backgroundColor: item.type === 'Double' ? '#007bff' : '#e9ecef',
                        color: item.type === 'Double' ? 'white' : '#495057',
                        transition: 'all 0.3s ease',
                        fontSize: '11px'
                      }}
                    >
                      Double
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${item.status === 'SENT' ? 'sent' : 'not-sent'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for viewing card image */}
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
