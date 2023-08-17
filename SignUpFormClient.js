import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Styles/Sign.css';

function ClientForm() {
  const { hotelId } = useParams();
  const navigate = useNavigate();

  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [varsta, setVarsta] = useState(0);
  const [telefon, setTelefon] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8080/data/cl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nume,
        prenume,
        varsta,
        telefon
      })
    });

    if (response.ok) {
      const data = await response.json();
      navigate(`/room/${hotelId}/${data.id}`);
    }
  };

  return (
    <div className="client-form">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <br /><input type="text" value={nume} onChange={(event) => setNume(event.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <br /><input type="text" value={prenume} onChange={(event) => setPrenume(event.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <br /><input type="number" min="0" value={varsta} onChange={(event) => setVarsta(event.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <br /><input type="text" value={telefon} onChange={(event) => setTelefon(event.target.value)} />
        </label>
        <br />
        <button type="submit">Send Information</button>
      </form>
    </div>
  );
}

export default ClientForm;
