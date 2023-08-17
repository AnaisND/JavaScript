import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/DeleteUser.css';

const DeleteUser = ({ clientId }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/data/util/${clientId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/');
      } else {
        throw new Error('Failed to delete manager');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="delete-user-container">
      <form className="delete-form" onSubmit={handleDelete}>
        <h1>Are you sure you want to delete your account?</h1>
        <button type="submit" className="delete-button">Yes</button>
      </form>
    </div>
  );
};

export default DeleteUser;

