import React from 'react';
import HomeButton from './HomeButton';
import './../SummaryContainer.css'; 
import MailButton from './MailButton';
import DownloadButton from './DownloadButton';

const SummaryContainer = (props) => {
  return (
    <div style={{ display: 'flex', width: '60vw', flexDirection: 'column' }}>
      <div style={{ width: '102%', display: 'flex', justifyContent: 'space-between' }}>
        <HomeButton stateChanger={props.stateChanger} />
        <div style={{ fontSize: 'xx-large' }}>Generated Summary !</div>
        <DownloadButton/>
        <MailButton stateChanger={props.stateChanger} summaryText={props.summaryText} />
        
      </div>
      <pre className="summary-content" style={{ whiteSpace: 'pre-wrap' }}>
        {props.summaryText}
      </pre>
    </div>
  );
};

export default SummaryContainer;
