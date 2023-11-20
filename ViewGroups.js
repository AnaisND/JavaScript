import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Style/NoteStyles.css";

function UserGroupsForm() {
  const { userId } = useParams();
  const [userGroups, setUserGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserGroups = async () => {
      try {
        const response = await fetch(`http://localhost:8080/userparticipants/${userId}`);

        if (response.status === 200) {
          const data = await response.json();
          setUserGroups(data);
        } else {
          console.error('Error fetching user groups');
        }
      } catch (error) {
        console.error('Error fetching user groups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserGroups();
  }, [userId]);

  console.log('userGroups:', userGroups);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='my-list2'>
          {userGroups.map((group) => (
            <li key={group.id}>
              <Link to={`/group/${userId}/${group.groupid}`}>Group</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserGroupsForm;
