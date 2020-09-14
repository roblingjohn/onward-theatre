import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const OTNavbar = () => {
  return (
    <div>
      <Navbar variant="dark" expand="sm" className="otNavbar">
        <Navbar.Brand className="navbarBrand">
          <Link to="/" className="brandLink">
            Onward Theatre
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/shows" className="navlink">
              Shows
            </Link>
            <Link to="/classes" className="navlink">
              Classes
            </Link>
            <Link to="/about" className="navlink">
              About
            </Link>
            <Link to="/contact" className="navlink">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default OTNavbar;
