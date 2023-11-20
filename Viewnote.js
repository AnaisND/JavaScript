import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style/NoteStyles.css";

function Viewnote() {
  const { userId, noteId } = useParams();
  const [noteData, setNoteData] = useState({});
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleNavigateToAttachments = () => {
    navigate(`/viewattch/${userId}/${noteId}`);
  };

  const handleCopyUrl = () => {
    const noteUrl = window.location.href;
    navigator.clipboard.writeText(noteUrl)
      .then(() => {
        alert('Note URL copied to clipboard!');
      })
      .catch((err) => {
        console.error('Error copying URL to clipboard:', err);
      });
  };

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

    axios.get(`http://localhost:8080/tags/${noteId}`)
      .then(response => {
        setTags(response.data);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  }, [noteId]);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="container">
          <p>Course: {noteData.coursename}</p>
          <p>Name: {noteData.name}</p>
          <p>Date: {formatDate(noteData.date)}</p>
          <p>Text: {noteData.text}</p>

          <h2>Tags:</h2>
          <ul>
            {tags.map(tag => (
              <li key={tag.id}>{tag.tagtext}</li>
            ))}
          </ul>

          <button className="nav-button4" onClick={handleNavigateToAttachments}>View Attachments</button>
          <button className="nav-button4" onClick={handleCopyUrl}>Share Note</button>
        </div>
      )}
    </div>
  );
}

export default Viewnote;