import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function ViewGroup() {
  const { userId, groupId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavigateToViewGroupNote = () => {
    navigate(`/viewgroupnotes/${userId}/${groupId}`);
  };

  const handleNavigateToCreateGroupNote = () => {
    navigate(`/creategroupnote/${userId}/${groupId}`);
  };

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch(`http://localhost:8080/participants/${groupId}`);

        if (response.status === 200) {
          const data = await response.json();
          setParticipants(data);
        } else {
          console.error('Error fetching participants');
        }
      } catch (error) {
        console.error('Error fetching participants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [groupId]);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h4>Participants</h4>
          <ul className='my-list2'>
            {participants.map((participant, index) => (
              <li key={index}>
                {participant.email}
              </li>
            ))}
          </ul>
          <br></br><br></br>
          <button className="nav-button4" onClick={handleNavigateToViewGroupNote}>Groupnotes</button>
          <button className="nav-button4" onClick={handleNavigateToCreateGroupNote}>Create a Groupnote</button>
        </div>
      )}
    </div>
  );
}

export default ViewGroup;