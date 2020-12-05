import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("https://thedevcouple.com/wp-content/uploads/2017/10/Interview-React-2.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #90B7B6;
`;

export default function Hero({ children }) {
  return (
    <StyledImage fluid>
      {children}
    </StyledImage>
  );
}
