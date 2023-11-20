import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { saveAs } from 'file-saver';
import "./Style/NoteStyles.css";

function ViewAttachments() {
  const { userId, noteId } = useParams();
  const [attachments, setAttachments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/getAttachments/${noteId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch attachments');
        }
      })
      .then((data) => {
        setAttachments(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [noteId]);

  const handleDownloadClick = (attachmentId, fileExtension) => {
    fetch(`http://localhost:8080/download/${attachmentId}`)
      .then((response) => {
        if (response.status === 200) {
          const contentDisposition = response.headers.get('content-disposition');
          console.log('Content-Disposition Header:', contentDisposition);

          if (contentDisposition) {
            const contentDispositionArray = contentDisposition.split(';');
            const fileNamePart = contentDispositionArray.find((part) =>
              part.trim().startsWith('filename='),
            );

            if (fileNamePart) {
              let fileName = fileNamePart.split('=')[1].trim();
              const fileExtension = fileName.split('.').pop();
              console.log(fileExtension);
              fileName = `file${noteId}.${fileExtension.slice(0, -1) || 'unknown'}`;
              response.blob().then((blob) => {
                saveAs(blob, fileName);
              });
            }
          } else {
            console.error('Filename not found in Content-Disposition header');
          }
        } else {
          console.error('Error downloading file: ' + response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (attachments.length === 0) {
    return <div>No attachments found for this note.</div>;
  } else {
    return (
      <div className="container">
        <h1>Attachments</h1>
        <ul>
          {attachments.map((attachment) => (
            <li key={attachment.id}>
              {attachment.name}: 
              <button className="nav-button7" onClick={() => handleDownloadClick(attachment.id, attachment.file_extension)}>Download</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewAttachments;