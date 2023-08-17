import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MyNavbarManager from './Components/MyNavbar-Manager';
import RoomPage from './Components/Ratio';
import './StyledPages/HomeLoggedUser.css';


const HomeLoggedMan = () => {
  const { managerId } = useParams();
  const navigate = useNavigate();

  const handleInfo = () => {
    navigate(`/infoManager/${managerId}`);
  };

  return (
    <div  className="home-logged-user-container" >
      <MyNavbarManager/>
      <button onClick={handleInfo} className="button">Review Your Information</button>
      <form>
      <RoomPage hotelId={managerId} />
      </form>
    </div>
  );
};

export default HomeLoggedMan;
