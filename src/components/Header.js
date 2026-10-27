import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <Navbar expand="lg" className="custom-navbar">
    <Container className="nav-container">
      <Navbar.Brand href="#home" className="brand-mark" aria-label="Edona Çadraku, home">
        <img src="/logo.svg" alt="EÇ" height="38" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="portfolio-nav" aria-label="Toggle navigation" />
      <Navbar.Collapse id="portfolio-nav">
        <Nav className="ms-auto custom-nav">
          <Nav.Link href="#home">Home</Nav.Link><Nav.Link href="#about">About</Nav.Link><Nav.Link href="#projects">Work</Nav.Link><Nav.Link href="#contact">Contact <span aria-hidden="true">↗</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
