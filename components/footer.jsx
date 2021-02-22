import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  bottom: 0;
  position: fixed;
  width: 100vw;
  background-color: #222129;
  color: white;
`;

const Content = styled.div`
  background-color: #222129;
  text-align: center;
  margin-top: 0.2em;
  padding: 0.5em;
  font-size: 0.7em;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        Comparison of the Javascript Frameworks: Angular, React, Vue - Carsten Clauss
      </Content>
    </Wrapper>
  );
}
