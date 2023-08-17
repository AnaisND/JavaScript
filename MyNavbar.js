import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Styles/MyNavbar.css';

function MyNavbar() {
  return (
    <Navbar id="mynavbar">
      <Container id="mynavbar-container">
        <Navbar.Brand id="mynavbar-brand">MyHotelApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="mynavbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" id="mynavbar-link1">Home</Nav.Link>
            <Nav.Link href="/login" id="mynavbar-link2">Login</Nav.Link>
            <Nav.Link href="/manager" id="mynavbar-link3">Sign Your Hotel Up!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;