import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Styles/Login.css';

function LoginManagerForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [parola, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/validation/man", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, parola }),
    });
    if (response.ok) {
      const hotelId = await response.text();
      navigate(`/homeManager/${hotelId}`);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <label>
        Email:
        <br /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <br /><input type="password" value={parola} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginManagerForm;

