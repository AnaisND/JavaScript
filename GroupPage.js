import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Style/NoteStyles.css";

function Groups(){
    const {userId} = useParams();
    const navigate = useNavigate();

    const handleNavigateToCreateGroup = () => {
        navigate(`/creategroup/${userId}`);
      };

    const handleNavigateToViewGroups = () => {
        navigate(`/yourgroups/${userId}`);
      };

    const handleNavigateToViewGroupsIn = () => {
        navigate(`/groupsin/${userId}`);
      };

    return(
        <div className="container">
            <button className="nav-button5" onClick={handleNavigateToCreateGroup}>Create a Study Group</button>
            <h2>_______________________</h2><br></br>
            <button className="nav-button5" onClick={handleNavigateToViewGroups}>Study Groups You Host</button>
            <h2>_______________________</h2><br></br>
            <button className="nav-button5" onClick={handleNavigateToViewGroupsIn}>Study Groups You're Invited To</button>
        </div>
    );
}

export default Groups;