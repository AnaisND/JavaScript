import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Styles/DeleteUser.css';

function DeleteManager(){
  const { managerId } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/data/man/${Number(managerId)}`, {
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
    <div>
      <form className="delete-user-container" onSubmit={handleDelete}>
        <label>Are you sure you want to delete your account?</label>
        <button type="submit" className="delete-button">Yes</button>
      </form>
    </div>
  );
};

export default DeleteManager;