import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <i class="fas fa-shopping-cart"></i>
                &nbsp;Cart
              </Nav.Link>
              <Nav.Link href="#link">
                <i class="fas fa-user"></i>
                &nbsp;Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
