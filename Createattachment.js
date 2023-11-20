import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Style/NoteStyles.css";

function CreateAttachment() {
  const { userId, noteId } = useParams();
  const [attachmentData, setAttachmentData] = useState({ file: null });
  const navigate = useNavigate();

  const handleAttachmentCreation = () => {
    const formData = new FormData();
    formData.append('noteid', noteId);
    formData.append('file', attachmentData.file);

    fetch(`http://localhost:8080/createAttachment`, {
      method: 'POST',
      body: formData,
      headers: {},
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Attachment created successfully');
          navigate(`/ownnote/${userId}/${noteId}`);
        } else {
          console.error('Error creating attachment');
        }
      })
      .catch((error) => {
        console.error('Error creating attachment:', error);
      });
  };

  return (
    <div className="container">
      <form encType="multipart/form-data">
        <input
          type="file"
          accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
          onChange={(e) => setAttachmentData({ ...attachmentData, file: e.target.files[0] })}
        />
        <br></br><br></br><br></br>
        <button className="nav-button6" type="button" onClick={handleAttachmentCreation}>Upload</button>
      </form>
    </div>
  );
}

export default CreateAttachment;
