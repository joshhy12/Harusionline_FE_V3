import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Analytics = () => {
  return (
    <Container className="analytics-container py-4">
      <h2 className="mb-4">Vendor Analytics Dashboard</h2>
      
      <Row className="g-4">
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Monthly Sales Trend</Card.Title>
              <div className="text-center p-4">
                <p className="text-muted">Chart placeholder - Monthly sales data visualization</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Vendor Performance</Card.Title>
              <div className="text-center p-4">
                <p className="text-muted">Chart placeholder - Vendor performance data visualization</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Category Distribution</Card.Title>
              <div className="text-center p-4">
                <p className="text-muted">Chart placeholder - Category distribution data visualization</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Analytics;