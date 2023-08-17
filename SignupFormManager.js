import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Styles/Sign.css';

function ManagerForm() {
  const navigate = useNavigate();
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [varsta, setVarsta] = useState(0);
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const manager = {
      nume: nume,
      prenume: prenume,
      varsta: varsta,
      telefon: telefon,
      email: email,
      parola: parola,
    };

    fetch("http://localhost:8080/data/man", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(manager),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        const managerId = data.id;
        navigate(`/hotel/${managerId}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="client-form">
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <br /><input
          type="text"
          value={nume}
          onChange={(event) => setNume(event.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <br /><input
          type="text"
          value={prenume}
          onChange={(event) => setPrenume(event.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <br /><input
          type="number"
          min="0"
          value={varsta}
          onChange={(event) => setVarsta(event.target.value)}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <br /><input
          type="text"
          value={telefon}
          onChange={(event) => setTelefon(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <br /><input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <br /><input
          type="password"
          value={parola}
          onChange={(event) => setParola(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up!</button>
    </form>
    </div>
  );
}

export default ManagerForm;

