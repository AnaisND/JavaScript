import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useParams } from 'react-router-dom';
import './Styles/MyNavbarUser.css';

function MyNavbarUser() {
  const { clientId } = useParams();
  const clientIdLong = Number(clientId);


  return (
    <Navbar id="mynavbar">
      <Container id="mynavbar-container">
        <Navbar.Brand id="mynavbar-brand">MyHotelApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="mynavbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href={`/updateUser/${clientIdLong}`} id="mynavbar-link1">Change Password</Nav.Link>
            <Nav.Link href={`/deleteUser/${clientIdLong}`} id="mynavbar-link2">Delete Account</Nav.Link>
            <Nav.Link href={`/hotelss/${clientIdLong}`} id="mynavbar-link3">Search Hotels</Nav.Link>
            <Nav.Link href={`/DisplayRoomsUser/${clientIdLong}`} id="mynavbar-link4">Reservation History</Nav.Link>
            <Nav.Link href="/" id="mynavbar-link5">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbarUser;