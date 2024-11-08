import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getWatoaHuduma } from '../../api/api_WatoaHuduma';
import styles from '../styles/WatoaHuduma.module.css';

const WatoaHuduma = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTab, setModalTab] = useState('login');

  useEffect(() => {
    const fetchServiceProviders = async () => {
      const data = await getWatoaHuduma();
      if (data) {
        setServiceProviders(data);
      }
    };
    fetchServiceProviders();
  }, []);

  const filteredProviders = serviceProviders.filter((provider) => {
    const matchesCategory = filter === 'all' || provider.categories.some(category => category.category.toLowerCase() === filter);
    const matchesName = provider.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategorySearch = provider.categories.some(category => category.category.toLowerCase().includes(searchTerm.toLowerCase()));

    return (matchesCategory && (matchesName || matchesCategorySearch));
  });

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted');
  };

  return (
    <Container className={styles.container}>
      <br></br><h1 className={`text-center mb-4 ${styles.heading}`}>Watoa Huduma</h1>

      {/* Login/Register Button */}
      <div className="text-center mb-4">
        <Button variant="primary" onClick={handleModalShow} className={styles.loginRegisterBtn}>
          Jisajili / Ingia kama Mtoa Huduma
        </Button>
      </div>

      {/* Search Input */}
      <Form className="mb-4">
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Search by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
      </Form>

      {/* Filter Buttons */}
      <div className={styles.filterButtons}>
        {['all', 'mapambo', 'vinywaji', 'mapishi'].map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.filterButtonActive : ''}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Service Providers Cards */}
      <Row className={styles.eventsGrid}>
        {filteredProviders.map((provider) => (
          <Col key={provider.id} xs={12} md={4} className="mb-4">
            <Card className={styles.eventCard}>
              <Link to={`/watoa-huduma-details/${provider.id}`} state={{ provider }}>
                <Card.Img variant="top" src={provider.wallpaper.md_photo} alt={provider.name} className={styles.cardImage} />
              </Link>
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{provider.name}</Card.Title>
                <Card.Text className={styles.cardText}>{provider.location}</Card.Text>
                <div className={styles.buttonContainer}>
                  <Link to={`/watoa-huduma-details/${provider.id}`} state={{ provider }}>
                    <Button variant="outline-primary" className={styles.roundedPill}>View Details</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>




      {/* Login/Register Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Service Provider Portal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav variant="tabs" className="mb-3">
            <Nav.Item>
              <Nav.Link onClick={() => setModalTab('login')} active={modalTab === 'login'}>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setModalTab('register')} active={modalTab === 'register'}>Jisajili</Nav.Link>
            </Nav.Item>
          </Nav>

          {modalTab === 'login' ? (
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          ) : (
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="registerName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="registerConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default WatoaHuduma;