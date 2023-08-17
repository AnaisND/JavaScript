import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Search.css';

const SearchHotelForm = () => {
  const [stele, setStele] = useState(0);
  const [restaurant, setRestaurant] = useState(0);
  const [animale, setAnimale] = useState();

  const navigate = useNavigate();

  const handleSearch = () => {
    if (stele && !restaurant && !animale) {
      navigate(`/hotelsstele/${Number(stele)}`);
    } else if (!stele && restaurant && !animale) {
      navigate('/hotelsrestaurant');
    } else if (!stele && !restaurant && animale) {
      navigate('/hotelsanimale');
    } else if (!stele && restaurant && animale) {
      navigate('/hotelsf1');
    } else if (stele && restaurant && !animale) {
      navigate(`/hotelsf2/${Number(stele)}`);
    } else if (stele && !restaurant && animale) {
      navigate(`/hotelsf3/${Number(stele)}`);
    } else if (stele && restaurant && animale) {
      navigate(`/hotelsf4/${Number(stele)}`);
    }
  };

  return (
    <div className="search-form-container">
      <h2>Search Hotel</h2>
      <label>
        Stars:
        <input type="number" min="1" max="5" value={stele} onChange={(e) => setStele(e.target.value)} />
      </label>
      <label>
        Has a restaurant:
        <select value={restaurant} onChange={(e) => setRestaurant(e.target.value)}>
        <option value="">- Select -</option>
          <option value="1">Yes</option>
        </select>
      </label>
      <label>
        Is pet friendly:
        <select value={animale} onChange={(e) => setAnimale(e.target.value)}>
          <option value="">- Select -</option>
          <option value="1">Yes</option>
        </select>
      </label>
      <button onClick={handleSearch}>Apply Filters</button>
      <br/>
      <div className='imgg4'><img className='imggg4' src='https://i.pinimg.com/564x/7e/8d/fb/7e8dfbc8ed8035d1d812ef832ec05427.jpg'></img></div>
    </div>
  );
};

export default SearchHotelForm;
