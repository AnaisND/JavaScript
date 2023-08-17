import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Styles/Sign.css';

function HotelForm() {
  const navigate = useNavigate();
  const { managerId } = useParams();
  const [nume, setNume] = useState("");
  const [adresa, setAdresa] = useState("");
  const [stele, setStele] = useState(0);
  const [restaurant, setRestaurant] = useState(0);
  const [animale, setAnimale] = useState(0);
  const [detalii, setDetalii] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newHotel = {
      nume: nume,
      adresa: adresa,
      stele: stele,
      restaurant: restaurant,
      animale: animale,
      detalii: detalii,
      id_manager: managerId,
    };

    const response = await fetch("http://localhost:8080/data/ht", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHotel),
    });

    if (response.ok) {
      navigate(`/`);
    }
  };

  return (
    <div className="client-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Hotel Name:</label>
          <br /><input
            type="text"
            id="name"
            value={nume}
            onChange={(event) => setNume(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="adresa">Hotel Adress:</label>
          <br /><input
            type="text"
            id="adresa"
            value={adresa}
            onChange={(event) => setAdresa(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="stars">Number of Stars:</label>
          <br /><input
            type="number"
            id="stars"
            min="1"
            max="5"
            value={stele}
            onChange={(event) => setStele(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="stars">Restaurant:</label>
          <br /><input
            type="number"
            id="stars"
            min="0"
            max="1"
            value={restaurant}
            onChange={(event) => setRestaurant(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="stars">Animals:</label>
          <br /><input
            type="number"
            id="stars"
            min="0"
            max="1"
            value={animale}
            onChange={(event) => setAnimale(event.target.value)}
            required
          />
        </div>
        <div>
        <label htmlFor="details">Details:</label>
        <br /><textarea
            id="details"
            value={detalii}
            onChange={(event) => setDetalii(event.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Sign Up your Hotel!</button>
      </form>
    </div> 
  );
}

export default HotelForm;