import React from 'react';
import styled from 'styled-components';
import Title from './atoms/title';

import Hero from './molecule/hero';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Opener(props) {
  const { children } = props;

  return (
    <Wrapper>
      <Hero>
        <Title>
          {children}
        </Title>
      </Hero>
    </Wrapper>
  );
}
