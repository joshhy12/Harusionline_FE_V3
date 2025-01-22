import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaClock, FaCalendarAlt } from 'react-icons/fa';
import Footer from '../../components/Footer';
import './EventWebsite.css';

const EventWebsite = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [showRSVP, setShowRSVP] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: 1,
    message: ''
  });
  
  const getEventData = () => {
    const params = new URLSearchParams(location.search);
    const stateData = params.get('state');
    return stateData ? JSON.parse(decodeURIComponent(stateData)) : null;
  };
  
  const eventData = getEventData();
  
  if (!eventData) {
    return <div>Event not found</div>;
  }

  const { event, theme, primaryColor, secondaryColor } = eventData;

  const calculateTimeRemaining = () => {
    if (!event?.event_date) return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    const eventTime = new Date(event.event_date).getTime();
    const now = new Date().getTime();
    const difference = eventTime - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  };

  const timeRemaining = calculateTimeRemaining();

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    setShowRSVP(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className={`event-website ${theme}`}>
      <header className="event-header" style={{ backgroundColor: primaryColor }}>
        <Container>
          <h1>{event.event_title}</h1>
          <p className="event-date">
            {new Date(event.event_date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <Button 
            variant="outline-light" 
            className="rsvp-button"
            onClick={() => setShowRSVP(true)}
          >
            RSVP Now
          </Button>
        </Container>
      </header>

      <main className="event-content">
        <Container>
          <section className="event-hero">
            <Row className="align-items-center">
              <Col md={6}>
                <img 
                  src={event.wallpaper[0]?.md_photo} 
                  alt={event.event_title} 
                  className="event-banner"
                />
              </Col>
              <Col md={6}>
                <div className="event-description">
                  <h2>About Our {event.event_type}</h2>
                  <p>{event.event_description || "Join us for our special day as we celebrate our love and commitment. We're excited to share this moment with our dear friends and family."}</p>
                  
                  <div className="countdown-container">
                    <h3>Time Remaining</h3>
                    <div className="countdown">
                      <div className="countdown-item">
                        <span className="countdown-value">{timeRemaining.days}</span>
                        <span className="countdown-label">Days</span>
                      </div>
                      <div className="countdown-item">
                        <span className="countdown-value">{timeRemaining.hours}</span>
                        <span className="countdown-label">Hours</span>
                      </div>
                      <div className="countdown-item">
                        <span className="countdown-value">{timeRemaining.minutes}</span>
                        <span className="countdown-label">Minutes</span>
                      </div>
                      <div className="countdown-item">
                        <span className="countdown-value">{timeRemaining.seconds}</span>
                        <span className="countdown-label">Seconds</span>
                      </div>
                    </div>
                  </div>

                  <div className="app-download">
                    <h3>Get Our App</h3>
                    <div className="app-buttons">
                      <a href="https://apps.apple.com/us/app/harusi-online/id1629222934" target="_blank" rel="noopener noreferrer">
                        <img src={require('../images/apple.png')} alt="Download on App Store" className="app-store-badge" />
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=harusi.online.mobile&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                        <img src={require('../images/android.png')} alt="Get it on Google Play" className="app-store-badge" />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

          <section className="event-timeline">
            <h2 className="section-title">Event Timeline</h2>
            <Row>
              <Col md={4}>
                <div className="timeline-card">
                  <h3>Kanisani...</h3>
                  <div className="timeline-details">
                    <p><FaCalendarAlt /> Monday, 12 Apr. 2022</p>
                    <p><FaClock /> 1:00 PM – 2:30 PM</p>
                    <p><FaMapMarkerAlt /> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                    <p><FaPhone /> +1 234-567-8910</p>
                    <Button variant="outline-primary" className="location-button">See Location</Button>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="timeline-card">
                  <h3>Picha...</h3>
                  <div className="timeline-details">
                    <p><FaCalendarAlt /> Monday, 12 Apr. 2022</p>
                    <p><FaClock /> 3:00 PM – 6:00 PM</p>
                    <p><FaMapMarkerAlt /> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                    <p><FaPhone /> +1 234-567-8910</p>
                    <Button variant="outline-primary" className="location-button">See Location</Button>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="timeline-card">
                  <h3>Ukumbini...</h3>
                  <div className="timeline-details">
                    <p><FaCalendarAlt /> Monday, 12 Apr. 2022</p>
                    <p><FaClock /> 7:00 PM – 11:00 PM</p>
                    <p><FaMapMarkerAlt /> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                    <p><FaPhone /> +1 234-567-8910</p>
                    <Button variant="outline-primary" className="location-button">See Location</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </main>

      <Footer secondaryColor={secondaryColor} eventTitle={event.event_title} />

      {/* RSVP Modal */}
      <Modal show={showRSVP} onHide={() => setShowRSVP(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>RSVP for {event.event_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRSVPSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
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
            {formData.attending === 'yes' && (
              <Form.Group className="mb-3">
                <Form.Label>Number of Guests</Form.Label>
                <Form.Control
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  min="1"
                  max="5"
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Message (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit RSVP
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventWebsite;