import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ManageServices from './services/ManageServices';
import CreateServiceForm from './services/CreateServiceForm';

import Bookings from './bookings/Bookings';
import Analytics from './analytics/Analytics';
import Settings from './settings/Settings';
import styles from '../../styles/Header.module.css';

const WatoaHudumaRoutes = () => {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => setExpanded(false);

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
                to="bookings"
                onClick={closeNavbar}
                className={styles.navLink}
              >
                Bookings
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="services/manage" element={<ManageServices />} />
        <Route path="services/create" element={<CreateServiceForm />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default WatoaHudumaRoutes;