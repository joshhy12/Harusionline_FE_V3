import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaCalendar, FaDollarSign, FaClipboardList, FaComments } from 'react-icons/fa'

function Dashboard() {
  return (
    <Container fluid>
      <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
      <Row>
        <Col xl={3} md={6} className="mb-4">
          <Card className="border-left-primary shadow h-100 py-2">
            <Card.Body>
              <Row className="no-gutters align-items-center">
                <Col className="mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">$40</div>
                </Col>
                <Col auto>
                  <FaCalendar className="fa-2x text-gray-300" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6} className="mb-4">
          <Card className="border-left-success shadow h-100 py-2">
            <Card.Body>
              <Row className="no-gutters align-items-center">
                <Col className="mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                </Col>
                <Col auto>
                  <FaDollarSign className="fa-2x text-gray-300" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6} className="mb-4">
          <Card className="border-left-info shadow h-100 py-2">
            <Card.Body>
              <Row className="no-gutters align-items-center">
                <Col className="mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col auto>
                  <FaClipboardList className="fa-2x text-gray-300" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6} className="mb-4">
          <Card className="border-left-warning shadow h-100 py-2">
            <Card.Body>
              <Row className="no-gutters align-items-center">
                <Col className="mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                </Col>
                <Col auto>
                  <FaComments className="fa-2x text-gray-300" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="shadow mb-4">
            <Card.Header className="py-3">
              <h6 className="m-0 font-weight-bold text-primary">Dashboard</h6>
            </Card.Header>
            <Card.Body>
              <p>This is a sample dashboard page. You can add more content, charts, and components here.</p>
              <Button variant="primary">Generate Report</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard