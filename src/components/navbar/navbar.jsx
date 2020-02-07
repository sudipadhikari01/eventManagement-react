import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Event Mangement
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            HOME
          </Nav.Link>
          <Nav.Link to="" as={Link}>
            WHAT WE DO?
          </Nav.Link>

          <Nav.Link to="" as={Link}>
            ABOUT US
          </Nav.Link>
          <Nav.Link to="" as={Link}>
            LATEST EVENTS
          </Nav.Link>
          <Nav.Link to="" as={Link}>
            GET EVENT REGISTER
          </Nav.Link>
        </Nav>
        {/* right section */}
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link to="/register" as={Link}>
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
//
