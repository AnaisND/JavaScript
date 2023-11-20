import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Style/NoteStyles.css";

function NotesByDate() {
  const { userId, mydate } = useParams();
  const [notes, setNotes] = useState([]);

  async function fetchOwnNotes() {
    try {
      const response = await fetch(`http://localhost:8080/notesdate/${mydate}`);
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
  }, [mydate]);

  return (
    <div className="container">
      <ul className="my-list4">
        {notes.map((note) => (
          <li key={note.id}><Link to={`/ownownnote/${userId}/${note.id}`}>{note.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default NotesByDate;