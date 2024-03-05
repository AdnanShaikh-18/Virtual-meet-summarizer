import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import LoadingDialog from './LoadingDialog';

const LoaderContainer = () => {
  const [progress, setProgress] = useState(0);
  const [timePeriod, setTimePeriod] = useState(2000);
  useEffect(() => {
    
    const interval = setInterval(() => {
      const increment = Math.random() * 10; 
      const newProgress = Math.min(progress + increment, 100);
      setProgress(newProgress);

      if(increment < 2 ) setTimePeriod(3000);
      else if(increment < 4) setTimePeriod(6000);
      else if(increment < 6) setTimePeriod(10000);
      else if(increment < 8) setTimePeriod(15000);
      else  setTimePeriod(17000);;
      console.log(timePeriod);
      if (newProgress >= 100) {
        clearInterval(interval);
      }
    }, timePeriod);

    return () => clearInterval(interval);
  }, [progress]);


  return (
    <>
      <Loader progress={progress} />
      <LoadingDialog />
    </>
  );
};

export default LoaderContainer;
