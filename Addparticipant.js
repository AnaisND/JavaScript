import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function AddParticipant() {
  const { userId, groupId } = useParams();
  const [participantEmails, setParticipantEmails] = useState(['']);
  const navigate = useNavigate();

  const handleParticipantAddition = async () => {
    try {
      const response = await fetch(`http://localhost:8080/addParticipants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          groupid: groupId,
          useremails: participantEmails,
        }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        const participantId = data.participantId;
  
        console.log('Participant(s) added successfully');
        navigate(`/yourgroups/${userId}`);
      } else if (response.status === 404) {
        console.error('User not found');
      } else {
        console.error('Error adding participant(s)');
      }
    } catch (error) {
      console.error('Error adding participant(s):', error);
    }
  };

  const handleEmailChange = (index, value) => {
    const newEmails = [...participantEmails];
    newEmails[index] = value;
    setParticipantEmails(newEmails);
  };

  const handleAddEmailField = () => {
    setParticipantEmails([...participantEmails, '']);
  };

  return (
    <div className="container">
      <h2>Add Participant(s) to Study Group</h2>
      <br></br><br></br><br></br>
      <form>
        {participantEmails.map((email, index) => (
          <div key={index}>
            <input
              type="text"
              className='centered-textarea'
              placeholder="Enter user's email"
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
            />
          </div>
        ))}
        <br></br><br></br><br></br>
        <button type="button" className='nav-button' onClick={handleAddEmailField}>Add Another Participant</button>
        <br></br><br></br><br></br>
        <button type="button" className='nav-button' onClick={handleParticipantAddition}>Add Participant(s)</button>
      </form>
    </div>
  );
}

export default AddParticipant;
