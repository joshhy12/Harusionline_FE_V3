import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/LoginSignup.module.css';
//import '../styles/LoginSignup.css';
import logo from '../images/logo.png';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Container fluid className={`${styles.loginSignupContainer} py-5`}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} lg={8} xl={9}>
          <Card className="shadow-lg">
            <Card.Body className="p-0">
              <Row className="g-0">
                <Col md={6} lg={5} className={`${styles.leftSection} p-5`}>
                  <div className="text-center">
                  <img src={logo} alt="Harusi Online" className={`${styles.logo} mb-4`} />

                    <h2 className="fw-bold mb-2 text-white">Karibu,</h2>
                    <p className="text-white mb-0">Karibu Harusionline, Ingia kuendelea</p>
                  </div>
                </Col>

                <Col md={6} lg={7} className="p-4">
                  <Nav variant="pills" className="nav-fill mb-4">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="login"
                        active={activeTab === 'login'}
                        onClick={() => setActiveTab('login')}
                        className={activeTab === 'login' ? styles.activeNav : ''}
                      >
                        Ingia
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="signup"
                        active={activeTab === 'signup'}
                        onClick={() => setActiveTab('signup')}
                        className={activeTab === 'signup' ? styles.activeNav : ''}
                      >
                        Jisajili
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Form onSubmit={handleSubmit}>
                    {activeTab === 'signup' && (
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Jina kamili" required />
                      </Form.Group>
                    )}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Namba ya Simu / Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                  
                  
                    {activeTab === 'login' && (
  <div className="text-end mb-3">
    <Link to="/forgot-password" className="text-primary text-decoration-none">Nimesahau Password</Link>
  </div>
)}


                    <Button variant="primary" type="submit" className="w-100">
                      {activeTab === 'login' ? 'Ingia' : 'Jisajili'}
                    </Button>
                  </Form>

                  <div className="mt-4 text-center">
  <p>
    {activeTab === 'login' ? (
      <>
        Hauna akaunti ya Harusionline?{' '}
        <Button variant="link" className="p-0 text-decoration-none" onClick={() => setActiveTab('signup')} style={{ color: '#0d6efd' }}>
          Jisajili BURE sasa
        </Button>
      </>
    ) : (
      <>
        Una akaunti tayari?{' '}
        <Button variant="link" className="p-0 text-decoration-none" onClick={() => setActiveTab('login')} style={{ color: '#0d6efd' }}>
          Ingia
        </Button>
      </>
    )}
  </p>
</div>



                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignup;
