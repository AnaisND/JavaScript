import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Styles/RoomClient.css';

const RoomListComponentClient = () => {
  const {clientId} = useParams();
  const [camere, setCamere] = useState([]);

  useEffect(() => {
    const fetchCamereClient = async () => {
      try {
        const response = await fetch(`http://localhost:8080/data/cam/util/${clientId}`);
        if (response.ok) {
          const responseBody = await response.text();
          const data = responseBody ? JSON.parse(responseBody) : [];
          setCamere(data);
        } else {
          console.log('Failed to fetch room list');
        }
      } catch (error) {
        console.log('Error fetching room list:', error);
      }
    };

    fetchCamereClient();
  }, [clientId]);

  const navigate = useNavigate();

  const handleUpdateRoom = (roomId) => {
    navigate(`/uproom/${roomId}`);
  };

  return (
    <div className="room-list-container">
      {camere.map((camera) => (
        <div key={camera.id}>
          <p>Room type: {camera.tip}</p>
          <p>Number of adults: {camera.nradulti}</p>
          <p>Number of children: {camera.nrcopii}</p>
          <p>Nights: {camera.nrnopti}</p>
          <p>Checkin date: {camera.checkin}</p>
          <p>Checkout date: {camera.checkout}</p>
          <button onClick={() => handleUpdateRoom(camera.id)}>Update Room Information</button>
        </div>
      ))}
    </div>
  );
};

export default RoomListComponentClient;
