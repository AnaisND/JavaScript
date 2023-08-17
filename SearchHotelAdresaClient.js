import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Styles/Search.css';

const SearchHotelAdresaC = () => {
  const {clientId} = useParams();
  const [adresa, setAdresa] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    if (adresa) {
      navigate(`/hotelssadresa/${clientId}/${encodeURIComponent(adresa)}`);
    }
  };

  return (
    <div className="search-form-container">
      <h2>Search Hotel</h2>
      <label>
        Adress:
        <input type="text" value={adresa} onChange={(e) => setAdresa(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
      <br/>
      <div className='imgg3'><img className='imggg3' src='https://i.pinimg.com/564x/a5/5a/2c/a55a2cd588ab21a16eb0ba13f4b33a92.jpg'></img></div>
    </div>
  );
};

export default SearchHotelAdresaC;