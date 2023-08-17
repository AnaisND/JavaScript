import React, { useEffect, useState } from 'react';
import PieChartComponent from './PieChart';
import './Styles/Pie.css'

const RoomPage = ({ hotelId }) => {
  const [roomRatio, setRoomRatio] = useState(0);

  useEffect(() => {
    const fetchRoomRatio = async () => {
      try {
        const response = await fetch(`http://localhost:8080/data/cam/f/ratio/${hotelId}`);
        if (response.ok) {
          const data = await response.json();
          const ratio = data;
          setRoomRatio(ratio);
        } else {
          console.log('Failed to fetch room ratio');
        }
      } catch (error) {
        console.log('Error fetching room ratio:', error);
      }
    };
    fetchRoomRatio();
  }, [hotelId]);

  return (
    <div className="pie-chart-container">
      <PieChartComponent ratio={roomRatio} />
    </div>
  );
};

export default RoomPage;
