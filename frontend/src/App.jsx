import React, { useState } from 'react';
import styled from 'styled-components';
import LogoContainer from './components/LogoContainer';
import SummaryContainer from './components/SummaryContainer';
import LoaderContainer from './components/LoaderContainer';
import SelectContainer from './components/SelectContainer';
import IntializeContainer from './components/IntalizeContainer';

const App = () => {
  const [container, setContainer] = useState(2);
  const [summaryText, setSummaryText] = useState('hello! welcome to snap summary');

  return (
    <> 
      <IntializeContainer />
      <LogoContainer />
        <CustomDiv>
        {container === 0 &&  <SelectContainer stateChanger = {setContainer} summaryTextUpdater = {setSummaryText}/>}
        {container === 1 && <LoaderContainer  stateChanger = {setContainer} />}
        {container === 2 && <SummaryContainer  stateChanger = {setContainer} summaryText = {summaryText} />}
      </CustomDiv>
    </>
  );
};

const CustomDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
