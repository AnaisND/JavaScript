import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Styles/Display.css';

const DisplayHotelsForm = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handlesearch = () => {
    navigate(`/search`);
  };

  const handlesearchadresa = () => {
    navigate(`/searchadresa`);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:8080/data/ht');
        if (response.ok) {
          const data = await response.json();
          setHotels(data);
        } else {
          console.error('Error fetching hotels:', response.status);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="display-hotels">
      <h1>Hotels</h1>
      <form name='button-container'>
      <button onClick={handlesearch}>Apply filters</button>
      <button onClick={handlesearchadresa}>Search by location</button></form>
      {hotels.length === 0 ? (
        <p>No hotels available.</p>
      ) : (
        <div className="hotels-container">
          {hotels.map((hotel) => (
            <div className="hotel-card" key={hotel.ID}>
              <p>Hotel Name: {hotel.nume}</p>
              <p>Location: {hotel.adresa}</p>
              <p>Stars: {hotel.stele}</p>
              <p>Restaurant: {hotel.restaurant}</p>
              <p>Animals: {hotel.animale}</p>
              <p>Details: {hotel.detalii}</p>
              <Link to={`/confirm/${hotel.ID}`}>Make a Reservation</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayHotelsForm;

