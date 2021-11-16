import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding-top: 10%;
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #0414a7;
  margin-bottom: 50px;
`;

const Background = styled.span`
  background: #aaaaaa;
  padding: 0 15px 2px 13px;
`;

function Unauthorised() {
  return (
    <Container>
      <Title>
        <Background>Unauthorised</Background>
      </Title>
      <p>You tried to access /admin without login in.</p>
      <p>
        <a href="/login">Click here to login</a>
      </p>
    </Container>
  );
}

export default Unauthorised;
