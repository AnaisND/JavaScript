import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Style/NoteStyles.css";

function ViewGroupNotes() {
  const { userId, groupId } = useParams();
  const [groupNotes, setGroupNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroupNotes = async () => {
      try {
        const response = await fetch(`http://localhost:8080/groupnotes/${groupId}`);

        if (response.status === 200) {
          const data = await response.json();
          setGroupNotes(data);
        } else {
          console.error('Error fetching group notes');
        }
      } catch (error) {
        console.error('Error fetching group notes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupNotes();
  }, [groupId]);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='my-list3'>
          {groupNotes.map((note) => (
            <li key={note.id}>
              <h3>{note.name}</h3>
              <p>{note.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewGroupNotes;