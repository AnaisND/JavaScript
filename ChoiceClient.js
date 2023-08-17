import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Styles/Search.css';

const ConfirmPage = () => {
  const {hotelId} = useParams();
  const navigate = useNavigate();

  const handleNoClick = () => {
    navigate(`/client/${hotelId}`);
  };

  const handleYesClick = () => {
    navigate(`/user/${hotelId}`);
  };

  return (
    <div className="search-form-container">
      <br/>
      <h1>Do you want to become a user?</h1>
      <button onClick={handleNoClick}>No</button>
      <button onClick={handleYesClick}>Yes</button>
      <br/><br/>
      <div className='imgg1'><img className='imggg1' src='https://i.pinimg.com/564x/63/53/f5/6353f59938da652bcd4c6f2c8dd60fe6.jpg'></img></div>
    </div>
  );
};

export default ConfirmPage;