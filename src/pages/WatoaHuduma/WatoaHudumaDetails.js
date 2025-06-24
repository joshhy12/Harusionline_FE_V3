import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import styles from '../styles/WatoaHudumaDetails.module.css'; // Import the CSS module

const WatoaHudumaDetails = () => {
  const location = useLocation();
  const { provider } = location.state || {}; // Get provider data from location state

  if (!provider) {
    return <div>Service Provider not found</div>;
  }

  return (
    <Container className="my-5">
      <Card className={styles.card}>
        <Row>
          <Col md={4}>

            <Card.Img variant="top" src={provider.wallpaper.md_photo} alt={provider.name} className={styles.providerImage} />

          </Col>
          <Col md={8}>
            <Card.Body className={styles.cardBody}>
              <Card.Title className={styles.cardTitle}>{provider.name}</Card.Title>
              {/* <Card.Text className={styles.cardText}><strong className={styles.strongText}>ID:</strong> {provider.id}</Card.Text> */}
              <Card.Text className={styles.cardText}><strong className={styles.strongText}>Mobile:</strong> {provider.mobile}</Card.Text>
              <Card.Text className={styles.cardText}><strong className={styles.strongText}>Email:</strong> {provider.email}</Card.Text>
              <Card.Text className={styles.cardText}>
                <strong className={styles.strongText}>Website:</strong>
                <a href={provider.website} target="_blank" rel="noopener noreferrer" className={styles.link}>{provider.website}</a>
              </Card.Text>
              <Card.Text className={styles.cardText}><strong className={styles.strongText}>Description:</strong> {provider.description}</Card.Text>
              <Card.Text className={styles.cardText}><strong className={styles.strongText}>Location:</strong> {provider.location}</Card.Text>
              <Card.Text className={styles.cardText}><strong className={styles.strongText}>Status:</strong> {provider.status === 1 ? 'Active' : 'Inactive'}</Card.Text>
              <Card.Text className={styles.cardText}><strong className={styles.strongText}>Categories:</strong> {provider.categories.map(cat => cat.category).join(', ')}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default WatoaHudumaDetails;
