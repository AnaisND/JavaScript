import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleUserLogin = () => {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            const userId = data.userId;
            console.log('User is logged in');
            navigate(`/home/${userId}`);
          });
        } else if (response.status === 401) {
          console.log('Wrong email or password');
        } else {
          console.error('Error during login');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <div className="container">
      <h2>Welcome back!</h2>
      <input
        type="text"
        placeholder="Email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <br></br><br></br><br></br>
      <button className="nav-button" onClick={handleUserLogin}>Login</button>
    </div>
  );
}

export default Login;
