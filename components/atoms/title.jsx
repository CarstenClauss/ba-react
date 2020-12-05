import React from 'react';
import styled from 'styled-components';

const H1Styled = styled.h1`
  font-size: 10em;
  text-align: left;
  color: white;
  margin-right: auto;
  padding-left: 0.2em;
`;

export default function Title({ children }) {
  return (
    <H1Styled>
      {children}
    </H1Styled>
  );
}
