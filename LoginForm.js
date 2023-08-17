import React from 'react';
import './Styles/LoginForm.css';


function LoginForm() {
  return (
    <div className="form2">
      <div className="form2-body">
        <label htmlFor="in" style={{ fontSize: '2rem' }}>You are logging as:</label>
        <br/><br/>
        <a href="/loginUser" className="button">
          User
        </a>
        <br/><br/>
        <a href="/loginManager" className="button">
          Manager
        </a>
      </div>
    </div>
  );
}

export default LoginForm;
