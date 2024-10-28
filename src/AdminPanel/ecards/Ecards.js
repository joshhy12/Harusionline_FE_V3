
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './admin_ecards.css';

const AdminEcards = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Container fluid className="admin-ecards-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h4>E-Cards Management</h4>
            </Card.Header>
            <Card.Body>
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter ecard title"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter ecard description"
                  />
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEcards;
