import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Tab, Nav } from 'react-bootstrap';
import './account_settings.css';

const Account_setting = () => {
  // User profile state
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '255712345678',
    role: 'Administrator'
  });

  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Notification settings state
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newCardAlerts: true,
    paymentAlerts: true,
    marketingEmails: false
  });

  // Alert states
  const [showProfileAlert, setShowProfileAlert] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);
  const [showNotificationAlert, setShowNotificationAlert] = useState(false);

  // Handle profile form changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle password form changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle notification toggle changes
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  // Handle profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    // Here you would typically make an API call to update the profile
    setShowProfileAlert(true);
    setTimeout(() => setShowProfileAlert(false), 3000);
  };

  // Handle password update
  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    console.log('Password updated');
    // Here you would typically make an API call to update the password
    
    // Reset form
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    
    setShowPasswordAlert(true);
    setTimeout(() => setShowPasswordAlert(false), 3000);
  };

  // Handle notification settings update
  const handleNotificationUpdate = (e) => {
    e.preventDefault();
    console.log('Notification settings updated:', notifications);
    // Here you would typically make an API call to update notification settings
    setShowNotificationAlert(true);
    setTimeout(() => setShowNotificationAlert(false), 3000);
  };

  return (
    <Container className="admin-main-content">
      <h1 className="stylish-heading">Account Settings</h1>
      
      <Tab.Container id="settings-tabs" defaultActiveKey="profile">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column settings-nav">
              <Nav.Item>
                <Nav.Link eventKey="profile">Profile Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="password">Change Password</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="notifications">Notification Settings</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="profile">
                <Card className="settings-card">
                  <Card.Body>
                    <Card.Title>Profile Information</Card.Title>
                    <Card.Text>Update your personal information and contact details.</Card.Text>
                    
                    {showProfileAlert && (
                      <Alert variant="success">
                        Profile information updated successfully!
                      </Alert>
                    )}
                    
                    <Form onSubmit={handleProfileUpdate}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                              type="text" 
                              name="firstName" 
                              value={profile.firstName} 
                              onChange={handleProfileChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                              type="text" 
                              name="lastName" 
                              value={profile.lastName} 
                              onChange={handleProfileChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email" 
                          value={profile.email} 
                          onChange={handleProfileChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="phone" 
                          value={profile.phone} 
                          onChange={handleProfileChange}
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Control 
                          type="text" 
                          value={profile.role} 
                          readOnly
                          disabled
                        />
                        <Form.Text className="text-muted">
                          Your role cannot be changed. Contact system administrator for role changes.
                        </Form.Text>
                      </Form.Group>
                      
                      <Button variant="primary" type="submit" className="settings-button">
                        Update Profile
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              
              <Tab.Pane eventKey="password">
                <Card className="settings-card">
                  <Card.Body>
                    <Card.Title>Change Password</Card.Title>
                    <Card.Text>Update your password to maintain account security.</Card.Text>
                    
                    {showPasswordAlert && (
                      <Alert variant="success">
                        Password updated successfully!
                      </Alert>
                    )}
                    
                    <Form onSubmit={handlePasswordUpdate}>
                      <Form.Group className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control 
                          type="password" 
                          name="currentPassword" 
                          value={passwordData.currentPassword} 
                          onChange={handlePasswordChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control 
                          type="password" 
                          name="newPassword" 
                          value={passwordData.newPassword} 
                          onChange={handlePasswordChange}
                          required
                        />
                        <Form.Text className="text-muted">
                          Password must be at least 8 characters long and include a mix of letters, numbers, and special characters.
                        </Form.Text>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control 
                          type="password" 
                          name="confirmPassword" 
                          value={passwordData.confirmPassword} 
                          onChange={handlePasswordChange}
                          required
                        />
                      </Form.Group>
                      
                      <Button variant="primary" type="submit" className="settings-button">
                        Update Password
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              
              <Tab.Pane eventKey="notifications">
                <Card className="settings-card">
                  <Card.Body>
                    <Card.Title>Notification Settings</Card.Title>
                    <Card.Text>Manage how you receive notifications and alerts.</Card.Text>
                    
                    {showNotificationAlert && (
                      <Alert variant="success">
                        Notification settings updated successfully!
                      </Alert>
                    )}
                    
                    <Form onSubmit={handleNotificationUpdate}>
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="email-notifications"
                          label="Email Notifications"
                          name="emailNotifications"
                          checked={notifications.emailNotifications}
                          onChange={handleNotificationChange}
                        />
                        <Form.Text className="text-muted">
                          Receive notifications via email.
                        </Form.Text>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="sms-notifications"
                          label="SMS Notifications"
                          name="smsNotifications"
                          checked={notifications.smsNotifications}
                          onChange={handleNotificationChange}
                        />
                        <Form.Text className="text-muted">
                          Receive notifications via SMS (standard messaging rates may apply).
                        </Form.Text>
                      </Form.Group>
                      
                      <hr />
                      
                      <h5>Notification Types</h5>
                      
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="new-card-alerts"
                          label="New Card Alerts"
                          name="newCardAlerts"
                          checked={notifications.newCardAlerts}
                          onChange={handleNotificationChange}
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="payment-alerts"
                          label="Payment Alerts"
                          name="paymentAlerts"
                          checked={notifications.paymentAlerts}
                          onChange={handleNotificationChange}
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="switch"
                          id="marketing-emails"
                          label="Marketing Emails"
                          name="marketingEmails"
                          checked={notifications.marketingEmails}
                          onChange={handleNotificationChange}
                        />
                      </Form.Group>
                      
                      <Button variant="primary" type="submit" className="settings-button">
                        Save Preferences
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Account_setting;
