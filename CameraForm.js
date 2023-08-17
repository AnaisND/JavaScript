import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Styles/Sign.css';

function RoomForm() {
  const {hotelId, clientId} = useParams();
  const [tip, setRoomType] = useState("");
  const [nradulti, setANr] = useState(0);
  const [nrcopii, setCNr] = useState(0);
  const [nrnopti, setNNr] = useState(0);
  const [checkin, setCin] = useState("");
  const [checkout, setCout] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cam ={
      tip: tip,
      nradulti: nradulti,
      nrcopii: nrcopii,
      nrnopti: nrnopti,
      checkin: checkin,
      checkout: checkout,
      id_Hotel: Number(hotelId),
      id_Client: Number(clientId)
    };

    const response = await fetch(`http://localhost:8080/data/cam`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cam),
    });

    if (response.ok) {
      navigate(`/`);
    }
  };

  return (
    <div className="client-form">
    <form onSubmit={handleSubmit}>
      <h2>Room Form</h2>
      <label htmlFor="roomType">Room Type:</label>
      <br /><input
        type="text"
        id="roomType"
        value={tip}
        onChange={(e) => setRoomType(e.target.value)}
      />
      <br />
      <label htmlFor="nra">Adults:</label>
      <br /><input
        type="number"
        min="1"
        max="5"
        id="nra"
        value={nradulti}
        onChange={(e) => setANr(e.target.value)}
      />
      <br />
      <label htmlFor="nrc">Children:</label>
      <br /><input
        type="number"
        min="0"
        max="5"
        id="nra"
        value={nrcopii}
        onChange={(e) => setCNr(e.target.value)}
      />
      <br />
      <label htmlFor="nrn">Nights:</label>
      <br /><input
        type="number"
        min="1"
        id="nrn"
        value={nrnopti}
        onChange={(e) => setNNr(e.target.value)}
      />
      <br />
      <label htmlFor="checkin">Check in:</label>
      <br /><input
        type="date"
        id="checkin"
        value={checkin}
        onChange={(e) => setCin(e.target.value)}
      />
      <br />
      <label htmlFor="checkout">Check out:</label>
      <br /><input
        type="date"
        id="checkout"
        value={checkout}
        onChange={(e) => setCout(e.target.value)}
      />
      <br /><button type="submit">Reserve</button>
    </form>
    </div>
  );
}

export default RoomForm;
