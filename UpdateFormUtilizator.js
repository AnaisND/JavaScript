import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Styles/UpdateUser.css';

const UpdateUserForm = () => {
  const {clientId} = useParams();
  const [parola, setPassword] = useState('');
  const navigate = useNavigate();

  const updateUser = async () => {
    try {
      const response = await fetch(`http://localhost:8080/data/util/up/${clientId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parolaNoua: parola,
        }),
      });
      if (response.ok) {
        navigate(`/`);
      } else {
        console.log('Error updating manager');
      }
    } catch (error) {
      console.log('Error updating manager', error);
    }
  };

  return (
    <div className="update-user-form-container">
      <form onSubmit={updateUser}>
        <div>
          <label>Please input new password</label>
          <br/>
          <input
            type="password"
            value={parola}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
