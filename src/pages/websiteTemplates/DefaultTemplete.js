import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import styles from './styles/DefaultTemplate.module.css';

const DefaultTemplate = ({ event, theme = 'light', color = 'primary' }) => {
  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  const colorClass = styles[color] || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
  };

  return (
    <div className={`${styles.defaultTemplate} ${themeClass} ${colorClass}`}>
      {/* Header Section */}
      <header className={`${styles.header} text-center py-5 bg-light`}>
        <Container>
          <h1 className="display-4 fw-bold text-uppercase text-primary">
            {event?.event_title || 'Our Wedding Day'}
          </h1>
          <p className="lead text-muted">
            {event?.event_date
              ? new Date(event.event_date).toLocaleDateString()
              : 'Date to be announced'}
          </p>
        </Container>
      </header>

      <Container className="my-5">
        {/* Main Content Section */}
        <Row className="align-items-center my-5">
          <Col md={6}>
            <img
              src={event?.wallpaper?.[0]?.md_photo || '/default-image.jpg'}
              alt="Event"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-primary mb-4">RSVP to Our Special Day</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="rounded"
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
                  className="rounded"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Will you attend?</Form.Label>
                <Form.Select
                  name="attending"
                  value={formData.attending}
                  onChange={handleInputChange}
                  className="rounded"
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
                  className="rounded"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
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
                  className="rounded"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="rounded-pill px-4">
                Submit RSVP
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Event Details Section */}
        <section className="my-5">
          <Row className="g-4">
            {[
              {
                title: 'Kanisani',
                time: '2:00 PM',
                location: 'KKKT Arusha Mjini',
                link: 'https://maps.app.goo.gl/XkVC4AwKfRTUFGUo9',
              },
              {
                title: 'Ukumbi',
                time: '5:00 PM',
                location: 'Panano Hotel',
                link: 'https://maps.app.goo.gl/qfFjcDFuUUoRakrDA',
              },
              {
                title: 'Dress Code',
                time: 'Semi-formal',
                location: null,
              },
            ].map((detail, idx) => (
              <Col md={4} key={idx}>
                <div className="text-center border rounded p-4 shadow-sm">
                  <h3 className="text-primary mb-3">{detail.title}</h3>
                  <p className="mb-1">
                    <i className="far fa-clock me-2"></i>
                    {detail.time}
                  </p>
                  {detail.location && (
                    <p className="mb-0">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-primary"
                      >
                        {detail.location}
                      </a>
                    </p>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      {/* Footer Section */}
      <footer className="bg-light text-center py-4">
        <p className="mb-0">We can’t wait to celebrate with you!</p>
      </footer>
    </div>
  );
};

export default DefaultTemplate;
