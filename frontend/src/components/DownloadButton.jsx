import React from 'react';
import styled from 'styled-components';
import download from './../assets/download.png';
// import { Axios } from 'axios';

const Container = styled.div`
  height: 40px;
  width: 150px;
  background-color: #ffffff42;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
  }
`;

const Text = styled.div`
  font-size: larger;
  margin-left: 10px;
`;

const DownloadButton = () => {
  return (
    <Container onClick={downloadScript}>
      <img style={{ height: '24px', width: '24px' }} src={download} alt="Download Icon" />
      <Text>Download</Text>
    </Container>
  );
};

const downloadScript = ()=>{
  Axios.get("http://localhost:5000/download").then(
    (response) => {
        var result = response.data;
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);
}

// import React from 'react';
// import axios from 'axios';

// class FileDownloader extends React.Component {
//   handleDownload = () => {
//     axios.get('/download', {
//       responseType: 'blob' // Important: Set responseType to 'blob' to handle binary data
//     }).then(response => {
//       // Create a blob object from the response
//       const url = window.URL.createObjectURL(new Blob([response.data]));

//       // Create a link element and click it to trigger the download
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'meeting_details.docx');
//       document.body.appendChild(link);
//       link.click();

//       // Clean up resources
//       window.URL.revokeObjectURL(url);
//     }).catch(error => {
//       console.error('Error downloading file:', error);
//     });
//   };

export default DownloadButton;
