import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function NotesComponent() {
  const { userId } = useParams();
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const handleNavigateToSearchBarCourse = () => {
    navigate(`/searchnotescourse/${userId}`);
  };

  const handleNavigateToSearchBarText = () => {
    navigate(`/searchnotestext/${userId}`);
  };

  const handleNavigateToSearchBarTag = () => {
    navigate(`/searchnotestag/${userId}`);
  };

  const handleNavigateToSearchBarUser = () => {
    navigate(`/searchnotesuser/${userId}`);
  };

  async function fetchNotes() {
    try {
      const response = await fetch('http://localhost:8080/notes');
      if (response.status === 200) {
        const data = await response.json();
        setNotes(data);
      } else {
        console.error('Error fetching notes');
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <div className="container2">
      <h2>Notes</h2>
      <button className="nav-button3" onClick={handleNavigateToSearchBarCourse}>Search by Course</button>
      <button className="nav-button3" onClick={handleNavigateToSearchBarText}>Search by Key Words</button>
      <button className="nav-button3" onClick={handleNavigateToSearchBarTag}>Search by Tag</button>
      <button className="nav-button3" onClick={handleNavigateToSearchBarUser}>Search by Author</button>
      </div>
      <div className="my-list">
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/ownnote/${userId}/${note.id}`}>{note.name}</Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default NotesComponent;
