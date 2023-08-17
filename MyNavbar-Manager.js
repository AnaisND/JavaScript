import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useParams } from 'react-router-dom';
import './Styles/MyNavbarUser.css';

function MyNavbarManager() {
  const { managerId } = useParams();
  const clientIdLong = Number(managerId);


  return (
    <Navbar id="mynavbar">
      <Container id="mynavbar-container">
        <Navbar.Brand id="mynavbar-brand">MyHotelApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="mynavbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href={`/updateManager/${clientIdLong}`} id="mynavbar-link1">Change Password</Nav.Link>
            <Nav.Link href={`/deleteManager/${clientIdLong}`} id="mynavbar-link2">Delete Account</Nav.Link>
            <Nav.Link href={`/DisplayRoomsHotel/${clientIdLong}`} id="mynavbar-link3">Hotel Reservation History</Nav.Link>
            <Nav.Link href={`/updateHotel/${clientIdLong}`} id="mynavbar-link4">Update Hotel</Nav.Link>
            <Nav.Link href="/" id="mynavbar-link5">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbarManager;