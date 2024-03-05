import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledSummarizeButton = styled.div`
  width: 180px;
  height: 60px;
  border: 10px solid #ffffff29;
  border-color: ${({ isHovered }) => (isHovered ? '#00D1FF' : '#ffffff29')};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    border-color: #00D1FF;
    background-color: #00D1FF;
    color: #fff;
  }
`;

const SummarizeButton = (props) => {
  const handleSummarizeClick = async () => {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert('Please select a file.');
      return;
    }
    
    const file = fileInput.files[0];

    try {
      props.stateChanger(1);
      await sendFile(file);
    } catch (error) {
      console.error('Error sending file:', error);
      console.log('Response status:', error.response?.status);
      console.log('Response data:', error.response?.data);
      alert('An error occurred while uploading the file. Please try again.');
    }    
  };

  const sendFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/analyze',formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      320
      console.log('File successfully sent!');
      props.summaryTextUpdater(response.data.output);
      props.stateChanger(2);
    } catch (error) {
      throw new Error('Error sending file:', error);
    }
  };

  return (
    <StyledSummarizeButton onClick={handleSummarizeClick} aria-label="Summarize Button">
      summarize
    </StyledSummarizeButton>
  );
};

export default SummarizeButton;
