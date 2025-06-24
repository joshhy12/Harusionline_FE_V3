import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/LoginSignup.module.css';
import logo from '../images/logo.png';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [signupStep, setSignupStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneEmail: '',
    otp: '',
    password: '',
    confirmPassword: '',
    eventType: '',
    eventDate: '',
    eventRegion: ''
  });
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRequestOTP = (e) => {
    e.preventDefault();
    // API call to request OTP would go here
    console.log('Requesting OTP for:', formData.phoneEmail);
    setOtpSent(true);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // API call to verify OTP would go here
    console.log('Verifying OTP:', formData.otp);
    // If OTP is verified, move to password creation
    setSignupStep(2);
  };

  const handleCreatePassword = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Move to event details
    setSignupStep(3);
  };

  const handleSubmitEventDetails = (e) => {
    e.preventDefault();
    // Final submission with all data
    console.log('Form submitted with data:', formData);
    // Reset form and go back to login
    setActiveTab('login');
    setSignupStep(1);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
    // Login logic here
  };

  const renderSignupStep = () => {
    switch (signupStep) {
      case 1:
        return (
          <>
            <div className="text-center mb-4">
              <p>Anza kwa kutengeneza account yako</p>
            </div>
            <Form onSubmit={otpSent ? handleVerifyOTP : handleRequestOTP}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control 
                  type="text" 
                  placeholder="Jina kamili" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhoneEmail">
                <Form.Control 
                  type="text" 
                  placeholder="Namba ya Simu / Email" 
                  name="phoneEmail"
                  value={formData.phoneEmail}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>
              
              {otpSent ? (
                <>
                  <Form.Group className="mb-3" controlId="formBasicOTP">
                    <Form.Label>Thibitisha Nambari (OTP)</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Ingiza nambari uliyotumwa" 
                      name="otp"
                      value={formData.otp}
                      onChange={handleInputChange}
                      required 
                    />
                    <Form.Text className="text-muted">
                      Nambari ya uthibitisho imetumwa kwenye {formData.phoneEmail}
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Thibitisha OTP
                  </Button>
                </>
              ) : (
                <Button variant="primary" type="submit" className="w-100">
                  Omba OTP
                </Button>
              )}
            </Form>
          </>
        );
      
      case 2:
        return (
          <>
            <div className="text-center mb-4">
              <p>Weka password itakayotumika kuingia kwenye account yako</p>
            </div>
            <Form onSubmit={handleCreatePassword}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Weka password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Thibitisha Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Rudia password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Endelea
              </Button>
            </Form>
          </>
        );
      
      case 3:
        return (
          <>
            <div className="text-center mb-4">
              <h4>Tengeneza Event</h4>
              <p>Jaza taarifa zinazo hitajika kuhusu shughuli yako</p>
            </div>
            <Form onSubmit={handleSubmitEventDetails}>
              <Form.Group className="mb-3" controlId="formBasicEventType">
                <Form.Label>Aina ya Shughuli</Form.Label>
                <Form.Select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Chagua...</option>
                  <option value="Harusi">Harusi</option>
                  <option value="kitchen-party">Kitchen-party</option>
                  <option value="Send-off">Send-off</option>
                  <option value="Engagement">Engagement</option>
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEventDate">
                <Form.Label>Tarehe ya shughuli</Form.Label>
                <Form.Control 
                  type="date" 
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEventRegion">
                <Form.Label>Mkoa Shughuli itafanyika</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Mfano: Arusha" 
                  name="eventRegion"
                  value={formData.eventRegion}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>
              
              <Button variant="primary" type="submit" className="w-100">
                Maliza
              </Button>
            </Form>
          </>
        );
      
      default:
        return null;
    }
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
                        onClick={() => {
                          setActiveTab('login');
                          setSignupStep(1);
                        }}
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

                  {activeTab === 'login' ? (
                    <Form onSubmit={handleLoginSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Namba ya Simu / Email" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                      </Form.Group>
                      <div className="text-end mb-3">
                        <Link to="/forgot-password" className="text-primary text-decoration-none">Nimesahau Password</Link>
                      </div>
                      <Button variant="primary" type="submit" className="w-100">
                        Ingia
                      </Button>
                    </Form>
                  ) : (
                    renderSignupStep()
                  )}

                  {activeTab === 'login' && (
                    <div className="mt-4 text-center">
                      <p>
                        Hauna akaunti ya Harusionline?{' '}
                        <Button variant="link" className="p-0 text-decoration-none" onClick={() => setActiveTab('signup')} style={{ color: '#0d6efd' }}>
                          Jisajili BURE sasa
                        </Button>
                      </p>
                    </div>
                  )}

                  {activeTab === 'signup' && signupStep === 1 && !otpSent && (
                    <div className="mt-4 text-center">
                      <p>
                        Una akaunti tayari?{' '}
                        <Button variant="link" className="p-0 text-decoration-none" onClick={() => setActiveTab('login')} style={{ color: '#0d6efd' }}>
                          Ingia
                        </Button>
                      </p>
                    </div>
                  )}
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
