import React, { useEffect, useState } from 'react';

const LoadingDialog = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? '' : prevDots + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '220px', height: '220px', display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff1a', marginTop: '70px',flexDirection : 'column' }}>
        <div style={{ fontSize: 'xx-large', textAlign: 'center' }}>Loading summary</div>
      <div style={{ fontSize: 'xx-large', textAlign: 'justify', marginLeft : '20px'}}>please wait{dots} </div>
    </div>
  );
};

export default LoadingDialog;
