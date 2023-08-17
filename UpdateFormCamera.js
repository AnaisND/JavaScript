import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Styles/UpdateUser.css';

const UpdateRoomForm = () => {
    const { cameraId } = useParams();
    const [nradulti, setANr] = useState(0);
    const [nrcopii, setCNr] = useState(0);
    const [nrnopti, setNNr] = useState(0);
    const [checkin, setCin] = useState("");
    const [checkout, setCout] = useState("");
  const navigate = useNavigate();

  const updateRoom = async () => {
    try {
      const response = await fetch(`http://localhost:8080/data/cam/up/${cameraId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nradulti: nradulti,
          nrcopii: nrcopii,
          nrnopti: nrnopti,
          checkin: checkin,
          checkout:checkout
        }),
      });

      if (response.ok) {
        navigate(`/`);
      } else {
        console.log('Error updating room');
      }
    } catch (error) {
      console.log('Error updating room', error);
    }
  };

  return (
    <div className="update-user-form-container">
      <h2>Update Room</h2>
      <form onSubmit={updateRoom}>
      <label htmlFor="nra">Adults:</label>
      <input
        type="number"
        min="1"
        max="5"
        id="nra"
        value={nradulti}
        onChange={(e) => setANr(e.target.value)}
      />
      <br />
      <label htmlFor="nrc">Children:</label>
      <input
        type="number"
        min="0"
        max="5"
        id="nra"
        value={nrcopii}
        onChange={(e) => setCNr(e.target.value)}
      />
      <br />
      <label htmlFor="nrn">Nights:</label>
      <input
        type="number"
        min="1"
        id="nrn"
        value={nrnopti}
        onChange={(e) => setNNr(e.target.value)}
      />
      <br />
      <label htmlFor="checkin">Check in:</label>
      <input
        type="date"
        id="checkin"
        value={checkin}
        onChange={(e) => setCin(e.target.value)}
      />
      <br />
      <label htmlFor="checkout">Check out:</label>
      <input
        type="date"
        id="checkout"
        value={checkout}
        onChange={(e) => setCout(e.target.value)}
      />
      <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default UpdateRoomForm;