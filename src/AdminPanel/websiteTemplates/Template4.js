  import React from 'react';
  import { Container, Row, Col, Card } from 'react-bootstrap';
  import styles from './styles/Template4.module.css';

  const Template4 = () => {
    return (
      <Container fluid className={styles['template4-container']}>
        <Row>
          <Col>
            <Card className={styles['template4-card']}>
              <Card.Body>
                <h1 className={`text-center mb-4 ${styles.h1}`}>Template 4</h1>
                <div className={styles['template4-content']}>
                  <Row>
                    <Col md={6}>
                      <div className={styles['template4-section']}>
                        <h3>Section 1</h3>
                        <p>This is a sample content for section 1 of Template 4.</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className={styles['template4-section']}>
                        <h3>Section 2</h3>
                        <p>This is a sample content for section 2 of Template 4.</p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={12}>
                      <div className={styles['template4-footer']}>
                        <p>Footer content for Template 4</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  export default Template4;
