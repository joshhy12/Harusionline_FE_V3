import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { FaSearch, FaBell, FaEnvelope, FaUser } from 'react-icons/fa'

function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Form className="d-flex me-auto">
        <FormControl type="search" placeholder="Search for..." className="me-2" aria-label="Search" />
        <Button variant="primary">
          <FaSearch />
        </Button>
      </Form>
      <Nav>
        <Nav.Link href="#"><FaBell /> <span className="badge bg-danger">3+</span></Nav.Link>
        <Nav.Link href="#"><FaEnvelope /> <span className="badge bg-danger">7</span></Nav.Link>
        <Nav.Link href="#">Douglas McGee <FaUser /></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default TopNav