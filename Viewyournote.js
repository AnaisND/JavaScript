import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style/NoteStyles.css";

function Viewyournote() {
  const { userId, noteId } = useParams();
  const [noteData, setNoteData] = useState({});
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noteResponse, tagsResponse] = await Promise.all([
          axios.get(`http://localhost:8080/note/${noteId}`),
          axios.get(`http://localhost:8080/tags/${noteId}`),
        ]);

        setNoteData(noteResponse.data);
        setTags(tagsResponse.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [noteId]);

  const handleNavigateToAttachments = () => {
    navigate(`/viewattch/${userId}/${noteId}`);
  };

  const handleNavigateToUpdateNote = () => {
    navigate(`/updatenote/${userId}/${noteId}`);
  };

  const handleDeleteNote = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/deleteNote/${noteId}`);

      if (response.status === 200) {
        console.log('Note deleted successfully');
        navigate(`/ownnotes/${userId}`);
      } else {
        console.error('Error deleting note');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
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

          <h2>Tags</h2>
          <ul>
            {tags.map(tag => (
              <li key={tag.id}>{tag.tagtext}</li>
            ))}
          </ul>

          <button className="nav-button5" onClick={handleNavigateToAttachments}>View Attachments</button>
          <button className="nav-button5" onClick={handleNavigateToUpdateNote}>Update Note</button>
          <button className="nav-button5" onClick={handleDeleteNote}>Delete Note</button>
          <button className="nav-button5" onClick={handleCopyUrl}>Share Note</button>
        </div>
      )}
    </div>
  );
}

export default Viewyournote;



/*import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Viewyournote() {
  const { userId, noteId } = useParams();
  const [noteData, setNoteData] = useState({});
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleNavigateToAttachments = () => {
    navigate(`/viewattch/${userId}/${noteId}`);
  };

  const handleNavigateToUpdateNote = () => {
    navigate(`/updatenote/${userId}/${noteId}`);
  };

  const handleDeleteNote = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/deleteNote/${noteId}`);

      if (response.status === 200) {
        console.log('Note deleted successfully');
        navigate(`/ownnotes/${userId}`);
      } else {
        console.error('Error deleting note');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
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
        <div>
          <h2>Note Content</h2>
          <p>Course Name: {noteData.coursename}</p>
          <p>Name: {noteData.name}</p>
          <p>Date: {formatDate(noteData.date)}</p>
          <p>Text: {noteData.text}</p>

          <h2>Tags</h2>
          <ul>
            {tags.map(tag => (
              <li key={tag.id}>{tag.tagtext}</li>
            ))}
          </ul>

          <button onClick={handleNavigateToAttachments}>View Attachments</button>
          <button onClick={handleNavigateToUpdateNote}>Update Note</button>
          <button onClick={handleDeleteNote}>Delete Note</button>
          <button onClick={handleCopyUrl}>Share Note</button>
        </div>
      )}
    </div>
  );
}

export default Viewyournote;*/
