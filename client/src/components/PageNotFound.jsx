import React from 'react';
import Error from '../public/404.svg';
import styled from '@emotion/styled';

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top: 5%;
`;

const Body = styled.div`
  text-align: center;
`;

const Home = styled.a`
display: block;
margin: 50px auto;
width: 10%;
color: gray;
padding-top: 0px;

}
`;

const Para = styled.p`
  padding-top: 10px;
  height: 10px;
`;

function PageNotFound() {
  return (
    <Body>
      <Img src={Error} alt="404 error"></Img>
      <Para>Seems like this path doesn't exist :(</Para>
      <Home href="/">Go back</Home>
    </Body>
  );
}

export default PageNotFound;
