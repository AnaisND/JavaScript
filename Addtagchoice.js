import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Style/NoteStyles.css";

function AddTagChoice(){
    const {userId, noteId} = useParams();
    const navigate = useNavigate();

    const handleNavigateToTagCreate = () => {
        navigate(`/createtag/${userId}/${noteId}`);
      };

    const handleNavigateToNoTagCreate = () => {
        navigate(`/home/${userId}`);
      };

    return(
        <div className="container">
            <h1>Add more tags?</h1>
            <button className="nav-button" onClick={handleNavigateToTagCreate}>Yes</button>
            <button className="nav-button" onClick={handleNavigateToNoTagCreate}>No</button>
        </div>
    );
}

export default AddTagChoice;