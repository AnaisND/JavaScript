import React from "react";
import "./Style/NoteStyles.css";

function Choice() {
  return (
    <div className="container">
      <img src="https://64.media.tumblr.com/083e476ba00260902346641e8fe98cbc/6d2b53a45da164dd-2f/s1280x1920/fa8f3a768e8cd5fdd71a16e457a90fbed90b9aeb.jpg" width="30%" height="30%"></img>
      <a href="/signup" className="nav-link">
        <button className="nav-button">Sign up!</button>
      </a>
      <a href="/login" className="nav-link">
        <button className="nav-button">Login</button>
      </a>
    </div>
  );
}

export default Choice;
