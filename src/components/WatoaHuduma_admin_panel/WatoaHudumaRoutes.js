import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ManageServices from './services/ManageServices';
import CreateServiceForm from './services/CreateServiceForm';
import { FaSignOutAlt } from 'react-icons/fa';

import Analytics from './analytics/Analytics';
import Settings from './settings/Settings';
import styles from '../../styles/Header.module.css';

const WatoaHudumaRoutes = () => {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => setExpanded(false);

  const handleLogout = () => {
    // Add logout logic here
  };

  const cards = [
    { id: 1, title: 'Example 1', color: '#FF6B6B' },
    { id: 2, title: 'Example 2', color: '#4ECDC4' },
    { id: 3, title: 'Example 3', color: '#45B7D1' },
    { id: 4, title: 'Example 4', color: '#96CEB4' }
  ];

  const Home = () => (
    <Container className="mt-4">
      <div className="d-flex flex-wrap justify-content-around">
        {cards.map((card) => (
          <Card 
            key={card.id} 
            style={{ 
              width: '18rem', 
              margin: '1rem', 
              backgroundColor: card.color,
              color: 'white'
            }}
          >
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                This is a sample card for {card.title}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );

  return (
    <>
      <Navbar
        bg="white"
        variant="light"
        expand="lg"
        sticky="top"
        expanded={expanded}
        onToggle={setExpanded}
        className={`${styles.navbar} ${styles.customShadow}`}
      >
        <Container className={styles.container}>
          <Navbar.Brand as={Link} to="/service-provider" onClick={closeNavbar} className={styles.brand}>
            Watoa Huduma Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-auto ${styles.nav}`}>
              <Nav.Link
                as={NavLink}
                to="services/manage"
                onClick={closeNavbar}
                className={styles.navLink}
              >
                Services
              </Nav.Link>
            
              <Nav.Link
                as={NavLink}
                to="analytics"
                onClick={closeNavbar}
                className={styles.navLink}
              >
                Analytics
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="settings"
                onClick={closeNavbar}
                className={styles.navLink}
              >
                Settings
              </Nav.Link>
              <Nav.Link
                onClick={handleLogout}
                className={styles.navLink}
                style={{ cursor: 'pointer' }}
              >
                <FaSignOutAlt /> Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services/manage" element={<ManageServices />} />
        <Route path="services/create" element={<CreateServiceForm />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default WatoaHudumaRoutes;