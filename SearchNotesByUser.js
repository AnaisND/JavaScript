import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Style/NoteStyles.css";

function NotesByUser() {
  const { userId, myname } = useParams();
  const [notes, setNotes] = useState([]);

  async function fetchOwnNotes() {
    try {
      const response = await fetch(`http://localhost:8080/usernotes/${myname}`);
      if (response.status === 200) {
        const data = await response.json();
        setNotes(data);
      } else {
        console.error('Error fetching own notes');
      }
    } catch (error) {
      console.error('Error fetching own notes:', error);
    }
  }

  useEffect(() => {
    fetchOwnNotes();
  }, [myname]);

  return (
    <div className="container">
      <ul className="my-list4">
        {notes.map((note) => (
          <li key={note.id}><Link to={`/ownnote/${userId}/${note.id}`}>{note.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default NotesByUser;