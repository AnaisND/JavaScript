import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Style/NoteStyles.css";

function Home() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleNavigateToNotes = () => {
    navigate(`/notes/${userId}`);
  };

  const handleNavigateToOwnNotes = () => {
    navigate(`/ownnotes/${userId}`);
  };

  const handleNavigateToCreateNote = () => {
    navigate(`/createnote/${userId}`);
  };

  const handleNavigateToProfile = () => {
    navigate(`/profile/${userId}`);
  };

  const handleNavigateToGroupPage = () => {
    navigate(`/grouphome/${userId}`);
  };

  return (
    <div className="container">
      <button className="nav-button2" onClick={handleNavigateToNotes}>Public Notes</button>
      <h2>_______________________</h2>
      <button className="nav-button2" onClick={handleNavigateToOwnNotes}>Your Notes</button>
      <h2>_______________________</h2>
      <button className="nav-button2" onClick={handleNavigateToCreateNote}>Add Note</button>
      <h2>_______________________</h2>
      <button className="nav-button2" onClick={handleNavigateToGroupPage}>Groups</button>
      <h2>_______________________</h2>
      <button className="nav-button2" onClick={handleNavigateToProfile}>View Profile</button>
    </div>
  );
}

export default Home;
