import React from 'react';
import styled from 'styled-components';
import home from './../assets/home.png';

const Container = styled.div`
  height: 40px;
  width: 100px;
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

const HomeButton = (props) => {
  return (
    <Container onClick={()=> props.stateChanger(0)}>
      <img style={{ height: '24px', width: '24px' }} src={home} alt="Home Icon" />
      <Text>Home</Text>
    </Container>
  );
};

export default HomeButton;
