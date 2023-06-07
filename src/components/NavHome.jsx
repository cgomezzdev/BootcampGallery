import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavHome() {
  return (
    <div className="home">
      <Navbar className="px-4" bg="light" variant="secondary" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ex1" href="#ex1">Ex1</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavHome;
