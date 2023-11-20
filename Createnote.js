import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function CreateNote() {
  const { userId } = useParams();
  const [noteData, setNoteData] = useState({ name: '', coursename: '', text: '' });
  const navigate = useNavigate();

  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleNoteCreation = async () => {
    try {
      const response = await fetch(`http://localhost:8080/createNote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: userId,
          name: noteData.name,
          coursename: noteData.coursename,
          text: noteData.text,
        }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        const noteId = data.noteId;
  
        console.log('Note created successfully');
        navigate(`/choicetag/${userId}/${noteId}`);
      } else {
        console.error('Error creating note');
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };  

  return (
    <div className="container">
      <h2>New Note - {getCurrentDate()}</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={noteData.name}
          onChange={(e) => setNoteData({ ...noteData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Course Name"
          value={noteData.coursename}
          onChange={(e) => setNoteData({ ...noteData, coursename: e.target.value })}
        />
        <br /> <br /> <br />
        <textarea
          className="centered-textarea"
          rows="20"
          cols="100"
          placeholder="Text"
          value={noteData.text}
          onChange={(e) => setNoteData({ ...noteData, text: e.target.value })}
        />
        <br /> <br /> <br />
        <button type="button" className="nav-button" onClick={handleNoteCreation}>
          Create Note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
