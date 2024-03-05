import React from 'react';

const Loader = ({ progress }) => {
  const containerStyle = {
    width: '60%',
    height: '20px',
    marginTop: '30px',
    borderRadius: '20px',
    background: `linear-gradient(to right, #50D5FF 0%, #50D5FF ${progress}%, #ffffff ${progress}%, #ffffff 100%)`,
    transition: 'width 0.5s ease',
  };

  return (
    <div style={containerStyle}></div>
  );
};

export default Loader;
