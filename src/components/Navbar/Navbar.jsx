import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { RiShoppingCart2Line } from "react-icons/ri";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand className="text-light" href="#home">
          Gazi Telecom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#features">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#pricing">
              Product
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-light ">
              <span>
                <RiShoppingCart2Line
                  style={{ width: "30px", height: "25px", marginRight: "20px" }}
                />
              </span>
            </Nav.Link>
            <NavDropdown
              className="text-light"
              title="My Profile"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
