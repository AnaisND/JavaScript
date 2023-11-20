import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Style/NoteStyles.css";

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleNavigateToChangePassword = () => {
    navigate(`/changepass/${userId}`);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/profile/${userId}`)
      .then(response => {
        setUser(response.data[0]);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <br></br>
          <p>Email: {user.email}</p>
          <br></br>
          <button className="nav-button7" onClick={handleNavigateToChangePassword}>Change Password</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
