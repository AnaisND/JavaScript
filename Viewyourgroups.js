import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Style/NoteStyles.css";

function ViewYourGroups() {
  const { userId } = useParams();
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserGroups = async () => {
      try {
        const response = await fetch(`http://localhost:8080/owngroups/${userId}`);

        if (response.status === 200) {
          const data = await response.json();
          setGroups(data);
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

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="my-list2">
          {groups.map((group) => (
            <li key={group.id}>
              <Link to={`/group/${userId}/${group.id}`}>
                {group.name}
              </Link>
              <Link to={`/addparticipants/${userId}/${group.id}`}>
                <button className="nav-button3">Add Participants</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewYourGroups;

