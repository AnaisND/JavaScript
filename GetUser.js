import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Styles/GetUser.css';

const GetUserForm = () => {
  const {clientId} = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/data/util/${clientId}`);
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
  }, [clientId]);

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
          <br/>
      <div className='imgg'><img className='imggg' src='https://i.pinimg.com/564x/13/fb/86/13fb864f0d6d9ac45bf5757637b77184.jpg'></img></div>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
};

export default GetUserForm;

