import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Styles/Display.css';

const DisplayHotelsFormAdresa = () => {
  const {adresa} = useParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`http://localhost:8080/data/ht/adresa/${adresa}`);
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
  }, [adresa]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="display-hotels">
      <h1>Hotels</h1>
      {hotels.length === 0 ? (
        <p>No hotels available.</p>
      ) : (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.ID}>
              <p>Hotel Name: {hotel.nume}</p>
              <p>Location: {hotel.adresa}</p>
              <p>Stars: {hotel.stele}</p>
              <p>Restaurant: {hotel.restaurant}</p>
              <p>Animals: {hotel.animale}</p>
              <p>Details: {hotel.detalii}</p>
              <Link to={`/confirm/${hotel.ID}`}>Make a Reservation</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayHotelsFormAdresa;