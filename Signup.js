import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function Signup() {
  const [newUserData, setNewUserData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleUserRegistration = () => {
    axios
      .post('http://localhost:8080/signup', newUserData)
      .then((response) => {
        console.log('User registered successfully');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <div className="container">
      <h2>Hello!</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUserData.name}
        onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={newUserData.email}
        onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={newUserData.password}
        onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
      />
      <br></br><br></br><br></br>
      <button className="nav-button" onClick={handleUserRegistration}>Register</button>
    </div>
  );
}

export default Signup;
