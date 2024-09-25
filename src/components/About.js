  import React from 'react';
  import { Container, Row, Col, Card, Button } from 'react-bootstrap';

  const About = () => {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">About Us</h1>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>
                  Welcome to our company! We are passionate about delivering high-quality products and services to our customers.
                </Card.Text>
                <Card.Text>
                  Our mission is to innovate and create solutions that make a positive impact on people's lives.
                </Card.Text>
              </Card.Body>
            </Card>
          
            <h2 className="mb-3">Our Values</h2>
            <Card className="mb-4">
              <Card.Body>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Customer Satisfaction</li>
                  <li className="list-group-item">Innovation</li>
                  <li className="list-group-item">Integrity</li>
                  <li className="list-group-item">Teamwork</li>
                </ul>
              </Card.Body>
            </Card>
          
            <h2 className="mb-3">Our Team</h2>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>
                  We have a dedicated team of professionals who are experts in their respective fields. Together, we work towards achieving our goals and exceeding customer expectations.
                </Card.Text>
              </Card.Body>
            </Card>
          
            <h2 className="mb-3">Contact Us</h2>
            <Card>
              <Card.Body>
                <Card.Text>
                  If you have any questions or would like to learn more about our company, please don't hesitate to reach out to us.
                </Card.Text>
                <Button href="mailto:info@ourcompany.com" variant="primary">Email Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  export default About;
