import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MyNavbarUser from './Components/MyNavbar-Utilizator.js';
import './StyledPages/HomeLoggedUser.css';


const HomeLoggedUser = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const handleInfo = () => {
    navigate(`/infoUser/${clientId}`);
  };

  return (
    <div className="home-logged-user-container">
      <MyNavbarUser/>
      <button onClick={handleInfo} className="button">Review Your Information</button>
      <div className='imgg'><img className='imggg' src='https://i.pinimg.com/564x/a5/b0/f6/a5b0f63ba381f538f55a06056065aed3.jpg'></img></div>
    </div>
  );
};

export default HomeLoggedUser;
