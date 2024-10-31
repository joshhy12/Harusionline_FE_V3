import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import styles from '../../styles/websiteTemplates/DefaultTemplate.module.css';

const DefaultTemplate = ({ event, theme = 'light', color = 'primary' }) => {
  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  const colorClass = styles[color] || '';
  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setShowRsvpForm(false);
  };

  return (
    <div className={`${styles.defaultTemplate} ${themeClass} ${colorClass}`}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>{event?.event_title || "Event Title"}</h1>
        <p>{event?.event_date ? new Date(event.event_date).toLocaleDateString() : "Event Date"}</p>
      </header>

      <Container>
        {/* Main Content Section */}
        <Row className={styles.mainContent}>
          <Col md={6}>
            <img src={event?.wallpaper?.[0]?.md_photo || '/default-image.jpg'} alt="Event" className={styles.eventImage} />
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Will you attend?</Form.Label>
                <Form.Select
                  name="attending"
                  value={formData.attending}
                  onChange={handleInputChange}
                >
                  <option value="yes">Yes, I will attend</option>
                  <option value="no">No, I cannot attend</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Number of Guests</Form.Label>
                <Form.Select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message (Optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit RSVP
              </Button>
            </Form>
          </Col>
        </Row>

        <section className={styles.eventDetailsSection}>
          <Container>
            <Row className={styles.eventDetails}>
              <Col md={4}>
                <div className={styles.eventCard}>
                  <h3>Kanisani</h3>
                  <div className={styles.cardContent}>
                    <p><i className="far fa-clock"></i> Time: 2:00 PM</p>
                    <p><i className="fas fa-map-marker-alt"></i> Location:
                      <a
                        href="https://maps.app.goo.gl/XkVC4AwKfRTUFGUo9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.locationLink}
                      >
                        KKKT Arusha Mjini
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.eventCard}>
                  <h3>Ukumbi</h3>
                  <div className={styles.cardContent}>
                    <p><i className="far fa-clock"></i> Time: 5:00 PM</p>
                    <p><i className="fas fa-map-marker-alt"></i> Location:
                      <a
                        href="https://maps.app.goo.gl/qfFjcDFuUUoRakrDA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.locationLink}
                      >
                        Panano Hotel
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.eventCard}>
                  <h3>Dress Code</h3>
                  <div className={styles.cardContent}>
                    <p><i className="fas fa-tshirt"></i> Semi-formal</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <p>We can't wait to celebrate with you!</p>
        </footer>
      </Container>
    </div>
  );
};

export default DefaultTemplate;