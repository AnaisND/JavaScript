import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Style/NoteStyles.css";

function SearchPageCourse() {
  const { userId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/notesbycourse/${userId}/${searchTerm}`);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter coursename"
      />
      <br></br><br></br><br></br>
      <button className="nav-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPageCourse;
