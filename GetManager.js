import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Styles/GetUser.css';

const GetManagerForm = () => {
  const {managerId} = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/data/man/${managerId}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error('Error fetching user:', response.status);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [managerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="get-user-form-container">
      {user ? (
        <div>
          <h1>Welcome {user.nume} {user.prenume}!</h1>
          <p>Age: {user.varsta}</p>
          <p>Phone: {user.telefon}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Manager not found.</p>
      )}
    </div>
  );
};

export default GetManagerForm;