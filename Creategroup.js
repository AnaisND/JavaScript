import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function CreateGroup() {
  const { userId } = useParams();
  const [noteData, setNoteData] = useState({ name: '' });
  const navigate = useNavigate();

  const handleNoteCreation = async () => {
    try {
      const response = await fetch(`http://localhost:8080/createGroup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: userId,
          name: noteData.name
        }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        const noteId = data.groupId;
  
        console.log('Note created successfully');
        navigate(`/yourgroups/${userId}`);
      } else {
        console.error('Error creating note');
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };  

  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Enter group name"
          value={noteData.name}
          onChange={(e) => setNoteData({ ...noteData, name: e.target.value })}
        />
        <br></br><br></br>
        <button type="button" className='nav-button3' onClick={handleNoteCreation}>Create Group</button>
      </form>
    </div>
  );
}

export default CreateGroup;