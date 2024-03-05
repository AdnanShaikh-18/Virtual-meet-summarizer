import React, { useRef } from 'react';
import styled from 'styled-components';
import plus from './../assets/plus.png';

const ImageSelectorContainer = styled.label`
  position: relative;
  width: 200px;
  height: 150px;
  background-color: #64646448;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  input {
    display: none;
  }

  &:hover::before {
    content: 'Select Video';
    position: absolute;
    align-self: self-end;
    left: 50%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transform: translate(-50%, -50%);
    color: #8b8686;
    font-size: 12px;
  }

  &:hover {
    background-color: #64646485;
  }
`;

const ImageSelector = () => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile);
  };

  return (
    <ImageSelectorContainer >
      <img src={plus} style={{ width: '80px' }} alt="Plus Icon" />
      <input type="file" accept="video/*" id="fileInput" ref={fileInputRef} onChange={handleFileChange} />

    </ImageSelectorContainer>
  );
};

export default ImageSelector;
