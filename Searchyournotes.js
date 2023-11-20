import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function OwnNotesComponent() {
  const { userId } = useParams();
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const handleNavigateToSearchBarDate = () => {
    navigate(`/searchnotesdate/${userId}`);
  };

  async function fetchOwnNotes() {
    try {
      const response = await fetch(`http://localhost:8080/ownnotes/${userId}`);
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
  }, [userId]);

  return (
    <div>
      <div className="container2">
        <h2>MyNotes</h2>
        <button className="nav-button3" onClick={handleNavigateToSearchBarDate}>Search Notes by Date</button>
      </div>
      <div className="my-list">
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/ownownnote/${userId}/${note.id}`}>View {note.name}</Link>
            <Link to={`/addattch/${userId}/${note.id}`}>Add Attachments</Link>
            <Link to={`/createtag/${userId}/${note.id}`}>Add More Tags</Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default OwnNotesComponent;
