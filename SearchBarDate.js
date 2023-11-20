import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Style/NoteStyles.css";

function SearchPageDate() {
  const { userId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/notesbydate/${userId}/${searchTerm}`);
  };

  return (
    <div className="container">
      <input
        type="date"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br></br><br></br><br></br>
      <button className="nav-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPageDate;

