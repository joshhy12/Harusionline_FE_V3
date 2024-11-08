import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import styles from '../styles/Events.module.css';
import eventService from '../../api/api_events';
import { Link } from 'react-router-dom';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      events: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    const fetchedEvents = await eventService.fetchEvents();
    this.setState({ events: fetchedEvents, loading: false });
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  generateWebsiteUrl = (event) => {
    if (!event || !event.event_title) return '#';
    
    const slug = event.event_title.toLowerCase().replace(/\s+/g, '');
    const stateData = {
      event,
      template: 1, // Default template
      theme: 'light', // Default theme
      color: 'blue',
      primaryColor: '#000000',
      secondaryColor: '#FFFFFF',
    };
    const encodedStateData = encodeURIComponent(JSON.stringify(stateData));
    return `/event-website/${slug}?state=${encodedStateData}`;
  };

  render() {
    const { filter, events, loading } = this.state;
    const filteredEvents = filter === 'all'
      ? events
      : events.filter(event => event.event_type.toLowerCase() === filter);

    return (
      <section className={styles.eventsSection}>
        <Container>
          <h2 className="text-center mb-4 stylish-heading">All Events</h2>
          <div className={styles.filterButtons + ' text-center mb-4'}>
            {['all', 'harusi', 'kitchen party', 'send-off', 'anniversary', 'Engagement'].map(type => (
              <Button
                key={type}
                variant={filter === type ? 'primary' : 'outline-primary'}
                onClick={() => this.setFilter(type)}
                style={{
                  borderRadius: '20px',
                  margin: '5px',
                  backgroundColor: filter === type ? '#007bff' : 'transparent',
                  color: filter === type ? 'white' : '#007bff',
                }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>

          {loading ? (
            <h2 className="text-center">Loading events...</h2>
          ) : (
            <div className={styles.eventsGrid}>
              {filteredEvents.map(event => (
                <Card key={event.id} className={styles.eventCard}>
                  <Link
                    to={this.generateWebsiteUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card.Img variant="top" src={event.wallpaper[0]?.md_photo} alt={event.event_title} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{event.event_title}</Card.Title>
                    <Card.Text>{event.event_type}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Event Date: {new Date(event.event_date).toLocaleDateString()}</small>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>
    );
  }
}

export default Events;