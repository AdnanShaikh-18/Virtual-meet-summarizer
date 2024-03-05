import React from 'react';
import styled from 'styled-components';
import gmail from './../assets/gmail.png';

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
    background-color: red;
  }
`;

const Text = styled.div`
  font-size: larger;
  margin-left: 10px;
`;

const MailButton = (props) => {
  const emailMessage = encodeURIComponent(props.summaryText || '');

  const sendEmail = () => {
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&body=${emailMessage}`;
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <Container onClick={sendEmail}>
      <img style={{ height: '24px', width: '24px' }} src={gmail} alt="Gmail Icon" />
      <Text>Email</Text>
    </Container>
  );
};

export default MailButton;
