import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Style/NoteStyles.css";

function CreateTag() {
  const { userId, noteId } = useParams();
  const [tagData, setTagData] = useState({ tagtext: '' });
  const [noteData, setNoteData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/note/${noteId}`)
      .then(response => {
        setNoteData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [noteId]);

  const handleTagCreation = () => {
    fetch(`http://localhost:8080/createTag`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        noteid: noteId,
        tagtext: tagData.text,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Tag created successfully');
          navigate(`/choicetag/${userId}/${noteId}`);
        } else {
          console.error('Error creating note');
        }
      })
      .catch((error) => {
        console.error('Error creating note:', error);
      });
  };

  return (
    <div className="container">
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div>
            <p>Course: {noteData.coursename}</p>
            <p>Text: {noteData.text}</p>
          </div>
        )}
      </div>
      <br></br><br></br><br></br>
      <h2>Add tags</h2>
      <form>
        <input
          type="text"
          placeholder="Text"
          value={tagData.text}
          onChange={(e) => setTagData({ ...tagData, text: e.target.value })}
        />
        <br></br><br></br>
        <button className="nav-button7" type='button' onClick={handleTagCreation}>Add</button>
      </form>
    </div>
  );
}

export default CreateTag;
