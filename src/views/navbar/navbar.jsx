import React from "react";
// import { NavLink, Link } from "react-router-dom";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

function NavBarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand to="/">Event Mangement</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* right section */}
        <Nav className="ml-auto">
          <Nav.Link to="/">Login</Nav.Link>
          <Nav.Link to="/">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
//
