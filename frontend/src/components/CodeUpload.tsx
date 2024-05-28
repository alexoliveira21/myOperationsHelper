import React, { useState } from 'react';
import { API_ENDPOINT } from '../constants/serviceConstants'
import axios from 'axios';

const CodeUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);

      try {
        const response = await axios.post(API_ENDPOINT.replace(':method', 'analyzeCodebase'), formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Upload Code for Analysis</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CodeUpload;