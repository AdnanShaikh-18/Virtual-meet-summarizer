import React, { useEffect } from 'react';
import TextHolder from './TextHolder';
import ImageSelector from './ImageSelector';
import SummarizeButton from './SummarizeButton';

const SelectContainer = (props) => {
  useEffect(() => {
    props.summaryTextUpdater('');
  }, []);

  return (
    <>
      <TextHolder style={{fontSize: 'xx-large', width: '40%', textAlign: 'center', marginTop: '50px' }} />
      <ImageSelector />
      <SummarizeButton stateChanger={props.stateChanger} summaryTextUpdater={props.summaryTextUpdater} />
    </>
  );
}

export default SelectContainer;
