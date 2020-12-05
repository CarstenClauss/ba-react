import React from 'react';
import styled from 'styled-components';
import Title from './atoms/title';

import Hero from './molecule/hero';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Opener() {
  return (
    <Wrapper>
      <Hero>
        <Title>
          REACT
        </Title>
      </Hero>
    </Wrapper>
  );
}
