import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function CreateGroupnote() {
  const { userId, groupId } = useParams();
  const [groupnoteData, setGroupnoteData] = useState({ name: '', text: '' });
  const navigate = useNavigate();

  const handleGroupnoteCreation = async () => {
    try {
      const response = await fetch(`http://localhost:8080/createGroupnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: userId,
          groupid: groupId,
          name: groupnoteData.name,
          text: groupnoteData.text,
        }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        const groupnoteId = data.groupnoteId;
  
        console.log('Groupnote created successfully');
        navigate(`/group/${userId}/${groupId}`);
      } else {
        console.error('Error creating groupnote');
      }
    } catch (error) {
      console.error('Error creating groupnote:', error);
    }
  };  

  return (
    <div className="container">
      <h2>New Group Note</h2>
      <br /> <br />
      <form>
        <input
          type="text"
          placeholder="Name"
          value={groupnoteData.name}
          onChange={(e) => setGroupnoteData({ ...groupnoteData, name: e.target.value })}
        />
        <br /> <br /> <br />
        <textarea
          className="centered-textarea"
          rows="20"
          cols="100"
          placeholder="Text"
          value={groupnoteData.text}
          onChange={(e) => setGroupnoteData({ ...groupnoteData, text: e.target.value })}
        />
        <br /> <br /> <br />
        <button type="button" className="nav-button" onClick={handleGroupnoteCreation}>Create</button>
      </form>
    </div>
  );
}

export default CreateGroupnote;