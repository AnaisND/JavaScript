import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateNoteForm() {
  const { userId, noteId } = useParams();
  const [newText, setNewText] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/updateNote/${noteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: newText,
        }),
      });

      if (response.status === 200) {
        console.log('Note text updated successfully');
        navigate(`/ownnotes/${userId}`);
      } else {
        console.error('Error updating note text');
      }
    } catch (error) {
      console.error('Error updating note text:', error);
    }
  };

  return (
    <div>
      <h2>Update Note Text</h2>
      <textarea
        rows="20"
        cols="100"
        placeholder="Enter new text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <br />
      <button type="button" onClick={handleUpdate}>
        Update Text
      </button>
    </div>
  );
}

export default UpdateNoteForm;
