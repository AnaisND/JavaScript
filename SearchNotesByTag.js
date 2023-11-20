import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Style/NoteStyles.css";

function NotesByTag() {
  const { userId, mytag } = useParams();
  const [notes, setNotes] = useState([]);

  async function fetchNotesByTag() {
    try {
      const response = await fetch(`http://localhost:8080/notestag/${mytag}`);
      if (response.status === 200) {
        const data = await response.json();
        setNotes(data);
      } else {
        console.error('Error fetching notes by tag');
      }
    } catch (error) {
      console.error('Error fetching notes by tag:', error);
    }
  }

  useEffect(() => {
    fetchNotesByTag();
  }, [mytag]);

  return (
    <div className="container">
      <h2>Notes with Tag: {mytag}</h2>
      <ul className="my-list4">
        {notes.map((note) => (
          <li key={note.noteid}>
            <Link to={`/ownnote/${userId}/${note.noteid}`}>View Note</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesByTag;
