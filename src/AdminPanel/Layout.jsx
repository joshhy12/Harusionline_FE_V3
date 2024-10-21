import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

function Layout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col md={10} className="main-content">
          <TopNav />
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default Layout